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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "mithril"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var m = require("mithril");
    var MithrilCheckbox = {
        // Separate label attributes and input attributes
        // and remove `key` attribute since it should not
        // be used within this view.
        view: function (_a) {
            var _b = _a.attrs, key = _b.key, inputClass = _b.class, className = _b.className, idFor = _b.for, style = _b.style, inputAttrs = __rest(_b, ["key", "class", "className", "for", "style"]), children = _a.children;
            // Build label attrs object
            var labelAttrs = {};
            if (className !== undefined) {
                labelAttrs.className = className;
            }
            else if (inputClass !== undefined) {
                labelAttrs.class = inputClass;
            }
            if (style !== undefined) {
                labelAttrs.style = style;
            }
            if (idFor !== undefined) {
                labelAttrs.for = idFor;
            }
            return m('label.mithril-checkbox', labelAttrs, m('input', inputAttrs), m('div.mithril-checkbox-shape'), m('span.mithril-checkbox-children', children));
        }
    };
    exports.default = MithrilCheckbox;
});
