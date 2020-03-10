"use strict";
/** @jsx jsx */
Object.defineProperty(exports, "__esModule", { value: true });
var theme_ui_1 = require("theme-ui");
var DefaultContainer = function (_a) {
    var children = _a.children;
    return (theme_ui_1.jsx("div", { sx: { maxWidth: 1024, margin: '0 auto' } }, children));
};
var Category = function (_a) {
    var title = _a.title, text = _a.text, _b = _a.container, Container = _b === void 0 ? DefaultContainer : _b;
    return (theme_ui_1.jsx("div", { sx: {
            paddingX: ['sm', 'md'],
            paddingY: ['md', 'lg'],
            variant: 'categoryTitle.main'
        } },
        theme_ui_1.jsx(Container, null,
            theme_ui_1.jsx(theme_ui_1.Styled.h1, { as: text ? 'h1' : 'p', sx: {
                    padding: 0,
                    margin: 0,
                    variant: 'categoryTitle.heading'
                } }, title),
            text && (theme_ui_1.jsx(theme_ui_1.Styled.p, { sx: { marginBottom: 0, variant: 'categoryTitle.text' } }, text)))));
};
exports.default = Category;
//# sourceMappingURL=index.js.map