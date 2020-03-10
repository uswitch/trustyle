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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
exports.TileInput = function (_a) {
    var children = _a.children, label = _a.label, _b = _a.type, type = _b === void 0 ? 'radio' : _b, inputProps = __rest(_a, ["children", "label", "type"]);
    return (theme_ui_1.jsx("label", null,
        theme_ui_1.jsx("input", __assign({ sx: st.input(type), type: type }, inputProps)),
        theme_ui_1.jsx("span", { sx: st.container(type) },
            theme_ui_1.jsx("span", { sx: st.content },
                theme_ui_1.jsx("span", null),
                theme_ui_1.jsx("span", { sx: st.childrenWrapper }, children),
                label))));
};
//# sourceMappingURL=index.js.map