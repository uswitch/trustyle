"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dayjs_1 = __importDefault(require("dayjs"));
require("dayjs/locale/en-gb");
var localizedFormat_1 = __importDefault(require("dayjs/plugin/localizedFormat"));
dayjs_1.default.locale('en-gb');
dayjs_1.default.extend(localizedFormat_1.default);
exports.default = dayjs_1.default;
//# sourceMappingURL=index.js.map