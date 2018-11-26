webpackJsonp([17],{

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(201);


/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_select__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rc_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rc_select_assets_index_less__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rc_select_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rc_select_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);




/* eslint no-console: 0 */





var children = [];
for (var i = 10; i < 36; i++) {
  children.push(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_5_rc_select__["Option"],
    { key: i.toString(36) + i, test: i },
    i.toString(36) + i
  ));
}

var Test = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Test, _React$Component);

  function Test() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Test);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Test.__proto__ || Object.getPrototypeOf(Test)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: ['name2', 'name3']
    }, _this.onChange = function (value, option) {
      console.log('changed ' + value, option);
      _this.setState({
        value: value
      });
    }, _this.onSelect = function (value, option) {
      console.log('selected ' + value, option.props);
    }, _this.onDeselect = function (value, option) {
      console.log('deselected ' + value, option);
    }, _temp), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Test, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        {
          onMouseDown: function onMouseDown(e) {
            e.preventDefault();
            return false;
          }
        },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'h2',
          null,
          'custom dropdown render select'
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_rc_select___default.a,
            {
              placeholder: 'placeholder',
              tags: true,
              dropdownMenuStyle: { maxHeight: 200 },
              style: { width: 500 },
              value: this.state.value,
              onChange: this.onChange,
              onSelect: this.onSelect,
              onDeselect: this.onDeselect,
              tokenSeparators: [' ', ','],
              onFocus: function onFocus() {
                return console.log('focus');
              },
              onBlur: function onBlur() {
                return console.log('blur');
              },
              dropdownRender: function dropdownRender(menu) {
                return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4_react___default.a.Fragment,
                  null,
                  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    'div',
                    {
                      onClick: function onClick() {
                        console.log('before clicked');
                      }
                    },
                    'BEFORE'
                  ),
                  menu,
                  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    'div',
                    {
                      onClick: function onClick() {
                        console.log('after clicked');
                      }
                    },
                    'AFTER'
                  )
                );
              }
            },
            children
          )
        )
      );
    }
  }]);

  return Test;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Test, null), document.getElementById('__react-content'));

/***/ })

},[200]);
//# sourceMappingURL=dropdownRender.js.map