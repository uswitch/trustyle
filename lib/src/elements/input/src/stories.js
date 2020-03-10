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
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var core_1 = require("@emotion/core");
var _1 = require("./.");
var Spacer = function (_a) {
    var height = _a.height;
    return (core_1.jsx("div", { css: core_1.css({ minHeight: height }) }));
};
var DebugValue = function (_a) {
    var value = _a.value;
    return (core_1.jsx("pre", null,
        "Value:",
        ' ',
        core_1.jsx("span", { css: { backgroundColor: 'papayawhip' } }, value || 'EMPTY')));
};
var PostprocessStory = function () {
    var _a = React.useState(), value1 = _a[0], setValue1 = _a[1];
    var _b = React.useState(), value2 = _b[0], setValue2 = _b[1];
    return (core_1.jsx("div", { css: core_1.css({ padding: addon_knobs_1.number('Padding', 10) }) },
        core_1.jsx("label", { htmlFor: "example-1" }, "Trim whitespace from beginning / end"),
        core_1.jsx(_1.Input, { id: "example-1", name: "example", type: "text", value: value1, onChange: function (e) { return setValue1(e.currentTarget.value); }, postprocess: function (x) { return x.trim(); } }),
        core_1.jsx(DebugValue, { value: value1 }),
        core_1.jsx("label", { htmlFor: "example-2" }, "Strip all whitespace"),
        core_1.jsx(_1.Input, { id: "example-2", name: "example", type: "text", value: value2, onChange: function (e) { return setValue2(e.currentTarget.value); }, postprocess: function (x) { return x.replace(/\s/g, ''); } }),
        core_1.jsx(DebugValue, { value: value2 })));
};
react_1.storiesOf('Elements|Text Input', module)
    .add('example', function () {
    var spaceBetween = addon_knobs_1.number('Space Between', 10);
    return (core_1.jsx("div", { css: core_1.css({ padding: addon_knobs_1.number('Padding', 10) }) },
        core_1.jsx(_1.Input, { name: "example", defaultValue: "Cascat", type: "text" }),
        core_1.jsx(Spacer, { height: spaceBetween }),
        core_1.jsx(_1.Input, { name: "example", placeholder: "Placeholder", type: "text" }),
        core_1.jsx(Spacer, { height: spaceBetween }),
        core_1.jsx(_1.Input, { hasError: true, name: "example", defaultValue: "Error!", type: "text" }),
        core_1.jsx(Spacer, { height: spaceBetween }),
        core_1.jsx(_1.Input, { mask: "99-99-99", name: "example", placeholder: "XX-XX-XX", type: "tel" }),
        core_1.jsx(Spacer, { height: spaceBetween }),
        core_1.jsx(_1.Input, { name: "example", freezable: true, defaultValue: "Prefilled", type: "text" }),
        core_1.jsx(Spacer, { height: spaceBetween }),
        core_1.jsx(_1.Input, { name: "example", prefix: "\u00A3", type: "tel" }),
        core_1.jsx(Spacer, { height: spaceBetween }),
        core_1.jsx(_1.Input, { name: "example", suffix: ".00", type: "tel" }),
        core_1.jsx(Spacer, { height: spaceBetween }),
        core_1.jsx(_1.Input, { name: "password", type: "password", defaultValue: "swordfish" }),
        core_1.jsx(Spacer, { height: spaceBetween }),
        core_1.jsx(_1.Input, { name: "example", disabled: true, value: "Disabled", type: "text" })));
})
    .add('postprocess', function () {
    return core_1.jsx(PostprocessStory, null);
});
//# sourceMappingURL=stories.js.map