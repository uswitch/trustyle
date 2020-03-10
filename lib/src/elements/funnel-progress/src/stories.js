"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var addon_knobs_1 = require("@storybook/addon-knobs");
var _1 = __importDefault(require("./"));
exports.default = {
    title: 'Elements|Funnel Progress'
};
exports.Example = function () { return (core_1.jsx(_1.default, { phases: [
        {
            key: 'currentPlan',
            title: 'Current plan'
        },
        {
            key: 'results',
            title: 'Results'
        },
        {
            key: 'apply',
            title: 'Apply'
        }
    ], currentPhaseKey: addon_knobs_1.select('phase', ['currentPlan', 'results', 'apply'], 'results'), progress: addon_knobs_1.number(name, 0.25, {
        range: true,
        min: 0,
        max: 1,
        step: 0.05
    }) })); };
//# sourceMappingURL=stories.js.map