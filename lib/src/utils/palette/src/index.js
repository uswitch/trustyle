"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var theme_ui_1 = require("theme-ui");
var react_1 = require("react");
var sw = function (cases) { return function (prop) {
    var data = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        data[_i - 1] = arguments[_i];
    }
    var f = {}.hasOwnProperty.call(cases, prop) ? cases[prop] : cases.default;
    return f instanceof Function ? f.apply(void 0, data) : f;
}; };
var PaletteContext = react_1.createContext({});
exports.PaletteProvider = PaletteContext.Provider;
var createSx = function (palette, obj) {
    if (palette === void 0) { palette = {}; }
    if (obj === void 0) { obj = {}; }
    if (!obj) {
        return {};
    }
    return Object.entries(obj).reduce(function (acc, _a) {
        var key = _a[0], value = _a[1];
        return sw({
            object: function () {
                var _a;
                return (__assign(__assign({}, acc), (_a = {}, _a[key] = createSx(palette, value), _a)));
            },
            function: function () {
                var _a;
                return (__assign(__assign({}, acc), (_a = {}, _a[key] = value(palette), _a)));
            },
            default: function () {
                var _a;
                return (palette[value] ? __assign(__assign({}, acc), (_a = {}, _a[key] = palette[value], _a)) : acc);
            }
        })(typeof value);
    }, {});
};
exports.Palette = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.px, px = _b === void 0 ? {} : _b, props = __rest(_a, ["children", "className", "px"]);
    var palette = react_1.useContext(PaletteContext);
    var sx = createSx(palette, px);
    return (theme_ui_1.jsx(props.as, __assign({}, props, { className: "palette " + className, sx: { '&.palette': sx } }), children));
};
//# sourceMappingURL=index.js.map