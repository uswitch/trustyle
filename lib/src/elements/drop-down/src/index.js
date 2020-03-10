"use strict";
/** @jsx jsx */
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
var react_1 = require("react");
var core_1 = require("@emotion/core");
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
var trustyle_icon_1 = require("@uswitch/trustyle.icon");
var trustyle_frozen_input_1 = require("@uswitch/trustyle.frozen-input");
var styles_1 = require("./styles");
var prependDataProps = function (dataProps) {
    return Object.keys(dataProps).reduce(function (props, key) {
        var _a;
        return (__assign(__assign({}, props), (_a = {}, _a["data-" + key] = dataProps[key], _a)));
    }, {});
};
exports.DropDown = react_1.forwardRef(function (_a, ref) {
    var _b = _a.dataProps, dataProps = _b === void 0 ? {} : _b, disabled = _a.disabled, freezable = _a.freezable, _c = _a.hasError, hasError = _c === void 0 ? false : _c, _d = _a.onBlur, onBlur = _d === void 0 ? function () { } : _d, onChange = _a.onChange, _e = _a.onFocus, onFocus = _e === void 0 ? function () { } : _e, name = _a.name, options = _a.options, placeholder = _a.placeholder, value = _a.value;
    var _f = react_1.useState(false), hasFocus = _f[0], setHasFocus = _f[1];
    var option = options.find(function (_) { return _.value === value; });
    var frozenText = option && option.text;
    var inputRef = react_1.useRef(null);
    react_1.useImperativeHandle(ref, function () { return ({
        focus: function () { return inputRef.current && inputRef.current.focus(); },
        scrollIntoView: function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return inputRef.current && (_a = inputRef.current).scrollIntoView.apply(_a, args);
        }
    }); });
    return (core_1.jsx(trustyle_frozen_input_1.FrozenInput, { text: frozenText, freezable: freezable, inputRef: inputRef },
        core_1.jsx("div", { css: styles_1.container },
            core_1.jsx("select", __assign({ ref: inputRef, onFocus: function () {
                    setHasFocus(true);
                    onFocus();
                }, onBlur: function () {
                    setHasFocus(false);
                    onBlur();
                }, onChange: function (e) { return onChange(e.currentTarget.value); }, css: styles_1.root(hasError, hasFocus), id: name, name: name, value: !value ? '' : value, disabled: disabled }, prependDataProps(dataProps)),
                placeholder && (core_1.jsx("option", { value: "", disabled: true }, placeholder)),
                options.map(function (_a) {
                    var value = _a.value, text = _a.text;
                    return (core_1.jsx("option", { key: text, value: value }, text));
                })),
            core_1.jsx("span", { css: styles_1.icon },
                core_1.jsx(trustyle_icon_1.Icon, { glyph: "caret", color: trustyle_styles_1.inputs.matchCircumstance(hasError, hasFocus) || trustyle_styles_1.colors.blueGrey, direction: "down" })))));
});
//# sourceMappingURL=index.js.map