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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
var st = __importStar(require("./styles"));
exports.Container = function (_a) {
    var children = _a.children, outerMargin = _a.outerMargin, containerWidths = _a.containerWidths, gutterWidths = _a.gutterWidths, props = __rest(_a, ["children", "outerMargin", "containerWidths", "gutterWidths"]);
    return (core_1.jsx("div", __assign({ css: st.container(outerMargin, containerWidths, gutterWidths) }, props), children));
};
var parseSizeFromProps = function (fn) {
    return Object.entries(trustyle_styles_1.breakpoints).map(fn);
};
var parseDisplay = function (props) {
    return parseSizeFromProps(function (_a) {
        var key = _a[0], _ = _a[1];
        return (props["hide-" + key] ? 'none' : 'block');
    });
};
var parseSizes = function (props) {
    return parseSizeFromProps(function (_a) {
        var key = _a[0], _ = _a[1];
        return parseFloat(props[key]) || 1;
    });
};
exports.Column = function (_a) {
    var children = _a.children, hasPaddingTop = _a.hasPaddingTop, hasPaddingBottom = _a.hasPaddingBottom, gutterWidths = _a.gutterWidths, props = __rest(_a, ["children", "hasPaddingTop", "hasPaddingBottom", "gutterWidths"]);
    var sizes = parseSizes(props);
    var display = parseDisplay(props);
    return (core_1.jsx("div", __assign({ css: st.column(sizes, display, hasPaddingTop, hasPaddingBottom, gutterWidths) }, props), children));
};
exports.Row = function (_a) {
    var children = _a.children, centerX = _a.centerX, topSpacing = _a.topSpacing, bottomSpacing = _a.bottomSpacing, gutterWidths = _a.gutterWidths, props = __rest(_a, ["children", "centerX", "topSpacing", "bottomSpacing", "gutterWidths"]);
    return (core_1.jsx("div", __assign({ css: st.row(centerX, topSpacing, bottomSpacing, gutterWidths) }, props), children));
};
//# sourceMappingURL=index.js.map