"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var theme_ui_1 = require("theme-ui");
var trustyle_icon_1 = require("@uswitch/trustyle.icon");
var addon_knobs_1 = require("@storybook/addon-knobs");
var _1 = __importDefault(require("./"));
var variants = ['base', 'light'];
exports.default = {
    title: 'Elements|Breadcrumbs'
};
var crumbs = [
    {
        fields: {
            path: '/',
            displayText: 'Home'
        }
    },
    {
        fields: {
            path: '/gas-electricity/',
            displayText: 'Gas & Electricity'
        }
    },
    {
        fields: {
            path: '/gas-electricity/guides',
            displayText: 'Guides'
        }
    }
];
exports.ExampleWithTitle = function () {
    var variant = addon_knobs_1.select('Variant', variants, 'base');
    return (theme_ui_1.jsx(_1.default, { crumbs: crumbs, title: "Understanding energy bills and electricity bills - FAQs and more", variant: variant }));
};
exports.ExampleWithoutTitle = function () {
    var variant = addon_knobs_1.select('Variant', variants, 'base');
    return theme_ui_1.jsx(_1.default, { crumbs: crumbs, variant: variant });
};
exports.NoCrumbsAndTitle = function () {
    var variant = addon_knobs_1.select('Variant', variants, 'base');
    return (theme_ui_1.jsx(_1.default, { crumbs: [], title: "Understanding energy bills and electricity bills - FAQs and more", variant: variant }));
};
exports.NoCrumbsAndNoTitle = function () {
    var variant = addon_knobs_1.select('Variant', variants, 'base');
    return theme_ui_1.jsx(_1.default, { crumbs: [], variant: variant });
};
exports.AllWithCustomSeparator = function () {
    var variant = addon_knobs_1.select('Variant', variants, 'base');
    var separator = (theme_ui_1.jsx("span", { sx: {
            display: 'inline-block',
            width: '0.9em'
        } },
        theme_ui_1.jsx(trustyle_icon_1.Icon, { glyph: "caret", direction: "right", color: "#6F7175" })));
    var backIcon = (theme_ui_1.jsx("span", { sx: {
            display: 'inline-block',
            width: '0.9em'
        } },
        theme_ui_1.jsx(trustyle_icon_1.Icon, { glyph: "caret", direction: "left", color: "#000000" })));
    return (theme_ui_1.jsx(_1.default, { crumbs: crumbs, title: "Understanding energy bills and electricity bills - FAQs and more", customSeparator: separator, customBackIcon: backIcon, variant: variant }));
};
exports.NothingWithCustomSeparator = function () {
    var variant = addon_knobs_1.select('Variant', variants, 'base');
    var separator = (theme_ui_1.jsx("span", { sx: {
            display: 'inline-block',
            width: '0.9em'
        } },
        theme_ui_1.jsx(trustyle_icon_1.Icon, { glyph: "caret", direction: "right", color: "#6F7175" })));
    var backIcon = (theme_ui_1.jsx("span", { sx: {
            display: 'inline-block',
            width: '0.9em'
        } },
        theme_ui_1.jsx(trustyle_icon_1.Icon, { glyph: "caret", direction: "left", color: "#000000" })));
    return (theme_ui_1.jsx(_1.default, { crumbs: [], customSeparator: separator, customBackIcon: backIcon, variant: variant }));
};
exports.CustomHomeIcon = function () {
    var variant = addon_knobs_1.select('Variant', variants, 'base');
    var homeIcon = 'Uswitch.com';
    return (theme_ui_1.jsx(_1.default, { crumbs: crumbs, title: "Understanding energy bills and electricity bills - FAQs and more", customHomeIcon: homeIcon, variant: variant }));
};
//# sourceMappingURL=stories.js.map