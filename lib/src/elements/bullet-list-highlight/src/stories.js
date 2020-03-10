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
var _1 = require("./");
exports.default = {
    title: 'Elements|Bullet List Highlight'
};
exports.Example = function () { return (React.createElement(_1.BulletListHighlight, { highlights: [
        React.createElement("span", { key: "example" }, "You will pay \u00A383.15 a month by Direct Debit to British Gas."),
        React.createElement("span", { key: "example2" }, "Your first payment will be taken on or shortly after your supply start date. Bump.")
    ] })); };
//# sourceMappingURL=stories.js.map