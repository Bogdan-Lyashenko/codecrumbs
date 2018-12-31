(window["webpackJsonpcodecrumbs"] = window["webpackJsonpcodecrumbs"] || []).push([["data-bus"],{

/***/ "./js/core/dataBus/index.js":
/*!**********************************!*\
  !*** ./js/core/dataBus/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var core_dataBus_connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/dataBus/connection */ "./js/core/dataBus/connection.js");
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/constants */ "./js/core/constants/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./js/core/dataBus/actions.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var DataBusContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DataBusContainer, _React$Component);

  function DataBusContainer() {
    _classCallCheck(this, DataBusContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(DataBusContainer).apply(this, arguments));
  }

  _createClass(DataBusContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var standalone = this.props.standalone;

      if (standalone) {
        return this.setupStandalone();
      }

      return this.setupLocal();
    }
  }, {
    key: "setupStandalone",
    value: function setupStandalone() {
      var _this$props = this.props,
          setPredefinedState = _this$props.setPredefinedState,
          predefinedState = _this$props.predefinedState;
      setPredefinedState(predefinedState);
    }
  }, {
    key: "setupLocal",
    value: function setupLocal() {
      var _this = this;

      Object(core_dataBus_connection__WEBPACK_IMPORTED_MODULE_2__["createConnection"])(function (_ref) {
        var type = _ref.type,
            data = _ref.data;
        return _this.onSocketEvent(type, data);
      });
    }
  }, {
    key: "handleInitSyncEvent",
    value: function handleInitSyncEvent(dataBody) {
      var setInitialSourceData = this.props.setInitialSourceData;
      setInitialSourceData(dataBody);
    }
  }, {
    key: "handleUpdateSyncEvent",
    value: function handleUpdateSyncEvent(dataBody) {
      var setChangedSourceData = this.props.setChangedSourceData;
      setChangedSourceData(dataBody);
    }
  }, {
    key: "onSocketEvent",
    value: function onSocketEvent(type, data) {
      switch (type) {
        case core_constants__WEBPACK_IMPORTED_MODULE_3__["SOCKET_EVENT_TYPE"].INIT_SOURCE_FILES_SYNC:
          return this.handleInitSyncEvent(data);

        case core_constants__WEBPACK_IMPORTED_MODULE_3__["SOCKET_EVENT_TYPE"].UPDATE_SOURCE_FILE_SYNC:
          return this.handleUpdateSyncEvent(data);

        default:
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "DataBus-container"
      });
    }
  }]);

  return DataBusContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapDispatchToProps = {
  setInitialSourceData: _actions__WEBPACK_IMPORTED_MODULE_4__["setInitialSourceData"],
  setChangedSourceData: _actions__WEBPACK_IMPORTED_MODULE_4__["setChangedSourceData"],
  setPredefinedState: _actions__WEBPACK_IMPORTED_MODULE_4__["setPredefinedState"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(DataBusContainer));

/***/ })

}]);
//# sourceMappingURL=data-bus.bundle.js.map