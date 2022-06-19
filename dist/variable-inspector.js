(function() {
    'use strict';

    var exports = {};

    exports.isUndefined = function(arg) {
        return typeof(arg) === "undefined";
    }
    exports.isNull = function(arg) {
        return arg === null;
    }
    exports.isBoolean = function(arg) {
        return typeof(arg) === "boolean";
    }
    exports.isString = function(arg) {
        return typeof(arg) === "string";
    }
    exports.isNumber = function(arg) {
        return typeof(arg) === "number" && !Number.isNaN(arg);
    }
    exports.isNumeric = function(arg) {
        return (typeof(arg) === "string") && !Number.isNaN(parseFloat(arg)) && isFinite(arg);
    }
    exports.isObject = function(arg) {
        return (typeof(arg) === "object" && arg !== null);
    }
    exports.isFunction = function(arg) {
        return typeof(arg) === "function";
    }
    exports.isFile = function(arg) {
        return (arg instanceof File);
    }
    exports.isBlob = function(arg) {
        return (arg instanceof Blob);
    }
    exports.isRegExp = function(arg) {
        return (arg instanceof RegExp);
    }
    exports.isError = function(arg) {
        return (arg instanceof Error);
    }
    exports.isNode = function(arg) {
        return (typeof(Node) === "object" ? (arg instanceof Node) : typeof(arg) === "object" && arg !== null && typeof(arg.nodeType) === "number" && typeof(arg.nodeName) === "string");
    }
    exports.isElement = function(arg) {
        return (typeof(HTMLElement === "object") ? (arg instanceof HTMLElement) : typeof(arg) === "object" && arg !== null  && arg.nodeType === 1 && typeof(arg.nodeName) === "string");
    }
    exports.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
    exports.isDate = function(arg) {
        return (arg instanceof Date) && !Number.isNaN(arg.valueOf())
    }
    exports.include = function(arg, arr) {
        if (Object.prototype.toString.call(arr) !== '[object Array]') {
            throw new Error("Parameter must be Array");
        }
        return new RegExp("^("+arr.join("|")+")$").test(arg);
    }

    if (typeof(window.variableInspector) === "undefined") {
        window.variableInspector = exports;
    }
})();