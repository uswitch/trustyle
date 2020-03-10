"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
var load = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.477em;\n  }\n  5%,\n  95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.477em;\n  }\n  10%,\n  59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.173em -0.812em 0 -0.44em, -0.297em -0.775em 0 -0.477em;\n  }\n  20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.555em -0.617em 0 -0.44em, -0.749em -0.34em 0 -0.477em;\n  }\n  38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.645em -0.522em 0 -0.44em, -0.82em -0.09em 0 -0.477em;\n  }\n  100% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.477em;\n  }\n"], ["\n  0% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.477em;\n  }\n  5%,\n  95% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.477em;\n  }\n  10%,\n  59% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.173em -0.812em 0 -0.44em, -0.297em -0.775em 0 -0.477em;\n  }\n  20% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.555em -0.617em 0 -0.44em, -0.749em -0.34em 0 -0.477em;\n  }\n  38% {\n    box-shadow: 0 -0.83em 0 -0.4em, -0.645em -0.522em 0 -0.44em, -0.82em -0.09em 0 -0.477em;\n  }\n  100% {\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.477em;\n  }\n"])));
var round = core_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"], ["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"])));
exports.rotate = core_1.css({
    color: trustyle_styles_1.colors.azure,
    fontSize: trustyle_styles_1.pxToRem(trustyle_styles_1.spacers.orange),
    textIndent: '-9999rem',
    overflow: 'hidden',
    width: trustyle_styles_1.pxToRem(trustyle_styles_1.spacers.orange),
    height: trustyle_styles_1.pxToRem(trustyle_styles_1.spacers.orange),
    borderRadius: '50%',
    margin: trustyle_styles_1.pxToRem(72) + " auto",
    position: 'relative',
    transform: 'translateZ(0)',
    animation: load + " 1.7s infinite ease, " + round + " 1.7s infinite ease"
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=styles.js.map