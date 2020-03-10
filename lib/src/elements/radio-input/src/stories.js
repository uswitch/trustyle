"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var React = __importStar(require("react"));
var addon_knobs_1 = require("@storybook/addon-knobs");
var core_1 = require("@emotion/core");
var _1 = require("./.");
var wrapper = core_1.css({ padding: addon_knobs_1.number('Padding', 10), marginTop: 5 });
exports.default = {
    title: 'Elements|Radio Input'
};
exports.AllVariants = function () { return (core_1.jsx("div", { css: core_1.css({ padding: addon_knobs_1.number('Padding', 10) }) },
    core_1.jsx(React.Fragment, null,
        core_1.jsx("div", { css: wrapper },
            core_1.jsx(_1.RadioInput, { label: "Radio input field", name: "radio-name" })),
        core_1.jsx("div", { css: wrapper },
            core_1.jsx(_1.RadioInput, { checked: true, label: "Radio input checked", name: "radio-name" })),
        core_1.jsx("div", { css: wrapper },
            core_1.jsx(_1.RadioInput, { label: "Radio input field with a bit of extra text making it span across two lines", name: "radio-name" }))))); };
//# sourceMappingURL=stories.js.map