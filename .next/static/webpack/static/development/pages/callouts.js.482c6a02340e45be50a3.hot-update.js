webpackHotUpdate("static/development/pages/callouts.js",{

/***/ "./components/callouts/callout_viewer.js":
/*!***********************************************!*\
  !*** ./components/callouts/callout_viewer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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





var CalloutViewerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "callout_viewer__CalloutViewerWrapper",
  componentId: "sc-1em0f5b-0"
})(["background:linear-gradient(120deg,#44505f,#19232e);margin-left:400px;color:#fff;padding:30px;display:flex;justify-content:center;align-items:center;height:calc(100vh - 60px);> div{width:80%;display:flex;flex-direction:column;justify-content:space-between;> div:last-child{flex:1;}> div:nth-child(2){flex:5;}}"]);
var ViewerInformation = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "callout_viewer__ViewerInformation",
  componentId: "sc-1em0f5b-1"
})(["margin-bottom:8px;margin-top:50px;font-size:2rem;text-transform:uppercase;letter-spacing:1px;> span:last-child{float:right;}"]);

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
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ViewerInformation, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "map_name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, this.props.activeMap ? this.props.activeMap : 'No map selected'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "showing_info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Showing 1 of 12")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_callout_image_box__WEBPACK_IMPORTED_MODULE_2__["default"], {
        activeMap: this.props.activeMap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_timebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        timer: this.props.timer,
        timerIsPaused: this.props.timerIsPaused,
        stopTimer: this.props.stopTimer,
        startTimer: this.props.startTimer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })));
    }
  }]);

  return callout_viewer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (callout_viewer);

/***/ })

})
//# sourceMappingURL=callouts.js.482c6a02340e45be50a3.hot-update.js.map