(window["webpackJsonpcodecrumbs"] = window["webpackJsonpcodecrumbs"] || []).push([["vendors~explorer-bar"],{

/***/ "../../node_modules/antd/es/_util/openAnimation.js":
/*!*****************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/antd/es/_util/openAnimation.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-animation */ "../../node_modules/css-animation/es/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raf */ "../../node_modules/raf/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_1__);


function animate(node, show, done) {
    var height = void 0;
    var requestAnimationFrameId = void 0;
    return Object(css_animation__WEBPACK_IMPORTED_MODULE_0__["default"])(node, 'ant-motion-collapse', {
        start: function start() {
            if (!show) {
                node.style.height = node.offsetHeight + 'px';
                node.style.opacity = '1';
            } else {
                height = node.offsetHeight;
                node.style.height = '0px';
                node.style.opacity = '0';
            }
        },
        active: function active() {
            if (requestAnimationFrameId) {
                raf__WEBPACK_IMPORTED_MODULE_1___default.a.cancel(requestAnimationFrameId);
            }
            requestAnimationFrameId = raf__WEBPACK_IMPORTED_MODULE_1___default()(function () {
                node.style.height = (show ? height : 0) + 'px';
                node.style.opacity = show ? '1' : '0';
            });
        },
        end: function end() {
            if (requestAnimationFrameId) {
                raf__WEBPACK_IMPORTED_MODULE_1___default.a.cancel(requestAnimationFrameId);
            }
            node.style.height = '';
            node.style.opacity = '';
            done();
        }
    });
}
var animation = {
    enter: function enter(node, done) {
        return animate(node, true, done);
    },
    leave: function leave(node, done) {
        return animate(node, false, done);
    },
    appear: function appear(node, done) {
        return animate(node, true, done);
    }
};
/* harmony default export */ __webpack_exports__["default"] = (animation);

/***/ }),

/***/ "../../node_modules/antd/es/checkbox/style/css.js":
/*!****************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/antd/es/checkbox/style/css.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../../node_modules/antd/es/checkbox/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../../node_modules/antd/es/checkbox/style/index.css":
/*!*******************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/antd/es/checkbox/style/index.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../../node_modules/css-loader/index.js!../../node_modules/antd/es/checkbox/style/index.css");

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

/***/ "../../node_modules/antd/es/tree/DirectoryTree.js":
/*!****************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/antd/es/tree/DirectoryTree.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "../../node_modules/babel-runtime/helpers/toConsumableArray.js");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! omit.js */ "../../node_modules/omit.js/es/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/debounce */ "../../node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_tree_es_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-tree/es/util */ "../../node_modules/rc-tree/es/util.js");
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Tree */ "../../node_modules/antd/es/tree/Tree.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util */ "../../node_modules/antd/es/tree/util.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../icon */ "../../node_modules/antd/es/icon/index.js");






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};








function getIcon(props) {
    var isLeaf = props.isLeaf,
        expanded = props.expanded;

    if (isLeaf) {
        return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_13__["default"], { type: 'file' });
    }
    return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_13__["default"], { type: expanded ? 'folder-open' : 'folder' });
}

var DirectoryTree = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DirectoryTree, _React$Component);

    function DirectoryTree(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, DirectoryTree);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (DirectoryTree.__proto__ || Object.getPrototypeOf(DirectoryTree)).call(this, props));

        _this.onExpand = function (expandedKeys, info) {
            var onExpand = _this.props.onExpand;

            _this.setUncontrolledState({ expandedKeys: expandedKeys });
            // Call origin function
            if (onExpand) {
                return onExpand(expandedKeys, info);
            }
            return undefined;
        };
        _this.onClick = function (event, node) {
            var _this$props = _this.props,
                onClick = _this$props.onClick,
                expandAction = _this$props.expandAction;
            // Expand the tree

            if (expandAction === 'click') {
                _this.onDebounceExpand(event, node);
            }
            if (onClick) {
                onClick(event, node);
            }
        };
        _this.onDoubleClick = function (event, node) {
            var _this$props2 = _this.props,
                onDoubleClick = _this$props2.onDoubleClick,
                expandAction = _this$props2.expandAction;
            // Expand the tree

            if (expandAction === 'doubleClick') {
                _this.onDebounceExpand(event, node);
            }
            if (onDoubleClick) {
                onDoubleClick(event, node);
            }
        };
        _this.onSelect = function (keys, event) {
            var _this$props3 = _this.props,
                onSelect = _this$props3.onSelect,
                multiple = _this$props3.multiple,
                children = _this$props3.children;
            var _this$state = _this.state,
                _this$state$expandedK = _this$state.expandedKeys,
                expandedKeys = _this$state$expandedK === undefined ? [] : _this$state$expandedK,
                _this$state$selectedK = _this$state.selectedKeys,
                selectedKeys = _this$state$selectedK === undefined ? [] : _this$state$selectedK;
            var node = event.node,
                nativeEvent = event.nativeEvent;
            var _node$props$eventKey = node.props.eventKey,
                eventKey = _node$props$eventKey === undefined ? '' : _node$props$eventKey;

            var newState = {};
            // Windows / Mac single pick
            var ctrlPick = nativeEvent.ctrlKey || nativeEvent.metaKey;
            var shiftPick = nativeEvent.shiftKey;
            // Generate new selected keys
            var newSelectedKeys = selectedKeys.slice();
            if (multiple && ctrlPick) {
                // Control click
                newSelectedKeys = keys;
                _this.lastSelectedKey = eventKey;
                _this.cachedSelectedKeys = newSelectedKeys;
            } else if (multiple && shiftPick) {
                // Shift click
                newSelectedKeys = Array.from(new Set([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_this.cachedSelectedKeys || []), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(Object(_util__WEBPACK_IMPORTED_MODULE_12__["calcRangeKeys"])(children, expandedKeys, eventKey, _this.lastSelectedKey)))));
            } else {
                // Single click
                newSelectedKeys = [eventKey];
                _this.lastSelectedKey = eventKey;
                _this.cachedSelectedKeys = newSelectedKeys;
            }
            newState.selectedKeys = newSelectedKeys;
            if (onSelect) {
                onSelect(newSelectedKeys, event);
            }
            _this.setUncontrolledState(newState);
        };
        _this.expandFolderNode = function (event, node) {
            var _this$state$expandedK2 = _this.state.expandedKeys,
                expandedKeys = _this$state$expandedK2 === undefined ? [] : _this$state$expandedK2;
            var onExpand = _this.props.onExpand;
            var _node$props = node.props,
                _node$props$eventKey2 = _node$props.eventKey,
                eventKey = _node$props$eventKey2 === undefined ? '' : _node$props$eventKey2,
                expanded = _node$props.expanded,
                isLeaf = _node$props.isLeaf;

            if (isLeaf || event.shiftKey || event.metaKey || event.ctrlKey) {
                return;
            }
            var newExpandedKeys = expandedKeys.slice();
            var index = newExpandedKeys.indexOf(eventKey);
            if (expanded && index >= 0) {
                newExpandedKeys.splice(index, 1);
            } else if (!expanded && index === -1) {
                newExpandedKeys.push(eventKey);
            }
            _this.setUncontrolledState({
                expandedKeys: newExpandedKeys
            });
            if (onExpand) {
                onExpand(newExpandedKeys, {
                    expanded: !expanded,
                    node: node,
                    nativeEvent: event.nativeEvent
                });
            }
        };
        _this.setUncontrolledState = function (state) {
            var newState = Object(omit_js__WEBPACK_IMPORTED_MODULE_8__["default"])(state, Object.keys(_this.props));
            if (Object.keys(newState).length) {
                _this.setState(newState);
            }
        };
        var defaultExpandAll = props.defaultExpandAll,
            defaultExpandParent = props.defaultExpandParent,
            expandedKeys = props.expandedKeys,
            defaultExpandedKeys = props.defaultExpandedKeys,
            children = props.children;

        var _convertTreeToEntitie = Object(rc_tree_es_util__WEBPACK_IMPORTED_MODULE_10__["convertTreeToEntities"])(children),
            keyEntities = _convertTreeToEntitie.keyEntities;
        // Selected keys


        _this.state = {
            selectedKeys: props.selectedKeys || props.defaultSelectedKeys || []
        };
        // Expanded keys
        if (defaultExpandAll) {
            _this.state.expandedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_12__["getFullKeyList"])(props.children);
        } else if (defaultExpandParent) {
            _this.state.expandedKeys = Object(rc_tree_es_util__WEBPACK_IMPORTED_MODULE_10__["conductExpandParent"])(expandedKeys || defaultExpandedKeys, keyEntities);
        } else {
            _this.state.expandedKeys = defaultExpandedKeys;
        }
        _this.onDebounceExpand = lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default()(_this.expandFolderNode, 200, {
            leading: true
        });
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(DirectoryTree, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('expandedKeys' in nextProps) {
                this.setState({ expandedKeys: nextProps.expandedKeys });
            }
            if ('selectedKeys' in nextProps) {
                this.setState({ selectedKeys: nextProps.selectedKeys });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                props = __rest(_a, ["prefixCls", "className"]);var _state = this.state,
                expandedKeys = _state.expandedKeys,
                selectedKeys = _state.selectedKeys;

            var connectClassName = classnames__WEBPACK_IMPORTED_MODULE_7___default()(prefixCls + '-directory', className);
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_Tree__WEBPACK_IMPORTED_MODULE_11__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ icon: getIcon }, props, { prefixCls: prefixCls, className: connectClassName, expandedKeys: expandedKeys, selectedKeys: selectedKeys, onSelect: this.onSelect, onClick: this.onClick, onDoubleClick: this.onDoubleClick, onExpand: this.onExpand }));
        }
    }]);

    return DirectoryTree;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DirectoryTree);

DirectoryTree.defaultProps = {
    prefixCls: 'ant-tree',
    showIcon: true,
    expandAction: 'click'
};

/***/ }),

/***/ "../../node_modules/antd/es/tree/Tree.js":
/*!*******************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/antd/es/tree/Tree.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-tree */ "../../node_modules/rc-tree/es/index.js");
/* harmony import */ var _DirectoryTree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DirectoryTree */ "../../node_modules/antd/es/tree/DirectoryTree.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _util_openAnimation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_util/openAnimation */ "../../node_modules/antd/es/_util/openAnimation.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../icon */ "../../node_modules/antd/es/icon/index.js");












var Tree = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Tree, _React$Component);

    function Tree() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Tree);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).apply(this, arguments));

        _this.renderSwitcherIcon = function (_ref) {
            var isLeaf = _ref.isLeaf,
                expanded = _ref.expanded,
                loading = _ref.loading;
            var _this$props = _this.props,
                prefixCls = _this$props.prefixCls,
                showLine = _this$props.showLine;

            if (loading) {
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_10__["default"], { type: 'loading', className: prefixCls + '-switcher-loading-icon' });
            }
            if (showLine) {
                if (isLeaf) {
                    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_10__["default"], { type: 'file', className: prefixCls + '-switcher-line-icon' });
                }
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_10__["default"], { type: expanded ? 'minus-square' : 'plus-square', className: prefixCls + '-switcher-line-icon', theme: 'outlined' });
            } else {
                if (isLeaf) {
                    return null;
                }
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_10__["default"], { type: 'caret-down', className: prefixCls + '-switcher-icon', theme: 'filled' });
            }
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Tree, [{
        key: 'render',
        value: function render() {
            var props = this.props;
            var prefixCls = props.prefixCls,
                className = props.className,
                showIcon = props.showIcon;

            var checkable = props.checkable;
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                rc_tree__WEBPACK_IMPORTED_MODULE_6__["default"],
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, { className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(!showIcon && prefixCls + '-icon-hide', className), checkable: checkable ? react__WEBPACK_IMPORTED_MODULE_5__["createElement"]('span', { className: prefixCls + '-checkbox-inner' }) : checkable, switcherIcon: this.renderSwitcherIcon }),
                this.props.children
            );
        }
    }]);

    return Tree;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Tree);

Tree.TreeNode = rc_tree__WEBPACK_IMPORTED_MODULE_6__["TreeNode"];
Tree.DirectoryTree = _DirectoryTree__WEBPACK_IMPORTED_MODULE_7__["default"];
Tree.defaultProps = {
    prefixCls: 'ant-tree',
    checkable: false,
    showIcon: false,
    openAnimation: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _util_openAnimation__WEBPACK_IMPORTED_MODULE_9__["default"], { appear: null })
};

/***/ }),

/***/ "../../node_modules/antd/es/tree/index.js":
/*!********************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/antd/es/tree/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree */ "../../node_modules/antd/es/tree/Tree.js");

/* harmony default export */ __webpack_exports__["default"] = (_Tree__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../node_modules/antd/es/tree/style/css.js":
/*!************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/antd/es/tree/style/css.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../../node_modules/antd/es/tree/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _checkbox_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../checkbox/style/css */ "../../node_modules/antd/es/checkbox/style/css.js");


// style dependencies


/***/ }),

/***/ "../../node_modules/antd/es/tree/style/index.css":
/*!***************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/antd/es/tree/style/index.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../../node_modules/css-loader/index.js!../../node_modules/antd/es/tree/style/index.css");

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

/***/ "../../node_modules/antd/es/tree/util.js":
/*!*******************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/antd/es/tree/util.js ***!
  \*******************************************************************************/
/*! exports provided: getFullKeyList, calcRangeKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullKeyList", function() { return getFullKeyList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcRangeKeys", function() { return calcRangeKeys; });
/* harmony import */ var rc_tree_es_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-tree/es/util */ "../../node_modules/rc-tree/es/util.js");

var Record;
(function (Record) {
    Record[Record["None"] = 0] = "None";
    Record[Record["Start"] = 1] = "Start";
    Record[Record["End"] = 2] = "End";
})(Record || (Record = {}));
// TODO: Move this logic into `rc-tree`
function traverseNodesKey(rootChildren, callback) {
    var nodeList = Object(rc_tree_es_util__WEBPACK_IMPORTED_MODULE_0__["getNodeChildren"])(rootChildren) || [];
    function processNode(node) {
        var key = node.key,
            children = node.props.children;

        if (callback(key) !== false) {
            traverseNodesKey(children, callback);
        }
    }
    nodeList.forEach(processNode);
}
function getFullKeyList(children) {
    var _convertTreeToEntitie = Object(rc_tree_es_util__WEBPACK_IMPORTED_MODULE_0__["convertTreeToEntities"])(children),
        keyEntities = _convertTreeToEntitie.keyEntities;

    return Object.keys(keyEntities);
}
/** 计算选中范围，只考虑expanded情况以优化性能 */
function calcRangeKeys(rootChildren, expandedKeys, startKey, endKey) {
    var keys = [];
    var record = Record.None;
    if (startKey && startKey === endKey) {
        return [startKey];
    }
    if (!startKey || !endKey) {
        return [];
    }
    function matchKey(key) {
        return key === startKey || key === endKey;
    }
    traverseNodesKey(rootChildren, function (key) {
        if (record === Record.End) {
            return false;
        }
        if (matchKey(key)) {
            // Match test
            keys.push(key);
            if (record === Record.None) {
                record = Record.Start;
            } else if (record === Record.Start) {
                record = Record.End;
                return false;
            }
        } else if (record === Record.Start) {
            // Append selection
            keys.push(key);
        }
        if (expandedKeys.indexOf(key) === -1) {
            return false;
        }
        return true;
    });
    return keys;
}

/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../node_modules/antd/es/checkbox/style/index.css":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/antd/es/checkbox/style/index.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n@-webkit-keyframes antCheckboxEffect {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    -webkit-transform: scale(1.6);\n            transform: scale(1.6);\n    opacity: 0;\n  }\n}\n@keyframes antCheckboxEffect {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    -webkit-transform: scale(1.6);\n            transform: scale(1.6);\n    opacity: 0;\n  }\n}\n.ant-checkbox {\n  font-family: \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  display: inline-block;\n  line-height: 1;\n  position: relative;\n  vertical-align: middle;\n  top: -0.09em;\n}\n.ant-checkbox-wrapper:hover .ant-checkbox-inner,\n.ant-checkbox:hover .ant-checkbox-inner,\n.ant-checkbox-input:focus + .ant-checkbox-inner {\n  border-color: #1890ff;\n}\n.ant-checkbox-checked:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 2px;\n  border: 1px solid #1890ff;\n  content: '';\n  -webkit-animation: antCheckboxEffect 0.36s ease-in-out;\n          animation: antCheckboxEffect 0.36s ease-in-out;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  visibility: hidden;\n}\n.ant-checkbox:hover:after,\n.ant-checkbox-wrapper:hover .ant-checkbox:after {\n  visibility: visible;\n}\n.ant-checkbox-inner {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 16px;\n  height: 16px;\n  border: 1px solid #d9d9d9;\n  border-radius: 2px;\n  background-color: #fff;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.ant-checkbox-inner:after {\n  -webkit-transform: rotate(45deg) scale(0);\n      -ms-transform: rotate(45deg) scale(0);\n          transform: rotate(45deg) scale(0);\n  position: absolute;\n  left: 4.57142857px;\n  top: 1.14285714px;\n  display: table;\n  width: 5.71428571px;\n  height: 9.14285714px;\n  border: 2px solid #fff;\n  border-top: 0;\n  border-left: 0;\n  content: ' ';\n  -webkit-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;\n  transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;\n  opacity: 0;\n}\n.ant-checkbox-input {\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  cursor: pointer;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n.ant-checkbox-indeterminate .ant-checkbox-inner:after {\n  content: ' ';\n  -webkit-transform: translate(-50%, -50%) scale(1);\n      -ms-transform: translate(-50%, -50%) scale(1);\n          transform: translate(-50%, -50%) scale(1);\n  border: 0;\n  left: 50%;\n  top: 50%;\n  width: 8px;\n  height: 8px;\n  background-color: #1890ff;\n  opacity: 1;\n}\n.ant-checkbox-indeterminate.ant-checkbox-disabled .ant-checkbox-inner:after {\n  border-color: rgba(0, 0, 0, 0.25);\n}\n.ant-checkbox-checked .ant-checkbox-inner:after {\n  -webkit-transform: rotate(45deg) scale(1);\n      -ms-transform: rotate(45deg) scale(1);\n          transform: rotate(45deg) scale(1);\n  position: absolute;\n  display: table;\n  border: 2px solid #fff;\n  border-top: 0;\n  border-left: 0;\n  content: ' ';\n  -webkit-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;\n  transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;\n  opacity: 1;\n}\n.ant-checkbox-checked .ant-checkbox-inner {\n  background-color: #1890ff;\n  border-color: #1890ff;\n}\n.ant-checkbox-disabled {\n  cursor: not-allowed;\n}\n.ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner:after {\n  -webkit-animation-name: none;\n          animation-name: none;\n  border-color: rgba(0, 0, 0, 0.25);\n}\n.ant-checkbox-disabled .ant-checkbox-input {\n  cursor: not-allowed;\n}\n.ant-checkbox-disabled .ant-checkbox-inner {\n  border-color: #d9d9d9 !important;\n  background-color: #f5f5f5;\n}\n.ant-checkbox-disabled .ant-checkbox-inner:after {\n  -webkit-animation-name: none;\n          animation-name: none;\n  border-color: #f5f5f5;\n}\n.ant-checkbox-disabled + span {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\n.ant-checkbox-wrapper {\n  font-family: \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  line-height: unset;\n  cursor: pointer;\n  display: inline-block;\n}\n.ant-checkbox-wrapper + .ant-checkbox-wrapper {\n  margin-left: 8px;\n}\n.ant-checkbox-wrapper + span,\n.ant-checkbox + span {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.ant-checkbox-group {\n  font-family: \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: inline-block;\n}\n.ant-checkbox-group-item {\n  display: inline-block;\n  margin-right: 8px;\n}\n.ant-checkbox-group-item:last-child {\n  margin-right: 0;\n}\n.ant-checkbox-group-item + .ant-checkbox-group-item {\n  margin-left: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../node_modules/antd/es/tree/style/index.css":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/css-loader!/Users/bliashenko/Learning/codecrumbs/node_modules/antd/es/tree/style/index.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n@-webkit-keyframes antCheckboxEffect {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    -webkit-transform: scale(1.6);\n            transform: scale(1.6);\n    opacity: 0;\n  }\n}\n@keyframes antCheckboxEffect {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    -webkit-transform: scale(1.6);\n            transform: scale(1.6);\n    opacity: 0;\n  }\n}\n.ant-tree.ant-tree-directory {\n  position: relative;\n}\n.ant-tree.ant-tree-directory > li span.ant-tree-switcher,\n.ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-switcher {\n  position: relative;\n  z-index: 1;\n}\n.ant-tree.ant-tree-directory > li span.ant-tree-switcher.ant-tree-switcher-noop,\n.ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-switcher.ant-tree-switcher-noop {\n  pointer-events: none;\n}\n.ant-tree.ant-tree-directory > li span.ant-tree-checkbox,\n.ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-checkbox {\n  position: relative;\n  z-index: 1;\n}\n.ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper,\n.ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 0;\n}\n.ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper:hover,\n.ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper:hover {\n  background: transparent;\n}\n.ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper:hover:before,\n.ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper:hover:before {\n  background: #e6f7ff;\n}\n.ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper.ant-tree-node-selected,\n.ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper.ant-tree-node-selected {\n  color: #fff;\n  background: transparent;\n}\n.ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper:before,\n.ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 24px;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper > span,\n.ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper > span {\n  position: relative;\n  z-index: 1;\n}\n.ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-switcher,\n.ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-switcher {\n  color: #fff;\n}\n.ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-checkbox .ant-tree-checkbox-inner,\n.ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-checkbox .ant-tree-checkbox-inner {\n  border-color: #1890ff;\n}\n.ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked:after,\n.ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked:after {\n  border-color: #fff;\n}\n.ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked .ant-tree-checkbox-inner,\n.ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked .ant-tree-checkbox-inner {\n  background: #fff;\n}\n.ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked .ant-tree-checkbox-inner:after,\n.ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked .ant-tree-checkbox-inner:after {\n  border-color: #1890ff;\n}\n.ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-node-content-wrapper:before,\n.ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-node-content-wrapper:before {\n  background: #1890ff;\n}\n.ant-tree-checkbox {\n  font-family: \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  display: inline-block;\n  line-height: 1;\n  position: relative;\n  vertical-align: middle;\n  top: -0.09em;\n}\n.ant-tree-checkbox-wrapper:hover .ant-tree-checkbox-inner,\n.ant-tree-checkbox:hover .ant-tree-checkbox-inner,\n.ant-tree-checkbox-input:focus + .ant-tree-checkbox-inner {\n  border-color: #1890ff;\n}\n.ant-tree-checkbox-checked:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 2px;\n  border: 1px solid #1890ff;\n  content: '';\n  -webkit-animation: antCheckboxEffect 0.36s ease-in-out;\n          animation: antCheckboxEffect 0.36s ease-in-out;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  visibility: hidden;\n}\n.ant-tree-checkbox:hover:after,\n.ant-tree-checkbox-wrapper:hover .ant-tree-checkbox:after {\n  visibility: visible;\n}\n.ant-tree-checkbox-inner {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 16px;\n  height: 16px;\n  border: 1px solid #d9d9d9;\n  border-radius: 2px;\n  background-color: #fff;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.ant-tree-checkbox-inner:after {\n  -webkit-transform: rotate(45deg) scale(0);\n      -ms-transform: rotate(45deg) scale(0);\n          transform: rotate(45deg) scale(0);\n  position: absolute;\n  left: 4.57142857px;\n  top: 1.14285714px;\n  display: table;\n  width: 5.71428571px;\n  height: 9.14285714px;\n  border: 2px solid #fff;\n  border-top: 0;\n  border-left: 0;\n  content: ' ';\n  -webkit-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;\n  transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;\n  opacity: 0;\n}\n.ant-tree-checkbox-input {\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  cursor: pointer;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n.ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner:after {\n  content: ' ';\n  -webkit-transform: translate(-50%, -50%) scale(1);\n      -ms-transform: translate(-50%, -50%) scale(1);\n          transform: translate(-50%, -50%) scale(1);\n  border: 0;\n  left: 50%;\n  top: 50%;\n  width: 8px;\n  height: 8px;\n  background-color: #1890ff;\n  opacity: 1;\n}\n.ant-tree-checkbox-indeterminate.ant-tree-checkbox-disabled .ant-tree-checkbox-inner:after {\n  border-color: rgba(0, 0, 0, 0.25);\n}\n.ant-tree-checkbox-checked .ant-tree-checkbox-inner:after {\n  -webkit-transform: rotate(45deg) scale(1);\n      -ms-transform: rotate(45deg) scale(1);\n          transform: rotate(45deg) scale(1);\n  position: absolute;\n  display: table;\n  border: 2px solid #fff;\n  border-top: 0;\n  border-left: 0;\n  content: ' ';\n  -webkit-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;\n  transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;\n  opacity: 1;\n}\n.ant-tree-checkbox-checked .ant-tree-checkbox-inner {\n  background-color: #1890ff;\n  border-color: #1890ff;\n}\n.ant-tree-checkbox-disabled {\n  cursor: not-allowed;\n}\n.ant-tree-checkbox-disabled.ant-tree-checkbox-checked .ant-tree-checkbox-inner:after {\n  -webkit-animation-name: none;\n          animation-name: none;\n  border-color: rgba(0, 0, 0, 0.25);\n}\n.ant-tree-checkbox-disabled .ant-tree-checkbox-input {\n  cursor: not-allowed;\n}\n.ant-tree-checkbox-disabled .ant-tree-checkbox-inner {\n  border-color: #d9d9d9 !important;\n  background-color: #f5f5f5;\n}\n.ant-tree-checkbox-disabled .ant-tree-checkbox-inner:after {\n  -webkit-animation-name: none;\n          animation-name: none;\n  border-color: #f5f5f5;\n}\n.ant-tree-checkbox-disabled + span {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\n.ant-tree-checkbox-wrapper {\n  font-family: \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  line-height: unset;\n  cursor: pointer;\n  display: inline-block;\n}\n.ant-tree-checkbox-wrapper + .ant-tree-checkbox-wrapper {\n  margin-left: 8px;\n}\n.ant-tree-checkbox-wrapper + span,\n.ant-tree-checkbox + span {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.ant-tree-checkbox-group {\n  font-family: \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: inline-block;\n}\n.ant-tree-checkbox-group-item {\n  display: inline-block;\n  margin-right: 8px;\n}\n.ant-tree-checkbox-group-item:last-child {\n  margin-right: 0;\n}\n.ant-tree-checkbox-group-item + .ant-tree-checkbox-group-item {\n  margin-left: 0;\n}\n.ant-tree {\n  font-family: \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.ant-tree ol,\n.ant-tree ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.ant-tree li {\n  padding: 4px 0;\n  margin: 0;\n  list-style: none;\n  white-space: nowrap;\n  outline: 0;\n}\n.ant-tree li span[draggable],\n.ant-tree li span[draggable=\"true\"] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-top: 2px transparent solid;\n  border-bottom: 2px transparent solid;\n  /* Required to make elements draggable in old WebKit */\n  -khtml-user-drag: element;\n  -webkit-user-drag: element;\n  line-height: 20px;\n}\n.ant-tree li.drag-over > span[draggable] {\n  background-color: #1890ff;\n  color: white;\n  opacity: 0.8;\n}\n.ant-tree li.drag-over-gap-top > span[draggable] {\n  border-top-color: #1890ff;\n}\n.ant-tree li.drag-over-gap-bottom > span[draggable] {\n  border-bottom-color: #1890ff;\n}\n.ant-tree li.filter-node > span {\n  color: #f5222d !important;\n  font-weight: 500 !important;\n}\n.ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-loading-icon,\n.ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-loading-icon {\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  width: 24px;\n  height: 24px;\n  color: #1890ff;\n  -webkit-transform: none;\n      -ms-transform: none;\n          transform: none;\n  font-size: 14px;\n}\n.ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-loading-icon svg,\n.ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-loading-icon svg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n}\n:root .ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_open:after,\n:root .ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_close:after {\n  opacity: 0;\n}\n.ant-tree li ul {\n  margin: 0;\n  padding: 0 0 0 18px;\n}\n.ant-tree li .ant-tree-node-content-wrapper {\n  display: inline-block;\n  padding: 0 5px;\n  border-radius: 2px;\n  margin: 0;\n  cursor: pointer;\n  text-decoration: none;\n  vertical-align: top;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  height: 24px;\n  line-height: 24px;\n}\n.ant-tree li .ant-tree-node-content-wrapper:hover {\n  background-color: #e6f7ff;\n}\n.ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected {\n  background-color: #bae7ff;\n}\n.ant-tree li span.ant-tree-checkbox {\n  margin: 4px 4px 0 2px;\n}\n.ant-tree li span.ant-tree-switcher,\n.ant-tree li span.ant-tree-iconEle {\n  margin: 0;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  display: inline-block;\n  vertical-align: top;\n  border: 0 none;\n  cursor: pointer;\n  outline: none;\n  text-align: center;\n}\n.ant-tree li span.ant-tree-switcher {\n  position: relative;\n}\n.ant-tree li span.ant-tree-switcher.ant-tree-switcher-noop {\n  cursor: default;\n}\n.ant-tree li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon,\n.ant-tree li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon {\n  font-size: 12px;\n  font-size: 7px \\9;\n  -webkit-transform: scale(0.58333333) rotate(0deg);\n      -ms-transform: scale(0.58333333) rotate(0deg);\n          transform: scale(0.58333333) rotate(0deg);\n  display: inline-block;\n  font-weight: bold;\n}\n:root .ant-tree li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon,\n:root .ant-tree li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon {\n  font-size: 12px;\n}\n.ant-tree li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon svg,\n.ant-tree li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon svg {\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n}\n.ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon,\n.ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon {\n  font-size: 12px;\n  font-size: 7px \\9;\n  -webkit-transform: scale(0.58333333) rotate(0deg);\n      -ms-transform: scale(0.58333333) rotate(0deg);\n          transform: scale(0.58333333) rotate(0deg);\n  display: inline-block;\n  font-weight: bold;\n}\n:root .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon,\n:root .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon {\n  font-size: 12px;\n}\n.ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon svg,\n.ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon svg {\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n}\n.ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon svg {\n  -webkit-transform: rotate(-90deg);\n      -ms-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.ant-tree li:last-child > span.ant-tree-switcher:before,\n.ant-tree li:last-child > span.ant-tree-iconEle:before {\n  display: none;\n}\n.ant-tree > li:first-child {\n  padding-top: 7px;\n}\n.ant-tree > li:last-child {\n  padding-bottom: 7px;\n}\n.ant-tree-child-tree {\n  display: none;\n}\n.ant-tree-child-tree-open {\n  display: block;\n}\nli.ant-tree-treenode-disabled > span:not(.ant-tree-switcher),\nli.ant-tree-treenode-disabled > .ant-tree-node-content-wrapper,\nli.ant-tree-treenode-disabled > .ant-tree-node-content-wrapper span {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\nli.ant-tree-treenode-disabled > .ant-tree-node-content-wrapper:hover {\n  background: transparent;\n}\n.ant-tree-icon__open {\n  margin-right: 2px;\n  vertical-align: top;\n}\n.ant-tree-icon__close {\n  margin-right: 2px;\n  vertical-align: top;\n}\n.ant-tree.ant-tree-show-line li {\n  position: relative;\n}\n.ant-tree.ant-tree-show-line li span.ant-tree-switcher {\n  background: #fff;\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher-noop .ant-tree-switcher-icon,\n.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher-noop .ant-select-switcher-icon {\n  font-size: 12px;\n  font-size: 12px \\9;\n  -webkit-transform: scale(1) rotate(0deg);\n      -ms-transform: scale(1) rotate(0deg);\n          transform: scale(1) rotate(0deg);\n  display: inline-block;\n  font-weight: normal;\n}\n:root .ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher-noop .ant-tree-switcher-icon,\n:root .ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher-noop .ant-select-switcher-icon {\n  font-size: 12px;\n}\n.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher-noop .ant-tree-switcher-icon svg,\n.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher-noop .ant-select-switcher-icon svg {\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n}\n.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon,\n.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon {\n  font-size: 12px;\n  font-size: 12px \\9;\n  -webkit-transform: scale(1) rotate(0deg);\n      -ms-transform: scale(1) rotate(0deg);\n          transform: scale(1) rotate(0deg);\n  display: inline-block;\n  font-weight: normal;\n}\n:root .ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon,\n:root .ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon {\n  font-size: 12px;\n}\n.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon svg,\n.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon svg {\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n}\n.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon,\n.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon {\n  font-size: 12px;\n  font-size: 12px \\9;\n  -webkit-transform: scale(1) rotate(0deg);\n      -ms-transform: scale(1) rotate(0deg);\n          transform: scale(1) rotate(0deg);\n  display: inline-block;\n  font-weight: normal;\n}\n:root .ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon,\n:root .ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon {\n  font-size: 12px;\n}\n.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon svg,\n.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon svg {\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n}\n.ant-tree.ant-tree-show-line li:not(:last-child):before {\n  content: ' ';\n  width: 1px;\n  border-left: 1px solid #d9d9d9;\n  height: 100%;\n  position: absolute;\n  left: 12px;\n  margin: 22px 0;\n}\n.ant-tree.ant-tree-icon-hide .ant-tree-treenode-loading .ant-tree-iconEle {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/lodash/_Symbol.js":
/*!****************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/lodash/_Symbol.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "../../node_modules/lodash/_baseGetTag.js":
/*!********************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/lodash/_baseGetTag.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "../../node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "../../node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "../../node_modules/lodash/_freeGlobal.js":
/*!********************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/lodash/_freeGlobal.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/lodash/_getRawTag.js":
/*!*******************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/lodash/_getRawTag.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "../../node_modules/lodash/_objectToString.js":
/*!************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/lodash/_objectToString.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "../../node_modules/lodash/_root.js":
/*!**************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/lodash/_root.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "../../node_modules/lodash/debounce.js":
/*!*****************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/lodash/debounce.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "../../node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "../../node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "../../node_modules/lodash/isObject.js":
/*!*****************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/lodash/isObject.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "../../node_modules/lodash/isObjectLike.js":
/*!*********************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/lodash/isObjectLike.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "../../node_modules/lodash/isSymbol.js":
/*!*****************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/lodash/isSymbol.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "../../node_modules/lodash/now.js":
/*!************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/lodash/now.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "../../node_modules/lodash/toNumber.js":
/*!*****************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/lodash/toNumber.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "../../node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "../../node_modules/rc-tree/es/Tree.js":
/*!*****************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/rc-tree/es/Tree.js ***!
  \*****************************************************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! warning */ "../../node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "../../node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-lifecycles-compat */ "../../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _contextTypes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contextTypes */ "../../node_modules/rc-tree/es/contextTypes.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./util */ "../../node_modules/rc-tree/es/util.js");
















var Tree = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Tree, _React$Component);

  function Tree() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Tree);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_ref = Tree.__proto__ || Object.getPrototypeOf(Tree)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      // TODO: Remove this eslint
      posEntities: {}, // eslint-disable-line react/no-unused-state
      keyEntities: {},

      selectedKeys: [],
      checkedKeys: [],
      halfCheckedKeys: [],
      loadedKeys: [],
      loadingKeys: [],

      treeNode: []
    }, _this.onNodeDragStart = function (event, node) {
      var expandedKeys = _this.state.expandedKeys;
      var onDragStart = _this.props.onDragStart;
      var _node$props = node.props,
          eventKey = _node$props.eventKey,
          children = _node$props.children;


      _this.dragNode = node;

      _this.setState({
        dragNodesKeys: Object(_util__WEBPACK_IMPORTED_MODULE_13__["getDragNodesKeys"])(children, node),
        expandedKeys: Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrDel"])(expandedKeys, eventKey)
      });

      if (onDragStart) {
        onDragStart({ event: event, node: node });
      }
    }, _this.onNodeDragEnter = function (event, node) {
      var expandedKeys = _this.state.expandedKeys;
      var onDragEnter = _this.props.onDragEnter;
      var _node$props2 = node.props,
          pos = _node$props2.pos,
          eventKey = _node$props2.eventKey;


      if (!_this.dragNode) return;

      var dropPosition = Object(_util__WEBPACK_IMPORTED_MODULE_13__["calcDropPosition"])(event, node);

      // Skip if drag node is self
      if (_this.dragNode.props.eventKey === eventKey && dropPosition === 0) {
        _this.setState({
          dragOverNodeKey: '',
          dropPosition: null
        });
        return;
      }

      // Ref: https://github.com/react-component/tree/issues/132
      // Add timeout to let onDragLevel fire before onDragEnter,
      // so that we can clean drag props for onDragLeave node.
      // Macro task for this:
      // https://html.spec.whatwg.org/multipage/webappapis.html#clean-up-after-running-script
      setTimeout(function () {
        // Update drag over node
        _this.setState({
          dragOverNodeKey: eventKey,
          dropPosition: dropPosition
        });

        // Side effect for delay drag
        if (!_this.delayedDragEnterLogic) {
          _this.delayedDragEnterLogic = {};
        }
        Object.keys(_this.delayedDragEnterLogic).forEach(function (key) {
          clearTimeout(_this.delayedDragEnterLogic[key]);
        });
        _this.delayedDragEnterLogic[pos] = setTimeout(function () {
          var newExpandedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrAdd"])(expandedKeys, eventKey);
          _this.setState({
            expandedKeys: newExpandedKeys
          });

          if (onDragEnter) {
            onDragEnter({ event: event, node: node, expandedKeys: newExpandedKeys });
          }
        }, 400);
      }, 0);
    }, _this.onNodeDragOver = function (event, node) {
      var onDragOver = _this.props.onDragOver;
      var eventKey = node.props.eventKey;

      // Update drag position

      if (_this.dragNode && eventKey === _this.state.dragOverNodeKey) {
        var dropPosition = Object(_util__WEBPACK_IMPORTED_MODULE_13__["calcDropPosition"])(event, node);

        if (dropPosition === _this.state.dropPosition) return;

        _this.setState({
          dropPosition: dropPosition
        });
      }

      if (onDragOver) {
        onDragOver({ event: event, node: node });
      }
    }, _this.onNodeDragLeave = function (event, node) {
      var onDragLeave = _this.props.onDragLeave;


      _this.setState({
        dragOverNodeKey: ''
      });

      if (onDragLeave) {
        onDragLeave({ event: event, node: node });
      }
    }, _this.onNodeDragEnd = function (event, node) {
      var onDragEnd = _this.props.onDragEnd;

      _this.setState({
        dragOverNodeKey: ''
      });
      if (onDragEnd) {
        onDragEnd({ event: event, node: node });
      }
    }, _this.onNodeDrop = function (event, node) {
      var _this$state = _this.state,
          _this$state$dragNodes = _this$state.dragNodesKeys,
          dragNodesKeys = _this$state$dragNodes === undefined ? [] : _this$state$dragNodes,
          dropPosition = _this$state.dropPosition;
      var onDrop = _this.props.onDrop;
      var _node$props3 = node.props,
          eventKey = _node$props3.eventKey,
          pos = _node$props3.pos;


      _this.setState({
        dragOverNodeKey: ''
      });

      if (dragNodesKeys.indexOf(eventKey) !== -1) {
        warning__WEBPACK_IMPORTED_MODULE_9___default()(false, 'Can not drop to dragNode(include it\'s children node)');
        return;
      }

      var posArr = Object(_util__WEBPACK_IMPORTED_MODULE_13__["posToArr"])(pos);

      var dropResult = {
        event: event,
        node: node,
        dragNode: _this.dragNode,
        dragNodesKeys: dragNodesKeys.slice(),
        dropPosition: dropPosition + Number(posArr[posArr.length - 1])
      };

      if (dropPosition !== 0) {
        dropResult.dropToGap = true;
      }

      if (onDrop) {
        onDrop(dropResult);
      }
    }, _this.onNodeClick = function (e, treeNode) {
      var onClick = _this.props.onClick;

      if (onClick) {
        onClick(e, treeNode);
      }
    }, _this.onNodeDoubleClick = function (e, treeNode) {
      var onDoubleClick = _this.props.onDoubleClick;

      if (onDoubleClick) {
        onDoubleClick(e, treeNode);
      }
    }, _this.onNodeSelect = function (e, treeNode) {
      var selectedKeys = _this.state.selectedKeys;
      var keyEntities = _this.state.keyEntities;
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          multiple = _this$props.multiple;
      var _treeNode$props = treeNode.props,
          selected = _treeNode$props.selected,
          eventKey = _treeNode$props.eventKey;

      var targetSelected = !selected;

      // Update selected keys
      if (!targetSelected) {
        selectedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrDel"])(selectedKeys, eventKey);
      } else if (!multiple) {
        selectedKeys = [eventKey];
      } else {
        selectedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrAdd"])(selectedKeys, eventKey);
      }

      // [Legacy] Not found related usage in doc or upper libs
      var selectedNodes = selectedKeys.map(function (key) {
        var entity = keyEntities[key];
        if (!entity) return null;

        return entity.node;
      }).filter(function (node) {
        return node;
      });

      _this.setUncontrolledState({ selectedKeys: selectedKeys });

      if (onSelect) {
        var eventObj = {
          event: 'select',
          selected: targetSelected,
          node: treeNode,
          selectedNodes: selectedNodes,
          nativeEvent: e.nativeEvent
        };
        onSelect(selectedKeys, eventObj);
      }
    }, _this.onNodeCheck = function (e, treeNode, checked) {
      var _this$state2 = _this.state,
          keyEntities = _this$state2.keyEntities,
          oriCheckedKeys = _this$state2.checkedKeys,
          oriHalfCheckedKeys = _this$state2.halfCheckedKeys;
      var _this$props2 = _this.props,
          checkStrictly = _this$props2.checkStrictly,
          onCheck = _this$props2.onCheck;
      var eventKey = treeNode.props.eventKey;

      // Prepare trigger arguments

      var checkedObj = void 0;
      var eventObj = {
        event: 'check',
        node: treeNode,
        checked: checked,
        nativeEvent: e.nativeEvent
      };

      if (checkStrictly) {
        var checkedKeys = checked ? Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrAdd"])(oriCheckedKeys, eventKey) : Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrDel"])(oriCheckedKeys, eventKey);
        var halfCheckedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrDel"])(oriHalfCheckedKeys, eventKey);
        checkedObj = { checked: checkedKeys, halfChecked: halfCheckedKeys };

        eventObj.checkedNodes = checkedKeys.map(function (key) {
          return keyEntities[key];
        }).filter(function (entity) {
          return entity;
        }).map(function (entity) {
          return entity.node;
        });

        _this.setUncontrolledState({ checkedKeys: checkedKeys });
      } else {
        var _conductCheck = Object(_util__WEBPACK_IMPORTED_MODULE_13__["conductCheck"])([eventKey], checked, keyEntities, {
          checkedKeys: oriCheckedKeys, halfCheckedKeys: oriHalfCheckedKeys
        }),
            _checkedKeys = _conductCheck.checkedKeys,
            _halfCheckedKeys = _conductCheck.halfCheckedKeys;

        checkedObj = _checkedKeys;

        // [Legacy] This is used for `rc-tree-select`
        eventObj.checkedNodes = [];
        eventObj.checkedNodesPositions = [];
        eventObj.halfCheckedKeys = _halfCheckedKeys;

        _checkedKeys.forEach(function (key) {
          var entity = keyEntities[key];
          if (!entity) return;

          var node = entity.node,
              pos = entity.pos;


          eventObj.checkedNodes.push(node);
          eventObj.checkedNodesPositions.push({ node: node, pos: pos });
        });

        _this.setUncontrolledState({
          checkedKeys: _checkedKeys,
          halfCheckedKeys: _halfCheckedKeys
        });
      }

      if (onCheck) {
        onCheck(checkedObj, eventObj);
      }
    }, _this.onNodeLoad = function (treeNode) {
      return new Promise(function (resolve) {
        // We need to get the latest state of loading/loaded keys
        _this.setState(function (_ref2) {
          var _ref2$loadedKeys = _ref2.loadedKeys,
              loadedKeys = _ref2$loadedKeys === undefined ? [] : _ref2$loadedKeys,
              _ref2$loadingKeys = _ref2.loadingKeys,
              loadingKeys = _ref2$loadingKeys === undefined ? [] : _ref2$loadingKeys;
          var _this$props3 = _this.props,
              loadData = _this$props3.loadData,
              onLoad = _this$props3.onLoad;
          var eventKey = treeNode.props.eventKey;


          if (!loadData || loadedKeys.indexOf(eventKey) !== -1 || loadingKeys.indexOf(eventKey) !== -1) {
            // react 15 will warn if return null
            return {};
          }

          // Process load data
          var promise = loadData(treeNode);
          promise.then(function () {
            var newLoadedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrAdd"])(_this.state.loadedKeys, eventKey);
            _this.setUncontrolledState({
              loadedKeys: newLoadedKeys
            });
            _this.setState({
              loadingKeys: Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrDel"])(_this.state.loadingKeys, eventKey)
            });

            if (onLoad) {
              var eventObj = {
                event: 'load',
                node: treeNode
              };
              onLoad(newLoadedKeys, eventObj);
            }

            resolve();
          });

          return {
            loadingKeys: Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrAdd"])(loadingKeys, eventKey)
          };
        });
      });
    }, _this.onNodeExpand = function (e, treeNode) {
      var expandedKeys = _this.state.expandedKeys;
      var _this$props4 = _this.props,
          onExpand = _this$props4.onExpand,
          loadData = _this$props4.loadData;
      var _treeNode$props2 = treeNode.props,
          eventKey = _treeNode$props2.eventKey,
          expanded = _treeNode$props2.expanded;

      // Update selected keys

      var index = expandedKeys.indexOf(eventKey);
      var targetExpanded = !expanded;

      warning__WEBPACK_IMPORTED_MODULE_9___default()(expanded && index !== -1 || !expanded && index === -1, 'Expand state not sync with index check');

      if (targetExpanded) {
        expandedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrAdd"])(expandedKeys, eventKey);
      } else {
        expandedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrDel"])(expandedKeys, eventKey);
      }

      _this.setUncontrolledState({ expandedKeys: expandedKeys });

      if (onExpand) {
        onExpand(expandedKeys, {
          node: treeNode,
          expanded: targetExpanded,
          nativeEvent: e.nativeEvent
        });
      }

      // Async Load data
      if (targetExpanded && loadData) {
        var loadPromise = _this.onNodeLoad(treeNode);
        return loadPromise ? loadPromise.then(function () {
          // [Legacy] Refresh logic
          _this.setUncontrolledState({ expandedKeys: expandedKeys });
        }) : null;
      }

      return null;
    }, _this.onNodeMouseEnter = function (event, node) {
      var onMouseEnter = _this.props.onMouseEnter;

      if (onMouseEnter) {
        onMouseEnter({ event: event, node: node });
      }
    }, _this.onNodeMouseLeave = function (event, node) {
      var onMouseLeave = _this.props.onMouseLeave;

      if (onMouseLeave) {
        onMouseLeave({ event: event, node: node });
      }
    }, _this.onNodeContextMenu = function (event, node) {
      var onRightClick = _this.props.onRightClick;

      if (onRightClick) {
        event.preventDefault();
        onRightClick({ event: event, node: node });
      }
    }, _this.setUncontrolledState = function (state) {
      var needSync = false;
      var newState = {};

      Object.keys(state).forEach(function (name) {
        if (name in _this.props) return;

        needSync = true;
        newState[name] = state[name];
      });

      if (needSync) {
        _this.setState(newState);
      }
    }, _this.isKeyChecked = function (key) {
      var _this$state$checkedKe = _this.state.checkedKeys,
          checkedKeys = _this$state$checkedKe === undefined ? [] : _this$state$checkedKe;

      return checkedKeys.indexOf(key) !== -1;
    }, _this.renderTreeNode = function (child, index) {
      var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var _this$state3 = _this.state,
          keyEntities = _this$state3.keyEntities,
          _this$state3$expanded = _this$state3.expandedKeys,
          expandedKeys = _this$state3$expanded === undefined ? [] : _this$state3$expanded,
          _this$state3$selected = _this$state3.selectedKeys,
          selectedKeys = _this$state3$selected === undefined ? [] : _this$state3$selected,
          _this$state3$halfChec = _this$state3.halfCheckedKeys,
          halfCheckedKeys = _this$state3$halfChec === undefined ? [] : _this$state3$halfChec,
          _this$state3$loadedKe = _this$state3.loadedKeys,
          loadedKeys = _this$state3$loadedKe === undefined ? [] : _this$state3$loadedKe,
          _this$state3$loadingK = _this$state3.loadingKeys,
          loadingKeys = _this$state3$loadingK === undefined ? [] : _this$state3$loadingK,
          dragOverNodeKey = _this$state3.dragOverNodeKey,
          dropPosition = _this$state3.dropPosition;

      var pos = Object(_util__WEBPACK_IMPORTED_MODULE_13__["getPosition"])(level, index);
      var key = child.key || pos;

      if (!keyEntities[key]) {
        Object(_util__WEBPACK_IMPORTED_MODULE_13__["warnOnlyTreeNode"])();
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(child, {
        key: key,
        eventKey: key,
        expanded: expandedKeys.indexOf(key) !== -1,
        selected: selectedKeys.indexOf(key) !== -1,
        loaded: loadedKeys.indexOf(key) !== -1,
        loading: loadingKeys.indexOf(key) !== -1,
        checked: _this.isKeyChecked(key),
        halfChecked: halfCheckedKeys.indexOf(key) !== -1,
        pos: pos,

        // [Legacy] Drag props
        dragOver: dragOverNodeKey === key && dropPosition === 0,
        dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
        dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
      });
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Tree, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          selectable = _props.selectable,
          showIcon = _props.showIcon,
          icon = _props.icon,
          draggable = _props.draggable,
          checkable = _props.checkable,
          checkStrictly = _props.checkStrictly,
          disabled = _props.disabled,
          loadData = _props.loadData,
          filterTreeNode = _props.filterTreeNode,
          openTransitionName = _props.openTransitionName,
          openAnimation = _props.openAnimation,
          switcherIcon = _props.switcherIcon;


      return {
        rcTree: {
          // root: this,

          prefixCls: prefixCls,
          selectable: selectable,
          showIcon: showIcon,
          icon: icon,
          switcherIcon: switcherIcon,
          draggable: draggable,
          checkable: checkable,
          checkStrictly: checkStrictly,
          disabled: disabled,
          openTransitionName: openTransitionName,
          openAnimation: openAnimation,

          loadData: loadData,
          filterTreeNode: filterTreeNode,
          renderTreeNode: this.renderTreeNode,
          isKeyChecked: this.isKeyChecked,

          onNodeClick: this.onNodeClick,
          onNodeDoubleClick: this.onNodeDoubleClick,
          onNodeExpand: this.onNodeExpand,
          onNodeSelect: this.onNodeSelect,
          onNodeCheck: this.onNodeCheck,
          onNodeLoad: this.onNodeLoad,
          onNodeMouseEnter: this.onNodeMouseEnter,
          onNodeMouseLeave: this.onNodeMouseLeave,
          onNodeContextMenu: this.onNodeContextMenu,
          onNodeDragStart: this.onNodeDragStart,
          onNodeDragEnter: this.onNodeDragEnter,
          onNodeDragOver: this.onNodeDragOver,
          onNodeDragLeave: this.onNodeDragLeave,
          onNodeDragEnd: this.onNodeDragEnd,
          onNodeDrop: this.onNodeDrop
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var treeNode = this.state.treeNode;
      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          className = _props2.className,
          focusable = _props2.focusable,
          showLine = _props2.showLine,
          _props2$tabIndex = _props2.tabIndex,
          tabIndex = _props2$tabIndex === undefined ? 0 : _props2$tabIndex;

      var domProps = Object(_util__WEBPACK_IMPORTED_MODULE_13__["getDataAndAria"])(this.props);

      if (focusable) {
        domProps.tabIndex = tabIndex;
        domProps.onKeyDown = this.onKeyDown;
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        'ul',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, domProps, {
          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls, className, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, prefixCls + '-show-line', showLine)),
          role: 'tree',
          unselectable: 'on'
        }),
        Object(_util__WEBPACK_IMPORTED_MODULE_13__["mapChildren"])(treeNode, function (node, index) {
          return _this2.renderTreeNode(node, index);
        })
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, prevState) {
      var prevProps = prevState.prevProps;

      var newState = {
        prevProps: props
      };

      function needSync(name) {
        return !prevProps && name in props || prevProps && prevProps[name] !== props[name];
      }

      // ================== Tree Node ==================
      var treeNode = null;

      // Check if `treeData` or `children` changed and save into the state.
      if (needSync('treeData')) {
        treeNode = Object(_util__WEBPACK_IMPORTED_MODULE_13__["convertDataToTree"])(props.treeData);
      } else if (needSync('children')) {
        treeNode = Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_10__["default"])(props.children);
      }

      // Tree support filter function which will break the tree structure in the vdm.
      // We cache the treeNodes in state so that we can return the treeNode in event trigger.
      if (treeNode) {
        newState.treeNode = treeNode;

        // Calculate the entities data for quick match
        var entitiesMap = Object(_util__WEBPACK_IMPORTED_MODULE_13__["convertTreeToEntities"])(treeNode);
        newState.posEntities = entitiesMap.posEntities;
        newState.keyEntities = entitiesMap.keyEntities;
      }

      var keyEntities = newState.keyEntities || prevState.keyEntities;

      // ================ expandedKeys =================
      if (needSync('expandedKeys') || prevProps && needSync('autoExpandParent')) {
        newState.expandedKeys = props.autoExpandParent || !prevProps && props.defaultExpandParent ? Object(_util__WEBPACK_IMPORTED_MODULE_13__["conductExpandParent"])(props.expandedKeys, keyEntities) : props.expandedKeys;
      } else if (!prevProps && props.defaultExpandAll) {
        newState.expandedKeys = Object.keys(keyEntities);
      } else if (!prevProps && props.defaultExpandedKeys) {
        newState.expandedKeys = props.autoExpandParent || props.defaultExpandParent ? Object(_util__WEBPACK_IMPORTED_MODULE_13__["conductExpandParent"])(props.defaultExpandedKeys, keyEntities) : props.defaultExpandedKeys;
      }

      // ================ selectedKeys =================
      if (props.selectable) {
        if (needSync('selectedKeys')) {
          newState.selectedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["calcSelectedKeys"])(props.selectedKeys, props);
        } else if (!prevProps && props.defaultSelectedKeys) {
          newState.selectedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["calcSelectedKeys"])(props.defaultSelectedKeys, props);
        }
      }

      // ================= checkedKeys =================
      if (props.checkable) {
        var checkedKeyEntity = void 0;

        if (needSync('checkedKeys')) {
          checkedKeyEntity = Object(_util__WEBPACK_IMPORTED_MODULE_13__["parseCheckedKeys"])(props.checkedKeys) || {};
        } else if (!prevProps && props.defaultCheckedKeys) {
          checkedKeyEntity = Object(_util__WEBPACK_IMPORTED_MODULE_13__["parseCheckedKeys"])(props.defaultCheckedKeys) || {};
        } else if (treeNode) {
          // If treeNode changed, we also need check it
          checkedKeyEntity = {
            checkedKeys: prevState.checkedKeys,
            halfCheckedKeys: prevState.halfCheckedKeys
          };
        }

        if (checkedKeyEntity) {
          var _checkedKeyEntity = checkedKeyEntity,
              _checkedKeyEntity$che = _checkedKeyEntity.checkedKeys,
              checkedKeys = _checkedKeyEntity$che === undefined ? [] : _checkedKeyEntity$che,
              _checkedKeyEntity$hal = _checkedKeyEntity.halfCheckedKeys,
              halfCheckedKeys = _checkedKeyEntity$hal === undefined ? [] : _checkedKeyEntity$hal;


          if (!props.checkStrictly) {
            var conductKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["conductCheck"])(checkedKeys, true, keyEntities);
            checkedKeys = conductKeys.checkedKeys;
            halfCheckedKeys = conductKeys.halfCheckedKeys;
          }

          newState.checkedKeys = checkedKeys;
          newState.halfCheckedKeys = halfCheckedKeys;
        }
      }
      // ================= loadedKeys ==================
      if (needSync('loadedKeys')) {
        newState.loadedKeys = props.loadedKeys;
      }

      return newState;
    }

    /**
     * [Legacy] Select handler is less small than node,
     * so that this will trigger when drag enter node or select handler.
     * This is a little tricky if customize css without padding.
     * Better for use mouse move event to refresh drag state.
     * But let's just keep it to avoid event trigger logic change.
     */


    /**
     * Only update the value which is not in props
     */


    /**
     * [Legacy] Original logic use `key` as tracking clue.
     * We have to use `cloneElement` to pass `key`.
     */

  }]);

  return Tree;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Tree.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  treeData: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array, // Generate treeNode by children
  showLine: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  showIcon: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func]),
  focusable: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  checkable: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node]),
  checkStrictly: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  draggable: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  defaultExpandParent: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  autoExpandParent: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  defaultExpandAll: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  defaultExpandedKeys: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string),
  expandedKeys: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string),
  defaultCheckedKeys: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string),
  checkedKeys: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number])), prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object]),
  defaultSelectedKeys: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string),
  selectedKeys: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onDoubleClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onExpand: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onCheck: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  loadData: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  loadedKeys: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string),
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onRightClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onDragStart: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onDragEnter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onDragOver: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onDragLeave: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onDragEnd: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onDrop: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  filterTreeNode: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  openTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  openAnimation: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object]),
  switcherIcon: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func])
};
Tree.childContextTypes = _contextTypes__WEBPACK_IMPORTED_MODULE_12__["treeContextTypes"];
Tree.defaultProps = {
  prefixCls: 'rc-tree',
  showLine: false,
  showIcon: true,
  selectable: true,
  multiple: false,
  checkable: false,
  disabled: false,
  checkStrictly: false,
  draggable: false,
  defaultExpandParent: true,
  autoExpandParent: false,
  defaultExpandAll: false,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: []
};


Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_11__["polyfill"])(Tree);

/* harmony default export */ __webpack_exports__["default"] = (Tree);

/***/ }),

/***/ "../../node_modules/rc-tree/es/TreeNode.js":
/*!*********************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/rc-tree/es/TreeNode.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "../../node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-animate */ "../../node_modules/rc-animate/es/Animate.js");
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "../../node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-lifecycles-compat */ "../../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _contextTypes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contextTypes */ "../../node_modules/rc-tree/es/contextTypes.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./util */ "../../node_modules/rc-tree/es/util.js");
















var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';

var defaultTitle = '---';

var TreeNode = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(TreeNode, _React$Component);

  function TreeNode(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, TreeNode);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      dragNodeHighlight: false
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(TreeNode, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.context, {
        rcTreeNode: {
          // onUpCheckConduct: this.onUpCheckConduct,
        }
      });
    }

    // Isomorphic needn't load data in server side

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.syncLoadData(this.props);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.syncLoadData(this.props);
    }

    // Disabled item still can be switch


    // Drag usage

  }, {
    key: 'isSelectable',
    value: function isSelectable() {
      var selectable = this.props.selectable;
      var treeSelectable = this.context.rcTree.selectable;

      // Ignore when selectable is undefined or null

      if (typeof selectable === 'boolean') {
        return selectable;
      }

      return treeSelectable;
    }

    // Load data to avoid default expanded tree without data


    // Switcher


    // Checkbox


    // Icon + Title


    // Children list wrapped with `Animation`

  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var loading = this.props.loading;

      var _props = this.props,
          className = _props.className,
          style = _props.style,
          dragOver = _props.dragOver,
          dragOverGapTop = _props.dragOverGapTop,
          dragOverGapBottom = _props.dragOverGapBottom,
          isLeaf = _props.isLeaf,
          expanded = _props.expanded,
          selected = _props.selected,
          checked = _props.checked,
          halfChecked = _props.halfChecked,
          otherProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props, ['className', 'style', 'dragOver', 'dragOverGapTop', 'dragOverGapBottom', 'isLeaf', 'expanded', 'selected', 'checked', 'halfChecked']);

      var _context$rcTree = this.context.rcTree,
          prefixCls = _context$rcTree.prefixCls,
          filterTreeNode = _context$rcTree.filterTreeNode,
          draggable = _context$rcTree.draggable;

      var disabled = this.isDisabled();
      var dataOrAriaAttributeProps = Object(_util__WEBPACK_IMPORTED_MODULE_14__["getDataAndAria"])(otherProps);

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'li',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(className, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-treenode-disabled', disabled), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-treenode-switcher-' + (expanded ? 'open' : 'close'), !isLeaf), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-treenode-checkbox-checked', checked), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-treenode-checkbox-indeterminate', halfChecked), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-treenode-selected', selected), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-treenode-loading', loading), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, 'drag-over', !disabled && dragOver), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, 'drag-over-gap-top', !disabled && dragOverGapTop), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, 'drag-over-gap-bottom', !disabled && dragOverGapBottom), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, 'filter-node', filterTreeNode && filterTreeNode(this)), _classNames)),

          style: style,

          role: 'treeitem',

          onDragEnter: draggable ? this.onDragEnter : undefined,
          onDragOver: draggable ? this.onDragOver : undefined,
          onDragLeave: draggable ? this.onDragLeave : undefined,
          onDrop: draggable ? this.onDrop : undefined,
          onDragEnd: draggable ? this.onDragEnd : undefined
        }, dataOrAriaAttributeProps),
        this.renderSwitcher(),
        this.renderCheckbox(),
        this.renderSelector(),
        this.renderChildren()
      );
    }
  }]);

  return TreeNode;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

TreeNode.propTypes = {
  eventKey: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, // Pass by parent `cloneElement`
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  root: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,

  // By parent
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  loaded: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  halfChecked: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  pos: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  dragOver: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  dragOverGapTop: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  dragOverGapBottom: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,

  // By user
  isLeaf: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  disableCheckbox: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func]),
  switcherIcon: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func])
};
TreeNode.contextTypes = _contextTypes__WEBPACK_IMPORTED_MODULE_13__["nodeContextTypes"];
TreeNode.childContextTypes = _contextTypes__WEBPACK_IMPORTED_MODULE_13__["nodeContextTypes"];
TreeNode.defaultProps = {
  title: defaultTitle
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onSelectorClick = function (e) {
    // Click trigger before select/check operation
    var onNodeClick = _this2.context.rcTree.onNodeClick;

    onNodeClick(e, _this2);

    if (_this2.isSelectable()) {
      _this2.onSelect(e);
    } else {
      _this2.onCheck(e);
    }
  };

  this.onSelectorDoubleClick = function (e) {
    var onNodeDoubleClick = _this2.context.rcTree.onNodeDoubleClick;

    onNodeDoubleClick(e, _this2);
  };

  this.onSelect = function (e) {
    if (_this2.isDisabled()) return;

    var onNodeSelect = _this2.context.rcTree.onNodeSelect;

    e.preventDefault();
    onNodeSelect(e, _this2);
  };

  this.onCheck = function (e) {
    if (_this2.isDisabled()) return;

    var _props2 = _this2.props,
        disableCheckbox = _props2.disableCheckbox,
        checked = _props2.checked;
    var _context$rcTree2 = _this2.context.rcTree,
        checkable = _context$rcTree2.checkable,
        onNodeCheck = _context$rcTree2.onNodeCheck;


    if (!checkable || disableCheckbox) return;

    e.preventDefault();
    var targetChecked = !checked;
    onNodeCheck(e, _this2, targetChecked);
  };

  this.onMouseEnter = function (e) {
    var onNodeMouseEnter = _this2.context.rcTree.onNodeMouseEnter;

    onNodeMouseEnter(e, _this2);
  };

  this.onMouseLeave = function (e) {
    var onNodeMouseLeave = _this2.context.rcTree.onNodeMouseLeave;

    onNodeMouseLeave(e, _this2);
  };

  this.onContextMenu = function (e) {
    var onNodeContextMenu = _this2.context.rcTree.onNodeContextMenu;

    onNodeContextMenu(e, _this2);
  };

  this.onDragStart = function (e) {
    var onNodeDragStart = _this2.context.rcTree.onNodeDragStart;


    e.stopPropagation();
    _this2.setState({
      dragNodeHighlight: true
    });
    onNodeDragStart(e, _this2);

    try {
      // ie throw error
      // firefox-need-it
      e.dataTransfer.setData('text/plain', '');
    } catch (error) {
      // empty
    }
  };

  this.onDragEnter = function (e) {
    var onNodeDragEnter = _this2.context.rcTree.onNodeDragEnter;


    e.preventDefault();
    e.stopPropagation();
    onNodeDragEnter(e, _this2);
  };

  this.onDragOver = function (e) {
    var onNodeDragOver = _this2.context.rcTree.onNodeDragOver;


    e.preventDefault();
    e.stopPropagation();
    onNodeDragOver(e, _this2);
  };

  this.onDragLeave = function (e) {
    var onNodeDragLeave = _this2.context.rcTree.onNodeDragLeave;


    e.stopPropagation();
    onNodeDragLeave(e, _this2);
  };

  this.onDragEnd = function (e) {
    var onNodeDragEnd = _this2.context.rcTree.onNodeDragEnd;


    e.stopPropagation();
    _this2.setState({
      dragNodeHighlight: false
    });
    onNodeDragEnd(e, _this2);
  };

  this.onDrop = function (e) {
    var onNodeDrop = _this2.context.rcTree.onNodeDrop;


    e.preventDefault();
    e.stopPropagation();
    _this2.setState({
      dragNodeHighlight: false
    });
    onNodeDrop(e, _this2);
  };

  this.onExpand = function (e) {
    var onNodeExpand = _this2.context.rcTree.onNodeExpand;

    onNodeExpand(e, _this2);
  };

  this.setSelectHandle = function (node) {
    _this2.selectHandle = node;
  };

  this.getNodeChildren = function () {
    var children = _this2.props.children;

    var originList = Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_11__["default"])(children).filter(function (node) {
      return node;
    });
    var targetList = Object(_util__WEBPACK_IMPORTED_MODULE_14__["getNodeChildren"])(originList);

    if (originList.length !== targetList.length) {
      Object(_util__WEBPACK_IMPORTED_MODULE_14__["warnOnlyTreeNode"])();
    }

    return targetList;
  };

  this.getNodeState = function () {
    var expanded = _this2.props.expanded;


    if (_this2.isLeaf()) {
      return null;
    }

    return expanded ? ICON_OPEN : ICON_CLOSE;
  };

  this.isLeaf = function () {
    var _props3 = _this2.props,
        isLeaf = _props3.isLeaf,
        loaded = _props3.loaded;
    var loadData = _this2.context.rcTree.loadData;


    var hasChildren = _this2.getNodeChildren().length !== 0;

    if (isLeaf === false) {
      return false;
    }

    return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
  };

  this.isDisabled = function () {
    var disabled = _this2.props.disabled;
    var treeDisabled = _this2.context.rcTree.disabled;

    // Follow the logic of Selectable

    if (disabled === false) {
      return false;
    }

    return !!(treeDisabled || disabled);
  };

  this.syncLoadData = function (props) {
    var expanded = props.expanded,
        loading = props.loading,
        loaded = props.loaded;
    var _context$rcTree3 = _this2.context.rcTree,
        loadData = _context$rcTree3.loadData,
        onNodeLoad = _context$rcTree3.onNodeLoad;


    if (loading) return;

    // read from state to avoid loadData at same time
    if (loadData && expanded && !_this2.isLeaf()) {
      // We needn't reload data when has children in sync logic
      // It's only needed in node expanded
      var hasChildren = _this2.getNodeChildren().length !== 0;
      if (!hasChildren && !loaded) {
        onNodeLoad(_this2);
      }
    }
  };

  this.renderSwitcher = function () {
    var _props4 = _this2.props,
        expanded = _props4.expanded,
        switcherIconFromProps = _props4.switcherIcon;
    var _context$rcTree4 = _this2.context.rcTree,
        prefixCls = _context$rcTree4.prefixCls,
        switcherIconFromCtx = _context$rcTree4.switcherIcon;


    var switcherIcon = switcherIconFromProps || switcherIconFromCtx;

    if (_this2.isLeaf()) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'span',
        { className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-switcher', prefixCls + '-switcher-noop') },
        typeof switcherIcon === 'function' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(switcherIcon, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this2.props, { isLeaf: true })) : switcherIcon
      );
    }

    var switcherCls = classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-switcher', prefixCls + '-switcher_' + (expanded ? ICON_OPEN : ICON_CLOSE));
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      'span',
      { onClick: _this2.onExpand, className: switcherCls },
      typeof switcherIcon === 'function' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(switcherIcon, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this2.props, { isLeaf: false })) : switcherIcon
    );
  };

  this.renderCheckbox = function () {
    var _props5 = _this2.props,
        checked = _props5.checked,
        halfChecked = _props5.halfChecked,
        disableCheckbox = _props5.disableCheckbox;
    var _context$rcTree5 = _this2.context.rcTree,
        prefixCls = _context$rcTree5.prefixCls,
        checkable = _context$rcTree5.checkable;

    var disabled = _this2.isDisabled();

    if (!checkable) return null;

    // [Legacy] Custom element should be separate with `checkable` in future
    var $custom = typeof checkable !== 'boolean' ? checkable : null;

    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      'span',
      {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-checkbox', checked && prefixCls + '-checkbox-checked', !checked && halfChecked && prefixCls + '-checkbox-indeterminate', (disabled || disableCheckbox) && prefixCls + '-checkbox-disabled'),
        onClick: _this2.onCheck
      },
      $custom
    );
  };

  this.renderIcon = function () {
    var loading = _this2.props.loading;
    var prefixCls = _this2.context.rcTree.prefixCls;


    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('span', {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-iconEle', prefixCls + '-icon__' + (_this2.getNodeState() || 'docu'), loading && prefixCls + '-icon_loading')
    });
  };

  this.renderSelector = function () {
    var dragNodeHighlight = _this2.state.dragNodeHighlight;
    var _props6 = _this2.props,
        title = _props6.title,
        selected = _props6.selected,
        icon = _props6.icon,
        loading = _props6.loading;
    var _context$rcTree6 = _this2.context.rcTree,
        prefixCls = _context$rcTree6.prefixCls,
        showIcon = _context$rcTree6.showIcon,
        treeIcon = _context$rcTree6.icon,
        draggable = _context$rcTree6.draggable,
        loadData = _context$rcTree6.loadData;

    var disabled = _this2.isDisabled();

    var wrapClass = prefixCls + '-node-content-wrapper';

    // Icon - Still show loading icon when loading without showIcon
    var $icon = void 0;

    if (showIcon) {
      var currentIcon = icon || treeIcon;

      $icon = currentIcon ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'span',
        {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-iconEle', prefixCls + '-icon__customize')
        },
        typeof currentIcon === 'function' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(currentIcon, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this2.props)) : currentIcon
      ) : _this2.renderIcon();
    } else if (loadData && loading) {
      $icon = _this2.renderIcon();
    }

    // Title
    var $title = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      'span',
      { className: prefixCls + '-title' },
      title
    );

    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      'span',
      {
        ref: _this2.setSelectHandle,
        title: typeof title === 'string' ? title : '',
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('' + wrapClass, wrapClass + '-' + (_this2.getNodeState() || 'normal'), !disabled && (selected || dragNodeHighlight) && prefixCls + '-node-selected', !disabled && draggable && 'draggable'),
        draggable: !disabled && draggable || undefined,
        'aria-grabbed': !disabled && draggable || undefined,

        onMouseEnter: _this2.onMouseEnter,
        onMouseLeave: _this2.onMouseLeave,
        onContextMenu: _this2.onContextMenu,
        onClick: _this2.onSelectorClick,
        onDoubleClick: _this2.onSelectorDoubleClick,
        onDragStart: draggable ? _this2.onDragStart : undefined
      },
      $icon,
      $title
    );
  };

  this.renderChildren = function () {
    var _props7 = _this2.props,
        expanded = _props7.expanded,
        pos = _props7.pos;
    var _context$rcTree7 = _this2.context.rcTree,
        prefixCls = _context$rcTree7.prefixCls,
        openTransitionName = _context$rcTree7.openTransitionName,
        openAnimation = _context$rcTree7.openAnimation,
        renderTreeNode = _context$rcTree7.renderTreeNode;


    var animProps = {};
    if (openTransitionName) {
      animProps.transitionName = openTransitionName;
    } else if (typeof openAnimation === 'object') {
      animProps.animation = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, openAnimation);
    }

    // Children TreeNode
    var nodeList = _this2.getNodeChildren();

    if (nodeList.length === 0) {
      return null;
    }

    var $children = void 0;
    if (expanded) {
      $children = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'ul',
        {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-child-tree', expanded && prefixCls + '-child-tree-open'),
          'data-expanded': expanded,
          role: 'group'
        },
        Object(_util__WEBPACK_IMPORTED_MODULE_14__["mapChildren"])(nodeList, function (node, index) {
          return renderTreeNode(node, index, pos);
        })
      );
    }

    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      rc_animate__WEBPACK_IMPORTED_MODULE_10__["default"],
      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, animProps, {
        showProp: 'data-expanded',
        component: ''
      }),
      $children
    );
  };
};

TreeNode.isTreeNode = 1;

Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_12__["polyfill"])(TreeNode);

/* harmony default export */ __webpack_exports__["default"] = (TreeNode);

/***/ }),

/***/ "../../node_modules/rc-tree/es/contextTypes.js":
/*!*************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/rc-tree/es/contextTypes.js ***!
  \*************************************************************************************/
/*! exports provided: treeContextTypes, nodeContextTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeContextTypes", function() { return treeContextTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeContextTypes", function() { return nodeContextTypes; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

/**
 * Webpack has bug for import loop, which is not the same behavior as ES module.
 * When util.js imports the TreeNode for tree generate will cause treeContextTypes be empty.
 */



/**
 * Thought we still use `cloneElement` to pass `key`,
 * other props can pass with context for future refactor.
 */
var treeContextTypes = {
  rcTree: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    root: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    selectable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    showIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
    draggable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    checkable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
    checkStrictly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    openTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    openAnimation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),

    loadData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    filterTreeNode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    renderTreeNode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

    isKeyChecked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

    onNodeClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDoubleClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeExpand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeCheck: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeContextMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDragStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDragEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDragOver: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDragLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDragEnd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func

    // TODO: Remove this
    // onBatchNodeCheck: PropTypes.func,
    // onCheckConductFinished: PropTypes.func,

    // Tree will store the entities when the treeNode refresh.
    // User can pass the func to add more info to customize the additional info.
    // processTreeEntity: PropTypes.func,
  })
};

var nodeContextTypes = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, treeContextTypes, {
  rcTreeNode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    onUpCheckConduct: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  })
});

/***/ }),

/***/ "../../node_modules/rc-tree/es/index.js":
/*!******************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/rc-tree/es/index.js ***!
  \******************************************************************************/
/*! exports provided: TreeNode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree */ "../../node_modules/rc-tree/es/Tree.js");
/* harmony import */ var _TreeNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeNode */ "../../node_modules/rc-tree/es/TreeNode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return _TreeNode__WEBPACK_IMPORTED_MODULE_1__["default"]; });




_Tree__WEBPACK_IMPORTED_MODULE_0__["default"].TreeNode = _TreeNode__WEBPACK_IMPORTED_MODULE_1__["default"];


/* harmony default export */ __webpack_exports__["default"] = (_Tree__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../node_modules/rc-tree/es/util.js":
/*!*****************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/rc-tree/es/util.js ***!
  \*****************************************************************************/
/*! exports provided: warnOnlyTreeNode, arrDel, arrAdd, posToArr, getPosition, isTreeNode, getNodeChildren, isCheckDisabled, traverseTreeNodes, mapChildren, getDragNodesKeys, calcDropPosition, calcSelectedKeys, convertDataToTree, convertTreeToEntities, parseCheckedKeys, conductCheck, conductExpandParent, getDataAndAria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnlyTreeNode", function() { return warnOnlyTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrDel", function() { return arrDel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrAdd", function() { return arrAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posToArr", function() { return posToArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return getPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTreeNode", function() { return isTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeChildren", function() { return getNodeChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCheckDisabled", function() { return isCheckDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseTreeNodes", function() { return traverseTreeNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapChildren", function() { return mapChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDragNodesKeys", function() { return getDragNodesKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcDropPosition", function() { return calcDropPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcSelectedKeys", function() { return calcSelectedKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDataToTree", function() { return convertDataToTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertTreeToEntities", function() { return convertTreeToEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCheckedKeys", function() { return parseCheckedKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conductCheck", function() { return conductCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conductExpandParent", function() { return conductExpandParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataAndAria", function() { return getDataAndAria; });
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "../../node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "../../node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! warning */ "../../node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TreeNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TreeNode */ "../../node_modules/rc-tree/es/TreeNode.js");






var DRAG_SIDE_RANGE = 0.25;
var DRAG_MIN_GAP = 2;

var onlyTreeNodeWarned = false;

function warnOnlyTreeNode() {
  if (onlyTreeNodeWarned) return;

  onlyTreeNodeWarned = true;
  warning__WEBPACK_IMPORTED_MODULE_3___default()(false, 'Tree only accept TreeNode as children.');
}

function arrDel(list, value) {
  var clone = list.slice();
  var index = clone.indexOf(value);
  if (index >= 0) {
    clone.splice(index, 1);
  }
  return clone;
}

function arrAdd(list, value) {
  var clone = list.slice();
  if (clone.indexOf(value) === -1) {
    clone.push(value);
  }
  return clone;
}

function posToArr(pos) {
  return pos.split('-');
}

function getPosition(level, index) {
  return level + '-' + index;
}

function isTreeNode(node) {
  return node && node.type && node.type.isTreeNode;
}

function getNodeChildren(children) {
  return Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(children).filter(isTreeNode);
}

function isCheckDisabled(node) {
  var _ref = node.props || {},
      disabled = _ref.disabled,
      disableCheckbox = _ref.disableCheckbox;

  return !!(disabled || disableCheckbox);
}

function traverseTreeNodes(treeNodes, callback) {
  function processNode(node, index, parent) {
    var children = node ? node.props.children : treeNodes;
    var pos = node ? getPosition(parent.pos, index) : 0;

    // Filter children
    var childList = getNodeChildren(children);

    // Process node if is not root
    if (node) {
      var data = {
        node: node,
        index: index,
        pos: pos,
        key: node.key || pos,
        parentPos: parent.node ? parent.pos : null
      };

      callback(data);
    }

    // Process children node
    react__WEBPACK_IMPORTED_MODULE_1__["Children"].forEach(childList, function (subNode, subIndex) {
      processNode(subNode, subIndex, { node: node, pos: pos });
    });
  }

  processNode(null);
}

/**
 * Use `rc-util` `toArray` to get the children list which keeps the key.
 * And return single node if children is only one(This can avoid `key` missing check).
 */
function mapChildren(children, func) {
  var list = Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(children).map(func);
  if (list.length === 1) {
    return list[0];
  }
  return list;
}

function getDragNodesKeys(treeNodes, node) {
  var _node$props = node.props,
      eventKey = _node$props.eventKey,
      pos = _node$props.pos;

  var dragNodesKeys = [];

  traverseTreeNodes(treeNodes, function (_ref2) {
    var key = _ref2.key;

    dragNodesKeys.push(key);
  });
  dragNodesKeys.push(eventKey || pos);
  return dragNodesKeys;
}

// Only used when drag, not affect SSR.
function calcDropPosition(event, treeNode) {
  var clientY = event.clientY;

  var _treeNode$selectHandl = treeNode.selectHandle.getBoundingClientRect(),
      top = _treeNode$selectHandl.top,
      bottom = _treeNode$selectHandl.bottom,
      height = _treeNode$selectHandl.height;

  var des = Math.max(height * DRAG_SIDE_RANGE, DRAG_MIN_GAP);

  if (clientY <= top + des) {
    return -1;
  } else if (clientY >= bottom - des) {
    return 1;
  }

  return 0;
}

/**
 * Return selectedKeys according with multiple prop
 * @param selectedKeys
 * @param props
 * @returns [string]
 */
function calcSelectedKeys(selectedKeys, props) {
  if (!selectedKeys) return undefined;

  var multiple = props.multiple;

  if (multiple) {
    return selectedKeys.slice();
  }

  if (selectedKeys.length) {
    return [selectedKeys[0]];
  }
  return selectedKeys;
}

/**
 * Since React internal will convert key to string,
 * we need do this to avoid `checkStrictly` use number match
 */
function keyListToString(keyList) {
  if (!keyList) return keyList;
  return keyList.map(function (key) {
    return String(key);
  });
}

var internalProcessProps = function internalProcessProps(props) {
  return props;
};
function convertDataToTree(treeData, processer) {
  if (!treeData) return [];

  var _ref3 = processer || {},
      _ref3$processProps = _ref3.processProps,
      processProps = _ref3$processProps === undefined ? internalProcessProps : _ref3$processProps;

  var list = Array.isArray(treeData) ? treeData : [treeData];
  return list.map(function (_ref4) {
    var children = _ref4.children,
        props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, ['children']);

    var childrenNodes = convertDataToTree(children, processer);

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      _TreeNode__WEBPACK_IMPORTED_MODULE_4__["default"],
      processProps(props),
      childrenNodes
    );
  });
}

// TODO: ========================= NEW LOGIC =========================
/**
 * Calculate treeNodes entities. `processTreeEntity` is used for `rc-tree-select`
 * @param treeNodes
 * @param processTreeEntity  User can customize the entity
 */
function convertTreeToEntities(treeNodes) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      initWrapper = _ref5.initWrapper,
      processEntity = _ref5.processEntity,
      onProcessFinished = _ref5.onProcessFinished;

  var posEntities = {};
  var keyEntities = {};
  var wrapper = {
    posEntities: posEntities,
    keyEntities: keyEntities
  };

  if (initWrapper) {
    wrapper = initWrapper(wrapper) || wrapper;
  }

  traverseTreeNodes(treeNodes, function (item) {
    var node = item.node,
        index = item.index,
        pos = item.pos,
        key = item.key,
        parentPos = item.parentPos;

    var entity = { node: node, index: index, key: key, pos: pos };

    posEntities[pos] = entity;
    keyEntities[key] = entity;

    // Fill children
    entity.parent = posEntities[parentPos];
    if (entity.parent) {
      entity.parent.children = entity.parent.children || [];
      entity.parent.children.push(entity);
    }

    if (processEntity) {
      processEntity(entity, wrapper);
    }
  });

  if (onProcessFinished) {
    onProcessFinished(wrapper);
  }

  return wrapper;
}

/**
 * Parse `checkedKeys` to { checkedKeys, halfCheckedKeys } style
 */
function parseCheckedKeys(keys) {
  if (!keys) {
    return null;
  }

  // Convert keys to object format
  var keyProps = void 0;
  if (Array.isArray(keys)) {
    // [Legacy] Follow the api doc
    keyProps = {
      checkedKeys: keys,
      halfCheckedKeys: undefined
    };
  } else if (typeof keys === 'object') {
    keyProps = {
      checkedKeys: keys.checked || undefined,
      halfCheckedKeys: keys.halfChecked || undefined
    };
  } else {
    warning__WEBPACK_IMPORTED_MODULE_3___default()(false, '`checkedKeys` is not an array or an object');
    return null;
  }

  keyProps.checkedKeys = keyListToString(keyProps.checkedKeys);
  keyProps.halfCheckedKeys = keyListToString(keyProps.halfCheckedKeys);

  return keyProps;
}

/**
 * Conduct check state by the keyList. It will conduct up & from the provided key.
 * If the conduct path reach the disabled or already checked / unchecked node will stop conduct.
 * @param keyList       list of keys
 * @param isCheck       is check the node or not
 * @param keyEntities   parsed by `convertTreeToEntities` function in Tree
 * @param checkStatus   Can pass current checked status for process (usually for uncheck operation)
 * @returns {{checkedKeys: [], halfCheckedKeys: []}}
 */
function conductCheck(keyList, isCheck, keyEntities) {
  var checkStatus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var checkedKeys = {};
  var halfCheckedKeys = {}; // Record the key has some child checked (include child half checked)

  (checkStatus.checkedKeys || []).forEach(function (key) {
    checkedKeys[key] = true;
  });

  (checkStatus.halfCheckedKeys || []).forEach(function (key) {
    halfCheckedKeys[key] = true;
  });

  // Conduct up
  function conductUp(key) {
    if (checkedKeys[key] === isCheck) return;

    var entity = keyEntities[key];
    if (!entity) return;

    var children = entity.children,
        parent = entity.parent,
        node = entity.node;


    if (isCheckDisabled(node)) return;

    // Check child node checked status
    var everyChildChecked = true;
    var someChildChecked = false; // Child checked or half checked

    (children || []).filter(function (child) {
      return !isCheckDisabled(child.node);
    }).forEach(function (_ref6) {
      var childKey = _ref6.key;

      var childChecked = checkedKeys[childKey];
      var childHalfChecked = halfCheckedKeys[childKey];

      if (childChecked || childHalfChecked) someChildChecked = true;
      if (!childChecked) everyChildChecked = false;
    });

    // Update checked status
    if (isCheck) {
      checkedKeys[key] = everyChildChecked;
    } else {
      checkedKeys[key] = false;
    }
    halfCheckedKeys[key] = someChildChecked;

    if (parent) {
      conductUp(parent.key);
    }
  }

  // Conduct down
  function conductDown(key) {
    if (checkedKeys[key] === isCheck) return;

    var entity = keyEntities[key];
    if (!entity) return;

    var children = entity.children,
        node = entity.node;


    if (isCheckDisabled(node)) return;

    checkedKeys[key] = isCheck;

    (children || []).forEach(function (child) {
      conductDown(child.key);
    });
  }

  function conduct(key) {
    var entity = keyEntities[key];

    if (!entity) {
      warning__WEBPACK_IMPORTED_MODULE_3___default()(false, '\'' + key + '\' does not exist in the tree.');
      return;
    }

    var children = entity.children,
        parent = entity.parent,
        node = entity.node;

    checkedKeys[key] = isCheck;

    if (isCheckDisabled(node)) return;

    // Conduct down
    (children || []).filter(function (child) {
      return !isCheckDisabled(child.node);
    }).forEach(function (child) {
      conductDown(child.key);
    });

    // Conduct up
    if (parent) {
      conductUp(parent.key);
    }
  }

  (keyList || []).forEach(function (key) {
    conduct(key);
  });

  var checkedKeyList = [];
  var halfCheckedKeyList = [];

  // Fill checked list
  Object.keys(checkedKeys).forEach(function (key) {
    if (checkedKeys[key]) {
      checkedKeyList.push(key);
    }
  });

  // Fill half checked list
  Object.keys(halfCheckedKeys).forEach(function (key) {
    if (!checkedKeys[key] && halfCheckedKeys[key]) {
      halfCheckedKeyList.push(key);
    }
  });

  return {
    checkedKeys: checkedKeyList,
    halfCheckedKeys: halfCheckedKeyList
  };
}

/**
 * If user use `autoExpandParent` we should get the list of parent node
 * @param keyList
 * @param keyEntities
 */
function conductExpandParent(keyList, keyEntities) {
  var expandedKeys = {};

  function conductUp(key) {
    if (expandedKeys[key]) return;

    var entity = keyEntities[key];
    if (!entity) return;

    expandedKeys[key] = true;

    var parent = entity.parent,
        node = entity.node;


    if (isCheckDisabled(node)) return;

    if (parent) {
      conductUp(parent.key);
    }
  }

  (keyList || []).forEach(function (key) {
    conductUp(key);
  });

  return Object.keys(expandedKeys);
}

/**
 * Returns only the data- and aria- key/value pairs
 * @param {object} props 
 */
function getDataAndAria(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-') {
      prev[key] = props[key];
    }
    return prev;
  }, {});
}

/***/ }),

/***/ "../../node_modules/rc-util/es/Children/toArray.js":
/*!*****************************************************************************************!*\
  !*** /Users/bliashenko/Learning/codecrumbs/node_modules/rc-util/es/Children/toArray.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toArray; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function toArray(children) {
  var ret = [];
  react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
}

/***/ })

}]);
//# sourceMappingURL=vendors~explorer-bar.bundle.js.map