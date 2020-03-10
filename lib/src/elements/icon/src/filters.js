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
exports.Filters = function (_a) {
    var color = _a.color, size = _a.size;
    return (theme_ui_1.jsx("svg", { viewBox: "0 0 21 21", sx: __assign(__assign({ display: 'block' }, st.size(size)), { fill: color, stroke: color, strokeWidth: 0.1 }) },
        theme_ui_1.jsx("path", { d: "m 8.4650847,14.830475 a 2.074,2.074 0 1 0 -4.148,0 2.074,2.074 0 0 0 4.147,0 z m -5.652,0.722 h -3.25799995 v -1.574 H 2.8410847 a 3.65,3.65 0 1 1 -0.028,1.575 z m 18.8250003,-1.575 v 1.575 h -9.417 v -1.574 h 9.417 z M -0.44491525,7.1494746 v -1.575 H 7.9880847 v 1.575 z m 17.92600025,-1.575 h 4.157 v 1.575 h -4.137 a 3.65,3.65 0 1 1 -0.02,-1.575 z m -1.48,0.833 a 2.074,2.074 0 1 0 -4.147,0 2.074,2.074 0 0 0 4.148,0 z" })));
};
//# sourceMappingURL=filters.js.map