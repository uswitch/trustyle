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
exports.Edit = function (_a) {
    var color = _a.color, size = _a.size;
    return (theme_ui_1.jsx("svg", { sx: __assign(__assign({ display: 'block' }, st.size(size)), { fill: color, stroke: color, strokeWidth: 0.1 }), viewBox: "0 0 21 21" },
        theme_ui_1.jsx("path", { d: "M7.579 10.958l-.245 2.968a.74.74 0 0 0 .245.574c.14.142.33.222.53.222h.039l2.995-.143a.708.708 0 0 0 .49-.213l8.154-8.255a.752.752 0 0 0 0-1.049l-2.775-2.8a.755.755 0 0 0-1.04 0L7.81 10.499a.74.74 0 0 0-.23.46zm1.441.396l7.453-7.513 1.73 1.746-7.418 7.508-1.897.099.132-1.84z" }),
        theme_ui_1.jsx("path", { d: "M18.551 11.534v6.514c0 .27-.217.488-.486.488H2.945a.487.487 0 0 1-.486-.488V2.952c0-.27.217-.488.486-.488h8.557V1H2.945A1.948 1.948 0 0 0 1 2.952v15.096C1 19.126 1.87 20 2.945 20h15.11A1.948 1.948 0 0 0 20 18.048v-6.514h-1.449z" })));
};
//# sourceMappingURL=edit.js.map