"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
exports.root = core_1.css([
    trustyle_styles_1.typography.small,
    {
        alignItems: 'center',
        backgroundColor: trustyle_styles_1.colors.offWhite,
        borderRadius: '3px',
        display: 'flex',
        height: trustyle_styles_1.pxToRem(64),
        justifyContent: 'space-between'
    }
]);
var editIconWidth = trustyle_styles_1.pxToRem(trustyle_styles_1.spacers.teal * 2 + 21);
exports.value = core_1.css({
    color: trustyle_styles_1.colors.black,
    overflow: 'hidden',
    padding: trustyle_styles_1.pxToRem(0, trustyle_styles_1.spacers.teal),
    textOverflow: 'ellipsis',
    width: "calc(100% - " + editIconWidth + ")"
});
exports.edit = core_1.css({
    background: 'none',
    border: 'none',
    borderLeft: "1px solid " + trustyle_styles_1.colors.slateGrey,
    cursor: 'pointer',
    height: trustyle_styles_1.pxToRem(28),
    padding: trustyle_styles_1.pxToRem(0, trustyle_styles_1.spacers.teal),
    width: editIconWidth,
    ':focus': {
        outline: "2px solid " + trustyle_styles_1.colors.azure
    },
    '&::-moz-focus-inner': { border: 0 }
});
exports.hidden = core_1.css({
    display: 'none'
});
//# sourceMappingURL=styles.js.map