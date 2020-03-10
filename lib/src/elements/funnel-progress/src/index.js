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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var theme_ui_1 = require("theme-ui");
var trustyle_icon_1 = require("@uswitch/trustyle.icon");
// This is a bit of a hack to ensure that the progress bar starts after the 'step number'
var STARTING_PROGRESS = 0.1;
var PhaseIcon = function (_a) {
    var variant = _a.variant, step = _a.step;
    return (theme_ui_1.jsx("div", { sx: { variant: "funnelProgress.base.phaseIcon.variants." + variant } }, variant === 'complete' ? (theme_ui_1.jsx("div", { sx: { variant: 'funnelProgress.base.phaseCompleteIcon.base' } },
        theme_ui_1.jsx(trustyle_icon_1.Icon, { glyph: "check", color: "#FFFFFF" }))) : (step)));
};
var FunnelPhase = function (_a) {
    var step = _a.step, open = _a.open, complete = _a.complete, progress = _a.progress, title = _a.phase.title;
    return (theme_ui_1.jsx("div", { sx: {
            variant: !open
                ? 'funnelProgress.base.phase.base'
                : 'funnelProgress.base.phase.variants.open'
        } },
        theme_ui_1.jsx("div", { sx: {
                variant: progress !== 0 || !open
                    ? 'funnelProgress.base.progress.base'
                    : 'funnelProgress.base.progress.variants.start'
            }, style: {
                width: progress !== 0 || !open
                    ? STARTING_PROGRESS * 100 +
                        progress * (1 - STARTING_PROGRESS) * 100 + "%"
                    : '0%'
            } }),
        theme_ui_1.jsx("div", { sx: { variant: 'funnelProgress.base.phaseLabel.base' } },
            theme_ui_1.jsx("div", { sx: { variant: 'funnelProgress.base.phaseLabelPart.base' } },
                theme_ui_1.jsx(PhaseIcon, { step: step, variant: open ? 'open' : complete ? 'complete' : 'incomplete' })),
            open && (theme_ui_1.jsx("div", { sx: { variant: 'funnelProgress.base.phaseLabelPart.base' } }, title)))));
};
var FunnelProgress = function (_a) {
    var phases = _a.phases, currentPhaseKey = _a.currentPhaseKey, progress = _a.progress, rest = __rest(_a, ["phases", "currentPhaseKey", "progress"]);
    var currentPhaseIndex = phases.findIndex(function (_a) {
        var key = _a.key;
        return key === currentPhaseKey;
    });
    return (theme_ui_1.jsx("div", __assign({}, rest, { sx: { variant: 'funnelProgress.base' } }), phases.map(function (phase, ind) { return (theme_ui_1.jsx(FunnelPhase, { key: ind, step: ind + 1, open: ind === currentPhaseIndex, complete: ind < currentPhaseIndex, progress: progress, phase: phase })); })));
};
exports.default = FunnelProgress;
//# sourceMappingURL=index.js.map