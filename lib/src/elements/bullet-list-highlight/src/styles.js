"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
exports.highlights = core_1.css({
    padding: trustyle_styles_1.pxToRem(0, trustyle_styles_1.spacers.green),
    listStyle: 'none'
});
exports.highlightBulletContent = core_1.css({
    paddingLeft: trustyle_styles_1.pxToRem(trustyle_styles_1.spacers.green)
});
exports.highlightBullet = core_1.css({
    backgroundColor: trustyle_styles_1.colors.azure,
    width: trustyle_styles_1.pxToRem(28),
    height: trustyle_styles_1.pxToRem(28),
    padding: trustyle_styles_1.pxToRem(trustyle_styles_1.spacers.pink),
    boxSizing: 'border-box',
    borderRadius: '100%',
    display: 'inline-block',
    marginTop: trustyle_styles_1.pxToRem(5)
});
exports.highlight = core_1.css([
    trustyle_styles_1.typography.text,
    {
        paddingBottom: trustyle_styles_1.pxToRem(trustyle_styles_1.spacers.teal),
        display: 'flex',
        alignItems: 'center'
    }
]);
//# sourceMappingURL=styles.js.map