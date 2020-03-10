"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var theme_ui_1 = require("theme-ui");
var theme_selector_1 = __importDefault(require("../../../utils/theme-selector"));
var _1 = require("./");
react_1.storiesOf('Elements|List', module)
    .addDecorator(function (Story) {
    return core_1.jsx(theme_ui_1.ThemeProvider, { theme: theme_selector_1.default() }, Story());
})
    .add('primary variant', function () { return (core_1.jsx("div", { css: core_1.css({ padding: addon_knobs_1.number('Padding', 10) }) },
    core_1.jsx(_1.List, { listType: "numeric" },
        core_1.jsx(_1.ListItem, null, "First item"),
        core_1.jsx(_1.ListItem, null, "Second item"),
        core_1.jsx(_1.ListItem, null, "Third item")),
    core_1.jsx(_1.List, { listType: "bullet" },
        core_1.jsx(_1.ListItem, null, "First item"),
        core_1.jsx(_1.ListItem, null, "Second item"),
        core_1.jsx(_1.ListItem, null, "Third item")),
    core_1.jsx(_1.List, { listType: "bullet" },
        core_1.jsx(_1.ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        core_1.jsx(_1.ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        core_1.jsx(_1.ListItem, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))); });
//# sourceMappingURL=stories.js.map