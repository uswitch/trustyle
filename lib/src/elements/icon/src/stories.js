"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var theme_selector_1 = __importDefault(require("../../../utils/theme-selector"));
var _1 = require("./");
var glyphChoices = [
    'arrow',
    'caret',
    'check',
    'close',
    'edit',
    'email',
    'filters',
    'home',
    'letter',
    'phone',
    'plus',
    'sms'
];
var directionChoices = ['up', 'down', 'right', 'left'];
react_1.storiesOf('Elements|Icon', module).add('With selectable glyph and color', function () {
    var theme = theme_selector_1.default();
    return (React.createElement(_1.Icon, { glyph: addon_knobs_1.select('glyph', glyphChoices, 'arrow'), color: addon_knobs_1.select('color', theme.colors, 'link'), direction: addon_knobs_1.select('direction', directionChoices, 'up'), size: addon_knobs_1.number('Size', 0) }));
});
//# sourceMappingURL=stories.js.map