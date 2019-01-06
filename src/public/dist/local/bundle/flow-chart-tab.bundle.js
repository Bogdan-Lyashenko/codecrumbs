(window["webpackJsonpcodecrumbs"] = window["webpackJsonpcodecrumbs"] || []).push([["flow-chart-tab"],{

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/sideBar/component/FlowChartTab/index.scss":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/sass-loader/lib/loader.js!./js/components/sideBar/component/FlowChartTab/index.scss ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".FlowChartLoading {\n  display: flex;\n  justify-content: center;\n  padding-top: 50px; }\n\n.FlowChartTabContainer {\n  position: relative;\n  height: 100%;\n  overflow: auto; }\n", ""]);

// exports


/***/ }),

/***/ "./js/components/sideBar/component/FlowChartTab/index.js":
/*!***************************************************************!*\
  !*** ./js/components/sideBar/component/FlowChartTab/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_alert_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/alert/style/css */ "../../node_modules/antd/es/alert/style/css.js");
/* harmony import */ var antd_es_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/alert */ "../../node_modules/antd/es/alert/index.js");
/* harmony import */ var antd_es_spin_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/spin/style/css */ "../../node_modules/antd/es/spin/style/css.js");
/* harmony import */ var antd_es_spin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/spin */ "../../node_modules/antd/es/spin/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./js/components/sideBar/component/FlowChartTab/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Styles = {
  strokeColor: '#00bcd4',
  defaultFillColor: '#e6f7ff',
  textColor: '#595959',
  arrowFillColor: '#00bcd4',
  rectangleFillColor: '#fff',
  rectangleDotFillColor: '#fff',
  functionFillColor: '#fff',
  rootCircleFillColor: '#fff',
  loopFillColor: '#fff',
  conditionFillColor: '#fff',
  destructedNodeFillColor: '#fff',
  classFillColor: '#fff',
  debuggerFillColor: '#fff',
  exportFillColor: '#e6f7ff',
  throwFillColor: '#fff',
  tryFillColor: '#fff',
  objectFillColor: '#fff',
  callFillColor: '#fff',
  debugModeFillColor: '#fff'
};

var FlowChartTab =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FlowChartTab, _React$Component);

  function FlowChartTab(props) {
    var _this;

    _classCallCheck(this, FlowChartTab);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FlowChartTab).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(FlowChartTab, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      __webpack_require__.e(/*! import() | js2flowchart */ "vendors~js2flowchart").then(__webpack_require__.t.bind(null, /*! js2flowchart */ "../../node_modules/js2flowchart/dist/js2flowchart.js", 7)).then(function (_ref) {
        var createSVGRender = _ref.createSVGRender,
            convertCodeToFlowTree = _ref.convertCodeToFlowTree;
        _this2.svgRender = createSVGRender();

        _this2.svgRender.applyColorBasedTheme(Styles);

        _this2.convertCodeToFlowTree = convertCodeToFlowTree;

        _this2.setState({
          ready: true
        });
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return this.props.active;
    }
  }, {
    key: "render",
    value: function render() {
      var ready = this.state.ready;

      if (!ready) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: 'FlowChartLoading'
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_spin__WEBPACK_IMPORTED_MODULE_3__["default"], null));
      }

      var svgXml = '';

      try {
        var flowTree = this.convertCodeToFlowTree(this.props.fileCode || '');
        svgXml = this.svgRender.buildShapesTree(flowTree).print();
      } catch (e) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_alert__WEBPACK_IMPORTED_MODULE_1__["default"], {
          message: 'Oppss.. AST parser failed to parse your code. That dude..',
          type: "warning",
          description: "Well, you can file an issue here https://github.com/Bogdan-Lyashenko/js-code-to-svg-flowchart",
          showIcon: true
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: 'FlowChartTabContainer'
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: svgXml
        }
      }));
    }
  }]);

  return FlowChartTab;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FlowChartTab);

/***/ }),

/***/ "./js/components/sideBar/component/FlowChartTab/index.scss":
/*!*****************************************************************!*\
  !*** ./js/components/sideBar/component/FlowChartTab/index.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss */ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/sideBar/component/FlowChartTab/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=flow-chart-tab.bundle.js.map