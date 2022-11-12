export default function (type, code, line) {
    if (code.length > 15) {
        code = code.slice(-15);
    }
    var spaces = "";
    var i = 0;
    switch (type) {
        case "semiColonMissing":
            for(i in code.split("")) {
                spaces += " ";
            }
            console.error(`okwu: missing semicolon at line ${line}
${line} ...${code}
${spaces}     ^ here`)
    }
    process.exit(1)
}