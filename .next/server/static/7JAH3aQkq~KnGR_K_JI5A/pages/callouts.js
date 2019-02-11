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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(3);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/globals/meta.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var meta_meta =
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
      return external_react_default.a.createElement("span", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), external_react_default.a.createElement("meta", {
        charSet: "utf-8"
      }), external_react_default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Asap:400,500,600",
        rel: "stylesheet"
      })), external_react_default.a.createElement("style", null, "\n          html {\n            font-size:62.5%;\n          }\n\t\t\t\t\tbody {\n\t\t\t\t\t\tbackground: #fff;\n\t\t\t\t\t\tfont-family: Asap;\n            margin: unset;\n          }\n          h1,h2,h3,h4,h5,h6,ul,li {\n            margin: unset;\n          }\n\t\t\t\t"));
    }
  }]);

  return meta;
}(external_react_["Component"]);

/* harmony default export */ var globals_meta = (meta_meta);
// CONCATENATED MODULE: ./layouts/main.js


/* harmony default export */ var main = __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(globals_meta, null), children);
});

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module) {

module.exports = [{"map_name":"clubhouse","full_map_name":"clubhouse FULLNAME","images":[{"image_path":"static/images/callout_images/clubhouse/blue_stairs_supply.jpg","callout_location":"Blue Stairs Supply"},{"image_path":"static/images/callout_images/clubhouse/bar_projector.jpg","callout_location":"Bar Projector"},{"image_path":"static/images/callout_images/clubhouse/construction.jpg","callout_location":"2F Contstruction"},{"image_path":"static/images/callout_images/clubhouse/logistics_office.jpg","callout_location":"Logistics Office"},{"image_path":"static/images/callout_images/clubhouse/lounge.jpg","callout_location":"1F Lounge"},{"image_path":"static/images/callout_images/clubhouse/main_bar.jpg","callout_location":"Main Bar"},{"image_path":"static/images/callout_images/clubhouse/server_room.jpg","callout_location":"Server Room"}]}];

/***/ }),
/* 9 */
/***/ (function(module) {

module.exports = {"maps":[{"map_name":"bank","image_path":"static/images/map_thumbnails/bank.jpg"},{"map_name":"border","image_path":"static/images/map_thumbnails/border.jpg"},{"map_name":"chalet","image_path":"static/images/map_thumbnails/chalet.jpg"},{"map_name":"clubhouse","image_path":"static/images/map_thumbnails/clubhouse.jpg"},{"map_name":"coastline","image_path":"static/images/map_thumbnails/coastline.jpg"},{"map_name":"consulate","image_path":"static/images/map_thumbnails/consulate.jpg"},{"map_name":"fortress","image_path":"static/images/map_thumbnails/fortress.jpg"},{"map_name":"hereford","image_path":"static/images/map_thumbnails/hereford.jpg"},{"map_name":"kafe","image_path":"static/images/map_thumbnails/kafe.jpg"},{"map_name":"oregon","image_path":"static/images/map_thumbnails/oregon.jpg"},{"map_name":"skyscraper","image_path":"static/images/map_thumbnails/skyscraper.jpg"},{"map_name":"themepark","image_path":"static/images/map_thumbnails/themepark.jpg"},{"map_name":"villa","image_path":"static/images/map_thumbnails/villa.jpg"}]};

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./layouts/main.js + 1 modules
var main = __webpack_require__(4);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./static/json/map_callouts.json
var map_callouts = __webpack_require__(8);

// EXTERNAL MODULE: ./static/json/map_thumbnails.json
var map_thumbnails = __webpack_require__(9);

// CONCATENATED MODULE: ./components/callouts/map_selector.js
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


var Sidebar = external_styled_components_default.a.div.withConfig({
  displayName: "map_selector__Sidebar",
  componentId: "sc-1qrjzyk-0"
})(["max-width:260px;background:#1b232e;box-shadow:2px 0px 6px 0px #09101a;z-index:1;position:fixed;width:260px;.maps_header{height:100px;position:relative;display:flex;justify-content:center;align-items:center;&:after{content:'';width:80%;height:2px;background:linear-gradient(20deg,#209aa0 -10%,#18e8b8);position:absolute;bottom:0;margin:auto;border-radius:4px;}h2{margin:unset;color:#fff;text-transform:uppercase;letter-spacing:2px;font-size:50px;}}.maps{max-height:calc(100vh - 100px);overflow:scroll;width:100%;padding-left:unset;.map{cursor:pointer;position:relative;display:block;margin:23.5px 18px;border-radius:5px;max-width:275px;box-shadow:0px 3px 8px #171717;max-height:160px;transition:300ms ease;height:132px;&:hover{transform:rotate(-2deg);box-shadow:0px 0px 11px 0px #00c3ad;}img{width:100%;height:100%;border-radius:inherit;}.map_overlay{height:100%;width:100%;background:rgba(0,0,0,0.6);position:absolute;top:0;left:0;border-radius:inherit;transition:500ms ease;}&:hover,&.active{.map_overlay{background:rgba(0,0,0,0);}}}}"]);

var map_selector_map_selector =
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

      return external_react_default.a.createElement(Sidebar, null, external_react_default.a.createElement("div", {
        className: "maps_header"
      }, external_react_default.a.createElement("h2", null, "Maps")), external_react_default.a.createElement("ul", {
        className: "maps"
      }, map_thumbnails.maps.map(function (item) {
        return external_react_default.a.createElement("li", {
          className: _this.props.activeMap === item.map_name ? 'map active' : 'map',
          key: item.map_name,
          onClick: function onClick() {
            return _this.props.setActiveMap(item.map_name);
          }
        }, external_react_default.a.createElement("img", {
          src: item.image_path,
          alt: ""
        }), external_react_default.a.createElement("span", {
          className: "map_overlay"
        }));
      })));
    }
  }]);

  return map_selector;
}(external_react_["Component"]);

/* harmony default export */ var callouts_map_selector = (map_selector_map_selector);
// CONCATENATED MODULE: ./components/callouts/callout_image_box.js
function callout_image_box_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { callout_image_box_typeof = function _typeof(obj) { return typeof obj; }; } else { callout_image_box_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return callout_image_box_typeof(obj); }

function callout_image_box_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function callout_image_box_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function callout_image_box_createClass(Constructor, protoProps, staticProps) { if (protoProps) callout_image_box_defineProperties(Constructor.prototype, protoProps); if (staticProps) callout_image_box_defineProperties(Constructor, staticProps); return Constructor; }

function callout_image_box_possibleConstructorReturn(self, call) { if (call && (callout_image_box_typeof(call) === "object" || typeof call === "function")) { return call; } return callout_image_box_assertThisInitialized(self); }

function callout_image_box_getPrototypeOf(o) { callout_image_box_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return callout_image_box_getPrototypeOf(o); }

function callout_image_box_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) callout_image_box_setPrototypeOf(subClass, superClass); }

function callout_image_box_setPrototypeOf(o, p) { callout_image_box_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return callout_image_box_setPrototypeOf(o, p); }

function callout_image_box_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "callout_image_box__ImageWrapper",
  componentId: "sc-14bo050-0"
})(["border-radius:15px;position:relative;img{border-radius:inherit;max-width:100%;max-height:100%;margin:10px 0px;box-shadow:0px 0px 6px 0px #212121;}.answer_overlay{transition:300ms ease;position:absolute;width:100%;height:calc(100% - 20px);margin-top:10px;background:radial-gradient(rgba(0,0,0,0.7) 20%,black);border-radius:inherit;left:100%;top:0;opacity:0;.answer{padding:40px;width:calc(100% - 80px);height:calc(100% - 80px);display:flex;justify-content:center;align-items:center;flex-direction:column;span{font-size:40px;text-align:center;text-transform:uppercase;letter-spacing:2px;}.correct_words{position:relative;&:after{content:'';position:absolute;bottom:-20px;left:0;height:4px;width:100%;border-radius:4px;background:linear-gradient(20deg,#209aa0 -10%,#18e8b8);}}.actual_answer{font-weight:700;}}&.show{left:0%;opacity:1;}}"]);

var callout_image_box_callout_image_box =
/*#__PURE__*/
function (_Component) {
  callout_image_box_inherits(callout_image_box, _Component);

  function callout_image_box() {
    var _getPrototypeOf2;

    var _this;

    callout_image_box_classCallCheck(this, callout_image_box);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = callout_image_box_possibleConstructorReturn(this, (_getPrototypeOf2 = callout_image_box_getPrototypeOf(callout_image_box)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(callout_image_box_assertThisInitialized(callout_image_box_assertThisInitialized(_this)), "state", {
      card_answer: ''
    });

    return _this;
  }

  callout_image_box_createClass(callout_image_box, [{
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
      return external_react_default.a.createElement(ImageWrapper, null, external_react_default.a.createElement("img", {
        src: this.props.activeImage.image_path,
        alt: ""
      }), external_react_default.a.createElement("span", {
        className: this.props.timer === 0 && this.props.timerIsPaused ? 'answer_overlay show' : 'answer_overlay'
      }, external_react_default.a.createElement("span", {
        className: "answer"
      }, external_react_default.a.createElement("span", null, external_react_default.a.createElement("p", {
        className: "correct_words"
      }, "Answer"), external_react_default.a.createElement("p", {
        className: "actual_answer"
      }, this.state.card_answer)))));
    }
  }]);

  return callout_image_box;
}(external_react_["Component"]);

/* harmony default export */ var callouts_callout_image_box = (callout_image_box_callout_image_box);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(2);

// CONCATENATED MODULE: ./components/callouts/timebar.js
function timebar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { timebar_typeof = function _typeof(obj) { return typeof obj; }; } else { timebar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return timebar_typeof(obj); }

function timebar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function timebar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function timebar_createClass(Constructor, protoProps, staticProps) { if (protoProps) timebar_defineProperties(Constructor.prototype, protoProps); if (staticProps) timebar_defineProperties(Constructor, staticProps); return Constructor; }

function timebar_possibleConstructorReturn(self, call) { if (call && (timebar_typeof(call) === "object" || typeof call === "function")) { return call; } return timebar_assertThisInitialized(self); }

function timebar_getPrototypeOf(o) { timebar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return timebar_getPrototypeOf(o); }

function timebar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) timebar_setPrototypeOf(subClass, superClass); }

function timebar_setPrototypeOf(o, p) { timebar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return timebar_setPrototypeOf(o, p); }

function timebar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function timebar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var TimebarWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "timebar__TimebarWrapper",
  componentId: "sc-17m3ac1-0"
})(["font-size:1.6rem;text-transform:uppercase;letter-spacing:1px;display:flex;.time{display:inline;margin:0;line-height:2.4rem;}.seconds_s{text-transform:lowercase;}.toggle_time{cursor:pointer;transition:300ms ease;margin-left:1.5rem;font-size:2.4rem;display:inline-block;&.paused{&:hover{color:green;}}&.playing{&:hover{color:#e64e4e;}}}"]);

var timebar_timebar =
/*#__PURE__*/
function (_Component) {
  timebar_inherits(timebar, _Component);

  function timebar() {
    var _getPrototypeOf2;

    var _this;

    timebar_classCallCheck(this, timebar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = timebar_possibleConstructorReturn(this, (_getPrototypeOf2 = timebar_getPrototypeOf(timebar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    timebar_defineProperty(timebar_assertThisInitialized(timebar_assertThisInitialized(_this)), "handleTimerToggle", function () {
      if (_this.props.timerIsPaused) {
        _this.props.startTimer();
      } else {
        _this.props.stopTimer();
      }
    });

    return _this;
  }

  timebar_createClass(timebar, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(TimebarWrapper, null, external_react_default.a.createElement("p", {
        className: "time"
      }, "Time Remaining: ", this.props.timer, external_react_default.a.createElement("span", {
        className: "seconds_s"
      }, "s")), external_react_default.a.createElement("div", {
        onClick: this.handleTimerToggle,
        className: this.props.timerIsPaused ? 'paused toggle_time' : 'playing toggle_time'
      }, this.props.timerIsPaused ? external_react_default.a.createElement(fa_["FaRegPlayCircle"], null) : external_react_default.a.createElement(fa_["FaRegPauseCircle"], null)));
    }
  }]);

  return timebar;
}(external_react_["Component"]);

/* harmony default export */ var callouts_timebar = (timebar_timebar);
// CONCATENATED MODULE: ./components/callouts/callout_viewer.js
function callout_viewer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { callout_viewer_typeof = function _typeof(obj) { return typeof obj; }; } else { callout_viewer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return callout_viewer_typeof(obj); }

function callout_viewer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function callout_viewer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function callout_viewer_createClass(Constructor, protoProps, staticProps) { if (protoProps) callout_viewer_defineProperties(Constructor.prototype, protoProps); if (staticProps) callout_viewer_defineProperties(Constructor, staticProps); return Constructor; }

function callout_viewer_possibleConstructorReturn(self, call) { if (call && (callout_viewer_typeof(call) === "object" || typeof call === "function")) { return call; } return callout_viewer_assertThisInitialized(self); }

function callout_viewer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function callout_viewer_getPrototypeOf(o) { callout_viewer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return callout_viewer_getPrototypeOf(o); }

function callout_viewer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) callout_viewer_setPrototypeOf(subClass, superClass); }

function callout_viewer_setPrototypeOf(o, p) { callout_viewer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return callout_viewer_setPrototypeOf(o, p); }





var CalloutViewerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "callout_viewer__CalloutViewerWrapper",
  componentId: "sc-1em0f5b-0"
})(["background:linear-gradient(120deg,#44505f,#19232e);margin-left:260px;color:#fff;padding:30px;display:flex;justify-content:center;align-items:center;height:calc(100vh - 60px);overflow-x:hidden;overflow-y:scroll;> div{width:80%;display:flex;flex-direction:column;justify-content:space-between;> div:last-child{flex:1;}> div:nth-child(2){flex:5;}}"]);
var ViewerInformation = external_styled_components_default.a.div.withConfig({
  displayName: "callout_viewer__ViewerInformation",
  componentId: "sc-1em0f5b-1"
})(["margin-bottom:8px;margin-top:20px;font-size:2rem;text-transform:uppercase;letter-spacing:1px;> span:last-child{float:right;}"]);

var callout_viewer_callout_viewer =
/*#__PURE__*/
function (_Component) {
  callout_viewer_inherits(callout_viewer, _Component);

  function callout_viewer() {
    callout_viewer_classCallCheck(this, callout_viewer);

    return callout_viewer_possibleConstructorReturn(this, callout_viewer_getPrototypeOf(callout_viewer).apply(this, arguments));
  }

  callout_viewer_createClass(callout_viewer, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(CalloutViewerWrapper, null, external_react_default.a.createElement("div", null, external_react_default.a.createElement(ViewerInformation, null, external_react_default.a.createElement("span", {
        className: "map_name"
      }, this.props.activeMap ? this.props.activeMap : 'No map selected'), external_react_default.a.createElement("span", {
        className: "showing_info"
      }, "Showing ", this.props.activeImageIndex + 1, " of", ' ', this.props.activeMapImages.length)), external_react_default.a.createElement(callouts_callout_image_box, {
        activeMap: this.props.activeMap,
        timer: this.props.timer,
        timerIsPaused: this.props.timerIsPaused,
        activeImage: this.props.activeMapImages[this.props.activeImageIndex]
      }), external_react_default.a.createElement(callouts_timebar, {
        timer: this.props.timer,
        timerIsPaused: this.props.timerIsPaused,
        stopTimer: this.props.stopTimer,
        startTimer: this.props.startTimer
      })));
    }
  }]);

  return callout_viewer;
}(external_react_["Component"]);

/* harmony default export */ var callouts_callout_viewer = (callout_viewer_callout_viewer);
// CONCATENATED MODULE: ./pages/callouts.js
function callouts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { callouts_typeof = function _typeof(obj) { return typeof obj; }; } else { callouts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return callouts_typeof(obj); }

function callouts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function callouts_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function callouts_createClass(Constructor, protoProps, staticProps) { if (protoProps) callouts_defineProperties(Constructor.prototype, protoProps); if (staticProps) callouts_defineProperties(Constructor, staticProps); return Constructor; }

function callouts_possibleConstructorReturn(self, call) { if (call && (callouts_typeof(call) === "object" || typeof call === "function")) { return call; } return callouts_assertThisInitialized(self); }

function callouts_getPrototypeOf(o) { callouts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return callouts_getPrototypeOf(o); }

function callouts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) callouts_setPrototypeOf(subClass, superClass); }

function callouts_setPrototypeOf(o, p) { callouts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return callouts_setPrototypeOf(o, p); }

function callouts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function callouts_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // -- json



 //
// -- Styles

var CalloutWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "callouts__CalloutWrapper",
  componentId: "sc-1s9yapt-0"
})(["display:flex;> div{flex:1;}"]);

var callouts_Callouts =
/*#__PURE__*/
function (_Component) {
  callouts_inherits(Callouts, _Component);

  function Callouts() {
    var _getPrototypeOf2;

    var _this;

    callouts_classCallCheck(this, Callouts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = callouts_possibleConstructorReturn(this, (_getPrototypeOf2 = callouts_getPrototypeOf(Callouts)).call.apply(_getPrototypeOf2, [this].concat(args)));

    callouts_defineProperty(callouts_assertThisInitialized(callouts_assertThisInitialized(_this)), "state", {
      active_map: '',
      timer: 5,
      timer_is_paused: false,
      map_images: [{
        image_path: 'static/images/callout_images/clubhouse/blue_stairs_supply.jpg',
        callout_location: 'clubhouse image 1'
      }],
      map_image_index: 0
    });

    callouts_defineProperty(callouts_assertThisInitialized(callouts_assertThisInitialized(_this)), "startTimer", function () {
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

    callouts_defineProperty(callouts_assertThisInitialized(callouts_assertThisInitialized(_this)), "stopTimer", function () {
      clearInterval(_this.incrementer);

      _this.setState({
        timer_is_paused: true
      });
    });

    callouts_defineProperty(callouts_assertThisInitialized(callouts_assertThisInitialized(_this)), "setActiveMap", function (map_name) {
      _this.stopTimer();

      clearInterval(_this.incrementer);

      _this.setState({
        active_map: map_name,
        timer: 5
      });

      _this.setActiveMapImages(map_name);
    });

    callouts_defineProperty(callouts_assertThisInitialized(callouts_assertThisInitialized(_this)), "setActiveMapImages", function (map_name_passed) {
      map_callouts.map(function (current_map) {
        if (current_map.map_name === map_name_passed) {
          _this.setState({
            map_images: current_map.images,
            map_image_index: 0
          }, _this.startTimer());
        }
      });
    });

    callouts_defineProperty(callouts_assertThisInitialized(callouts_assertThisInitialized(_this)), "changeImage", function () {
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

  callouts_createClass(Callouts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startTimer();
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(main["a" /* default */], null, external_react_default.a.createElement(CalloutWrapper, null, external_react_default.a.createElement(callouts_map_selector, {
        setActiveMap: this.setActiveMap,
        activeMap: this.state.active_map
      }), external_react_default.a.createElement(callouts_callout_viewer, {
        activeMap: this.state.active_map,
        activeMapImages: this.state.map_images,
        activeImageIndex: this.state.map_image_index,
        timer: this.state.timer,
        timerIsPaused: this.state.timer_is_paused,
        stopTimer: this.stopTimer,
        startTimer: this.startTimer
      })));
    }
  }]);

  return Callouts;
}(external_react_["Component"]);

/* harmony default export */ var callouts = __webpack_exports__["default"] = (callouts_Callouts);

/***/ })
/******/ ]);