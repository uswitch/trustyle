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
Object.defineProperty(exports, "__esModule", { value: true });
var theme_ui_1 = require("theme-ui");
exports.RadioInput = function (_a) {
    var label = _a.label, inputProps = __rest(_a, ["label"]);
    return (theme_ui_1.jsx("label", { sx: { display: 'block' } },
        theme_ui_1.jsx("input", __assign({ sx: {
                marginLeft: '-9000px',
                appearance: 'none',
                position: 'absolute',
                '&:checked + span': {
                    '&::before': {
                        transition: 'background-color 200ms, border-color 200ms'
                    }
                },
                variant: 'input.radio.base'
            }, type: "radio" }, inputProps)),
        theme_ui_1.jsx("span", { sx: {
                alignItems: 'center',
                boxSizing: 'border-box',
                cursor: 'pointer',
                display: 'flex',
                minHeight: '50px',
                padding: 'base',
                paddingLeft: 0,
                width: '100%',
                '&::before': {
                    borderRadius: '50%',
                    borderStyle: 'solid',
                    borderWidth: '2px',
                    content: '" "',
                    display: 'block',
                    height: '17px',
                    marginLeft: 'base',
                    marginRight: 'base',
                    width: '17px',
                    flexGrow: 0,
                    flexShrink: 0
                },
                variant: 'input.radio.label'
            } }, label)));
};
//# sourceMappingURL=index.js.map