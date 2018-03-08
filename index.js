"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("mithril");
exports.default = {
    view: function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var inputAttrs = Object.assign({}, attrs, { type: attrs.type || 'checkbox', class: undefined });
        var containerAttrs = {};
        if (attrs.id !== undefined)
            containerAttrs.for = attrs.id;
        if (attrs.class !== undefined)
            containerAttrs.class = attrs.class;
        return m('label.mithril-checkbox', containerAttrs, m('input', inputAttrs), m('div.mithril-checkbox-shape'), children);
    }
};
