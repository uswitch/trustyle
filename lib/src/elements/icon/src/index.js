"use strict";
/** @jsx jsx */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var arrow_1 = require("./arrow");
var caret_1 = require("./caret");
var check_1 = require("./check");
var close_1 = require("./close");
var edit_1 = require("./edit");
var email_1 = require("./email");
var filters_1 = require("./filters");
var home_1 = require("./home");
var letter_1 = require("./letter");
var phone_1 = require("./phone");
var plus_1 = require("./plus");
var sms_1 = require("./sms");
var assertNever = function (name, value) {
    throw new Error("Unexpected " + name + " '" + value + "'");
};
exports.Icon = function (_a) {
    var color = _a.color, _b = _a.direction, direction = _b === void 0 ? 'up' : _b, glyph = _a.glyph, size = _a.size;
    switch (glyph) {
        case 'arrow':
            return core_1.jsx(arrow_1.Arrow, { color: color, direction: direction, size: size });
        case 'caret':
            return core_1.jsx(caret_1.Caret, { color: color, direction: direction, size: size });
        case 'check':
            return core_1.jsx(check_1.Check, { color: color, size: size });
        case 'close':
            return core_1.jsx(close_1.Close, { color: color, size: size });
        case 'edit':
            return core_1.jsx(edit_1.Edit, { color: color, size: size });
        case 'email':
            return core_1.jsx(email_1.Email, { color: color, size: size });
        case 'filters':
            return core_1.jsx(filters_1.Filters, { color: color, size: size });
        case 'home':
            return core_1.jsx(home_1.Home, { color: color, size: size });
        case 'letter':
            return core_1.jsx(letter_1.Letter, { color: color, size: size });
        case 'phone':
            return core_1.jsx(phone_1.Phone, { color: color, size: size });
        case 'plus':
            return core_1.jsx(plus_1.Plus, { color: color, size: size });
        case 'sms':
            return core_1.jsx(sms_1.Sms, { color: color, size: size });
        default:
            return assertNever('glyph', glyph);
    }
};
//# sourceMappingURL=index.js.map