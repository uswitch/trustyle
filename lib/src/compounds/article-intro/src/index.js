"use strict";
/** @jsx jsx */
Object.defineProperty(exports, "__esModule", { value: true });
var theme_ui_1 = require("theme-ui");
var ArticleIntro = function (_a) {
    var title = _a.title, author = _a.author, description = _a.description;
    return (theme_ui_1.jsx("div", null,
        theme_ui_1.jsx(theme_ui_1.Styled.h1, { sx: { variant: 'articleIntro.base.heading' } }, title),
        author,
        theme_ui_1.jsx("p", { sx: { variant: 'articleIntro.base.description' } }, description)));
};
exports.default = ArticleIntro;
//# sourceMappingURL=index.js.map