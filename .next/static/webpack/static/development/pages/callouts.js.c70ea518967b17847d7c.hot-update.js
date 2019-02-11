webpackHotUpdate("static/development/pages/callouts.js",{

/***/ "./components/callouts/callout_image_box.js":
/*!**************************************************!*\
  !*** ./components/callouts/callout_image_box.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_json_map_callouts_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/json/map_callouts.json */ "./static/json/map_callouts.json");
var _static_json_map_callouts_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/json/map_callouts.json */ "./static/json/map_callouts.json", 1);
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

 // -- json data



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
      timer: 0,
      current_index: 0
    });

    return _this;
  }

  _createClass(callout_image_box, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log(this.props);
      setInterval(function () {
        if (_this2.state.timer === 5) {
          _this2.setState({
            timer: 0
          }); // -- show answer, set another interval?
          // -- then go to next image


          _this2.setState({
            current_index: _this2.state.current_index + 1
          });
        } else {
          _this2.setState({
            timer: _this2.state.timer + 1
          });
        }
      }, 1000);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      console.log(this.props.activeMap);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "test"), "counter: ", this.state.timer, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), "index: ", this.state.current_index);
    }
  }]);

  return callout_image_box;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (callout_image_box);

/***/ })

})
//# sourceMappingURL=callouts.js.c70ea518967b17847d7c.hot-update.js.map