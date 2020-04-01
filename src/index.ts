import fs from "fs";
import yargs from "yargs";
import path from "path";
import * as http from "http";
import {compile} from "./compile";

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

            const readCode = () => fs.readFileSync(argv.input, "utf8");

            if (argv.dev) {
                http.createServer((req, res) => {
                    res.setHeader("Content-Type", "text/html");
                    res.write(devCode);
                    res.end();
                }).listen(3000);
                console.log("Dev server listening on http://127.0.0.1:3000");
            }

            function doCompile() {
                const codeOutput = compile(readCode());
                const html = `<html><body><script>(${codeOutput})();</script></body></html>`;
                try {
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

            doCompile();

            if (argv.watch) {
                fs.watch(argv.input, doCompile);
            }
        })
    .help()
    .argv;