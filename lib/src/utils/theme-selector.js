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
var addon_knobs_1 = require("@storybook/addon-knobs");
// themes
var reqThemes = require.context('../themes', true, /theme\.json$/);
var themes = reqThemes
    .keys()
    .filter(function (key) { return key.indexOf('theme-utils') === -1; })
    .reduce(function (themes, filename) {
    var _a;
    return (__assign(__assign({}, themes), (_a = {}, _a[filename] = reqThemes(filename), _a)));
}, {});
exports.default = (function () {
    var theme = addon_knobs_1.select('Trustyle Theme', Object.keys(themes), './uswitch/theme.json');
    return themes[theme];
});
//# sourceMappingURL=theme-selector.js.map