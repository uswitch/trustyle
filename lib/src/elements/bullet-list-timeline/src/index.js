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
var st = __importStar(require("./styles"));
var EmailSVG = function () { return (core_1.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 36 36" },
    core_1.jsx("g", { fill: "none", fillRule: "evenodd" },
        core_1.jsx("ellipse", { cx: "17.848", cy: "17.864", fill: "#008FE9", rx: "17.848", ry: "17.864" }),
        core_1.jsx("path", { fill: trustyle_styles_1.colors.white, d: "M10.598 24.02h14.68c.608 0 1.101-.493 1.101-1.102v-9.52c0-.608-.493-1.101-1.101-1.101h-14.68c-.608 0-1.102.493-1.102 1.1v9.521c0 .609.494 1.102 1.102 1.102z" }),
        core_1.jsx("path", { fill: trustyle_styles_1.colors.azure, d: "M17.958 20.225a1.78 1.78 0 0 1-1.108-.383l-5.156-4.099.744-.892 5.155 4.098c.212.168.52.168.73-.001l5.126-4.097.746.892-5.124 4.096a1.782 1.782 0 0 1-1.113.386" })))); };
var CalSVG = function () { return (core_1.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 36 36" },
    core_1.jsx("defs", null,
        core_1.jsx("filter", { id: "a", width: "220.8%", height: "228.3%", x: "-60.4%", y: "-61.5%", filterUnits: "objectBoundingBox" },
            core_1.jsx("feMerge", null,
                core_1.jsx("feMergeNode", { in: "SourceGraphic" })))),
    core_1.jsx("g", { fill: "none", fillRule: "evenodd" },
        core_1.jsx("circle", { cx: "18", cy: "18", r: "18", fill: trustyle_styles_1.colors.blueGrey }),
        core_1.jsx("g", { fill: trustyle_styles_1.colors.white, filter: "url(#a)", transform: "translate(9.31 9.287)" },
            core_1.jsx("path", { d: "M2.268 15.071h12.595V7.076H2.268v7.995zM16.297 3.417H.834c-.37 0-.668.286-.668.64v12.387c0 .354.299.64.668.64h15.463c.37 0 .669-.286.669-.64V4.057c0-.354-.3-.64-.67-.64zM3.062 2.278H4.8V0H3.062zM12.91 2.278h1.738V0H12.91z" }))))); };
var CheckSVG = function () { return (core_1.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 36 36" },
    core_1.jsx("defs", null,
        core_1.jsx("filter", { id: "a", width: "207.1%", height: "207.1%", x: "-53%", y: "-53%", filterUnits: "objectBoundingBox" },
            core_1.jsx("feMerge", null,
                core_1.jsx("feMergeNode", { in: "SourceGraphic" })))),
    core_1.jsx("g", { fill: "none", fillRule: "evenodd" },
        core_1.jsx("circle", { cx: "18", cy: "18", r: "18", fill: trustyle_styles_1.colors.blueGrey }),
        core_1.jsx("g", { filter: "url(#a)", transform: "translate(8.1 8.1)" },
            core_1.jsx("circle", { cx: "9.9", cy: "9.9", r: "9.9", fill: "#FFF" }),
            core_1.jsx("path", { fill: trustyle_styles_1.colors.blueGrey, fillRule: "nonzero", d: "M13.352 6.6l1.498 1.399-5.952 6.026-3.948-3.808 1.559-1.342 2.45 2.364z" }))))); };
var Bullet = function (_a) {
    var position = _a.position, children = _a.children;
    return (core_1.jsx("li", { css: core_1.css([st.highlight, st[position]]) },
        core_1.jsx("div", { css: st.highlightBulletIconContainer },
            core_1.jsx("i", { css: st.highlightBullet },
                position === 'first' && core_1.jsx(EmailSVG, null),
                position === 'middle' && core_1.jsx(CalSVG, null),
                position === 'last' && core_1.jsx(CheckSVG, null))),
        core_1.jsx("div", { css: st.highlightBulletContent }, children)));
};
exports.BulletListTimeline = function (_a) {
    var stages = _a.stages;
    return (core_1.jsx("ul", { css: st.highlights }, stages.map(function (stage, index) {
        var isFirst = index === 0;
        var isLast = index === stages.length - 1;
        return (core_1.jsx(Bullet, { key: index, position: isFirst ? 'first' : isLast ? 'last' : 'middle' }, stage));
    })));
};
//# sourceMappingURL=index.js.map