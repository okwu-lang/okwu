import parse from "./parser.js";
import args from "./args.js";

function main() {
    process.chdir(process.cwd());
    args();
}