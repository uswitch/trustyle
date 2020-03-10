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
exports.Letter = function (_a) {
    var color = _a.color, size = _a.size;
    return (theme_ui_1.jsx("svg", { sx: __assign(__assign({ display: 'block' }, st.size(size)), { fill: color, stroke: color }), viewBox: "0 0 48 48" },
        theme_ui_1.jsx("path", { d: "M25.28 0a3.41 3.41 0 0 1 2.333.924l7.946 6.31.128.113a3.408 3.408 0 0 1 1.005 2.416v4.107H33.62V9.763a.337.337 0 0 0-.065-.2l-7.909-6.279-.128-.113a.339.339 0 0 0-.238-.1H3.41a.336.336 0 0 0-.337.337V44.59c0 .187.15.337.337.337h29.874a.337.337 0 0 0 .337-.337v-8.186h3.072v8.186A3.409 3.409 0 0 1 33.283 48H3.41A3.408 3.408 0 0 1 0 44.591V3.408A3.408 3.408 0 0 1 3.409 0zM41.67 13.059l5.792 5.792c.6.6.6 1.572 0 2.172L30.418 38.066a1.536 1.536 0 0 1-1.005.448l-6.306.334c-.93.049-1.69-.734-1.611-1.662l.514-6.127c.03-.361.187-.7.444-.957l17.043-17.043c.6-.6 1.572-.6 2.172 0zM15.867 32.792v3.071H7.83v-3.071h8.038zm24.716-16.475l-15.56 15.56-.32 3.81 3.96-.21 15.54-15.54-3.62-3.62zM19.796 26.59v3.072H7.829V26.59h11.967zm4.191-6.067v3.071h-16.3v-3.071h16.3zm-.52-14.804v7.168c0 .266.175.474.39.517l.084.009h6.212v3.071H23.94c-1.904 0-3.443-1.517-3.54-3.407l-.005-.19V5.72h3.071z", transform: "scale(0.95) translate(1.5 1.3)" })));
};
//# sourceMappingURL=letter.js.map