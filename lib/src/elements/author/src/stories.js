"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var _1 = __importDefault(require("./"));
react_1.storiesOf('Elements|Author', module).add('Example', function () {
    var name = addon_knobs_1.text('Author name', 'Salman');
    var role = addon_knobs_1.text('Author role', 'Job title');
    var editorName = addon_knobs_1.text('Editor name', 'Sarah Guershon');
    var editorRole = addon_knobs_1.text('Editor role', 'Job title');
    var authorUrl = addon_knobs_1.text('Author role', 'https://www.jonathanfielding.com/');
    var editorUrl = addon_knobs_1.text('Author role', 'https://www.jonathanfielding.com/');
    var image = (core_1.jsx("img", { src: "https://placekitten.com/200/200?image=9", alt: "Salman" }));
    var updatedDate = addon_knobs_1.date('Article date', new Date(2020, 2, 15));
    return (core_1.jsx("div", null,
        core_1.jsx("h3", null, "Without editor"),
        core_1.jsx(_1.default, { name: name, role: role, authorImage: image, authorUrl: authorUrl, date: updatedDate }),
        core_1.jsx("h3", null, "With editor"),
        core_1.jsx(_1.default, { name: name, role: role, editorName: editorName, editorRole: editorRole, authorImage: image, authorUrl: authorUrl, editorUrl: editorUrl, date: updatedDate })));
});
//# sourceMappingURL=stories.js.map