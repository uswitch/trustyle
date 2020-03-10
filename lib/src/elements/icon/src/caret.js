"use strict";
/** @jsx jsx */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var theme_ui_1 = require("theme-ui");
var st = __importStar(require("./styles"));
exports.Caret = function (_a) {
    var color = _a.color, _b = _a.direction, direction = _b === void 0 ? 'up' : _b, size = _a.size;
    return (theme_ui_1.jsx("svg", { sx: __assign(__assign(__assign({ display: 'block' }, st.rotate(direction)), st.size(size)), { fill: color }), viewBox: "0 0 120 120" },
        theme_ui_1.jsx("path", { d: "M 5.067303,79.355139 55.218287,26.773283 c 2.186148,-2.194309 3.091615,-2.969251 4.60071,-2.969251 1.509096,-0.0081 2.316669,0.774942 4.600711,3.018196 l 50.828042,53.348639 c 6.84396,7.227354 -3.27925,17.831823 -10.17214,10.661571 L 59.810835,43.21837 15.247593,89.98408 C 7.857094,97.733499 -2.2660959,87.120873 5.067303,79.338823 Z" })));
};
//# sourceMappingURL=caret.js.map