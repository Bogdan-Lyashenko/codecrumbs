(window["webpackJsonpcodecrumbs"] = window["webpackJsonpcodecrumbs"] || []).push([["side-bar"],{

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
/* harmony import */ var _SideBar_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SideBar.scss */ "./js/components/sideBar/component/SideBar.scss");
/* harmony import */ var _SideBar_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_SideBar_scss__WEBPACK_IMPORTED_MODULE_9__);









var Code = react__WEBPACK_IMPORTED_MODULE_6___default.a.lazy(function () {
  return Promise.all(/*! import() | code */[__webpack_require__.e("vendors~code~crumbs-tab~dependencies-tab"), __webpack_require__.e("code")]).then(__webpack_require__.bind(null, /*! ./Code */ "./js/components/sideBar/component/Code/index.js"));
});
var DependenciesTab = react__WEBPACK_IMPORTED_MODULE_6___default.a.lazy(function () {
  return Promise.all(/*! import() | dependencies-tab */[__webpack_require__.e("vendors~code~crumbs-tab~dependencies-tab"), __webpack_require__.e("vendors~dependencies-tab~view-switches"), __webpack_require__.e("vendors~crumbs-tab~dependencies-tab"), __webpack_require__.e("vendors~dependencies-tab"), __webpack_require__.e("dependencies-tab")]).then(__webpack_require__.bind(null, /*! ./DependenciesTab */ "./js/components/sideBar/component/DependenciesTab/index.js"));
});
var CrumbsTab = react__WEBPACK_IMPORTED_MODULE_6___default.a.lazy(function () {
  return Promise.all(/*! import() | crumbs-tab */[__webpack_require__.e("vendors~code~crumbs-tab~dependencies-tab"), __webpack_require__.e("vendors~crumbs-tab~dependencies-tab"), __webpack_require__.e("crumbs-tab")]).then(__webpack_require__.bind(null, /*! ./CrumbsTab */ "./js/components/sideBar/component/CrumbsTab/index.js"));
});
var FlowChartTab = react__WEBPACK_IMPORTED_MODULE_6___default.a.lazy(function () {
  return Promise.all(/*! import() | flow-chart-tab */[__webpack_require__.e("vendors~flow-chart-tab~tree-diagram"), __webpack_require__.e("flow-chart-tab")]).then(__webpack_require__.bind(null, /*! ./FlowChartTab */ "./js/components/sideBar/component/FlowChartTab/index.js"));
});

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
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Suspense"], {
      fallback: null
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Code, {
      code: file.fileCode
    }))), dependenciesDiagramOn && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(TabPane, {
      tab: "Dependencies",
      key: "Dependencies"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Suspense"], {
      fallback: null
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DependenciesTab, null))) || null, codeCrumbsDiagramOn && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(TabPane, {
      tab: "Crumbs",
      key: "Crumbs"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Suspense"], {
      fallback: null
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(CrumbsTab, null))) || null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(TabPane, {
      tab: "FlowChart",
      key: "FlowChart"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Suspense"], {
      fallback: null
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FlowChartTab, {
      fileCode: file.fileCode,
      active: selectedTabInSideBar === 'FlowChart'
    }))));
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