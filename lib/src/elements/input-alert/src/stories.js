"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var _1 = require(".");
react_1.storiesOf('Elements|InputAlert', module)
    .add('notification', function () { return (React.createElement(_1.InputAlert, { type: "notification" }, addon_knobs_1.text('Message', "This is an example of a long notification, these notifications should\n          be used in order to give users an instruction, or make users aware of\n          a consequence of their decision. These should be used only if\n          needed."))); })
    .add('error', function () { return (React.createElement(_1.InputAlert, { type: "alert" }, addon_knobs_1.text('Message', "Error messages should be used to tell users both what the problem is\n          and how they can resolve it. Error messages are best suited to\n          senarios when users need to take action to continue."))); });
//# sourceMappingURL=stories.js.map