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
var app_1 = __webpack_require__(1);
var myApp;
$(function () { return createApp(); });
function createApp() {
    myApp = new app_1.App();
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var component_1 = __webpack_require__(5);
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return App;
}(component_1.Component));
exports.App = App;


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var html_tools_1 = __webpack_require__(7);
var component_model_1 = __webpack_require__(6);
var Component = /** @class */ (function () {
    function Component() {
        this.vm = null;
        this.node = null;
        this.renderFunctions = {};
        debugger;
        this.vm = new component_model_1.ComponentViewModel();
        var rootSelector = Component.selector;
        var htmlString = Component.view;
        this.node = html_tools_1.HtmlTools.createElementAndAppend(rootSelector, htmlString);
        this.startWatchModel();
        this.injectDependecy(this.node);
        this.injectNestedDependecy(this.node);
    }
    Component.prototype.injectNestedDependecy = function (node) {
        for (var i = 0; i < node.children.length; i++) {
            var child = node.children[i];
            this.injectNestedDependecy(child);
            this.injectDependecy(child);
        }
    };
    Component.prototype.injectDependecy = function (element) {
        element.self = this;
    };
    Component.prototype.startWatchModel = function () {
        var _this = this;
        var keys = Object.keys(this.vm);
        keys.forEach(function (key) { return _this.vm.watch(key, function (id, oldval, newval) {
            _this.render(key);
            return newval;
        }); });
    };
    Component.prototype.render = function (key) {
        var renderFunc = this.renderFunctions[key];
        renderFunc
            ? renderFunc()
            : Function();
    };
    Component.view = __webpack_require__(8);
    Component.selector = 'app';
    return Component;
}());
exports.Component = Component;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ComponentViewModel = /** @class */ (function () {
    function ComponentViewModel() {
        this.counter = '0';
    }
    return ComponentViewModel;
}());
exports.ComponentViewModel = ComponentViewModel;


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <button onclick=\"self.onClick()\">HELLO</button>\r\n    <span id=\"counterLabel\">counter:</span>\r\n    <span id=\"counter\"></span>\r\n</divspan";

/***/ })
/******/ ]);