"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var react_1 = require("react");
var core_1 = require("@emotion/core");
var addon_knobs_1 = require("@storybook/addon-knobs");
var trustyle_utils_palette_1 = require("@uswitch/trustyle-utils.palette");
var theme_selector_1 = __importDefault(require("../../../utils/theme-selector"));
var _1 = __importDefault(require("./"));
exports.default = {
    title: 'Elements|Call Out'
};
exports.Example = function () {
    var titleText = addon_knobs_1.text("Call out title", "This is a call out");
    var textText = addon_knobs_1.text("Call out text", "Tempor incididunt ut labore et dolore magna aliqua. Sint id est dolor laborum. Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolores est unt.");
    var showIcon = addon_knobs_1.boolean('Show icon?', true);
    var iconGlyph = addon_knobs_1.select('Icon', ['arrow', 'caret', 'close', 'edit', 'email'], 'close');
    return (core_1.jsx(_1.default, { title: titleText, text: textText, icon: showIcon ? iconGlyph : undefined }));
};
exports.ExampleWithPalette = function () {
    var _a, _b;
    var titleText = addon_knobs_1.text("Call out title", "This is a call out", 'CallOut');
    var textText = addon_knobs_1.text('Call out text', 'Tempor incididunt ut labore et dolore magna aliqua. Sint id est dolor laborum. Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolores est unt.', 'CallOut');
    var showIcon = addon_knobs_1.boolean('Show icon?', true, 'CallOut');
    var iconGlyph = addon_knobs_1.select('Icon', ['arrow', 'caret', 'close', 'edit', 'email'], 'close', 'CallOut');
    var applyPalette = addon_knobs_1.boolean('Apply palette?', false, 'Palette');
    var accentColor = addon_knobs_1.color('accentColor', (_b = (_a = theme_selector_1.default().callOut) === null || _a === void 0 ? void 0 : _a.main) === null || _b === void 0 ? void 0 : _b.backgroundColor, 'Palette');
    return (core_1.jsx(react_1.Fragment, null,
        core_1.jsx(trustyle_utils_palette_1.PaletteProvider, { value: {
                accentColor: applyPalette ? accentColor : null
            } },
            core_1.jsx(_1.default, { title: titleText, text: textText, icon: showIcon ? iconGlyph : undefined }))));
};
//# sourceMappingURL=stories.js.map