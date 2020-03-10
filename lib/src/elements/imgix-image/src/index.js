"use strict";
/** @jsx jsx */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_imgix_1 = __importDefault(require("react-imgix"));
var core_1 = require("@emotion/core");
var Image = function (_a) {
    var alt = _a.alt, critical = _a.critical, _b = _a.className, className = _b === void 0 ? '' : _b, height = _a.height, imgixParams = _a.imgixParams, sizes = _a.sizes, src = _a.src, width = _a.width;
    if (!src) {
        return (core_1.jsx("span", { className: className, css: core_1.css({
                display: 'inline-block',
                height: height,
                width: width
            }) }));
    }
    return (core_1.jsx(react_imgix_1.default, { htmlAttributes: { alt: alt }, attributeConfig: !critical
            ? {
                src: 'data-src',
                srcSet: 'data-srcset',
                sizes: 'data-sizes'
            }
            : undefined, className: !critical ? className + " lazyload" : className, src: src, height: height, width: width, sizes: sizes, imgixParams: imgixParams }));
};
exports.ImgixImage = React.memo(Image);
//# sourceMappingURL=index.js.map