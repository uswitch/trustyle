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
exports.Email = function (_a) {
    var color = _a.color, size = _a.size;
    return (theme_ui_1.jsx("svg", { sx: __assign(__assign({ display: 'block' }, st.size(size)), { fill: color, stroke: color }), viewBox: "0 0 48 48" },
        theme_ui_1.jsx("path", { d: "M45.494 0A2.507 2.507 0 0 1 48 2.506v29.65a2.506 2.506 0 0 1-2.506 2.505H2.506A2.506 2.506 0 0 1 0 32.155V2.506A2.507 2.507 0 0 1 2.506 0h42.988zm-.84 3.346H3.346v27.97h41.308V3.346zM8.391 6.908l14.632 11.91c.604.491 1.471.49 2.073-.003L39.641 6.911 41.76 9.5 27.215 21.405a4.987 4.987 0 0 1-6.304.008L6.279 9.503 8.39 6.908z", transform: "translate(0 6)" })));
};
//# sourceMappingURL=email.js.map