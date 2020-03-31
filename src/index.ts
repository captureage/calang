import {CALangLexer} from "../grammar/CALangLexer";
import {
    ArgContext,
    CALangParser,
    CodeBlockContext,
    LitNumberContext,
    LitStringContext,
    RegContext,
    SymContext
} from "../grammar/CALangParser";
import {CharStreams, CommonTokenStream} from "antlr4ts";


let inputStream = CharStreams.fromString(`
body {
  attr-onload: [
    lea $alert, #alert

    psh "hello world!"
    jsr $, $alert, 1
  ]
}
`);
let lexer = new CALangLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new CALangParser(tokenStream);

function _reg(arg: ArgContext) {
    if (!(arg instanceof RegContext)) throw Error("Expected reg");
    return "$" + (arg.Ident()?.text || "");
}

function _sym(arg: ArgContext) {
    if (!(arg instanceof SymContext)) throw Error("Expected sym");
    return arg.Ident().text;
}

function _regOrLit(arg: ArgContext) {
    if (arg instanceof RegContext) {
        return _reg(arg);
    } else if (arg instanceof LitNumberContext || arg instanceof LitStringContext) {
        return arg.text;
    }
}

function _litNumber(arg: ArgContext) {
    if (!(arg instanceof LitNumberContext)) throw Error("Expected number");
    return arg.text;
}

function _lit(arg: ArgContext) {
    if (!(arg instanceof LitNumberContext || arg instanceof LitStringContext)) throw Error("Expected number");
    return arg.text;
}

function compileCodeBlock(ctx: CodeBlockContext) {
    var r = "function() {";
    r += `var $,$$=[];`;

    const opcodes: Record<string, (args: ArgContext[]) => void> = {
        lea([reg, sym]) {
            r += `var ${_reg(reg)}=${_sym(sym)};`;
        },
        ldc([reg, lit]) {
            r += `var ${_reg(reg)}=${_lit(lit)};`;
        },
        mov([dst, src]) {
            r += `var ${_reg(dst)}=${_reg(src)};`;
        },
        get([dst, src, sym]) {
            r += `var ${_reg(dst)}=${_reg(src)}.${_sym(sym)};`;
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
        }
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

    for (const instruction of ctx.instruction()) {
        const opcode = instruction.Mnemonic();
        let writer = opcodes[opcode.symbol.text];
        if (!writer) console.error("Missing writer for " + opcode.symbol.text);
        writer(instruction.arg());
    }

    r += "}";
    return r;
}

const program = parser.program();

for (const statement of program.statement()) {
    const cssRule = statement.cssRule();
    const cssBody = cssRule.cssBody();
    for (const cssProp of cssBody.cssProp()) {
        const propName = cssProp.Ident();
        const cssValue = cssProp.cssValue();

        console.log(compileCodeBlock(cssValue.codeBlock()));
    }
}