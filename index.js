(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.MithrilCheckbox = f()}})(function(){var define,module,exports;return (function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Script or module?
    var m = typeof window === 'object' && typeof window['m'] === 'function'
        ? window['m']
        : require('mithril');
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

},{"mithril":"mithril"}]},{},[1])(1)
});