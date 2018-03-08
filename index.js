"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("mithril");
exports.default = {
    view: function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var inputAttrs = __assign({}, attrs, { type: attrs.type || 'checkbox', class: undefined });
        return m('label.mithril-checkbox', {
            class: attrs.class,
            for: inputAttrs.id
        }, m('input.mithril-checkbox-input', inputAttrs), m('div.mithril-checkbox-shape'), children);
    }
};
