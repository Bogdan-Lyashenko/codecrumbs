(window["webpackJsonpcodecrumbs"] = window["webpackJsonpcodecrumbs"] || []).push([["tree-diagram"],{

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/treeDiagram/component/Dot/index.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/sass-loader/lib/loader.js!./js/components/treeDiagram/component/Dot/index.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.FadeIn, .Dot {\n  opacity: 0;\n  -webkit-animation: fadeIn ease 1;\n  -moz-animation: fadeIn ease 1;\n  animation: fadeIn ease 1;\n  -webkit-animation-fill-mode: forwards;\n  -moz-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 0.6s;\n  -moz-animation-duration: 0.6s;\n  animation-duration: 0.6s; }\n\n.Dot {\n  fill: #BFBFBF; }\n\n.Dot-disabled {\n  fill: #ccc; }\n\n.Dot-selected {\n  fill: #777777; }\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/treeDiagram/component/Edge/index.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/sass-loader/lib/loader.js!./js/components/treeDiagram/component/Edge/index.scss ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.FadeIn, .Animation, .CodeCrumbEdge {\n  opacity: 0;\n  -webkit-animation: fadeIn ease 1;\n  -moz-animation: fadeIn ease 1;\n  animation: fadeIn ease 1;\n  -webkit-animation-fill-mode: forwards;\n  -moz-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 0.6s;\n  -moz-animation-duration: 0.6s;\n  animation-duration: 0.6s; }\n\n.EdgeMouseHandler {\n  cursor: pointer;\n  fill: none;\n  stroke-width: 8px;\n  stroke: rgba(0, 0, 0, 0); }\n\n.SourceEdge {\n  fill: none;\n  stroke: #BFBFBF;\n  stroke-width: 1px; }\n\n.SourceEdge-disabled {\n  stroke: #ccc; }\n\n.SourceEdge-selected {\n  stroke: #555555; }\n\n.DependenciesEdge {\n  fill: none;\n  stroke: #1890ff; }\n\n.DependenciesEdge-selected {\n  stroke: #754BC3; }\n\n.DependenciesEdge-end-dot {\n  fill: #1890ff; }\n\n.DependenciesEdge-end-dot-selected {\n  fill: #754BC3; }\n\n.CodeCrumbEdge {\n  fill: none;\n  stroke: #ff18a6; }\n\n.CodeCrumbEdge-flow {\n  fill: none;\n  stroke: #ff18a6; }\n\n.CodeCrumbEdge-flow-source {\n  fill: #ff18a6;\n  stroke: #ff18a6; }\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/treeDiagram/component/Node/index.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/sass-loader/lib/loader.js!./js/components/treeDiagram/component/Node/index.scss ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.FadeIn, .CodeCrumbNode, .FileNode, .FolderNode {\n  opacity: 0;\n  -webkit-animation: fadeIn ease 1;\n  -moz-animation: fadeIn ease 1;\n  animation: fadeIn ease 1;\n  -webkit-animation-fill-mode: forwards;\n  -moz-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 0.6s;\n  -moz-animation-duration: 0.6s;\n  animation-duration: 0.6s; }\n\n.NodeIcon {\n  cursor: pointer; }\n\n.NodeText-cover {\n  stroke: none;\n  fill: rgba(255, 255, 255, 0.7); }\n\n.NodeIcon-folder-line {\n  fill: none;\n  stroke: #BFBFBF; }\n\n.NodeIcon-folder-line-disabled {\n  stroke: #ccc; }\n\n.NodeText-file-name {\n  fill: #595959;\n  font-family: \"Menlo\";\n  cursor: pointer; }\n\n.NodeText-file-name-purple {\n  fill: #ff18a6; }\n\n.NodeText-file-name-selected {\n  fill: #754BC3; }\n\n.NodeText-file-name-entry-point {\n  stroke: #1890ff;\n  fill: none; }\n\n.NodeText-file-name-entry-point-selected {\n  stroke: #754BC3; }\n\n.NodeText-file-dependencyImportedOnly {\n  stroke: #cccccc;\n  fill: white; }\n\n.NodeText-folder-name {\n  fill: #595959;\n  font-family: \"Menlo\";\n  cursor: pointer; }\n\n.NodeText-folder-name-disabled {\n  fill: #A9A8A8; }\n\n.Folder-collapsed-children-rect {\n  fill: #ffffff; }\n\n.Folder-collapsed-children-text {\n  fill: #1890ff;\n  font-size: 16px; }\n\n.CodeCrumbName-rect {\n  fill: #fff;\n  stroke: #ff18a6; }\n\n.CodeCrumbName-flow-step {\n  fill: #ff18a6;\n  stroke: #e91e63; }\n\n.CodeCrumbName-flow {\n  fill: #ffffff;\n  font-family: \"Menlo\";\n  font-size: 12px; }\n\n.CodeCrumbName-loc {\n  fill: #595959;\n  font-family: \"Menlo\";\n  font-size: 9px;\n  cursor: pointer; }\n\n.CodeCrumbName-text {\n  fill: #ff18a6;\n  font-family: \"Menlo\";\n  font-size: 12px;\n  cursor: pointer; }\n\n.CodeCrumbName-text-flow {\n  fill: #ff18a6;\n  font-size: 13px; }\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/treeDiagram/component/TreeDiagram.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/sass-loader/lib/loader.js!./js/components/treeDiagram/component/TreeDiagram.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".TreeDiagram {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-grow: 1; }\n\n.MainLoader {\n  display: flex;\n  justify-content: space-between;\n  justify-items: center;\n  padding: 200px;\n  width: 100%; }\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/treeDiagram/component/UnderLayer/index.scss":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/sass-loader/lib/loader.js!./js/components/treeDiagram/component/UnderLayer/index.scss ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".UnderLayer {\n  fill: #ffffff;\n  stroke: none; }\n", ""]);

// exports


/***/ }),

/***/ "./js/components/treeDiagram/TreeDiagramContainer.js":
/*!***********************************************************!*\
  !*** ./js/components/treeDiagram/TreeDiagramContainer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var core_dataBus_utils_geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/dataBus/utils/geometry */ "./js/core/dataBus/utils/geometry.js");
/* harmony import */ var _component_TreeDiagram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/TreeDiagram */ "./js/components/treeDiagram/component/TreeDiagram.js");
/* harmony import */ var core_dataBus_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/dataBus/actions */ "./js/core/dataBus/actions.js");
/* harmony import */ var core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/dataBus/selectors */ "./js/core/dataBus/selectors.js");
/* harmony import */ var core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/controlsBus/selectors */ "./js/core/controlsBus/selectors.js");







var mapStateToProps = function mapStateToProps(state, props) {
  var _getSourceLayout = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_4__["getSourceLayout"])(state, props),
      sourceLayoutTree = _getSourceLayout.sourceLayoutTree;

  var _getValuesState = Object(core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_5__["getValuesState"])(state, props),
      diagramZoom = _getValuesState.diagramZoom;

  return {
    diagramZoom: diagramZoom,
    sourceLayoutTree: sourceLayoutTree,
    layoutSize: Object(core_dataBus_utils_geometry__WEBPACK_IMPORTED_MODULE_1__["calculateLayoutSize"])(sourceLayoutTree)
  };
};

var mapDispatchToProps = {
  onUnderLayerClick: function onUnderLayerClick() {
    return Object(core_dataBus_actions__WEBPACK_IMPORTED_MODULE_3__["selectDependencyEdge"])(null);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_component_TreeDiagram__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./js/components/treeDiagram/component/Dot/index.js":
/*!**********************************************************!*\
  !*** ./js/components/treeDiagram/component/Dot/index.js ***!
  \**********************************************************/
/*! exports provided: Dot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dot", function() { return Dot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/constants */ "./js/core/constants/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./js/components/treeDiagram/component/Dot/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);



var Dot = function Dot(props) {
  var position = props.position,
      disabled = props.disabled,
      selected = props.selected,
      type = props.type;
  var iconPath = "".concat(core_constants__WEBPACK_IMPORTED_MODULE_1__["ICONS_DIR"], "dot/").concat(type ? "".concat(type, "-") : '').concat(selected ? 'selected-' : '', "dot.svg");
  var iconSize = 6;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("image", {
    x: position.x - 2.5,
    y: position.y - 2.5,
    xlinkHref: iconPath,
    height: iconSize,
    width: iconSize
  });
};

/***/ }),

/***/ "./js/components/treeDiagram/component/Dot/index.scss":
/*!************************************************************!*\
  !*** ./js/components/treeDiagram/component/Dot/index.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss */ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/treeDiagram/component/Dot/index.scss");

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

/***/ "./js/components/treeDiagram/component/Edge/CodeCrumbEdge.js":
/*!*******************************************************************!*\
  !*** ./js/components/treeDiagram/component/Edge/CodeCrumbEdge.js ***!
  \*******************************************************************/
/*! exports provided: PartEdge, CodeCrumbEdge, CodeCrumbedFlowEdge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartEdge", function() { return PartEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeCrumbEdge", function() { return CodeCrumbEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeCrumbedFlowEdge", function() { return CodeCrumbedFlowEdge; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/constants */ "./js/core/constants/index.js");
/* harmony import */ var components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/treeDiagram/store/constants */ "./js/components/treeDiagram/store/constants.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./js/components/treeDiagram/component/Edge/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var PartEdge = function PartEdge(props) {
  var sourcePosition = props.sourcePosition,
      parentName = props.parentName;
  var nameWidth = components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_2__["SYMBOL_WIDTH"] * parentName.length;
  var padding = 17;
  var P1 = {
    x: sourcePosition.x + nameWidth + padding,
    y: sourcePosition.y
  };
  var P2 = {
    x: P1.x + padding + 6,
    y: P1.y
  };
  var polylinePoints = [[P1.x, P1.y], [P2.x, P2.y]];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: polylinePoints.join(', '),
    className: 'CodeCrumbEdge',
    strokeDasharray: "2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: P1.x,
    y1: P1.y - 2,
    x2: P1.x,
    y2: P1.y + 2,
    className: 'CodeCrumbEdge'
  }));
};
var CodeCrumbEdge = function CodeCrumbEdge(props) {
  var sourcePosition = props.sourcePosition,
      targetPosition = props.targetPosition,
      parentName = props.parentName;
  var nameWidth = components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_2__["SYMBOL_WIDTH"] * parentName.length;
  var padding = 40;
  var edgeTurnDistance = 20;
  var P1 = {
    x: sourcePosition.x + nameWidth + padding,
    y: sourcePosition.y
  };
  var P2 = {
    x: targetPosition.x - edgeTurnDistance,
    y: sourcePosition.y
  };
  var P3 = {
    x: targetPosition.x - edgeTurnDistance,
    y: targetPosition.y
  };
  var P4 = targetPosition;
  var polylinePoints = [[P1.x, P1.y], [P2.x, P2.y], [P3.x, P3.y], [P4.x, P4.y]];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: polylinePoints.join(', '),
    className: 'CodeCrumbEdge',
    strokeDasharray: "2"
  });
};
var CodeCrumbedFlowEdge = function CodeCrumbedFlowEdge(props) {
  var sourcePosition = props.sourcePosition,
      targetPosition = props.targetPosition,
      sourceName = props.sourceName,
      singleCrumbSource = props.singleCrumbSource,
      singleCrumbTarget = props.singleCrumbTarget,
      _props$onClick = props.onClick,
      onClick = _props$onClick === void 0 ? function () {
    return console.log('cc edge');
  } : _props$onClick;
  var rHalf = 6;
  var sourcePt = {
    x: -1 - rHalf + (singleCrumbSource ? sourcePosition.x - 22 : sourcePosition.x),
    y: sourcePosition.y - rHalf
  };
  var targetPt = {
    x: -rHalf + (singleCrumbTarget ? targetPosition.x - 22 : targetPosition.x),
    y: targetPosition.y + rHalf
  };
  var padding = 20 - rHalf;
  var vTurn = 13;
  var polylinePoints = [];

  if (targetPt.y > sourcePt.y) {
    if (targetPt.x > sourcePt.x) {
      polylinePoints = [[sourcePt.x, sourcePt.y], [sourcePt.x, sourcePt.y - padding], [targetPt.x - 11, sourcePt.y - padding], [targetPt.x - 11, targetPt.y + vTurn], [targetPt.x, targetPt.y + vTurn], [targetPt.x, targetPt.y]];
    } else {
      var nLength = sourceName.length < 10 ? sourceName.length * components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_2__["SYMBOL_WIDTH"] + 8 : 100;
      polylinePoints = [[sourcePt.x, sourcePt.y], [sourcePt.x, sourcePt.y - padding], [sourcePt.x + nLength, sourcePt.y - padding], [sourcePt.x + nLength, targetPt.y + vTurn], [targetPt.x, targetPt.y + vTurn], [targetPt.x, targetPt.y]];
    }
  } else {
    if (Math.abs(sourcePt.x - targetPt.x) < 5) {
      polylinePoints = [[sourcePt.x, sourcePt.y], [targetPt.x, targetPt.y]];
    } else {
      polylinePoints = [[sourcePt.x, sourcePt.y], [sourcePt.x, sourcePt.y - padding], [targetPt.x, sourcePt.y - padding], [targetPt.x, targetPt.y]];
    }
  }

  var endPointConfig = _objectSpread({}, targetPt);

  endPointConfig.x -= 4;
  endPointConfig.y += 0;
  endPointConfig.iconSize = 8;
  endPointConfig.iconPath = "".concat(core_constants__WEBPACK_IMPORTED_MODULE_1__["ICONS_DIR"], "arrow/purple-arrow.svg"); // TODO: move to getter

  endPointConfig.angle = -90;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: 'CodeCrumbEdge'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: sourcePt.x - 1,
    y: sourcePt.y - 3,
    width: 3,
    height: 2,
    className: 'CodeCrumbEdge-flow-source'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: polylinePoints.join(', '),
    className: 'CodeCrumbEdge-flow'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("image", {
    x: endPointConfig.x,
    y: endPointConfig.y,
    xlinkHref: endPointConfig.iconPath,
    height: endPointConfig.iconSize,
    width: endPointConfig.iconSize,
    transform: "rotate(".concat(endPointConfig.angle, " ").concat(endPointConfig.x + endPointConfig.iconSize / 2, " ").concat(endPointConfig.y + endPointConfig.iconSize / 2, ")")
  }));
};

/***/ }),

/***/ "./js/components/treeDiagram/component/Edge/DepenenciesEdge.js":
/*!*********************************************************************!*\
  !*** ./js/components/treeDiagram/component/Edge/DepenenciesEdge.js ***!
  \*********************************************************************/
/*! exports provided: DependenciesEdge, DependenciesArrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependenciesEdge", function() { return DependenciesEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependenciesArrow", function() { return DependenciesArrow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/constants */ "./js/core/constants/index.js");
/* harmony import */ var components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/treeDiagram/store/constants */ "./js/components/treeDiagram/store/constants.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./js/components/treeDiagram/component/Edge/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);





var TOP_LEFT = components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_3__["DepEdgeGroups"].TOP_LEFT,
    TOP_RIGHT = components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_3__["DepEdgeGroups"].TOP_RIGHT;
var V_SPACE = components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"].spacing + components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"].nodeSizeX;
var PADDING = 30;
var HALF_PADDING = PADDING / 2;
var crossShift = 2; // Arrow can go from top ot bottom of file icon

var getSourcePt = function getSourcePt(groupName, sourcePosition, targetPt) {
  var topDirection = sourcePosition.y !== targetPt.y ? [TOP_LEFT, TOP_RIGHT].includes(groupName) : true;
  return {
    x: sourcePosition.x + 11,
    y: topDirection ? sourcePosition.y + 6 : sourcePosition.y - 6
  };
};

var getSourceDotLinePoints = function getSourceDotLinePoints(groupName, sourcePt, sourcePosition, targetPosition) {
  var shiftY = sourcePosition.y !== targetPosition.y ? [TOP_LEFT, TOP_RIGHT].includes(groupName) ? 1 : -1 : 1;
  return [[sourcePt.x - 2, sourcePt.y - shiftY], [sourcePt.x, sourcePt.y + shiftY], [sourcePt.x + 2, sourcePt.y - shiftY]];
};

var getConnectionLine = function getConnectionLine(groupName, targetPosition, sourcePosition, sourcePt) {
  var direction = [TOP_LEFT, TOP_RIGHT].includes(groupName) ? 1 : -1;
  var vPadding = (V_SPACE / 2 - crossShift) * direction;
  var siblingNodesDistance = 40;

  if (Math.abs(sourcePt.y - targetPosition.y) <= siblingNodesDistance) {
    return [[sourcePt.x, sourcePt.y], [sourcePt.x, targetPosition.y - vPadding], [targetPosition.x + 2, targetPosition.y - vPadding], [targetPosition.x + 2, targetPosition.y - 5 * direction]];
  }

  var workAroundXShift = 7;
  return [[sourcePt.x, sourcePt.y], [sourcePt.x, sourcePt.y + vPadding], [targetPosition.x - workAroundXShift, sourcePt.y + vPadding], [targetPosition.x - workAroundXShift, targetPosition.y - vPadding], [targetPosition.x + 2, targetPosition.y - vPadding], [targetPosition.x + 2, targetPosition.y - 5 * direction]];
};

var getConnectionLineToFirstSource = function getConnectionLineToFirstSource(groupName, targetPosition, firstSourcePosition, sourcePosition, sourcePt) {
  var directionY = [TOP_LEFT, TOP_RIGHT].includes(groupName) ? 1 : -1;
  var vPadding = V_SPACE / 2 * directionY;
  return [[sourcePt.x, sourcePt.y], [sourcePt.x, sourcePosition.y + vPadding], [firstSourcePosition.x + 8 + -HALF_PADDING, sourcePosition.y + vPadding], [firstSourcePosition.x + 8 + -HALF_PADDING, targetPosition.y - vPadding + crossShift * directionY], [targetPosition.x + 2, targetPosition.y - vPadding + crossShift * directionY], [targetPosition.x + 2, targetPosition.y - 5 * directionY]];
};

var DependenciesEdge = function DependenciesEdge(props) {
  var groupName = props.groupName,
      targetPosition = props.targetPosition,
      sourcePosition = props.sourcePosition,
      firstSourcePosition = props.firstSourcePosition,
      selected = props.selected,
      anyEdgeSelected = props.anyEdgeSelected,
      onClick = props.onClick;
  var sourcePt = getSourcePt(groupName, sourcePosition, targetPosition);
  var sourceDotLinePoints = getSourceDotLinePoints(groupName, sourcePt, sourcePosition, targetPosition);
  var connectionLinePoints = !firstSourcePosition ? getConnectionLine(groupName, targetPosition, sourcePosition, sourcePt) : getConnectionLineToFirstSource(groupName, targetPosition, firstSourcePosition, sourcePosition, sourcePt);

  if (!connectionLinePoints) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: sourceDotLinePoints.join(', '),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('DependenciesEdge', {
      Animation: !anyEdgeSelected,
      'DependenciesEdge-selected': selected
    })
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: connectionLinePoints.join(', '),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('DependenciesEdge', {
      Animation: !anyEdgeSelected,
      'DependenciesEdge-selected': selected
    })
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    onClick: onClick,
    points: connectionLinePoints.join(', '),
    className: 'EdgeMouseHandler'
  }));
};
var DependenciesArrow = function DependenciesArrow(_ref) {
  var targetPosition = _ref.targetPosition,
      groupName = _ref.groupName,
      selected = _ref.selected;
  var directionTop = [TOP_LEFT, TOP_RIGHT].includes(groupName);
  var endPointConfig = {
    x: targetPosition.x + 2,
    y: targetPosition.y - 5 * (directionTop ? 1 : -1)
  };
  endPointConfig.x -= 3;
  endPointConfig.y -= directionTop ? 6 : 1;
  endPointConfig.iconSize = 7;
  endPointConfig.iconPath = "".concat(core_constants__WEBPACK_IMPORTED_MODULE_2__["ICONS_DIR"], "arrow/").concat(selected ? 'selected-' : '', "arrow.svg"); // TODO: move to getter

  endPointConfig.angle = directionTop ? 90 : -90;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("image", {
    x: endPointConfig.x,
    y: endPointConfig.y,
    xlinkHref: endPointConfig.iconPath,
    height: endPointConfig.iconSize,
    width: endPointConfig.iconSize,
    className: 'Animation',
    transform: "rotate(".concat(endPointConfig.angle, " ").concat(endPointConfig.x + endPointConfig.iconSize / 2, " ").concat(endPointConfig.y + endPointConfig.iconSize / 2, ")")
  });
};

/***/ }),

/***/ "./js/components/treeDiagram/component/Edge/SourceEdge.js":
/*!****************************************************************!*\
  !*** ./js/components/treeDiagram/component/Edge/SourceEdge.js ***!
  \****************************************************************/
/*! exports provided: SourceEdge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceEdge", function() { return SourceEdge; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./js/components/treeDiagram/component/Edge/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);



var SourceEdge = function SourceEdge(props) {
  var targetPosition = props.targetPosition,
      sourcePosition = props.sourcePosition,
      disabled = props.disabled,
      singleChild = props.singleChild,
      selected = props.selected;
  var edgeTurnDistance = 20;
  var START_PT = sourcePosition;
  var P2 = {
    x: targetPosition.x - edgeTurnDistance,
    y: sourcePosition.y
  };
  var P3 = {
    x: targetPosition.x - edgeTurnDistance,
    y: targetPosition.y
  };
  var END_PT = targetPosition;
  var points = singleChild ? [[START_PT.x, START_PT.y], [END_PT.x, END_PT.y], [END_PT.x, END_PT.y]] : [[START_PT.x, START_PT.y], [P2.x, P2.y], [P3.x, P3.y], [END_PT.x, END_PT.y]];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: points.join(', '),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('SourceEdge', {
      'SourceEdge-disabled': disabled,
      'SourceEdge-selected': selected
    })
  }));
};

/***/ }),

/***/ "./js/components/treeDiagram/component/Edge/index.scss":
/*!*************************************************************!*\
  !*** ./js/components/treeDiagram/component/Edge/index.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss */ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/treeDiagram/component/Edge/index.scss");

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

/***/ "./js/components/treeDiagram/component/Node/CodeCrumb.js":
/*!***************************************************************!*\
  !*** ./js/components/treeDiagram/component/Node/CodeCrumb.js ***!
  \***************************************************************/
/*! exports provided: CodeCrumbName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeCrumbName", function() { return CodeCrumbName; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./js/components/treeDiagram/component/Node/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/treeDiagram/store/constants */ "./js/components/treeDiagram/store/constants.js");




var CodeCrumbName = function CodeCrumbName(props) {
  // onMouseOver maybe use onMouseOver to show crumb details in popover
  var position = props.position,
      loc = props.loc,
      name = props.name,
      singleCrumb = props.singleCrumb,
      cover = props.cover,
      flow = props.flow,
      flowStep = props.flowStep,
      onMouseOver = props.onMouseOver,
      onClick = props.onClick;
  var textPoint = {
    x: singleCrumb ? position.x - 22 : position.x,
    y: position.y
  };
  var symbolWidth = 6;
  var locWidth = loc.length ? loc.length * symbolWidth + 3 : 0;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: 'CodeCrumbNode'
  }, cover && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: textPoint.x - 3,
    y: position.y - 9,
    width: locWidth + 4,
    height: 18,
    className: 'NodeText-cover'
  }) || null, !flow && locWidth && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: textPoint.x,
    y: textPoint.y - 6,
    width: locWidth,
    height: 12,
    strokeDasharray: "2",
    className: 'CodeCrumbName-rect'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: textPoint.x + 2.5,
    y: textPoint.y + 3,
    onClick: onClick,
    className: 'CodeCrumbName-loc'
  }, loc)) || null, flow && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: textPoint.x - 13,
    y: textPoint.y - 7,
    width: 13,
    height: 13,
    className: 'CodeCrumbName-flow-step'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: textPoint.x - 10.5,
    y: textPoint.y + 3.5,
    onClick: onClick,
    className: 'CodeCrumbName-flow'
  }, flowStep)) || null, name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, cover && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: textPoint.x + 2 + (!flow ? locWidth : 0),
    y: position.y - 6,
    width: name.length * 7.7,
    height: 13,
    className: 'NodeText-cover'
  }) || null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: textPoint.x + 3 + (!flow ? locWidth : 0) - 1,
    y: textPoint.y + 4,
    onClick: onClick,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('CodeCrumbName-text', {
      'CodeCrumbName-text-flow': flow
    })
  }, !locWidth && !flow ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "\u25D6", name) : name)) || null);
};

/***/ }),

/***/ "./js/components/treeDiagram/component/Node/File.js":
/*!**********************************************************!*\
  !*** ./js/components/treeDiagram/component/Node/File.js ***!
  \**********************************************************/
/*! exports provided: FileName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileName", function() { return FileName; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/constants */ "./js/core/constants/index.js");
/* harmony import */ var components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/treeDiagram/store/constants */ "./js/components/treeDiagram/store/constants.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./js/components/treeDiagram/component/Node/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);





var FileName = function FileName(props) {
  var position = props.position,
      name = props.name,
      path = props.path,
      onTextClick = props.onTextClick,
      onIconClick = props.onIconClick,
      onNodeClick = props.onNodeClick,
      codeCrumbs = props.codeCrumbs,
      purple = props.purple,
      selected = props.selected,
      dependency = props.dependency,
      dependencyImportedOnly = props.dependencyImportedOnly,
      depEntryPoint = props.depEntryPoint; // TODO: move out to switch

  var iconPath = "".concat(core_constants__WEBPACK_IMPORTED_MODULE_2__["ICONS_DIR"]).concat(dependency ? selected ? 'two-circles/selected-two-circles.svg' : 'two-circles/two-circles.svg' : 'file/js-file.svg');
  var iconSize = 15;
  var nameWidth = name.length * components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_3__["SYMBOL_WIDTH"];
  var imageOffset = !dependency ? {
    x: 2,
    y: -10
  } : {
    x: 0,
    y: -7.5
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: 'FileNode'
  }, (dependency || codeCrumbs) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: position.x + 3,
    y: position.y - 3,
    width: 16,
    height: 5,
    className: 'NodeText-cover'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: position.x + 16,
    y: position.y - 8,
    width: nameWidth,
    height: 16,
    className: 'NodeText-cover'
  })) || null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("image", {
    x: position.x + imageOffset.x,
    y: position.y + imageOffset.y,
    onClick: onIconClick || onNodeClick,
    xlinkHref: iconPath,
    height: iconSize,
    width: iconSize,
    className: 'NodeIcon'
  }), dependency && dependencyImportedOnly && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: position.x + 2.5,
    cy: position.y,
    r: 2.5,
    className: 'NodeText-file-dependencyImportedOnly'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, path), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: position.x + 16,
    y: position.y + 5,
    onClick: onTextClick || onNodeClick,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('NodeText-file-name', {
      'NodeText-file-name-purple': purple,
      'NodeText-file-name-selected': dependency && selected && !purple
    })
  }, name)));
};

/***/ }),

/***/ "./js/components/treeDiagram/component/Node/Folder.js":
/*!************************************************************!*\
  !*** ./js/components/treeDiagram/component/Node/Folder.js ***!
  \************************************************************/
/*! exports provided: FolderName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderName", function() { return FolderName; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/constants */ "./js/core/constants/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./js/components/treeDiagram/component/Node/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/constants */ "./js/components/treeDiagram/store/constants.js");





var FolderName = function FolderName(props) {
  var position = props.position,
      name = props.name,
      cover = props.cover,
      disabled = props.disabled,
      openedState = props.openedState,
      onIconClick = props.onIconClick,
      onTextClick = props.onTextClick;
  var closed = openedState === core_constants__WEBPACK_IMPORTED_MODULE_2__["FOLDER_OPEN_STATE"].CLOSED;
  var notActiveChildrenCollapsed = openedState === core_constants__WEBPACK_IMPORTED_MODULE_2__["FOLDER_OPEN_STATE"].OPEN_ACTIVE_CHILDREN_ONLY;
  var iconPath = "".concat(core_constants__WEBPACK_IMPORTED_MODULE_2__["ICONS_DIR"], "folder/").concat(disabled ? 'disabled-' : '').concat(closed ? 'closed-' : 'open-', "folder.svg");
  var iconSize = closed ? 14 : 15;
  var iconPositionX = position.x + 3;
  var iconPositionY = position.y + (closed ? -16 : -17);
  var nameWidth = name.length * _store_constants__WEBPACK_IMPORTED_MODULE_4__["SYMBOL_WIDTH"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: 'FolderNode'
  }, cover ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: position.x + 2,
    y: position.y - 16,
    width: 16,
    height: 15,
    className: 'NodeText-cover'
  }) : null, cover ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: position.x + 20,
    y: position.y - 16,
    width: nameWidth,
    height: 15,
    className: 'NodeText-cover'
  }) : null, closed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: [iconPositionX - 1, iconPositionY + 17, iconPositionX + 16, iconPositionY + 17].join(', '),
    strokeDasharray: "2",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('NodeIcon-folder-line', {
      'NodeIcon-folder-line-disabled': disabled
    })
  }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("image", {
    x: iconPositionX,
    y: iconPositionY,
    onClick: onIconClick,
    xlinkHref: iconPath,
    height: iconSize,
    width: iconSize,
    className: 'NodeIcon'
  }), notActiveChildrenCollapsed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    onClick: onIconClick,
    className: 'NodeIcon'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: position.x + 6,
    y: position.y - 6,
    width: 11,
    height: 4,
    className: 'Folder-collapsed-children-rect'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: position.x + 7,
    y: position.y - 3,
    className: 'Folder-collapsed-children-text'
  }, "..")) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: position.x + 20,
    y: position.y - 3,
    onClick: onTextClick,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('NodeText-folder-name', {
      'NodeText-folder-name-disabled': disabled
    })
  }, name));
};

/***/ }),

/***/ "./js/components/treeDiagram/component/Node/index.scss":
/*!*************************************************************!*\
  !*** ./js/components/treeDiagram/component/Node/index.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss */ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/treeDiagram/component/Node/index.scss");

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

/***/ "./js/components/treeDiagram/component/Tree/CodeCrumbs/FlowEdge.js":
/*!*************************************************************************!*\
  !*** ./js/components/treeDiagram/component/Tree/CodeCrumbs/FlowEdge.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/constants */ "./js/core/constants/index.js");
/* harmony import */ var components_treeDiagram_component_Edge_CodeCrumbEdge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/treeDiagram/component/Edge/CodeCrumbEdge */ "./js/components/treeDiagram/component/Edge/CodeCrumbEdge.js");
/* harmony import */ var core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/controlsBus/selectors */ "./js/core/controlsBus/selectors.js");
/* harmony import */ var core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/dataBus/selectors */ "./js/core/dataBus/selectors.js");







var FlowEdge = function FlowEdge(props) {
  var shiftToCenterPoint = props.shiftToCenterPoint,
      sortedFlowSteps = props.sortedFlowSteps,
      filesLayoutMap = props.filesLayoutMap,
      codeCrumbsMinimize = props.codeCrumbsMinimize;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !codeCrumbsMinimize && sortedFlowSteps.map(function (toItem, i, list) {
    if (!i) return null;
    var fromItem = list[i - 1];
    var fromFile = filesLayoutMap[fromItem.filePath];
    var toFile = filesLayoutMap[toItem.filePath];
    var edgePoints = [fromItem, toItem].map(function (crumb) {
      var _ref = [crumb.y, crumb.x],
          cX = _ref[0],
          cY = _ref[1];
      return shiftToCenterPoint(cX, cY);
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_treeDiagram_component_Edge_CodeCrumbEdge__WEBPACK_IMPORTED_MODULE_3__["CodeCrumbedFlowEdge"], {
      key: "cc-flow-edge-".concat(fromItem.name, "-").concat(toItem.name),
      singleCrumbSource: fromFile.children.length === 1,
      singleCrumbTarget: toFile.children.length === 1,
      sourcePosition: edgePoints[0],
      targetPosition: edgePoints[1],
      sourceName: fromItem.name,
      targetName: toItem.name
    });
  }));
};

var getSortedFlowSteps = function getSortedFlowSteps(_ref2) {
  var codeCrumbedFlowsMap = _ref2.codeCrumbedFlowsMap,
      selectedCrumbedFlowKey = _ref2.selectedCrumbedFlowKey,
      filesLayoutMap = _ref2.filesLayoutMap;
  var currentFlow = codeCrumbedFlowsMap[selectedCrumbedFlowKey] || {};
  var sortedFlowSteps = [];
  Object.keys(currentFlow).forEach(function (filePath) {
    var steps = (filesLayoutMap[filePath] && filesLayoutMap[filePath].children || []).filter(function (_ref3) {
      var data = _ref3.data;
      return data.params.flow === selectedCrumbedFlowKey;
    }).map(function (_ref4) {
      var data = _ref4.data,
          x = _ref4.x,
          y = _ref4.y;
      return {
        name: data.name,
        filePath: filePath,
        step: data.params.flowStep,
        flow: selectedCrumbedFlowKey,
        x: x,
        y: y
      };
    });
    sortedFlowSteps = sortedFlowSteps.concat(steps);
  });
  sortedFlowSteps.sort(function (a, b) {
    return a.step - b.step;
  });
  return sortedFlowSteps;
};

var mapStateToProps = function mapStateToProps(state, props) {
  var _getCheckedState = Object(core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_4__["getCheckedState"])(state),
      codeCrumbsMinimize = _getCheckedState.codeCrumbsMinimize;

  var _getSourceLayout = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_5__["getSourceLayout"])(state, props),
      filesLayoutMap = _getSourceLayout.filesLayoutMap;

  var _getCodeCrumbsUserCho = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_5__["getCodeCrumbsUserChoice"])(state, props),
      selectedCrumbedFlowKey = _getCodeCrumbsUserCho.selectedCrumbedFlowKey,
      codeCrumbedFlowsMap = _getCodeCrumbsUserCho.codeCrumbedFlowsMap;

  var sortedFlowSteps = selectedCrumbedFlowKey !== core_constants__WEBPACK_IMPORTED_MODULE_2__["NO_TRAIL_FLOW"] ? getSortedFlowSteps({
    codeCrumbedFlowsMap: codeCrumbedFlowsMap,
    selectedCrumbedFlowKey: selectedCrumbedFlowKey,
    filesLayoutMap: filesLayoutMap
  }) : [];
  return {
    sortedFlowSteps: sortedFlowSteps,
    filesLayoutMap: filesLayoutMap,
    codeCrumbsMinimize: codeCrumbsMinimize
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(FlowEdge));

/***/ }),

/***/ "./js/components/treeDiagram/component/Tree/CodeCrumbs/Tree.js":
/*!*********************************************************************!*\
  !*** ./js/components/treeDiagram/component/Tree/CodeCrumbs/Tree.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/constants */ "./js/core/constants/index.js");
/* harmony import */ var components_treeDiagram_component_Node_CodeCrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/treeDiagram/component/Node/CodeCrumb */ "./js/components/treeDiagram/component/Node/CodeCrumb.js");
/* harmony import */ var components_treeDiagram_component_Node_File__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/treeDiagram/component/Node/File */ "./js/components/treeDiagram/component/Node/File.js");
/* harmony import */ var components_treeDiagram_component_Edge_CodeCrumbEdge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/treeDiagram/component/Edge/CodeCrumbEdge */ "./js/components/treeDiagram/component/Edge/CodeCrumbEdge.js");






var Tree = function Tree(props) {
  var shiftToCenterPoint = props.shiftToCenterPoint,
      filesLayoutMap = props.filesLayoutMap,
      filesMap = props.filesMap,
      selectedCrumbedFlowKey = props.selectedCrumbedFlowKey,
      sourceDiagramOn = props.sourceDiagramOn,
      dependenciesDiagramOn = props.dependenciesDiagramOn,
      codeCrumbsMinimize = props.codeCrumbsMinimize,
      codeCrumbsLineNumbers = props.codeCrumbsLineNumbers,
      onCodeCrumbSelect = props.onCodeCrumbSelect;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object.keys(filesLayoutMap).map(function (key) {
    var node = filesLayoutMap[key];
    var _ref = [node.y, node.x],
        nX = _ref[0],
        nY = _ref[1];
    var position = shiftToCenterPoint(nX, nY);

    if (!node.children) {
      return null;
    }

    var file = filesMap[node.data.path];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: "code-crumb-".concat(file.name)
    }, !sourceDiagramOn && !dependenciesDiagramOn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_treeDiagram_component_Node_File__WEBPACK_IMPORTED_MODULE_3__["FileName"], {
      position: position,
      name: file.name,
      purple: codeCrumbsMinimize
    }) : null, !codeCrumbsMinimize && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_treeDiagram_component_Edge_CodeCrumbEdge__WEBPACK_IMPORTED_MODULE_4__["PartEdge"], {
      sourcePosition: position,
      parentName: file.name
    }) || null, !codeCrumbsMinimize && node.children.map(function (crumb, i, list) {
      var _ref2 = [crumb.y, crumb.x],
          cX = _ref2[0],
          cY = _ref2[1];
      var crumbPosition = shiftToCenterPoint(cX, cY);
      var singleCrumb = list.length === 1;
      var crumbData = crumb.data;
      var ccParams = crumbData.params;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        key: "code-crumb-edge-".concat(file.path, "-").concat(crumbData.name)
      }, !singleCrumb && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_treeDiagram_component_Edge_CodeCrumbEdge__WEBPACK_IMPORTED_MODULE_4__["CodeCrumbEdge"], {
        sourcePosition: position,
        targetPosition: crumbPosition,
        parentName: file.name
      }) || null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_treeDiagram_component_Node_CodeCrumb__WEBPACK_IMPORTED_MODULE_2__["CodeCrumbName"], {
        position: crumbPosition,
        loc: codeCrumbsLineNumbers ? crumbData.displayLoc : '',
        name: crumbData.name,
        singleCrumb: singleCrumb,
        cover: true,
        flow: ccParams.flow && ccParams.flow === selectedCrumbedFlowKey && selectedCrumbedFlowKey !== core_constants__WEBPACK_IMPORTED_MODULE_1__["NO_TRAIL_FLOW"],
        flowStep: ccParams.flowStep,
        onClick: function onClick() {
          return onCodeCrumbSelect(file, crumbData);
        }
      }));
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Tree);

/***/ }),

/***/ "./js/components/treeDiagram/component/Tree/CodeCrumbs/index.js":
/*!**********************************************************************!*\
  !*** ./js/components/treeDiagram/component/Tree/CodeCrumbs/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var core_dataBus_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/dataBus/actions */ "./js/core/dataBus/actions.js");
/* harmony import */ var core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/dataBus/selectors */ "./js/core/dataBus/selectors.js");
/* harmony import */ var core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/controlsBus/selectors */ "./js/core/controlsBus/selectors.js");
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tree */ "./js/components/treeDiagram/component/Tree/CodeCrumbs/Tree.js");







var mapStateToProps = function mapStateToProps(state, props) {
  var _getSource = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_3__["getSource"])(state, props),
      filesMap = _getSource.filesMap;

  var _getSourceLayout = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_3__["getSourceLayout"])(state, props),
      filesLayoutMap = _getSourceLayout.filesLayoutMap;

  var _getCodeCrumbsUserCho = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_3__["getCodeCrumbsUserChoice"])(state, props),
      selectedCrumbedFlowKey = _getCodeCrumbsUserCho.selectedCrumbedFlowKey;

  var _getCheckedState = Object(core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_4__["getCheckedState"])(state),
      sourceDiagramOn = _getCheckedState.sourceDiagramOn,
      dependenciesDiagramOn = _getCheckedState.dependenciesDiagramOn,
      codeCrumbsDiagramOn = _getCheckedState.codeCrumbsDiagramOn,
      codeCrumbsMinimize = _getCheckedState.codeCrumbsMinimize,
      codeCrumbsLineNumbers = _getCheckedState.codeCrumbsLineNumbers;

  return {
    filesLayoutMap: filesLayoutMap,
    filesMap: filesMap,
    selectedCrumbedFlowKey: selectedCrumbedFlowKey,
    sourceDiagramOn: sourceDiagramOn,
    dependenciesDiagramOn: dependenciesDiagramOn,
    codeCrumbsDiagramOn: codeCrumbsDiagramOn,
    codeCrumbsMinimize: codeCrumbsMinimize,
    codeCrumbsLineNumbers: codeCrumbsLineNumbers
  };
};

var mapDispatchToProps = {
  onCodeCrumbSelect: core_dataBus_actions__WEBPACK_IMPORTED_MODULE_2__["selectCodeCrumb"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_Tree__WEBPACK_IMPORTED_MODULE_5__["default"]));

/***/ }),

/***/ "./js/components/treeDiagram/component/Tree/Dependencies/index.js":
/*!************************************************************************!*\
  !*** ./js/components/treeDiagram/component/Tree/Dependencies/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var components_treeDiagram_component_Edge_DepenenciesEdge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/treeDiagram/component/Edge/DepenenciesEdge */ "./js/components/treeDiagram/component/Edge/DepenenciesEdge.js");
/* harmony import */ var components_treeDiagram_component_Node_File__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/treeDiagram/component/Node/File */ "./js/components/treeDiagram/component/Node/File.js");
/* harmony import */ var core_dataBus_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/dataBus/actions */ "./js/core/dataBus/actions.js");
/* harmony import */ var core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/dataBus/selectors */ "./js/core/dataBus/selectors.js");
/* harmony import */ var core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/controlsBus/selectors */ "./js/core/controlsBus/selectors.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./js/components/treeDiagram/component/Tree/Dependencies/utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var DependenciesTree = function DependenciesTree(props) {
  var selectedNode = props.selectedNode,
      filesLayoutMap = props.filesLayoutMap,
      shiftToCenterPoint = props.shiftToCenterPoint,
      sourceDiagramOn = props.sourceDiagramOn,
      onDependencyEdgeClick = props.onDependencyEdgeClick,
      selectedDependencyEdgeNodes = props.selectedDependencyEdgeNodes;

  if (!selectedNode || !selectedNode.dependencies) {
    return null;
  }

  var selectedNodeDependencies = selectedNode.dependencies[selectedNode.path];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, selectedNodeDependencies && [selectedNodeDependencies].map(function (_ref) {
    var moduleName = _ref.moduleName,
        importedModuleNames = _ref.importedModuleNames;
    var moduleNode = filesLayoutMap[moduleName];
    if (!moduleNode) return null;
    var _moduleNode$data = moduleNode.data,
        name = _moduleNode$data.name,
        path = _moduleNode$data.path;
    var _ref2 = [moduleNode.y, moduleNode.x],
        mX = _ref2[0],
        mY = _ref2[1];
    var targetPosition = shiftToCenterPoint(mX, mY);
    var sourceNodes = [];

    if (!sourceDiagramOn) {
      // TODO: un sync with FileName in SourceTree, duplication
      sourceNodes.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_treeDiagram_component_Node_File__WEBPACK_IMPORTED_MODULE_3__["FileName"], {
        key: path,
        position: targetPosition,
        name: name,
        dependency: true
      }));
    }

    var importedNodes = importedModuleNames.map(function (name) {
      return filesLayoutMap[name];
    }).filter(function (node) {
      return !!node;
    });
    var edges = [];
    var selectedEdges = [];
    Object.entries(Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getGroupsAroundNode"])(moduleNode, importedNodes)).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          groupName = _ref4[0],
          groupNodes = _ref4[1];

      if (!groupNodes.length) {
        return;
      } // swap here as well


      var firstSourceNode = groupNodes[0];
      var firstSourcePosition = shiftToCenterPoint(firstSourceNode.y, firstSourceNode.x);
      groupNodes.forEach(function (importedNode, i) {
        var _ref5 = [importedNode.y, importedNode.x],
            iX = _ref5[0],
            iY = _ref5[1];
        var sourcePosition = shiftToCenterPoint(iX, iY);
        var _importedNode$data = importedNode.data,
            importedNodePath = _importedNode$data.path,
            name = _importedNode$data.name;
        var selected = selectedDependencyEdgeNodes && Object(_utils__WEBPACK_IMPORTED_MODULE_7__["checkIsEdgeSelected"])(selectedDependencyEdgeNodes, moduleName, importedNodePath);
        var edge = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_treeDiagram_component_Edge_DepenenciesEdge__WEBPACK_IMPORTED_MODULE_2__["DependenciesEdge"], {
          key: "dep-edge-".concat(importedNodePath),
          anyEdgeSelected: !!selectedDependencyEdgeNodes,
          selected: selected,
          groupName: groupName,
          sourcePosition: sourcePosition,
          targetPosition: targetPosition,
          firstSourcePosition: i ? firstSourcePosition : null,
          onClick: function onClick() {
            return onDependencyEdgeClick(moduleName, [importedNodePath], groupName);
          }
        });
        selected ? selectedEdges.push(edge) : edges.push(edge);

        if (!i) {
          var arrowSelected = selectedDependencyEdgeNodes && groupName === selectedDependencyEdgeNodes.groupName && Object(_utils__WEBPACK_IMPORTED_MODULE_7__["checkIsEdgeSelected"])(selectedDependencyEdgeNodes, moduleName);
          var arrow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_treeDiagram_component_Edge_DepenenciesEdge__WEBPACK_IMPORTED_MODULE_2__["DependenciesArrow"], {
            key: "dep-arrow-".concat(importedNodePath),
            selected: arrowSelected,
            groupName: groupName,
            targetPosition: targetPosition
          });
          arrowSelected ? selectedEdges.push(arrow) : edges.push(arrow);
        }

        if (!sourceDiagramOn) {
          sourceNodes.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_treeDiagram_component_Node_File__WEBPACK_IMPORTED_MODULE_3__["FileName"], {
            key: importedNodePath,
            position: sourcePosition,
            name: name,
            dependency: true
          }));
        }
      });
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: moduleName
    }, edges, selectedEdges, sourceNodes);
  }));
};

var mapStateToProps = function mapStateToProps(state, props) {
  var _getCheckedState = Object(core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_6__["getCheckedState"])(state),
      sourceDiagramOn = _getCheckedState.sourceDiagramOn;

  var _getSourceLayout = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_5__["getSourceLayout"])(state, props),
      filesLayoutMap = _getSourceLayout.filesLayoutMap;

  var _getSourceUserChoice = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_5__["getSourceUserChoice"])(state, props),
      selectedNode = _getSourceUserChoice.selectedNode;

  var _getDependenciesUserC = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_5__["getDependenciesUserChoice"])(state, props),
      selectedDependencyEdgeNodes = _getDependenciesUserC.selectedDependencyEdgeNodes;

  return {
    sourceDiagramOn: sourceDiagramOn,
    filesLayoutMap: filesLayoutMap,
    selectedNode: selectedNode,
    selectedDependencyEdgeNodes: selectedDependencyEdgeNodes
  };
};

var mapDispatchToProps = {
  onDependencyEdgeClick: core_dataBus_actions__WEBPACK_IMPORTED_MODULE_4__["selectDependencyEdge"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(DependenciesTree));

/***/ }),

/***/ "./js/components/treeDiagram/component/Tree/Dependencies/utils.js":
/*!************************************************************************!*\
  !*** ./js/components/treeDiagram/component/Tree/Dependencies/utils.js ***!
  \************************************************************************/
/*! exports provided: getGroupsAroundNode, checkIsEdgeSelected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGroupsAroundNode", function() { return getGroupsAroundNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsEdgeSelected", function() { return checkIsEdgeSelected; });
/* harmony import */ var components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/treeDiagram/store/constants */ "./js/components/treeDiagram/store/constants.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var getGroupsAroundNode = function getGroupsAroundNode(moduleNode, importedNodes) {
  var _groups;

  var groups = (_groups = {}, _defineProperty(_groups, components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_0__["DepEdgeGroups"].TOP_LEFT, []), _defineProperty(_groups, components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_0__["DepEdgeGroups"].TOP_RIGHT, []), _defineProperty(_groups, components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_0__["DepEdgeGroups"].BOTTOM_LEFT, []), _defineProperty(_groups, components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_0__["DepEdgeGroups"].BOTTOM_RIGHT, []), _groups);
  var _ref = [moduleNode.y, moduleNode.x],
      mX = _ref[0],
      mY = _ref[1];
  importedNodes.sort(function (a, b) {
    var aDiff = Math.abs(mY - a.x); // swap coordinates

    var bDiff = Math.abs(mY - b.x); // swap coordinates

    if (aDiff < bDiff) {
      return -1;
    }

    if (aDiff > bDiff) {
      return 1;
    }

    return 0;
  }).forEach(function (importedNode) {
    var _ref2 = [importedNode.y, importedNode.x],
        iX = _ref2[0],
        iY = _ref2[1];

    if (iY < mY) {
      if (iX < mX) {
        groups[components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_0__["DepEdgeGroups"].TOP_LEFT].push(importedNode);
      } else {
        groups[components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_0__["DepEdgeGroups"].TOP_RIGHT].push(importedNode);
      }
    } else {
      if (iX < mX) {
        groups[components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_0__["DepEdgeGroups"].BOTTOM_LEFT].push(importedNode);
      } else {
        groups[components_treeDiagram_store_constants__WEBPACK_IMPORTED_MODULE_0__["DepEdgeGroups"].BOTTOM_RIGHT].push(importedNode);
      }
    }
  });
  return groups;
};
var checkIsEdgeSelected = function checkIsEdgeSelected(selectedEdge, target, source) {
  if (selectedEdge.target && selectedEdge.sources.length > 1) {
    return selectedEdge.target === target;
  }

  if (!source) {
    return selectedEdge.target === target;
  }

  return selectedEdge.target === target && selectedEdge.sources[0] === source;
};

/***/ }),

/***/ "./js/components/treeDiagram/component/Tree/Source/Tree.js":
/*!*****************************************************************!*\
  !*** ./js/components/treeDiagram/component/Tree/Source/Tree.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/constants */ "./js/core/constants/index.js");
/* harmony import */ var components_treeDiagram_component_Node_File__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/treeDiagram/component/Node/File */ "./js/components/treeDiagram/component/Node/File.js");
/* harmony import */ var components_treeDiagram_component_Node_Folder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/treeDiagram/component/Node/Folder */ "./js/components/treeDiagram/component/Node/Folder.js");
/* harmony import */ var components_treeDiagram_component_Dot_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/treeDiagram/component/Dot/index */ "./js/components/treeDiagram/component/Dot/index.js");
/* harmony import */ var components_treeDiagram_component_Edge_SourceEdge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/treeDiagram/component/Edge/SourceEdge */ "./js/components/treeDiagram/component/Edge/SourceEdge.js");
/* harmony import */ var _Dependencies_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Dependencies/index */ "./js/components/treeDiagram/component/Tree/Dependencies/index.js");
/* harmony import */ var _CodeCrumbs___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CodeCrumbs/ */ "./js/components/treeDiagram/component/Tree/CodeCrumbs/index.js");
/* harmony import */ var _CodeCrumbs_FlowEdge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CodeCrumbs/FlowEdge */ "./js/components/treeDiagram/component/Tree/CodeCrumbs/FlowEdge.js");










var SourceTree = function SourceTree(props) {
  var sourceDiagramOn = props.sourceDiagramOn,
      dependenciesDiagramOn = props.dependenciesDiagramOn,
      sourceDimFolders = props.sourceDimFolders,
      codeCrumbsDiagramOn = props.codeCrumbsDiagramOn,
      codeCrumbsMinimize = props.codeCrumbsMinimize,
      sourceLayoutTree = props.sourceLayoutTree,
      openedFolders = props.openedFolders,
      filesMap = props.filesMap,
      selectedNode = props.selectedNode,
      shiftToCenterPoint = props.shiftToCenterPoint,
      onNodeTextClick = props.onNodeTextClick,
      onFolderIconClick = props.onFolderIconClick,
      dependenciesEntryName = props.dependenciesEntryName,
      selectedDependencyEdgeNodes = props.selectedDependencyEdgeNodes;
  var sourceEdges = [];
  var selectedSourceEdges = [];
  var sourceNodes = [];
  var sourceDotes = []; // TODO: add normal id generators for keys to not use i
  // TODO: refactor, too long render method

  var i = 0;
  sourceDiagramOn && sourceLayoutTree.each(function (node) {
    i++;
    var _ref = [node.y, node.x],
        nX = _ref[0],
        nY = _ref[1];
    var position = shiftToCenterPoint(nX, nY);
    var _node$data = node.data,
        name = _node$data.name,
        path = _node$data.path,
        type = _node$data.type;
    var parent = node.parent;
    var selected = selectedNode && selectedNode.path.indexOf(path) !== -1;

    if (parent && parent.data.type === core_constants__WEBPACK_IMPORTED_MODULE_1__["DIR_NODE_TYPE"]) {
      var _ref2 = [parent.y, parent.x],
          pX = _ref2[0],
          pY = _ref2[1];
      var sourcePosition = shiftToCenterPoint(pX, pY);
      var edge = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_treeDiagram_component_Edge_SourceEdge__WEBPACK_IMPORTED_MODULE_5__["SourceEdge"], {
        key: "source-edge-".concat(path),
        targetPosition: position,
        sourcePosition: sourcePosition,
        disabled: sourceDimFolders,
        singleChild: parent.children.length === 1,
        selected: selected
      });
      selected ? selectedSourceEdges.push(edge) : sourceEdges.push(edge);
    }

    if (type === core_constants__WEBPACK_IMPORTED_MODULE_1__["DIR_NODE_TYPE"] || type === core_constants__WEBPACK_IMPORTED_MODULE_1__["FILE_NODE_TYPE"] && !(dependenciesDiagramOn && selectedNode.dependencies && selectedNode.dependencies[path])) {
      sourceDotes.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_treeDiagram_component_Dot_index__WEBPACK_IMPORTED_MODULE_4__["Dot"], {
        key: "dot-".concat(path),
        position: position,
        disabled: false,
        selected: selected
      }));
    }

    var nodeBasedOnType = null;

    if (type === core_constants__WEBPACK_IMPORTED_MODULE_1__["FILE_NODE_TYPE"]) {
      var selectedNodeDependencies = selectedNode.dependencies;
      var fileNode = filesMap[path];
      nodeBasedOnType = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_treeDiagram_component_Node_File__WEBPACK_IMPORTED_MODULE_2__["FileName"], {
        key: path,
        position: position,
        name: name,
        path: fileNode.path,
        codeCrumbs: codeCrumbsDiagramOn,
        purple: codeCrumbsDiagramOn && fileNode.hasCodecrumbs && codeCrumbsMinimize,
        selected: selectedDependencyEdgeNodes && (selectedDependencyEdgeNodes.target === path || selectedDependencyEdgeNodes.sources.includes(path)),
        depEntryPoint: path === dependenciesEntryName,
        dependency: dependenciesDiagramOn && selectedNodeDependencies && selectedNodeDependencies[path],
        dependencyImportedOnly: dependenciesDiagramOn && selectedNodeDependencies && selectedNodeDependencies[path] && !selectedNodeDependencies[path].importedModuleNames.length,
        onNodeClick: function onNodeClick() {
          onNodeTextClick(fileNode);
        }
      });
    } else if (type === core_constants__WEBPACK_IMPORTED_MODULE_1__["DIR_NODE_TYPE"]) {
      nodeBasedOnType = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_treeDiagram_component_Node_Folder__WEBPACK_IMPORTED_MODULE_3__["FolderName"], {
        key: path,
        position: position,
        name: name,
        cover: dependenciesDiagramOn || codeCrumbsDiagramOn,
        disabled: sourceDimFolders,
        openedState: openedFolders[node.data.path],
        onTextClick: function onTextClick() {
          return onFolderIconClick(node.data);
        },
        onIconClick: function onIconClick() {
          return onFolderIconClick(node.data);
        }
      });
    }

    sourceNodes.push(nodeBasedOnType);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, sourceDiagramOn && sourceEdges || null, sourceDiagramOn && selectedSourceEdges || null, dependenciesDiagramOn && selectedNode.dependencies && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dependencies_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    shiftToCenterPoint: shiftToCenterPoint
  }), codeCrumbsDiagramOn && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CodeCrumbs_FlowEdge__WEBPACK_IMPORTED_MODULE_8__["default"], {
    shiftToCenterPoint: shiftToCenterPoint
  }) || null, sourceDiagramOn && sourceNodes || null, sourceDiagramOn && sourceDotes || null, codeCrumbsDiagramOn && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CodeCrumbs___WEBPACK_IMPORTED_MODULE_7__["default"], {
    shiftToCenterPoint: shiftToCenterPoint
  }) || null);
};

/* harmony default export */ __webpack_exports__["default"] = (SourceTree);

/***/ }),

/***/ "./js/components/treeDiagram/component/Tree/Source/index.js":
/*!******************************************************************!*\
  !*** ./js/components/treeDiagram/component/Tree/Source/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var core_dataBus_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/dataBus/actions */ "./js/core/dataBus/actions.js");
/* harmony import */ var core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/dataBus/selectors */ "./js/core/dataBus/selectors.js");
/* harmony import */ var core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/controlsBus/selectors */ "./js/core/controlsBus/selectors.js");
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tree */ "./js/components/treeDiagram/component/Tree/Source/Tree.js");







var mapStateToProps = function mapStateToProps(state, props) {
  var _getCheckedState = Object(core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_4__["getCheckedState"])(state),
      sourceDiagramOn = _getCheckedState.sourceDiagramOn,
      dependenciesDiagramOn = _getCheckedState.dependenciesDiagramOn,
      sourceDimFolders = _getCheckedState.sourceDimFolders,
      codeCrumbsDiagramOn = _getCheckedState.codeCrumbsDiagramOn,
      codeCrumbsMinimize = _getCheckedState.codeCrumbsMinimize;

  var _getSource = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_3__["getSource"])(state, props),
      filesMap = _getSource.filesMap;

  var _getSourceLayout = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_3__["getSourceLayout"])(state, props),
      sourceLayoutTree = _getSourceLayout.sourceLayoutTree;

  var _getSourceUserChoice = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_3__["getSourceUserChoice"])(state, props),
      selectedNode = _getSourceUserChoice.selectedNode,
      openedFolders = _getSourceUserChoice.openedFolders;

  var _getDependenciesUserC = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_3__["getDependenciesUserChoice"])(state, props),
      dependenciesEntryName = _getDependenciesUserC.dependenciesEntryName,
      selectedDependencyEdgeNodes = _getDependenciesUserC.selectedDependencyEdgeNodes;

  return {
    sourceDiagramOn: sourceDiagramOn,
    dependenciesDiagramOn: dependenciesDiagramOn,
    sourceDimFolders: sourceDimFolders,
    codeCrumbsDiagramOn: codeCrumbsDiagramOn,
    codeCrumbsMinimize: codeCrumbsMinimize,
    sourceLayoutTree: sourceLayoutTree,
    selectedNode: selectedNode,
    openedFolders: openedFolders,
    filesMap: filesMap,
    dependenciesEntryName: dependenciesEntryName,
    selectedDependencyEdgeNodes: selectedDependencyEdgeNodes
  };
};

var mapDispatchToProps = {
  onNodeTextClick: core_dataBus_actions__WEBPACK_IMPORTED_MODULE_2__["selectNode"],
  onFolderIconClick: core_dataBus_actions__WEBPACK_IMPORTED_MODULE_2__["toggleFolder"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_Tree__WEBPACK_IMPORTED_MODULE_5__["default"]));

/***/ }),

/***/ "./js/components/treeDiagram/component/TreeDiagram.js":
/*!************************************************************!*\
  !*** ./js/components/treeDiagram/component/TreeDiagram.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_spin_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/spin/style/css */ "../../node_modules/antd/es/spin/style/css.js");
/* harmony import */ var antd_es_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/spin */ "../../node_modules/antd/es/spin/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-draggable */ "../../node_modules/react-draggable/dist/react-draggable.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Tree_Source___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tree/Source/ */ "./js/components/treeDiagram/component/Tree/Source/index.js");
/* harmony import */ var _UnderLayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UnderLayer */ "./js/components/treeDiagram/component/UnderLayer/index.js");
/* harmony import */ var _TreeDiagram_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TreeDiagram.scss */ "./js/components/treeDiagram/component/TreeDiagram.scss");
/* harmony import */ var _TreeDiagram_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TreeDiagram_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_dataBus_utils_geometry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/dataBus/utils/geometry */ "./js/core/dataBus/utils/geometry.js");



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var TreeDiagram =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TreeDiagram, _React$Component);

  function TreeDiagram() {
    _classCallCheck(this, TreeDiagram);

    return _possibleConstructorReturn(this, _getPrototypeOf(TreeDiagram).apply(this, arguments));
  }

  _createClass(TreeDiagram, [{
    key: "render",
    value: function render() {
      // TODO: fix diagramZoom
      var _this$props = this.props,
          diagramZoom = _this$props.diagramZoom,
          layoutSize = _this$props.layoutSize,
          sourceLayoutTree = _this$props.sourceLayoutTree,
          onUnderLayerClick = _this$props.onUnderLayerClick;
      var width = layoutSize.width,
          height = layoutSize.height,
          xShift = layoutSize.xShift,
          yShift = layoutSize.yShift,
          bounds = layoutSize.bounds;

      if (!width && !height) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: 'MainLoader'
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_spin__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_spin__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_spin__WEBPACK_IMPORTED_MODULE_1__["default"], null));
      }

      var shiftToCenterPoint = Object(core_dataBus_utils_geometry__WEBPACK_IMPORTED_MODULE_7__["buildShiftToPoint"])({
        x: xShift,
        y: yShift
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "TreeDiagram"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_draggable__WEBPACK_IMPORTED_MODULE_3___default.a, {
        bounds: bounds
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
        width: width,
        height: height,
        xmlns: "http://www.w3.org/2000/svg",
        shapeRendering: "optimizeSpeed"
      }, sourceLayoutTree && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_UnderLayer__WEBPACK_IMPORTED_MODULE_5__["UnderLayer"], {
        width: width,
        height: height,
        onClick: onUnderLayerClick
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Tree_Source___WEBPACK_IMPORTED_MODULE_4__["default"], {
        shiftToCenterPoint: shiftToCenterPoint
      })))));
    }
  }]);

  return TreeDiagram;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TreeDiagram);

/***/ }),

/***/ "./js/components/treeDiagram/component/TreeDiagram.scss":
/*!**************************************************************!*\
  !*** ./js/components/treeDiagram/component/TreeDiagram.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/sass-loader/lib/loader.js!./TreeDiagram.scss */ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/treeDiagram/component/TreeDiagram.scss");

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

/***/ "./js/components/treeDiagram/component/UnderLayer/index.js":
/*!*****************************************************************!*\
  !*** ./js/components/treeDiagram/component/UnderLayer/index.js ***!
  \*****************************************************************/
/*! exports provided: UnderLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderLayer", function() { return UnderLayer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./js/components/treeDiagram/component/UnderLayer/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);


var UnderLayer = function UnderLayer(props) {
  var width = props.width,
      height = props.height,
      onClick = props.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: 0,
    y: 0,
    width: width,
    height: height,
    className: 'UnderLayer',
    onClick: onClick
  });
};

/***/ }),

/***/ "./js/components/treeDiagram/component/UnderLayer/index.scss":
/*!*******************************************************************!*\
  !*** ./js/components/treeDiagram/component/UnderLayer/index.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss */ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/treeDiagram/component/UnderLayer/index.scss");

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

/***/ "./js/core/dataBus/utils/geometry.js":
/*!*******************************************!*\
  !*** ./js/core/dataBus/utils/geometry.js ***!
  \*******************************************/
/*! exports provided: calculateLayoutSize, buildShiftToPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateLayoutSize", function() { return calculateLayoutSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildShiftToPoint", function() { return buildShiftToPoint; });
var calculateLayoutSize = function calculateLayoutSize(list) {
  var padding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  if (!list) {
    return {
      width: 0,
      height: 0
    };
  }

  var minX = 0,
      minY = 0,
      maxX = 0,
      maxY = 0;
  list.each(function (node) {
    var _ref = [node.y, node.x],
        nX = _ref[0],
        nY = _ref[1];

    if (nX < minX) {
      minX = nX;
    }

    if (nY < minY) {
      minY = nY;
    }

    if (nX > maxX) {
      maxX = nX;
    }

    if (nY > maxY) {
      maxY = nY;
    }
  });
  var width = Math.round(Math.abs(maxX) + Math.abs(minX) + 3 * padding),
      height = Math.round(Math.abs(maxY) + Math.abs(minY) + 2 * padding);
  return {
    width: width,
    height: height,
    xShift: padding / 2,
    yShift: Math.round(Math.abs(minY)) + padding,
    bounds: {
      left: -width + padding,
      top: -height + padding,
      right: window.innerWidth + width - padding,
      bottom: window.innerHeight + height - padding
    }
  };
};
var buildShiftToPoint = function buildShiftToPoint(shift) {
  return function (x, y) {
    return {
      x: Math.round(shift.x + x),
      y: Math.round(shift.y + y)
    };
  };
};

/***/ })

}]);
//# sourceMappingURL=tree-diagram.bundle.js.map