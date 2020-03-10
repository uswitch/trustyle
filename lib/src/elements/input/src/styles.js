"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
exports.half = core_1.css({
    width: '50%'
});
exports.full = core_1.css({
    width: '100%'
});
var affix = core_1.css([
    trustyle_styles_1.typography.input,
    {
        margin: trustyle_styles_1.pxToRem(8, 0),
        padding: trustyle_styles_1.pxToRem(8, trustyle_styles_1.spacers.green),
        textAlign: 'center',
        boxSizing: 'border-box'
    }
]);
exports.prefix = function (hasError, hasFocus) {
    return core_1.css([
        affix,
        {
            color: trustyle_styles_1.inputs.matchCircumstance(hasError, hasFocus) || trustyle_styles_1.colors.lightGreyBlue,
            borderRight: "solid 1px " + (trustyle_styles_1.inputs.matchCircumstance(hasError, hasFocus) ||
                trustyle_styles_1.colors.lightGrey)
        }
    ]);
};
exports.suffix = function (hasError, hasFocus) {
    return core_1.css([
        affix,
        {
            color: trustyle_styles_1.inputs.matchCircumstance(hasError, hasFocus) || trustyle_styles_1.colors.lightGreyBlue,
            borderLeft: "solid 1px " + (trustyle_styles_1.inputs.matchCircumstance(hasError, hasFocus) ||
                trustyle_styles_1.colors.lightGrey)
        }
    ]);
};
//# sourceMappingURL=styles.js.map