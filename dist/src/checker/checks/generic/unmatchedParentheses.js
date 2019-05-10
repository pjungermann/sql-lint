"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkerResult_1 = require("../../checkerResult");
const check_1 = require("../check");
class UnmatchedParentheses extends check_1.Check {
    constructor() {
        super(...arguments);
        this.message = "Unmatched parentheses.";
    }
    check(query) {
        const content = query.getContent();
        const openParenMatches = (content.match(/\(/g) || []).length;
        const closedParenMatches = (content.match(/\)/g) || []).length;
        if (openParenMatches !== closedParenMatches) {
            const lineNumber = query.lines[0].num;
            return new checkerResult_1.CheckerResult(lineNumber, this.prefix + this.message);
        }
        return new checkerResult_1.CheckerResult(0, "");
    }
}
exports.UnmatchedParentheses = UnmatchedParentheses;
//# sourceMappingURL=unmatchedParentheses.js.map