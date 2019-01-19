(window["webpackJsonpcodecrumbs"] = window["webpackJsonpcodecrumbs"] || []).push([["top-bar"],{

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/topBar/subPanel/SubPanelContainer.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/sass-loader/lib/loader.js!./js/components/topBar/subPanel/SubPanelContainer.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".SubPanelContainer {\n  padding: 3px 0;\n  border-top: 1px solid #ebedf0;\n  display: flex; }\n\n.copyIcon {\n  margin-left: 5px; }\n", ""]);

// exports


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

/***/ }),

/***/ "./js/components/topBar/subPanel/SubPanelContainer.js":
/*!************************************************************!*\
  !*** ./js/components/topBar/subPanel/SubPanelContainer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/breadcrumb/style/css */ "../../node_modules/antd/es/breadcrumb/style/css.js");
/* harmony import */ var antd_es_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/breadcrumb */ "../../node_modules/antd/es/breadcrumb/index.js");
/* harmony import */ var antd_es_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/icon/style/css */ "../../node_modules/antd/es/icon/style/css.js");
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/icon */ "../../node_modules/antd/es/icon/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var core_constants_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/constants/index */ "./js/core/constants/index.js");
/* harmony import */ var components_topBar_controls_Copy_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/topBar/controls/Copy/index */ "./js/components/topBar/controls/Copy/index.js");
/* harmony import */ var core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/dataBus/selectors */ "./js/core/dataBus/selectors.js");
/* harmony import */ var _SubPanelContainer_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SubPanelContainer.scss */ "./js/components/topBar/subPanel/SubPanelContainer.scss");
/* harmony import */ var _SubPanelContainer_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_SubPanelContainer_scss__WEBPACK_IMPORTED_MODULE_9__);











var SubPanelContainer = function SubPanelContainer(_ref) {
  var selectedNode = _ref.selectedNode;
  if (!selectedNode) return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "SubPanelContainer"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["default"].Item, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "home"
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["default"].Item, null, " ")));
  var pathParts = selectedNode.path.split('/');
  var lastNode = selectedNode.type === core_constants_index__WEBPACK_IMPORTED_MODULE_6__["FILE_NODE_TYPE"] ? pathParts.pop() : null; // TODO: close folder on click

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "SubPanelContainer"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["default"].Item, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "home"
  })), pathParts.map(function (part, i) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
      key: part + i
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: "#",
      onClick: function onClick() {
        return console.log("close folder ".concat(pathParts.slice(0, i).join('/')));
      }
    }, part));
  }), lastNode && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["default"].Item, null, lastNode)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: 'copyIcon'
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_topBar_controls_Copy_index__WEBPACK_IMPORTED_MODULE_7__["Copy"], {
    copyText: selectedNode.path
  })));
};

var mapStateToProps = function mapStateToProps(state, props) {
  var _getSourceUserChoice = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_8__["getSourceUserChoice"])(state, props),
      selectedNode = _getSourceUserChoice.selectedNode;

  return {
    selectedNode: selectedNode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(SubPanelContainer));

/***/ }),

/***/ "./js/components/topBar/subPanel/SubPanelContainer.scss":
/*!**************************************************************!*\
  !*** ./js/components/topBar/subPanel/SubPanelContainer.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/sass-loader/lib/loader.js!./SubPanelContainer.scss */ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/topBar/subPanel/SubPanelContainer.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=top-bar.bundle.js.map