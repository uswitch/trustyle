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
exports.Fieldset = function (_a) {
    var children = _a.children, label = _a.label;
    return (core_1.jsx("fieldset", { css: st.root },
        label && core_1.jsx("legend", { css: st.label }, label),
        children));
};
//# sourceMappingURL=index.js.map