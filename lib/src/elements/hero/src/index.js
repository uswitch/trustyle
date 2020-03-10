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
Object.defineProperty(exports, "__esModule", { value: true });
var theme_ui_1 = require("theme-ui");
var DefaultContainer = function (_a) {
    var children = _a.children;
    return (theme_ui_1.jsx("div", { sx: { maxWidth: 1024, margin: '0 auto', paddingX: 10 } }, children));
};
var Hero = function (_a) {
    var breadcrumbs = _a.breadcrumbs, _b = _a.container, Container = _b === void 0 ? DefaultContainer : _b, _c = _a.contentWidth, contentWidth = _c === void 0 ? 45 : _c, fgImage = _a.fgImage, fgImagePosition = _a.fgImagePosition, _d = _a.fgImageOnMobile, fgImageOnMobile = _d === void 0 ? true : _d, children = _a.children;
    return (theme_ui_1.jsx("div", { sx: { position: 'relative', variant: 'hero.wrapper' } },
        theme_ui_1.jsx(Container, null,
            breadcrumbs && (theme_ui_1.jsx("div", { sx: { paddingTop: 'sm', variant: 'hero.breadcrumbs' } }, breadcrumbs)),
            theme_ui_1.jsx("div", { sx: { display: ['block', 'flex'], flexDirection: 'row-reverse' } },
                theme_ui_1.jsx("div", { sx: __assign({ position: ['absolute', 'static'], left: 0, right: 0, top: 0, bottom: 0, display: fgImageOnMobile ? 'block' : ['none', 'block'], flex: 100 - contentWidth + "%", backgroundImage: "url(" + fgImage + ")", backgroundRepeat: 'no-repeat' }, fgImagePosition) }),
                theme_ui_1.jsx("div", { sx: {
                        position: ['relative', 'static'],
                        flex: contentWidth + "%",
                        '> :first-child': {
                            marginTop: 0
                        },
                        paddingTop: ['sm', 'xxl'],
                        paddingBottom: ['sm', 'xxxl'],
                        'h1, h2, h3, h4, h5, h6': {
                            maxWidth: ['66.6%', 'none']
                        },
                        variant: 'hero.content'
                    } }, children)))));
};
exports.default = Hero;
//# sourceMappingURL=index.js.map