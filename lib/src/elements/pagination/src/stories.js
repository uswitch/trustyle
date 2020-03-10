"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
/** @jsx jsx */
var React = __importStar(require("react"));
var core_1 = require("@emotion/core");
var react_1 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var addon_actions_1 = require("@storybook/addon-actions");
var _1 = __importDefault(require("./"));
var PaginationStory = function (_a) {
    var type = _a.type;
    var currentPageKnob = addon_knobs_1.number('Current page', 5);
    var totalPages = addon_knobs_1.number('Total pages', 10);
    var _b = React.useState(currentPageKnob), currentPage = _b[0], setCurrentPage = _b[1];
    var handlePageChange = function (number) {
        addon_actions_1.action("number clicked: " + number)();
        setCurrentPage(number);
    };
    var props = {};
    if (type === 'onClick') {
        props.onPageChange = handlePageChange;
    }
    else {
        props.numberToLink = function (number) { return "http://uswitch.com/page/" + number; };
        if (type === 'both') {
            props.onPageChange = function (number, e) {
                e.preventDefault();
                handlePageChange(number);
            };
        }
    }
    return (core_1.jsx(_1.default, __assign({ currentPage: currentPage, totalPages: totalPages }, props)));
};
react_1.storiesOf('Elements|Pagination', module)
    .add('Example with onClick', function () { return core_1.jsx(PaginationStory, { type: "onClick" }); })
    .add('Example with href', function () { return core_1.jsx(PaginationStory, { type: "href" }); })
    .add('Example with both', function () { return core_1.jsx(PaginationStory, { type: "both" }); });
//# sourceMappingURL=stories.js.map