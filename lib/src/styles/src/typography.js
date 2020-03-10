"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var colors_1 = require("./colors");
var utils_1 = require("./utils");
exports.defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif';
exports.heading2 = core_1.css({
    fontFamily: exports.defaultFontFamily,
    fontSize: utils_1.pxToRem(24),
    fontWeight: 600,
    lineHeight: '1.23',
    letterSpacing: 'normal',
    color: colors_1.black
});
exports.heading3 = core_1.css({
    fontFamily: exports.defaultFontFamily,
    fontSize: utils_1.pxToRem(18),
    fontWeight: 600,
    lineHeight: '1.28',
    letterSpacing: '-0.5px',
    color: colors_1.black
});
exports.label = core_1.css({
    fontFamily: exports.defaultFontFamily,
    fontSize: utils_1.pxToRem(16),
    fontWeight: 600,
    lineHeight: '1.33',
    letterSpacing: 'normal',
    color: colors_1.black
});
exports.subheading = core_1.css({
    fontFamily: exports.defaultFontFamily,
    fontSize: utils_1.pxToRem(17),
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.33,
    letterSpacing: 'normal',
    color: colors_1.battleshipGrey
});
exports.inputFontSize = 16;
exports.inputLineHeight = 1.33;
exports.input = core_1.css({
    fontFamily: exports.defaultFontFamily,
    fontSize: utils_1.pxToRem(exports.inputFontSize),
    fontWeight: 'normal',
    lineHeight: exports.inputLineHeight,
    letterSpacing: 'normal',
    color: colors_1.black
});
exports.text = core_1.css({
    fontFamily: exports.defaultFontFamily,
    fontSize: utils_1.pxToRem(16),
    fontWeight: 'normal',
    lineHeight: '1.43',
    letterSpacing: 'normal',
    color: colors_1.battleshipGrey
});
exports.small = core_1.css({
    fontFamily: exports.defaultFontFamily,
    fontSize: utils_1.pxToRem(14),
    fontWeight: 'normal',
    lineHeight: '1.29',
    letterSpacing: 'normal',
    color: colors_1.battleshipGrey
});
exports.linkText = core_1.css({
    fontFamily: exports.defaultFontFamily,
    color: colors_1.cerulean,
    fontSize: utils_1.pxToRem(16),
    fontWeight: 600,
    textDecoration: 'underline',
    '&:visited': {
        color: colors_1.cerulean
    }
});
exports.alertText = core_1.css({
    fontFamily: exports.defaultFontFamily,
    fontSize: utils_1.pxToRem(16),
    lineHeight: 1.38,
    letterSpacing: 'normal',
    color: colors_1.white
});
exports.noWrap = core_1.css({
    whiteSpace: 'nowrap'
});
//# sourceMappingURL=typography.js.map