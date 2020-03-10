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
Object.defineProperty(exports, "__esModule", { value: true });
// This ignore should be removed when types PR is merged
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/41567
// @ts-ignore
var theme_ui_1 = require("theme-ui");
var trustyle_icon_1 = require("@uswitch/trustyle.icon");
function getNumbers(currentPage, totalPages) {
    var AROUND_CURRENT = 1;
    var END_LENGTH = 5 + AROUND_CURRENT * 2;
    if (totalPages <= END_LENGTH) {
        return new Array(totalPages).fill('').map(function (_, i) { return i + 1; });
    }
    var numbers = [1];
    if (currentPage > 2 + AROUND_CURRENT) {
        // The ternary is so that we don't end up with 1 … 3
        numbers.push(currentPage === 3 + AROUND_CURRENT ? 2 : '...');
    }
    for (var i = currentPage - AROUND_CURRENT; i <= currentPage + AROUND_CURRENT; i++) {
        if (i > 1 && i < totalPages) {
            numbers.push(i);
        }
    }
    if (currentPage < totalPages - (1 + AROUND_CURRENT)) {
        numbers.push(currentPage === totalPages - (2 + AROUND_CURRENT) ? totalPages - 1 : '...');
    }
    numbers.push(totalPages);
    // This is to ensure that the pagination always has the same number of links,
    // even if the currentPage is at the start or end
    var isFirstHalf = currentPage < totalPages / 2;
    for (var i = numbers.length; i < END_LENGTH; i++) {
        var dotsIndex = numbers.indexOf('...');
        var prevNumber = numbers[dotsIndex + (isFirstHalf ? -1 : 1)];
        var newNumber = prevNumber + (isFirstHalf ? 1 : -1);
        numbers.splice(dotsIndex + (isFirstHalf ? 0 : 1), 0, newNumber);
    }
    return numbers;
}
var InlineIcon = function (_a) {
    var direction = _a.direction;
    var theme = theme_ui_1.useThemeUI().theme;
    var color = 'black';
    if (theme.pagination) {
        // This step is necessary as the icon component doesn't support themes yet
        var processedTheme = theme_ui_1.css(theme.pagination)(theme);
        if (processedTheme.arrow && processedTheme.arrow.color) {
            color = processedTheme.arrow.color;
        }
    }
    return (theme_ui_1.jsx("span", { sx: { svg: { display: 'inline-block' } } },
        theme_ui_1.jsx(trustyle_icon_1.Icon, { glyph: "caret", color: color, direction: direction, size: 14 })));
};
var Pagination = function (_a) {
    var currentPage = _a.currentPage, totalPages = _a.totalPages, _b = _a.onPageChange, onPageChange = _b === void 0 ? function () { } : _b, numberToLink = _a.numberToLink;
    var _c, _d;
    var theme = theme_ui_1.useThemeUI().theme;
    var numbers = getNumbers(currentPage, totalPages);
    var liStyling = {
        display: 'inline-block',
        padding: 'xs',
        variant: 'pagination.li'
    };
    var anchorStyling = {
        color: 'inherit',
        textDecoration: 'none',
        cursor: 'pointer'
    };
    return (theme_ui_1.jsx("ul", { sx: {
            listStyleType: 'none',
            marginLeft: 0,
            paddingLeft: 0,
            variant: 'pagination.main'
        } },
        theme_ui_1.jsx("li", { sx: __assign(__assign({}, (currentPage === 1 && ((_c = theme.pagination) === null || _c === void 0 ? void 0 : _c.arrowDisabled))), liStyling) }, currentPage === 1 ? (theme_ui_1.jsx(InlineIcon, { direction: "left" })) : (theme_ui_1.jsx("a", { onClick: function (e) { return onPageChange(1, e); }, href: numberToLink && numberToLink(1), sx: anchorStyling },
            theme_ui_1.jsx(InlineIcon, { direction: "left" })))),
        numbers.map(function (number, i) {
            var _a, _b;
            return (theme_ui_1.jsx("li", { key: i, sx: __assign(__assign({}, (number === currentPage
                    ? (_a = theme.pagination) === null || _a === void 0 ? void 0 : _a.currentPage : (_b = theme.pagination) === null || _b === void 0 ? void 0 : _b.nonCurrentPage)), liStyling) }, number === '...' ? (number) : (theme_ui_1.jsx("a", { onClick: function (e) { return onPageChange(number, e); }, href: numberToLink && numberToLink(number), sx: anchorStyling }, number))));
        }),
        theme_ui_1.jsx("li", { sx: __assign(__assign({}, (currentPage === totalPages && ((_d = theme.pagination) === null || _d === void 0 ? void 0 : _d.arrowDisabled))), liStyling) }, currentPage === totalPages ? (theme_ui_1.jsx(InlineIcon, { direction: "right" })) : (theme_ui_1.jsx("a", { onClick: function (e) { return onPageChange(totalPages, e); }, href: numberToLink && numberToLink(totalPages), sx: anchorStyling },
            theme_ui_1.jsx(InlineIcon, { direction: "right" }))))));
};
exports.default = Pagination;
//# sourceMappingURL=index.js.map