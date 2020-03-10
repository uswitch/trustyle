"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var react_1 = require("react");
var core_1 = require("@emotion/core");
var react_2 = require("@storybook/react");
var trustyle_grid_1 = require("@uswitch/trustyle.grid");
var src_1 = require("../../radio-input/src");
var _1 = require("./");
var valuesRadio = {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D'
};
var Form = function () {
    var _a = react_1.useState(''), val = _a[0], setVal = _a[1];
    var onChange = function (event) {
        setVal(event.target.value);
    };
    return (core_1.jsx(trustyle_grid_1.Container, { css: { marginTop: '8px' } },
        core_1.jsx(_1.Fieldset, { label: "Example radio buttons" },
            core_1.jsx(trustyle_grid_1.Row, null, Object.keys(valuesRadio).map(function (radioValue) { return (core_1.jsx(trustyle_grid_1.Column, { key: radioValue, s: 1 / 2, m: 1 / 4, l: 1 / 4 },
                core_1.jsx(src_1.RadioInput, { key: radioValue, name: "example", label: radioValue, checked: radioValue === val, onChange: onChange, value: radioValue }))); })))));
};
react_2.storiesOf('Elements|Fieldset', module).add('Example', function () {
    return core_1.jsx(Form, null);
});
//# sourceMappingURL=stories.js.map