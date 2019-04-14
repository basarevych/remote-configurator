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
/******/ 	return __webpack_require__(__webpack_require__.s = "1eb6");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Opk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signOut = exports.signIn = exports.setStatus = exports.setCsrf = exports.setCookie = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var actions = _interopRequireWildcard(__webpack_require__("z+7x"));

var selectors = _interopRequireWildcard(__webpack_require__("p/Qe"));

var _state = __webpack_require__("E4eY");

var _getFormErrors = _interopRequireDefault(__webpack_require__("EUet"));

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

var _SignIn = _interopRequireDefault(__webpack_require__("1eZf"));

var _SignOut = _interopRequireDefault(__webpack_require__("DxzU"));

var setCookie = actions.setCookie;
exports.setCookie = setCookie;
var setCsrf = actions.setCsrf;
exports.setCsrf = setCsrf;

var fetchStatus = function fetchStatus() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
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
                return _context.abrupt("return", new _promise.default(function (resolve) {
                  return setTimeout(function () {
                    return resolve(fetchStatus());
                  }, 3000);
                }));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
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
      var _ref2 = (0, _asyncToGenerator2.default)(
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
        }, _callee2);
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
      var _ref4 = (0, _asyncToGenerator2.default)(
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
                  _context3.next = 7;
                  break;
                }

                _context3.next = 6;
                return dispatch(setStatus());

              case 6:
                return _context3.abrupt("return", true);

              case 7:
                return _context3.abrupt("return", (0, _getFormErrors.default)(data, "APP_AUTH_FAILED"));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
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
      var _ref5 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return dispatch(_state.appOperations.stop());

              case 2:
                _context4.next = 4;
                return (0, _SignOut.default)(di);

              case 4:
                window.location.href = "/";
                return _context4.abrupt("return", true);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x10, _x11, _x12) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.signOut = signOut;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "+fmV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("9Pu4");

var _ConfirmModal = _interopRequireWildcard(__webpack_require__("G//K"));

var ConfirmModal = (0, _styles.withStyles)(_ConfirmModal.styles)(_ConfirmModal.default);
var _default = ConfirmModal;
exports.default = _default;

/***/ }),

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "+z5V":
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

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0AQm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function tokenize(str, esc, sep) {
  var result = [];
  var tmp = "";

  for (var i = 0; i < str.length; i++) {
    var c = str.charAt(i);

    if (c === esc) {
      tmp += str.charAt(++i);
    } else if (c === sep) {
      result.push(tmp);
      tmp = "";
    } else {
      tmp += c;
    }
  }

  result.push(tmp);
  return result;
};

/***/ }),

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "0Yqw":
/***/ (function(module, exports) {

module.exports = require("relay-query-lookup-renderer");

/***/ }),

/***/ "1Pmw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.edit = exports.create = exports.editFirstSelected = exports.deselectAll = exports.selectAll = exports.setSelected = exports.hideEditModal = exports.showEditModal = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var actions = _interopRequireWildcard(__webpack_require__("fcv4"));

var selectors = _interopRequireWildcard(__webpack_require__("smpn"));

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

var _getFormErrors = _interopRequireDefault(__webpack_require__("EUet"));

var _CreateUser = _interopRequireDefault(__webpack_require__("2e9F"));

var _EditUser = _interopRequireDefault(__webpack_require__("8hF4"));

var _DeleteUser = _interopRequireDefault(__webpack_require__("faI2"));

var showEditModal = actions.showEditModal;
exports.showEditModal = showEditModal;
var hideEditModal = actions.hideEditModal;
exports.hideEditModal = hideEditModal;
var setSelected = actions.setSelected;
exports.setSelected = setSelected;
var selectAll = actions.selectAll;
exports.selectAll = selectAll;
var deselectAll = actions.deselectAll;
exports.deselectAll = deselectAll;

var editFirstSelected = function editFirstSelected() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch, getState) {
        var selected;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                selected = selectors.getSelected(getState());

                if (!selected.length) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", dispatch(actions.showEditModal({
                  userId: selected[0]
                })));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

exports.editFirstSelected = editFirstSelected;

var create = function create(_ref2) {
  var login = _ref2.login,
      password = _ref2.password,
      isAdmin = _ref2.isAdmin;
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _CreateUser.default)(di, {
                  login: login,
                  password: password,
                  roles: _.compact([isAdmin && _constants.default.roles.ADMIN])
                });

              case 2:
                data = _context2.sent;

                if (!_.get(data, "data.createUser.user.id", null)) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return dispatch(actions.hideEditModal());

              case 6:
                return _context2.abrupt("return", true);

              case 7:
                return _context2.abrupt("return", (0, _getFormErrors.default)(data));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4, _x5) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

exports.create = create;

var edit = function edit(_ref4) {
  var id = _ref4.id,
      login = _ref4.login,
      password = _ref4.password,
      isAdmin = _ref4.isAdmin;
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _EditUser.default)(di, {
                  id: id,
                  login: login,
                  password: password,
                  roles: _.compact([isAdmin && _constants.default.roles.ADMIN])
                });

              case 2:
                data = _context3.sent;

                if (!_.get(data, "data.editUser.user.id", null)) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 6;
                return dispatch(actions.hideEditModal());

              case 6:
                return _context3.abrupt("return", true);

              case 7:
                return _context3.abrupt("return", (0, _getFormErrors.default)(data));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x6, _x7, _x8) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.edit = edit;

var remove = function remove(_ref6) {
  var id = _ref6.id;
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _DeleteUser.default)(di, {
                  id: id
                });

              case 2:
                data = _context4.sent;
                return _context4.abrupt("return", !!_.get(data, "data.deleteUser.user.id", null));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x9, _x10, _x11) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.remove = remove;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "1SWC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.query = exports.styles = void 0;

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _reactRelay = __webpack_require__("iuEU");

var _Dialog = _interopRequireDefault(__webpack_require__("fEgT"));

var _DialogActions = _interopRequireDefault(__webpack_require__("1gBk"));

var _DialogContent = _interopRequireDefault(__webpack_require__("iTUb"));

var _DialogContentText = _interopRequireDefault(__webpack_require__("MbIc"));

var _DialogTitle = _interopRequireDefault(__webpack_require__("0Jp5"));

var _Grid = _interopRequireDefault(__webpack_require__("JQ2V"));

var _Button = _interopRequireDefault(__webpack_require__("Wh1t"));

var _red = _interopRequireDefault(__webpack_require__("RpH3"));

var _Relay = __webpack_require__("JyB7");

var _forms = __webpack_require__("h7lg");

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

var _editUser = _interopRequireDefault(__webpack_require__("EffS"));

var _createUser = _interopRequireDefault(__webpack_require__("NWIk"));

var styles = function styles() {
  return {
    error: {
      color: _red.default[500]
    },
    actions: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "1rem"
    }
  };
};

exports.styles = styles;

var query = function query() {
  return __webpack_require__("z+c5");
};

exports.query = query;

var EditUserModal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(EditUserModal, _React$Component);

  function EditUserModal(props) {
    var _this;

    (0, _classCallCheck2.default)(this, EditUserModal);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(EditUserModal).call(this, props));
    _this.state = {
      initialValues: null
    };
    _this.submit = _this.submit.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(EditUserModal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!this.props.isOpen && prevProps.isOpen) this.setState({
        initialValues: null
      });
    }
  }, {
    key: "submit",
    value: function () {
      var _submit = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var login, password, isAdmin, result;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                login = _ref.login, password = _ref.password, isAdmin = _ref.isAdmin;

                if (!this.props.currentId) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return this.props.onEdit(this.props.currentId, login, password, isAdmin);

              case 4:
                result = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.next = 9;
                return this.props.onCreate(login, password, isAdmin);

              case 9:
                result = _context.sent;

              case 10:
                return _context.abrupt("return", result === true ? {} : result);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function submit(_x) {
        return _submit.apply(this, arguments);
      }

      return submit;
    }()
  }, {
    key: "renderForm",
    value: function renderForm() {
      var _this2 = this;

      return _react.default.createElement(_forms.Form, {
        fields: this.props.currentId ? _editUser.default : _createUser.default,
        initialValues: this.state.initialValues,
        onSubmit: this.submit,
        render: function render(_ref2) {
          var submitting = _ref2.submitting,
              submitError = _ref2.submitError,
              handleSubmit = _ref2.handleSubmit;
          return _react.default.createElement(_Dialog.default, {
            maxWidth: "xs",
            classes: {
              paper: _this2.props.classes.paper
            },
            open: true,
            onClose: _this2.props.onCancel
          }, _react.default.createElement(_DialogTitle.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
            id: _this2.props.currentId ? "EDIT_USER_TITLE_EDIT" : "EDIT_USER_TITLE_CREATE"
          })), !!submitError && _react.default.createElement(_DialogContent.default, null, _.map(_.isArray(submitError) ? submitError : [submitError], function (error, index) {
            return _react.default.createElement(_DialogContentText.default, {
              key: "error-".concat(index),
              classes: {
                root: _this2.props.classes.error
              }
            }, _.isArray(error) ? _react.default.createElement(_reactIntl.FormattedMessage, {
              id: error[0],
              values: error[1]
            }) : _react.default.createElement(_reactIntl.FormattedMessage, {
              id: error
            }));
          })), _react.default.createElement(_DialogContent.default, null, _react.default.createElement(_Grid.default, {
            container: true,
            spacing: 16
          }, _react.default.createElement(_Grid.default, {
            item: true,
            xs: 12
          }, _react.default.createElement(_forms.Field, {
            name: "login",
            type: "text"
          })), _react.default.createElement(_Grid.default, {
            item: true,
            xs: 12
          }, _react.default.createElement(_forms.Field, {
            name: "password",
            type: "password"
          })), _react.default.createElement(_Grid.default, {
            item: true,
            xs: 12
          }, _react.default.createElement(_forms.Field, {
            name: "isAdmin",
            type: "checkbox"
          })))), _react.default.createElement(_DialogActions.default, {
            classes: {
              root: _this2.props.classes.actions
            }
          }, _react.default.createElement(_Button.default, {
            variant: "contained",
            color: "primary",
            disabled: submitting,
            onClick: _this2.props.onCancel
          }, _react.default.createElement(_reactIntl.FormattedMessage, {
            id: "EDIT_USER_CANCEL"
          })), _react.default.createElement(_Button.default, {
            variant: "contained",
            color: "secondary",
            disabled: submitting,
            onClick: handleSubmit
          }, _react.default.createElement(_reactIntl.FormattedMessage, {
            id: "EDIT_USER_SUBMIT"
          }))));
        }
      });
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(viewer) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return new _promise.default(function (resolve) {
                  return setTimeout(resolve);
                });

              case 2:
                if (!this.state.initialValues) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                this.setState({
                  initialValues: {
                    login: _.get(viewer, "user.login", ""),
                    password: "",
                    isAdmin: _.includes(_.get(viewer, "user.roles", []), _constants.default.roles.ADMIN)
                  }
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadData(_x2) {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.props.isOpen) return null;
      if (!this.props.currentId) return this.renderForm();
      return _react.default.createElement(_Relay.NextQueryRenderer, {
        query: query,
        variables: {
          currentId: this.props.currentId
        },
        render: function render(_ref3) {
          var error = _ref3.error,
              props = _ref3.props;
          if (error || !props) return null;

          _this3.loadData(props.viewer);

          return _this3.renderForm();
        }
      });
    }
  }]);
  return EditUserModal;
}(_react.default.Component);

var _default = EditUserModal;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "1eZf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("bI0k");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
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
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "1eb6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("NhoZ");


/***/ }),

/***/ "1gBk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "2e9F":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("gEav");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
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
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "30mr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "3giw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("9Pu4");

var _Checkbox = _interopRequireWildcard(__webpack_require__("a73a"));

var Checkbox = (0, _styles.withStyles)(_Checkbox.styles)(_Checkbox.default);
var _default = Checkbox;
exports.default = _default;

/***/ }),

/***/ "4VpM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FilledInput");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "59gi":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InfoOutlined");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "7Z6F":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isConnected = exports.isStopped = exports.isStarted = exports.getLocale = exports.getSelfRegistration = exports.getSshPort = exports.getSshHost = exports.getProxyOrigin = exports.getAppOrigin = exports.getSubscriptionsServer = exports.getStatusCode = exports.getCreated = void 0;

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

var isStopped = function isStopped(state) {
  return state.getIn(["app", "isStopped"]);
};

exports.isStopped = isStopped;

var isConnected = function isConnected(state) {
  return state.getIn(["app", "isConnected"]);
};

exports.isConnected = isConnected;

/***/ }),

/***/ "7s44":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "8Ey4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash ca3a9a8144949e7938d75afa6d0059d0
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserRole = "ADMIN" | "AUTHENTICATED" | "%future added value";
export type EditUserInput = {|
  id: string,
  login?: ?string,
  password?: ?string,
  roles?: ?$ReadOnlyArray<?UserRole>,
  clientMutationId?: ?string,
|};
export type EditUserMutationVariables = {|
  input: EditUserInput
|};
export type EditUserMutationResponse = {|
  +editUser: ?{|
    +user: ?{|
      +id: string
    |}
  |}
|};
export type EditUserMutation = {|
  variables: EditUserMutationVariables,
  response: EditUserMutationResponse,
|};
*/

/*
mutation EditUserMutation(
  $input: EditUserInput!
) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "EditUserInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "editUser",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "EditUserInput!"
    }],
    "concreteType": "EditUserPayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "EditUserMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "EditUserMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "EditUserMutation",
      "id": null,
      "text": "mutation EditUserMutation(\n  $input: EditUserInput!\n) {\n  editUser(input: $input) {\n    user {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '3e6c36e4a9a4bce4d918bd7dea47edbc';
module.exports = node;

/***/ }),

/***/ "8L3H":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = exports.getCookie = exports.setCookie = exports.start = exports.create = exports.stop = exports.setLocale = exports.setConnected = exports.setStatusCode = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var actions = _interopRequireWildcard(__webpack_require__("gRch"));

var _state = __webpack_require__("Yoxy");

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
      var _ref2 = (0, _asyncToGenerator2.default)(
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
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}; // called in App.costructor() client side


exports.create = create;

var start = function start() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return dispatch(_state.authOperations.setStatus());

              case 2:
                return _context2.abrupt("return", dispatch(actions.start()));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

exports.start = start;

var setCookie = function setCookie(_ref4) {
  var name = _ref4.name,
      value = _ref4.value,
      days = _ref4.days;
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                di.get("cookie").set(name, value, days);

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3, _x4, _x5) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.setCookie = setCookie;

var getCookie = function getCookie(_ref6) {
  var name = _ref6.name;
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", di.get("cookie").get(name));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x6, _x7, _x8) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.getCookie = getCookie;

var getToken = function getToken() {
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", di.get("fetcher").getToken());

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x9, _x10, _x11) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

exports.getToken = getToken;

/***/ }),

/***/ "8hF4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("8Ey4");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
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
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "9HlK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("9Pu4");

var _Radio = _interopRequireWildcard(__webpack_require__("iYPX"));

var Radio = (0, _styles.withStyles)(_Radio.styles)(_Radio.default);
var _default = Radio;
exports.default = _default;

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AV/6":
/***/ (function(module, exports) {

module.exports = require("relay-runtime");

/***/ }),

/***/ "Ai9N":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "Avpf":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$getOwnPropertySymbols = __webpack_require__("4mXO");

var _Object$keys = __webpack_require__("pLtp");

var defineProperty = __webpack_require__("xHqa");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _Object$keys(source);

    if (typeof _Object$getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(_Object$getOwnPropertySymbols(source).filter(function (sym) {
        return _Object$getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "BjFw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "BlHF":
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en.js");

/***/ }),

/***/ "CUfL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

/***/ }),

/***/ "Dxhi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("9Pu4");

var _Text = _interopRequireWildcard(__webpack_require__("IUnC"));

var Text = (0, _styles.withStyles)(_Text.styles)(_Text.default);
var _default = Text;
exports.default = _default;

/***/ }),

/***/ "DxzU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("RJ40");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
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
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "E4eY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appSelectors = exports.appOperations = exports.appTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__("FE/x"));

var appTypes = _interopRequireWildcard(__webpack_require__("rz8+"));

exports.appTypes = appTypes;

var appOperations = _interopRequireWildcard(__webpack_require__("8L3H"));

exports.appOperations = appOperations;

var appSelectors = _interopRequireWildcard(__webpack_require__("7Z6F"));

exports.appSelectors = appSelectors;
var _default = _reducers.default;
exports.default = _default;

/***/ }),

/***/ "EGUq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _List = _interopRequireDefault(__webpack_require__("0LMq"));

var _ListItem = _interopRequireDefault(__webpack_require__("c25J"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__("GLYF"));

var _ListItemText = _interopRequireDefault(__webpack_require__("W+03"));

var _InfoOutlined = _interopRequireDefault(__webpack_require__("59gi"));

var _ErrorOutlined = _interopRequireDefault(__webpack_require__("OFRV"));

var styles = function styles(theme) {
  return {
    list: {
      padding: 0
    },
    listItem: {
      paddingTop: "0.5rem",
      paddingLeft: "0.5rem",
      paddingRight: 0
    },
    info: {
      color: theme.palette.text.secondary
    },
    error: {
      color: theme.palette.text.secondary
    }
  };
};

exports.styles = styles;

var ErrorMessage =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(ErrorMessage, _React$PureComponent);

  function ErrorMessage() {
    (0, _classCallCheck2.default)(this, ErrorMessage);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ErrorMessage).apply(this, arguments));
  }

  (0, _createClass2.default)(ErrorMessage, [{
    key: "render",
    value: function render() {
      var _this = this;

      var list = [];

      if (this.props.messages) {
        list = list.concat(_.map(this.props.messages, function (item) {
          return {
            message: item
          };
        }));
      }

      if (this.props.errors) list = list.concat(_.map(this.props.errors, function (item) {
        return {
          error: item
        };
      }));
      return _react.default.createElement(_List.default, {
        classes: {
          root: this.props.classes.list
        }
      }, _.map(list, function (item, index) {
        return _react.default.createElement(_ListItem.default, {
          key: "message-".concat(index),
          classes: {
            root: _this.props.classes.listItem
          }
        }, _react.default.createElement(_ListItemIcon.default, null, item.message ? _react.default.createElement(_InfoOutlined.default, {
          className: _this.props.classes.info
        }) : _react.default.createElement(_ErrorOutlined.default, {
          className: _this.props.classes.info
        })), _react.default.createElement(_ListItemText.default, {
          classes: {
            primary: _this.props.classes.info
          },
          primary: _this.props.intl.formatMessage({
            id: item.message ? item.message : item.error
          })
        }));
      }));
    }
  }]);
  return ErrorMessage;
}(_react.default.PureComponent);

var _default = ErrorMessage;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "EUet":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFormErrors;

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _finalForm = __webpack_require__("MrYO");

function getFormErrors(data) {
  var defaultMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "OPERATION_FAILED";
  var result = {};
  var errors = _.get(data, "errors") || [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2.default)(errors), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var error = _step.value;
      if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result[_finalForm.FORM_ERROR] = (result[_finalForm.FORM_ERROR] || []).concat([error.message]);
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

  if (!_.keys(result).length) result = (0, _defineProperty2.default)({}, _finalForm.FORM_ERROR, defaultMessage);
  return result;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "EY6e":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertySymbols = __webpack_require__("4mXO");

var objectWithoutPropertiesLoose = __webpack_require__("L2E4");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (_Object$getOwnPropertySymbols) {
    var sourceSymbolKeys = _Object$getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "EffS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  login: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required|!ERROR_INVALID_LOGIN:re:^[a-z]+[a-z0-9]*$",
    label: "EDIT_USER_LOGIN_LABEL"
  },
  password: {
    validate: "password",
    label: "EDIT_USER_PASSWORD_LABEL"
  },
  isAdmin: {
    label: "EDIT_USER_ADMIN_LABEL"
  }
};

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "FE/x":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _now = _interopRequireDefault(__webpack_require__("Cg2A"));

var _reduxImmutable = __webpack_require__("RGyf");

var types = _interopRequireWildcard(__webpack_require__("rz8+"));

var _locales = _interopRequireDefault(__webpack_require__("fXLo"));

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
  isStopped: Boolean,
  isConnected: Boolean, // WebSocket
})
*/
var createdReducer = function createdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _now.default)();
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
  }

  return state;
};

var isStoppedReducer = function isStoppedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.STOP:
      return true;
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
  isStopped: isStoppedReducer,
  isConnected: isConnectedReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "G//K":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _Dialog = _interopRequireDefault(__webpack_require__("fEgT"));

var _DialogActions = _interopRequireDefault(__webpack_require__("1gBk"));

var _DialogContent = _interopRequireDefault(__webpack_require__("iTUb"));

var _DialogContentText = _interopRequireDefault(__webpack_require__("MbIc"));

var _DialogTitle = _interopRequireDefault(__webpack_require__("0Jp5"));

var _Button = _interopRequireDefault(__webpack_require__("Wh1t"));

var styles = function styles() {
  return {
    actions: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "1rem"
    }
  };
};

exports.styles = styles;

var ConfirmModal =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(ConfirmModal, _React$PureComponent);

  function ConfirmModal() {
    (0, _classCallCheck2.default)(this, ConfirmModal);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ConfirmModal).apply(this, arguments));
  }

  (0, _createClass2.default)(ConfirmModal, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Dialog.default, {
        maxWidth: "xs",
        open: this.props.isOpen,
        onClose: this.props.onCancel
      }, _react.default.createElement(_DialogTitle.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: this.props.title
      })), _react.default.createElement(_DialogContent.default, null, _react.default.createElement(_DialogContentText.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: this.props.text,
        values: this.props.values
      }))), _react.default.createElement(_DialogActions.default, {
        classes: {
          root: this.props.classes.actions
        }
      }, _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        onClick: this.props.onCancel
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: this.props.cancel
      })), _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "secondary",
        onClick: this.props.onSubmit
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: this.props.submit
      }))));
    }
  }]);
  return ConfirmModal;
}(_react.default.PureComponent);

var _default = ConfirmModal;
exports.default = _default;

/***/ }),

/***/ "GLYF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "H+JB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "styles", {
  enumerable: true,
  get: function get() {
    return _UserItem.styles;
  }
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("9Pu4");

var _reactRelay = __webpack_require__("iuEU");

var _state = __webpack_require__("rdLC");

var _UserItem = _interopRequireWildcard(__webpack_require__("JFrd"));

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    isSelected: _.includes(_state.usersSelectors.getSelected(state), props.node.id)
  };
};

var UserItem = (0, _reactRelay.createFragmentContainer)((0, _styles.withStyles)(_UserItem.styles)((0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps)(_UserItem.default))), {
  node: function node() {
    return __webpack_require__("dLP/");
  }
});
var _default = UserItem;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "HSb4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(theme) {
  return {
    "& table": {
      display: ["block", "!important"]
    },
    "& thead": {
      display: ["none", "!important"],
      background: [theme.palette.background.paper, "!important"]
    },
    "& tbody": {
      display: ["block", "!important"]
    },
    "& th": {
      display: ["block", "!important"],
      width: "100%",
      paddingLeft: ["1rem", "!important"],
      paddingRight: ["1rem", "!important"],
      "&:not(:last-child)": {
        borderColor: "transparent"
      }
    },
    "& td": {
      display: ["block", "!important"],
      width: "100%",
      paddingLeft: ["1rem", "!important"],
      paddingRight: ["1rem", "!important"],
      "&:not(:last-child)": {
        borderColor: "transparent"
      }
    },
    "& tr": {
      height: ["100%", "!important"],
      display: ["block", "!important"],
      paddingTop: ["0.25rem", "!important"],
      marginBottom: ["0.25rem", "!important"]
    }
  };
};

exports.default = _default;

/***/ }),

/***/ "I1eL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

var _parseInt2 = _interopRequireDefault(__webpack_require__("6BQ9"));

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var tokenize = __webpack_require__("0AQm");

var validator = __webpack_require__("WZpn");

var allCountries, iso2Lookup; //const { allCountries, iso2Lookup } = require("country-telephone-data");

/**
 * Normalizer function for Redux Form
 * takes input like "rule1:param1:param2|rule2:param1:param2|..."
 *
 * trim                       remove white space from the beginning and the end of value
 * compact:spaces             replace multiple occurences of space in a row with a single space
 * remove:spaces              remove spaces
 * rows:size                  forces "size" number of rows (1 if size is omitted)
 * integer                    removes everything except digits
 * phone                      forces international phone phormat
 * email                      normalizes email
 * credit_card:number         normalizes credit card number
 * credit_card:date           normalizes credit card expiration date
 * credit_card:secret         normalizes credit card CVV2 code
 */

module.exports = function normalize(options, value, allValues) {
  var rules = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2.default)(tokenize(options, "\\", "|")), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var rule = _step.value;
      var params = tokenize(rule, "\\", ":");
      if (!params.length) continue;
      var command = params.shift();
      rules[command] = params;
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

  var result = _.isUndefined(value) ? "" : _.toString(value);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = (0, _getIterator2.default)(_.keys(rules)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _command = _step2.value;
      var i = void 0;
      var tmp = void 0;
      var search = void 0;
      var isLongBreak = !!result.match(/\r\n/);

      switch (_command) {
        case "trim":
          // trims the input, no params
          tmp = [];
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = (0, _getIterator2.default)(_.split(_.trim(result), /\r\n?|\n/g)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var line = _step3.value;
              tmp.push(_.trim(line));
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          result = tmp.join(isLongBreak ? "\r\n" : "\n");
          break;

        case "compact":
          // with "spaces" param compacts spaces into single space preserving new lines
          if (_.includes(rules[_command], "spaces")) {
            tmp = [];
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = (0, _getIterator2.default)(_.split(result, /\r\n?|\n/g)), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _line = _step4.value;
                tmp.push(_.replace(_line, /\s+/g, " "));
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }

            result = tmp.join(isLongBreak ? "\r\n" : "\n");
          }

          break;

        case "remove":
          // with "spaces" param removes spaces inside the line preveserving new lines
          if (_.includes(rules[_command], "spaces")) {
            tmp = [];
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = (0, _getIterator2.default)(_.split(result, /\r\n?|\n/g)), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var _line2 = _step5.value;
                tmp.push(_.replace(_line2, /\s+/g, ""));
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                  _iterator5.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }

            result = tmp.join(isLongBreak ? "\r\n" : "\n");
          }

          break;

        case "rows":
          // first param is the number of rows in the result (defaults to 1)
          tmp = _.split(result, /\r\n?|\n/g);
          result = "";

          for (i = 0; i < tmp.length; i++) {
            if (i > 0 && i < (rules[_command].length ? (0, _parseInt2.default)(rules[_command][0]) : 1)) result += isLongBreak ? "\r\n" : "\n";
            result += tmp[i];
          }

          break;

        case "integer":
          result = _.replace(result, /[^0-9]+/g, "");
          break;

        case "phone":
          // converts input to internations phone number format
          // expect package 'country-telephone-data' and form field "country" to exist
          tmp = _.replace(result, /[^0-9]+/g, "");
          result = "";
          i = 0;
          search = allCountries && iso2Lookup && allCountries[iso2Lookup[allValues.country]];

          if (search && search.dialCode && _.startsWith(tmp, search.dialCode)) {
            result += search.dialCode + (search.dialCode.length < tmp.length ? " " : "");
            i = search.dialCode.length;
          }

          for (; i < tmp.length; i++) {
            if (i === 5 || i === 8 || i === 10) result += " ";
            result += tmp[i];
          }

          if (result.length) result = "+" + result;
          break;

        case "email":
          // normalizes email
          result = validator.normalizeEmail(result);
          if (result === "@") result = "";
          break;

        case "credit_card":
          // normalizes credit card attribute set by first param ("number", "date" or "secret")
          switch (rules[_command].length && rules[_command][0]) {
            case "number":
              tmp = _.replace(result, /[^0-9]+/g, "");
              result = "";

              for (i = 0; i < tmp.length; i++) {
                if (i > 0 && !(i % 4)) result += " ";
                result += tmp[i];
              }

              break;

            case "date":
              tmp = _.replace(result, /[^0-9]+/g, "");
              result = tmp.slice(0, 2);

              if (tmp.length > 2) {
                result += " / ";
                result += tmp.slice(2);
              }

              break;

            case "secret":
              result = _.replace(result, /[^0-9]+/g, "");
              break;
          }

          break;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return result;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "IUnC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _TextField = _interopRequireDefault(__webpack_require__("IbbU"));

var _FieldMessagesContainer = _interopRequireDefault(__webpack_require__("LT9N"));

var styles = function styles() {
  return {
    formHelper: {
      margin: 0
    }
  };
};

exports.styles = styles;

var MyText =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(MyText, _React$PureComponent);

  function MyText(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MyText);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MyText).call(this, props));
    _this.input = _react.default.createRef();
    _this.cachedValue = props.input.value;
    _this.cachedPosition = 0;
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(MyText, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.input.current) {
        // Fixes case when input is normalized in onChange() and
        // the cursor sometimes jumps to the end of input.
        var cur = this.props.input.value || "";
        var cached = this.cachedValue || "";

        if (this.cachedPosition !== cached.length) {
          var str = cached.substr(0, this.cachedPosition);
          var index = cur.indexOf(str);
          index = index === -1 ? this.cachedPosition : index + this.cachedPosition;
          var delta = cur.length - cached.length;
          if (cached !== str && delta > 0) index += delta;
          if (index <= cur.length) this.input.current.setSelectionRange(index, index);
        }
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(evt) {
      this.cachedPosition = evt.target.selectionEnd;
      this.cachedValue = evt.target.value;
      this.forceUpdate();
      return this.props.input.onChange(evt);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(evt) {
      this.cachedPosition = evt.target.selectionEnd;
      this.forceUpdate();
      return this.props.input.onFocus(evt);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(evt) {
      return this.props.input.onBlur(evt);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var errors = null;

      if (this.props.meta.touched && !this.props.meta.active && !this.props.meta.submitting && (this.props.meta.error || this.props.meta.submitError && !this.props.meta.dirtySinceLastSubmit)) {
        errors = [];
        if (this.props.meta.error) errors = errors.concat(this.props.meta.error);
        if (this.props.meta.submitError) errors = errors.concat(this.props.meta.submitError);
        errors = _.uniq(errors);
      }

      return _react.default.createElement(_TextField.default, {
        className: this.props.className,
        autoComplete: "off",
        autoFocus: this.props.autoFocus,
        fullWidth: true,
        variant: this.props.variant || (this.props.type === "textarea" ? "outlined" : "standard"),
        type: this.props.type,
        multiline: this.props.type === "textarea",
        rows: this.props.rows,
        rowsMax: this.props.rows,
        value: this.props.input.value ? this.props.input.value.toString() : "",
        label: this.props.label,
        disabled: this.props.meta.submitting || this.props.disabled,
        error: !!errors,
        FormHelperTextProps: {
          component: this.props.messages || errors ? "div" : undefined,
          classes: {
            root: this.props.classes.formHelper
          }
        },
        helperText: this.props.messages || errors ? _react.default.createElement(_FieldMessagesContainer.default, {
          messages: this.props.messages,
          errors: errors
        }) : undefined,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        inputRef: this.input,
        inputProps: {
          onKeyDown: function onKeyDown(evt) {
            if (_this2.props.type !== "textarea" && _this2.props.onSubmit && evt.keyCode === 13) {
              evt.preventDefault();
              evt.stopPropagation();

              _this2.props.form.blur(_this2.props.input.name);

              _this2.props.onSubmit();
            }
          }
        }
      });
    }
  }]);
  return MyText;
}(_react.default.PureComponent);

var _default = MyText;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "JFrd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _classnames = _interopRequireDefault(__webpack_require__("K2gz"));

var _reactIntl = __webpack_require__("k004");

var _TableCell = _interopRequireDefault(__webpack_require__("Ai9N"));

var _TableRow = _interopRequireDefault(__webpack_require__("iDDF"));

var _Checkbox = _interopRequireDefault(__webpack_require__("r6Lb"));

var styles = function styles() {
  return {
    checkboxField: {
      width: 1
    },
    checkbox: {
      padding: 0
    }
  };
};

exports.styles = styles;

var UserItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(UserItem, _React$Component);

  function UserItem() {
    (0, _classCallCheck2.default)(this, UserItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UserItem).apply(this, arguments));
  }

  (0, _createClass2.default)(UserItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_TableRow.default, null, _react.default.createElement(_TableCell.default, {
        padding: "checkbox",
        className: (0, _classnames.default)(this.props.isSelected && "selected"),
        classes: {
          root: this.props.classes.checkboxField
        }
      }, _react.default.createElement(_Checkbox.default, {
        checked: this.props.isSelected,
        classes: {
          root: this.props.classes.checkbox
        },
        onChange: function onChange() {
          return _this.props.onToggle(_this.props.node.id);
        },
        value: "on"
      })), _react.default.createElement(_TableCell.default, {
        className: (0, _classnames.default)(this.props.isSelected && "selected"),
        component: "th",
        scope: "row"
      }, this.props.node.login), _react.default.createElement(_TableCell.default, {
        className: (0, _classnames.default)(this.props.isSelected && "selected")
      }, _.map(this.props.node.roles, function (item) {
        return _this.props.intl.formatMessage({
          id: "EDIT_USER_".concat(item, "_LABEL")
        });
      }).join(", ")));
    }
  }]);
  return UserItem;
}(_react.default.Component);

var _default = UserItem;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "JyB7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribe = subscribe;
exports.fetchQuery = exports.NextQueryRenderer = exports.RelayProvider = exports.RelayContext = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _now = _interopRequireDefault(__webpack_require__("Cg2A"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactRelay = _interopRequireDefault(__webpack_require__("iuEU"));

var _relayRuntime = __webpack_require__("AV/6");

var _relayQueryLookupRenderer = _interopRequireDefault(__webpack_require__("0Yqw"));

var RelayContext = _react.default.createContext({});

exports.RelayContext = RelayContext;

var RelayProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(RelayProvider, _React$Component);

  function RelayProvider() {
    (0, _classCallCheck2.default)(this, RelayProvider);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RelayProvider).apply(this, arguments));
  }

  (0, _createClass2.default)(RelayProvider, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(RelayContext.Provider, {
        value: this.props.environment
      }, this.props.children);
    }
  }]);
  return RelayProvider;
}(_react.default.Component);

exports.RelayProvider = RelayProvider;

var NextQueryRenderer =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2.default)(NextQueryRenderer, _React$Component2);

  function NextQueryRenderer() {
    (0, _classCallCheck2.default)(this, NextQueryRenderer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NextQueryRenderer).apply(this, arguments));
  }

  (0, _createClass2.default)(NextQueryRenderer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children"]);
      return _react.default.createElement(RelayContext.Consumer, null, function (environment) {
        return _react.default.createElement(_relayQueryLookupRenderer.default, (0, _extends2.default)({
          lookup: true,
          environment: environment
        }, props), children);
      });
    }
  }]);
  return NextQueryRenderer;
}(_react.default.Component);

exports.NextQueryRenderer = NextQueryRenderer;

var fetchQuery = function fetchQuery(environment) {
  return function (query, variables) {
    return (0, _relayRuntime.fetchQuery)(environment, query, variables);
  };
};

exports.fetchQuery = fetchQuery;

function subscribe(_ref) {
  var environment = _ref.environment,
      subscription = _ref.subscription,
      variables = _ref.variables,
      getToken = _ref.getToken,
      minInterval = _ref.minInterval,
      callback = _ref.callback;
  var request = null;
  var isDestroyed = false;
  var callbackTime = 0;
  var callbackTimer = null;
  if (_.isUndefined(variables)) variables = {};
  if (_.isUndefined(minInterval)) minInterval = 1000;

  var doSubscribe =
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!getToken) {
                _context.next = 4;
                break;
              }

              _context.next = 3;
              return getToken();

            case 3:
              variables.token = _context.sent;

            case 4:
              if (!isDestroyed) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return");

            case 6:
              request = _reactRelay.default.requestSubscription(environment, {
                subscription: subscription,
                variables: variables,
                onCompleted: function onCompleted() {
                  request = null;
                  setTimeout(function () {
                    return doSubscribe().catch(console.error);
                  }, 1000);
                },
                onError: function onError(error) {
                  console.error(error);
                  request = null;
                  setTimeout(function () {
                    return doSubscribe().catch(console.error);
                  }, 1000);
                },
                onNext: function onNext() {
                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  if (isDestroyed || callbackTimer) return;
                  var delta = (0, _now.default)() - callbackTime;
                  callbackTimer = setTimeout(function () {
                    callbackTime = (0, _now.default)();
                    callbackTimer = null;
                    if (!isDestroyed) callback.apply(void 0, args);
                  }, delta < minInterval ? delta : 0);
                }
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function doSubscribe() {
      return _ref2.apply(this, arguments);
    };
  }();

  doSubscribe().catch(console.error);
  return function () {
    isDestroyed = true;

    if (callbackTimer) {
      clearTimeout(callbackTimer);
      callbackTimer = null;
    }

    if (request) {
      request.dispose();
      request = null;
    }
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "JzfM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("9Pu4");

var _Error = _interopRequireWildcard(__webpack_require__("ir66"));

var MyError = (0, _styles.withStyles)(_Error.styles)(_Error.default);
var _default = MyError;
exports.default = _default;

/***/ }),

/***/ "K0IL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _reactFinalForm = __webpack_require__("amB/");

var _context = _interopRequireDefault(__webpack_require__("mSjk"));

var _normalize = _interopRequireDefault(__webpack_require__("I1eL"));

var _validate2 = _interopRequireDefault(__webpack_require__("fAFH"));

var _TextContainer = _interopRequireDefault(__webpack_require__("Dxhi"));

var _SelectContainer = _interopRequireDefault(__webpack_require__("tmE+"));

var _CheckboxContainer = _interopRequireDefault(__webpack_require__("3giw"));

var _RadioContainer = _interopRequireDefault(__webpack_require__("9HlK"));

var _ErrorContainer = _interopRequireDefault(__webpack_require__("JzfM"));

var FormField =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(FormField, _React$Component);

  function FormField() {
    (0, _classCallCheck2.default)(this, FormField);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormField).apply(this, arguments));
  }

  (0, _createClass2.default)(FormField, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          name = _this$props.name,
          type = _this$props.type,
          label = _this$props.label,
          _validate = _this$props.validate,
          _parse = _this$props.parse,
          _format = _this$props.format,
          fieldProps = (0, _objectWithoutProperties2.default)(_this$props, ["name", "type", "label", "validate", "parse", "format"]); // eslint-disable-line

      var Component;

      switch (type) {
        case "text":
        case "password":
        case "textarea":
          Component = _TextContainer.default;
          break;

        case "select":
          Component = _SelectContainer.default;
          break;

        case "checkbox":
          Component = _CheckboxContainer.default;
          break;

        case "radio":
          Component = _RadioContainer.default;
          break;

        case "error":
          Component = _ErrorContainer.default;
          break;
      }

      return _react.default.createElement(_context.default.Consumer, null, function (_ref) {
        var fields = _ref.fields,
            values = _ref.values,
            form = _ref.form,
            handleSubmit = _ref.handleSubmit;
        return _react.default.createElement(_reactFinalForm.Field, (0, _extends2.default)({
          validateFields: []
        }, fieldProps, {
          form: form,
          component: Component,
          name: name,
          type: type,
          label: label || fields[name] && _this.props.intl.formatMessage({
            id: fields[name].label
          }),
          onSubmit: handleSubmit,
          validate: function validate(value, values) {
            var errors = [];

            if (fields[name]) {
              var options = fields[name].validate;
              if (options) errors = (0, _validate2.default)(options, value, values);
            }

            if (!errors.length) errors = undefined;
            if (_validate) return _validate(value, values, errors);
            return errors;
          },
          parse: function parse(value, name) {
            if (fields[name]) {
              var options = fields[name].normalize;
              if (options) value = (0, _normalize.default)(options, value, values);
            }

            if (_parse) return _parse(value, name);
            return value;
          },
          format: function format(value, name) {
            if (fields[name]) {
              var options = fields[name].transform;
              if (options) value = (0, _normalize.default)(options, value, values);
            }

            if (_format) return _format(value, name);
            return value;
          },
          formatOnBlur: true
        }));
      });
    }
  }]);
  return FormField;
}(_react.default.Component);

var _default = FormField;
exports.default = _default;

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KAMz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash a99c35aeb1f7ea4d967aaa99bc4afee5
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteUserInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteUserMutationVariables = {|
  input: DeleteUserInput
|};
export type DeleteUserMutationResponse = {|
  +deleteUser: ?{|
    +user: ?{|
      +id: string
    |}
  |}
|};
export type DeleteUserMutation = {|
  variables: DeleteUserMutationVariables,
  response: DeleteUserMutationResponse,
|};
*/

/*
mutation DeleteUserMutation(
  $input: DeleteUserInput!
) {
  deleteUser(input: $input) {
    user {
      id
    }
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteUserInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteUser",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "DeleteUserInput!"
    }],
    "concreteType": "DeleteUserPayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "DeleteUserMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "DeleteUserMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "DeleteUserMutation",
      "id": null,
      "text": "mutation DeleteUserMutation(\n  $input: DeleteUserInput!\n) {\n  deleteUser(input: $input) {\n    user {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'c41c3a031a3a3c187abf4960c8697c73';
module.exports = node;

/***/ }),

/***/ "KDWy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _styles = __webpack_require__("9Pu4");

var _state = __webpack_require__("rdLC");

var _EditUserModal = _interopRequireWildcard(__webpack_require__("1SWC"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: _state.usersSelectors.isEditModalOpen(state),
    currentId: _state.usersSelectors.getEditModalUserId(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onCancel: function onCancel() {
      return dispatch(_state.usersOperations.hideEditModal());
    },
    onCreate: function onCreate(login, password, isAdmin) {
      return dispatch(_state.usersOperations.create({
        login: login,
        password: password,
        isAdmin: isAdmin
      }));
    },
    onEdit: function onEdit(id, login, password, isAdmin) {
      return dispatch(_state.usersOperations.edit({
        id: id,
        login: login,
        password: password,
        isAdmin: isAdmin
      }));
    }
  };
};

var EditUserModal = (0, _styles.withStyles)(_EditUserModal.styles)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_EditUserModal.default));
var _default = EditUserModal;
exports.default = _default;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "L2E4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$keys = __webpack_require__("pLtp");

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _Object$keys(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "LT9N":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("9Pu4");

var _FieldMessages = _interopRequireWildcard(__webpack_require__("EGUq"));

var FieldMessages = (0, _styles.withStyles)(_FieldMessages.styles)((0, _reactIntl.injectIntl)(_FieldMessages.default));
var _default = FieldMessages;
exports.default = _default;

/***/ }),

/***/ "LZqe":
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "MbIc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "MrYO":
/***/ (function(module, exports) {

module.exports = require("final-form");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "NWIk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  login: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required|!ERROR_INVALID_LOGIN:re:^[a-z]+[a-z0-9]*$",
    label: "EDIT_USER_LOGIN_LABEL"
  },
  password: {
    validate: "required|password",
    label: "EDIT_USER_PASSWORD_LABEL"
  },
  isAdmin: {
    label: "EDIT_USER_ADMIN_LABEL"
  }
};

/***/ }),

/***/ "NhoZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _UsersPage.default;
  }
});

var _UsersPage = _interopRequireDefault(__webpack_require__("P51Y"));

/***/ }),

/***/ "OFRV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ErrorOutlined");

/***/ }),

/***/ "OdWO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "P51Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.query = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactRelay = __webpack_require__("iuEU");

var _Relay = __webpack_require__("JyB7");

var _UserListContainer = _interopRequireWildcard(__webpack_require__("Xbou"));

var _ErrorMessageContainer = _interopRequireDefault(__webpack_require__("Y3Ay"));

var defaultVariables = {
  first: _UserListContainer.pageSize
};

var query = function query() {
  return __webpack_require__("Zn37");
};

exports.query = query;

var UsersPage =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(UsersPage, _React$Component);

  function UsersPage() {
    (0, _classCallCheck2.default)(this, UsersPage);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UsersPage).apply(this, arguments));
  }

  (0, _createClass2.default)(UsersPage, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Relay.NextQueryRenderer, {
        query: query,
        variables: defaultVariables,
        render: function render(_ref) {
          var error = _ref.error,
              props = _ref.props;
          if (error) return _react.default.createElement(_ErrorMessageContainer.default, {
            error: error
          });
          if (!props) return null;
          return _react.default.createElement(_UserListContainer.default, {
            viewer: props.viewer
          });
        }
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref2) {
        var statusCode, fetchQuery;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                statusCode = _ref2.statusCode, fetchQuery = _ref2.fetchQuery;

                if (!(statusCode === 200)) {
                  _context.next = 4;
                  break;
                }

                _context.next = 4;
                return fetchQuery(query, defaultVariables);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return UsersPage;
}(_react.default.Component);

var _default = UsersPage;
exports.default = _default;

/***/ }),

/***/ "PmAW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__("k004");

var _Field = _interopRequireDefault(__webpack_require__("K0IL"));

var Field = (0, _reactIntl.injectIntl)(_Field.default);
var _default = Field;
exports.default = _default;

/***/ }),

/***/ "RGyf":
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),

/***/ "RJ40":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 865cce8ddb297161c467f77194d19177
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignOutInput = {|
  clientMutationId?: ?string
|};
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
    "fragment": {
      "kind": "Fragment",
      "name": "SignOutMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "SignOutMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "SignOutMutation",
      "id": null,
      "text": "mutation SignOutMutation(\n  $input: SignOutInput!\n) {\n  signOut(input: $input) {\n    success\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '417ec230bfa986933ff799e6fab9074c';
module.exports = node;

/***/ }),

/***/ "RpH3":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "TWtx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "Ty80":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //const moment = require("moment-timezone");

var moment = __webpack_require__("wy2R"); // Add locales:
//require("moment/locale/ru.js"); // en is already there


module.exports = moment;

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "V0Tl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash da1e85b93ab4d46e7174f0ee3d5a7d49
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserListContainer_viewer$ref = any;
export type UserListContainerQueryVariables = {|
  first?: ?number,
  after?: ?string,
  last?: ?number,
  before?: ?string,
|};
export type UserListContainerQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: UserListContainer_viewer$ref
  |}
|};
export type UserListContainerQuery = {|
  variables: UserListContainerQueryVariables,
  response: UserListContainerQueryResponse,
|};
*/

/*
query UserListContainerQuery(
  $first: Int
  $after: String
  $last: Int
  $before: String
) {
  viewer {
    ...UserListContainer_viewer_pbnwq
  }
}

fragment UserListContainer_viewer_pbnwq on Viewer {
  users(first: $first, after: $after, last: $last, before: $before) {
    edges {
      cursor
      node {
        id
        ...UserItemContainer_node
      }
    }
    totalCount
  }
}

fragment UserItemContainer_node on User {
  id
  login
  roles
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "last",
    "type": "Int",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "before",
    "type": "String",
    "defaultValue": null
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "UserListContainerQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": [{
        "kind": "LinkedField",
        "alias": "viewer",
        "name": "__viewer_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "UserListContainer_viewer",
          "args": [{
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": null
          }, {
            "kind": "Variable",
            "name": "before",
            "variableName": "before",
            "type": null
          }, {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": null
          }, {
            "kind": "Variable",
            "name": "last",
            "variableName": "last",
            "type": null
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "UserListContainerQuery",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "users",
          "storageKey": null,
          "args": [{
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": "String"
          }, {
            "kind": "Variable",
            "name": "before",
            "variableName": "before",
            "type": "String"
          }, {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": "Int"
          }, {
            "kind": "Variable",
            "name": "last",
            "variableName": "last",
            "type": "Int"
          }],
          "concreteType": "UserConnection",
          "plural": false,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "UserEdge",
            "plural": true,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }, {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "User",
              "plural": false,
              "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "login",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "roles",
                "args": null,
                "storageKey": null
              }]
            }]
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalCount",
            "args": null,
            "storageKey": null
          }]
        }]
      }, {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "viewer",
        "args": null,
        "handle": "viewer",
        "key": "",
        "filters": null
      }]
    },
    "params": {
      "operationKind": "query",
      "name": "UserListContainerQuery",
      "id": null,
      "text": "query UserListContainerQuery(\n  $first: Int\n  $after: String\n  $last: Int\n  $before: String\n) {\n  viewer {\n    ...UserListContainer_viewer_pbnwq\n  }\n}\n\nfragment UserListContainer_viewer_pbnwq on Viewer {\n  users(first: $first, after: $after, last: $last, before: $before) {\n    edges {\n      cursor\n      node {\n        id\n        ...UserItemContainer_node\n      }\n    }\n    totalCount\n  }\n}\n\nfragment UserItemContainer_node on User {\n  id\n  login\n  roles\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'de4537127a5018c61d0da25a45c8eeb2';
module.exports = node;

/***/ }),

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "WZpn":
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "Xbou":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "pageSize", {
  enumerable: true,
  get: function get() {
    return _UserList.pageSize;
  }
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _reactRelay = __webpack_require__("iuEU");

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("9Pu4");

var _state = __webpack_require__("E4eY");

var _state2 = __webpack_require__("rdLC");

var _UserList = _interopRequireWildcard(__webpack_require__("i1Ni"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    selected: _state2.usersSelectors.getSelected(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getToken: function getToken() {
      return dispatch(_state.appOperations.getToken());
    },
    onCreate: function onCreate() {
      return dispatch(_state2.usersOperations.showEditModal());
    },
    onEdit: function onEdit() {
      return dispatch(_state2.usersOperations.editFirstSelected());
    },
    onDelete: function onDelete(userId) {
      return dispatch(_state2.usersOperations.remove({
        id: userId
      }));
    },
    onSetSelected: function onSetSelected(userId, isSelected) {
      return dispatch(_state2.usersOperations.setSelected({
        userId: userId,
        isSelected: isSelected
      }));
    },
    onSelectAll: function onSelectAll(userIds) {
      return dispatch(_state2.usersOperations.selectAll({
        userIds: userIds
      }));
    },
    onDeselectAll: function onDeselectAll(exceptUserIds) {
      return dispatch(_state2.usersOperations.deselectAll({
        exceptUserIds: exceptUserIds
      }));
    }
  };
};

var UserList = (0, _reactRelay.createRefetchContainer)((0, _styles.withStyles)(_UserList.styles)((0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_UserList.default))), {
  viewer: function viewer() {
    return __webpack_require__("iooE");
  }
}, function () {
  return __webpack_require__("V0Tl");
});
var _default = UserList;
exports.default = _default;

/***/ }),

/***/ "Y3Ay":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("9Pu4");

var _ErrorMessage = _interopRequireWildcard(__webpack_require__("p198"));

var ErrorMessage = (0, _styles.withStyles)(_ErrorMessage.styles)((0, _reactIntl.injectIntl)(_ErrorMessage.default));
var _default = ErrorMessage;
exports.default = _default;

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Yoxy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authSelectors = exports.authOperations = exports.authTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__("xbgq"));

var authTypes = _interopRequireWildcard(__webpack_require__("+z5V"));

exports.authTypes = authTypes;

var authOperations = _interopRequireWildcard(__webpack_require__("+Opk"));

exports.authOperations = authOperations;

var authSelectors = _interopRequireWildcard(__webpack_require__("p/Qe"));

exports.authSelectors = authSelectors;
var _default = _reducers.default;
exports.default = _default;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "Zn37":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash da661b9590c5eebf6d110110a7055d55
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserListContainer_viewer$ref = any;
export type UsersPageQueryVariables = {|
  first?: ?number,
  after?: ?string,
  last?: ?number,
  before?: ?string,
|};
export type UsersPageQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: UserListContainer_viewer$ref
  |}
|};
export type UsersPageQuery = {|
  variables: UsersPageQueryVariables,
  response: UsersPageQueryResponse,
|};
*/

/*
query UsersPageQuery(
  $first: Int
  $after: String
  $last: Int
  $before: String
) {
  viewer {
    ...UserListContainer_viewer_pbnwq
  }
}

fragment UserListContainer_viewer_pbnwq on Viewer {
  users(first: $first, after: $after, last: $last, before: $before) {
    edges {
      cursor
      node {
        id
        ...UserItemContainer_node
      }
    }
    totalCount
  }
}

fragment UserItemContainer_node on User {
  id
  login
  roles
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "last",
    "type": "Int",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "before",
    "type": "String",
    "defaultValue": null
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "UsersPageQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": [{
        "kind": "LinkedField",
        "alias": "viewer",
        "name": "__viewer_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "UserListContainer_viewer",
          "args": [{
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": null
          }, {
            "kind": "Variable",
            "name": "before",
            "variableName": "before",
            "type": null
          }, {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": null
          }, {
            "kind": "Variable",
            "name": "last",
            "variableName": "last",
            "type": null
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "UsersPageQuery",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "users",
          "storageKey": null,
          "args": [{
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": "String"
          }, {
            "kind": "Variable",
            "name": "before",
            "variableName": "before",
            "type": "String"
          }, {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": "Int"
          }, {
            "kind": "Variable",
            "name": "last",
            "variableName": "last",
            "type": "Int"
          }],
          "concreteType": "UserConnection",
          "plural": false,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "UserEdge",
            "plural": true,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }, {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "User",
              "plural": false,
              "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "login",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "roles",
                "args": null,
                "storageKey": null
              }]
            }]
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalCount",
            "args": null,
            "storageKey": null
          }]
        }]
      }, {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "viewer",
        "args": null,
        "handle": "viewer",
        "key": "",
        "filters": null
      }]
    },
    "params": {
      "operationKind": "query",
      "name": "UsersPageQuery",
      "id": null,
      "text": "query UsersPageQuery(\n  $first: Int\n  $after: String\n  $last: Int\n  $before: String\n) {\n  viewer {\n    ...UserListContainer_viewer_pbnwq\n  }\n}\n\nfragment UserListContainer_viewer_pbnwq on Viewer {\n  users(first: $first, after: $after, last: $last, before: $before) {\n    edges {\n      cursor\n      node {\n        id\n        ...UserItemContainer_node\n      }\n    }\n    totalCount\n  }\n}\n\nfragment UserItemContainer_node on User {\n  id\n  login\n  roles\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '7e202e5982e14d72cbadfc07ab5220df';
module.exports = node;

/***/ }),

/***/ "a73a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _FormControl = _interopRequireDefault(__webpack_require__("lWoh"));

var _FormControlLabel = _interopRequireDefault(__webpack_require__("7s44"));

var _FormHelperText = _interopRequireDefault(__webpack_require__("hbHv"));

var _Checkbox = _interopRequireDefault(__webpack_require__("r6Lb"));

var _FieldMessagesContainer = _interopRequireDefault(__webpack_require__("LT9N"));

var styles = function styles() {
  return {
    formHelper: {
      margin: 0
    },
    label: {
      marginLeft: 0
    }
  };
};

exports.styles = styles;

var MyCheckbox =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(MyCheckbox, _React$PureComponent);

  function MyCheckbox() {
    (0, _classCallCheck2.default)(this, MyCheckbox);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MyCheckbox).apply(this, arguments));
  }

  (0, _createClass2.default)(MyCheckbox, [{
    key: "render",
    value: function render() {
      var _this = this;

      var errors = null;

      if (this.props.meta.touched && !this.props.meta.active && !this.props.meta.submitting && (this.props.meta.error || this.props.meta.submitError && !this.props.meta.dirtySinceLastSubmit)) {
        errors = [];
        if (this.props.meta.error) errors = errors.concat(this.props.meta.error);
        if (this.props.meta.submitError) errors = errors.concat(this.props.meta.submitError);
        errors = _.uniq(errors);
      }

      return _react.default.createElement(_FormControl.default, {
        className: this.props.className,
        variant: this.props.variant || "standard",
        fullWidth: true,
        error: !!errors
      }, _react.default.createElement(_FormControlLabel.default, {
        classes: {
          root: this.props.classes.label
        },
        label: this.props.label,
        control: _react.default.createElement(_Checkbox.default, {
          name: this.props.input.name,
          value: "on",
          autoFocus: this.props.autoFocus,
          checked: this.props.input.value,
          disabled: this.props.meta.submitting || this.props.disabled,
          color: this.props.color || "primary",
          onChange: this.props.input.onChange,
          onBlur: this.props.input.onBlur,
          onFocus: this.props.input.onFocus,
          inputProps: {
            onKeyDown: function onKeyDown(evt) {
              if (_this.props.onSubmit && evt.keyCode === 13) {
                evt.preventDefault();
                evt.stopPropagation();

                _this.props.form.blur(_this.props.input.name);

                _this.props.onSubmit();
              }
            }
          }
        })
      }), !!(this.props.messages || errors) && _react.default.createElement(_FormHelperText.default, {
        component: "div",
        classes: {
          root: this.props.classes.formHelper
        }
      }, _react.default.createElement(_FieldMessagesContainer.default, {
        messages: this.props.messages,
        errors: errors
      })));
    }
  }]);
  return MyCheckbox;
}(_react.default.PureComponent);

var _default = MyCheckbox;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "amB/":
/***/ (function(module, exports) {

module.exports = require("react-final-form");

/***/ }),

/***/ "bI0k":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash c5beb0a0504b2cb87bdaa407d15f3dff
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignInInput = {|
  login?: ?string,
  password?: ?string,
  clientMutationId?: ?string,
|};
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
    "fragment": {
      "kind": "Fragment",
      "name": "SignInMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "SignInMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "SignInMutation",
      "id": null,
      "text": "mutation SignInMutation(\n  $input: SignInInput!\n) {\n  signIn(input: $input) {\n    success\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '153fa344d90b87f0fcb641bc7a1ed120';
module.exports = node;

/***/ }),

/***/ "bign":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 0127336e72ce26088ca1a2e38be6f39c
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserListSubscriptionVariables = {|
  token?: ?string
|};
export type UserListSubscriptionResponse = {|
  +userEvent: ?{|
    +id: string
  |}
|};
export type UserListSubscription = {|
  variables: UserListSubscriptionVariables,
  response: UserListSubscriptionResponse,
|};
*/

/*
subscription UserListSubscription(
  $token: String
) {
  userEvent(token: $token) {
    id
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "token",
    "type": "String",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "userEvent",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "token",
      "variableName": "token",
      "type": "String"
    }],
    "concreteType": "User",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "UserListSubscription",
      "type": "Subscription",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "UserListSubscription",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "subscription",
      "name": "UserListSubscription",
      "id": null,
      "text": "subscription UserListSubscription(\n  $token: String\n) {\n  userEvent(token: $token) {\n    id\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'd6b2e28f11d158c6939fc06a57c861cd';
module.exports = node;

/***/ }),

/***/ "bzUq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TablePagination");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dLP/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ReaderFragment } from 'relay-runtime';
export type UserRole = "ADMIN" | "AUTHENTICATED" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserItemContainer_node$ref: FragmentReference;
export type UserItemContainer_node = {|
  +id: string,
  +login: string,
  +roles: $ReadOnlyArray<?UserRole>,
  +$refType: UserItemContainer_node$ref,
|};
*/

var node
/*: ReaderFragment*/
= {
  "kind": "Fragment",
  "name": "UserItemContainer_node",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "login",
    "args": null,
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "roles",
    "args": null,
    "storageKey": null
  }]
}; // prettier-ignore

node
/*: any*/
.hash = 'b0e614fc1e6fc28cf407cfdc175476bb';
module.exports = node;

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fAFH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

var _parseInt2 = _interopRequireDefault(__webpack_require__("6BQ9"));

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var tokenize = __webpack_require__("0AQm");

var validator = __webpack_require__("WZpn");

var allCountries, iso2Lookup; //const { allCountries, iso2Lookup } = require("country-telephone-data");

/**
 * Validation function for Redux Form
 * takes input like "rule1:param1:param2|rule2:param1:param2|..."
 *
 * re:regexp:flags            value should match the regular expression "regexp" with "flags"
 * required                   value is required
 * required:otherField        value is required if otherField is not empty
 * phone                      value is a phone number
 * email                      value is an email
 * password:length            value is a password of "length" characters (6 if omitted)
 * credit_card:number         value is credit card number
 * credit_card:date           value is credit card expiration date
 * credit_card:secret         value is credit card CVV2 code
 * match:otherField           value should be the same as the value of otherField
 */

module.exports = function validate(options, value, allValues) {
  var rules = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2.default)(tokenize(options, "\\", "|")), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var rule = _step.value;
      var params = tokenize(rule, "\\", ":");
      if (!params.length) continue;
      var msg = void 0;
      if (params[0][0] === "!") msg = params.shift().slice(1);

      var _command = params.shift();

      rules[_command] = {
        msg: msg,
        params: params
      };
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

  value = _.isUndefined(value) ? "" : _.toString(value);

  var commands = _.keys(rules);

  var errors = [];

  if (validator.isEmpty(value)) {
    // when string is empty only "required" command is triggered
    if (_.includes(commands, "required")) {
      // optional first param is the name of other field that should
      // be non-empty for this to be triggered, always triggered otherwise
      var failed = true;

      if (allValues && rules.required.params.length && rules.required.params[0]) {
        var other = allValues[rules.required.params[0]];
        if (!other || !other.length) failed = false;
      }

      if (failed) errors.push("ERROR_FIELD_REQUIRED");
    }
  } else {
    // all the other rules only apply to non-empty value
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = (0, _getIterator2.default)(commands), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var command = _step2.value;
        var success = void 0;
        var tmp = void 0;
        var search = void 0;
        var normalized = void 0;

        switch (command) {
          case "re":
            tmp = new RegExp(rules[command].params[0], rules[command].params[1] || undefined);
            success = value.match(tmp);
            if (!success) errors.push(rules[command].msg || "ERROR_INVALID_PATTERN");
            break;

          case "phone":
            // validate phone number in international format
            if (!validator.isEmpty(value)) {
              normalized = _.replace(value, /[^0-9]+/g, "");

              if (normalized.length !== 12) {
                errors.push(rules[command].msg || "ERROR_INVALID_PHONE");
              } else {
                search = allCountries && iso2Lookup && allCountries[iso2Lookup[allValues.country]];
                if (search && search.dialCode) success = _.startsWith(normalized, search.dialCode);else success = true;

                if (!success) {
                  errors.push(rules[command].msg || "ERROR_INVALID_PHONE_COUNTRY");
                }
              }
            }

            break;

          case "email":
            // validate email
            if (!validator.isEmail(value)) errors.push(rules[command].msg || "ERROR_INVALID_EMAIL");
            break;

          case "password":
            // validate password, first param is password length (6 by default)
            tmp = rules[command].params.length && rules[command].params[0] || 6;
            if (value.length < tmp) errors.push(rules[command].msg || "ERROR_INVALID_PASSWORD");
            break;

          case "credit_card":
            // validate credit card attribute set by first param ("number", "date" or "secret")
            normalized = _.replace(value, /[^0-9]+/g, "");

            switch (rules[command].params.length && rules[command].params[0]) {
              case "number":
                if (normalized.length !== 16 || !validator.isCreditCard(normalized)) {
                  errors.push(rules[command].msg || "ERROR_INVALID_CREDIT_CARD_NUMBER");
                }

                break;

              case "date":
                if (normalized.length !== 4) {
                  errors.push(rules[command].msg || "ERROR_INVALID_CREDIT_CARD_DATE");
                } else {
                  tmp = [(0, _parseInt2.default)(normalized.slice(0, 2)), (0, _parseInt2.default)(normalized.slice(2))];

                  if (tmp[0] < 1 || tmp[0] > 12 || tmp[1] < new Date().getFullYear() - 2000) {
                    errors.push(rules[command].msg || "ERROR_INVALID_CREDIT_CARD_DATE");
                  }
                }

                break;

              case "secret":
                if (normalized.length !== 3) {
                  errors.push(rules[command].msg || "ERROR_INVALID_CREDIT_CARD_SECRET");
                }

                break;
            }

            break;

          case "match":
            // this rule is triggered when field set by first param has other value than this one
            tmp = rules[command].params.length && rules[command].params[0];
            if (tmp && allValues && allValues[tmp] !== value) errors.push(rules[command].msg || "ERROR_MISMATCHED_VALUES");
            break;
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  return errors;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "fXLo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

function parse(source) {
  var messages = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2.default)(_.keys(source)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
    en: parse(__webpack_require__("vmr9"))
  },
  getLocaleData: function getLocaleData() {
    return [__webpack_require__("BlHF")];
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "faI2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("KAMz");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
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
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "fcv4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideEditModal = exports.showEditModal = exports.deselectAll = exports.selectAll = exports.setSelected = void 0;

var types = _interopRequireWildcard(__webpack_require__("sTFT"));

var setSelected = function setSelected(_ref) {
  var userId = _ref.userId,
      isSelected = _ref.isSelected;
  return {
    type: types.SET_SELECTED,
    userId: userId,
    isSelected: isSelected
  };
};

exports.setSelected = setSelected;

var selectAll = function selectAll(_ref2) {
  var userIds = _ref2.userIds;
  return {
    type: types.SELECT_ALL,
    userIds: userIds
  };
};

exports.selectAll = selectAll;

var deselectAll = function deselectAll() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      exceptUserIds = _ref3.exceptUserIds;

  return {
    type: types.DESELECT_ALL,
    exceptUserIds: exceptUserIds
  };
};

exports.deselectAll = deselectAll;

var showEditModal = function showEditModal() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      userId = _ref4.userId;

  return {
    type: types.SHOW_EDIT_MODAL,
    userId: userId
  };
};

exports.showEditModal = showEditModal;

var hideEditModal = function hideEditModal() {
  return {
    type: types.HIDE_EDIT_MODAL
  };
};

exports.hideEditModal = hideEditModal;

/***/ }),

/***/ "gEav":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash f9aba9dfbde705c1132b42161d82089b
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserRole = "ADMIN" | "AUTHENTICATED" | "%future added value";
export type CreateUserInput = {|
  login?: ?string,
  password?: ?string,
  roles?: ?$ReadOnlyArray<?UserRole>,
  clientMutationId?: ?string,
|};
export type CreateUserMutationVariables = {|
  input: CreateUserInput
|};
export type CreateUserMutationResponse = {|
  +createUser: ?{|
    +user: ?{|
      +id: string
    |}
  |}
|};
export type CreateUserMutation = {|
  variables: CreateUserMutationVariables,
  response: CreateUserMutationResponse,
|};
*/

/*
mutation CreateUserMutation(
  $input: CreateUserInput!
) {
  createUser(input: $input) {
    user {
      id
    }
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateUserInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "createUser",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "CreateUserInput!"
    }],
    "concreteType": "CreateUserPayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "CreateUserMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "CreateUserMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "CreateUserMutation",
      "id": null,
      "text": "mutation CreateUserMutation(\n  $input: CreateUserInput!\n) {\n  createUser(input: $input) {\n    user {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'e10e0a2a6b930a44cda50e71a629c8f3';
module.exports = node;

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gRch":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocale = exports.setConnected = exports.setStatusCode = exports.stop = exports.start = exports.create = void 0;

var _moment = _interopRequireDefault(__webpack_require__("Ty80"));

var types = _interopRequireWildcard(__webpack_require__("rz8+"));

var create = function create(data) {
  return _.assign({
    type: types.CREATE
  }, data);
};

exports.create = create;

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "h7lg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FormContext", {
  enumerable: true,
  get: function get() {
    return _context.default;
  }
});
Object.defineProperty(exports, "Form", {
  enumerable: true,
  get: function get() {
    return _Form.default;
  }
});
Object.defineProperty(exports, "Field", {
  enumerable: true,
  get: function get() {
    return _FieldContainer.default;
  }
});
Object.defineProperty(exports, "FormSpy", {
  enumerable: true,
  get: function get() {
    return _reactFinalForm.FormSpy;
  }
});

var _context = _interopRequireDefault(__webpack_require__("mSjk"));

var _Form = _interopRequireDefault(__webpack_require__("p8rN"));

var _FieldContainer = _interopRequireDefault(__webpack_require__("PmAW"));

var _reactFinalForm = __webpack_require__("amB/");

/***/ }),

/***/ "hbHv":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "i1Ni":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = exports.pageSize = void 0;

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("Avpf"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _reactRelay = __webpack_require__("iuEU");

var _Typography = _interopRequireDefault(__webpack_require__("UVoM"));

var _Button = _interopRequireDefault(__webpack_require__("Wh1t"));

var _Toolbar = _interopRequireDefault(__webpack_require__("Ms0O"));

var _IconButton = _interopRequireDefault(__webpack_require__("EmCc"));

var _Table = _interopRequireDefault(__webpack_require__("BjFw"));

var _TableBody = _interopRequireDefault(__webpack_require__("30mr"));

var _TableCell = _interopRequireDefault(__webpack_require__("Ai9N"));

var _TableHead = _interopRequireDefault(__webpack_require__("TWtx"));

var _TableRow = _interopRequireDefault(__webpack_require__("iDDF"));

var _TablePagination = _interopRequireDefault(__webpack_require__("bzUq"));

var _Paper = _interopRequireDefault(__webpack_require__("qt1I"));

var _Checkbox = _interopRequireDefault(__webpack_require__("r6Lb"));

var _Refresh = _interopRequireDefault(__webpack_require__("uQSa"));

var _responsiveTable = _interopRequireDefault(__webpack_require__("HSb4"));

var _UserItemContainer = _interopRequireWildcard(__webpack_require__("H+JB"));

var _EditUserModalContainer = _interopRequireDefault(__webpack_require__("KDWy"));

var _ConfirmModalContainer = _interopRequireDefault(__webpack_require__("+fmV"));

var _Relay = __webpack_require__("JyB7");

var pageSize = 10;
exports.pageSize = pageSize;

var styles = function styles(theme) {
  return (0, _objectSpread2.default)({
    layout: {
      width: "100%",
      flex: 1,
      padding: theme.main.spacing
    },
    buttons: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignContent: "stretch"
    },
    button: {
      margin: "0.5rem"
    },
    paper: {
      background: theme.main.paper
    },
    table: (0, _defineProperty2.default)({}, theme.breakpoints.down("sm"), (0, _responsiveTable.default)(theme)),
    grow: {
      flex: 1
    }
  }, (0, _UserItemContainer.styles)(theme));
};

exports.styles = styles;

var subscription = function subscription() {
  return __webpack_require__("bign");
};

var UserList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(UserList, _React$Component);

  function UserList(props) {
    var _this;

    (0, _classCallCheck2.default)(this, UserList);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UserList).call(this, props));
    _this.state = {
      pageSize: pageSize,
      pageNumber: 0,
      variables: {
        first: pageSize
      },
      isConfirmOpen: false
    };
    _this.handleToggle = _this.handleToggle.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleCreateAction = _this.handleCreateAction.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleEditAction = _this.handleEditAction.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleDeleteAction = _this.handleDeleteAction.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleCancelDelete = _this.handleCancelDelete.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleConfirmDelete = _this.handleConfirmDelete.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRefreshAction = _this.handleRefreshAction.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleChangePage = _this.handleChangePage.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleChangeRowsPerPage = _this.handleChangeRowsPerPage.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(UserList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.unsubscribe = (0, _Relay.subscribe)({
        subscription: subscription,
        getToken: this.props.getToken,
        environment: this.context,
        callback: this.handleRefreshAction
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var total = _.get(this.props.viewer, "users.totalCount", 0);

      if (total && this.state.pageNumber * this.state.pageSize >= total) {
        // we fell off the list - reset to the beginning
        var variables = {
          first: this.state.pageSize
        };
        setTimeout(function () {
          _this2.setState({
            pageNumber: 0,
            variables: variables
          }, function () {
            return _this2.props.relay.refetch(variables, null, null, {
              force: true
            });
          });
        });
      }

      this.props.onDeselectAll(_.map(_.get(this.props.viewer, "users.edges", []), "node.id"));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
      }
    }
  }, {
    key: "hasRecords",
    value: function hasRecords() {
      return _.get(this.props.viewer, "users.edges", []).length > 0;
    }
  }, {
    key: "isAllSelected",
    value: function isAllSelected() {
      var list = _.map(_.get(this.props.viewer, "users.edges", []), "node.id");

      return _.difference(list, this.props.selected).length === 0;
    }
  }, {
    key: "isAllDeselected",
    value: function isAllDeselected() {
      return this.props.selected.length === 0;
    }
  }, {
    key: "isSelected",
    value: function isSelected(userId) {
      return _.includes(this.props.selected, userId);
    }
  }, {
    key: "handleToggleAll",
    value: function handleToggleAll() {
      var forceOff = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (forceOff || this.isAllSelected()) {
        this.props.onDeselectAll();
      } else {
        this.props.onSelectAll(_.map(_.get(this.props.viewer, "users.edges", []), "node.id"));
      }
    }
  }, {
    key: "handleToggle",
    value: function handleToggle(userId) {
      this.props.onSetSelected(userId, !this.isSelected(userId));
    }
  }, {
    key: "handleCreateAction",
    value: function () {
      var _handleCreateAction = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.onCreate();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleCreateAction() {
        return _handleCreateAction.apply(this, arguments);
      }

      return handleCreateAction;
    }()
  }, {
    key: "handleEditAction",
    value: function () {
      var _handleEditAction = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.props.onEdit();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleEditAction() {
        return _handleEditAction.apply(this, arguments);
      }

      return handleEditAction;
    }()
  }, {
    key: "handleDeleteAction",
    value: function handleDeleteAction() {
      this.setState({
        isConfirmOpen: true
      });
    }
  }, {
    key: "handleCancelDelete",
    value: function handleCancelDelete() {
      this.setState({
        isConfirmOpen: false
      });
    }
  }, {
    key: "handleConfirmDelete",
    value: function () {
      var _handleConfirmDelete = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3() {
        var _this3 = this;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.setState({
                  isConfirmOpen: false
                });
                _context3.next = 3;
                return _promise.default.all(_.map(this.props.selected, function (userId) {
                  return _this3.props.onDelete(userId);
                }));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleConfirmDelete() {
        return _handleConfirmDelete.apply(this, arguments);
      }

      return handleConfirmDelete;
    }()
  }, {
    key: "handleRefreshAction",
    value: function handleRefreshAction() {
      this.props.relay.refetch(this.state.variables, null, null, {
        force: true
      });
    }
  }, {
    key: "handleChangeRowsPerPage",
    value: function handleChangeRowsPerPage(evt) {
      var _this4 = this;

      var pageSize = evt.target.value;
      var variables = {
        first: pageSize
      };
      this.setState({
        pageSize: pageSize,
        pageNumber: 0,
        variables: variables
      }, function () {
        return _this4.props.relay.refetch(variables, null, null, {
          force: true
        });
      });
    }
  }, {
    key: "handleChangePage",
    value: function handleChangePage(evt, pageNumber) {
      var _this5 = this;

      if (this.state.pageNumber === pageNumber) return;
      var variables = {};

      if (pageNumber === 0) {
        variables.first = this.state.pageSize;
      } else if (pageNumber > this.state.pageNumber) {
        if (pageNumber + 1 > Math.ceil(_.get(this.props.viewer, "users.totalCount", 0) / this.state.pageSize)) {
          return;
        }

        variables.first = this.state.pageSize;
        variables.after = _.get(this.props.viewer, "users.pageInfo.endCursor", null);
      } else {
        if (this.state.pageNumber <= 0) return;
        variables.last = this.state.pageSize;
        variables.before = _.get(this.props.viewer, "users.pageInfo.startCursor", null);
      }

      this.setState({
        pageNumber: pageNumber,
        variables: variables
      }, function () {
        return _this5.props.relay.refetch(variables, null, null, {
          force: true
        });
      });
    }
  }, {
    key: "renderTable",
    value: function renderTable() {
      var _this6 = this;

      return _react.default.createElement(_Paper.default, {
        className: this.props.classes.paper
      }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement(_Typography.default, {
        variant: "h6"
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "TITLE_USERS"
      })), _react.default.createElement("div", {
        className: this.props.classes.grow
      }), _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleRefreshAction
      }, _react.default.createElement(_Refresh.default, null))), _react.default.createElement(_Table.default, {
        padding: "dense",
        className: this.props.classes.table
      }, _react.default.createElement(_TableHead.default, null, _react.default.createElement(_TableRow.default, null, _react.default.createElement(_TableCell.default, {
        padding: "checkbox",
        classes: {
          root: this.props.classes.checkboxField
        }
      }, _react.default.createElement(_Checkbox.default, {
        checked: !!this.hasRecords() && this.isAllSelected(),
        classes: {
          root: this.props.classes.checkbox
        },
        indeterminate: !this.isAllSelected() && !this.isAllDeselected(),
        onChange: function onChange() {
          return _this6.handleToggleAll();
        },
        value: "on"
      })), _react.default.createElement(_TableCell.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "USERS_LOGIN_COLUMN"
      })), _react.default.createElement(_TableCell.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "USERS_ROLES_COLUMN"
      })))), _react.default.createElement(_TableBody.default, null, _.map(this.props.viewer.users.edges, function (edge) {
        return _react.default.createElement(_UserItemContainer.default, {
          key: edge.cursor,
          node: edge.node,
          onToggle: _this6.handleToggle
        });
      }))), _react.default.createElement(_TablePagination.default, {
        rowsPerPageOptions: [10, 20, 30, 50, 100],
        component: "div",
        count: _.get(this.props.viewer, "users.totalCount", 0),
        rowsPerPage: this.state.pageSize,
        page: this.state.pageNumber,
        onChangeRowsPerPage: this.handleChangeRowsPerPage,
        onChangePage: this.handleChangePage
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: this.props.classes.layout
      }, _react.default.createElement("div", {
        className: this.props.classes.buttons
      }, _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "secondary",
        classes: {
          root: this.props.classes.button
        },
        onClick: this.handleCreateAction
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "USERS_CREATE_BUTTON"
      })), _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        disabled: this.props.selected.length === 0,
        classes: {
          root: this.props.classes.button
        },
        onClick: this.handleEditAction
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "USERS_EDIT_BUTTON"
      })), _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        disabled: this.props.selected.length === 0,
        classes: {
          root: this.props.classes.button
        },
        onClick: this.handleDeleteAction
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "USERS_DELETE_BUTTON"
      }))), this.renderTable(), _react.default.createElement(_EditUserModalContainer.default, null), _react.default.createElement(_ConfirmModalContainer.default, {
        isOpen: this.state.isConfirmOpen,
        title: "DELETE_USER_TITLE",
        text: "DELETE_USER_TEXT",
        cancel: "DELETE_USER_CANCEL",
        submit: "DELETE_USER_SUBMIT",
        onCancel: this.handleCancelDelete,
        onSubmit: this.handleConfirmDelete
      }));
    }
  }]);
  return UserList;
}(_react.default.Component);

(0, _defineProperty2.default)(UserList, "contextType", _Relay.RelayContext);
var _default = UserList;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "iDDF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "iYPX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _FormControl = _interopRequireDefault(__webpack_require__("lWoh"));

var _FormControlLabel = _interopRequireDefault(__webpack_require__("7s44"));

var _Radio = _interopRequireDefault(__webpack_require__("CUfL"));

var styles = function styles() {
  return {
    formHelper: {
      margin: 0
    },
    label: {
      marginLeft: 0
    }
  };
};

exports.styles = styles;

var MyRadio =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(MyRadio, _React$PureComponent);

  function MyRadio() {
    (0, _classCallCheck2.default)(this, MyRadio);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MyRadio).apply(this, arguments));
  }

  (0, _createClass2.default)(MyRadio, [{
    key: "render",
    value: function render() {
      var _this = this;

      var errors = null;

      if (this.props.meta.touched && !this.props.meta.active && !this.props.meta.submitting && (this.props.meta.error || this.props.meta.submitError && !this.props.meta.dirtySinceLastSubmit)) {
        errors = [];
        if (this.props.meta.error) errors = errors.concat(this.props.meta.error);
        if (this.props.meta.submitError) errors = errors.concat(this.props.meta.submitError);
        errors = _.uniq(errors);
      }

      return _react.default.createElement(_FormControl.default, {
        className: this.props.className,
        variant: this.props.variant || "standard",
        fullWidth: true,
        error: !!errors
      }, _react.default.createElement(_FormControlLabel.default, {
        classes: {
          root: this.props.classes.label
        },
        label: this.props.label,
        control: _react.default.createElement(_Radio.default, {
          name: this.props.input.name,
          value: this.props.input.value,
          autoFocus: this.props.autoFocus,
          checked: this.props.input.checked,
          disabled: this.props.meta.submitting || this.props.disabled,
          color: this.props.color || "primary",
          onChange: this.props.input.onChange,
          onBlur: this.props.input.onBlur,
          onFocus: this.props.input.onFocus,
          inputProps: {
            onKeyDown: function onKeyDown(evt) {
              if (_this.props.onSubmit && evt.keyCode === 13) {
                evt.preventDefault();
                evt.stopPropagation();

                _this.props.form.blur(_this.props.input.name);

                _this.props.onSubmit();
              }
            }
          }
        })
      }));
    }
  }]);
  return MyRadio;
}(_react.default.PureComponent);

var _default = MyRadio;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "iooE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ReaderFragment } from 'relay-runtime';
type UserItemContainer_node$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserListContainer_viewer$ref: FragmentReference;
export type UserListContainer_viewer = {|
  +users: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +id: string,
        +$fragmentRefs: UserItemContainer_node$ref,
      |},
    |}>,
    +totalCount: ?number,
  |},
  +$refType: UserListContainer_viewer$ref,
|};
*/

var node
/*: ReaderFragment*/
= {
  "kind": "Fragment",
  "name": "UserListContainer_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [{
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "last",
    "type": "Int",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "before",
    "type": "String",
    "defaultValue": null
  }],
  "selections": [{
    "kind": "LinkedField",
    "alias": null,
    "name": "users",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "after",
      "variableName": "after",
      "type": "String"
    }, {
      "kind": "Variable",
      "name": "before",
      "variableName": "before",
      "type": "String"
    }, {
      "kind": "Variable",
      "name": "first",
      "variableName": "first",
      "type": "Int"
    }, {
      "kind": "Variable",
      "name": "last",
      "variableName": "last",
      "type": "Int"
    }],
    "concreteType": "UserConnection",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "UserEdge",
      "plural": true,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }, {
          "kind": "FragmentSpread",
          "name": "UserItemContainer_node",
          "args": null
        }]
      }]
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "totalCount",
      "args": null,
      "storageKey": null
    }]
  }]
}; // prettier-ignore

node
/*: any*/
.hash = 'b803ae2c23fe0723b379f551a76a059c';
module.exports = node;

/***/ }),

/***/ "ir66":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _FormControl = _interopRequireDefault(__webpack_require__("lWoh"));

var _FormHelperText = _interopRequireDefault(__webpack_require__("hbHv"));

var _FieldMessagesContainer = _interopRequireDefault(__webpack_require__("LT9N"));

var styles = function styles() {
  return {
    formHelper: {
      margin: 0
    },
    label: {
      marginLeft: 0
    }
  };
};

exports.styles = styles;

var MyError =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(MyError, _React$PureComponent);

  function MyError() {
    (0, _classCallCheck2.default)(this, MyError);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MyError).apply(this, arguments));
  }

  (0, _createClass2.default)(MyError, [{
    key: "render",
    value: function render() {
      var errors = null;

      if (this.props.meta.touched && !this.props.meta.active && !this.props.meta.submitting && (this.props.meta.error || this.props.meta.submitError && !this.props.meta.dirtySinceLastSubmit)) {
        errors = [];
        if (this.props.meta.error) errors = errors.concat(this.props.meta.error);
        if (this.props.meta.submitError) errors = errors.concat(this.props.meta.submitError);
        errors = _.uniq(errors);
      }

      if (!errors) return null;
      return _react.default.createElement(_FormControl.default, {
        className: this.props.className,
        variant: this.props.variant || "standard",
        fullWidth: true,
        error: !!errors
      }, _react.default.createElement(_FormHelperText.default, {
        component: "div",
        classes: {
          root: this.props.classes.formHelper
        }
      }, _react.default.createElement(_FieldMessagesContainer.default, {
        errors: errors
      })));
    }
  }]);
  return MyError;
}(_react.default.PureComponent);

var _default = MyError;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "iuEU":
/***/ (function(module, exports) {

module.exports = require("react-relay");

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "mSjk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var FormContext = _react.default.createContext({});

var _default = FormContext;
exports.default = _default;

/***/ }),

/***/ "nuGg":
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "o4p3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var roles = {
  AUTHENTICATED: "AUTHENTICATED",
  // every one who is authorized has this
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
      isAllowed: function isAllowed(userRoles) {
        return _.includes(userRoles, roles.AUTHENTICATED);
      }
    },
    "/terminal": {
      page: "/terminal",
      icon: "terminal",
      isAllowed: function isAllowed(userRoles) {
        return _.includes(userRoles, roles.AUTHENTICATED);
      }
    },
    "/browser": {
      page: "/browser",
      icon: "browser",
      isAllowed: function isAllowed(userRoles) {
        return _.includes(userRoles, roles.AUTHENTICATED);
      }
    },
    "/users": {
      page: "/users",
      icon: "users",
      menu: "MENU_USERS",
      title: "TITLE_USERS",
      isAllowed: function isAllowed(userRoles) {
        return _.includes(userRoles, roles.ADMIN);
      }
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
    FONTS_LOADED: "FONTS_LOADED",
    SW_UPDATE_READY: "SW_UPDATE_READY"
  },
  historySize: 30,
  commandPort: 22
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p/Qe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoles = exports.getLogin = exports.isAdmin = exports.isAuthenticated = exports.getCsrf = void 0;

var _reselect = __webpack_require__("MWqi");

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

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

/***/ "p198":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _httpStatusCodes = _interopRequireDefault(__webpack_require__("LZqe"));

var styles = function styles(theme) {
  return {
    layout: (0, _defineProperty2.default)({
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
    code: (0, _defineProperty2.default)({
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
    },
    linkWrapper: {
      fontSize: "1rem",
      marginTop: "1rem"
    },
    link: {
      color: theme.palette.text.primary,
      textDecoration: "none",
      "&:hover": {
        color: "#ffffff"
      }
    }
  };
};

exports.styles = styles;

var ErrorMessage =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ErrorMessage, _React$Component);

  function ErrorMessage() {
    (0, _classCallCheck2.default)(this, ErrorMessage);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ErrorMessage).apply(this, arguments));
  }

  (0, _createClass2.default)(ErrorMessage, [{
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
      }, this.getText(), _react.default.createElement("div", {
        className: this.props.classes.linkWrapper
      }, ">\xA0\xA0", _react.default.createElement("a", {
        href: "/",
        className: this.props.classes.link
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "ERROR_GO_HOME_LINK"
      })))));
    }
  }]);
  return ErrorMessage;
}(_react.default.Component);

var _default = ErrorMessage;
exports.default = _default;

/***/ }),

/***/ "p8rN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("Avpf"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactFinalForm = __webpack_require__("amB/");

var _context = _interopRequireDefault(__webpack_require__("mSjk"));

var FormComponent =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(FormComponent, _React$Component);

  function FormComponent() {
    (0, _classCallCheck2.default)(this, FormComponent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormComponent).apply(this, arguments));
  }

  (0, _createClass2.default)(FormComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fields = _this$props.fields,
          _render = _this$props.render,
          formProps = (0, _objectWithoutProperties2.default)(_this$props, ["fields", "render"]);
      return _react.default.createElement(_reactFinalForm.Form, (0, _extends2.default)({}, formProps, {
        render: function render(props) {
          return _react.default.createElement(_context.default.Provider, {
            value: (0, _objectSpread2.default)({
              fields: fields
            }, props)
          }, _react.default.createElement("form", {
            noValidate: true,
            autoComplete: "off",
            onSubmit: props.handleSubmit
          }, _render(props)));
        }
      }));
    }
  }]);
  return FormComponent;
}(_react.default.Component);

var _default = FormComponent;
exports.default = _default;

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "r6Lb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "rLaN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var _immutable = __webpack_require__("nuGg");

var _reduxImmutable = __webpack_require__("RGyf");

var types = _interopRequireWildcard(__webpack_require__("sTFT"));

/* State Shape
Map({
  selected: Set([String]), // IDs
  editModalUserId: String, // null when creating a new user
  isEditModalOpen: false,
})
*/
var selectedReducer = function selectedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Set)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_SELECTED:
      if (!_.isUndefined(action.userId) && !_.isUndefined(action.isSelected)) {
        // eslint-disable-next-line lodash/prefer-lodash-method
        if (state.includes(action.userId)) return state.delete(action.userId);else return state.add(action.userId);
      }

      break;

    case types.SELECT_ALL:
      if (!_.isUndefined(action.userIds)) return (0, _immutable.Set)(action.userIds);
      break;

    case types.DESELECT_ALL:
      if (_.isUndefined(action.exceptUserIds)) {
        return (0, _immutable.Set)([]);
      } else {
        return state.withMutations(function (set) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator2.default)(set.values()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;
              if (!_.includes(action.exceptUserIds, item)) set.delete(item);
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
        });
      }

  }

  return state;
};

var editModalUserIdReducer = function editModalUserIdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return action.userId || null;
  }

  return state;
};

var isEditModalOpenReducer = function isEditModalOpenReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return true;

    case types.HIDE_EDIT_MODAL:
      return false;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  selected: selectedReducer,
  editModalUserId: editModalUserIdReducer,
  isEditModalOpen: isEditModalOpenReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "ra+8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _Select = _interopRequireDefault(__webpack_require__("OdWO"));

var _FormControl = _interopRequireDefault(__webpack_require__("lWoh"));

var _FormHelperText = _interopRequireDefault(__webpack_require__("hbHv"));

var _MenuItem = _interopRequireDefault(__webpack_require__("x54t"));

var _InputLabel = _interopRequireDefault(__webpack_require__("zOcm"));

var _FilledInput = _interopRequireDefault(__webpack_require__("4VpM"));

var _Input = _interopRequireDefault(__webpack_require__("tBFs"));

var _FieldMessagesContainer = _interopRequireDefault(__webpack_require__("LT9N"));

var styles = function styles() {
  return {
    formHelper: {
      margin: 0
    }
  };
};

exports.styles = styles;

var MySelect =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(MySelect, _React$PureComponent);

  function MySelect() {
    (0, _classCallCheck2.default)(this, MySelect);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MySelect).apply(this, arguments));
  }

  (0, _createClass2.default)(MySelect, [{
    key: "render",
    value: function render() {
      var _this = this;

      var errors = null;

      if (this.props.meta.touched && !this.props.meta.active && !this.props.meta.submitting && (this.props.meta.error || this.props.meta.submitError && !this.props.meta.dirtySinceLastSubmit)) {
        errors = [];
        if (this.props.meta.error) errors = errors.concat(this.props.meta.error);
        if (this.props.meta.submitError) errors = errors.concat(this.props.meta.submitError);
        errors = _.uniq(errors);
      }

      var SelectInput = this.props.variant === "filled" ? _FilledInput.default : _Input.default;
      return _react.default.createElement(_FormControl.default, {
        className: this.props.className,
        variant: this.props.variant || "standard",
        fullWidth: true,
        error: !!errors
      }, _react.default.createElement(_InputLabel.default, null, this.props.label), _react.default.createElement(_Select.default, {
        value: this.props.input.value || "",
        native: this.props.native,
        autoFocus: this.props.autoFocus,
        disabled: this.props.meta.submitting || this.props.disabled,
        onChange: this.props.input.onChange,
        onBlur: this.props.input.onBlur,
        onFocus: this.props.input.onFocus,
        input: _react.default.createElement(SelectInput, {
          inputProps: {
            onKeyDown: function onKeyDown(evt) {
              if (_this.props.onSubmit && evt.keyCode === 13) {
                evt.preventDefault();
                evt.stopPropagation();

                _this.props.form.blur(_this.props.input.name);

                _this.props.onSubmit();
              }
            }
          }
        })
      }, !this.props.native && _.map(this.props.options, function (item, index) {
        return _react.default.createElement(_MenuItem.default, {
          key: "item-".concat(index),
          value: item.value
        }, item.label);
      }), !!this.props.native && _.map(this.props.options, function (item, index) {
        return _react.default.createElement("option", {
          key: "item-".concat(index),
          value: item.value
        }, item.label);
      })), !!(this.props.messages || errors) && _react.default.createElement(_FormHelperText.default, {
        component: "div",
        classes: {
          root: this.props.classes.formHelper
        }
      }, _react.default.createElement(_FieldMessagesContainer.default, {
        messages: this.props.messages,
        errors: errors
      })));
    }
  }]);
  return MySelect;
}(_react.default.PureComponent);

var _default = MySelect;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "rdLC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersSelectors = exports.usersOperations = exports.usersTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__("rLaN"));

var usersTypes = _interopRequireWildcard(__webpack_require__("sTFT"));

exports.usersTypes = usersTypes;

var usersOperations = _interopRequireWildcard(__webpack_require__("1Pmw"));

exports.usersOperations = usersOperations;

var usersSelectors = _interopRequireWildcard(__webpack_require__("smpn"));

exports.usersSelectors = usersSelectors;
var _default = _reducers.default;
exports.default = _default;

/***/ }),

/***/ "rz8+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_LOCALE = exports.SET_CONNECTED = exports.SET_STATUS_CODE = exports.STOP = exports.START = exports.CREATE = void 0;
var CREATE = "app/app/CREATE";
exports.CREATE = CREATE;
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

/***/ "sTFT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_EDIT_MODAL = exports.SHOW_EDIT_MODAL = exports.DESELECT_ALL = exports.SELECT_ALL = exports.SET_SELECTED = void 0;
var SET_SELECTED = "app/users/SET_SELECTED";
exports.SET_SELECTED = SET_SELECTED;
var SELECT_ALL = "app/users/SELECT_ALL";
exports.SELECT_ALL = SELECT_ALL;
var DESELECT_ALL = "app/users/DESELECT_ALL";
exports.DESELECT_ALL = DESELECT_ALL;
var SHOW_EDIT_MODAL = "app/users/SHOW_EDIT_MODAL";
exports.SHOW_EDIT_MODAL = SHOW_EDIT_MODAL;
var HIDE_EDIT_MODAL = "app/users/HIDE_EDIT_MODAL";
exports.HIDE_EDIT_MODAL = HIDE_EDIT_MODAL;

/***/ }),

/***/ "smpn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEditModalUserId = exports.isEditModalOpen = exports.getSelected = void 0;

var _reselect = __webpack_require__("MWqi");

var getSelected = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["users", "selected"]);
}, function (selected) {
  return selected.toJS();
});
exports.getSelected = getSelected;

var isEditModalOpen = function isEditModalOpen(state) {
  return state.getIn(["users", "isEditModalOpen"]);
};

exports.isEditModalOpen = isEditModalOpen;

var getEditModalUserId = function getEditModalUserId(state) {
  return state.getIn(["users", "editModalUserId"]);
};

exports.getEditModalUserId = getEditModalUserId;

/***/ }),

/***/ "tBFs":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "tmE+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("9Pu4");

var _Select = _interopRequireWildcard(__webpack_require__("ra+8"));

var Select = (0, _styles.withStyles)(_Select.styles)(_Select.default);
var _default = Select;
exports.default = _default;

/***/ }),

/***/ "uQSa":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Refresh");

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vmr9":
/***/ (function(module) {

module.exports = {"MENU_DEVICES":"Device List","TITLE_DEVICES":"Remote Configurator","MENU_DEVICE":"Device","TITLE_DEVICE":"Device","MENU_USERS":"Users","TITLE_USERS":"Users","LAYOUT_SW_UPDATE_MESSAGE":"An update is available. Click here to reload the page.","SIDEBAR_SIGN_OUT_LINK":"Sign Out","DEVICES_PAGE_WORKFLOW_TITLE":"Workflow","DEVICES_PAGE_WORKFLOW_HTML":["<ul>","<li>Create a device with unique name and a password. You will be provided with a shell command you can then"," copy-paste into the terminal of your device.</li>","<li>Enter the same password you used to create the device and the device will appear in the list below after"," connecting to this server. All further interaction with the device will be done through this encrypted SSH channel.</li>","<li>Press \"SIGN IN\" button to sign in into your device. Please use the same user under which you typed the <strong>ssh</strong>"," command above or you might get \"Host key verification failed\" error otherwise.</li>","<li>When signed in you can then open an in-browser terminal session to this device under the credentials you used"," or create a private HTTP proxy for any port on your device</li>","</ul>"],"DEVICES_PAGE_SECURITY_TITLE":"Security Considerations","DEVICES_PAGE_SECURITY_HTML":["<ul>","<li>Credentials you use to sign in into your device are readable to this server. Although these credentials are never"," stored to disk and only live in the server's memory while the session exists, a compromised server might have a"," different idea what to do with your information.</li>","<li>A more secure apporoach would be to set up your own server (preferably after inspecting the source code) so you"," trust the credentials only to a reliable server.</li>","<li>Some web services protect their users from phishing sites, for which they detect and prevent proxies and &lt;iframe&gt;"," tags from working. You will have to configure an exception for the server in such case. For Webmin, you can achieve"," this by adding to the end of <strong>/etc/webmin/config</strong>: <pre>referers={origin}</pre></li>","</ul>"],"DEVICES_NAME_COLUMN":"Name","DEVICES_ADDRESS_COLUMN":"Address","DEVICES_CREATE_BUTTON":"Create Device","DEVICES_EDIT_BUTTON":"Edit Device","DEVICES_DELETE_BUTTON":"Delete Devices","DEVICES_CONNECT_BUTTON":"Sign In","DEVICES_OFFLINE_LABEL":"Offline","DEVICES_OPEN_TERMINAL_TIP":"Open terminal","DEVICES_OPEN_BROWSER_TIP":"Open browser","DEVICES_DISCONNECT_TIP":"Disconnect","EDIT_DEVICE_TITLE_CREATE":"Create Device","EDIT_DEVICE_TITLE_EDIT":"Edit Device","EDIT_DEVICE_NAME_LABEL":"Name","EDIT_DEVICE_PASSWORD_LABEL":"Password","EDIT_DEVICE_FAILED":"Form submission failed","EDIT_DEVICE_SUBMIT":"Submit","EDIT_DEVICE_CANCEL":"Cancel","DELETE_DEVICE_TITLE":"Delete Devices","DELETE_DEVICE_TEXT":"Delete selected devices?","DELETE_DEVICE_CANCEL":"Cancel","DELETE_DEVICE_SUBMIT":"Delete","PROXY_TPL_TITLE":"<h1>Proxy Reporting</h1>","PROXY_TPL_MESSAGE":"<h3>Could not fetch the page</h3>","PROXY_TPL_403":"<p>Access denied</p>","PROXY_TPL_404":"<p>Try to reopen this page from the Device List</p>","PROXY_TPL_502":"<p>Looks like nobody is listening on this port</p>","PROXY_MODAL_TITLE":"HTTP Proxy","PROXY_HOST_LABEL":"Which host to connect to?","PROXY_PORT_LABEL":"Which port to proxy?","PROXY_AUTH_LABEL":"Remote service needs HTTP BASIC AUTH","PROXY_LOGIN_LABEL":"Login","PROXY_PASSWORD_LABEL":"Password","PROXY_MODAL_CANCEL":"Cancel","PROXY_MODAL_SUBMIT":"Submit","USERS_LOGIN_COLUMN":"Login","USERS_ROLES_COLUMN":"Roles","USERS_CREATE_BUTTON":"Create User","USERS_EDIT_BUTTON":"Edit User","USERS_DELETE_BUTTON":"Delete Users","EDIT_USER_TITLE_CREATE":"Create User","EDIT_USER_TITLE_EDIT":"Edit User","EDIT_USER_LOGIN_LABEL":"Login","EDIT_USER_PASSWORD_LABEL":"Password","EDIT_USER_AUTHENTICATED_LABEL":"Authenticated","EDIT_USER_ADMIN_LABEL":"Administrator","EDIT_USER_CANCEL":"Cancel","EDIT_USER_SUBMIT":"Submit","EDIT_USER_FAILED":"An error occured","DELETE_USER_TITLE":"Delete Users","DELETE_USER_TEXT":"Delete selected users?","DELETE_USER_CANCEL":"Cancel","DELETE_USER_SUBMIT":"Delete","TERMINAL_CONNECTING_LABEL":"Connecting...","TERMINAL_NOT_CONNECTED_LABEL":"Not connected","APP_AUTH_TITLE":"Authentication","APP_AUTH_SELF_REGISTRATION_TITLE":"Self-registration enabled","APP_AUTH_SELF_REGISTRATION_MESSAGE":"If you are a new user, you can use any free login and the password you want to sign in","APP_AUTH_LOGIN_LABEL":"Login","APP_AUTH_PASSWORD_LABEL":"Password","APP_AUTH_SUBMIT":"Sign In","APP_AUTH_FAILED":"Invalid credentials","SETUP_AUTH_TITLE":"Authentication","SETUP_AUTH_LOGIN_LABEL":"Login","SETUP_AUTH_PASSWORD_LABEL":"Password","SETUP_AUTH_CANCEL":"Cancel","SETUP_AUTH_SUBMIT":"Submit","KEYBOARD_AUTH_TITLE":"Authentication","KEYBOARD_AUTH_REPLY_LABEL":"Response","KEYBOARD_AUTH_CANCEL":"Cancel","KEYBOARD_AUTH_SUBMIT":"Submit","OPERATION_FAILED":"Operations failed","ERROR_GO_HOME_LINK":"Reload the start page","ERROR_FIELD_REQUIRED":"This field is required","ERROR_INVALID_LOGIN":"Login should start with a letter and contain letters and digits only","ERROR_INVALID_PASSWORD":"Password must be at least 6 characters long"};

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "xHqa":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
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

module.exports = _defineProperty;

/***/ }),

/***/ "xbgq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__("nuGg");

var _reduxImmutable = __webpack_require__("RGyf");

var types = _interopRequireWildcard(__webpack_require__("+z5V"));

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "z+7x":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStatus = exports.setCsrf = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("Avpf"));

var types = _interopRequireWildcard(__webpack_require__("+z5V"));

var setCsrf = function setCsrf(_ref) {
  var csrf = _ref.csrf;
  return {
    type: types.SET_CSRF,
    csrf: csrf
  };
};

exports.setCsrf = setCsrf;

var setStatus = function setStatus(status) {
  return (0, _objectSpread2.default)({
    type: types.SET_STATUS
  }, status);
};

exports.setStatus = setStatus;

/***/ }),

/***/ "z+c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash d8f1eb7a49d3c997130e9bfefa193be2
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserRole = "ADMIN" | "AUTHENTICATED" | "%future added value";
export type EditUserModalQueryVariables = {|
  currentId?: ?string
|};
export type EditUserModalQueryResponse = {|
  +viewer: ?{|
    +user: ?{|
      +id: string,
      +login: string,
      +roles: $ReadOnlyArray<?UserRole>,
    |}
  |}
|};
export type EditUserModalQuery = {|
  variables: EditUserModalQueryVariables,
  response: EditUserModalQueryResponse,
|};
*/

/*
query EditUserModalQuery(
  $currentId: ID
) {
  viewer {
    user(id: $currentId) {
      id
      login
      roles
    }
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "currentId",
    "type": "ID",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "user",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "id",
      "variableName": "currentId",
      "type": "ID"
    }],
    "concreteType": "User",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "login",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "roles",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "EditUserModalQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": [{
        "kind": "LinkedField",
        "alias": "viewer",
        "name": "__viewer_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": v1
        /*: any*/

      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "EditUserModalQuery",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": v1
        /*: any*/

      }, {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "viewer",
        "args": null,
        "handle": "viewer",
        "key": "",
        "filters": null
      }]
    },
    "params": {
      "operationKind": "query",
      "name": "EditUserModalQuery",
      "id": null,
      "text": "query EditUserModalQuery(\n  $currentId: ID\n) {\n  viewer {\n    user(id: $currentId) {\n      id\n      login\n      roles\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'd95793dab0919b0d1bb771cae8ed34ce';
module.exports = node;

/***/ }),

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ })

/******/ });