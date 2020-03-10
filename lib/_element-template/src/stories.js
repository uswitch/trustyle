"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var theme_ui_1 = require("theme-ui");
var addon_knobs_1 = require("@storybook/addon-knobs");
var _1 = __importDefault(require("./"));
exports.default = {
    title: 'Elements|MyComponent'
};
exports.ExampleWithKnobs = function () {
    var someText = addon_knobs_1.text('Some text', 'example');
    return theme_ui_1.jsx(_1.default, { someText: someText });
};
//# sourceMappingURL=stories.js.map