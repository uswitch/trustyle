"use strict";
/** @jsx jsx */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var styles_1 = require("./styles");
exports.InputAlert = function (_a) {
    var type = _a.type, children = _a.children;
    return (core_1.jsx("div", { css: core_1.css([
            styles_1.root,
            type === 'notification' && styles_1.notification,
            type === 'alert' && styles_1.alert
        ]) }, children));
};
//# sourceMappingURL=index.js.map