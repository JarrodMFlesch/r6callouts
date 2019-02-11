webpackHotUpdate("static/development/pages/callouts.js",{

/***/ "./pages/callouts.js":
/*!***************************!*\
  !*** ./pages/callouts.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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

var CalloutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
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

      _this.setState({
        active_map: map_name,
        timer: 5
      });

      _this.setActiveMapImages(map_name);

      _this.startTimer();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setActiveMapImages", function (map_name_passed) {
      _static_json_map_callouts_json__WEBPACK_IMPORTED_MODULE_3__.map(function (current_map) {
        if (current_map.map_name === map_name_passed) {
          _this.setState({
            map_images: current_map.images
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeImage", function () {
      _this.stopTimer();

      setTimeout(function () {
        _this.startTimer();

        _this.setState({
          timer: 5
        });

        if (_this.state.map_image_index !== _this.state.map_images.length - 1) {
          _this.setState({
            map_image_index: _this.state.map_image_index + 1
          });
        } else {
          _this.setState({
            map_image_index: 0
          });
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
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalloutWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_callouts_map_selector__WEBPACK_IMPORTED_MODULE_4__["default"], {
        setActiveMap: this.setActiveMap,
        activeMap: this.state.active_map,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_callouts_callout_viewer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        activeMap: this.state.active_map,
        activeImage: this.state.map_images[this.state.map_image_index],
        activeMapIndex: this.state.map_image_index,
        timer: this.state.timer,
        timerIsPaused: this.state.timer_is_paused,
        stopTimer: this.stopTimer,
        startTimer: this.startTimer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })));
    }
  }]);

  return Callouts;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Callouts);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/callouts")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=callouts.js.696db559515e81f2b9ef.hot-update.js.map