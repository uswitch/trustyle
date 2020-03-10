"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var facepaint_1 = __importDefault(require("facepaint"));
exports.breakpoints = {
    s: 0,
    m: 640,
    l: 1152
};
exports.mq = facepaint_1.default([640, 1152].map(function (bp) { return "@media (min-width: " + bp + "px)"; }));
//# sourceMappingURL=media-queries.js.map