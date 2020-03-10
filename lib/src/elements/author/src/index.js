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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var theme_ui_1 = require("theme-ui");
var trustyle_date_1 = __importDefault(require("@uswitch/trustyle.date"));
var Author = function (_a) {
    var name = _a.name, role = _a.role, editorName = _a.editorName, editorRole = _a.editorRole, authorImage = _a.authorImage, date = _a.date, authorUrl = _a.authorUrl, editorUrl = _a.editorUrl;
    return (theme_ui_1.jsx("div", { sx: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            variant: 'author.main'
        } },
        authorImage && (theme_ui_1.jsx(theme_ui_1.Styled.a, { href: authorUrl, sx: {
                variant: 'author.link',
                flexShrink: 0,
                height: ['48px', '56px'],
                width: ['48px', '56px'],
                marginRight: 'sm'
            } },
            theme_ui_1.jsx(authorImage.type, __assign({}, authorImage.props, { sx: {
                    maxHeight: '100%',
                    maxWidth: '100%',
                    borderRadius: '50%',
                    variant: 'author.image'
                } })))),
        theme_ui_1.jsx("div", null,
            theme_ui_1.jsx(theme_ui_1.Styled.h6, { sx: {
                    marginTop: 0,
                    marginBottom: 'xxs',
                    fontWeight: 'bold',
                    paddingBottom: 0,
                    variant: 'author.heading'
                }, as: "h2" },
                theme_ui_1.jsx("a", { href: authorUrl, sx: {
                        textDecoration: 'none',
                        variant: 'author.link'
                    } },
                    "Written by ",
                    name,
                    ", ",
                    role)),
            theme_ui_1.jsx(theme_ui_1.Styled.p, { sx: {
                    fontSize: 'xxs',
                    marginY: 0,
                    variant: 'author.text'
                } },
                theme_ui_1.jsx(theme_ui_1.Styled.a, { href: editorUrl, sx: {
                        textDecoration: 'none',
                        variant: 'author.link'
                    } }, editorName &&
                    "Edited by " + editorName + (editorRole ? ", " + editorRole : '') + ", "),
                trustyle_date_1.default(date).format('LL')))));
};
exports.default = Author;
//# sourceMappingURL=index.js.map