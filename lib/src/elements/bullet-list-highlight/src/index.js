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
var trustyle_styles_1 = require("@uswitch/trustyle.styles");
var trustyle_icon_1 = require("@uswitch/trustyle.icon");
var st = __importStar(require("./styles"));
var Bullet = function (_a) {
    var children = _a.children;
    return (core_1.jsx("li", { css: st.highlight },
        core_1.jsx("span", null,
            core_1.jsx("i", { css: st.highlightBullet },
                core_1.jsx(trustyle_icon_1.Icon, { glyph: "arrow", color: trustyle_styles_1.colors.white, direction: "right" }))),
        core_1.jsx("div", { css: st.highlightBulletContent }, children)));
};
exports.BulletListHighlight = function (_a) {
    var highlights = _a.highlights;
    return (core_1.jsx("ul", { css: st.highlights }, highlights.map(function (highlight, key) { return (core_1.jsx(Bullet, { key: key }, highlight)); })));
};
//# sourceMappingURL=index.js.map