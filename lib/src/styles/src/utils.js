"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 16px is the browser default font size
exports.pxToRem = function () {
    var blocks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        blocks[_i] = arguments[_i];
    }
    return blocks.map(function (block) { return block / 16 + "rem"; }).join(' ');
};
// these will change with viewpoints
// all figures in px so they can be used for maths
exports.spacers = {
    pink: 8,
    green: 12,
    purple: 16,
    teal: 24,
    blue: 32,
    orange: 48,
    red: 56,
    white: 64,
    turquoise: 72,
    aqua: 80,
    darkPink: 88
    // Next one should be darkGreen, keep the convention
};
// Add an additional 1px of border, but superimposed on the interior of an
// element, so that it doesn’t affect its position or size.
exports.insetBorder = function (color) { return "inset 0 0 0 1px " + color; };
//# sourceMappingURL=utils.js.map