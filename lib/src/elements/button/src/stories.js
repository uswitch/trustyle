"use strict";
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
var src_1 = require("../../icon/src");
var _1 = require("./");
var Spacer = function () { return core_1.jsx("div", { css: core_1.css({ minHeight: 20 }) }); };
exports.default = {
    title: 'Elements|Button'
};
var sizeOptions = {
    Large: 'large',
    Small: 'small'
};
exports.AllVariants = function () { return (core_1.jsx("div", { css: core_1.css({ padding: addon_knobs_1.number('Padding', 10) }) }, theme_selector_1.default() &&
    Object.keys(theme_selector_1.default().buttons.variants).map(function (key, index) { return (core_1.jsx(React.Fragment, { key: index },
        core_1.jsx(_1.Button, { variant: key, disabled: addon_knobs_1.boolean('Disabled', false), onClick: addon_actions_1.action(key + "-click"), size: addon_knobs_1.select('Sizes', sizeOptions, 'large') },
            addon_knobs_1.text(key + " label", key + " button"),
            key.match('icon') && (core_1.jsx(src_1.Icon, { color: theme_selector_1.default().colors.primary, direction: "right", glyph: "caret", size: 20 }))),
        core_1.jsx(Spacer, null),
        core_1.jsx(_1.Button, { variant: key, disabled: addon_knobs_1.boolean('Disabled', false), onClick: addon_actions_1.action(key + "-click"), iconPosition: "right", size: addon_knobs_1.select('Sizes', sizeOptions, 'large') },
            addon_knobs_1.text(key + " label", key + " button"),
            core_1.jsx(src_1.Icon, { color: theme_selector_1.default().colors.primary, direction: "right", glyph: "caret", size: 20 })),
        core_1.jsx(Spacer, null),
        core_1.jsx(_1.Button, { variant: key, disabled: addon_knobs_1.boolean('Disabled', false), onClick: addon_actions_1.action(key + "-click"), iconPosition: "left", size: addon_knobs_1.select('Sizes', sizeOptions, 'large') },
            core_1.jsx(src_1.Icon, { color: theme_selector_1.default().colors.primary, direction: "right", glyph: "caret", size: 20 }),
            addon_knobs_1.text(key + " label", key + " button")),
        core_1.jsx(Spacer, null),
        core_1.jsx(_1.Button, { variant: key, inverse: true, disabled: addon_knobs_1.boolean('Disabled', false), onClick: addon_actions_1.action(key + "-click") }, "inverse " + key + " button",
            key.match('icon') && (core_1.jsx(src_1.Icon, { color: theme_selector_1.default().colors.primary, direction: "right", glyph: "caret", size: 20 }))),
        core_1.jsx(Spacer, null))); }))); };
exports.PrimaryVariant = function () { return (core_1.jsx(_1.Button, { variant: "primary" }, "Primary button")); };
exports.SecondaryVariant = function () { return (core_1.jsx(_1.Button, { variant: "secondary" }, "Primary button")); };
exports.PrimaryDisabledVariant = function () { return (core_1.jsx(_1.Button, { variant: "primary", disabled: true }, "Primary button")); };
exports.SecondaryDisabledVariant = function () { return (core_1.jsx(_1.Button, { variant: "secondary", disabled: true }, "Primary button")); };
//# sourceMappingURL=stories.js.map