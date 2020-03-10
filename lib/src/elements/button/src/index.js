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
Object.defineProperty(exports, "__esModule", { value: true });
var theme_ui_1 = require("theme-ui");
var color_1 = require("@theme-ui/color");
var invertTheme = function (theme, variant) {
    if (variant === void 0) { variant = {}; }
    var backgroundColor = variant.color;
    var color = variant.backgroundColor || 'white';
    var borderColor = color;
    var hoverColor = theme.colors[backgroundColor]
        ? color_1.darken(theme.colors[backgroundColor], '0.1')
        : null;
    return __assign(__assign({}, variant), { backgroundColor: backgroundColor,
        color: color,
        borderColor: borderColor, borderWidth: 2, borderStyle: 'solid', ':hover': {
            backgroundColor: hoverColor
        }, ':hover:not(:disabled)': {
            backgroundColor: hoverColor
        } });
};
exports.Button = function (_a) {
    var _b;
    var children = _a.children, _c = _a.disabled, disabled = _c === void 0 ? false : _c, variant = _a.variant, _d = _a.iconPosition, iconPosition = _d === void 0 ? null : _d, onClick = _a.onClick, _e = _a.size, size = _e === void 0 ? 'large' : _e, _f = _a.inverse, inverse = _f === void 0 ? false : _f, props = __rest(_a, ["children", "disabled", "variant", "iconPosition", "onClick", "size", "inverse"]);
    var theme = theme_ui_1.useThemeUI().theme;
    var variantStyle = (_b = theme.buttons) === null || _b === void 0 ? void 0 : _b.variants[variant];
    var chosenStyle = inverse ? invertTheme(theme, variantStyle) : variantStyle;
    return (theme_ui_1.jsx("button", __assign({ sx: __assign(__assign({ cursor: 'pointer', backgroundImage: 'none', fontFamily: 'base', fontSize: theme.buttons.base.btnSize
                ? theme.buttons.base.btnSize[size].fontSize
                : 'base', paddingX: theme.buttons.base.btnSize
                ? theme.buttons.base.btnSize[size].paddingX
                : 'sm', paddingY: theme.buttons.base.btnSize
                ? theme.buttons.base.btnSize[size].paddingY
                : 'base', height: theme.buttons.base.btnSize
                ? theme.buttons.base.btnSize[size].height
                : 'base', variant: "buttons.variants." + variant, justifyContent: 'center', alignItems: 'center' }, chosenStyle), (iconPosition
            ? {
                display: 'flex',
                justifyContent: iconPosition === 'left'
                    ? 'flex-start'
                    : iconPosition === 'right'
                        ? 'space-between'
                        : 'center'
            }
            : {})), disabled: disabled, type: onClick ? 'button' : 'submit', onClick: onClick }, props), children));
};
//# sourceMappingURL=index.js.map