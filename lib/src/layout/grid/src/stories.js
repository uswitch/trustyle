"use strict";
/** @jsx jsx */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var core_1 = require("@emotion/core");
var react_1 = require("@storybook/react");
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
var index_1 = require("./index");
var exampleColumnStyle = core_1.css({
    backgroundColor: trustyle_styles_1.colors.battleshipGrey,
    border: trustyle_styles_1.colors.lightGreyBlue + " 1px solid",
    fontFamily: trustyle_styles_1.typography.defaultFontFamily,
    borderRadius: '1px',
    color: trustyle_styles_1.colors.offWhite
});
var exampleRowStyle = core_1.css({
    fontFamily: trustyle_styles_1.typography.defaultFontFamily,
    paddingBottom: '16px'
});
var globalStyles = { body: { margin: 0 } };
react_1.storiesOf('Layout|Grid', module).add('Basic Example', function () { return (core_1.jsx(React.Fragment, null,
    core_1.jsx(core_1.Global, { styles: globalStyles }),
    core_1.jsx(index_1.Container, { css: { backgroundColor: trustyle_styles_1.colors.slateGrey, paddingBottom: '16px' } },
        core_1.jsx(index_1.Row, { css: exampleRowStyle },
            core_1.jsx(index_1.Column, { s: 6 / 12, m: 6 / 12, l: 1 / 2 },
                core_1.jsx("div", { css: { backgroundColor: 'white' } },
                    core_1.jsx("h2", null, "A 6 / 12 column"))),
            core_1.jsx(index_1.Column, { s: 6 / 12, m: 1 / 2, l: 1 / 2 },
                core_1.jsx("div", { css: { backgroundColor: 'white' } },
                    core_1.jsx("h2", null, "A 6 / 12 column")))),
        core_1.jsx(index_1.Row, { css: exampleRowStyle },
            core_1.jsx(index_1.Column, { s: 2 / 12, m: 2 / 12, l: 2 / 12 },
                core_1.jsx("div", { css: { backgroundColor: 'white' } }, "2/12")),
            core_1.jsx(index_1.Column, { s: 2 / 12, m: 2 / 12, l: 2 / 12 },
                core_1.jsx("div", { css: { backgroundColor: 'white' } }, "2/12")),
            core_1.jsx(index_1.Column, { s: 2 / 12, m: 2 / 12, l: 2 / 12 },
                core_1.jsx("div", { css: { backgroundColor: 'white' } }, "2/12")),
            core_1.jsx(index_1.Column, { s: 2 / 12, m: 2 / 12, l: 2 / 12 },
                core_1.jsx("div", { css: { backgroundColor: 'white' } }, "2/12")),
            core_1.jsx(index_1.Column, { s: 2 / 12, m: 2 / 12, l: 2 / 12 },
                core_1.jsx("div", { css: { backgroundColor: 'white' } }, "2/12")),
            core_1.jsx(index_1.Column, { s: 2 / 12, m: 2 / 12, l: 2 / 12 },
                core_1.jsx("div", { css: { backgroundColor: 'white' } }, "2/12"))),
        core_1.jsx("div", { css: { backgroundColor: 'white' } }, "A normal block element in the container not in a row or column")))); });
react_1.storiesOf('Layout|Grid', module).add('Custom gutters', function () {
    var gutterWidths = [8, 16, 24];
    return (core_1.jsx(React.Fragment, null,
        core_1.jsx(core_1.Global, { styles: globalStyles }),
        core_1.jsx(index_1.Container, { gutterWidths: gutterWidths, css: { backgroundColor: trustyle_styles_1.colors.offWhite, paddingBottom: '16px' } },
            core_1.jsx(index_1.Row, { css: exampleRowStyle },
                core_1.jsx(index_1.Column, { m: 1 / 2, l: 1 / 2 },
                    core_1.jsx("div", { css: { backgroundColor: 'white' } },
                        core_1.jsx("h2", null, "A 6 / 12 column"))),
                core_1.jsx(index_1.Column, { m: 1 / 2, l: 1 / 2 },
                    core_1.jsx("div", { css: { backgroundColor: 'white' } },
                        core_1.jsx("h2", null, "A 6 / 12 column")))),
            core_1.jsx("div", { css: { backgroundColor: 'white' } }, "A normal block element in the container not in a row or column"))));
});
react_1.storiesOf('Layout|Grid', module).add('Example 1 - basics', function () { return (core_1.jsx(React.Fragment, null,
    core_1.jsx(core_1.Global, { styles: globalStyles }),
    core_1.jsx(index_1.Container, { outerMargin: ['0 8px', '0 auto'], css: { backgroundColor: trustyle_styles_1.colors.offWhite } },
        core_1.jsx(index_1.Row, { css: exampleRowStyle, topSpacing: [8, 16] },
            core_1.jsx(index_1.Column, null,
                core_1.jsx("p", null, "Here is an example of a grid which will turn into 100% width columns on mobile."))),
        core_1.jsx(index_1.Row, { css: exampleRowStyle, topSpacing: [8, 16] },
            core_1.jsx(index_1.Column, { "hide-s": true, m: 1 / 4, l: 1 / 6, css: exampleColumnStyle }, ".us-col-md-2"),
            core_1.jsx(index_1.Column, { m: 1 / 4, l: 1 / 6, css: exampleColumnStyle }, ".us-col-md-2"),
            core_1.jsx(index_1.Column, { m: 1 / 4, l: 1 / 3, css: exampleColumnStyle }, ".us-col-md-4"),
            core_1.jsx(index_1.Column, { m: 1 / 4, l: 1 / 3, css: exampleColumnStyle }, ".us-col-md-4")),
        core_1.jsx(index_1.Row, { css: exampleRowStyle, topSpacing: [8, 16] },
            core_1.jsx(index_1.Column, { m: 1 / 2, l: 2 / 3, css: exampleColumnStyle }, ".us-col-md-2"),
            core_1.jsx(index_1.Column, { m: 1 / 2, l: 1 / 3, css: exampleColumnStyle }, ".us-col-md-4")),
        core_1.jsx(index_1.Row, { css: exampleRowStyle, topSpacing: [8, 16] },
            core_1.jsx(index_1.Column, { s: 1 / 2, m: 1 / 2, l: 1 / 2, css: exampleColumnStyle }, ".us-col-md-2"),
            core_1.jsx(index_1.Column, { s: 1 / 2, m: 1 / 2, l: 1 / 2, css: exampleColumnStyle }, ".us-col-md-4"))))); });
react_1.storiesOf('Layout|Grid', module).add('Example 2 - center', function () { return (core_1.jsx(React.Fragment, null,
    core_1.jsx(core_1.Global, { styles: globalStyles }),
    core_1.jsx(index_1.Container, { css: { backgroundColor: trustyle_styles_1.colors.offWhite } },
        core_1.jsx(index_1.Row, { css: exampleRowStyle, centerX: true },
            core_1.jsx(index_1.Column, { m: 1 / 2, l: 1 / 2 },
                core_1.jsx("p", null, "Here is an example of a grid which will turn into 100% width columns on mobile.")))))); });
react_1.storiesOf('Layout|Grid', module).add('Example 3 - nested grids', function () { return (core_1.jsx(React.Fragment, null,
    core_1.jsx(core_1.Global, { styles: globalStyles }),
    core_1.jsx(index_1.Container, { css: { backgroundColor: trustyle_styles_1.colors.offWhite } },
        core_1.jsx(index_1.Row, { css: exampleRowStyle },
            core_1.jsx(index_1.Column, null,
                core_1.jsx(index_1.Row, null,
                    core_1.jsx(index_1.Column, { m: 6 / 8, l: 8 / 12 },
                        core_1.jsx("h2", null, "A little header"))),
                core_1.jsx(index_1.Row, null,
                    core_1.jsx(index_1.Column, { s: 1 / 2, m: 1 / 2, l: 1 / 2 },
                        core_1.jsx("div", { css: exampleColumnStyle }, "Something")),
                    core_1.jsx(index_1.Column, { s: 1 / 2, m: 1 / 2, l: 1 / 2 },
                        core_1.jsx("div", { css: exampleColumnStyle }, "Something else")))))))); });
react_1.storiesOf('Layout|Grid', module).add('Example 4 - passing screen sizes', function () { return (core_1.jsx(React.Fragment, null,
    core_1.jsx(core_1.Global, { styles: globalStyles }),
    core_1.jsx(index_1.Container, { css: { backgroundColor: trustyle_styles_1.colors.offWhite }, containerWidths: ['100%', 740, 990], gutterWidths: [8, 8, 8] },
        core_1.jsx(index_1.Row, { css: exampleRowStyle, gutterWidths: [8, 8, 8] },
            core_1.jsx(index_1.Column, { gutterWidths: [8, 8, 8] },
                core_1.jsx(index_1.Row, { gutterWidths: [8, 8, 8] },
                    core_1.jsx(index_1.Column, { m: 6 / 8, l: 8 / 12 },
                        core_1.jsx("h2", null, "A little header"))),
                core_1.jsx(index_1.Row, { gutterWidths: [8, 8, 8, 8] },
                    core_1.jsx(index_1.Column, { s: 1 / 3, m: 1 / 3, l: 1 / 3, gutterWidths: [8, 8, 8] },
                        core_1.jsx("div", { css: exampleColumnStyle }, "Something")),
                    core_1.jsx(index_1.Column, { s: 1 / 3, m: 1 / 3, l: 1 / 3, gutterWidths: [8, 8, 8] },
                        core_1.jsx("div", { css: exampleColumnStyle }, "Something")),
                    core_1.jsx(index_1.Column, { s: 1 / 3, m: 1 / 3, l: 1 / 3, gutterWidths: [8, 8, 8] },
                        core_1.jsx("div", { css: exampleColumnStyle }, "Something else")))))))); });
//# sourceMappingURL=stories.js.map