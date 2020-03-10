"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var typography_1 = require("./typography");
var colors_1 = require("./colors");
var utils_1 = require("./utils");
exports.inputInnerShadow = 'inset 0 2px 5px 0 rgba(0, 0, 0, 0.1)';
exports.matchCircumstance = function (hasError, hasFocus) {
    if (hasError)
        return colors_1.tomato;
    if (hasFocus)
        return colors_1.azure;
};
exports.emphasis = function (hasError, hasFocus) {
    var color = exports.matchCircumstance(hasError, hasFocus);
    if (!color)
        return null;
    return core_1.css({
        borderColor: color,
        boxShadow: utils_1.insetBorder(color)
    });
};
exports.keyboardInputContainer = function (hasError, hasFocus) {
    return core_1.css([
        {
            boxShadow: exports.inputInnerShadow,
            backgroundColor: colors_1.white,
            border: "solid 1px " + colors_1.lightGreyBlue,
            borderRadius: '3px',
            boxSizing: 'border-box',
            display: 'flex',
            position: 'relative'
        },
        exports.emphasis(hasError, hasFocus)
    ]);
};
var inputPadding = 16;
exports.keyboardInput = core_1.css([
    typography_1.input,
    {
        appearance: 'none',
        border: 'none',
        background: 'none',
        borderRadius: '3px',
        boxSizing: 'border-box',
        display: 'flex',
        flex: 1,
        height: utils_1.pxToRem(typography_1.inputLineHeight * typography_1.inputFontSize + inputPadding + inputPadding),
        padding: utils_1.pxToRem(inputPadding),
        position: 'relative',
        verticalAlign: 'middle',
        width: '100%',
        '&:focus': {
            outline: 'none'
        },
        '&:disabled': {
            outline: 'none',
            border: 'none',
            color: colors_1.battleshipGrey,
            background: colors_1.veryLightGrey
        }
    }
]);
//# sourceMappingURL=inputs.js.map