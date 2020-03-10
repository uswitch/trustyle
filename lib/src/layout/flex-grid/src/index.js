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
var React = __importStar(require("react"));
var theme_ui_1 = require("theme-ui");
var DEFAULT_GUTTER_SIZE = 'xs';
var getSpaceValue = function (key) { return function (theme) {
    if (theme === void 0) { theme = {}; }
    return theme.space[key];
}; };
var getNegativeSpaceValue = function (key) { return function (theme) {
    if (theme === void 0) { theme = {}; }
    return "-" + getSpaceValue(key)(theme) + "px";
}; };
var getGutterSize = function (theme) { var _a, _b, _c; return ((_c = (_b = (_a = theme) === null || _a === void 0 ? void 0 : _a.grid) === null || _b === void 0 ? void 0 : _b.sizes) === null || _c === void 0 ? void 0 : _c.gutter) || DEFAULT_GUTTER_SIZE; };
var mediaQueryFunction = function (data, fn) {
    if (Array.isArray(data)) {
        return data.map(fn);
    }
    return fn(data);
};
exports.Container = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.variant, variant = _c === void 0 ? 'lg' : _c, props = __rest(_a, ["children", "className", "variant"]);
    return theme_ui_1.jsx("div", __assign({ className: className, sx: {
            mx: 'auto',
            px: getGutterSize,
            variant: "grid.container." + variant
        } }, props), children);
};
exports.Row = function (_a) {
    var children = _a.children, _b = _a.cols, cols = _b === void 0 ? 12 : _b, _c = _a.direction, direction = _c === void 0 ? ['column', 'row', 'row'] : _c, _d = _a.className, className = _d === void 0 ? '' : _d, props = __rest(_a, ["children", "cols", "direction", "className"]);
    return theme_ui_1.jsx("div", __assign({ className: className, sx: {
            variant: "grid.row",
            mx: getNegativeSpaceValue('xs'),
            display: 'flex',
            flexDirection: direction
        } }, props), children.map(function (child) { return React.cloneElement(child, { cols: cols }); }));
};
exports.Col = function (_a) {
    var children = _a.children, _b = _a.cols, cols = _b === void 0 ? 12 : _b, span = _a.span, _c = _a.sx, sx = _c === void 0 ? {} : _c, props = __rest(_a, ["children", "cols", "span", "sx"]);
    return theme_ui_1.jsx("div", __assign({ sx: __assign(__assign({ variant: "grid.col", boxSizing: 'border-box', mx: getSpaceValue('xs'), mb: DEFAULT_GUTTER_SIZE, flexGrow: 1, flexShrink: 0, flexBasis: "auto", bg: 'red' }, (span ? {
            width: function (theme) { return mediaQueryFunction(span, function (spanValue, index) { return "calc(" + (spanValue / (Array.isArray(cols) ? cols[index] : cols)) * 100 + "% - " + getSpaceValue('sm')(theme) + "px)"; }); }
        } : {})), sx) }, props), children);
};
//# sourceMappingURL=index.js.map