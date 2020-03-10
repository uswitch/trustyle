"use strict";
/** @jsx jsx */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_1 = __importDefault(require("@emotion/styled"));
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
exports.Stack = styled_1.default.div(function (_a) {
    var spacing = _a.spacing;
    return trustyle_styles_1.mq({
        '& > *': {
            marginBottom: spacing.map(function (space) { return trustyle_styles_1.pxToRem(space); })
        },
        '& > *:last-child': {
            marginBottom: 0
        }
    });
});
exports.Inline = styled_1.default.div(function (_a) {
    var spacing = _a.spacing;
    return trustyle_styles_1.mq({
        '& > *': {
            display: 'inline',
            whiteSpace: 'nowrap',
            marginRight: spacing.map(function (space) { return trustyle_styles_1.pxToRem(space); })
        },
        '& > *:last-child': {
            marginRight: 0
        }
    });
});
//# sourceMappingURL=index.js.map