(window["webpackJsonpcodecrumbs"] = window["webpackJsonpcodecrumbs"] || []).push([["view-switches"],{

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/topBar/controls/FlowSelect/index.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/sass-loader/lib/loader.js!./js/components/topBar/controls/FlowSelect/index.scss ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".FlowSelect .flow {\n  color: #ff18a6; }\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/topBar/controls/SettingsControl/index.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/sass-loader/lib/loader.js!./js/components/topBar/controls/SettingsControl/index.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ant-upload-select {\n  display: block;\n  margin: -5px -12px; }\n  .ant-upload-select .ant-upload {\n    display: block;\n    padding: 5px 24px 5px 12px; }\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/topBar/controls/ViewSwitches/Item/ViewSwitch.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/sass-loader/lib/loader.js!./js/components/topBar/controls/ViewSwitches/Item/ViewSwitch.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ViewSwitchItem {\n  display: flex; }\n  .ViewSwitchItem .big-item {\n    padding-right: 8px;\n    display: flex;\n    align-items: center; }\n  .ViewSwitchItem .viewSwitchName {\n    padding-right: 4px; }\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/topBar/controls/ViewSwitches/List/ViewSwitchList.scss":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/sass-loader/lib/loader.js!./js/components/topBar/controls/ViewSwitches/List/ViewSwitchList.scss ***!
  \************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ViewSwitchList {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  .ViewSwitchList .side {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    margin-bottom: 8px; }\n    .ViewSwitchList .side .itemSpacingWrapper {\n      margin-right: 16px; }\n  .ViewSwitchList .settingContainer {\n    display: flex;\n    flex-direction: row; }\n    .ViewSwitchList .settingContainer .spacer {\n      margin: 0 10px;\n      height: 100%;\n      border-left: 1px solid #d9d9d9; }\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/topBar/controls/ZoomControl/index.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/sass-loader/lib/loader.js!./js/components/topBar/controls/ZoomControl/index.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ZoomControl {\n  margin-right: 100px; }\n", ""]);

// exports


/***/ }),

/***/ "./js/components/topBar/controls/FlowSelect/index.js":
/*!***********************************************************!*\
  !*** ./js/components/topBar/controls/FlowSelect/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_dropdown_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/dropdown/style/css */ "../../node_modules/antd/es/dropdown/style/css.js");
/* harmony import */ var antd_es_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/dropdown */ "../../node_modules/antd/es/dropdown/index.js");
/* harmony import */ var antd_es_button_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/button/style/css */ "../../node_modules/antd/es/button/style/css.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/button */ "../../node_modules/antd/es/button/index.js");
/* harmony import */ var antd_es_menu_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/menu/style/css */ "../../node_modules/antd/es/menu/style/css.js");
/* harmony import */ var antd_es_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/menu */ "../../node_modules/antd/es/menu/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/constants */ "./js/core/constants/index.js");
/* harmony import */ var core_dataBus_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core/dataBus/actions */ "./js/core/dataBus/actions.js");
/* harmony import */ var core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core/dataBus/selectors */ "./js/core/dataBus/selectors.js");
/* harmony import */ var core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core/controlsBus/selectors */ "./js/core/controlsBus/selectors.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.scss */ "./js/components/topBar/controls/FlowSelect/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_12__);














var FlowSelect = function FlowSelect(_ref) {
  var codeCrumbsDiagramOn = _ref.codeCrumbsDiagramOn,
      codeCrumbsMinimize = _ref.codeCrumbsMinimize,
      codeCrumbedFlowsMap = _ref.codeCrumbedFlowsMap,
      onCodeCrumbedFlowSelect = _ref.onCodeCrumbedFlowSelect,
      selectedCrumbedFlowKey = _ref.selectedCrumbedFlowKey;

  if (!codeCrumbsDiagramOn || !Object.keys(codeCrumbedFlowsMap).length || codeCrumbsMinimize) {
    return null;
  }

  var noTrailLabel = '- no trail -';
  var menu = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_5__["default"], null, Object.keys(codeCrumbedFlowsMap).filter(function (key) {
    return key !== selectedCrumbedFlowKey;
  }).map(function (flow) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
      key: flow
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: function onClick() {
        return onCodeCrumbedFlowSelect(flow);
      }
    }, flow === core_constants__WEBPACK_IMPORTED_MODULE_8__["NO_TRAIL_FLOW"] ? noTrailLabel : "# ".concat(flow)));
  }));
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: 'FlowSelect'
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_dropdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    overlay: menu,
    placement: "bottomLeft"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 'small'
  }, selectedCrumbedFlowKey === core_constants__WEBPACK_IMPORTED_MODULE_8__["NO_TRAIL_FLOW"] ? noTrailLabel : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, "trail", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: 'flow'
  }, " #".concat(selectedCrumbedFlowKey))))));
};

var mapStateToProps = function mapStateToProps(state, props) {
  var _getCheckedState = Object(core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_11__["getCheckedState"])(state),
      codeCrumbsDiagramOn = _getCheckedState.codeCrumbsDiagramOn,
      codeCrumbsMinimize = _getCheckedState.codeCrumbsMinimize;

  var _getCodeCrumbsUserCho = Object(core_dataBus_selectors__WEBPACK_IMPORTED_MODULE_10__["getCodeCrumbsUserChoice"])(state, props),
      codeCrumbedFlowsMap = _getCodeCrumbsUserCho.codeCrumbedFlowsMap,
      selectedCrumbedFlowKey = _getCodeCrumbsUserCho.selectedCrumbedFlowKey;

  return {
    codeCrumbsDiagramOn: codeCrumbsDiagramOn,
    codeCrumbsMinimize: codeCrumbsMinimize,
    codeCrumbedFlowsMap: codeCrumbedFlowsMap,
    selectedCrumbedFlowKey: selectedCrumbedFlowKey
  };
};

var mapDispatchToProps = {
  onCodeCrumbedFlowSelect: core_dataBus_actions__WEBPACK_IMPORTED_MODULE_9__["selectCodeCrumbedFlow"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(FlowSelect));

/***/ }),

/***/ "./js/components/topBar/controls/FlowSelect/index.scss":
/*!*************************************************************!*\
  !*** ./js/components/topBar/controls/FlowSelect/index.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss */ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/topBar/controls/FlowSelect/index.scss");

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

/***/ "./js/components/topBar/controls/SettingsControl/index.js":
/*!****************************************************************!*\
  !*** ./js/components/topBar/controls/SettingsControl/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_dropdown_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/dropdown/style/css */ "../../node_modules/antd/es/dropdown/style/css.js");
/* harmony import */ var antd_es_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/dropdown */ "../../node_modules/antd/es/dropdown/index.js");
/* harmony import */ var antd_es_button_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/button/style/css */ "../../node_modules/antd/es/button/style/css.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/button */ "../../node_modules/antd/es/button/index.js");
/* harmony import */ var antd_es_upload_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/upload/style/css */ "../../node_modules/antd/es/upload/style/css.js");
/* harmony import */ var antd_es_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/upload */ "../../node_modules/antd/es/upload/index.js");
/* harmony import */ var antd_es_menu_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/menu/style/css */ "../../node_modules/antd/es/menu/style/css.js");
/* harmony import */ var antd_es_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/menu */ "../../node_modules/antd/es/menu/index.js");
/* harmony import */ var antd_es_icon_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/es/icon/style/css */ "../../node_modules/antd/es/icon/style/css.js");
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/es/icon */ "../../node_modules/antd/es/icon/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var core_dataBus_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core/dataBus/actions */ "./js/core/dataBus/actions.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.scss */ "./js/components/topBar/controls/SettingsControl/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_13__);















var SettingsControl = function SettingsControl(_ref) {
  var onDownload = _ref.onDownload,
      onUpload = _ref.onUpload;
  var uploadProps = {
    beforeUpload: function beforeUpload(file) {
      onUpload(file);
      return false;
    },
    fileList: []
  };
  var menu = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_7__["default"].Item, {
    key: 'download'
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: onDownload
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "download"
  }), " Download store")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_7__["default"].Item, {
    key: 'upload',
    onClick: function onClick(e) {
      return false;
    }
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_upload__WEBPACK_IMPORTED_MODULE_5__["default"], uploadProps, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "upload"
  }), " Upload store")));
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: 'SettingsControl'
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_dropdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    overlay: menu,
    placement: "bottomLeft"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 'small'
  }, "setup", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "setting"
  }))));
};

var mapDispatchToProps = {
  onDownload: core_dataBus_actions__WEBPACK_IMPORTED_MODULE_12__["downloadStore"],
  onUpload: core_dataBus_actions__WEBPACK_IMPORTED_MODULE_12__["uploadStore"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(null, mapDispatchToProps)(SettingsControl));

/***/ }),

/***/ "./js/components/topBar/controls/SettingsControl/index.scss":
/*!******************************************************************!*\
  !*** ./js/components/topBar/controls/SettingsControl/index.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss */ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/topBar/controls/SettingsControl/index.scss");

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

/***/ "./js/components/topBar/controls/ViewSwitches/Item/ViewSwitch.js":
/*!***********************************************************************!*\
  !*** ./js/components/topBar/controls/ViewSwitches/Item/ViewSwitch.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_switch_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/switch/style/css */ "../../node_modules/antd/es/switch/style/css.js");
/* harmony import */ var antd_es_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/switch */ "../../node_modules/antd/es/switch/index.js");
/* harmony import */ var antd_es_dropdown_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/dropdown/style/css */ "../../node_modules/antd/es/dropdown/style/css.js");
/* harmony import */ var antd_es_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/dropdown */ "../../node_modules/antd/es/dropdown/index.js");
/* harmony import */ var antd_es_menu_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/menu/style/css */ "../../node_modules/antd/es/menu/style/css.js");
/* harmony import */ var antd_es_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/menu */ "../../node_modules/antd/es/menu/index.js");
/* harmony import */ var antd_es_icon_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/icon/style/css */ "../../node_modules/antd/es/icon/style/css.js");
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/icon */ "../../node_modules/antd/es/icon/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_controlsBus_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core/controlsBus/constants */ "./js/core/controlsBus/constants.js");
/* harmony import */ var _ViewSwitch_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ViewSwitch.scss */ "./js/components/topBar/controls/ViewSwitches/Item/ViewSwitch.scss");
/* harmony import */ var _ViewSwitch_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ViewSwitch_scss__WEBPACK_IMPORTED_MODULE_10__);









function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ViewSwitch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ViewSwitch, _React$Component);

  function ViewSwitch() {
    _classCallCheck(this, ViewSwitch);

    return _possibleConstructorReturn(this, _getPrototypeOf(ViewSwitch).apply(this, arguments));
  }

  _createClass(ViewSwitch, [{
    key: "renderMenu",
    value: function renderMenu() {
      var _this$props = this.props,
          name = _this$props.name,
          subMenuItems = _this$props.subMenuItems,
          checkedState = _this$props.checkedState,
          disabledState = _this$props.disabledState,
          toggleSwitch = _this$props.toggleSwitch,
          fireButtonAction = _this$props.fireButtonAction;
      var menu = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_5__["default"], null, subMenuItems.map(function (item) {
        var menuItem = null;

        if (item.type === core_controlsBus_constants__WEBPACK_IMPORTED_MODULE_9__["VIEW_TYPES"].BUTTON) {
          var itemName = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, item.icon ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
            type: item.icon
          }) : null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            title: item.title
          }, ' ' + item.name));
          menuItem = !disabledState[item.key] ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
            title: item.title,
            onClick: function onClick() {
              return fireButtonAction(item.key);
            }
          }, itemName) : itemName;
        } else {
          var tickAndName = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, checkedState[item.key] ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
            type: 'check'
          }) : null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            title: item.title
          }, item.name));
          menuItem = !disabledState[item.key] ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
            title: item.title,
            onClick: function onClick() {
              return toggleSwitch(item.key, !checkedState[item.key]);
            }
          }, tickAndName) : tickAndName;
        }

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
          key: "".concat(name, "-").concat(item.key),
          disabled: disabledState[item.key]
        }, menuItem);
      }));
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
        overlay: menu,
        trigger: ['click']
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "viewSwitchName"
      }, name, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "down"
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          name = _this$props2.name,
          itemKey = _this$props2.itemKey,
          subMenuItems = _this$props2.subMenuItems,
          checkedState = _this$props2.checkedState,
          toggleSwitch = _this$props2.toggleSwitch;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "ViewSwitchItem"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "big-item"
      }, checkedState[itemKey] && subMenuItems.length ? this.renderMenu() : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "viewSwitchName"
      }, name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_switch__WEBPACK_IMPORTED_MODULE_1__["default"], {
        size: "small",
        checked: checkedState[itemKey],
        onChange: function onChange(v) {
          return toggleSwitch(itemKey, v);
        }
      })));
    }
  }]);

  return ViewSwitch;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ViewSwitch);

/***/ }),

/***/ "./js/components/topBar/controls/ViewSwitches/Item/ViewSwitch.scss":
/*!*************************************************************************!*\
  !*** ./js/components/topBar/controls/ViewSwitches/Item/ViewSwitch.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/sass-loader/lib/loader.js!./ViewSwitch.scss */ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/topBar/controls/ViewSwitches/Item/ViewSwitch.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./js/components/topBar/controls/ViewSwitches/List/ViewSwitchList.js":
/*!***************************************************************************!*\
  !*** ./js/components/topBar/controls/ViewSwitches/List/ViewSwitchList.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_topBar_controls_FlowSelect_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/topBar/controls/FlowSelect/index */ "./js/components/topBar/controls/FlowSelect/index.js");
/* harmony import */ var components_topBar_controls_ZoomControl_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/topBar/controls/ZoomControl/index */ "./js/components/topBar/controls/ZoomControl/index.js");
/* harmony import */ var components_topBar_controls_SettingsControl_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/topBar/controls/SettingsControl/index */ "./js/components/topBar/controls/SettingsControl/index.js");
/* harmony import */ var _Item_ViewSwitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Item/ViewSwitch */ "./js/components/topBar/controls/ViewSwitches/Item/ViewSwitch.js");
/* harmony import */ var _ViewSwitchList_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ViewSwitchList.scss */ "./js/components/topBar/controls/ViewSwitches/List/ViewSwitchList.scss");
/* harmony import */ var _ViewSwitchList_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ViewSwitchList_scss__WEBPACK_IMPORTED_MODULE_6__);








var ViewSwitchList = function ViewSwitchList(props) {
  var switches = props.switches,
      toggleSwitch = props.toggleSwitch,
      fireButtonAction = props.fireButtonAction,
      checkedState = props.checkedState,
      disabledState = props.disabledState;
  var leftSide = [],
      rightSide = [];
  switches.forEach(function (item, i) {
    var isLastItem = i === switches.length - 1;
    var side = isLastItem ? rightSide : leftSide;
    side.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        itemSpacingWrapper: !isLastItem
      }),
      key: item.key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item_ViewSwitch__WEBPACK_IMPORTED_MODULE_5__["default"], {
      itemKey: item.key,
      name: item.name,
      subMenuItems: item.children,
      checkedState: checkedState,
      disabledState: disabledState,
      toggleSwitch: toggleSwitch,
      fireButtonAction: fireButtonAction
    })));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ViewSwitchList"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'side'
  }, leftSide, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_topBar_controls_FlowSelect_index__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'side'
  }, rightSide.concat(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'settingContainer',
    key: 'setting'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'spacer'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_topBar_controls_SettingsControl_index__WEBPACK_IMPORTED_MODULE_4__["default"], null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (ViewSwitchList);

/***/ }),

/***/ "./js/components/topBar/controls/ViewSwitches/List/ViewSwitchList.scss":
/*!*****************************************************************************!*\
  !*** ./js/components/topBar/controls/ViewSwitches/List/ViewSwitchList.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/sass-loader/lib/loader.js!./ViewSwitchList.scss */ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/topBar/controls/ViewSwitches/List/ViewSwitchList.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./js/components/topBar/controls/ViewSwitches/ViewSwitchesContainer.js":
/*!*****************************************************************************!*\
  !*** ./js/components/topBar/controls/ViewSwitches/ViewSwitchesContainer.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var core_controlsBus_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/controlsBus/actions */ "./js/core/controlsBus/actions.js");
/* harmony import */ var core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/controlsBus/selectors */ "./js/core/controlsBus/selectors.js");
/* harmony import */ var _List_ViewSwitchList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./List/ViewSwitchList */ "./js/components/topBar/controls/ViewSwitches/List/ViewSwitchList.js");






var mapStateToProps = function mapStateToProps(state) {
  return {
    switches: Object(core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_3__["getSwitches"])(state),
    checkedState: Object(core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_3__["getCheckedState"])(state),
    disabledState: Object(core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_3__["getDisabledState"])(state)
  };
};

var mapDispatchToProps = {
  toggleSwitch: core_controlsBus_actions__WEBPACK_IMPORTED_MODULE_2__["toggleSwitch"],
  fireButtonAction: core_controlsBus_actions__WEBPACK_IMPORTED_MODULE_2__["fireButtonAction"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_List_ViewSwitchList__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ }),

/***/ "./js/components/topBar/controls/ZoomControl/index.js":
/*!************************************************************!*\
  !*** ./js/components/topBar/controls/ZoomControl/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/button/style/css */ "../../node_modules/antd/es/button/style/css.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/button */ "../../node_modules/antd/es/button/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var core_controlsBus_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/controlsBus/actions */ "./js/core/controlsBus/actions.js");
/* harmony import */ var core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/controlsBus/selectors */ "./js/core/controlsBus/selectors.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./js/components/topBar/controls/ZoomControl/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);




var ButtonGroup = antd_es_button__WEBPACK_IMPORTED_MODULE_1__["default"].Group;




var ZoomControl = function ZoomControl(_ref) {
  var zoom = _ref.zoom,
      setZoom = _ref.setZoom;
  var step = 0.1; //TODO: doesn't work proper scaling

  return null;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: 'ZoomControl'
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ButtonGroup, {
    size: 'small'
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: "zoom-out",
    disabled: zoom <= step,
    onClick: function onClick() {
      return setZoom(zoom - step);
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: "border",
    disabled: zoom === 1,
    onClick: function onClick() {
      return setZoom(1);
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: "zoom-in",
    onClick: function onClick() {
      return setZoom(zoom + step);
    }
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  var _getValuesState = Object(core_controlsBus_selectors__WEBPACK_IMPORTED_MODULE_5__["getValuesState"])(state),
      diagramZoom = _getValuesState.diagramZoom;

  return {
    zoom: diagramZoom
  };
};

var mapDispatchToProps = {
  setZoom: core_controlsBus_actions__WEBPACK_IMPORTED_MODULE_4__["setZoom"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(ZoomControl));

/***/ }),

/***/ "./js/components/topBar/controls/ZoomControl/index.scss":
/*!**************************************************************!*\
  !*** ./js/components/topBar/controls/ZoomControl/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss */ "../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./js/components/topBar/controls/ZoomControl/index.scss");

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
//# sourceMappingURL=view-switches.bundle.js.map