"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var react_1 = require("@storybook/react");
var _1 = __importDefault(require("./"));
var UswitchAdvert = 'https://www.youtube.com/embed/1cy0Buice_0';
react_1.storiesOf('Elements|Embedded-video', module)
    .addParameters({ percy: { skip: true } })
    .add('primary variant', function () { return (core_1.jsx(_1.default, { source: UswitchAdvert, accordionTitle: "Accordion Title", accordionContent: "Accordion content" })); })
    .add('Video without accordion', function () { return (core_1.jsx(_1.default, { source: UswitchAdvert, hasAccordion: false })); });
//# sourceMappingURL=stories.js.map