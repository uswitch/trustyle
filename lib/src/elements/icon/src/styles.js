"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
exports.icon = { display: 'block' };
exports.rotate = function (direction) {
    switch (direction) {
        case 'right':
            return { transform: 'rotate(0.25turn)' };
        case 'down':
            return { transform: 'rotate(0.5turn)' };
        case 'left':
            return { transform: 'rotate(0.75turn)' };
        default:
            return {};
    }
};
exports.size = function (size) {
    return size
        ? {
            height: trustyle_styles_1.pxToRem(size),
            width: trustyle_styles_1.pxToRem(size)
        }
        : {};
};
//# sourceMappingURL=styles.js.map