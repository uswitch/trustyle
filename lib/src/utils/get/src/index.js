"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// From https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_get
var get = function (obj, path, defaultValue) {
    var travel = function (regexp) {
        return String.prototype.split
            .call(path, regexp)
            .filter(Boolean)
            .reduce(function (res, key) { return (res !== null && res !== undefined ? res[key] : res); }, obj);
    };
    var result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
    return result === undefined || result === obj ? defaultValue : result;
};
exports.default = get;
//# sourceMappingURL=index.js.map