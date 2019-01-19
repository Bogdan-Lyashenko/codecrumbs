(window["webpackJsonpcodecrumbs"] = window["webpackJsonpcodecrumbs"] || []).push([["explorer-bar"],{

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/explorerBar/component/ExplorerBar.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/sass-loader/lib/loader.js!./js/components/explorerBar/component/ExplorerBar.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ExplorerBar {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 250px;\n  z-index: 6;\n  background-color: white;\n  border-right: 1px solid #ebedf0; }\n  .ExplorerBar .body {\n    height: 100%;\n    position: relative; }\n    .ExplorerBar .body .ant-tree {\n      width: 100%; }\n", ""]);

// exports


/***/ }),

/***/ "./js/components/explorerBar/ExplorerBarContainer.js":
/*!***********************************************************!*\
  !*** ./js/components/explorerBar/ExplorerBarContainer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/dataBus/selectors */ "./js/core/dataBus/selectors.js");
/* harmony import */ var core_dataBus_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/dataBus/actions */ "./js/core/dataBus/actions.js");
/* harmony import */ var core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/controlsBus/selectors */ "./js/core/controlsBus/selectors.js");
/* harmony import */ var _component_ExplorerBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/ExplorerBar */ "./js/components/explorerBar/component/ExplorerBar.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var ExplorerBarContainer = function ExplorerBarContainer(_ref) {
  var explorerBar = _ref.explorerBar,
      otherProps = _objectWithoutProperties(_ref, ["explorerBar"]);

  if (!explorerBar) return null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_ExplorerBar__WEBPACK_IMPORTED_MODULE_5__["default"], otherProps);
};

var mapStateToProps = function mapStateToProps(state, props) {
  var _getSource = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_2__["getSource"])(state, props),
      filesMap = _getSource.filesMap,
      foldersMap = _getSource.foldersMap;

  var _getSourceLayout = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_2__["getSourceLayout"])(state, props),
      sourceLayoutTree = _getSourceLayout.sourceLayoutTree;

  var _getCheckedState = Object(core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_4__["getCheckedState"])(state),
      explorerBar = _getCheckedState.explorerBar;

  return {
    nodesTree: [sourceLayoutTree],
    filesMap: filesMap,
    foldersMap: foldersMap,
    explorerBar: explorerBar
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onFolderClick: function onFolderClick(node) {
      /*dispatch(toggleFolder(node))*/
    },
    onFileClick: function onFileClick(node) {
      dispatch(Object(core_dataBus_actions__WEBPACK_IMPORTED_MODULE_3__["selectNode"])(node));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ExplorerBarContainer));

/***/ }),

/***/ "./js/components/explorerBar/component/ExplorerBar.js":
/*!************************************************************!*\
  !*** ./js/components/explorerBar/component/ExplorerBar.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_tree_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/tree/style/css */ "../../node_modules/antd/es/tree/style/css.js");
/* harmony import */ var antd_es_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/tree */ "../../node_modules/antd/es/tree/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/constants */ "./js/core/constants/index.js");
/* harmony import */ var _ExplorerBar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExplorerBar.scss */ "./js/components/explorerBar/component/ExplorerBar.scss");
/* harmony import */ var _ExplorerBar_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ExplorerBar_scss__WEBPACK_IMPORTED_MODULE_4__);





var DirectoryTree = antd_es_tree__WEBPACK_IMPORTED_MODULE_1__["default"].DirectoryTree;
var TreeNode = antd_es_tree__WEBPACK_IMPORTED_MODULE_1__["default"].TreeNode;

var buildNodes = function buildNodes(tree) {
  return (!tree ? [] : tree).filter(function (n) {
    return !!n;
  }).map(function (node) {
    if (node.data.type === core_constants__WEBPACK_IMPORTED_MODULE_3__["FILE_NODE_TYPE"]) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TreeNode, {
        title: node.data.name,
        key: node.data.path,
        isLeaf: true
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TreeNode, {
      title: node.data.name,
      key: node.data.path
    }, buildNodes(node.children));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var nodesTree = _ref.nodesTree,
      onFileClick = _ref.onFileClick,
      onFolderClick = _ref.onFolderClick,
      filesMap = _ref.filesMap,
      foldersMap = _ref.foldersMap;

  if (!nodesTree || !nodesTree.length || !nodesTree[0]) {
    return null;
  }

  var rootPath = nodesTree[0].data.path;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "ExplorerBar"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "body"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DirectoryTree, {
    showIcon: true,
    defaultExpandedKeys: [rootPath],
    onSelect: function onSelect(path) {
      return filesMap[path] && onFileClick(filesMap[path]);
    },
    onExpand: function onExpand(path) {
      return foldersMap[path] && onFolderClick(foldersMap[path]);
    }
  }, buildNodes(nodesTree))));
});

/***/ }),

/***/ "./js/components/explorerBar/component/ExplorerBar.scss":
/*!**************************************************************!*\
  !*** ./js/components/explorerBar/component/ExplorerBar.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/sass-loader/lib/loader.js!./ExplorerBar.scss */ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/explorerBar/component/ExplorerBar.scss");

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
//# sourceMappingURL=explorer-bar.bundle.js.map