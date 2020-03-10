"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var theme_ui_1 = require("theme-ui");
var addon_knobs_1 = require("@storybook/addon-knobs");
var src_1 = __importDefault(require("../../breadcrumbs/src"));
var src_2 = require("../../button/src");
var _1 = __importDefault(require("./"));
exports.default = {
    title: 'Elements|Hero'
};
var variants = ['base', 'light'];
var crumbs = [
    {
        fields: {
            path: '/',
            displayText: 'Home'
        }
    },
    {
        fields: {
            path: '/gas-electricity/',
            displayText: 'Gas & Electricity'
        }
    },
    {
        fields: {
            path: '/gas-electricity/guides',
            displayText: 'Guides'
        }
    }
];
var people = {
    'Jumping guy': {
        img: require('../../../../static/hero/money-man.png'),
        position: {
            backgroundSize: ['auto 125%', 'auto calc(110% + 280px)'],
            backgroundPosition: ['right -130px bottom -150px', 'left 50% top 0']
        }
    },
    Tom: {
        img: require('../../../../static/hero/tom.png'),
        position: {
            backgroundSize: ['auto 100%', 'auto calc(90% + 100px)'],
            backgroundPosition: [
                'right -100px bottom -60px',
                'left 50% bottom -100px'
            ]
        }
    }
};
exports.ExampleWithKnobs = function () {
    var breadcrumbsVariant = addon_knobs_1.select('Breadcrumbs variant', variants, 'base');
    var contentWidth = addon_knobs_1.number('Content width', 45);
    var headline = addon_knobs_1.text('Headline', 'Short snappy headline that runs over two lines');
    var fgImageKey = addon_knobs_1.select('Foreground image', Object.keys(people), 'Jumping guy');
    var fgImage = people[fgImageKey];
    var imageOnMobile = addon_knobs_1.boolean('Display foreground image on mobile?', true);
    var breadcrumbs = (theme_ui_1.jsx(src_1.default, { crumbs: crumbs, title: "Understanding energy bills and electricity bills - FAQs and more", variant: breadcrumbsVariant }));
    return (theme_ui_1.jsx("div", { sx: { margin: -10 } },
        theme_ui_1.jsx(_1.default, { contentWidth: contentWidth, fgImage: fgImage.img, fgImagePosition: fgImage.position, fgImageOnMobile: imageOnMobile, breadcrumbs: breadcrumbs },
            theme_ui_1.jsx(theme_ui_1.Styled.h1, null, headline),
            theme_ui_1.jsx("div", { sx: { backgroundColor: 'white', padding: 20 } },
                theme_ui_1.jsx(theme_ui_1.Styled.p, { sx: { marginTop: 0 } }, "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."),
                theme_ui_1.jsx("div", { sx: { button: { width: 'auto' } } },
                    theme_ui_1.jsx(src_2.Button, { variant: "primary" }, "Optional CTA"))))));
};
//# sourceMappingURL=stories.js.map