"use strict";
/** @jsx jsx */
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
Object.defineProperty(exports, "__esModule", { value: true });
var theme_ui_1 = require("theme-ui");
var st = __importStar(require("./styles"));
exports.Sms = function (_a) {
    var color = _a.color, size = _a.size;
    return (theme_ui_1.jsx("svg", { sx: __assign(__assign({ display: 'block' }, st.size(size)), { fill: color, stroke: color }), viewBox: "0 0 36 36" },
        theme_ui_1.jsx("path", { d: "M10.712 1.534v2.399H2.399V33.6h18.358V20.4h2.4v13.738c0 1.01-.795 1.861-1.817 1.861H1.817C.795 36 0 35.15 0 34.139V3.395c0-1.01.795-1.861 1.817-1.861h8.895zm1.69 28a1.2 1.2 0 0 1 0 2.4h-1.647a1.2 1.2 0 1 1 0-2.4zM32.935 0c.787 0 1.424.639 1.424 1.426l-.014 13.9c0 .786-.636 1.425-1.423 1.425H22.913l-3.953 3.338c-.854.82-2.54.313-2.54-1.028v-2.33l-2.158.015a1.425 1.425 0 0 1-1.451-1.426l.013-13.896C12.824.64 13.461 0 14.248 0h18.687zM17.441 18.234l-.044.035-.042.038.086-.073zM31.959 2.4H15.223l-.012 11.94 2.158-.014a1.424 1.424 0 0 1 1.45 1.424v1.32l2.75-2.32c.266-.256.62-.398.987-.398h9.391L31.96 2.4zm-8.356 6.99v2.4H18.88v-2.4h4.722zm4.747-3.62v2.398H18.88V5.768h9.469z", transform: "scale(0.95) translate(2 1)" })));
};
//# sourceMappingURL=sms.js.map