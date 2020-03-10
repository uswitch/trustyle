"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
var defaultGutterWidths = [16];
var defaultContainerWidths = ['100%', 640, 1152];
var getWidthPercentageFromSizes = function (sizes) {
    return sizes.map(function (size) { return 100 * size + "%"; });
};
// Not currently used
// const getMsFlexPreferredSizes = (sizes: number[], paddings: string[]) =>
//   sizes.map((size, ind) => {
//     const padding = paddings[Math.min(ind, paddings.length - 1)]
//     return `calc(${100 * size}% - ${padding} * 2)`
//   })
exports.container = function (outerMargin, containerWidths, gutterWidths) {
    if (outerMargin === void 0) { outerMargin = ['0 auto']; }
    if (containerWidths === void 0) { containerWidths = defaultContainerWidths; }
    if (gutterWidths === void 0) { gutterWidths = defaultGutterWidths; }
    var paddings = gutterWidths.map(function (gw) { return gw + "px"; });
    return trustyle_styles_1.mq({
        boxSizing: 'border-box',
        position: 'relative',
        margin: outerMargin,
        maxWidth: containerWidths,
        width: __spreadArrays(['auto'], containerWidths.slice(1)),
        paddingLeft: paddings,
        paddingRight: paddings
    });
};
exports.row = function (centerX, topSpacing, bottomSpacing, gutterWidths) {
    if (centerX === void 0) { centerX = false; }
    if (topSpacing === void 0) { topSpacing = []; }
    if (bottomSpacing === void 0) { bottomSpacing = []; }
    if (gutterWidths === void 0) { gutterWidths = defaultGutterWidths; }
    var margins = gutterWidths.map(function (gw) { return "-" + gw / 2 + "px"; });
    return trustyle_styles_1.mq({
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        marginLeft: margins,
        marginRight: margins,
        marginTop: topSpacing,
        marginBottom: bottomSpacing,
        justifyContent: centerX ? 'center' : 'flex-start',
        flexWrap: 'wrap'
    });
};
exports.column = function (sizes, display, hasPaddingTop, hasPaddingBottom, gutterWidths) {
    if (sizes === void 0) { sizes = []; }
    if (display === void 0) { display = []; }
    if (hasPaddingTop === void 0) { hasPaddingTop = false; }
    if (hasPaddingBottom === void 0) { hasPaddingBottom = false; }
    if (gutterWidths === void 0) { gutterWidths = defaultGutterWidths; }
    var paddings = gutterWidths.map(function (gw) { return gw / 2 + "px"; });
    return trustyle_styles_1.mq({
        boxSizing: 'border-box',
        display: display,
        paddingLeft: paddings,
        paddingRight: paddings,
        paddingTop: hasPaddingTop ? paddings : [],
        paddingBottom: hasPaddingBottom ? paddings : [],
        width: getWidthPercentageFromSizes(sizes)
    });
};
//# sourceMappingURL=styles.js.map