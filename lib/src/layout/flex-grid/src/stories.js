"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_ui_1 = require("theme-ui");
var react_1 = require("@storybook/react");
var index_1 = require("./index");
var bigCenteredSX = { height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' };
react_1.storiesOf('Layout|Flex Grid', module).add('Basic Example', function () { return (theme_ui_1.jsx(index_1.Container, { sx: { bg: '#eee', color: 'white' } },
    theme_ui_1.jsx(index_1.Row, { direction: ['column', 'row', 'row'], sx: { textAlign: 'center' } },
        theme_ui_1.jsx(index_1.Col, null, "Col 1"),
        theme_ui_1.jsx(index_1.Col, null, "Col 2"),
        theme_ui_1.jsx(index_1.Col, null, "Col 3"),
        theme_ui_1.jsx(index_1.Col, null, "Col 4")))); });
react_1.storiesOf('Layout|Flex Grid', module).add('', function () { return (theme_ui_1.jsx(index_1.Container, null,
    theme_ui_1.jsx(index_1.Row, { direction: 'row', sx: { textAlign: 'center' }, cols: [6, 8, 12] },
        theme_ui_1.jsx(index_1.Col, { span: [1, 5, 2], sx: bigCenteredSX }, "Col 1"),
        theme_ui_1.jsx(index_1.Col, { span: [1, 1, 2], sx: bigCenteredSX }, "Col 2"),
        theme_ui_1.jsx(index_1.Col, { span: [1, 1, 2], sx: bigCenteredSX }, "Col 3"),
        theme_ui_1.jsx(index_1.Col, { span: [1, 1, 6], sx: bigCenteredSX }, "Col 4")))); });
//# sourceMappingURL=stories.js.map