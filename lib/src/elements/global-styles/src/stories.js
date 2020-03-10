"use strict";
/** @jsx jsx */
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
var React = __importStar(require("react"));
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var theme_ui_1 = require("theme-ui");
var core_1 = require("@emotion/core");
var theme_selector_1 = __importDefault(require("../../../utils/theme-selector"));
var swatch = {
    padding: '10px',
    display: 'inline-block',
    fontFamily: 'monospace',
    width: '100px',
    verticalAlign: 'top'
};
react_1.storiesOf('Global Styles|Colours', module).add('Swatches', function () { return (theme_ui_1.jsx("div", { css: core_1.css({ margin: '-10px' }) }, Object.entries(theme_selector_1.default().colors).map(function (_a) {
    var key = _a[0], value = _a[1];
    var swatchBlock = {
        backgroundColor: value,
        width: '100px',
        height: '100px',
        border: '1px #e2e2e2 solid'
    };
    return (theme_ui_1.jsx("div", { key: key, sx: swatch },
        theme_ui_1.jsx("div", { sx: swatchBlock }),
        key));
}))); });
var typeNames = {
    h1: 'Heading level 1',
    h2: 'Heading level 2',
    h3: 'Heading level 3',
    h4: 'Heading level 4',
    h5: 'Heading level 5',
    h6: 'Heading level 6',
    a: 'Anchor'
};
react_1.storiesOf('Global Styles|Typography', module).add('Types', function () {
    var overrides = {
        root: function (_a) {
            var children = _a.children;
            return theme_ui_1.jsx("p", null, children);
        },
        blockquote: function (_a) {
            var children = _a.children;
            return (theme_ui_1.jsx("blockquote", null,
                theme_ui_1.jsx("p", null, children)));
        },
        heading: null,
        table: null,
        th: null,
        td: null,
        tr: null
    };
    return (theme_ui_1.jsx(React.Fragment, null, Object.keys(theme_selector_1.default().styles).map(function (key) {
        var textValue = addon_knobs_1.text("Text " + key, typeNames[key] || key);
        var Comp = overrides[key] !== undefined ? overrides[key] : key;
        // @ts-ignore
        return Comp && theme_ui_1.jsx(Comp, { key: key }, textValue);
    })));
});
//# sourceMappingURL=stories.js.map