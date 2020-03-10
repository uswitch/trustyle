"use strict";
/** @jsx jsx */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_transition_group_1 = require("react-transition-group");
var focus_trap_react_1 = __importDefault(require("focus-trap-react"));
var core_1 = require("@emotion/core");
var trustyle_icon_1 = require("@uswitch/trustyle.icon");
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
var st = __importStar(require("./styles"));
var lockBackground = function () {
    var htmlNode = document.querySelector('html');
    var bodyNode = document.querySelector('body');
    if (htmlNode && bodyNode) {
        htmlNode.style.overflow = 'hidden';
    }
};
var unlockBackground = function () {
    var htmlNode = document.querySelector('html');
    var bodyNode = document.querySelector('body');
    if (htmlNode && bodyNode) {
        htmlNode.style.overflow = '';
    }
};
exports.Drawer = function (_a) {
    var ariaLabel = _a.ariaLabel, children = _a.children, disableScrolling = _a.disableScrolling, side = _a.side, triggerElement = _a.triggerElement;
    var triggerRef = react_1.createRef();
    var backgroundRef = react_1.createRef();
    var closeBtnRef = react_1.createRef();
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var openModal = function (event) {
        event.preventDefault();
        setIsOpen(true);
        if (disableScrolling)
            lockBackground();
    };
    var closeModal = function () {
        setIsOpen(false);
        if (disableScrolling)
            unlockBackground();
        // Focuses on the trigger element when the modal closes.
        var triggerNode = triggerRef.current;
        if (triggerNode)
            triggerNode.focus();
    };
    var onClick = function (event) {
        if (event.target === backgroundRef.current)
            closeModal();
    };
    // Focuses the close button when the modal opens.
    react_1.useEffect(function () {
        var closeBtnNode = closeBtnRef.current;
        if (closeBtnNode)
            closeBtnNode.focus();
    });
    return (core_1.jsx(react_1.Fragment, null,
        react_1.cloneElement(triggerElement, { onClick: openModal, ref: triggerRef }),
        core_1.jsx(react_transition_group_1.TransitionGroup, { component: null },
            core_1.jsx(react_transition_group_1.Transition, { timeout: st.transitionDuration, key: isOpen.toString() }, function (transitionState) {
                return isOpen &&
                    react_dom_1.createPortal(core_1.jsx("aside", { "aria-label": ariaLabel, "aria-modal": "true", css: st.background, onClick: onClick, ref: backgroundRef, role: "dialog" },
                        core_1.jsx(focus_trap_react_1.default, { focusTrapOptions: { clickOutsideDeactivates: true } },
                            core_1.jsx("div", { css: core_1.css([
                                    st.drawer,
                                    st.transitionPositions[side][transitionState]
                                ]) },
                                core_1.jsx("div", { css: st.closeRow },
                                    core_1.jsx("button", { "aria-label": "Close Modal", css: st.closeBtn, onClick: closeModal, ref: closeBtnRef },
                                        core_1.jsx(trustyle_icon_1.Icon, { glyph: "close", color: trustyle_styles_1.colors.cerulean, size: 20 }))),
                                core_1.jsx("div", { css: st.drawerBody }, children)))), document.body);
            }))));
};
//# sourceMappingURL=index.js.map