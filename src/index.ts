import {CALangLexer} from "../grammar/CALangLexer";
import {
    ArgContext,
    AssemblyContext,
    AttrContext,
    CALangParser,
    CodeBlockContext,
    CssRuleContext,
    InstructionContext,
    LitBooleanContext,
    LitNumberContext,
    LitStringContext,
    PropContext,
    RegContext,
    RegQueryContext,
    SymContext
} from "../grammar/CALangParser";
import {CharStreams, CommonTokenStream} from "antlr4ts";
import fs from "fs";
import yargs from "yargs";
import path from "path";
import * as http from "http";

yargs
    .command("$0 <input>", "",
        yargs => yargs
            .options({
                watch: {alias: "w", type: "boolean", default: false, describe: "Watch file and recompile on changes"},
                dev: {
                    alias: "d",
                    type: "boolean",
                    default: false,
                    describe: "Doesn't output file, instead runs a dev server"
                },
                out: {
                    alias: "o",
                    type: "string",
                    default: null,
                    describe: "File output, default is replace extension with .html"
                }
            })
            .positional("input", {
                type: "string",
                demandOption: true
            }),
        (argv) => {

            let devCode = "";

            function compile() {
                console.log("Compiling...");
                let inputStream = CharStreams.fromString(fs.readFileSync(argv.input, "utf8"));
                let lexer = new CALangLexer(inputStream);
                let tokenStream = new CommonTokenStream(lexer);
                let parser = new CALangParser(tokenStream);

                function _reg(arg: ArgContext) {
                    if (!(arg instanceof RegContext)) throw Error("Expected reg");
                    const text = arg.Ident()?.text;
                    if (text && text.match(/arg(\d+)/)) {
                        const [, idx] = text.match(/arg(\d+)/);
                        return `$args[${idx}]`;
                    }
                    if (text === "this") {
                        return "this";
                    }
                    return "$" + (text || "");
                }

                function _sym(arg: ArgContext) {
                    if (!(arg instanceof SymContext)) throw Error("Expected sym");
                    return arg.Ident().text;
                }

                function _regOrLit(arg: ArgContext) {
                    if (arg instanceof RegContext) {
                        return _reg(arg);
                    } else {
                        return _lit(arg);
                    }
                }

                function _litNumber(arg: ArgContext) {
                    if (!(arg instanceof LitNumberContext)) throw Error("Expected number");
                    return arg.text;
                }

                function _lit(arg: ArgContext) {
                    if (arg instanceof CodeBlockContext) return _codeBlock(arg.instruction());
                    if (!(arg instanceof LitNumberContext ||
                        arg instanceof LitStringContext ||
                        arg instanceof LitBooleanContext)) throw Error("Expected number, string or code.");
                    return arg.text;
                }

                function _arg(arg: ArgContext) {
                    if (arg instanceof RegContext) return _reg(arg);
                    if (arg instanceof SymContext) return _sym(arg);
                    if (arg instanceof LitNumberContext) return _lit(arg);
                    if (arg instanceof LitBooleanContext) return _lit(arg);
                    if (arg instanceof LitStringContext) return _lit(arg);
                    if (arg instanceof CodeBlockContext) return _codeBlock(arg.instruction());
                    throw Error();
                }

                function _codeBlock(instructions: InstructionContext[]) {
                    var r = "function() {";
                    r += `var $,$$=[],$args=arguments;`;

                    let defer: Array<() => void> = [];

                    const opcodes: Record<string, (args: ArgContext[]) => void> = {
                        lea([reg, sym]) {
                            r += `${_reg(reg)}=${_sym(sym)};`;
                        },
                        ldc([reg, lit]) {
                            r += `${_reg(reg)}=${_lit(lit)};`;
                        },
                        mov([dst, src]) {
                            r += `${_reg(dst)}=${_reg(src)};`;
                        },
                        get([dst, src, sym]) {
                            r += `${_reg(dst)}=${_reg(src)}.${_sym(sym)};`;
                        },
                        set([src, dst, sym]) {
                            r += `${_reg(dst)}.${_sym(sym)}=${_reg(src)};`;
                        },

                        psh([regOrImm]) {
                            r += `$$.push(${_regOrLit(regOrImm)});`;
                        },
                        pop([reg]) {
                            r += `${_reg(reg)}=$$.pop();`;
                        },

                        jsr([res, reg, cnt]) {
                            r += `${_reg(res)}=${_reg(reg)}.apply(null,$$.splice(-${_litNumber(cnt)}));`;
                        },
                        jfn([res, reg, sym, cnt]) {
                            r += `${_reg(res)}=${_reg(reg)}.${_sym(sym)}.apply(${_reg(reg)},$$.splice(-${_litNumber(cnt)}));`;
                        },
                        ctr([reg]) {
                            r += `${_reg(reg)}=(function(c) {`;
                            r += "return function(){";
                            r += `return Reflect.construct(c, arguments)`;
                            r += "}";
                            r += `})(${_reg(reg)});`
                        },
                        ret([resOrImm]) {
                            r += `return ${_regOrLit(resOrImm)};`;
                        },

                        dbg([regOrImm]) {
                            r += `console.log(${_regOrLit(regOrImm)});`;
                        },
                    };

                    const ops = {
                        add: "+", sub: "-", mul: "*", div: "/",
                        mod: "%", xor: "^", and: "&", bor: "|",
                    };
                    for (const [name, op] of Object.entries(ops)) {
                        opcodes[name] = ([reg, regOrImm]) => {
                            r += `${_reg(reg)}${op}=${_regOrLit(regOrImm)};`;
                        };
                    }

                    const uops = {
                        not: "!", inv: "~", neg: "-"
                    };
                    for (const [name, op] of Object.entries(uops)) {
                        opcodes[name] = ([reg]) => {
                            r += `${_reg(reg)}=${op}${_reg(reg)};`;
                        };
                    }

                    const bops = {
                        beq: "==", bne: "!=", bgt: ">", blt: "<", bge: ">=", ble: "<="
                    };
                    for (const [name, op] of Object.entries(bops)) {
                        opcodes[name] = ([reg, regOrImm]) => {
                            r += `if(!(${_reg(reg)}${op}${_regOrLit(regOrImm)})){`;
                            defer.push(() => r += "}");
                        };
                    }


                    for (const instruction of instructions) {
                        const currDefer = defer;
                        defer = [];
                        if (instruction instanceof AssemblyContext) {
                            const opcode = instruction.Mnemonic();
                            let writer = opcodes[opcode.symbol.text];
                            if (!writer) console.error("Missing writer for " + opcode.symbol.text);
                            writer(instruction.arg());
                        } else if (instruction instanceof CssRuleContext) {
                            const query = instruction.cssQuery();
                            if (query instanceof RegQueryContext) {
                                r += `[${query.Ident().map(it => "$" + it.text).join(",")}]`;
                            } else {
                                r += `document.querySelectorAll(${JSON.stringify(query.text)})`;
                            }

                            r += ".forEach(function(e){";

                            const attrs = instruction.cssProp().filter((it): it is AttrContext => it instanceof AttrContext);
                            const props = instruction.cssProp().filter((it): it is PropContext => it instanceof PropContext);

                            for (const attr of attrs) {
                                r += `e.${attr.Ident().text}=${_arg(attr.arg())};`;
                            }

                            for (const prop of props) {
                                r += `e.style[${JSON.stringify(prop.Ident().text)}]=${_arg(prop.arg())};`;
                            }

                            r += "});";
                        }

                        currDefer.forEach(it => it());
                    }

                    r += "}";
                    return r;
                }

                try {
                    const program = parser.program();
                    const code = _codeBlock(program.instruction());
                    const html = `<html><body><script>(${code})();</script></body></html>`;

                    if (argv.dev) {
                        devCode = html;
                    } else {
                        let outPath = argv.out;
                        if (!outPath) {
                            outPath = path.join(path.dirname(argv.input), path.basename(argv.input, path.extname(argv.input)) + ".html");
                        }
                        console.log("Writing to: " + outPath);
                        fs.writeFileSync(outPath, html);
                    }
                } catch (ex) {
                    console.error(ex);
                }
            }

            if (argv.dev) {
                http.createServer((req, res) => {
                    res.setHeader("Content-Type", "text/html");
                    res.write(devCode);
                    res.end();
                }).listen(3000);
                console.log("Dev server listening on http://127.0.0.1:3000");
            }

            compile();

            if (argv.watch) {
                fs.watch(argv.input, compile);
            }
        })
    .help()
    .argv;