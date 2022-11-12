export default function () {
    for (var i=0;i<process.argv.length;i++) {
        if (process.argv[i].endsWith("node") || process.argv[i].endsWith("/okwu")) {continue}

        if (process.argv[i] == "-h" || process.argv[i] == "--help") {
            showHelp();
            break;
        } else if (process.argv[i] == "-v" || process.argv[i] == "--version") {
            console.log("okwu: version 0.1.0")
        }
    }
}

function showHelp() {
    console.log("usage: okwu [-h | --help] [-v | --version]")
}