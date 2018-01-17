/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var app_ts_1 = __webpack_require__(1);
var myApp;
var rootSelector = '#mainApp';
$(function () { return myApp = new app_ts_1.App(rootSelector); });


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var htmlTools_1 = __webpack_require__(3);
var App = /** @class */ (function () {
    function App(rootSelector) {
        this.view = __webpack_require__(2);
        this.node = null;
        this.eventsList = [];
        this.node = htmlTools_1.HtmlTools.createElementAndAppend(rootSelector, this.view);
        this.registerEvents();
    }
    App.prototype.onClick = function () {
    };
    App.prototype.registerEvents = function () {
        this.eventsList.push(this.registerEvent(this.node, 'onclick', this.onClick));
    };
    App.prototype.registerEvent = function (element, eventName, eventHandler) {
        var returnVal = { element: element, eventName: eventName, eventHandler: eventHandler, succeededRegister: false };
        if (!element || !eventName || !eventHandler || !(eventName in element)) {
            return returnVal;
        }
        element[eventName] = eventHandler;
        returnVal.succeededRegister = true;
        return returnVal;
    };
    return App;
}());
exports.App = App;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<div>HELLO</div>";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var HtmlTools = /** @class */ (function () {
    function HtmlTools() {
    }
    HtmlTools.createElementFromHTML = function (htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
    };
    HtmlTools.createElementAndAppend = function (selector, htmlString) {
        var node = this.createElementFromHTML(htmlString);
        document.querySelector(selector).appendChild(node);
        return node;
    };
    return HtmlTools;
}());
exports.HtmlTools = HtmlTools;


/***/ })
/******/ ]);