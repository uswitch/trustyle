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
var react_1 = __importStar(require("react"));
var theme_ui_1 = require("theme-ui");
var trustyle_icon_1 = require("@uswitch/trustyle.icon");
var AccordionContext = react_1.default.createContext({
    // -1: there is a group and they're all closed
    // -2: there is no group
    open: -2
});
var Accordion = function (_a) {
    var index = _a.index, title = _a.title, _b = _a.isInitiallyOpen, isInitiallyOpen = _b === void 0 ? false : _b, children = _a.children;
    var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var _o = theme_ui_1.useThemeUI().theme, _p = _o.accordion, accordionTheme = _p === void 0 ? {} : _p, _q = _o.colors, colors = _q === void 0 ? {} : _q;
    var _r = react_1.useState(isInitiallyOpen), isOpenState = _r[0], setIsOpenState = _r[1];
    var accordionContext = react_1.useContext(AccordionContext);
    var isOpen;
    var setIsOpen;
    if (accordionContext.open === -2 || !accordionContext.setOpenId) {
        isOpen = isOpenState;
        setIsOpen = setIsOpenState;
    }
    else {
        isOpen = accordionContext.open === index;
        setIsOpen = function (isOpen) {
            // @ts-ignore - I have no idea why this is required
            return accordionContext.setOpenId(isOpen ? index : -1);
        };
    }
    return (theme_ui_1.jsx("div", null,
        theme_ui_1.jsx("button", { sx: {
                cursor: 'pointer',
                variant: !isOpen
                    ? 'accordion.base.button'
                    : 'accordion.variants.isActive.button'
            }, onClick: function () { return setIsOpen(!isOpen); } },
            theme_ui_1.jsx("div", { sx: {
                    flex: '1',
                    textAlign: 'left'
                } }, title),
            theme_ui_1.jsx(trustyle_icon_1.Icon, { color: isOpen
                    ? colors[(_f = (_e = (_d = (_c = accordionTheme) === null || _c === void 0 ? void 0 : _c.variants) === null || _d === void 0 ? void 0 : _d.isActive) === null || _e === void 0 ? void 0 : _e.caret) === null || _f === void 0 ? void 0 : _f.color]
                    : colors[(_j = (_h = (_g = accordionTheme) === null || _g === void 0 ? void 0 : _g.base) === null || _h === void 0 ? void 0 : _h.caret) === null || _j === void 0 ? void 0 : _j.color], glyph: "caret", direction: isOpen ? 'up' : 'down', size: 16 })),
        theme_ui_1.jsx("div", { sx: {
                overflow: 'hidden',
                height: isOpen ? 'auto' : '0',
                marginBottom: isOpen
                    ? (_m = (_l = (_k = accordionTheme) === null || _k === void 0 ? void 0 : _k.base) === null || _l === void 0 ? void 0 : _l.content) === null || _m === void 0 ? void 0 : _m.marginBottom : '0',
                '> *:first-child': {
                    marginTop: 0
                },
                '> *:last-child': {
                    marginBottom: 0
                },
                '> p:last-child': {
                    marginBottom: 'xs'
                }
            } }, children)));
};
exports.default = Accordion;
Accordion.Group = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(0), openId = _b[0], setOpenId = _b[1];
    var childrenWithIndexes = react_1.default.Children.map(children, function (child, index) {
        if (react_1.default.isValidElement(child)) {
            return react_1.default.cloneElement(child, { index: index });
        }
        return child;
    });
    return (theme_ui_1.jsx("div", { sx: {
            marginTop: 'sm',
            marginBottom: 'sm'
        } },
        theme_ui_1.jsx(AccordionContext.Provider, { value: { open: openId, setOpenId: setOpenId } }, childrenWithIndexes)));
};
Accordion.Title = function (_a) {
    var children = _a.children, _b = _a.as, as = _b === void 0 ? 'h2' : _b;
    return (theme_ui_1.jsx(theme_ui_1.Styled.h3, { as: as, sx: {
            variant: 'accordion.base.title'
        } }, children));
};
//# sourceMappingURL=index.js.map