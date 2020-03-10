"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var _1 = require("./");
react_1.storiesOf('Elements|Link List', module).add('primary variant', function () { return (core_1.jsx("div", { css: core_1.css({ padding: addon_knobs_1.number('Padding', 10) }) },
    core_1.jsx(_1.LinkList, { title: "Link list" },
        core_1.jsx(_1.LinkListItem, { href: "https://www.jonathanfielding.com" }, "Jonathans Blog"),
        core_1.jsx(_1.LinkListItem, { href: "https://www.performancebudget.io" }, "Performance Budget Tool"),
        core_1.jsx(_1.LinkListItem, { href: "https://www.duckduckgo.com" }, "Ethical search engine")))); });
//# sourceMappingURL=stories.js.map