"use strict";
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
var core_1 = require("@emotion/core");
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
exports.label = function (slim) {
    return core_1.css({
        marginBottom: trustyle_styles_1.pxToRem(slim ? 16 : 8),
        width: '100%',
        '&:nth-last-of-type(1)': {
            marginBottom: 0
        }
    });
};
var svgSafeAzure = trustyle_styles_1.colors.azure.replace('#', '%23');
exports.input = function (slim) {
    return core_1.css({
        marginLeft: '-9000px',
        appearance: 'none',
        position: 'absolute',
        '&:checked + span': __assign(__assign({ color: trustyle_styles_1.colors.black }, (!slim && {
            border: "1px solid " + trustyle_styles_1.colors.azure,
            boxShadow: trustyle_styles_1.helpers.insetBorder(trustyle_styles_1.colors.azure)
        })), { '&::before': {
                backgroundImage: "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='" + svgSafeAzure + "' viewBox='-1 -2 14 12'%3E%3Cpath d='M9.603 1L11 2.507 4.681 9 1 4.898l1.453-1.446L4.74 5.999z' /%3E%3C/svg%3E\")",
                backgroundColor: trustyle_styles_1.colors.white,
                backgroundSize: trustyle_styles_1.pxToRem(16, 16),
                borderColor: trustyle_styles_1.colors.azure,
                boxShadow: trustyle_styles_1.helpers.insetBorder(trustyle_styles_1.colors.azure)
            } })
    });
};
exports.span = function (slim) {
    return core_1.css([
        trustyle_styles_1.typography.label,
        __assign(__assign({ color: trustyle_styles_1.colors.slateGrey, cursor: 'pointer', display: 'flex', fontWeight: 'normal' }, (!slim && {
            borderRadius: 3,
            border: "1px solid " + trustyle_styles_1.colors.lightGreyBlue,
            padding: trustyle_styles_1.pxToRem(13, 16),
            transition: 'background-color 200ms, border-color 200ms'
        })), { '&:before': {
                borderColor: trustyle_styles_1.colors.lightGreyBlue,
                borderRadius: 4,
                borderStyle: 'solid',
                borderWidth: 1,
                content: '" "',
                display: 'block',
                height: 16,
                margin: trustyle_styles_1.pxToRem(2, 16, 2, 0),
                width: 16,
                flexGrow: 0,
                flexShrink: 0
            } })
    ]);
};
//# sourceMappingURL=styles.js.map