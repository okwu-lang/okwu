import error from "./error.js";

export default function (code) {
    var codesplit = code.split ("\n");
    
    for (var i=0;i<codesplit.length;i++) {
        if (codesplit[i].trim().endsWith(";") || codesplit[i].trim().endsWith("{") || codesplit[i].trim().endsWith("}")) {
            continue;
        } else {
            error("semiColonMissing", codesplit[i], i + 1);
        }
    }
}