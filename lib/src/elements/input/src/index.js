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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var core_1 = require("@emotion/core");
var trustyle_frozen_input_1 = require("@uswitch/trustyle.frozen-input");
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
var react_input_mask_1 = __importDefault(require("react-input-mask"));
var lodash_debounce_1 = __importDefault(require("lodash.debounce"));
var st = __importStar(require("./styles"));
// On Android, there's a behaviour where the keyboard may sometimes open ON TOP of a focused input.
// This effect fixes the problem by calling scrollIntoView on a window resize event - this event
// is fired when the keyboard opens and pushes up the viewport.
//
// Related: https://stackoverflow.com/questions/23757345/android-does-not-correctly-scroll-on-input-focus-if-not-body-element?noredirect=1&lq=1
var useScrollIntoView = function (inputRef, hasFocus) {
    var _a = react_1.useState(false), isResizing = _a[0], setIsResizing = _a[1];
    react_1.useEffect(function () {
        var handleResize = lodash_debounce_1.default(function () { return setIsResizing(true); }, 50);
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    react_1.useEffect(function () {
        if (hasFocus && isResizing) {
            var inputEl = inputRef.current;
            inputEl &&
                inputEl.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
        }
        isResizing && setIsResizing(false);
    }, [hasFocus, isResizing]);
};
exports.Input = function (_a) {
    var defaultValue = _a.defaultValue, freezable = _a.freezable, _b = _a.hasError, hasError = _b === void 0 ? false : _b, mask = _a.mask, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, _c = _a.postprocess, postprocess = _c === void 0 ? function (x) { return x; } : _c, prefix = _a.prefix, suffix = _a.suffix, type = _a.type, _d = _a.width, width = _d === void 0 ? 'full' : _d, inputProps = __rest(_a, ["defaultValue", "freezable", "hasError", "mask", "onBlur", "onChange", "onFocus", "postprocess", "prefix", "suffix", "type", "width"]);
    var inputRef = react_1.useRef(null);
    var _e = react_1.useState(false), hasFocus = _e[0], setHasFocus = _e[1];
    useScrollIntoView(inputRef, hasFocus);
    var _f = react_1.useState(inputProps.value || defaultValue || ''), interiorValue = _f[0], setInteriorValue = _f[1];
    var blurHandler = function (event) {
        setHasFocus(false);
        if (onBlur)
            onBlur(event);
    };
    var focusHandler = function (event) {
        setHasFocus(true);
        if (onFocus)
            onFocus(event);
    };
    var changeHandler = function (event) {
        var value = event.currentTarget.value;
        var postprocessed = postprocess(value);
        setInteriorValue(value);
        if (onChange)
            onChange(__assign(__assign({}, event), { currentTarget: __assign(__assign({}, event.currentTarget), { value: postprocessed }) }));
    };
    var value = inputProps.value !== undefined &&
        postprocess(interiorValue) !== inputProps.value
        ? inputProps.value
        : interiorValue;
    var childProps = __assign(__assign({}, inputProps), { css: trustyle_styles_1.inputs.keyboardInput, onBlur: blurHandler, onChange: changeHandler, onFocus: focusHandler, type: type,
        value: value });
    return (core_1.jsx(trustyle_frozen_input_1.FrozenInput, { text: interiorValue, freezable: freezable, inputRef: inputRef },
        core_1.jsx("div", { css: [trustyle_styles_1.inputs.keyboardInputContainer(hasError, hasFocus), st[width]] },
            prefix && core_1.jsx("span", { css: st.prefix(hasError, hasFocus) }, prefix),
            mask ? (core_1.jsx(react_input_mask_1.default
            // react-input-mask only supports a callback-style ref
            , __assign({ 
                // react-input-mask only supports a callback-style ref
                inputRef: function (ref) { return (inputRef.current = ref); }, mask: mask }, childProps))) : (core_1.jsx("input", __assign({ ref: inputRef }, childProps))),
            suffix && core_1.jsx("span", { css: st.suffix(hasError, hasFocus) }, suffix))));
};
//# sourceMappingURL=index.js.map