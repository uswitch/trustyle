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
var Table = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return theme_ui_1.jsx(theme_ui_1.Styled.table, __assign({}, props), children);
};
var TableRow = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return theme_ui_1.jsx(theme_ui_1.Styled.tr, __assign({}, props), children);
};
var TableCell = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return theme_ui_1.jsx(theme_ui_1.Styled.td, __assign({}, props), children);
};
var TableHeaderCell = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return theme_ui_1.jsx(theme_ui_1.Styled.th, __assign({}, props), children);
};
exports.default = {
    wrap: Table,
    td: TableCell,
    tr: TableRow,
    th: TableHeaderCell
};
//# sourceMappingURL=index.js.map