"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
exports.progress = trustyle_styles_1.mq({
    display: 'block',
    height: ['3px', '7.4px'],
    width: '100%',
    /* Webkit */
    '&[value]::-webkit-progress-bar': {
        background: trustyle_styles_1.colors.veryLightBlue
    },
    '&[value]::-webkit-progress-value': {
        background: trustyle_styles_1.colors.azure,
        transition: 'width 1s ease'
    },
    /* Moz */
    background: trustyle_styles_1.colors.veryLightBlue,
    border: 'none',
    '&[value]::-moz-progress-bar': {
        background: trustyle_styles_1.colors.azure
    },
    /* IE */
    color: trustyle_styles_1.colors.azure
});
//# sourceMappingURL=styles.js.map