"use strict";
/** @jsx jsx */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var theme_ui_1 = require("theme-ui");
var trustyle_accordion_1 = __importDefault(require("@uswitch/trustyle.accordion"));
var EmbeddedVideo = function (_a) {
    var source = _a.source, _b = _a.allowFullScreen, allowFullScreen = _b === void 0 ? true : _b, _c = _a.hasAccordion, hasAccordion = _c === void 0 ? true : _c, _d = _a.accordionTitle, accordionTitle = _d === void 0 ? '' : _d, _e = _a.accordionContent, accordionContent = _e === void 0 ? '' : _e;
    return (theme_ui_1.jsx("div", null,
        theme_ui_1.jsx("div", { sx: {
                position: 'relative',
                width: '100%',
                height: '0',
                paddingBottom: '56.25%',
                overflow: 'hidden',
                maxWidth: '100%'
            } },
            theme_ui_1.jsx("iframe", { sx: {
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%'
                }, src: source, frameBorder: "0", allowFullScreen: allowFullScreen })),
        hasAccordion && (theme_ui_1.jsx(trustyle_accordion_1.default, { title: accordionTitle }, accordionContent))));
};
exports.default = EmbeddedVideo;
//# sourceMappingURL=index.js.map