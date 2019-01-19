(window["webpackJsonpcodecrumbs"] = window["webpackJsonpcodecrumbs"] || []).push([["vendors~crumbs-tab~dependencies-tab"],{

/***/ "../../node_modules/antd/es/collapse/Collapse.js":
/*!***************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/antd/es/collapse/Collapse.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-collapse */ "../../node_modules/rc-collapse/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _util_openAnimation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_util/openAnimation */ "../../node_modules/antd/es/_util/openAnimation.js");
/* harmony import */ var _CollapsePanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CollapsePanel */ "../../node_modules/antd/es/collapse/CollapsePanel.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icon */ "../../node_modules/antd/es/icon/index.js");













var Collapse = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Collapse, _React$Component);

    function Collapse() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Collapse);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).apply(this, arguments));

        _this.renderExpandIcon = function () {
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_11__["default"], { type: 'right', className: 'arrow' });
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Collapse, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                bordered = _props.bordered;

            var collapseClassName = classnames__WEBPACK_IMPORTED_MODULE_8___default()(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, prefixCls + '-borderless', !bordered), className);
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_collapse__WEBPACK_IMPORTED_MODULE_7__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, { className: collapseClassName, expandIcon: this.renderExpandIcon }));
        }
    }]);

    return Collapse;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Collapse);

Collapse.Panel = _CollapsePanel__WEBPACK_IMPORTED_MODULE_10__["default"];
Collapse.defaultProps = {
    prefixCls: 'ant-collapse',
    bordered: true,
    openAnimation: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _util_openAnimation__WEBPACK_IMPORTED_MODULE_9__["default"], {
        appear: function appear() {}
    })
};

/***/ }),

/***/ "../../node_modules/antd/es/collapse/CollapsePanel.js":
/*!********************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/antd/es/collapse/CollapsePanel.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-collapse */ "../../node_modules/rc-collapse/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);










var CollapsePanel = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CollapsePanel, _React$Component);

    function CollapsePanel() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, CollapsePanel);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (CollapsePanel.__proto__ || Object.getPrototypeOf(CollapsePanel)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(CollapsePanel, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                _props$showArrow = _props.showArrow,
                showArrow = _props$showArrow === undefined ? true : _props$showArrow;

            var collapsePanelClassName = classnames__WEBPACK_IMPORTED_MODULE_8___default()(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, prefixCls + '-no-arrow', !showArrow), className);
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_collapse__WEBPACK_IMPORTED_MODULE_7__["default"].Panel, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, { className: collapsePanelClassName }));
        }
    }]);

    return CollapsePanel;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CollapsePanel);

/***/ }),

/***/ "../../node_modules/antd/es/collapse/index.js":
/*!************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/antd/es/collapse/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collapse */ "../../node_modules/antd/es/collapse/Collapse.js");

/* harmony default export */ __webpack_exports__["default"] = (_Collapse__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../node_modules/antd/es/collapse/style/css.js":
/*!****************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/antd/es/collapse/style/css.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../../node_modules/antd/es/collapse/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../../node_modules/antd/es/collapse/style/index.css":
/*!*******************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/antd/es/collapse/style/index.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../../node_modules/css-loader/index.js!../../node_modules/antd/es/collapse/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../node_modules/antd/es/collapse/style/index.css":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/antd/es/collapse/style/index.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-collapse {\n  font-family: \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background-color: #fafafa;\n  border-radius: 4px;\n  border: 1px solid #d9d9d9;\n  border-bottom: 0;\n}\n.ant-collapse > .ant-collapse-item {\n  border-bottom: 1px solid #d9d9d9;\n}\n.ant-collapse > .ant-collapse-item:last-child,\n.ant-collapse > .ant-collapse-item:last-child > .ant-collapse-header {\n  border-radius: 0 0 4px 4px;\n}\n.ant-collapse > .ant-collapse-item > .ant-collapse-header {\n  line-height: 22px;\n  padding: 12px 0 12px 40px;\n  color: rgba(0, 0, 0, 0.85);\n  cursor: pointer;\n  position: relative;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.ant-collapse > .ant-collapse-item > .ant-collapse-header .arrow {\n  font-style: normal;\n  vertical-align: -0.125em;\n  text-align: center;\n  text-transform: none;\n  line-height: 0;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 12px;\n  position: absolute;\n  display: inline-block;\n  line-height: 46px;\n  vertical-align: top;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n  left: 16px;\n}\n.ant-collapse > .ant-collapse-item > .ant-collapse-header .arrow > * {\n  line-height: 1;\n}\n.ant-collapse > .ant-collapse-item > .ant-collapse-header .arrow svg {\n  display: inline-block;\n}\n.ant-collapse > .ant-collapse-item > .ant-collapse-header .arrow:before {\n  display: none;\n}\n.ant-collapse > .ant-collapse-item > .ant-collapse-header .arrow .ant-collapse > .ant-collapse-item > .ant-collapse-header .arrow-icon {\n  display: block;\n}\n.ant-collapse > .ant-collapse-item > .ant-collapse-header .arrow svg {\n  -webkit-transform: rotate(0);\n      -ms-transform: rotate(0);\n          transform: rotate(0);\n  -webkit-transition: -webkit-transform 0.24s;\n  transition: -webkit-transform 0.24s;\n  transition: transform 0.24s;\n  transition: transform 0.24s, -webkit-transform 0.24s;\n}\n.ant-collapse > .ant-collapse-item > .ant-collapse-header:focus {\n  outline: none;\n}\n.ant-collapse > .ant-collapse-item.ant-collapse-no-arrow > .ant-collapse-header {\n  padding-left: 12px;\n}\n.ant-collapse-anim-active {\n  -webkit-transition: height 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: height 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.ant-collapse-content {\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  border-top: 1px solid #d9d9d9;\n}\n.ant-collapse-content > .ant-collapse-content-box {\n  padding: 16px;\n}\n.ant-collapse-content-inactive {\n  display: none;\n}\n.ant-collapse-item:last-child > .ant-collapse-content {\n  border-radius: 0 0 4px 4px;\n}\n.ant-collapse > .ant-collapse-item > .ant-collapse-header[aria-expanded=\"true\"] .anticon-right svg {\n  -webkit-transform: rotate(90deg);\n      -ms-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.ant-collapse-borderless {\n  background-color: #fff;\n  border: 0;\n}\n.ant-collapse-borderless > .ant-collapse-item {\n  border-bottom: 1px solid #d9d9d9;\n}\n.ant-collapse-borderless > .ant-collapse-item:last-child,\n.ant-collapse-borderless > .ant-collapse-item:last-child .ant-collapse-header {\n  border-radius: 0;\n}\n.ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content {\n  background-color: transparent;\n  border-top: 0;\n}\n.ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {\n  padding-top: 4px;\n}\n.ant-collapse .ant-collapse-item-disabled > .ant-collapse-header,\n.ant-collapse .ant-collapse-item-disabled > .ant-collapse-header > .arrow {\n  cursor: not-allowed;\n  color: rgba(0, 0, 0, 0.25);\n}\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/rc-collapse/es/Collapse.js":
/*!*************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/rc-collapse/es/Collapse.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Panel */ "../../node_modules/rc-collapse/es/Panel.js");
/* harmony import */ var _openAnimationFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./openAnimationFactory */ "../../node_modules/rc-collapse/es/openAnimationFactory.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







function toArray(activeKey) {
  var currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    currentActiveKey = currentActiveKey ? [currentActiveKey] : [];
  }
  return currentActiveKey;
}

var Collapse = function (_Component) {
  _inherits(Collapse, _Component);

  function Collapse(props) {
    _classCallCheck(this, Collapse);

    var _this = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

    var _this$props = _this.props,
        activeKey = _this$props.activeKey,
        defaultActiveKey = _this$props.defaultActiveKey;

    var currentActiveKey = defaultActiveKey;
    if ('activeKey' in _this.props) {
      currentActiveKey = activeKey;
    }

    _this.state = {
      openAnimation: _this.props.openAnimation || Object(_openAnimationFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(_this.props.prefixCls),
      activeKey: toArray(currentActiveKey)
    };
    return _this;
  }

  _createClass(Collapse, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('activeKey' in nextProps) {
        this.setState({
          activeKey: toArray(nextProps.activeKey)
        });
      }
      if ('openAnimation' in nextProps) {
        this.setState({
          openAnimation: nextProps.openAnimation
        });
      }
    }
  }, {
    key: 'onClickItem',
    value: function onClickItem(key) {
      var activeKey = this.state.activeKey;
      if (this.props.accordion) {
        activeKey = activeKey[0] === key ? [] : [key];
      } else {
        activeKey = [].concat(_toConsumableArray(activeKey));
        var index = activeKey.indexOf(key);
        var isActive = index > -1;
        if (isActive) {
          // remove active state
          activeKey.splice(index, 1);
        } else {
          activeKey.push(key);
        }
      }
      this.setActiveKey(activeKey);
    }
  }, {
    key: 'getItems',
    value: function getItems() {
      var _this2 = this;

      var activeKey = this.state.activeKey;
      var _props = this.props,
          prefixCls = _props.prefixCls,
          accordion = _props.accordion,
          destroyInactivePanel = _props.destroyInactivePanel,
          expandIcon = _props.expandIcon;

      var newChildren = [];

      react__WEBPACK_IMPORTED_MODULE_0__["Children"].forEach(this.props.children, function (child, index) {
        if (!child) return;
        // If there is no key provide, use the panel order as default key
        var key = child.key || String(index);
        var _child$props = child.props,
            header = _child$props.header,
            headerClass = _child$props.headerClass,
            disabled = _child$props.disabled;

        var isActive = false;
        if (accordion) {
          isActive = activeKey[0] === key;
        } else {
          isActive = activeKey.indexOf(key) > -1;
        }

        var props = {
          key: key,
          header: header,
          headerClass: headerClass,
          isActive: isActive,
          prefixCls: prefixCls,
          destroyInactivePanel: destroyInactivePanel,
          openAnimation: _this2.state.openAnimation,
          accordion: accordion,
          children: child.props.children,
          onItemClick: disabled ? null : function () {
            return _this2.onClickItem(key);
          },
          expandIcon: expandIcon
        };

        newChildren.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, props));
      });

      return newChildren;
    }
  }, {
    key: 'setActiveKey',
    value: function setActiveKey(activeKey) {
      if (!('activeKey' in this.props)) {
        this.setState({ activeKey: activeKey });
      }
      this.props.onChange(this.props.accordion ? activeKey[0] : activeKey);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          className = _props2.className,
          style = _props2.style,
          accordion = _props2.accordion;

      var collapseClassName = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, className, !!className), _classNames));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: collapseClassName, style: style, role: accordion ? 'tablist' : null },
        this.getItems()
      );
    }
  }]);

  return Collapse;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Collapse.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  activeKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)]),
  defaultActiveKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)]),
  openAnimation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  accordion: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  destroyInactivePanel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  expandIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

Collapse.defaultProps = {
  prefixCls: 'rc-collapse',
  onChange: function onChange() {},

  accordion: false,
  destroyInactivePanel: false
};

Collapse.Panel = _Panel__WEBPACK_IMPORTED_MODULE_2__["default"];

/* harmony default export */ __webpack_exports__["default"] = (Collapse);

/***/ }),

/***/ "../../node_modules/rc-collapse/es/Panel.js":
/*!**********************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/rc-collapse/es/Panel.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PanelContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PanelContent */ "../../node_modules/rc-collapse/es/PanelContent.js");
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-animate */ "../../node_modules/rc-animate/es/Animate.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CollapsePanel = function (_Component) {
  _inherits(CollapsePanel, _Component);

  function CollapsePanel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CollapsePanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CollapsePanel.__proto__ || Object.getPrototypeOf(CollapsePanel)).call.apply(_ref, [this].concat(args))), _this), _this.handleItemClick = function () {
      if (_this.props.onItemClick) {
        _this.props.onItemClick();
      }
    }, _this.handleKeyPress = function (e) {
      if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
        _this.handleItemClick();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CollapsePanel, [{
    key: 'render',
    value: function render() {
      var _classNames2;

      var _props = this.props,
          className = _props.className,
          id = _props.id,
          style = _props.style,
          prefixCls = _props.prefixCls,
          header = _props.header,
          headerClass = _props.headerClass,
          children = _props.children,
          isActive = _props.isActive,
          showArrow = _props.showArrow,
          destroyInactivePanel = _props.destroyInactivePanel,
          disabled = _props.disabled,
          accordion = _props.accordion,
          forceRender = _props.forceRender,
          expandIcon = _props.expandIcon;

      var headerCls = classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls + '-header', _defineProperty({}, headerClass, headerClass));
      var itemCls = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-item', true), _defineProperty(_classNames2, prefixCls + '-item-active', isActive), _defineProperty(_classNames2, prefixCls + '-item-disabled', disabled), _classNames2), className);

      var icon = null;
      if (showArrow && typeof expandIcon === 'function') {
        icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(expandIcon, _extends({}, this.props));
      }
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: itemCls, style: style, id: id },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          {
            className: headerCls,
            onClick: this.handleItemClick,
            role: accordion ? 'tab' : 'button',
            tabIndex: disabled ? -1 : 0,
            'aria-expanded': '' + isActive,
            onKeyPress: this.handleKeyPress
          },
          showArrow && (icon || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'arrow' })),
          header
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          rc_animate__WEBPACK_IMPORTED_MODULE_4__["default"],
          {
            showProp: 'isActive',
            exclusive: true,
            component: '',
            animation: this.props.openAnimation
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _PanelContent__WEBPACK_IMPORTED_MODULE_3__["default"],
            {
              prefixCls: prefixCls,
              isActive: isActive,
              destroyInactivePanel: destroyInactivePanel,
              forceRender: forceRender,
              role: accordion ? 'tabpanel' : null
            },
            children
          )
        )
      );
    }
  }]);

  return CollapsePanel;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

CollapsePanel.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  openAnimation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
  headerClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  showArrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onItemClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  destroyInactivePanel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  accordion: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  expandIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

CollapsePanel.defaultProps = {
  showArrow: true,
  isActive: false,
  destroyInactivePanel: false,
  onItemClick: function onItemClick() {},

  headerClass: '',
  forceRender: false
};

/* harmony default export */ __webpack_exports__["default"] = (CollapsePanel);

/***/ }),

/***/ "../../node_modules/rc-collapse/es/PanelContent.js":
/*!*****************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/rc-collapse/es/PanelContent.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PanelContent = function (_Component) {
  _inherits(PanelContent, _Component);

  function PanelContent() {
    _classCallCheck(this, PanelContent);

    return _possibleConstructorReturn(this, (PanelContent.__proto__ || Object.getPrototypeOf(PanelContent)).apply(this, arguments));
  }

  _createClass(PanelContent, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.forceRender || this.props.isActive || nextProps.isActive;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      this._isActived = this.props.forceRender || this._isActived || this.props.isActive;
      if (!this._isActived) {
        return null;
      }
      var _props = this.props,
          prefixCls = _props.prefixCls,
          isActive = _props.isActive,
          children = _props.children,
          destroyInactivePanel = _props.destroyInactivePanel,
          forceRender = _props.forceRender,
          role = _props.role;

      var contentCls = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classnames = {}, _defineProperty(_classnames, prefixCls + '-content', true), _defineProperty(_classnames, prefixCls + '-content-active', isActive), _defineProperty(_classnames, prefixCls + '-content-inactive', !isActive), _classnames));
      var child = !forceRender && !isActive && destroyInactivePanel ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: prefixCls + '-content-box' },
        children
      );
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        {
          className: contentCls,
          role: role
        },
        child
      );
    }
  }]);

  return PanelContent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

PanelContent.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  destroyInactivePanel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (PanelContent);

/***/ }),

/***/ "../../node_modules/rc-collapse/es/index.js":
/*!**********************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/rc-collapse/es/index.js ***!
  \**********************************************************************************/
/*! exports provided: default, Panel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collapse */ "../../node_modules/rc-collapse/es/Collapse.js");


/* harmony default export */ __webpack_exports__["default"] = (_Collapse__WEBPACK_IMPORTED_MODULE_0__["default"]);
var Panel = _Collapse__WEBPACK_IMPORTED_MODULE_0__["default"].Panel;

/***/ }),

/***/ "../../node_modules/rc-collapse/es/openAnimationFactory.js":
/*!*************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/rc-collapse/es/openAnimationFactory.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-animation */ "../../node_modules/css-animation/es/index.js");


function animate(node, show, transitionName, done) {
  var height = void 0;
  return Object(css_animation__WEBPACK_IMPORTED_MODULE_0__["default"])(node, transitionName, {
    start: function start() {
      if (!show) {
        node.style.height = node.offsetHeight + 'px';
      } else {
        height = node.offsetHeight;
        node.style.height = 0;
      }
    },
    active: function active() {
      node.style.height = (show ? height : 0) + 'px';
    },
    end: function end() {
      node.style.height = '';
      done();
    }
  });
}

function animation(prefixCls) {
  return {
    enter: function enter(node, done) {
      return animate(node, true, prefixCls + '-anim', done);
    },
    leave: function leave(node, done) {
      return animate(node, false, prefixCls + '-anim', done);
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (animation);

/***/ })

}]);
//# sourceMappingURL=vendors~crumbs-tab~dependencies-tab.bundle.js.map