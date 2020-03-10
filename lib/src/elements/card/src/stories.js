"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var theme_ui_1 = require("theme-ui");
var addon_knobs_1 = require("@storybook/addon-knobs");
var _1 = __importDefault(require("./"));
exports.default = {
    title: 'Elements|Card'
};
exports.ExampleCards = function () {
    var title = addon_knobs_1.text('Title', 'This is a card title');
    var content = addon_knobs_1.text('Content', 'its a card with a picture of a really cute kitten');
    var contentLong = addon_knobs_1.text('ContentLong', 'cvxvcvcits a card with a picture of a really cute kitten its a card with a picture of a really cute kitten its a card with a picture of a really cute kitten its a card with a picture of a really cute kitten');
    var img = 'https://uswitch-contentful.imgix.net/t014ej9w3ur1/YPnGDSG9aTIPmg1rlWsZu/94483e7cec0dd6ac947e1f974650210f/800.jpg';
    return (theme_ui_1.jsx("div", null,
        theme_ui_1.jsx(_1.default, { imgSrc: img, imgAlt: "Picture of a cute kitten", title: title, description: content, linkHref: "https://www.uswitch.com" }),
        theme_ui_1.jsx("div", { sx: {
                display: 'flex',
                flexDirection: ['column', 'row'],
                flexWrap: 'wrap'
            } },
            theme_ui_1.jsx("div", { sx: { display: 'flex', width: ['auto'] } },
                theme_ui_1.jsx(_1.default, { imgSrc: img, imgAlt: "Picture of a cute kitten", title: title, description: content, linkHref: "https://www.uswitch.com", linkText: "read about cats" })),
            theme_ui_1.jsx("div", { sx: { display: 'flex', width: ['auto'] } },
                theme_ui_1.jsx(_1.default, { imgSrc: img, imgAlt: "Picture of a cute kitten", title: title, description: contentLong, linkHref: "https://www.uswitch.com", linkText: "read about cats" })),
            theme_ui_1.jsx("div", { sx: { display: 'flex', width: ['auto'] } },
                theme_ui_1.jsx(_1.default, { imgSrc: img, imgAlt: "Picture of a cute kitten", title: title, description: content, linkHref: "https://www.uswitch.com", linkText: "read about cats" })))));
};
//# sourceMappingURL=stories.js.map