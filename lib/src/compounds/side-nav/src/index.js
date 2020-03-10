"use strict";
/** @jsx jsx */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var theme_ui_1 = require("theme-ui");
var trustyle_accordion_1 = __importDefault(require("@uswitch/trustyle.accordion"));
var SideNav = function (_a) {
    var internalLinks = _a.internalLinks, _b = _a.additionalLinks, additionalLinks = _b === void 0 ? [] : _b;
    var _c, _d;
    return (theme_ui_1.jsx("nav", null,
        theme_ui_1.jsx(trustyle_accordion_1.default.Group, null,
            theme_ui_1.jsx(trustyle_accordion_1.default, { title: internalLinks.title },
                theme_ui_1.jsx("ul", { sx: {
                        variant: 'sideNav.internalLinkList'
                    } }, (_d = (_c = internalLinks) === null || _c === void 0 ? void 0 : _c.links) === null || _d === void 0 ? void 0 : _d.map(function (_a) {
                    var text = _a.text, url = _a.url, isActive = _a.isActive;
                    return (theme_ui_1.jsx("li", { key: url, sx: {
                            variant: "sideNav.internalLinkListItem." + (isActive ? 'isActive' : 'base')
                        } },
                        theme_ui_1.jsx("a", { href: url }, text)));
                }))),
            additionalLinks.map(function (_a, index) {
                var title = _a.title, _b = _a.links, links = _b === void 0 ? [] : _b;
                return (theme_ui_1.jsx(trustyle_accordion_1.default, { key: index, title: title },
                    theme_ui_1.jsx("ul", { sx: { padding: 0, margin: 0 } }, links.map(function (_a, index) {
                        var text = _a.text, url = _a.url;
                        return (theme_ui_1.jsx("li", { key: index, sx: {
                                marginBottom: 0,
                                paddingBottom: 0,
                                variant: 'sideNav.additionalLink'
                            } },
                            theme_ui_1.jsx(theme_ui_1.Styled.a, { href: url }, text)));
                    }))));
            }))));
};
exports.default = SideNav;
//# sourceMappingURL=index.js.map