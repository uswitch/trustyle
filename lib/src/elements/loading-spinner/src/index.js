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
exports.LoadingSpinner = function () { return (core_1.jsx("div", { css: st.rotate }, "loading...")); };
//# sourceMappingURL=index.js.map