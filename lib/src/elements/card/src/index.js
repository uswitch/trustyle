"use strict";
/** @jsx jsx */
Object.defineProperty(exports, "__esModule", { value: true });
var theme_ui_1 = require("theme-ui");
var trustyle_imgix_image_1 = require("@uswitch/trustyle.imgix-image");
var variant = function (prop) {
    if (prop === void 0) { prop = ''; }
    return "compounds.card" + (prop ? "." + prop : '');
};
var Card = function (_a) {
    var imgSrc = _a.imgSrc, imgAlt = _a.imgAlt, title = _a.title, description = _a.description, linkHref = _a.linkHref, _b = _a.linkText, linkText = _b === void 0 ? 'Read more' : _b, _c = _a.className, className = _c === void 0 ? '' : _c;
    return (theme_ui_1.jsx("a", { className: className, href: linkHref, sx: {
            textDecoration: 'none',
            cursor: 'pointer',
            '&:hover': {
                opacity: '0.5'
            },
            variant: variant()
        } },
        theme_ui_1.jsx("div", { sx: {
                width: '100%',
                variant: variant('img')
            } },
            theme_ui_1.jsx(trustyle_imgix_image_1.ImgixImage, { sx: {
                    height: 'auto',
                    width: '100%'
                }, alt: imgAlt, src: imgSrc, imgixParams: { fit: 'crop', crop: 'edges', ar: '16:9' }, critical: true })),
        theme_ui_1.jsx("div", { sx: {
                paddingY: 'xs',
                display: 'flex',
                flexDirection: 'column',
                flex: '1',
                variant: variant('content')
            } },
            theme_ui_1.jsx(theme_ui_1.Styled.h3, { sx: { margin: '0' } }, title),
            theme_ui_1.jsx(theme_ui_1.Styled.p, null, description),
            theme_ui_1.jsx(theme_ui_1.Styled.a, { as: "p", sx: { textDecoration: 'underline' } }, linkText))));
};
exports.default = Card;
//# sourceMappingURL=index.js.map