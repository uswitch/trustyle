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
exports.Home = function (_a) {
    var color = _a.color, size = _a.size;
    return (theme_ui_1.jsx("svg", { sx: __assign(__assign({ display: 'block' }, st.size(size)), { fill: color, stroke: color }), viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" },
        theme_ui_1.jsx("path", { d: "M7.87861 1.63215C7.48808 1.24162 6.85492 1.24163 6.46439 1.63215L1.60839 6.48816C1.2934 6.80314 1.51649 7.34171 1.96194 7.34171H3.17884C3.12062 7.46855 3.08817 7.60967 3.08817 7.75837V12.175C3.08817 12.7273 3.53588 13.175 4.08817 13.175H10.2548C10.8071 13.175 11.2548 12.7273 11.2548 12.175V7.75838C11.2548 7.60967 11.2224 7.46855 11.1642 7.34171H12.3811C12.8265 7.34171 13.0496 6.80314 12.7346 6.48815L7.87861 1.63215Z" })));
};
//# sourceMappingURL=home.js.map