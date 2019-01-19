(window["webpackJsonpcodecrumbs"] = window["webpackJsonpcodecrumbs"] || []).push([["dependencies-tab"],{

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/sideBar/component/Code/index.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/sass-loader/lib/loader.js!./js/components/sideBar/component/Code/index.scss ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Code {\n  height: 100%;\n  position: relative;\n  overflow: auto; }\n  .Code .crumbedLine {\n    display: block;\n    background-color: rgba(255, 225, 244, 0.8); }\n  .Code .importedDependencyLine {\n    display: block;\n    background-color: rgba(0, 148, 249, 0.1); }\n  .Code.limitedHeight {\n    max-height: 200px; }\n", ""]);

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

/***/ })

}]);
//# sourceMappingURL=dependencies-tab.bundle.js.map