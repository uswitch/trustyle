"use strict";
/** @jsx jsx */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var theme_ui_1 = require("theme-ui");
var trustyle_icon_1 = require("@uswitch/trustyle.icon");
var trustyle_utils_palette_1 = require("@uswitch/trustyle-utils.palette");
var CallOut = function (_a) {
    var title = _a.title, text = _a.text, icon = _a.icon;
    var mainText = (theme_ui_1.jsx(React.Fragment, null,
        title && (theme_ui_1.jsx(theme_ui_1.Styled.h3, { sx: {
                marginTop: '-3px',
                marginBottom: 'xxs',
                variant: 'callOut.heading'
            } }, title)),
        theme_ui_1.jsx(trustyle_utils_palette_1.Palette, { as: theme_ui_1.Styled.p, sx: {
                marginY: 0,
                variant: 'callOut.text'
            }, px: {
                color: 'accentColorText'
            } }, text)));
    return (theme_ui_1.jsx(trustyle_utils_palette_1.Palette, { as: "div", sx: {
            borderRadius: 4,
            paddingX: 'sm',
            paddingY: 'sm',
            marginTop: 'xs',
            marginBottom: 'md',
            variant: 'callOut.main'
        }, px: {
            backgroundColor: 'accentColor'
        } }, icon ? (theme_ui_1.jsx("div", { sx: { display: 'flex' } },
        theme_ui_1.jsx("div", { sx: {
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: function (_a) {
                    var space = _a.space;
                    return space.sm;
                },
                marginRight: 'xs'
            } },
            theme_ui_1.jsx("div", { sx: {
                    borderRadius: '50%',
                    padding: '20%',
                    variant: 'callOut.icon'
                } },
                theme_ui_1.jsx(trustyle_icon_1.Icon, { color: "white", glyph: icon }))),
        theme_ui_1.jsx("div", null, mainText))) : (mainText)));
};
exports.default = CallOut;
//# sourceMappingURL=index.js.map