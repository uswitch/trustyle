"use strict";
/** @jsx jsx */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var core_1 = require("@emotion/core");
var react_1 = require("@storybook/react");
var colors = __importStar(require("./colors"));
var types = __importStar(require("./typography"));
var swatch = core_1.css({
    padding: '10px',
    display: 'inline-block',
    fontFamily: 'monospace'
});
react_1.storiesOf('Legacy Styles|Colours', module).add('Swatches', function () { return (core_1.jsx(React.Fragment, null, Object.entries(colors).map(function (_a) {
    var key = _a[0], value = _a[1];
    return (core_1.jsx("div", { key: key, css: swatch },
        core_1.jsx("div", { css: core_1.css({
                backgroundColor: value,
                width: '100px',
                height: '100px'
            }) }),
        key));
}))); });
react_1.storiesOf('Legacy Styles|Typography', module).add('Types', function () { return (core_1.jsx(React.Fragment, null, Object.entries(types).map(function (_a) {
    var key = _a[0], value = _a[1];
    return (core_1.jsx("p", { key: key, css: value }, key));
}))); });
//# sourceMappingURL=stories.js.map