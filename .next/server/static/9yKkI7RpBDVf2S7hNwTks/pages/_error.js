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
/******/ 	__webpack_require__.p = "/_next/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 212);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_GOOGLE_MAPS_KEY = exports.SET_STATUS = exports.SET_CSRF = void 0;
var SET_CSRF = "app/auth/SET_CSRF";
exports.SET_CSRF = SET_CSRF;
var SET_STATUS = "app/auth/SET_STATUS";
exports.SET_STATUS = SET_STATUS;
var SET_GOOGLE_MAPS_KEY = "app/auth/SET_GOOGLE_MAPS_KEY";
exports.SET_GOOGLE_MAPS_KEY = SET_GOOGLE_MAPS_KEY;

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getFormErrors = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(2));

var _immutable = __webpack_require__(4);

var _reactRedux = __webpack_require__(10);

var _immutable2 = __webpack_require__(14);

var _reduxForm = __webpack_require__(29);

var _context2 = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getFormErrors = function getFormErrors(data) {
  var defaultMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "OPERATION_FAILED";
  var result = {};

  var errors = _.get(data, "errors", []);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var error = _step.value;
      if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result._error = (result._error || []).concat([error.message]);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (!_.keys(result).length) result = {
    _error: defaultMessage
  };
  return result;
};

exports.getFormErrors = getFormErrors;

var _default = function _default(FormComponent, mapStateToProps, mapDispatchToProps, mergeProps) {
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var withContext = function withContext(WrappedComponent) {
    return function WithFormContext(props) {
      return _react.default.createElement(_context2.FormNameContext.Provider, {
        value: FormComponent.formName
      }, _react.default.createElement(_context2.FormFieldsContext.Provider, {
        value: FormComponent.fields
      }, _react.default.createElement(WrappedComponent, props)));
    };
  };

  var destroyOnUnmount = options.destroyOnUnmount,
      reduxOptions = _objectWithoutProperties(options, ["destroyOnUnmount"]);

  var Form = (0, _reactRedux.connect)(function (state, props) {
    return _.assign(mapStateToProps ? mapStateToProps(state, props) : {}, {
      getValue: function getValue(field) {
        var values = (0, _immutable2.getFormValues)(FormComponent.formName)(state);
        return field ? values && values.get(field) : values || (0, _immutable.Map)();
      },
      getError: function getError(field) {
        var errors = (0, _immutable2.getFormAsyncErrors)(FormComponent.formName)(state);
        return field ? errors && errors.get(field) : errors || (0, _immutable.Map)();
      }
    });
  }, function (dispatch, props) {
    return _.assign(mapDispatchToProps ? mapDispatchToProps(dispatch, props) : {}, {
      dispatch: dispatch,
      updateValidation: function () {
        var _updateValidation = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(errors) {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return dispatch((0, _reduxForm.startAsyncValidation)(FormComponent.formName));

                case 2:
                  _context.next = 4;
                  return dispatch((0, _reduxForm.stopAsyncValidation)(FormComponent.formName, errors));

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function updateValidation(_x) {
          return _updateValidation.apply(this, arguments);
        }

        return updateValidation;
      }()
    });
  }, mergeProps, _.keys(reduxOptions).length ? reduxOptions : undefined)(withContext((0, _immutable2.reduxForm)({
    form: FormComponent.formName,
    destroyOnUnmount: destroyOnUnmount || true,
    pure: false,
    shouldAsyncValidate: function shouldAsyncValidate(_ref) {
      var trigger = _ref.trigger;
      return _.includes(["blur", "submit"], trigger);
    },
    onSubmit: FormComponent.onSubmit.bind(FormComponent),
    onSubmitFail: FormComponent.onSubmitFail.bind(FormComponent),
    onSubmitSuccess: FormComponent.onSubmitSuccess.bind(FormComponent),
    onChange: FormComponent.onChange.bind(FormComponent),
    asyncValidate: FormComponent.onValidate.bind(FormComponent)
  })(FormComponent)));
  Form.formName = FormComponent.formName;
  return Form;
};

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authSelectors = exports.authOperations = exports.authTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(26));

var authTypes = _interopRequireWildcard(__webpack_require__(11));

exports.authTypes = authTypes;

var authOperations = _interopRequireWildcard(__webpack_require__(27));

exports.authOperations = authOperations;

var authSelectors = _interopRequireWildcard(__webpack_require__(15));

exports.authSelectors = authSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(2));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _ErrorMessageContainer = _interopRequireDefault(__webpack_require__(84));

var _state = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ErrorPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorPage, _React$Component);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorPage).apply(this, arguments));
  }

  _createClass(ErrorPage, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_ErrorMessageContainer.default, {
        statusCode: this.props.statusCode
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var store, statusCode;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref.store;
                statusCode = store && _state.appSelectors.getStatusCode(store.getState());
                return _context.abrupt("return", {
                  statusCode: statusCode
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ErrorPage;
}(_react.default.Component);

var _default = ErrorPage;
exports.default = _default;

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("redux-form/immutable");

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoles = exports.getLogin = exports.isAdmin = exports.isAuthenticated = exports.getCsrf = void 0;

var _reselect = __webpack_require__(16);

var _constants = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCsrf = function getCsrf(state) {
  return state.getIn(["auth", "csrf"]);
};

exports.getCsrf = getCsrf;

var isAuthenticated = function isAuthenticated(state) {
  return state.getIn(["auth", "isAuthenticated"]);
};
/* eslint-disable lodash/prefer-lodash-method */


exports.isAuthenticated = isAuthenticated;

var isAdmin = function isAdmin(state) {
  return state.getIn(["auth", "roles"]).includes(_constants.default.roles.ADMIN);
};
/* eslint-enable */


exports.isAdmin = isAdmin;

var getLogin = function getLogin(state) {
  return state.getIn(["auth", "login"]);
};

exports.getLogin = getLogin;
var getRoles = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["auth", "roles"]);
}, function (roles) {
  return roles.toJS();
});
exports.getRoles = getRoles;

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_LOCALE = exports.SET_CONNECTED = exports.SET_STATUS_CODE = exports.STOP = exports.START = exports.INIT = exports.CREATE = void 0;
var CREATE = "app/app/CREATE";
exports.CREATE = CREATE;
var INIT = "app/app/INIT";
exports.INIT = INIT;
var START = "app/app/START";
exports.START = START;
var STOP = "app/app/STOP";
exports.STOP = STOP;
var SET_STATUS_CODE = "app/app/SET_STATUS_CODE";
exports.SET_STATUS_CODE = SET_STATUS_CODE;
var SET_CONNECTED = "app/app/SET_CONNECTED";
exports.SET_CONNECTED = SET_CONNECTED;
var SET_LOCALE = "app/app/SET_LOCALE";
exports.SET_LOCALE = SET_LOCALE;

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appSelectors = exports.appOperations = exports.appTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(47));

var appTypes = _interopRequireWildcard(__webpack_require__(17));

exports.appTypes = appTypes;

var appOperations = _interopRequireWildcard(__webpack_require__(50));

exports.appOperations = appOperations;

var appSelectors = _interopRequireWildcard(__webpack_require__(53));

exports.appSelectors = appSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormFieldsContext = exports.FormNameContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormNameContext = _react.default.createContext({});

exports.FormNameContext = FormNameContext;

var FormFieldsContext = _react.default.createContext({});

exports.FormFieldsContext = FormFieldsContext;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(213);


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _ErrorPage.default;
  }
});

var _ErrorPage = _interopRequireDefault(__webpack_require__(133));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(4);

var _reduxImmutable = __webpack_require__(9);

var types = _interopRequireWildcard(__webpack_require__(11));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  csrf: String,
  isAuthenticated: Boolean,
  login: String,
  roles: List([String]),
  googleMapsKey: null,
})
*/
var csrfReducer = function csrfReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_CSRF:
      if (!_.isUndefined(action.csrf)) return action.csrf;
      break;
  }

  return state;
};

var isAuthenticatedReducer = function isAuthenticatedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.isAuthenticated)) return action.isAuthenticated;
      break;
  }

  return state;
};

var loginReducer = function loginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.login)) return action.login;
      break;
  }

  return state;
};

var rolesReducer = function rolesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.roles)) return (0, _immutable.fromJS)(action.roles);
      break;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  csrf: csrfReducer,
  isAuthenticated: isAuthenticatedReducer,
  login: loginReducer,
  roles: rolesReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signOut = exports.signIn = exports.setStatus = exports.setCsrf = exports.setCookie = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var actions = _interopRequireWildcard(__webpack_require__(28));

var selectors = _interopRequireWildcard(__webpack_require__(15));

var _connectForm = __webpack_require__(12);

var _constants = _interopRequireDefault(__webpack_require__(6));

var _SignIn = _interopRequireDefault(__webpack_require__(30));

var _SignOut = _interopRequireDefault(__webpack_require__(32));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var setCookie = actions.setCookie;
exports.setCookie = setCookie;
var setCsrf = actions.setCsrf;
exports.setCsrf = setCsrf;

var fetchStatus = function fetchStatus() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch, getState, di) {
        var fetcher;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                fetcher = di.get("fetcher");
                _context.next = 4;
                return fetcher.fetch({
                  resource: "".concat(_constants.default.apiBase, "/status")
                });

              case 4:
                return _context.abrupt("return", _context.sent);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.error("STATUS: ".concat(_context.t0.message));

              case 10:
                return _context.abrupt("return", new Promise(function (resolve) {
                  return setTimeout(function () {
                    return resolve(fetchStatus());
                  }, 3000);
                }));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

var setStatus = function setStatus(status) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState, di) {
        var socket;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (true) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 3;
                return dispatch(fetchStatus());

              case 3:
                status = _context2.sent;

              case 4:
                if (status) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return");

              case 6:
                _context2.next = 8;
                return dispatch(actions.setStatus(status));

              case 8:
                if (false) {}

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

exports.setStatus = setStatus;

var signIn = function signIn(_ref3) {
  var login = _ref3.login,
      password = _ref3.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _SignIn.default)(di, {
                  login: login,
                  password: password
                });

              case 2:
                data = _context3.sent;

                if (!_.get(data, "data.signIn.success", false)) {
                  _context3.next = 10;
                  break;
                }

                _context3.next = 6;
                return dispatch(setStatus());

              case 6:
                if (true) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 9;
                return window.__NEXT_PAGE_INIT({
                  store: window.__NEXT_REDUX_STORE__
                });

              case 9:
                return _context3.abrupt("return", true);

              case 10:
                return _context3.abrupt("return", (0, _connectForm.getFormErrors)(data, "APP_AUTH_FAILED"));

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x7, _x8, _x9) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

exports.signIn = signIn;

var signOut = function signOut() {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _SignOut.default)(di);

              case 2:
                data = _context4.sent;

                if (!_.get(data, "data.signOut.success", false)) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 6;
                return dispatch(setStatus());

              case 6:
                return _context4.abrupt("return", true);

              case 7:
                return _context4.abrupt("return", false);

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x10, _x11, _x12) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.signOut = signOut;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStatus = exports.setCsrf = void 0;

var types = _interopRequireWildcard(__webpack_require__(11));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setCsrf = function setCsrf(_ref) {
  var csrf = _ref.csrf;
  return {
    type: types.SET_CSRF,
    csrf: csrf
  };
};

exports.setCsrf = setCsrf;

var setStatus = function setStatus(status) {
  return _objectSpread({
    type: types.SET_STATUS
  }, status);
};

exports.setStatus = setStatus;

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _reactRelay = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mutation = function mutation() {
  return __webpack_require__(31);
};

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash fe8b5fcc0a8fcc19b36d704eab912a45
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignInInput = {
  login?: ?string,
  password?: ?string,
  clientMutationId?: ?string,
};
export type SignInMutationVariables = {|
  input: SignInInput
|};
export type SignInMutationResponse = {|
  +signIn: ?{|
    +success: ?boolean
  |}
|};
export type SignInMutation = {|
  variables: SignInMutationVariables,
  response: SignInMutationResponse,
|};
*/

/*
mutation SignInMutation(
  $input: SignInInput!
) {
  signIn(input: $input) {
    success
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "SignInInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "signIn",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "SignInInput!"
    }],
    "concreteType": "SignInPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "SignInMutation",
    "id": null,
    "text": "mutation SignInMutation(\n  $input: SignInInput!\n) {\n  signIn(input: $input) {\n    success\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "SignInMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "SignInMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '153fa344d90b87f0fcb641bc7a1ed120';
module.exports = node;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _reactRelay = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mutation = function mutation() {
  return __webpack_require__(33);
};

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 35523b15e9e70c75ec84ff3a6a23eab1
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignOutInput = {
  clientMutationId?: ?string
};
export type SignOutMutationVariables = {|
  input: SignOutInput
|};
export type SignOutMutationResponse = {|
  +signOut: ?{|
    +success: ?boolean
  |}
|};
export type SignOutMutation = {|
  variables: SignOutMutationVariables,
  response: SignOutMutationResponse,
|};
*/

/*
mutation SignOutMutation(
  $input: SignOutInput!
) {
  signOut(input: $input) {
    success
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "SignOutInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "signOut",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "SignOutInput!"
    }],
    "concreteType": "SignOutPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "SignOutMutation",
    "id": null,
    "text": "mutation SignOutMutation(\n  $input: SignOutInput!\n) {\n  signOut(input: $input) {\n    success\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "SignOutMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "SignOutMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '417ec230bfa986933ff799e6fab9074c';
module.exports = node;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

function parse(source) {
  var messages = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _.keys(source)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;
      messages[key] = _.isArray(source[key]) ? source[key].join("") : source[key];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return messages;
}

module.exports = {
  defaultLocale: "en",
  locales: ["en"],
  flags: {
    en: "US"
  },
  names: {
    en: "English"
  },
  messages: {
    en: parse(__webpack_require__(48))
  },
  getLocaleData: function getLocaleData() {
    return [__webpack_require__(49)];
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var moment = __webpack_require__(52); // Add locales:
//require("moment/locale/ru.js"); // en is already there


module.exports = moment;

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxImmutable = __webpack_require__(9);

var types = _interopRequireWildcard(__webpack_require__(17));

var _locales = _interopRequireDefault(__webpack_require__(39));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  created: Number, // timestamp
  locale: String,
  statusCode: Number, // current HTTP status code
  subscriptionsServer: String,
  appOrigin: String,
  proxyOrigin: String,
  sshHost: String,
  sshPort: Number,
  selfRegistration: Boolean,
  isStarted: Boolean,
  isConnected: Boolean, // WebSocket
})
*/
var createdReducer = function createdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.created)) return action.created;
      break;
  }

  return state;
};

var localeReducer = function localeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _locales.default.defaultLocale;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_LOCALE:
      if (!_.isUndefined(action.locale)) return action.locale;
      break;
  }

  return state;
};

var statusCodeReducer = function statusCodeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS_CODE:
      if (_.isFinite(action.code) && action.code >= 200) return action.code;
      break;
  }

  return state;
};

var subscriptionsServerReducer = function subscriptionsServerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.subscriptionsServer)) return action.subscriptionsServer;
      break;
  }

  return state;
};

var appOriginReducer = function appOriginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "http://localhost";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.appOrigin)) return action.appOrigin;
      break;
  }

  return state;
};

var proxyOriginReducer = function proxyOriginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "http://localhost";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.proxyOrigin)) return action.proxyOrigin;
      break;
  }

  return state;
};

var sshHostReducer = function sshHostReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "localhost";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.sshHost)) return action.sshHost;
      break;
  }

  return state;
};

var sshPortReducer = function sshPortReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 22;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.sshPort)) return action.sshPort;
      break;
  }

  return state;
};

var selfRegistrationReducer = function selfRegistrationReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.selfRegistration)) return action.selfRegistration;
      break;
  }

  return state;
};

var isStartedReducer = function isStartedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.START:
      return true;

    case types.STOP:
      return false;
  }

  return state;
};

var isConnectedReducer = function isConnectedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_CONNECTED:
      if (!_.isUndefined(action.isConnected)) return action.isConnected;
      break;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  created: createdReducer,
  locale: localeReducer,
  statusCode: statusCodeReducer,
  subscriptionsServer: subscriptionsServerReducer,
  appOrigin: appOriginReducer,
  proxyOrigin: proxyOriginReducer,
  sshHost: sshHostReducer,
  sshPort: sshPortReducer,
  selfRegistration: selfRegistrationReducer,
  isStarted: isStartedReducer,
  isConnected: isConnectedReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 48:
/***/ (function(module) {

module.exports = {"MENU_DEVICES":"Device List","TITLE_DEVICES":"Remote Configurator","MENU_DEVICE":"Device","TITLE_DEVICE":"Device","MENU_USERS":"Users","TITLE_USERS":"Users","SIDEBAR_SIGN_OUT_LINK":"Sign Out","DEVICES_PAGE_WORKFLOW_TITLE":"Workflow","DEVICES_PAGE_WORKFLOW_HTML":["<ul>","<li>Create a device with unique name and a password. You will be provided with a shell command you can then"," copy-paste into the terminal of your device.</li>","<li>Enter the same password you used to create the device and the device will appear in the list below after"," connecting to this server. All further interaction with the device will be done through this encrypted SSH channel.</li>","<li>Press \"SIGN IN\" button to sign in into your device. You don't need to use root's credentials if you are"," not going to perform superuser-only operations","<li>When signed in you can then open an in-browser terminal session to this device under the credentials you used"," or create a private HTTP proxy for any port on your device</li>","</ul>"],"DEVICES_PAGE_SECURITY_TITLE":"Security Considerations","DEVICES_PAGE_SECURITY_HTML":["<ul>","<li>Credentials you use to sign in into your device are readable to this server. Although these credentials are never"," stored to disk and only live in the server's memory while the session exists, a compromised server might have a"," different idea what to do with your information.</li>","<li>A more secure apporoach would be to set up your own server (preferably after inspecting the source code) so you"," trust the credentials only to a reliable server.</li>","<li>Some web services protect their users from phishing sites, for which they detect and prevent proxies and &lt;iframe&gt;"," tags from working. You will have to configure an exception for the server in such case. For Webmin, you can achieve"," this by adding to the end of <strong>/etc/webmin/config</strong>: <pre>referers={origin}</pre></li>","</ul>"],"DEVICES_NAME_COLUMN":"Name","DEVICES_ADDRESS_COLUMN":"Address","DEVICES_CREATE_BUTTON":"Create Device","DEVICES_EDIT_BUTTON":"Edit Device","DEVICES_DELETE_BUTTON":"Delete Devices","DEVICES_CONNECT_BUTTON":"Sign In","DEVICES_OFFLINE_LABEL":"Offline","DEVICES_OPEN_TERMINAL_TIP":"Open terminal","DEVICES_OPEN_BROWSER_TIP":"Open browser","DEVICES_DISCONNECT_TIP":"Disconnect","EDIT_DEVICE_TITLE_CREATE":"Create Device","EDIT_DEVICE_TITLE_EDIT":"Edit Device","EDIT_DEVICE_NAME_LABEL":"Name","EDIT_DEVICE_PASSWORD_LABEL":"Password","EDIT_DEVICE_FAILED":"Form submission failed","EDIT_DEVICE_SUBMIT":"Submit","EDIT_DEVICE_CANCEL":"Cancel","DELETE_DEVICE_TITLE":"Delete Devices","DELETE_DEVICE_TEXT":"Delete selected devices?","DELETE_DEVICE_CANCEL":"Cancel","DELETE_DEVICE_SUBMIT":"Delete","PROXY_TPL_TITLE":"<h1>Proxy Reporting</h1>","PROXY_TPL_MESSAGE":"<h3>Could not fetch the page</h3>","PROXY_TPL_403":"<p>Access denied</p>","PROXY_TPL_404":"<p>Try to reopen this page from the Device List</p>","PROXY_TPL_502":"<p>Looks like nobody is listening on this port</p>","PROXY_MODAL_TITLE":"HTTP Proxy","PROXY_HOST_LABEL":"Which host to connect to?","PROXY_PORT_LABEL":"Which port to proxy?","PROXY_AUTH_LABEL":"Remote service needs HTTP BASIC AUTH","PROXY_LOGIN_LABEL":"Login","PROXY_PASSWORD_LABEL":"Password","PROXY_MODAL_CANCEL":"Cancel","PROXY_MODAL_SUBMIT":"Submit","USERS_LOGIN_COLUMN":"Login","USERS_ROLES_COLUMN":"Roles","USERS_CREATE_BUTTON":"Create User","USERS_EDIT_BUTTON":"Edit User","USERS_DELETE_BUTTON":"Delete Users","EDIT_USER_TITLE_CREATE":"Create User","EDIT_USER_TITLE_EDIT":"Edit User","EDIT_USER_LOGIN_LABEL":"Login","EDIT_USER_PASSWORD_LABEL":"Password","EDIT_USER_AUTHENTICATED_LABEL":"Authenticated","EDIT_USER_ADMIN_LABEL":"Administrator","EDIT_USER_CANCEL":"Cancel","EDIT_USER_SUBMIT":"Submit","EDIT_USER_FAILED":"An error occured","DELETE_USER_TITLE":"Delete Users","DELETE_USER_TEXT":"Delete selected users?","DELETE_USER_CANCEL":"Cancel","DELETE_USER_SUBMIT":"Delete","TERMINAL_CONNECTING_LABEL":"Connecting...","TERMINAL_NOT_CONNECTED_LABEL":"Not connected","APP_AUTH_TITLE":"Authentication","APP_AUTH_SELF_REGISTRATION_TITLE":"Self-registration enabled","APP_AUTH_SELF_REGISTRATION_MESSAGE":"If you are a new user, you can use any free login and the password you want to sign in","APP_AUTH_LOGIN_LABEL":"Login","APP_AUTH_PASSWORD_LABEL":"Password","APP_AUTH_SUBMIT":"Sign In","APP_AUTH_FAILED":"Invalid credentials","SETUP_AUTH_TITLE":"Authentication","SETUP_AUTH_LOGIN_LABEL":"Login","SETUP_AUTH_PASSWORD_LABEL":"Password","SETUP_AUTH_CANCEL":"Cancel","SETUP_AUTH_SUBMIT":"Submit","KEYBOARD_AUTH_TITLE":"Authentication","KEYBOARD_AUTH_REPLY_LABEL":"Response","KEYBOARD_AUTH_CANCEL":"Cancel","KEYBOARD_AUTH_SUBMIT":"Submit","OPERATION_FAILED":"Operations failed","ERROR_FIELD_REQUIRED":"This field is required","ERROR_INVALID_LOGIN":"Login should start with a letter and contain letters and digits only","ERROR_INVALID_PASSWORD":"Password must be at least 6 characters long"};

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en.js");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("react-relay");

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = exports.getCookie = exports.setCookie = exports.start = exports.init = exports.create = exports.stop = exports.setLocale = exports.setConnected = exports.setStatusCode = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var actions = _interopRequireWildcard(__webpack_require__(51));

var _state = __webpack_require__(13);

var _constants = _interopRequireDefault(__webpack_require__(6));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var setStatusCode = actions.setStatusCode;
exports.setStatusCode = setStatusCode;
var setConnected = actions.setConnected;
exports.setConnected = setConnected;
var setLocale = actions.setLocale;
exports.setLocale = setLocale;
var stop = actions.stop; // called in App.getInitialProps()

exports.stop = stop;

var create = function create(_ref) {
  var statusCode = _ref.statusCode,
      cookie = _ref.cookie,
      csrf = _ref.csrf,
      status = _ref.status,
      subscriptionsServer = _ref.subscriptionsServer,
      appOrigin = _ref.appOrigin,
      proxyOrigin = _ref.proxyOrigin,
      sshHost = _ref.sshHost,
      sshPort = _ref.sshPort,
      selfRegistration = _ref.selfRegistration;
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return dispatch(actions.create({
                  subscriptionsServer: subscriptionsServer,
                  appOrigin: appOrigin,
                  proxyOrigin: proxyOrigin,
                  sshHost: sshHost,
                  sshPort: sshPort,
                  selfRegistration: selfRegistration
                }));

              case 2:
                if (!statusCode) {
                  _context.next = 5;
                  break;
                }

                _context.next = 5;
                return dispatch(setStatusCode({
                  code: statusCode
                }));

              case 5:
                if (!cookie) {
                  _context.next = 8;
                  break;
                }

                _context.next = 8;
                return dispatch(_state.authOperations.setCookie({
                  cookie: cookie
                }));

              case 8:
                if (!csrf) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return dispatch(_state.authOperations.setCsrf({
                  csrf: csrf
                }));

              case 11:
                if (!status) {
                  _context.next = 14;
                  break;
                }

                _context.next = 14;
                return dispatch(_state.authOperations.setStatus(status));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}; // called in App.costructor()


exports.create = create;

var init = function init() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", dispatch(actions.init()));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

exports.init = init;
var fontsLoaded; // called in App.componentDidMount()

var start = function start() {
  if (!fontsLoaded) {
    fontsLoaded = new Promise(function (resolve) {
      if (window.__fontsLoaded) return resolve();
      window.addEventListener(_constants.default.events.FONTS_LOADED, resolve, {
        once: true
      });
      setTimeout(resolve, 5000);
    });
  }

  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Promise.all([dispatch(_state.authOperations.setStatus()), fontsLoaded]);

              case 2:
                return _context3.abrupt("return", dispatch(actions.start()));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

exports.start = start;

var setCookie = function setCookie(_ref5) {
  var name = _ref5.name,
      value = _ref5.value,
      days = _ref5.days;
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                di.get("cookie").set(name, value, days);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4, _x5, _x6) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

exports.setCookie = setCookie;

var getCookie = function getCookie(_ref7) {
  var name = _ref7.name;
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", di.get("cookie").get(name));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x7, _x8, _x9) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

exports.getCookie = getCookie;

var getToken = function getToken() {
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", di.get("fetcher").getToken());

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x10, _x11, _x12) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
};

exports.getToken = getToken;

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocale = exports.setConnected = exports.setStatusCode = exports.stop = exports.start = exports.init = exports.create = void 0;

var _moment = _interopRequireDefault(__webpack_require__(40));

var types = _interopRequireWildcard(__webpack_require__(17));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var create = function create(data) {
  return _.assign({
    type: types.CREATE
  }, data);
};

exports.create = create;

var init = function init(data) {
  return _.assign({
    type: types.INIT
  }, data);
};

exports.init = init;

var start = function start() {
  return {
    type: types.START
  };
};

exports.start = start;

var stop = function stop() {
  return {
    type: types.STOP
  };
};

exports.stop = stop;

var setStatusCode = function setStatusCode(_ref) {
  var code = _ref.code;
  return {
    type: types.SET_STATUS_CODE,
    code: code
  };
};

exports.setStatusCode = setStatusCode;

var setConnected = function setConnected(_ref2) {
  var isConnected = _ref2.isConnected;
  return {
    type: types.SET_CONNECTED,
    isConnected: isConnected
  };
};

exports.setConnected = setConnected;

var setLocale = function setLocale(_ref3) {
  var locale = _ref3.locale;

  _moment.default.locale(locale);

  return {
    type: types.SET_LOCALE,
    locale: locale
  };
};

exports.setLocale = setLocale;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isConnected = exports.isStarted = exports.getLocale = exports.getSelfRegistration = exports.getSshPort = exports.getSshHost = exports.getProxyOrigin = exports.getAppOrigin = exports.getSubscriptionsServer = exports.getStatusCode = exports.getCreated = void 0;

var getCreated = function getCreated(state) {
  return state.getIn(["app", "created"]);
};

exports.getCreated = getCreated;

var getStatusCode = function getStatusCode(state) {
  return state.getIn(["app", "statusCode"]);
};

exports.getStatusCode = getStatusCode;

var getSubscriptionsServer = function getSubscriptionsServer(state) {
  return state.getIn(["app", "subscriptionsServer"]);
};

exports.getSubscriptionsServer = getSubscriptionsServer;

var getAppOrigin = function getAppOrigin(state) {
  return state.getIn(["app", "appOrigin"]);
};

exports.getAppOrigin = getAppOrigin;

var getProxyOrigin = function getProxyOrigin(state) {
  return state.getIn(["app", "proxyOrigin"]);
};

exports.getProxyOrigin = getProxyOrigin;

var getSshHost = function getSshHost(state) {
  return state.getIn(["app", "sshHost"]);
};

exports.getSshHost = getSshHost;

var getSshPort = function getSshPort(state) {
  return state.getIn(["app", "sshPort"]);
};

exports.getSshPort = getSshPort;

var getSelfRegistration = function getSelfRegistration(state) {
  return state.getIn(["app", "selfRegistration"]);
};

exports.getSelfRegistration = getSelfRegistration;

var getLocale = function getLocale(state) {
  return state.getIn(["app", "locale"]);
};

exports.getLocale = getLocale;

var isStarted = function isStarted(state) {
  return state.getIn(["app", "isStarted"]);
};

exports.isStarted = isStarted;

var isConnected = function isConnected(state) {
  return state.getIn(["app", "isConnected"]);
};

exports.isConnected = isConnected;

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var roles = {
  AUTHENTICATED: "AUTHENTICATED",
  // every one except the anonymous has this
  ADMIN: "ADMIN"
};
module.exports = {
  apiBase: "/api",
  graphqlBase: "/graphql",
  socketsBase: "/ws",
  roles: roles,
  pages: {
    "/": {
      page: "/"
    },
    "/devices": {
      page: "/devices",
      icon: "devices",
      menu: "MENU_DEVICES",
      title: "TITLE_DEVICES",
      roles: [roles.AUTHENTICATED]
    },
    "/terminal": {
      page: "/terminal",
      icon: "terminal",
      roles: [roles.AUTHENTICATED]
    },
    "/browser": {
      page: "/browser",
      icon: "browser",
      roles: [roles.AUTHENTICATED]
    },
    "/users": {
      page: "/users",
      icon: "users",
      menu: "MENU_USERS",
      title: "TITLE_USERS",
      roles: [roles.ADMIN]
    }
  },
  messages: {
    // client requests
    CONNECT_DEVICE: "CONNECT_DEVICE",
    FINISH_AUTH: "FINISH_AUTH",
    DISCONNECT_DEVICE: "DISCONNECT_DEVICE",
    CONNECT_TERMINAL: "CONNECT_TERMINAL",
    TERMINAL_INPUT: "TERMINAL_INPUT",
    TERMINAL_RESIZED: "TERMINAL_RESIZED",
    DISCONNECT_TERMINAL: "DISCONNECT_TERMINAL",
    CONNECT_BROWSER: "CONNECT_BROWSER",
    // responses and commands
    HELLO: "HELLO",
    SET_STATUS: "SET_STATUS",
    SET_DEVICE: "SET_DEVICE",
    DELETE_DEVICE: "DELETE_DEVICE",
    SET_TERMINAL: "SET_TERMINAL",
    DELETE_TERMINAL: "DELETE_TERMINAL",
    HISTORY: "HISTORY"
  },
  events: {
    FONTS_LOADED: "FONTS_LOADED"
  },
  historySize: 30,
  commandPort: 22
};

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__(7);

var _styles = __webpack_require__(8);

var _ErrorMessage = _interopRequireWildcard(__webpack_require__(85));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ErrorMessage = (0, _styles.withStyles)(_ErrorMessage.styles)((0, _reactIntl.injectIntl)(_ErrorMessage.default));
var _default = ErrorMessage;
exports.default = _default;

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _react = _interopRequireDefault(__webpack_require__(2));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _reactIntl = __webpack_require__(7);

var _httpStatusCodes = _interopRequireDefault(__webpack_require__(86));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    layout: _defineProperty({
      width: "100%",
      maxWidth: 1300 + 2 * theme.main.spacing,
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.main.spacing
    }, theme.breakpoints.down("md"), {
      flexDirection: "column",
      padding: theme.main.spacing / 2,
      maxWidth: 1300 + theme.main.spacing
    }),
    code: _defineProperty({
      fontSize: "300%",
      textShadow: "2px 2px 4px #000000",
      padding: "0.5rem 2rem",
      color: "1px solid ".concat(theme.palette.text.primary),
      borderRight: "1px solid ".concat(theme.palette.text.disabled)
    }, theme.breakpoints.down("md"), {
      borderRight: "none"
    }),
    text: {
      fontSize: "200%",
      textShadow: "2px 2px 4px #000000",
      padding: "0.5rem 2rem",
      color: "1px solid ".concat(theme.palette.text.secondary)
    }
  };
};

exports.styles = styles;

var ErrorMessage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorMessage, _React$Component);

  function ErrorMessage() {
    _classCallCheck(this, ErrorMessage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorMessage).apply(this, arguments));
  }

  _createClass(ErrorMessage, [{
    key: "getCode",
    value: function getCode() {
      if (this.props.error) return this.props.intl.formatMessage({
        id: "ERROR"
      });
      if (!this.props.statusCode || this.props.statusCode === 200) return 500;
      return this.props.statusCode;
    }
  }, {
    key: "getText",
    value: function getText() {
      if (this.props.error) return this.props.error.message;
      return _httpStatusCodes.default.getStatusText(this.getCode());
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: this.props.classes.layout
      }, _react.default.createElement("div", {
        className: this.props.classes.code
      }, this.getCode()), _react.default.createElement("div", {
        className: this.props.classes.text
      }, this.getText()));
    }
  }]);

  return ErrorMessage;
}(_react.default.Component);

var _default = ErrorMessage;
exports.default = _default;

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ })

/******/ });