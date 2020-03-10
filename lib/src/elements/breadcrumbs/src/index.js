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
var trustyle_utils_get_1 = __importDefault(require("@uswitch/trustyle-utils.get"));
var trustyle_icon_1 = require("@uswitch/trustyle.icon");
var lookup = function (variant) {
    return variant === 'base' ? 'breadcrumbs2.base' : "breadcrumbs2.variants." + variant;
};
var HomeIcon = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'base' : _b;
    var theme = theme_ui_1.useThemeUI().theme;
    var iconColor = trustyle_utils_get_1.default(theme, lookup(variant) + ".homeIcon.color");
    return (theme_ui_1.jsx("div", { sx: {
            display: 'inline-block',
            width: '1.25em',
            height: '1em',
            variant: lookup(variant) + ".homeIcon"
        } },
        theme_ui_1.jsx(trustyle_icon_1.Icon, { glyph: "home", color: theme.colors[iconColor] })));
};
var MobileBreadcrumbs = function (_a) {
    var crumbs = _a.crumbs, _b = _a.customBackIcon, customBackIcon = _b === void 0 ? '<' : _b, customHomeIcon = _a.customHomeIcon, _c = _a.variant, variant = _c === void 0 ? 'base' : _c;
    var _d, _e;
    var BackIcon = typeof customBackIcon === 'function' ? customBackIcon : function () { return customBackIcon; };
    var href, backTo;
    if (crumbs.length) {
        var lastCrumb = crumbs[crumbs.length - 1];
        href = (_d = lastCrumb.fields) === null || _d === void 0 ? void 0 : _d.path;
        backTo = (_e = lastCrumb.fields) === null || _e === void 0 ? void 0 : _e.displayText;
    }
    else {
        href = '/';
        backTo = customHomeIcon || theme_ui_1.jsx(HomeIcon, { variant: variant });
    }
    return (theme_ui_1.jsx(theme_ui_1.Styled.a, { sx: {
            display: 'inline-block',
            color: 'inherit',
            textDecoration: 'none',
            fontSize: 'xxs',
            variant: lookup(variant) + ".mobileLink"
        }, href: href },
        theme_ui_1.jsx("span", { sx: {
                marginRight: 'xxs',
                verticalAlign: customBackIcon === 'function' ? 'middle' : undefined
            } },
            theme_ui_1.jsx(BackIcon, null)),
        backTo));
};
var DesktopBreadcrumbs = function (_a) {
    var crumbs = _a.crumbs, title = _a.title, _b = _a.customSeparator, customSeparator = _b === void 0 ? '>' : _b, customHomeIcon = _a.customHomeIcon, _c = _a.variant, variant = _c === void 0 ? 'base' : _c;
    var liStyling = {
        display: 'inline'
    };
    var anchorStyling = {
        color: 'inherit',
        stroke: 'inherit',
        textDecoration: 'none',
        variant: lookup(variant) + ".a",
        ':visited': {
            color: 'inherit'
        }
    };
    var Separator = typeof customSeparator === 'function'
        ? customSeparator
        : function () { return customSeparator; };
    var separatorStyling = {
        display: 'inline-block',
        marginX: 'xs',
        verticalAlign: customSeparator === 'function' ? 'middle' : undefined
    };
    return (theme_ui_1.jsx("ul", { sx: {
            listStyleType: 'none',
            paddingLeft: 0,
            fontSize: 'xxs',
            marginY: 0,
            variant: lookup(variant) + ".main"
        } },
        theme_ui_1.jsx("li", { sx: liStyling },
            theme_ui_1.jsx(theme_ui_1.Styled.a, { sx: anchorStyling, href: "/" }, customHomeIcon || theme_ui_1.jsx(HomeIcon, { variant: variant })),
            (crumbs.length || title) && (theme_ui_1.jsx("span", { sx: separatorStyling },
                theme_ui_1.jsx(Separator, null)))),
        crumbs.map(function (_a, i) {
            var _b = _a.fields, fields = _b === void 0 ? {} : _b;
            return (theme_ui_1.jsx("li", { sx: liStyling, key: i },
                theme_ui_1.jsx(theme_ui_1.Styled.a, { sx: anchorStyling, href: fields.path }, fields.displayText),
                (i !== crumbs.length - 1 || title) && (theme_ui_1.jsx("span", { sx: separatorStyling },
                    theme_ui_1.jsx(Separator, null)))));
        }),
        title && (theme_ui_1.jsx("li", { sx: __assign(__assign({}, liStyling), { variant: lookup(variant) + ".title" }) }, title))));
};
var Breadcrumbs = function (_a) {
    var crumbs = _a.crumbs, title = _a.title, _b = _a.customSeparator, customSeparator = _b === void 0 ? '>' : _b, _c = _a.customBackIcon, customBackIcon = _c === void 0 ? '<' : _c, customHomeIcon = _a.customHomeIcon, _d = _a.variant, variant = _d === void 0 ? 'base' : _d;
    var _e;
    if (crumbs.length && ((_e = crumbs[0].fields) === null || _e === void 0 ? void 0 : _e.path) === '/') {
        crumbs = crumbs.slice(1);
    }
    return (theme_ui_1.jsx("div", { sx: { variant: lookup(variant) + ".wrapper" } },
        theme_ui_1.jsx("div", { sx: { display: ['block', 'none'] } },
            theme_ui_1.jsx(MobileBreadcrumbs, { crumbs: crumbs, customBackIcon: customBackIcon, customHomeIcon: customHomeIcon, variant: variant })),
        theme_ui_1.jsx("div", { sx: { display: ['none', 'block'] } },
            theme_ui_1.jsx(DesktopBreadcrumbs, { crumbs: crumbs, title: title, customSeparator: customSeparator, customHomeIcon: customHomeIcon, variant: variant }))));
};
exports.default = Breadcrumbs;
//# sourceMappingURL=index.js.map