"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var addon_knobs_1 = require("@storybook/addon-knobs");
var _1 = __importDefault(require("./"));
var variants = ['base', 'hero', 'hero-white-bg'];
exports.default = {
    title: 'Elements|CTA'
};
exports.Example = function () {
    var variant = addon_knobs_1.select('Variant', variants, 'base');
    var titleText = addon_knobs_1.text('CTA title', 'Find the best credit card for your needs');
    var textText = addon_knobs_1.text('CTA text', "Find the best credit card for you, whether you're looking for a 0% card for balance transfers or purchases or day to day spending and rewards.");
    var buttonText = addon_knobs_1.text('Button text', 'Compare credit cards');
    return (core_1.jsx(_1.default, { title: titleText, text: textText, buttonText: buttonText, buttonLink: "https://google.com", variant: variant }));
};
//# sourceMappingURL=stories.js.map