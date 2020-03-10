"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var addon_knobs_1 = require("@storybook/addon-knobs");
var trustyle_author_1 = __importDefault(require("@uswitch/trustyle.author"));
var _1 = __importDefault(require("./"));
exports.default = {
    title: 'Compounds|ArticleIntro'
};
exports.ExampleWithKnobs = function () {
    var title = addon_knobs_1.text('Title', 'What is gadget insurance?');
    var description = addon_knobs_1.text('Description', ' If you’ve ever dropped your mobile, you’ll know it can be expensive to repair or replace. Carrying your phone, laptop or camera around with you risks them being lost, stolen or damaged.');
    var name = addon_knobs_1.text('Author name', 'Salman');
    var role = addon_knobs_1.text('Author role', 'Job title');
    var authorUrl = addon_knobs_1.text('Author url', 'https://www.jonathanfielding.com');
    var editorName = addon_knobs_1.text('Editor name', 'Sarah Guershon');
    var editorRole = addon_knobs_1.text('Editor role', 'Job title');
    var editorUrl = addon_knobs_1.text('Editor url', 'https://www.jonathanfielding.com');
    var image = (core_1.jsx("img", { src: "https://placekitten.com/200/200?image=9", alt: "Salman" }));
    var updatedDate = addon_knobs_1.date('Article date', new Date(2020, 2, 15));
    var author = (core_1.jsx(trustyle_author_1.default, { name: name, role: role, authorUrl: authorUrl, editorName: editorName, editorRole: editorRole, editorUrl: editorUrl, authorImage: image, date: updatedDate }));
    return (core_1.jsx(_1.default, { title: title, author: author, description: description }));
};
//# sourceMappingURL=stories.js.map