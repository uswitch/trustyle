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
exports.Arrow = function (_a) {
    var color = _a.color, _b = _a.direction, direction = _b === void 0 ? 'up' : _b, size = _a.size;
    return (theme_ui_1.jsx("svg", { sx: __assign(__assign(__assign({ display: 'block' }, st.rotate(direction)), st.size(size)), { fill: color }), viewBox: "0 0 120 120" },
        theme_ui_1.jsx("path", { fillRule: "evenodd", d: "M 69.00383,118.24532 V 25.238146 L 109.05606,60.91003 119.38664,50.713297 66.668704,3.7571812 C 63.838543,1.2349911 59.418295,1.1741049 56.508132,3.6119106 L 0.45000101,50.567955 10.440558,61.055301 54.002991,24.567745 V 118.2454 Z" })));
};
//# sourceMappingURL=arrow.js.map