"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var react_1 = require("react");
var core_1 = require("@emotion/core");
var react_2 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var _1 = require("./");
var options = [
    { value: 'red', text: 'Red' },
    { value: 'blue', text: 'Blue' },
    { value: 'yellow', text: 'Yellow' }
];
var Spacer = function () { return core_1.jsx("div", { css: core_1.css({ minHeight: 20 }) }); };
var ColourSelect = function () {
    var _a = react_1.useState('red'), val = _a[0], setVal = _a[1];
    return (core_1.jsx(_1.DropDown, { name: "example", onBlur: function () { }, onChange: setVal, options: options, value: val }));
};
var FrozenColourSelect = function () {
    var _a = react_1.useState('red'), val = _a[0], setVal = _a[1];
    return (core_1.jsx(_1.DropDown, { freezable: true, name: "frozen-example", onBlur: function () { }, onChange: setVal, options: options, value: val }));
};
react_2.storiesOf('Elements|DropDown', module).add('example', function () { return (core_1.jsx("div", { css: core_1.css({ padding: addon_knobs_1.number('Padding', 10) }) },
    core_1.jsx(ColourSelect, null),
    core_1.jsx(Spacer, null),
    core_1.jsx(FrozenColourSelect, null),
    core_1.jsx(Spacer, null),
    core_1.jsx(_1.DropDown, { hasError: true, name: "withError", onBlur: function () { }, onChange: function () { }, options: [{ value: '', text: 'Incorrect' }], value: '' }))); });
//# sourceMappingURL=stories.js.map