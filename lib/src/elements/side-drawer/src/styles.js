"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
/* To Do
-Update designs for tablet/desktop when they’re received
*/
exports.transitionDuration = 400;
exports.background = core_1.css({
    left: 0,
    height: '100%',
    position: 'fixed',
    top: 0,
    transform: 'translateZ(0)',
    width: '100%',
    zIndex: 1002 // header from includes is 1001
});
var fromLeft = {
    entering: core_1.css({ transform: 'translateX(0%)' }),
    entered: core_1.css({ transform: 'translateX(0%)' }),
    exiting: core_1.css({ transform: 'translateX(-100%)' }),
    exited: core_1.css({ transform: 'translateX(-100%)' }),
    unmounted: core_1.css({ transform: 'translateX(0%)' })
};
var fromRight = {
    entering: core_1.css({ transform: 'translateX(0%)' }),
    entered: core_1.css({ transform: 'translateX(0%)' }),
    exiting: core_1.css({ transform: 'translateX(100%)' }),
    exited: core_1.css({ transform: 'translateX(100%)' }),
    unmounted: core_1.css({ transform: 'translateX(0%)' })
};
exports.transitionPositions = {
    left: fromLeft,
    right: fromRight
};
// mobile only!
exports.drawer = core_1.css({
    backgroundColor: trustyle_styles_1.colors.white,
    boxShadow: '0 0 10px 3px rgba(0, 0, 0, 0.1)',
    height: '100%',
    left: 0,
    overflowY: 'auto',
    position: 'fixed',
    transition: "transform " + exports.transitionDuration + "ms cubic-bezier(0.6, 0.05, 0.1, 0.99)",
    WebkitOverflowScrolling: 'touch',
    width: '100%'
});
exports.closeRow = core_1.css({
    display: 'flex',
    justifyContent: 'flex-end'
});
exports.closeBtn = core_1.css({
    backgroundColor: trustyle_styles_1.colors.white,
    border: 0,
    cursor: 'pointer',
    padding: trustyle_styles_1.pxToRem(trustyle_styles_1.spacers.teal),
    display: 'block'
});
var iconHeight = trustyle_styles_1.pxToRem(20);
var iconPaddingHeight = trustyle_styles_1.pxToRem(2 * trustyle_styles_1.spacers.teal);
exports.drawerBody = core_1.css({
    height: "calc(100% - " + iconHeight + " - " + iconPaddingHeight + ")"
});
//# sourceMappingURL=styles.js.map