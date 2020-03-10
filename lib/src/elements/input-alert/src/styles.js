"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
var arrowSize = 8;
exports.root = core_1.css([
    trustyle_styles_1.typography.alertText,
    {
        padding: trustyle_styles_1.spacers.green,
        marginTop: "calc(" + arrowSize + "px + " + trustyle_styles_1.pxToRem(trustyle_styles_1.spacers.green) + ")",
        position: 'relative',
        borderRadius: 3,
        '&:before': {
            position: 'absolute',
            content: "''",
            top: -arrowSize,
            width: 0,
            height: 0,
            borderLeft: arrowSize + "px solid transparent",
            borderRight: arrowSize + "px solid transparent",
            borderBottom: arrowSize + "px solid black"
        }
    }
]);
exports.notification = core_1.css({
    backgroundColor: trustyle_styles_1.colors.battleshipGrey,
    '&:before': {
        borderBottomColor: trustyle_styles_1.colors.battleshipGrey
    }
});
exports.alert = core_1.css({
    backgroundColor: trustyle_styles_1.colors.tomato,
    '&:before': {
        borderBottomColor: trustyle_styles_1.colors.tomato
    }
});
//# sourceMappingURL=styles.js.map