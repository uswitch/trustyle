"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var _1 = __importDefault(require("./"));
react_1.storiesOf('Elements|Table', module).add('primary variant', function () { return (core_1.jsx("div", { css: core_1.css({ padding: addon_knobs_1.number('Padding', 10) }) },
    core_1.jsx(_1.default.wrap, null,
        core_1.jsx(_1.default.tr, null,
            core_1.jsx(_1.default.td, null, "First item"),
            core_1.jsx(_1.default.td, null, "Second item"),
            core_1.jsx(_1.default.td, null, "Third item")),
        core_1.jsx(_1.default.tr, null,
            core_1.jsx(_1.default.td, null, "First item"),
            core_1.jsx(_1.default.td, null, "Second item"),
            core_1.jsx(_1.default.td, null, "Third item"))),
    core_1.jsx(_1.default.wrap, null,
        core_1.jsx(_1.default.tr, null,
            core_1.jsx(_1.default.th, null, "First title"),
            core_1.jsx(_1.default.th, null, "Second title"),
            core_1.jsx(_1.default.th, null, "Third title")),
        core_1.jsx(_1.default.tr, null,
            core_1.jsx(_1.default.td, null, "First item"),
            core_1.jsx(_1.default.td, null, "Second item"),
            core_1.jsx(_1.default.td, null, "Third item")),
        core_1.jsx(_1.default.tr, null,
            core_1.jsx(_1.default.td, null, "First item"),
            core_1.jsx(_1.default.td, null, "Second item"),
            core_1.jsx(_1.default.td, null, "Third item"))))); });
//# sourceMappingURL=stories.js.map