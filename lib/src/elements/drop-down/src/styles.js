"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
exports.icon = core_1.css({
    height: '15px',
    width: '15px',
    pointerEvents: 'none',
    position: 'absolute',
    right: trustyle_styles_1.pxToRem(16),
    top: 'calc(50% - 15px / 2)'
});
exports.root = function (hasError, hasFocus) {
    return core_1.css([
        trustyle_styles_1.typography.input,
        {
            appearance: 'none',
            backgroundColor: trustyle_styles_1.colors.white,
            border: "solid 1px " + trustyle_styles_1.colors.lightGreyBlue,
            borderRadius: '3px',
            boxSizing: 'border-box',
            color: trustyle_styles_1.colors.black,
            outline: 'none',
            padding: trustyle_styles_1.pxToRem(16, trustyle_styles_1.spacers.orange, 16, 16),
            verticalAlign: 'middle',
            width: '100%',
            '&:-moz-focusring': {
                color: 'transparent',
                textShadow: "0 0 0 " + trustyle_styles_1.colors.black
            },
            '&::-ms-expand': {
                display: 'none'
            }
        },
        trustyle_styles_1.inputs.emphasis(hasError, hasFocus)
    ]);
};
exports.container = core_1.css({
    position: 'relative'
});
//# sourceMappingURL=styles.js.map