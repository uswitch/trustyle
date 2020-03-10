"use strict";
/** @jsx jsx */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var theme_ui_1 = require("theme-ui");
var trustyle_button_link_1 = require("@uswitch/trustyle.button-link");
var trustyle_utils_get_1 = __importDefault(require("@uswitch/trustyle-utils.get"));
var lookup = function (variant) {
    return variant === 'base' ? 'cta2.base' : "cta2.variants." + variant;
};
var CTA = function (_a) {
    var title = _a.title, text = _a.text, buttonLink = _a.buttonLink, buttonText = _a.buttonText, _b = _a.variant, variant = _b === void 0 ? 'base' : _b;
    var theme = theme_ui_1.useThemeUI().theme;
    var buttonVariant = trustyle_utils_get_1.default(theme, lookup(variant) + ".button.buttonVariant");
    return (theme_ui_1.jsx("div", { sx: {
            paddingX: ['sm', 'md'],
            paddingY: 'md',
            display: ['block', 'flex'],
            alignItems: 'center',
            variant: lookup(variant) + ".main"
        } },
        theme_ui_1.jsx("div", null,
            title && (theme_ui_1.jsx(theme_ui_1.Styled.h3, { sx: { marginTop: 0, variant: lookup(variant) + ".title" }, as: "h2" }, title)),
            text && (theme_ui_1.jsx(theme_ui_1.Styled.p, { sx: { variant: lookup(variant) + ".text" } }, text))),
        theme_ui_1.jsx("div", { sx: { flexShrink: 0 } },
            theme_ui_1.jsx(trustyle_button_link_1.ButtonLink, { href: buttonLink, variant: buttonVariant || 'primary', sx: { variant: lookup(variant) + ".button" } }, buttonText))));
};
exports.default = CTA;
//# sourceMappingURL=index.js.map