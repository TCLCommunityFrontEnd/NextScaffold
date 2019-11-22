module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/app.ts":
/*!************************!*\
  !*** ./actions/app.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/http */ "./utils/http.js");
/* harmony import */ var _configs_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/api */ "./configs/api.ts");


let actions = {};
const appOpts = {
  devBaseUrl: _configs_api__WEBPACK_IMPORTED_MODULE_1__["devBaseUrls"].baseUrl1,
  proBaseUrl: _configs_api__WEBPACK_IMPORTED_MODULE_1__["proBaseUrls"].baseUrl1
};

actions.loadUserInfo = () => dispatch => {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__["default"].get('/user/info', {}, appOpts).then(info => {
    console.log(info);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "./components/CustomComponent.tsx":
/*!****************************************!*\
  !*** ./components/CustomComponent.tsx ***!
  \****************************************/
/*! exports provided: withIntl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withIntl", function() { return withIntl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/connect */ "./utils/connect.ts");
/* harmony import */ var _configs_language_zhCN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/language/zhCN */ "./configs/language/zhCN/index.ts");
/* harmony import */ var _configs_language_enUS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/language/enUS */ "./configs/language/enUS/index.ts");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl_locale_data_zh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl/locale-data/zh */ "react-intl/locale-data/zh");
/* harmony import */ var react_intl_locale_data_zh__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_zh__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl/locale-data/en */ "react-intl/locale-data/en");
/* harmony import */ var react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/app */ "./actions/app.ts");
var _dec,
    _class,
    _jsxFileName = "/local/sdb/Project/NextScaffold/components/CustomComponent.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];








Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["addLocaleData"])([...react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_6__, ...react_intl_locale_data_zh__WEBPACK_IMPORTED_MODULE_5__]);

function chooseLocale(lang) {
  switch (lang.split('-')[0]) {
    case 'en':
      return _configs_language_enUS__WEBPACK_IMPORTED_MODULE_3__["default"];

    case 'zh':
      return _configs_language_zhCN__WEBPACK_IMPORTED_MODULE_2__["default"];

    default:
      return _configs_language_zhCN__WEBPACK_IMPORTED_MODULE_2__["default"];
  }
}

let CustomComponent = (_dec = Object(_utils_connect__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => {
  const {
    locale
  } = state['app'];
  return {
    locale
  };
}, dispatch => ({
  initLocale(locale) {
    dispatch({
      type: 'APP_TOGGLE_LOCALE',
      locale
    });
    dispatch(_actions_app__WEBPACK_IMPORTED_MODULE_7__["default"].loadUserInfo());
  }

})), _dec(_class = class CustomComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    const defaultLocale = localStorage.getItem('tclCloud_lang') || navigator.language;
    this.props.initLocale(defaultLocale);
  }

  render() {
    const {
      locale,
      children
    } = this.props;
    return __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["IntlProvider"], {
      key: locale,
      locale: locale,
      messages: chooseLocale(locale),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, children);
  }

}) || _class);
function withIntl(WrappedComponent) {
  return class extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
      return __jsx(CustomComponent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(WrappedComponent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }));
    }

  };
}

/***/ }),

/***/ "./configs/api.ts":
/*!************************!*\
  !*** ./configs/api.ts ***!
  \************************/
/*! exports provided: devBaseUrls, proBaseUrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devBaseUrls", function() { return devBaseUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proBaseUrls", function() { return proBaseUrls; });
const devBaseUrls = {
  baseUrl1: 'https://s.tct-teye.com/bg-platform-gateway' //gateway

};
const proBaseUrls = {
  baseUrl1: 'https://s.tct-teye.com/bg-platform-gateway' //gateway

};


/***/ }),

/***/ "./configs/language/enUS/index.ts":
/*!****************************************!*\
  !*** ./configs/language/enUS/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./configs/language/enUS/login.ts");


let enUS = {};
/* harmony default export */ __webpack_exports__["default"] = (_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(enUS, _login__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./configs/language/enUS/login.ts":
/*!****************************************!*\
  !*** ./configs/language/enUS/login.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'login_index_msg1': 'Login With Account',
  'login_index_msg2': 'Please enter your account number!',
  'login_index_msg3': 'Email Address',
  'login_index_msg4': 'Please enter your password!',
  'login_index_msg5': 'Password',
  'login_index_msg6': 'The account or password you entered is incorrect!',
  'login_index_msg7': 'Forget password',
  'login_index_msg8': 'Sign In',
  'login_index_msg9': 'Select Region'
});

/***/ }),

/***/ "./configs/language/zhCN/index.ts":
/*!****************************************!*\
  !*** ./configs/language/zhCN/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./configs/language/zhCN/login.ts");


let zhCN = {};
/* harmony default export */ __webpack_exports__["default"] = (_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(zhCN, _login__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./configs/language/zhCN/login.ts":
/*!****************************************!*\
  !*** ./configs/language/zhCN/login.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'login_index_msg1': '帐号密码登录',
  'login_index_msg2': '请输入您的账号！',
  'login_index_msg3': '邮箱',
  'login_index_msg4': '请输入您的密码！',
  'login_index_msg5': '密码',
  'login_index_msg6': '您输入的账号或密码不正确！',
  'login_index_msg7': '忘记密码',
  'login_index_msg8': '登录',
  'login_index_msg9': '选择区域'
});

/***/ }),

/***/ "./less/login.less":
/*!*************************!*\
  !*** ./less/login.less ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./mock/app.ts":
/*!*********************!*\
  !*** ./mock/app.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  desc: '获取手机图片数据',
  type: 'GET',
  url: '/user/info',
  params: {},
  result: {
    code: 0,
    msg: 'success',
    data: {
      name: 'moriarty'
    }
  }
}]);

/***/ }),

/***/ "./mock/index.ts":
/*!***********************!*\
  !*** ./mock/index.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mockServer; });
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mockjs */ "mockjs");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);

// Mock.setup({
//     timeout: 500
// });
var mockList = [];
mockList = mockList.concat(__webpack_require__(/*! ./app */ "./mock/app.ts").default);
var mockData = {};
mockList.forEach(obj => {
  mockData[obj.url] = obj.result;
});
function mockServer(url, opts) {
  if (mockData[url]) {
    mockjs__WEBPACK_IMPORTED_MODULE_0___default.a.mock(opts.devBaseUrl + url, mockData[url]);
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/antd/lib/alert/style/index.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/alert/style/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/button/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/button/style/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/form/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/form/style/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/icon/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/icon/style/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/input/style/index.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/input/style/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/alert/style */ "./node_modules/antd/lib/alert/style/index.js");
/* harmony import */ var antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/alert */ "antd/lib/alert");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_CustomComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/CustomComponent */ "./components/CustomComponent.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _less_login_less__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../less/login.less */ "./less/login.less");
/* harmony import */ var _less_login_less__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_less_login_less__WEBPACK_IMPORTED_MODULE_16__);











var _jsxFileName = "/local/sdb/Project/NextScaffold/pages/login.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11__["createElement"];




 // import LocaleToggle from 'components/LocaleToggle';


const FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a.Item;

class Login extends react__WEBPACK_IMPORTED_MODULE_11__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "state", {
      showIncorrect: false,
      loading: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "handleSubmit", e => {
      e.preventDefault();
      this.props.form.validateFields((err, data) => {
        if (!err) {
          this.setState({
            loading: true
          }); // location.href = 'index.html';
          // this.props.onLogin.call(this, data);

          next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/index');
        }
      });
    });
  }

  static async getInitialProps() {}

  render() {
    const {
      getFieldDecorator
    } = this.props.form;
    const {
      locale
    } = this.props;
    const intl = this.props.intl;
    return __jsx("div", {
      className: "login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a, {
      onSubmit: this.handleSubmit,
      className: "main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(FormItem, {
      className: 'account',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, getFieldDecorator('username', {
      rules: [{
        required: true,
        message: __jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          id: "login_index_msg2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        })
      }]
    })(__jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
      size: "large",
      prefix: __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "user",
        style: {
          color: 'rgba(0,0,0,.25)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }),
      placeholder: intl.formatMessage({
        id: 'login_index_msg3'
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }))), __jsx(FormItem, {
      className: 'pwd',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, getFieldDecorator('password', {
      rules: [{
        required: true,
        message: __jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          id: "login_index_msg4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        })
      }]
    })(__jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
      size: "large",
      prefix: __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "lock",
        style: {
          color: 'rgba(0,0,0,.25)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }),
      onChange: () => {
        this.state.showIncorrect && this.setState({
          showIncorrect: false
        });
      },
      type: "password",
      placeholder: intl.formatMessage({
        id: 'login_index_msg5'
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }))), this.state.showIncorrect && __jsx(antd_lib_alert__WEBPACK_IMPORTED_MODULE_3___default.a, {
      message: __jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
        id: 'login_index_msg6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }),
      type: "error",
      showIcon: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "loginBtn",
      size: "large",
      htmlType: "submit",
      icon: "login",
      loading: this.state.loading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
      id: 'login_index_msg8',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }))))));
  }

}

let LoginComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(state => {
  const {
    locale
  } = state.app;
  return {
    locale
  };
}, null)(antd_lib_form__WEBPACK_IMPORTED_MODULE_10___default.a.create()(Login));
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_CustomComponent__WEBPACK_IMPORTED_MODULE_14__["withIntl"])(Object(react_intl__WEBPACK_IMPORTED_MODULE_15__["injectIntl"])(LoginComponent)));

/***/ }),

/***/ "./utils/connect.ts":
/*!**************************!*\
  !*** ./utils/connect.ts ***!
  \**************************/
/*! exports provided: connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
 //Typescript 并不允许把用 function 定义的函数作为装饰符来使用,
//官方建议当作一个function来调用而不是装饰器

const connect = (mapStateToProps, mapDispatchToProps, mergeProps, options) => {
  return target => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps, mergeProps, options)(target);
};

/***/ }),

/***/ "./utils/http.js":
/*!***********************!*\
  !*** ./utils/http.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tcl_http_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tcl-http-request */ "tcl-http-request");
/* harmony import */ var tcl_http_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tcl_http_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock */ "./mock/index.ts");


let Axios = {};
const isProd = "development" === 'production';

Axios.get = function (url, params = {}, opts = {}) {
  Object(_mock__WEBPACK_IMPORTED_MODULE_1__["default"])(url, opts);
  opts.baseURL = isProd ? opts.proBaseUrl : opts.devBaseUrl;
  return tcl_http_request__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, params, opts);
};

Axios.post = function (url, params = {}, opts = {}) {
  Object(_mock__WEBPACK_IMPORTED_MODULE_1__["default"])(url, opts);
  opts.baseURL = isProd ? opts.proBaseUrl : opts.devBaseUrl;
  return tcl_http_request__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, params, opts);
};

Axios.raw = function (method, url, params = {}, opts = {}) {
  Object(_mock__WEBPACK_IMPORTED_MODULE_1__["default"])(url, opts);
  opts.baseURL = isProd ? opts.proBaseUrl : opts.devBaseUrl;
  return tcl_http_request__WEBPACK_IMPORTED_MODULE_0___default.a.raw(method, url, params, opts);
};

/* harmony default export */ __webpack_exports__["default"] = (Axios);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/login.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /local/sdb/Project/NextScaffold/pages/login.tsx */"./pages/login.tsx");


/***/ }),

/***/ "antd/lib/alert":
/*!*********************************!*\
  !*** external "antd/lib/alert" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/alert");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/form":
/*!********************************!*\
  !*** external "antd/lib/form" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "mockjs":
/*!*************************!*\
  !*** external "mockjs" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mockjs");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "react-intl/locale-data/en":
/*!********************************************!*\
  !*** external "react-intl/locale-data/en" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en");

/***/ }),

/***/ "react-intl/locale-data/zh":
/*!********************************************!*\
  !*** external "react-intl/locale-data/zh" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/zh");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "tcl-http-request":
/*!***********************************!*\
  !*** external "tcl-http-request" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tcl-http-request");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map