"use strict";
/** @jsx jsx */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
var _1 = require("./");
var LoremIpsum = function () { return (core_1.jsx("section", null,
    core_1.jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
    core_1.jsx("p", null, "Aenean vel arcu non magna varius sagittis vel at elit."),
    core_1.jsx("p", null, "Vivamus et orci pretium, commodo eros vitae, tincidunt purus."),
    core_1.jsx("p", null, "Nunc consequat condimentum porttitor."),
    core_1.jsx("p", null, "Cras at mi sed quam hendrerit bibendum ac a lorem."),
    core_1.jsx("p", null, "Mauris a sapien vitae massa lacinia malesuada."))); };
var Padding = function (_a) {
    var children = _a.children;
    return (core_1.jsx("div", { css: core_1.css({ padding: 20 }) }, children));
};
var triggerButton = core_1.css({
    appearance: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    color: trustyle_styles_1.colors.cerulean,
    cursor: 'pointer',
    textAlign: 'left',
    textDecoration: 'underline'
});
var ExampleDrawer = function () {
    var trigger = core_1.jsx("button", { css: triggerButton }, "Click to learn more");
    return (core_1.jsx(_1.Drawer, { ariaLabel: "An example modal element", disableScrolling: addon_knobs_1.boolean('Is mobile?', true), side: addon_knobs_1.radios('Side', { Left: 'left', Right: 'right' }, 'right', 'side'), triggerElement: trigger },
        core_1.jsx(Padding, null,
            core_1.jsx("h2", null, "Helpful Content"),
            core_1.jsx("p", null, "This space will be used to give help to users. We\u2019ll try to explain solutions to most common problems users encounter when trying to complete a comparison."))));
};
react_1.storiesOf('Elements|Drawer', module).add('Example', function () {
    return (core_1.jsx(Padding, null,
        core_1.jsx(LoremIpsum, null),
        core_1.jsx("br", null),
        core_1.jsx("br", null),
        core_1.jsx("br", null),
        core_1.jsx("p", null,
            "Modal trigger is in the middle ",
            core_1.jsx(ExampleDrawer, null),
            " of some text."),
        core_1.jsx("br", null),
        core_1.jsx("br", null),
        core_1.jsx("br", null),
        core_1.jsx(LoremIpsum, null),
        core_1.jsx("br", null),
        core_1.jsx("br", null),
        core_1.jsx("br", null),
        core_1.jsx(LoremIpsum, null)));
});
//# sourceMappingURL=stories.js.map