"use strict";
/** @jsx jsx */
Object.defineProperty(exports, "__esModule", { value: true });
var theme_ui_1 = require("theme-ui");
exports.LinkList = function (_a) {
    var children = _a.children, title = _a.title;
    return (theme_ui_1.jsx("div", null,
        theme_ui_1.jsx(theme_ui_1.Styled.h3, { as: "h2", sx: {
                paddingTop: 'xs',
                paddingBottom: 'xs',
                margin: 0
            } }, title),
        theme_ui_1.jsx("ul", { sx: {
                padding: 0,
                listStyle: 'none',
                marginTop: '0'
            } }, children)));
};
exports.LinkListItem = function (_a) {
    var children = _a.children, href = _a.href;
    return (theme_ui_1.jsx("li", { sx: {
            borderTopWidth: '1px',
            borderTopStyle: 'solid',
            borderTopColor: 'grey-20',
            paddingTop: 'xs',
            paddingBottom: 'xs',
            marginBottom: '0'
        } },
        theme_ui_1.jsx(theme_ui_1.Styled.a, { href: href, sx: {
                textDecoration: 'none',
                ':hover': {
                    textDecoration: 'underline'
                }
            } }, children)));
};
//# sourceMappingURL=index.js.map