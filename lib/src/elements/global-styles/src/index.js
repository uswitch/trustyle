"use strict";
/** @jsx jsx */
Object.defineProperty(exports, "__esModule", { value: true });
// This ignore should be removed when types PR is merged
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/41567
// @ts-ignore
var theme_ui_1 = require("theme-ui");
var core_1 = require("@emotion/core");
require("normalize.css/normalize.css");
exports.GlobalStyles = function () {
    var theme = theme_ui_1.useThemeUI().theme;
    return theme_ui_1.jsx(core_1.Global, { styles: theme_ui_1.css(theme.styles)(theme) });
};
//# sourceMappingURL=index.js.map