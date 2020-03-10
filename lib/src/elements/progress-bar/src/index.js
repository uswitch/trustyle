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
var core_1 = require("@emotion/core");
var st = __importStar(require("./styles"));
exports.ProgressBar = function (_a) {
    var current = _a.current, max = _a.max;
    return (core_1.jsx("progress", { css: st.progress, value: current + 1, max: max + 1 }));
};
//# sourceMappingURL=index.js.map