"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var _1 = require("./");
var max = 10;
var label = 'Current Value';
var defaultValue = 7;
var options = {
    range: true,
    min: 0,
    max: max,
    step: 1
};
react_1.storiesOf('Elements|Progress Bar', module).add('Example', function () {
    var current = addon_knobs_1.number(label, defaultValue, options);
    return (core_1.jsx("div", { css: core_1.css({ padding: addon_knobs_1.number('Padding', 10) }) },
        core_1.jsx(_1.ProgressBar, { current: current, max: max })));
});
//# sourceMappingURL=stories.js.map