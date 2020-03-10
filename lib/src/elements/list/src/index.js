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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var theme_ui_1 = require("theme-ui");
exports.List = function (_a) {
    var children = _a.children, _b = _a.listType, listType = _b === void 0 ? 'bullet' : _b, props = __rest(_a, ["children", "listType"]);
    var sx = {
        listStyle: 'none',
        paddingLeft: 'sm',
        marginY: 'sm'
    };
    var childrenWithProps = React.Children.map(children, function (childComponent) {
        return React.cloneElement(childComponent, { listType: listType });
    });
    return listType === 'numeric' ? (theme_ui_1.jsx("ol", __assign({}, props, { sx: sx }), childrenWithProps)) : (theme_ui_1.jsx("ul", __assign({}, props, { sx: sx }), children));
};
exports.ListItem = function (_a) {
    var children = _a.children, _b = _a.listType, listType = _b === void 0 ? 'bullet' : _b, props = __rest(_a, ["children", "listType"]);
    var theme = theme_ui_1.useThemeUI().theme;
    var sx = {
        marginBottom: 'sm',
        counterIncrement: 'li',
        position: 'relative',
        paddingLeft: 'sm',
        '::before': {
            position: 'absolute',
            left: '0px'
        }
    };
    if (listType === 'bullet') {
        sx['::before'] = __assign(__assign({}, sx['::before']), { content: '"• "', color: theme.list && theme.list.bullet ? theme.list.bullet.color : 'black' });
    }
    else if (listType === 'numeric') {
        sx['::before'] = __assign(__assign({}, sx['::before']), { content: 'counter(li)', color: theme.list && theme.list.numeric ? theme.list.numeric.color : 'black' });
    }
    return (theme_ui_1.jsx("li", __assign({ sx: sx }, props), children));
};
//# sourceMappingURL=index.js.map