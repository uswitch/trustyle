"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var react_1 = require("react");
var core_1 = require("@emotion/core");
var react_2 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var trustyle_grid_1 = require("@uswitch/trustyle.grid");
var src_1 = require("../../fieldset/src");
var _1 = require("./.");
var initialValues = {
    a: false,
    b: false,
    c: false,
    d: false
};
var Form = function () {
    var slim = addon_knobs_1.boolean('Slim', false);
    var _a = react_1.useState(initialValues), values = _a[0], setValues = _a[1];
    var changeHandler = function (event) {
        var _a;
        setValues(__assign(__assign({}, values), (_a = {}, _a[event.target.value] = event.target.checked, _a)));
    };
    return (core_1.jsx(trustyle_grid_1.Container, { css: { marginTop: '4px' } },
        core_1.jsx(src_1.Fieldset, { label: "Example checkboxes" },
            core_1.jsx(trustyle_grid_1.Row, null, Object.entries(values).map(function (_a) {
                var value = _a[0], checked = _a[1];
                return (core_1.jsx(trustyle_grid_1.Column, { key: value },
                    core_1.jsx(_1.CheckboxInput, { name: "example", checked: checked, onChange: changeHandler, value: value, label: value.toUpperCase(), slim: slim })));
            })))));
};
react_2.storiesOf('Elements|CheckboxInput', module).add('Example', function () {
    return core_1.jsx(Form, null);
});
//# sourceMappingURL=stories.js.map