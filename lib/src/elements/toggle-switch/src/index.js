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
var trustyle_utils_palette_1 = require("@uswitch/trustyle-utils.palette");
var ToggleSwitch = function (_a) {
    var _b, _c;
    var checked = _a.checked, onChange = _a.onChange, icons = _a.icons, props = __rest(_a, ["checked", "onChange", "icons"]);
    var state = checked ? 'checked' : 'unchecked';
    return (theme_ui_1.jsx("div", { sx: { display: 'inline-block' } },
        theme_ui_1.jsx("input", __assign({ checked: checked, onChange: onChange }, props, { sx: {
                variant: 'srOnly'
            }, type: "checkbox" })),
        theme_ui_1.jsx(trustyle_utils_palette_1.Palette, { as: "div", role: "checkbox", tabIndex: 0, "aria-checked": checked, "aria-label": props['aria-label'], onClick: onChange, onKeyDown: onChange, sx: {
                width: 80,
                height: 40,
                padding: 4,
                borderWidth: 1,
                borderStyle: 'solid',
                borderRadius: '50vw',
                transition: 'background-color 400ms, border-color 400ms',
                variant: "toggleSwitch." + state
            }, px: {
                backgroundColor: checked ? 'featureColor' : null,
                borderColor: checked ? 'featureColor' : null
            } },
            theme_ui_1.jsx("div", { sx: {
                    width: 39,
                    height: 38,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderRadius: '50vw',
                    transition: 'transform 400ms, border-color 400ms',
                    transform: checked ? 'translateX(40px)' : 'translateX(0)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    variant: "toggleSwitch." + state + ".switch"
                } }, checked ? (_b = icons) === null || _b === void 0 ? void 0 : _b.checked : (_c = icons) === null || _c === void 0 ? void 0 : _c.unchecked))));
};
exports.default = ToggleSwitch;
//# sourceMappingURL=index.js.map