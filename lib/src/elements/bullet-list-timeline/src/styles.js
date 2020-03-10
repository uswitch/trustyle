"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
var iconWidth = 36;
exports.highlights = core_1.css({
    padding: trustyle_styles_1.pxToRem(0, trustyle_styles_1.spacers.green, trustyle_styles_1.spacers.blue, trustyle_styles_1.spacers.green),
    listStyle: 'none',
    borderBottom: "1px solid " + trustyle_styles_1.colors.blueGrey
});
exports.highlightBulletContent = core_1.css({
    paddingLeft: trustyle_styles_1.pxToRem(trustyle_styles_1.spacers.green)
});
exports.highlightBulletIconContainer = core_1.css({
    display: 'flex',
    boxSizing: 'border-box',
    alignItems: 'center',
    padding: trustyle_styles_1.pxToRem(trustyle_styles_1.spacers.pink, 0),
    backgroundColor: trustyle_styles_1.colors.white
});
exports.highlightBullet = core_1.css({
    width: trustyle_styles_1.pxToRem(iconWidth),
    height: trustyle_styles_1.pxToRem(iconWidth)
});
exports.highlight = core_1.css([
    trustyle_styles_1.typography.text,
    {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: trustyle_styles_1.pxToRem(trustyle_styles_1.spacers.teal),
        position: 'relative',
        '&:before': {
            display: 'block',
            content: "''",
            position: 'absolute',
            'z-index': '-10',
            left: trustyle_styles_1.pxToRem(iconWidth / 2 - 1)
        }
    }
]);
var timelineBorder = "2px solid " + trustyle_styles_1.colors.blueGrey;
exports.first = core_1.css({
    '&:before': {
        border: timelineBorder,
        top: '50%',
        bottom: 0
    }
});
exports.middle = core_1.css({
    '&:before': {
        border: timelineBorder,
        top: 0,
        bottom: 0
    }
});
exports.last = core_1.css({
    '&:before': {
        border: timelineBorder,
        top: 0,
        bottom: '50%'
    }
});
//# sourceMappingURL=styles.js.map