"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var _1 = __importDefault(require("./"));
react_1.storiesOf('Elements|Category', module)
    .add('example with text', function () {
    var titleText = addon_knobs_1.text('Title text', 'Title goes here');
    var textText = addon_knobs_1.text('Text', 'Text goes here');
    return core_1.jsx(_1.default, { title: titleText, text: textText });
})
    .add('example without text', function () {
    var titleText = addon_knobs_1.text('Title text', 'Title goes here');
    return core_1.jsx(_1.default, { title: titleText });
})
    .add('example with custom container', function () {
    var titleText = addon_knobs_1.text('Title text', 'Title goes here');
    var containerWidth = addon_knobs_1.number('Container width', 200);
    var Container = function (_a) {
        var children = _a.children;
        return (core_1.jsx("div", { style: { width: containerWidth, margin: '0 auto' } }, children));
    };
    return core_1.jsx(_1.default, { title: titleText, container: Container });
});
//# sourceMappingURL=stories.js.map