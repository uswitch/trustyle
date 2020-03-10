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
var trustyle_grid_1 = require("@uswitch/trustyle.grid");
var src_1 = require("../../fieldset/src");
var _1 = require("./.");
var initialValues = {
    a: false,
    b: false,
    c: false,
    d: false
};
var Form = function (_a) {
    var _b;
    var type = _a.type, _c = _a.useHooks, useHooks = _c === void 0 ? false : _c;
    var values, changeHandler;
    if (useHooks) {
        var setValues_1;
        _b = react_1.useState(initialValues), values = _b[0], setValues_1 = _b[1];
        changeHandler = function (event) {
            var _a;
            console.log(event.target.value);
            var rest = type === 'radio' ? initialValues : values;
            setValues_1(__assign(__assign({}, rest), (_a = {}, _a[event.target.value] = event.target.checked, _a)));
        };
    }
    else {
        values = __assign(__assign({}, initialValues), { b: true });
        changeHandler = function () { };
    }
    return (core_1.jsx(trustyle_grid_1.Container, { css: { marginTop: '4px' } },
        core_1.jsx(src_1.Fieldset, { label: "Example tiles" },
            core_1.jsx(trustyle_grid_1.Row, { centerX: true }, Object.entries(values).map(function (_a) {
                var value = _a[0], checked = _a[1];
                return (core_1.jsx(trustyle_grid_1.Column, { key: value, s: 1 / 2, m: 1 / 2, l: 1 / 2 },
                    core_1.jsx(_1.TileInput, { key: value, name: "example", type: type, checked: checked, onChange: changeHandler, value: value, label: value.toUpperCase() }, checked ? '🙉' : '🙈')));
            })))));
};
exports.default = {
    title: 'Elements|TileInput'
};
exports.Radio = function () { return core_1.jsx(Form, { type: "radio", useHooks: true }); };
exports.Checkbox = function () { return core_1.jsx(Form, { type: "checkbox", useHooks: true }); };
exports.RadioSelected = function () { return core_1.jsx(Form, { type: "radio" }); };
exports.CheckboxSelected = function () { return core_1.jsx(Form, { type: "checkbox" }); };
//# sourceMappingURL=stories.js.map