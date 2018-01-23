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
var html_tools_1 = __webpack_require__(2);
var app_model_1 = __webpack_require__(3);
var App = /** @class */ (function () {
    function App(rootSelector) {
        var _this = this;
        this.view = __webpack_require__(4);
        this.vm = null;
        this.node = null;
        this.renderFunctions = {
            counter: function () {
                document
                    .getElementById("counter")
                    .innerHTML = _this.vm.counter;
            }
        };
        this.vm = new app_model_1.AppViewModel();
        this.node = html_tools_1.HtmlTools.createElementAndAppend(rootSelector, this.view);
        this.startWatchModel();
        this.injectDependecy(this.node);
        this.injectNestedDependecy(this.node);
    }
    App.prototype.onClick = function () {
        this.vm.counter++;
    };
    App.prototype.injectNestedDependecy = function (node) {
        for (var i = 0; i < node.children.length; i++) {
            var child = node.children[i];
            this.injectNestedDependecy(child);
            this.injectDependecy(child);
        }
    };
    App.prototype.injectDependecy = function (element) {
        element.self = this;
    };
    App.prototype.startWatchModel = function () {
        var _this = this;
        var keys = Object.keys(this.vm);
        keys.forEach(function (key) { return _this.vm.watch(key, function (id, oldval, newval) {
            _this.render(key);
            return newval;
        }); });
    };
    App.prototype.render = function (key) {
        var renderFunc = this.renderFunctions[key];
        renderFunc
            ? renderFunc()
            : Function();
    };
    return App;
}());
exports.App = App;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var HtmlTools = /** @class */ (function () {
    function HtmlTools() {
    }
    HtmlTools.createElement = function (htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
    };
    HtmlTools.createElementAndAppend = function (selector, htmlString) {
        var node = HtmlTools.createElement(htmlString);
        document.querySelector(selector).appendChild(node);
        return node;
    };
    return HtmlTools;
}());
exports.HtmlTools = HtmlTools;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var AppViewModel = /** @class */ (function () {
    function AppViewModel() {
        this.counter = '0';
    }
    return AppViewModel;
}());
exports.AppViewModel = AppViewModel;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <button onclick=\"self.onClick()\">HELLO</button>\r\n    <span id=\"counterLabel\">counter:</span>\r\n    <span id=\"counter\"></span>\r\n</divspan";

/***/ })
/******/ ]);