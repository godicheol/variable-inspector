(function() {
    'use strict';

    var exports = {};

    exports.isEmpty = function(arg) {
        return (Object.prototype.toString.call(arg) === '[object Array]' && arg.length === 0) ||
            (typeof(arg) === "object" && arg !== null && Object.keys(arg).length === 0) ||
            (typeof(arg) === "string" && arg === "");
    }
    exports.isUndefined = function(arg) {
        return typeof(arg) === "undefined";
    }
    exports.isNull = function(arg) {
        return (typeof(arg) === "object" && arg === null);
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
    exports.isUrl = function(arg) {
        if (typeof(URL) !== "undefined") {
            try {
                return /^(https?:|file:)$/i.test(new URL(arg).protocol);
            } catch(err) {
                return false;
            }
        } else {
            var re = new RegExp('^(https?:\\/\\/)?'+ // Protocal
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
                '((\\d{1,3}\\.){3}\\d{1,3}))'+ // domain name or ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
            return re.test(arg);
        }
    }
    exports.isPhoneNumber = function(arg) {
        return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(arg);
    }
    exports.hasPhoneNumber = function(arg) {
        return /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/im.test(arg);
    }
    exports.isEmailAddress = function(arg) {
        return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(arg);
    }
    exports.isCurrency = function(arg) {
        // USD, WON, JPY, CNY
        return /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?(\s?(\₩|\$|\¥|\Ұ|\円|USD|WON|JPY|CNY))?$/i.test(arg);
    }
    exports.isLocalCode = function(arg) {
        return ["af","af-ZA","ar","ar","bg","bg-BG","ca","ca-AD","cs","cs-CZ","cy","cy-GB","da","da-DK","de","de-DE","el","el-GR","en","en-US","es","es-ES","et","et-EE","eu","eu","fa","fa-IR","fi","fi-FI","fr","fr-FR","he","he-IL","hi","hi-IN","hr","hr-HR","hu","hu-HU","id","id-ID","is","is-IS","it","it-IT","ja","ja-JP","km","km-KH","ko","ko-KR","la","la","lt","lt-LT","lv","lv-LV","mn","mn-MN","nb","nb-NO","nl","nl-NL","nn","nn-NO","pl","pl-PL","pt","pt-PT","ro","ro-RO","ru","ru-RU","sk","sk-SK","sl","sl-SI","sr","sr-RS","sv","sv-SE","th","th-TH","tr","tr-TR","uk","uk-UA","vi","vi-VN","zh","zh-CN"].indexOf(arg) > -1;
    }
    exports.isYoutubeUrl = function(arg) {
        return /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/.test(arg);
    }
    exports.include = function(arg, reg) {
        if (Object.prototype.toString.call(reg) === '[object Array]') {
            return new RegExp("("+reg.join("|")+")").test(arg);
        } else if (typeof(reg) === "string" || typeof(reg) === "number") {
            return new RegExp("("+reg+")").test(arg);
        } else if (typeof(reg) === "object" && reg !== null) {
            if (!Array.prototype.find) {
                return Object.keys(reg).map(function(el){return reg[el]}).indexOf(arg) > -1;
            } else {
                return Object.keys(reg).find(function(el) {return reg[el] === arg;});
            }
        } else {
            return false;
        }
    }

    if (typeof(window.variableInspector) === "undefined") {
        window.variableInspector = exports;
    }
})();