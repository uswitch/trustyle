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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var React = __importStar(require("react"));
var core_1 = require("@emotion/core");
var addon_knobs_1 = require("@storybook/addon-knobs");
var addon_actions_1 = require("@storybook/addon-actions");
var theme_selector_1 = __importDefault(require("../../../utils/theme-selector"));
var _1 = require("./");
var Spacer = function () { return core_1.jsx("div", { css: core_1.css({ minHeight: 20 }) }); };
exports.default = {
    title: 'Elements|Button Link'
};
exports.AllVariants = function () { return (core_1.jsx("div", { css: core_1.css({ padding: addon_knobs_1.number('Padding', 10) }) }, theme_selector_1.default() &&
    Object.keys(theme_selector_1.default().buttons.variants).map(function (key, index) { return (core_1.jsx(React.Fragment, { key: index },
        core_1.jsx(_1.ButtonLink, { variant: key, href: "https://www.uswitch.com", target: "_blank" }, addon_knobs_1.text(key + " label", key + " link button")),
        core_1.jsx(Spacer, null))); }))); };
exports.PrimaryVariant = function () { return (core_1.jsx(_1.ButtonLink, { variant: "primary" }, "Primary link button")); };
exports.SecondaryVariant = function () { return (core_1.jsx(_1.ButtonLink, { variant: "secondary" }, "Primary link button")); };
var CustomLink = function (_a) {
    var to = _a.to, children = _a.children, rest = __rest(_a, ["to", "children"]);
    return (core_1.jsx("a", __assign({ onClick: addon_actions_1.action("Custom link component: " + to) }, rest), children));
};
exports.StyledComponentAsProp = function () { return (core_1.jsx(_1.ButtonLink, { variant: "primary", as: CustomLink, to: "special-url" },
    "Using ",
    core_1.jsx("em", null, "as"),
    " prop")); };
//# sourceMappingURL=stories.js.map