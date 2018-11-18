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
        view: function (_a) {
            var attrs = _a.attrs, children = _a.children;
            var inputAttrs = Object.assign({}, attrs, { type: attrs.type || 'checkbox', class: undefined });
            var containerAttrs = {};
            if (attrs.id !== undefined)
                containerAttrs.for = attrs.id;
            if (attrs.class !== undefined)
                containerAttrs.class = attrs.class;
            return m('label.mithril-checkbox', containerAttrs, m('input', inputAttrs), m('div.mithril-checkbox-shape'), m('span.mithril-checkbox-children', children));
        }
    };
    exports.default = MithrilCheckbox;
});
