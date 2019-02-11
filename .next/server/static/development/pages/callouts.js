module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/callouts/callout_image_box.js":
/*!**************************************************!*\
  !*** ./components/callouts/callout_image_box.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jarrodflesch/Projects/Personal/github/r6_callouts/components/callouts/callout_image_box.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "callout_image_box__ImageWrapper",
  componentId: "sc-14bo050-0"
})(["border-radius:15px;position:relative;img{border-radius:inherit;max-width:100%;max-height:100%;margin:10px 0px;box-shadow:0px 0px 6px 0px #212121;}.answer_overlay{transition:300ms ease;position:absolute;width:100%;height:calc(100% - 20px);margin-top:10px;background:radial-gradient(rgba(0,0,0,0.7) 20%,black);border-radius:inherit;left:100%;top:0;opacity:0;.answer{padding:40px;width:calc(100% - 80px);height:calc(100% - 80px);display:flex;justify-content:center;align-items:center;flex-direction:column;span{font-size:40px;text-align:center;text-transform:uppercase;letter-spacing:2px;}.correct_words{position:relative;&:after{content:'';position:absolute;bottom:-20px;left:0;height:4px;width:100%;border-radius:4px;background:linear-gradient(20deg,#209aa0 -10%,#18e8b8);}}.actual_answer{font-weight:700;}}&.show{left:0%;opacity:1;}}"]);

var callout_image_box =
/*#__PURE__*/
function (_Component) {
  _inherits(callout_image_box, _Component);

  function callout_image_box() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, callout_image_box);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(callout_image_box)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      card_answer: ''
    });

    return _this;
  }

  _createClass(callout_image_box, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (this.props.activeImage.callout_location !== prevProps.activeImage.callout_location) {
        if (this.hault_transition) {
          clearTimeout(this.hault_transition);
        } // set the new title after animation completes (animation: 300ms)


        this.hault_transition = setTimeout(function () {
          _this2.setState({
            card_answer: _this2.props.activeImage.callout_location
          });
        }, 1000);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.props.activeImage.image_path,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: this.props.timer === 0 && this.props.timerIsPaused ? 'answer_overlay show' : 'answer_overlay',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "answer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "correct_words",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Answer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "actual_answer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, this.state.card_answer)))));
    }
  }]);

  return callout_image_box;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (callout_image_box);

/***/ }),

/***/ "./components/callouts/callout_viewer.js":
/*!***********************************************!*\
  !*** ./components/callouts/callout_viewer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _callout_image_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callout_image_box */ "./components/callouts/callout_image_box.js");
/* harmony import */ var _timebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timebar */ "./components/callouts/timebar.js");
var _jsxFileName = "/Users/jarrodflesch/Projects/Personal/github/r6_callouts/components/callouts/callout_viewer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CalloutViewerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "callout_viewer__CalloutViewerWrapper",
  componentId: "sc-1em0f5b-0"
})(["background:linear-gradient(120deg,#44505f,#19232e);margin-left:260px;color:#fff;padding:30px;display:flex;justify-content:center;align-items:center;height:calc(100vh - 60px);overflow-x:hidden;overflow-y:scroll;> div{width:80%;display:flex;flex-direction:column;justify-content:space-between;> div:last-child{flex:1;}> div:nth-child(2){flex:5;}}"]);
var ViewerInformation = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "callout_viewer__ViewerInformation",
  componentId: "sc-1em0f5b-1"
})(["margin-bottom:8px;margin-top:20px;font-size:2rem;text-transform:uppercase;letter-spacing:1px;> span:last-child{float:right;}"]);

var callout_viewer =
/*#__PURE__*/
function (_Component) {
  _inherits(callout_viewer, _Component);

  function callout_viewer() {
    _classCallCheck(this, callout_viewer);

    return _possibleConstructorReturn(this, _getPrototypeOf(callout_viewer).apply(this, arguments));
  }

  _createClass(callout_viewer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalloutViewerWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ViewerInformation, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "map_name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, this.props.activeMap ? this.props.activeMap : 'No map selected'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "showing_info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Showing ", this.props.activeImageIndex + 1, " of", ' ', this.props.activeMapImages.length)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_callout_image_box__WEBPACK_IMPORTED_MODULE_2__["default"], {
        activeMap: this.props.activeMap,
        timer: this.props.timer,
        timerIsPaused: this.props.timerIsPaused,
        activeImage: this.props.activeMapImages[this.props.activeImageIndex],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_timebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        timer: this.props.timer,
        timerIsPaused: this.props.timerIsPaused,
        stopTimer: this.props.stopTimer,
        startTimer: this.props.startTimer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })));
    }
  }]);

  return callout_viewer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (callout_viewer);

/***/ }),

/***/ "./components/callouts/map_selector.js":
/*!*********************************************!*\
  !*** ./components/callouts/map_selector.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_json_map_thumbnails_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/json/map_thumbnails.json */ "./static/json/map_thumbnails.json");
var _static_json_map_thumbnails_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/json/map_thumbnails.json */ "./static/json/map_thumbnails.json", 1);
var _jsxFileName = "/Users/jarrodflesch/Projects/Personal/github/r6_callouts/components/callouts/map_selector.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // -- json data


var Sidebar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "map_selector__Sidebar",
  componentId: "sc-1qrjzyk-0"
})(["max-width:260px;background:#1b232e;box-shadow:2px 0px 6px 0px #09101a;z-index:1;position:fixed;width:260px;.maps_header{height:100px;position:relative;display:flex;justify-content:center;align-items:center;&:after{content:'';width:80%;height:2px;background:linear-gradient(20deg,#209aa0 -10%,#18e8b8);position:absolute;bottom:0;margin:auto;border-radius:4px;}h2{margin:unset;color:#fff;text-transform:uppercase;letter-spacing:2px;font-size:50px;}}.maps{max-height:calc(100vh - 100px);overflow:scroll;width:100%;padding-left:unset;.map{cursor:pointer;position:relative;display:block;margin:23.5px 18px;border-radius:5px;max-width:275px;box-shadow:0px 3px 8px #171717;max-height:160px;transition:300ms ease;height:132px;&:hover{transform:rotate(-2deg);box-shadow:0px 0px 11px 0px #00c3ad;}img{width:100%;height:100%;border-radius:inherit;}.map_overlay{height:100%;width:100%;background:rgba(0,0,0,0.6);position:absolute;top:0;left:0;border-radius:inherit;transition:500ms ease;}&:hover,&.active{.map_overlay{background:rgba(0,0,0,0);}}}}"]);

var map_selector =
/*#__PURE__*/
function (_Component) {
  _inherits(map_selector, _Component);

  function map_selector() {
    _classCallCheck(this, map_selector);

    return _possibleConstructorReturn(this, _getPrototypeOf(map_selector).apply(this, arguments));
  }

  _createClass(map_selector, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sidebar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "maps_header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Maps")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "maps",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, _static_json_map_thumbnails_json__WEBPACK_IMPORTED_MODULE_2__.maps.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: _this.props.activeMap === item.map_name ? 'map active' : 'map',
          key: item.map_name,
          onClick: function onClick() {
            return _this.props.setActiveMap(item.map_name);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: item.image_path,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "map_overlay",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }));
      })));
    }
  }]);

  return map_selector;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (map_selector);

/***/ }),

/***/ "./components/callouts/timebar.js":
/*!****************************************!*\
  !*** ./components/callouts/timebar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jarrodflesch/Projects/Personal/github/r6_callouts/components/callouts/timebar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var TimebarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "timebar__TimebarWrapper",
  componentId: "sc-17m3ac1-0"
})(["font-size:1.6rem;text-transform:uppercase;letter-spacing:1px;display:flex;.time{display:inline;margin:0;line-height:2.4rem;}.seconds_s{text-transform:lowercase;}.toggle_time{cursor:pointer;transition:300ms ease;margin-left:1.5rem;font-size:2.4rem;display:inline-block;&.paused{&:hover{color:green;}}&.playing{&:hover{color:#e64e4e;}}}"]);

var timebar =
/*#__PURE__*/
function (_Component) {
  _inherits(timebar, _Component);

  function timebar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, timebar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(timebar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTimerToggle", function () {
      if (_this.props.timerIsPaused) {
        _this.props.startTimer();
      } else {
        _this.props.stopTimer();
      }
    });

    return _this;
  }

  _createClass(timebar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimebarWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Time Remaining: ", this.props.timer, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "seconds_s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "s")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.handleTimerToggle,
        className: this.props.timerIsPaused ? 'paused toggle_time' : 'playing toggle_time',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, this.props.timerIsPaused ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaRegPlayCircle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaRegPauseCircle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })));
    }
  }]);

  return timebar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (timebar);

/***/ }),

/***/ "./components/globals/meta.js":
/*!************************************!*\
  !*** ./components/globals/meta.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jarrodflesch/Projects/Personal/github/r6_callouts/components/globals/meta.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var meta =
/*#__PURE__*/
function (_Component) {
  _inherits(meta, _Component);

  function meta() {
    _classCallCheck(this, meta);

    return _possibleConstructorReturn(this, _getPrototypeOf(meta).apply(this, arguments));
  }

  _createClass(meta, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Asap:400,500,600",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "\n          html {\n            font-size:62.5%;\n          }\n\t\t\t\t\tbody {\n\t\t\t\t\t\tbackground: #fff;\n\t\t\t\t\t\tfont-family: Asap;\n            margin: unset;\n          }\n          h1,h2,h3,h4,h5,h6,ul,li {\n            margin: unset;\n          }\n\t\t\t\t"));
    }
  }]);

  return meta;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (meta);

/***/ }),

/***/ "./layouts/main.js":
/*!*************************!*\
  !*** ./layouts/main.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_globals_meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/globals/meta */ "./components/globals/meta.js");
var _jsxFileName = "/Users/jarrodflesch/Projects/Personal/github/r6_callouts/layouts/main.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_globals_meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), children);
});

/***/ }),

/***/ "./pages/callouts.js":
/*!***************************!*\
  !*** ./pages/callouts.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_json_map_callouts_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/json/map_callouts.json */ "./static/json/map_callouts.json");
var _static_json_map_callouts_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/json/map_callouts.json */ "./static/json/map_callouts.json", 1);
/* harmony import */ var _components_callouts_map_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/callouts/map_selector */ "./components/callouts/map_selector.js");
/* harmony import */ var _components_callouts_callout_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/callouts/callout_viewer */ "./components/callouts/callout_viewer.js");
var _jsxFileName = "/Users/jarrodflesch/Projects/Personal/github/r6_callouts/pages/callouts.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // -- json



 //
// -- Styles

var CalloutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "callouts__CalloutWrapper",
  componentId: "sc-1s9yapt-0"
})(["display:flex;> div{flex:1;}"]);

var Callouts =
/*#__PURE__*/
function (_Component) {
  _inherits(Callouts, _Component);

  function Callouts() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Callouts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Callouts)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      active_map: '',
      timer: 5,
      timer_is_paused: false,
      map_images: [{
        image_path: 'static/images/callout_images/clubhouse/blue_stairs_supply.jpg',
        callout_location: 'clubhouse image 1'
      }],
      map_image_index: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "startTimer", function () {
      _this.setState({
        timer_is_paused: false
      });

      _this.incrementer = setInterval(function () {
        if (_this.state.timer === 0) {
          _this.changeImage();
        } else {
          _this.setState({
            timer: _this.state.timer - 1
          });
        }
      }, 1000);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "stopTimer", function () {
      clearInterval(_this.incrementer);

      _this.setState({
        timer_is_paused: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setActiveMap", function (map_name) {
      _this.stopTimer();

      clearInterval(_this.incrementer);

      _this.setState({
        active_map: map_name,
        timer: 5
      });

      _this.setActiveMapImages(map_name);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setActiveMapImages", function (map_name_passed) {
      _static_json_map_callouts_json__WEBPACK_IMPORTED_MODULE_3__.map(function (current_map) {
        if (current_map.map_name === map_name_passed) {
          _this.setState({
            map_images: current_map.images,
            map_image_index: 0
          }, _this.startTimer());
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeImage", function () {
      _this.stopTimer();

      if (_this.show_answer_timeout) {
        clearTimeout(_this.show_answer_timeout);
      }

      _this.show_answer_timeout = setTimeout(function () {
        if (_this.state.map_image_index !== _this.state.map_images.length - 1) {
          _this.setState({
            map_image_index: _this.state.map_image_index + 1,
            timer: 5
          }, _this.startTimer());
        } else {
          _this.setState({
            map_image_index: 0,
            timer: 5
          }, _this.startTimer());
        }
      }, 3500);
    });

    return _this;
  }

  _createClass(Callouts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startTimer();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalloutWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_callouts_map_selector__WEBPACK_IMPORTED_MODULE_4__["default"], {
        setActiveMap: this.setActiveMap,
        activeMap: this.state.active_map,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_callouts_callout_viewer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        activeMap: this.state.active_map,
        activeMapImages: this.state.map_images,
        activeImageIndex: this.state.map_image_index,
        timer: this.state.timer,
        timerIsPaused: this.state.timer_is_paused,
        stopTimer: this.stopTimer,
        startTimer: this.startTimer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      })));
    }
  }]);

  return Callouts;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Callouts);

/***/ }),

/***/ "./static/json/map_callouts.json":
/*!***************************************!*\
  !*** ./static/json/map_callouts.json ***!
  \***************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = [{"map_name":"clubhouse","full_map_name":"clubhouse FULLNAME","images":[{"image_path":"static/images/callout_images/clubhouse/blue_stairs_supply.jpg","callout_location":"Blue Stairs Supply"},{"image_path":"static/images/callout_images/clubhouse/bar_projector.jpg","callout_location":"Bar Projector"},{"image_path":"static/images/callout_images/clubhouse/construction.jpg","callout_location":"2F Contstruction"},{"image_path":"static/images/callout_images/clubhouse/logistics_office.jpg","callout_location":"Logistics Office"},{"image_path":"static/images/callout_images/clubhouse/lounge.jpg","callout_location":"1F Lounge"},{"image_path":"static/images/callout_images/clubhouse/main_bar.jpg","callout_location":"Main Bar"},{"image_path":"static/images/callout_images/clubhouse/server_room.jpg","callout_location":"Server Room"}]}];

/***/ }),

/***/ "./static/json/map_thumbnails.json":
/*!*****************************************!*\
  !*** ./static/json/map_thumbnails.json ***!
  \*****************************************/
/*! exports provided: maps, default */
/***/ (function(module) {

module.exports = {"maps":[{"map_name":"bank","image_path":"static/images/map_thumbnails/bank.jpg"},{"map_name":"border","image_path":"static/images/map_thumbnails/border.jpg"},{"map_name":"chalet","image_path":"static/images/map_thumbnails/chalet.jpg"},{"map_name":"clubhouse","image_path":"static/images/map_thumbnails/clubhouse.jpg"},{"map_name":"coastline","image_path":"static/images/map_thumbnails/coastline.jpg"},{"map_name":"consulate","image_path":"static/images/map_thumbnails/consulate.jpg"},{"map_name":"fortress","image_path":"static/images/map_thumbnails/fortress.jpg"},{"map_name":"hereford","image_path":"static/images/map_thumbnails/hereford.jpg"},{"map_name":"kafe","image_path":"static/images/map_thumbnails/kafe.jpg"},{"map_name":"oregon","image_path":"static/images/map_thumbnails/oregon.jpg"},{"map_name":"skyscraper","image_path":"static/images/map_thumbnails/skyscraper.jpg"},{"map_name":"themepark","image_path":"static/images/map_thumbnails/themepark.jpg"},{"map_name":"villa","image_path":"static/images/map_thumbnails/villa.jpg"}]};

/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./pages/callouts.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/callouts.js */"./pages/callouts.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=callouts.js.map