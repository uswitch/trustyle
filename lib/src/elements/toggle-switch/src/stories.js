"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var react_1 = require("react");
var theme_ui_1 = require("theme-ui");
var addon_actions_1 = require("@storybook/addon-actions");
var addon_knobs_1 = require("@storybook/addon-knobs");
var trustyle_utils_palette_1 = require("@uswitch/trustyle-utils.palette");
var theme_selector_1 = __importDefault(require("../../../utils/theme-selector"));
var assets_1 = require("./assets");
var _1 = __importDefault(require("./"));
exports.default = {
    title: 'Elements|Toggle Switch'
};
var icons = {
    checked: assets_1.checkedIcon,
    unchecked: assets_1.uncheckedIcon
};
exports.ExampleWithState = function () {
    var _a, _b;
    var _c = react_1.useState(true), toggleState = _c[0], setToggleState = _c[1];
    var handleOnChange = function () {
        var newState = !toggleState;
        setToggleState(newState);
        addon_actions_1.action('Toggle changed')(newState);
    };
    var applyPalette = addon_knobs_1.boolean('Apply palette?', false, 'Palette');
    return (theme_ui_1.jsx(react_1.Fragment, null,
        theme_ui_1.jsx(trustyle_utils_palette_1.PaletteProvider, { value: {
                featureColor: applyPalette
                    ? addon_knobs_1.color('featureColor', (_b = (_a = theme_selector_1.default().toggleSwitch) === null || _a === void 0 ? void 0 : _a.checked) === null || _b === void 0 ? void 0 : _b.backgroundColor, 'Palette')
                    : null
            } },
            theme_ui_1.jsx(_1.default, { "aria-label": "toggle-1", checked: toggleState, onChange: handleOnChange, icons: icons }),
            theme_ui_1.jsx("label", { sx: { marginLeft: 10 }, htmlFor: "toggle-1" }, toggleState ? 'On' : 'Off'))));
};
exports.ToggleOn = function () {
    return theme_ui_1.jsx(_1.default, { checked: true });
};
exports.ToggleOff = function () {
    return theme_ui_1.jsx(_1.default, { checked: false });
};
//# sourceMappingURL=stories.js.map