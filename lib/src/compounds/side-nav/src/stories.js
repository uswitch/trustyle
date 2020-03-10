"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var src_1 = __importDefault(require("../src"));
react_1.storiesOf('Compounds|Side Nav', module).add('Side Nav', function () {
    var internalLinksTitle = addon_knobs_1.text('Internal links title', 'In this guide');
    var internalLinks = addon_knobs_1.object('Internal links', [
        {
            text: 'Put money aside for a deposit',
            url: '#heading1',
            isActive: true
        },
        {
            text: 'Work out your budget',
            url: '#heading2'
        },
        {
            text: 'Get a mortgage agreed in principle',
            url: '#heading3'
        }
    ]);
    var additionalLinks = addon_knobs_1.object('Aditional links', [
        {
            title: 'Related articles',
            links: [
                {
                    text: 'This is a link',
                    url: '/'
                },
                {
                    text: 'This is a link 2',
                    url: '/'
                },
                {
                    text: 'This is a link 3',
                    url: '/'
                }
            ]
        },
        {
            title: 'Compare',
            links: [
                {
                    text: 'This is a link',
                    url: '/'
                },
                {
                    text: 'This is a link 2',
                    url: '/'
                },
                {
                    text: 'This is a link 3',
                    url: '/'
                }
            ]
        }
    ]);
    return (core_1.jsx(src_1.default, { internalLinks: {
            title: internalLinksTitle,
            links: internalLinks
        }, additionalLinks: additionalLinks }));
});
//# sourceMappingURL=stories.js.map