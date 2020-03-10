"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var addon_knobs_1 = require("@storybook/addon-knobs");
var _1 = __importDefault(require("./"));
exports.default = {
    title: 'Elements|Accordion'
};
exports.SingleAccordion = function () {
    var title = addon_knobs_1.text('Title', 'This is an example title');
    var content = addon_knobs_1.text('Content', 'This is some example content');
    return (core_1.jsx(_1.default, { title: title },
        core_1.jsx("p", null, content)));
};
exports.AccordionGroup = function () {
    var groupTitle = addon_knobs_1.text('Group title', 'Example group title');
    var title = addon_knobs_1.text('First title', 'This is an example title');
    var content = addon_knobs_1.text('First content', 'This is some example content');
    return (core_1.jsx(_1.default.Group, null,
        core_1.jsx(_1.default.Title, { as: "h2" }, groupTitle),
        core_1.jsx(_1.default, { title: title },
            core_1.jsx("p", null, content)),
        core_1.jsx(_1.default, { title: "Second accordion" },
            core_1.jsx("p", null, "Hello World")),
        core_1.jsx(_1.default, { title: "Third accordion" },
            core_1.jsx("p", null, "Hello"),
            core_1.jsx("p", null, "World"))));
};
//# sourceMappingURL=stories.js.map