"use strict";
/** @jsx jsx */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var react_1 = require("@storybook/react");
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
var index_1 = require("./index");
var exampleRow = core_1.css({
    backgroundColor: trustyle_styles_1.colors.battleshipGrey,
    border: trustyle_styles_1.colors.lightGreyBlue + " 1px solid",
    fontFamily: trustyle_styles_1.typography.defaultFontFamily,
    borderRadius: '1px'
});
react_1.storiesOf('Layout|Arrangement', module).add('Stacking elements', function () { return (core_1.jsx(index_1.Stack, { spacing: [8, 16] },
    core_1.jsx("div", { css: exampleRow }, "full width row 1"),
    core_1.jsx("div", { css: exampleRow }, "full width row 2"),
    core_1.jsx("div", { css: exampleRow }, "full width row 3"),
    core_1.jsx("div", { css: exampleRow }, "full width row 4"),
    core_1.jsx("div", { css: exampleRow }, "full width row 5"),
    core_1.jsx("div", { css: exampleRow }, "full width row 6"))); });
react_1.storiesOf('Layout|Arrangement', module).add('Inlining elements', function () { return (core_1.jsx(index_1.Inline, { spacing: [8, 16] },
    core_1.jsx("div", { css: exampleRow }, "full width row 1"),
    core_1.jsx("div", { css: exampleRow }, "full width row 2"),
    core_1.jsx("div", { css: exampleRow }, "full width row 3"),
    core_1.jsx("div", { css: exampleRow }, "full width row 4"),
    core_1.jsx("div", { css: exampleRow }, "full width row 5"),
    core_1.jsx("div", { css: exampleRow }, "full width row 6"))); });
//# sourceMappingURL=stories.js.map