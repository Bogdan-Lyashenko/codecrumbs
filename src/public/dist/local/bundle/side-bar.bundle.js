(window["webpackJsonpcodecrumbs"] = window["webpackJsonpcodecrumbs"] || []).push([["side-bar"],{

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/sideBar/component/Code/index.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/sass-loader/lib/loader.js!./js/components/sideBar/component/Code/index.scss ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Code {\n  height: 100%;\n  position: relative;\n  overflow: auto; }\n  .Code .crumbedLine {\n    display: block;\n    background-color: rgba(255, 225, 244, 0.8); }\n  .Code .importedDependencyLine {\n    display: block;\n    background-color: rgba(0, 148, 249, 0.1); }\n  .Code.limitedHeight {\n    max-height: 300px; }\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/sideBar/component/CrumbsTab/index.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/sass-loader/lib/loader.js!./js/components/sideBar/component/CrumbsTab/index.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".CrumbsTab {\n  height: 100%; }\n  .CrumbsTab .ant-collapse {\n    margin-left: -16px;\n    margin-right: -16px;\n    max-height: 100%;\n    overflow: auto; }\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/sideBar/component/DependenciesTab/index.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/sass-loader/lib/loader.js!./js/components/sideBar/component/DependenciesTab/index.scss ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".DependenciesTab {\n  height: 100%; }\n  .DependenciesTab .ant-collapse {\n    margin-left: -16px;\n    margin-right: -16px;\n    max-height: 100%;\n    overflow: auto; }\n", ""]);

// exports


/***/ }),

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

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/sideBar/component/SideBar.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/sass-loader/lib/loader.js!./js/components/sideBar/component/SideBar.scss ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".SideBar {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: 650px;\n  z-index: 4;\n  background-color: white;\n  border-left: 1px solid #ebedf0;\n  padding: 8px 16px; }\n  .SideBar .header {\n    width: 100%;\n    display: flex;\n    justify-content: space-between; }\n    .SideBar .header .filePath {\n      display: flex; }\n      .SideBar .header .filePath .copyIcon {\n        margin-left: 5px; }\n  .SideBar .bodySideBar {\n    height: calc(100% - 25px);\n    position: relative; }\n    .SideBar .bodySideBar .ant-tabs {\n      height: 100%; }\n    .SideBar .bodySideBar .ant-tabs-content, .SideBar .bodySideBar .ant-tabs-tabpane {\n      height: calc(100% - 25px); }\n", ""]);

// exports


/***/ }),

/***/ "../shared/astParse.js":
/*!*****************************!*\
  !*** ../shared/astParse.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// TODO: add by config

/**
 [
 'typescript',
 'flow',
 'bigInt',
 ]
 */
var config = {
  sourceType: 'module',
  plugins: ['jsx', 'asyncGenerators', 'classProperties', 'classPrivateProperties', 'classPrivateMethods', 'doExpressions', 'dynamicImport', 'exportDefaultFrom', 'exportNamespaceFrom', 'functionBind', 'functionSent', 'importMeta', 'logicalAssignment', 'nullishCoalescingOperator', 'numericSeparator', 'objectRestSpread', 'optionalCatchBinding', 'optionalChaining', 'throwExpressions']
};

var getNodeLines = function getNodeLines(node) {
  return [node.loc.start.line, node.loc.end.line];
};

module.exports = {
  config: config,
  getNodeLines: getNodeLines
};

/***/ }),

/***/ "./js/components/sideBar/SideBarContainer.js":
/*!***************************************************!*\
  !*** ./js/components/sideBar/SideBarContainer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/dataBus/selectors */ "./js/core/dataBus/selectors.js");
/* harmony import */ var core_controlsBus_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/controlsBus/actions */ "./js/core/controlsBus/actions.js");
/* harmony import */ var core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/controlsBus/selectors */ "./js/core/controlsBus/selectors.js");
/* harmony import */ var _component_SideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/SideBar */ "./js/components/sideBar/component/SideBar.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var SideBarContainer = function SideBarContainer(_ref) {
  var sideBar = _ref.sideBar,
      otherProps = _objectWithoutProperties(_ref, ["sideBar"]);

  if (!sideBar) return null; //TODO: add animation slide

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_SideBar__WEBPACK_IMPORTED_MODULE_5__["default"], otherProps);
};

var mapStateToProps = function mapStateToProps(state, props) {
  var _getSourceUserChoice = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_2__["getSourceUserChoice"])(state, props),
      selectedNode = _getSourceUserChoice.selectedNode;

  var _getValuesState = Object(core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_4__["getValuesState"])(state, props),
      selectedTabInSideBar = _getValuesState.selectedTabInSideBar;

  var _getCheckedState = Object(core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_4__["getCheckedState"])(state),
      sideBar = _getCheckedState.sideBar,
      dependenciesDiagramOn = _getCheckedState.dependenciesDiagramOn,
      codeCrumbsDiagramOn = _getCheckedState.codeCrumbsDiagramOn;

  return {
    selectedNode: selectedNode,
    sideBar: sideBar,
    dependenciesDiagramOn: dependenciesDiagramOn,
    codeCrumbsDiagramOn: codeCrumbsDiagramOn,
    selectedTabInSideBar: selectedTabInSideBar
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClose: function onClose() {
      return dispatch(Object(core_controlsBus_actions__WEBPACK_IMPORTED_MODULE_3__["toggleSwitch"])('sideBar', false));
    },
    onTabSelect: function onTabSelect(tabIndex) {
      return dispatch(Object(core_controlsBus_actions__WEBPACK_IMPORTED_MODULE_3__["selectSideBarTab"])(tabIndex));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(SideBarContainer));

/***/ }),

/***/ "./js/components/sideBar/component/Code/index.js":
/*!*******************************************************!*\
  !*** ./js/components/sideBar/component/Code/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter */ "../../node_modules/react-syntax-highlighter/index.js");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter_styles_hljs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter/styles/hljs */ "../../node_modules/react-syntax-highlighter/styles/hljs/index.js");
/* harmony import */ var react_syntax_highlighter_styles_hljs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_styles_hljs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./js/components/sideBar/component/Code/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var FONT_SIZE = '12px'; //TODO: add select with several themes
//TODO: scrool to/highlight crumbed lines
//https://github.com/conorhastings/react-syntax-highlighter/blob/master/README.md

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "fixScroll",
    value: function fixScroll() {
      var _this$props = this.props,
          _this$props$dependenc = _this$props.dependenciesLines,
          dependenciesLines = _this$props$dependenc === void 0 ? [] : _this$props$dependenc,
          _this$props$crumbedLi = _this$props.crumbedLines,
          crumbedLines = _this$props$crumbedLi === void 0 ? [] : _this$props$crumbedLi;

      if (!this.codeRef || !this.codeRef.scrollTo) {
        return;
      }

      var lines = dependenciesLines.length ? dependenciesLines : crumbedLines.length ? crumbedLines : null;
      lines && this.codeRef.scrollTo(0, lines[0][0] * 15 - 5);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.fixScroll();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fixScroll();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          code = _this$props2.code,
          _this$props2$crumbedL = _this$props2.crumbedLines,
          crumbedLines = _this$props2$crumbedL === void 0 ? [] : _this$props2$crumbedL,
          _this$props2$dependen = _this$props2.dependenciesLines,
          dependenciesLines = _this$props2$dependen === void 0 ? [] : _this$props2$dependen,
          limitedHeight = _this$props2.limitedHeight; // TODO: calc height for .Code based on dependenciesLines - it's not always need to be 300 px!!

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('Code', {
          limitedHeight: limitedHeight
        }),
        ref: function ref(el) {
          return _this.codeRef = el;
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2___default.a, {
        language: "javascript",
        style: react_syntax_highlighter_styles_hljs__WEBPACK_IMPORTED_MODULE_3__["atomOneLight"],
        showLineNumbers: true,
        wrapLines: true,
        customStyle: {
          fontSize: FONT_SIZE
        },
        lineProps: function lineProps(lineNumber) {
          if (isMatchLineNumber(crumbedLines, lineNumber)) {
            return {
              className: 'crumbedLine'
            };
          }

          if (isMatchLineNumber(dependenciesLines, lineNumber)) {
            return {
              className: 'importedDependencyLine'
            };
          }

          return {};
        }
      }, code));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



var isMatchLineNumber = function isMatchLineNumber(lines, lineNumber) {
  return !!lines.find(function (lines) {
    if (lines[0] === lineNumber && lines[1] === lineNumber) {
      return true;
    }

    return lines[0] <= lineNumber && lines[1] >= lineNumber;
  });
};

/***/ }),

/***/ "./js/components/sideBar/component/Code/index.scss":
/*!*********************************************************!*\
  !*** ./js/components/sideBar/component/Code/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss */ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/sideBar/component/Code/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./js/components/sideBar/component/CrumbsTab/index.js":
/*!************************************************************!*\
  !*** ./js/components/sideBar/component/CrumbsTab/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_alert_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/alert/style/css */ "../../node_modules/antd/es/alert/style/css.js");
/* harmony import */ var antd_es_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/alert */ "../../node_modules/antd/es/alert/index.js");
/* harmony import */ var antd_es_collapse_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/collapse/style/css */ "../../node_modules/antd/es/collapse/style/css.js");
/* harmony import */ var antd_es_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/collapse */ "../../node_modules/antd/es/collapse/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/dataBus/selectors */ "./js/core/dataBus/selectors.js");
/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Code */ "./js/components/sideBar/component/Code/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "./js/components/sideBar/component/CrumbsTab/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);









var Panel = antd_es_collapse__WEBPACK_IMPORTED_MODULE_3__["default"].Panel;

var CrumbsTab = function CrumbsTab(props) {
  var flowStepsFiles = props.flowStepsFiles;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: 'CrumbsTab'
  }, flowStepsFiles.length ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_collapse__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bordered: false,
    defaultActiveKey: Array(flowStepsFiles.length).fill().map(function (item, index) {
      return "".concat(index);
    })
  }, flowStepsFiles.map(function (stepFile, i) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Panel, {
      header: "[".concat(typeof stepFile.step !== 'undefined' ? stepFile.step : '*', "] ").concat(stepFile.file.path),
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Code__WEBPACK_IMPORTED_MODULE_7__["default"], {
      limitedHeight: true,
      code: stepFile.file.fileCode || '',
      crumbedLines: [stepFile.crumbNodeLines]
    }));
  })) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_alert__WEBPACK_IMPORTED_MODULE_1__["default"], {
    message: "C-mon, my dear friend, select crumbs trail, what are you waiting for?",
    type: "info",
    showIcon: true
  }));
};

var mapStateToProps = function mapStateToProps(state, props) {
  var _getSourceUserChoice = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_6__["getSourceUserChoice"])(state, props),
      selectedNode = _getSourceUserChoice.selectedNode;

  var _getSourceLayout = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_6__["getSourceLayout"])(state, props),
      filesLayoutMap = _getSourceLayout.filesLayoutMap;

  var _getCodeCrumbsUserCho = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_6__["getCodeCrumbsUserChoice"])(state, props),
      selectedCrumbedFlowKey = _getCodeCrumbsUserCho.selectedCrumbedFlowKey,
      codeCrumbedFlowsMap = _getCodeCrumbsUserCho.codeCrumbedFlowsMap;

  return {
    selectedNode: selectedNode,
    flowStepsFiles: getFlowStepsFiles(selectedCrumbedFlowKey, codeCrumbedFlowsMap, filesLayoutMap)
  };
};

var getFlowStepsFiles = function getFlowStepsFiles(selectedCrumbedFlowKey, codeCrumbedFlowsMap, filesLayoutMap) {
  var sortedFlowSteps = [];
  var currentFlow = codeCrumbedFlowsMap[selectedCrumbedFlowKey];

  if (!currentFlow) {
    return sortedFlowSteps;
  }

  Object.keys(currentFlow).forEach(function (filePath) {
    var steps = (filesLayoutMap[filePath] && filesLayoutMap[filePath].children || []).filter(function (_ref) {
      var data = _ref.data;
      return data.params.flow === selectedCrumbedFlowKey;
    }).map(function (_ref2) {
      var data = _ref2.data;
      return {
        crumbNodeLines: data.crumbNodeLines,
        file: filesLayoutMap[filePath].data,
        step: data.params.flowStep
      };
    });
    sortedFlowSteps = sortedFlowSteps.concat(steps);
  });
  sortedFlowSteps.sort(function (a, b) {
    return a.step - b.step;
  });
  return sortedFlowSteps;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(CrumbsTab));

/***/ }),

/***/ "./js/components/sideBar/component/CrumbsTab/index.scss":
/*!**************************************************************!*\
  !*** ./js/components/sideBar/component/CrumbsTab/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss */ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/sideBar/component/CrumbsTab/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./js/components/sideBar/component/DependenciesTab/index.js":
/*!******************************************************************!*\
  !*** ./js/components/sideBar/component/DependenciesTab/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_alert_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/alert/style/css */ "../../node_modules/antd/es/alert/style/css.js");
/* harmony import */ var antd_es_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/alert */ "../../node_modules/antd/es/alert/index.js");
/* harmony import */ var antd_es_collapse_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/collapse/style/css */ "../../node_modules/antd/es/collapse/style/css.js");
/* harmony import */ var antd_es_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/collapse */ "../../node_modules/antd/es/collapse/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/dataBus/selectors */ "./js/core/dataBus/selectors.js");
/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Code */ "./js/components/sideBar/component/Code/index.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/utils */ "./js/components/sideBar/component/shared/utils.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.scss */ "./js/components/sideBar/component/DependenciesTab/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);










var Panel = antd_es_collapse__WEBPACK_IMPORTED_MODULE_3__["default"].Panel;

var DependenciesTab = function DependenciesTab(props) {
  var selectedNode = props.selectedNode,
      filesMap = props.filesMap,
      foldersMap = props.foldersMap,
      selectedDependencyEdgeNodes = props.selectedDependencyEdgeNodes;
  var importedDependencies = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_8__["filterImportedDependencies"])(selectedNode.importedDependencies, selectedDependencyEdgeNodes);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: 'DependenciesTab'
  }, importedDependencies.length ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_collapse__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bordered: false,
    defaultActiveKey: ['0', '1']
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Panel, {
    header: selectedNode.path,
    key: "0"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Code__WEBPACK_IMPORTED_MODULE_7__["default"], {
    limitedHeight: true,
    code: selectedNode.fileCode,
    dependenciesLines: importedDependencies.map(function (_ref) {
      var importNodeLines = _ref.importNodeLines;
      return importNodeLines;
    })
  })), importedDependencies.map(function (file, i) {
    // TODO: extract code from server before
    var fileNode = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_8__["findFileNode"])(file.sourceFile, filesMap, foldersMap);

    if (!fileNode) {
      return null;
    }

    var exportedDependencies = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_8__["extractExportsForImports"])(fileNode.fileCode, file.specifiers, file.sourceFile);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Panel, {
      header: fileNode.path,
      key: i + 1
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Code__WEBPACK_IMPORTED_MODULE_7__["default"], {
      limitedHeight: true,
      code: fileNode.fileCode || '',
      dependenciesLines: exportedDependencies
    }));
  })) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_alert__WEBPACK_IMPORTED_MODULE_1__["default"], {
    message: "C-mon, my dear friend, select dependency connection, what are you waiting for?",
    type: "info",
    showIcon: true
  }));
};

var mapStateToProps = function mapStateToProps(state, props) {
  var _getSource = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_6__["getSource"])(state, props),
      filesMap = _getSource.filesMap,
      foldersMap = _getSource.foldersMap;

  var _getSourceUserChoice = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_6__["getSourceUserChoice"])(state, props),
      selectedNode = _getSourceUserChoice.selectedNode;

  var _getDependenciesUserC = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_6__["getDependenciesUserChoice"])(state, props),
      selectedDependencyEdgeNodes = _getDependenciesUserC.selectedDependencyEdgeNodes;

  return {
    selectedNode: selectedNode,
    selectedDependencyEdgeNodes: selectedDependencyEdgeNodes,
    filesMap: filesMap,
    foldersMap: foldersMap
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(DependenciesTab));

/***/ }),

/***/ "./js/components/sideBar/component/DependenciesTab/index.scss":
/*!********************************************************************!*\
  !*** ./js/components/sideBar/component/DependenciesTab/index.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss */ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/sideBar/component/DependenciesTab/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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

/***/ }),

/***/ "./js/components/sideBar/component/SideBar.js":
/*!****************************************************!*\
  !*** ./js/components/sideBar/component/SideBar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var antd_es_skeleton_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/skeleton/style/css */ "../../node_modules/antd/es/skeleton/style/css.js");
/* harmony import */ var antd_es_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/skeleton */ "../../node_modules/antd/es/skeleton/index.js");
/* harmony import */ var antd_es_alert_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/alert/style/css */ "../../node_modules/antd/es/alert/style/css.js");
/* harmony import */ var antd_es_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/alert */ "../../node_modules/antd/es/alert/index.js");
/* harmony import */ var antd_es_tabs_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/tabs/style/css */ "../../node_modules/antd/es/tabs/style/css.js");
/* harmony import */ var antd_es_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/tabs */ "../../node_modules/antd/es/tabs/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/constants */ "./js/core/constants/index.js");
/* harmony import */ var components_topBar_controls_Copy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/topBar/controls/Copy */ "./js/components/topBar/controls/Copy/index.js");
/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Code */ "./js/components/sideBar/component/Code/index.js");
/* harmony import */ var _DependenciesTab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DependenciesTab */ "./js/components/sideBar/component/DependenciesTab/index.js");
/* harmony import */ var _CrumbsTab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CrumbsTab */ "./js/components/sideBar/component/CrumbsTab/index.js");
/* harmony import */ var _FlowChartTab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FlowChartTab */ "./js/components/sideBar/component/FlowChartTab/index.js");
/* harmony import */ var _SideBar_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SideBar.scss */ "./js/components/sideBar/component/SideBar.scss");
/* harmony import */ var _SideBar_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_SideBar_scss__WEBPACK_IMPORTED_MODULE_13__);














var TabPane = antd_es_tabs__WEBPACK_IMPORTED_MODULE_5__["default"].TabPane; //TODO: Add slide from right animation

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var selectedNode = _ref.selectedNode,
      onClose = _ref.onClose,
      selectedTabInSideBar = _ref.selectedTabInSideBar,
      dependenciesDiagramOn = _ref.dependenciesDiagramOn,
      codeCrumbsDiagramOn = _ref.codeCrumbsDiagramOn,
      onTabSelect = _ref.onTabSelect;
  var file = selectedNode && selectedNode.type === core_constants__WEBPACK_IMPORTED_MODULE_7__["FILE_NODE_TYPE"] ? selectedNode : null;
  var header = null;
  var content = null;

  if (file && file.fileCode) {
    header = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, file.path), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: 'copyIcon'
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_topBar_controls_Copy__WEBPACK_IMPORTED_MODULE_8__["Copy"], {
      copyText: file.path
    })));
    content = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_tabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
      defaultActiveKey: selectedTabInSideBar,
      onChange: onTabSelect
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(TabPane, {
      tab: "Code",
      key: "Code"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Code__WEBPACK_IMPORTED_MODULE_9__["default"], {
      code: file.fileCode
    })), dependenciesDiagramOn && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(TabPane, {
      tab: "Dependencies",
      key: "Dependencies"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_DependenciesTab__WEBPACK_IMPORTED_MODULE_10__["default"], null)) || null, codeCrumbsDiagramOn && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(TabPane, {
      tab: "Crumbs",
      key: "Crumbs"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_CrumbsTab__WEBPACK_IMPORTED_MODULE_11__["default"], null)) || null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(TabPane, {
      tab: "FlowChart",
      key: "FlowChart"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_FlowChartTab__WEBPACK_IMPORTED_MODULE_12__["default"], {
      fileCode: file.fileCode,
      active: selectedTabInSideBar === 'FlowChart'
    })));
  } else {
    header = process.env.STANDALONE ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_alert__WEBPACK_IMPORTED_MODULE_3__["default"], {
      message: "No code for this file in standalone mode.",
      description: "Only files with codecrumbs have pre-fetched code. Consider to run codecrumbs locally for this project to access all code. Check instructions here https://github.com/Bogdan-Lyashenko/codecrumbs",
      type: "warning",
      showIcon: true
    }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_alert__WEBPACK_IMPORTED_MODULE_3__["default"], {
      message: "Looks like this file has no code in it.. hmm.. interesting.",
      type: "info",
      showIcon: true
    });
    content = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], null);
  }

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "SideBar"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "header"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: 'filePath'
  }, header), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "#",
    onClick: onClose
  }, "X")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "bodySideBar"
  }, content));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "./js/components/sideBar/component/SideBar.scss":
/*!******************************************************!*\
  !*** ./js/components/sideBar/component/SideBar.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/sass-loader/lib/loader.js!./SideBar.scss */ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/sideBar/component/SideBar.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./js/components/sideBar/component/shared/utils.js":
/*!*********************************************************!*\
  !*** ./js/components/sideBar/component/shared/utils.js ***!
  \*********************************************************/
/*! exports provided: filterImportedDependencies, findFileNode, extractExportsForImports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterImportedDependencies", function() { return filterImportedDependencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFileNode", function() { return findFileNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractExportsForImports", function() { return extractExportsForImports; });
var babylon = __webpack_require__(/*! @babel/parser */ "../../node_modules/@babel/parser/lib/index.js");

var babelTraverse = __webpack_require__(/*! @babel/traverse */ "../../node_modules/@babel/traverse/lib/index.js");

var _require = __webpack_require__(/*! shared-with-server-src/astParse */ "../shared/astParse.js"),
    astParseConfig = _require.config,
    getNodeLines = _require.getNodeLines;

var filterImportedDependencies = function filterImportedDependencies() {
  var importedDependencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var selectedDependencyEdgeNodes = arguments.length > 1 ? arguments[1] : undefined;

  if (!selectedDependencyEdgeNodes) {
    return [];
  }

  return importedDependencies.filter(function (dependency) {
    var sources = selectedDependencyEdgeNodes.sources;
    return sources.find(function (source) {
      var pathIndexMath = /\w/.exec(dependency.sourceFile);
      var pathName = dependency.sourceFile.substr(pathIndexMath && pathIndexMath.index);
      return source.indexOf(pathName) !== -1;
    });
  });
};
var findFileNode = function findFileNode(path, filesMap, foldersMap) {
  if (foldersMap[path]) {
    path += '/index';
  }

  if (filesMap[path]) {
    return filesMap[path];
  }

  var completePath = Object.keys(filesMap).find(function (key) {
    return key.indexOf(path) === 0;
  });
  return filesMap[completePath];
};
var extractExportsForImports = function extractExportsForImports(fileCode, specifiers, path) {
  var ast = {};
  var exports = [];

  try {
    ast = babylon.parse(fileCode, astParseConfig);
    var isDefaultImported = !!specifiers.find(function (_ref) {
      var type = _ref.type;
      return type === 'ImportDefaultSpecifier';
    });
    var namedImportsNames = specifiers.filter(function (_ref2) {
      var type = _ref2.type;
      return type === 'ImportSpecifier';
    }).map(function (_ref3) {
      var name = _ref3.name;
      return name;
    });
    babelTraverse.default(ast, {
      enter: function enter(path) {
        var node = path.node;

        if (isDefaultImported && node.type === 'ExportDefaultDeclaration') {
          exports.push(node);
        } else if (node.type === 'ExportNamedDeclaration') {
          var declaration = node.declaration && node.declaration.declarations.find(function (d) {
            return namedImportsNames.includes(d.id.name);
          });

          if (declaration) {
            exports.push(node);
          }
        }
      }
    });
    return exports.map(getNodeLines);
  } catch (e) {
    console.log(path, e);
    return exports;
  }
};

/***/ }),

/***/ "./js/components/topBar/controls/Copy/index.js":
/*!*****************************************************!*\
  !*** ./js/components/topBar/controls/Copy/index.js ***!
  \*****************************************************/
/*! exports provided: Copy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Copy", function() { return Copy; });
/* harmony import */ var antd_es_icon_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/icon/style/css */ "../../node_modules/antd/es/icon/style/css.js");
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/icon */ "../../node_modules/antd/es/icon/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! copy-text-to-clipboard */ "../../node_modules/copy-text-to-clipboard/index.js");
/* harmony import */ var copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);




var Copy = function Copy(_ref) {
  var copyText = _ref.copyText;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default()(copyText);
    },
    title: 'Copy path'
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "copy",
    theme: "outlined"
  }));
};

/***/ })

}]);
//# sourceMappingURL=side-bar.bundle.js.map