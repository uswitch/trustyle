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
var react_1 = require("react");
var theme_ui_1 = require("theme-ui");
var trustyle_icon_1 = require("@uswitch/trustyle.icon");
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
var st = __importStar(require("./styles"));
var editIconWidth = 69;
exports.FrozenInput = function (_a) {
    var text = _a.text, freezable = _a.freezable, inputRef = _a.inputRef, children = _a.children;
    var _b = react_1.useState(freezable && !!text), frozen = _b[0], setFrozen = _b[1];
    react_1.useEffect(function () {
        if (freezable && !frozen && !!text && inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, [frozen]);
    if (!frozen) {
        return theme_ui_1.jsx(react_1.Fragment, null, children);
    }
    return (theme_ui_1.jsx(react_1.Fragment, null,
        theme_ui_1.jsx("div", { sx: {
                fontSize: 'xs',
                fontWeight: 'base',
                lineHeight: '1.29',
                alignItems: 'center',
                backgroundColor: 'frozen-bg',
                display: 'flex',
                height: '64px',
                justifyContent: 'space-between',
                variant: 'input.frozen'
            } },
            theme_ui_1.jsx("p", { sx: {
                    color: 'text',
                    overflow: 'hidden',
                    padding: '0 24px',
                    textOverflow: 'ellipsis',
                    width: "calc(100% - " + editIconWidth + "px)"
                } }, text),
            theme_ui_1.jsx("button", { "aria-label": "Edit Value", css: st.edit, onClick: function () { return setFrozen(false); } },
                theme_ui_1.jsx(trustyle_icon_1.Icon, { color: trustyle_styles_1.colors.azure, glyph: "edit" }))),
        theme_ui_1.jsx("div", { css: st.hidden }, children)));
};
//# sourceMappingURL=index.js.map