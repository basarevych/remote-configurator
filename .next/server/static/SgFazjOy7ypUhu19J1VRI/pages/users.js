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
/******/ 	return __webpack_require__(__webpack_require__.s = 169);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 3 */
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
      page: "/",
      icon: "devices",
      menu: "MENU_DEVICES",
      title: "TITLE_DEVICES"
    },
    "/device": {
      page: "/device",
      icon: "device",
      menu: "MENU_DEVICE",
      title: "TITLE_DEVICE"
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
    CONNECT_TERMINAL: "CONNECT_TERMINAL",
    KEYBOARD_AUTH: "KEYBOARD_AUTH",
    TERMINAL_INPUT: "TERMINAL_INPUT",
    TERMINAL_RESIZED: "TERMINAL_RESIZED",
    DISCONNECT_TERMINAL: "DISCONNECT_TERMINAL",
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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appSelectors = exports.appOperations = exports.appTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(33));

var appTypes = _interopRequireWildcard(__webpack_require__(11));

exports.appTypes = appTypes;

var appOperations = _interopRequireWildcard(__webpack_require__(36));

exports.appOperations = appOperations;

var appSelectors = _interopRequireWildcard(__webpack_require__(70));

exports.appSelectors = appSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authSelectors = exports.authOperations = exports.authTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(41));

var authTypes = _interopRequireWildcard(__webpack_require__(12));

exports.authTypes = authTypes;

var authOperations = _interopRequireWildcard(__webpack_require__(42));

exports.authOperations = authOperations;

var authSelectors = _interopRequireWildcard(__webpack_require__(22));

exports.authSelectors = authSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_STATUS = exports.SET_CSRF = void 0;
var SET_CSRF = "app/auth/SET_CSRF";
exports.SET_CSRF = SET_CSRF;
var SET_STATUS = "app/auth/SET_STATUS";
exports.SET_STATUS = SET_STATUS;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_EDIT_MODAL = exports.SHOW_EDIT_MODAL = exports.SET_LIST = void 0;
var SET_LIST = "app/users/SET_LIST";
exports.SET_LIST = SET_LIST;
var SHOW_EDIT_MODAL = "app/users/SHOW_EDIT_MODAL";
exports.SHOW_EDIT_MODAL = SHOW_EDIT_MODAL;
var HIDE_EDIT_MODAL = "app/users/HIDE_EDIT_MODAL";
exports.HIDE_EDIT_MODAL = HIDE_EDIT_MODAL;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_EDIT_MODAL = exports.SHOW_EDIT_MODAL = exports.REMOVE = exports.SET = exports.CLEAR = exports.SET_LIST = void 0;
var SET_LIST = "app/devices/SET_LIST";
exports.SET_LIST = SET_LIST;
var CLEAR = "app/devices/CLEAR";
exports.CLEAR = CLEAR;
var SET = "app/devices/SET";
exports.SET = SET;
var REMOVE = "app/devices/REMOVE";
exports.REMOVE = REMOVE;
var SHOW_EDIT_MODAL = "app/devices/SHOW_EDIT_MODAL";
exports.SHOW_EDIT_MODAL = SHOW_EDIT_MODAL;
var HIDE_EDIT_MODAL = "app/devices/HIDE_EDIT_MODAL";
exports.HIDE_EDIT_MODAL = HIDE_EDIT_MODAL;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.terminalsSelectors = exports.terminalsOperations = exports.terminalsTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(54));

var terminalsTypes = _interopRequireWildcard(__webpack_require__(16));

exports.terminalsTypes = terminalsTypes;

var terminalsOperations = _interopRequireWildcard(__webpack_require__(55));

exports.terminalsOperations = terminalsOperations;

var terminalsSelectors = _interopRequireWildcard(__webpack_require__(66));

exports.terminalsSelectors = terminalsSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REMOVE = exports.SET = exports.CLEAR = void 0;
var CLEAR = "app/terminals/CLEAR";
exports.CLEAR = CLEAR;
var SET = "app/terminals/SET";
exports.SET = SET;
var REMOVE = "app/terminals/REMOVE";
exports.REMOVE = REMOVE;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REMOVE_STARTING = exports.REMOVE = exports.ADD = exports.CLEAR = void 0;
var CLEAR = "app/histories/CLEAR";
exports.CLEAR = CLEAR;
var ADD = "app/histories/ADD";
exports.ADD = ADD;
var REMOVE = "app/histories/REMOVE";
exports.REMOVE = REMOVE;
var REMOVE_STARTING = "app/histories/REMOVE_STARTING";
exports.REMOVE_STARTING = REMOVE_STARTING;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET = void 0;
var SET = "app/activeTerminal/SET";
exports.SET = SET;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.historiesSelectors = exports.historiesOperations = exports.historiesTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(57));

var historiesTypes = _interopRequireWildcard(__webpack_require__(17));

exports.historiesTypes = historiesTypes;

var historiesOperations = _interopRequireWildcard(__webpack_require__(59));

exports.historiesOperations = historiesOperations;

var historiesSelectors = _interopRequireWildcard(__webpack_require__(61));

exports.historiesSelectors = historiesSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("redux-form/immutable");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoles = exports.getLogin = exports.isAdmin = exports.isAuthenticated = exports.getCsrf = void 0;

var _reselect = __webpack_require__(23);

var _constants = _interopRequireDefault(__webpack_require__(3));

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
/* 23 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersSelectors = exports.usersOperations = exports.usersTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(44));

var usersTypes = _interopRequireWildcard(__webpack_require__(13));

exports.usersTypes = usersTypes;

var usersOperations = _interopRequireWildcard(__webpack_require__(45));

exports.usersOperations = usersOperations;

var usersSelectors = _interopRequireWildcard(__webpack_require__(47));

exports.usersSelectors = usersSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.devicesSelectors = exports.devicesOperations = exports.devicesTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(51));

var devicesTypes = _interopRequireWildcard(__webpack_require__(14));

exports.devicesTypes = devicesTypes;

var devicesOperations = _interopRequireWildcard(__webpack_require__(52));

exports.devicesOperations = devicesOperations;

var devicesSelectors = _interopRequireWildcard(__webpack_require__(67));

exports.devicesSelectors = devicesSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activeTerminalSelectors = exports.activeTerminalOperations = exports.activeTerminalTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(62));

var activeTerminalTypes = _interopRequireWildcard(__webpack_require__(18));

exports.activeTerminalTypes = activeTerminalTypes;

var activeTerminalOperations = _interopRequireWildcard(__webpack_require__(63));

exports.activeTerminalOperations = activeTerminalOperations;

var activeTerminalSelectors = _interopRequireWildcard(__webpack_require__(65));

exports.activeTerminalSelectors = activeTerminalSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var constants = __webpack_require__(3);

module.exports = function isRouteAllowed(path) {
  var userRoles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var pageRoles = constants.pages[path] && constants.pages[path].roles;
  if (!pageRoles || pageRoles.length === 0) return true;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = pageRoles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var role = _step.value;
      if (!_.includes(userRoles, role)) return false;
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

  return true;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 30 */
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
    en: parse(__webpack_require__(34))
  },
  getLocaleData: function getLocaleData() {
    return [__webpack_require__(35)];
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var moment = __webpack_require__(40); // Add locales:
//require("moment/locale/ru.js"); // en is already there


module.exports = moment;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxImmutable = __webpack_require__(4);

var types = _interopRequireWildcard(__webpack_require__(11));

var _locales = _interopRequireDefault(__webpack_require__(30));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  created: Number, // timestamp
  di: DiContainer,
  locale: String,
  statusCode: Number, // current HTTP status code
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

var diReducer = function diReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.INIT:
      if (!_.isUndefined(action.di)) return action.di;
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
  di: diReducer,
  locale: localeReducer,
  statusCode: statusCodeReducer,
  isStarted: isStartedReducer,
  isConnected: isConnectedReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 34 */
/***/ (function(module) {

module.exports = {"MENU_DEVICES":"Device List","TITLE_DEVICES":"Remote Configurator","MENU_DEVICE":"Device","TITLE_DEVICE":"Device","MENU_USERS":"Users","TITLE_USERS":"Users","SIDEBAR_SIGN_OUT_LINK":"Sign Out","DEVICES_INFO_HTML":["<p>Run the following command on the target:</p>","<pre class=\"sample\">ssh -p 37500 -R 22:localhost:22 -N device1@45.63.117.244</pre>","<p>You can replace <strong>device1</strong> with any other ID &ndash; it will be displayed in the list below.<p>","<p>Password-based or kerboard-interactive authentication must be enabled on the host where you run the command above.</p>"],"DEVICES_CONNECT_BUTTON":"Connect","DEVICES_ADD_BUTTON":"Add device","DEVICES_NAME_COLUMN":"Name","DEVICES_ADDRESS_COLUMN":"Address","EDIT_DEVICE_TITLE_CREATE":"Add device","EDIT_DEVICE_TITLE_EDIT":"Edit device","EDIT_DEVICE_NAME_LABEL":"Name","EDIT_DEVICE_PASSWORD_LABEL":"Password","EDIT_DEVICE_FAILED":"Form submission failed","EDIT_DEVICE_SUBMIT":"Submit","EDIT_DEVICE_CANCEL":"Cancel","USERS_LOGIN_COLUMN":"Login","USERS_ROLES_COLUMN":"Roles","USERS_CREATE_BUTTON":"Create User","USERS_EDIT_BUTTON":"Edit User","USERS_DELETE_BUTTON":"Delete Users","EDIT_USER_TITLE_CREATE":"Create user","EDIT_USER_TITLE_EDIT":"Edit user","EDIT_USER_LOGIN_LABEL":"Login","EDIT_USER_PASSWORD_LABEL":"Password","EDIT_USER_ADMIN_LABEL":"Administrator","EDIT_USER_CANCEL":"Cancel","EDIT_USER_SUBMIT":"Submit","EDIT_USER_FAILED":"An error occured","DELETE_USER_TITLE":"Delete users","DELETE_USER_TEXT":"Delete selected users?","DELETE_USER_CANCEL":"Cancel","DELETE_USER_SUBMIT":"Delete","TERMINAL_CONNECTING_LABEL":"Connecting...","TERMINAL_NOT_CONNECTED_LABEL":"Not connected","APP_AUTH_TITLE":"Authentication","APP_AUTH_LOGIN_LABEL":"Login","APP_AUTH_PASSWORD_LABEL":"Password","APP_AUTH_SUBMIT":"Sign In","APP_AUTH_FAILED":"Invalid credentials","SETUP_AUTH_TITLE":"Authentication","SETUP_AUTH_LOGIN_LABEL":"Login","SETUP_AUTH_PASSWORD_LABEL":"Password","SETUP_AUTH_CANCEL":"Cancel","SETUP_AUTH_SUBMIT":"Submit","KEYBOARD_AUTH_TITLE":"Authentication","KEYBOARD_AUTH_REPLY_LABEL":"Response","KEYBOARD_AUTH_CANCEL":"Cancel","KEYBOARD_AUTH_SUBMIT":"Submit","ERROR_FIELD_REQUIRED":"This field is required","ERROR_INVALID_PASSWORD":"Password length must be at least 6 characters"};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en.js");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.init = exports.create = exports.gqlQuery = exports.stop = exports.setLocale = exports.setConnected = exports.setStatusCode = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _isomorphicUnfetch = _interopRequireDefault(__webpack_require__(37));

var _injectt = _interopRequireDefault(__webpack_require__(38));

var actions = _interopRequireWildcard(__webpack_require__(39));

var _auth = __webpack_require__(9);

var _constants = _interopRequireDefault(__webpack_require__(3));

var _Storage = _interopRequireDefault(__webpack_require__(48));

var _Socket = _interopRequireDefault(__webpack_require__(49));

var _Cookie = _interopRequireDefault(__webpack_require__(69));

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
var stop = actions.stop;
exports.stop = stop;

var fetchCsrf =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var csrf, response;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            csrf = null;
            _context.prev = 1;
            _context.next = 4;
            return (0, _isomorphicUnfetch.default)(_constants.default.apiBase + "/csrf", {
              method: "GET",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              }
            });

          case 4:
            response = _context.sent;

            if (!(response.status !== 200)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", null);

          case 7:
            _context.next = 9;
            return response.json();

          case 9:
            csrf = _context.sent.csrf;
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);

          case 15:
            return _context.abrupt("return", new Promise(function (resolve) {
              return setTimeout(function () {
                return resolve(csrf || fetchCsrf());
              }, 1000);
            }));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 12]]);
  }));

  return function fetchCsrf() {
    return _ref.apply(this, arguments);
  };
}();

var gqlQuery = function gqlQuery(query, variables) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState) {
        var csrf, response, data;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                csrf = _auth.authSelectors.getCsrf(getState());

                if (csrf) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 5;
                return fetchCsrf();

              case 5:
                csrf = _context2.sent;
                _context2.next = 8;
                return dispatch(_auth.authOperations.setCsrf({
                  csrf: csrf
                }));

              case 8:
                _context2.next = 10;
                return (0, _isomorphicUnfetch.default)(_constants.default.graphqlBase, {
                  method: "POST",
                  credentials: "include",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "X-CSRF-Token": csrf
                  },
                  body: JSON.stringify({
                    query: query,
                    variables: variables
                  })
                });

              case 10:
                response = _context2.sent;

                if (!(response.status === 403)) {
                  _context2.next = 15;
                  break;
                }

                _context2.next = 14;
                return dispatch(_auth.authOperations.setCsrf({
                  csrf: null
                }));

              case 14:
                return _context2.abrupt("return", dispatch(gqlQuery(query, variables)));

              case 15:
                data = null;
                _context2.prev = 16;
                _context2.next = 19;
                return response.json();

              case 19:
                data = _context2.sent;
                _context2.next = 25;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](16);
                console.error(_context2.t0);

              case 25:
                if (!(response.status !== 200)) {
                  _context2.next = 27;
                  break;
                }

                throw new Error("GraphQL query failed [".concat(response.status, "]"), data);

              case 27:
                return _context2.abrupt("return", data);

              case 30:
                _context2.prev = 30;
                _context2.t1 = _context2["catch"](0);
                console.error(_context2.t1);
                throw _context2.t1;

              case 34:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 30], [16, 22]]);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

exports.gqlQuery = gqlQuery;

var create = function create(_ref3) {
  var status = _ref3.status;
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
                return dispatch(actions.create());

              case 2:
                if (!status) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 5;
                return dispatch(_auth.authOperations.setStatus(status));

              case 5:
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

exports.create = create;

var init = function init() {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch, getState) {
        var di;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                di = new _injectt.default();
                di.registerInstance(getState, "getState");
                di.registerInstance(dispatch, "dispatch");
                di.registerClass(_Storage.default);
                di.registerClass(_Socket.default);
                di.registerClass(_Cookie.default);
                return _context4.abrupt("return", dispatch(actions.init({
                  di: di
                })));

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4, _x5) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.init = init;
var fontsLoaded;

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
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Promise.all([dispatch(_auth.authOperations.setStatus()), fontsLoaded]);

              case 2:
                return _context5.abrupt("return", dispatch(actions.start()));

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

exports.start = start;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("injectt");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocale = exports.setConnected = exports.setStatusCode = exports.stop = exports.start = exports.init = exports.create = void 0;

var _moment = _interopRequireDefault(__webpack_require__(31));

var types = _interopRequireWildcard(__webpack_require__(11));

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
/* 40 */
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(2);

var _reduxImmutable = __webpack_require__(4);

var types = _interopRequireWildcard(__webpack_require__(12));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  csrf: String,
  isAuthenticated: Boolean,
  login: String,
  roles: List([String]),
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfile = exports.signOut = exports.signIn = exports.setStatus = exports.setCsrf = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _router = _interopRequireDefault(__webpack_require__(26));

var _isRouteAllowed = _interopRequireDefault(__webpack_require__(28));

var actions = _interopRequireWildcard(__webpack_require__(43));

var selectors = _interopRequireWildcard(__webpack_require__(22));

var _app = __webpack_require__(5);

var _users = __webpack_require__(24);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var setCsrf = actions.setCsrf;
exports.setCsrf = setCsrf;

var fetchStatus = function fetchStatus() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch) {
        var status, response;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                status = null;
                _context.prev = 1;
                _context.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n        query {\n          status {\n            isAuthenticated\n            login\n            roles\n          }\n        }\n      "));

              case 4:
                response = _context.sent;
                status = response && _.get(response, "data.status", null);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 11:
                if (!status) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt("return", status);

              case 13:
                return _context.abrupt("return", new Promise(function (resolve) {
                  return setTimeout(function () {
                    return resolve(fetchStatus());
                  }, 1000);
                }));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8]]);
      }));

      return function (_x) {
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
      _regenerator.default.mark(function _callee2(dispatch, getState) {
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
                if (true) {
                  _context2.next = 10;
                  break;
                }

                if ((0, _isRouteAllowed.default)(_router.default.pathname, status.roles)) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 8;
                return dispatch(_app.appOperations.stop());

              case 8:
                window.location.href = "/";
                return _context2.abrupt("return");

              case 10:
                if (status) {
                  _context2.next = 12;
                  break;
                }

                return _context2.abrupt("return");

              case 12:
                _context2.next = 14;
                return dispatch(actions.setStatus(status));

              case 14:
                socket = _app.appSelectors.getService(getState(), {
                  service: "socket"
                });

                if (socket) {
                  if (selectors.isAuthenticated(getState())) socket.connect();else socket.disconnect();
                }

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2, _x3) {
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
      _regenerator.default.mark(function _callee3(dispatch) {
        var result, response, error;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = false;
                _context3.prev = 1;
                _context3.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($login: String, $password: String) {\n            signIn(login: $login, password: $password) {\n              success\n            }\n          }\n        ", {
                  login: login,
                  password: password
                }));

              case 4:
                response = _context3.sent;

                if (!(response && _.get(response, "data.signIn.success", false))) {
                  _context3.next = 13;
                  break;
                }

                _context3.next = 8;
                return dispatch(setStatus());

              case 8:
                _context3.next = 10;
                return dispatch(_users.usersOperations.load());

              case 10:
                return _context3.abrupt("return", true);

              case 13:
                error = response && _.get(response, "errors.0", null);
                if (error && error.code === "E_VALIDATION") result = error.details;

              case 15:
                _context3.next = 20;
                break;

              case 17:
                _context3.prev = 17;
                _context3.t0 = _context3["catch"](1);
                console.error(_context3.t0);

              case 20:
                return _context3.abrupt("return", result);

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 17]]);
      }));

      return function (_x4) {
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
      _regenerator.default.mark(function _callee4(dispatch) {
        var response;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation {\n            signOut {\n              success\n            }\n          }\n        "));

              case 3:
                response = _context4.sent;

                if (!(response && _.get(response, "data.signOut.success", false))) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", dispatch(setStatus()));

              case 6:
                _context4.next = 11;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                console.error(_context4.t0);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 8]]);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.signOut = signOut;

var updateProfile = function updateProfile(_ref6) {
  var values = _ref6.values;
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch) {
        var result, response, error;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                result = false;
                _context5.prev = 1;
                _context5.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($password: String) {\n            updateProfile(password: $password) {\n              success\n            }\n          }\n        ", {
                  password: values.get("password1")
                }));

              case 4:
                response = _context5.sent;

                if (response && _.get(response, "data.updateProfile.success", false)) {
                  result = true;
                } else {
                  error = response && _.get(response, "errors.0", null);
                  if (error && error.code === "E_VALIDATION") result = error.details;
                }

                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](1);
                console.error(_context5.t0);

              case 11:
                return _context5.abrupt("return", result);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 8]]);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.updateProfile = updateProfile;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStatus = exports.setCsrf = void 0;

var types = _interopRequireWildcard(__webpack_require__(12));

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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(2);

var _reduxImmutable = __webpack_require__(4);

var types = _interopRequireWildcard(__webpack_require__(13));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  list: List([
    Map({
      id: String,
      login: String,
      roles: [String],
    })
  ]),
  editModalUserId: String, // null when creating a new user
  isEditModalOpen: false,
})
*/
var listReducer = function listReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_LIST:
      if (!_.isUndefined(action.list)) return (0, _immutable.fromJS)(action.list);
      break;
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
  list: listReducer,
  editModalUserId: editModalUserIdReducer,
  isEditModalOpen: isEditModalOpenReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.edit = exports.create = exports.load = exports.hideEditModal = exports.showEditModal = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var actions = _interopRequireWildcard(__webpack_require__(46));

var _app = __webpack_require__(5);

var _constants = _interopRequireDefault(__webpack_require__(3));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var showEditModal = actions.showEditModal;
exports.showEditModal = showEditModal;
var hideEditModal = actions.hideEditModal;
exports.hideEditModal = hideEditModal;

var load = function load() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      req = _ref.req;

  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch) {
        var users, response;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 9;
                  break;
                }

                _context.t0 = _;
                _context.next = 4;
                return req.di.get("repository.users").getUsers(req);

              case 4:
                _context.t1 = _context.sent;

                _context.t2 = function (user) {
                  return _.assign({}, user, {
                    whenCreated: user.whenCreated.valueOf(),
                    whenUpdated: user.whenUpdated.valueOf()
                  });
                };

                users = _context.t0.map.call(_context.t0, _context.t1, _context.t2);
                _context.next = 13;
                break;

              case 9:
                _context.next = 11;
                return dispatch(_app.appOperations.gqlQuery("\n          query {\n            users {\n              id\n              login\n              roles\n            }\n          }\n        "));

              case 11:
                response = _context.sent;
                users = response && _.get(response, "data.users");

              case 13:
                _context.next = 15;
                return dispatch(actions.setList({
                  list: users
                }));

              case 15:
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
};

exports.load = load;

var create = function create(_ref3) {
  var login = _ref3.login,
      password = _ref3.password,
      isAdmin = _ref3.isAdmin,
      isCallCenter = _ref3.isCallCenter;
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch) {
        var result, response, error;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                result = false;
                _context2.prev = 1;
                _context2.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($login: String, $password: String, $roles: [UserRole]) {\n            createUser(login: $login, password: $password, roles: $roles) {\n              success\n            }\n          }\n        ", {
                  login: login,
                  password: password,
                  roles: _.compact([isAdmin && _constants.default.roles.ADMIN, isCallCenter && _constants.default.roles.CALL_CENTER])
                }));

              case 4:
                response = _context2.sent;

                if (!(response && _.get(response, "data.createUser.success", false))) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 8;
                return dispatch(actions.hideEditModal());

              case 8:
                return _context2.abrupt("return", true);

              case 11:
                error = response && _.get(response, "errors.0", null);
                if (error && error.code === "E_VALIDATION") result = error.details;

              case 13:
                _context2.next = 18;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](1);
                console.error(_context2.t0);

              case 18:
                return _context2.abrupt("return", result);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 15]]);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

exports.create = create;

var edit = function edit(_ref5) {
  var id = _ref5.id,
      login = _ref5.login,
      password = _ref5.password,
      isAdmin = _ref5.isAdmin,
      isCallCenter = _ref5.isCallCenter;
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch) {
        var result, response, error;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = false;
                _context3.prev = 1;
                _context3.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($id: String, $login: String, $password: String, $roles: [UserRole]) {\n            editUser(id: $id, login: $login, password: $password, roles: $roles) {\n              success\n            }\n          }\n        ", {
                  id: id,
                  login: login,
                  password: password,
                  roles: _.compact([isAdmin && _constants.default.roles.ADMIN, isCallCenter && _constants.default.roles.CALL_CENTER])
                }));

              case 4:
                response = _context3.sent;

                if (!(response && _.get(response, "data.editUser.success", false))) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 8;
                return dispatch(actions.hideEditModal());

              case 8:
                return _context3.abrupt("return", true);

              case 11:
                error = response && _.get(response, "errors.0", null);
                if (error && error.code === "E_VALIDATION") result = error.details;

              case 13:
                _context3.next = 18;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](1);
                console.error(_context3.t0);

              case 18:
                return _context3.abrupt("return", result);

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 15]]);
      }));

      return function (_x3) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

exports.edit = edit;

var remove = function remove(_ref7) {
  var id = _ref7.id;
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch) {
        var response, success;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return dispatch(_app.appOperations.gqlQuery("\n        mutation ($id: String) {\n          deleteUser(id: $id) {\n            success\n          }\n        }\n      ", {
                  id: id
                }));

              case 2:
                response = _context4.sent;
                success = response && _.get(response, "data.deleteUser.success") || false;
                return _context4.abrupt("return", success);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

exports.remove = remove;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideEditModal = exports.showEditModal = exports.setList = void 0;

var types = _interopRequireWildcard(__webpack_require__(13));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var setList = function setList(_ref) {
  var list = _ref.list;
  return {
    type: types.SET_LIST,
    list: list
  };
};

exports.setList = setList;

var showEditModal = function showEditModal() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      userId = _ref2.userId;

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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEditModalData = exports.isEditModalOpen = exports.getList = void 0;

var getList = function getList(state) {
  return state.getIn(["users", "list"]);
};

exports.getList = getList;

var isEditModalOpen = function isEditModalOpen(state) {
  return state.getIn(["users", "isEditModalOpen"]);
};

exports.isEditModalOpen = isEditModalOpen;

var getEditModalData = function getEditModalData(state) {
  var id = state.getIn(["users", "editModalUserId"]);
  if (!id) return null; // eslint-disable-next-line

  return state.getIn(["users", "list"]).find(function (item) {
    return item.get("id") === id;
  });
};

exports.getEditModalData = getEditModalData;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Storage =
/*#__PURE__*/
function () {
  function Storage(getState, dispatch) {
    _classCallCheck(this, Storage);

    if (true) return;
    this.getState = getState;
    this.dispatch = dispatch;
  } // eslint-disable-next-line lodash/prefer-constant


  _createClass(Storage, [{
    key: "get",
    value: function get(key, defaultValue) {
      if (true) return;
      var value = localStorage.getItem(key);
      return value ? JSON.parse(value) : defaultValue;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      if (true) return;
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      if (true) return;
      localStorage.removeItem(key);
    }
  }], [{
    key: "$provides",
    get: function get() {
      return "storage";
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$requires",
    get: function get() {
      return ["getState", "dispatch"];
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$lifecycle",
    get: function get() {
      return "singleton";
    }
  }]);

  return Storage;
}();

var _default = Storage;
exports.default = _default;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _socket = _interopRequireDefault(__webpack_require__(50));

var _app = __webpack_require__(5);

var _auth = __webpack_require__(9);

var _devices = __webpack_require__(25);

var _terminals = __webpack_require__(15);

var _histories = __webpack_require__(20);

var _constants = _interopRequireDefault(__webpack_require__(3));

var _package = _interopRequireDefault(__webpack_require__(68));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Socket =
/*#__PURE__*/
function () {
  function Socket(getState, dispatch) {
    _classCallCheck(this, Socket);

    if (true) return;
    this.getState = getState;
    this.dispatch = dispatch;
    this.socket = (0, _socket.default)({
      path: _constants.default.socketsBase,
      autoConnect: false
    });
    this.socket.on(_constants.default.messages.HELLO, this.onHello.bind(this));
    this.socket.on(_constants.default.messages.SET_STATUS, this.onSetStatus.bind(this));
    this.socket.on(_constants.default.messages.SET_DEVICE, this.onSetDevice.bind(this));
    this.socket.on(_constants.default.messages.DELETE_DEVICE, this.onDeleteDevice.bind(this));
    this.socket.on(_constants.default.messages.SET_TERMINAL, this.onSetTerminal.bind(this));
    this.socket.on(_constants.default.messages.DELETE_TERMINAL, this.onDeleteTerminal.bind(this));
    this.socket.on(_constants.default.messages.HISTORY, this.onHistory.bind(this));
    this.socket.on("disconnect", this.onDisconnect.bind(this));
  } // eslint-disable-next-line lodash/prefer-constant


  _createClass(Socket, [{
    key: "emit",
    value: function emit(message, data, cb) {
      if (true) return;
      if (false) {}
      this.socket.emit(message, data, cb && function (response) {
        try {
          return cb(response);
        } catch (error) {
          console.log(error);
        }
      });
    }
  }, {
    key: "connect",
    value: function connect() {
      if (true) return;
      if (!_app.appSelectors.isConnected(this.getState())) this.socket.connect();
      this.emit(_constants.default.messages.HELLO, {
        version: _package.default.version
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (true) return;
      if (_app.appSelectors.isConnected(this.getState())) this.socket.disconnect();
    }
  }, {
    key: "onHello",
    value: function () {
      var _onHello = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(msg) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                if (false) {}

                if (!(msg.version !== _package.default.version)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return this.dispatch(_app.appOperations.stop());

              case 5:
                return _context.abrupt("return", setTimeout(function () {
                  return window.location.reload();
                }, 3000));

              case 6:
                _context.next = 8;
                return this.dispatch(_app.appOperations.setConnected({
                  isConnected: true
                }));

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      function onHello(_x) {
        return _onHello.apply(this, arguments);
      }

      return onHello;
    }()
  }, {
    key: "onSetStatus",
    value: function () {
      var _onSetStatus = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(msg) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (false) {}

                _context2.next = 4;
                return this.dispatch(_auth.authOperations.setStatus(msg));

              case 4:
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6]]);
      }));

      function onSetStatus(_x2) {
        return _onSetStatus.apply(this, arguments);
      }

      return onSetStatus;
    }()
  }, {
    key: "onSetDevice",
    value: function () {
      var _onSetDevice = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(msg) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                if (false) {}

                _context3.next = 4;
                return this.dispatch(_devices.devicesOperations.set(msg));

              case 4:
                _context3.next = 9;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 6]]);
      }));

      function onSetDevice(_x3) {
        return _onSetDevice.apply(this, arguments);
      }

      return onSetDevice;
    }()
  }, {
    key: "onDeleteDevice",
    value: function () {
      var _onDeleteDevice = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(msg) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;

                if (false) {}

                _context4.next = 4;
                return this.dispatch(_devices.devicesOperations.remove(msg));

              case 4:
                _context4.next = 9;
                break;

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                console.error(_context4.t0);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 6]]);
      }));

      function onDeleteDevice(_x4) {
        return _onDeleteDevice.apply(this, arguments);
      }

      return onDeleteDevice;
    }()
  }, {
    key: "onSetTerminal",
    value: function () {
      var _onSetTerminal = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(msg) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;

                if (false) {}

                _context5.next = 4;
                return this.dispatch(_terminals.terminalsOperations.set(msg));

              case 4:
                _context5.next = 9;
                break;

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);
                console.error(_context5.t0);

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 6]]);
      }));

      function onSetTerminal(_x5) {
        return _onSetTerminal.apply(this, arguments);
      }

      return onSetTerminal;
    }()
  }, {
    key: "onDeleteTerminal",
    value: function () {
      var _onDeleteTerminal = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(msg) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;

                if (false) {}

                _context6.next = 4;
                return this.dispatch(_terminals.terminalsOperations.remove(msg));

              case 4:
                _context6.next = 9;
                break;

              case 6:
                _context6.prev = 6;
                _context6.t0 = _context6["catch"](0);
                console.error(_context6.t0);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 6]]);
      }));

      function onDeleteTerminal(_x6) {
        return _onDeleteTerminal.apply(this, arguments);
      }

      return onDeleteTerminal;
    }()
  }, {
    key: "onHistory",
    value: function () {
      var _onHistory = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(msg) {
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return this.dispatch(_histories.historiesOperations.add(msg));

              case 3:
                _context7.next = 8;
                break;

              case 5:
                _context7.prev = 5;
                _context7.t0 = _context7["catch"](0);
                console.error(_context7.t0);

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 5]]);
      }));

      function onHistory(_x7) {
        return _onHistory.apply(this, arguments);
      }

      return onHistory;
    }()
  }, {
    key: "onDisconnect",
    value: function () {
      var _onDisconnect = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8() {
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                if (false) {}
                _context8.next = 4;
                return this.dispatch(_app.appOperations.setConnected({
                  isConnected: false
                }));

              case 4:
                _context8.next = 6;
                return this.dispatch(_devices.devicesOperations.clear());

              case 6:
                _context8.next = 8;
                return this.dispatch(_terminals.terminalsOperations.clear());

              case 8:
                _context8.next = 10;
                return this.dispatch(_histories.historiesOperations.clear());

              case 10:
                _context8.next = 15;
                break;

              case 12:
                _context8.prev = 12;
                _context8.t0 = _context8["catch"](0);
                console.error(_context8.t0);

              case 15:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 12]]);
      }));

      function onDisconnect() {
        return _onDisconnect.apply(this, arguments);
      }

      return onDisconnect;
    }()
  }], [{
    key: "$provides",
    get: function get() {
      return "socket";
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$requires",
    get: function get() {
      return ["getState", "dispatch"];
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$lifecycle",
    get: function get() {
      return "singleton";
    }
  }]);

  return Socket;
}();

var _default = Socket;
exports.default = _default;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxImmutable = __webpack_require__(4);

var _immutable = __webpack_require__(2);

var types = _interopRequireWildcard(__webpack_require__(14));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  list: List([
    Map({
      id: String,
      name: String,
    })
  ]),
  online: Map({
    deviceId: Map({
      name: String,
    }),
  })
  editModalDeviceId: String, // null when creating a new device
  isEditModalOpen: false,
})
*/
var listReducer = function listReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_LIST:
      if (!_.isUndefined(action.list)) return (0, _immutable.fromJS)(action.list);
      break;
  }

  return state;
};

var nameReducer = function nameReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET:
      if (!_.isUndefined(action.name)) return action.name;
      break;
  }

  return state;
};

var deviceReducer = (0, _reduxImmutable.combineReducers)({
  name: nameReducer
});

var onlineReducer = function onlineReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)({});
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CLEAR:
      return (0, _immutable.Map)({});

    case types.SET:
      return state.withMutations(function (map) {
        return map.set(action.deviceId, deviceReducer(map.get(action.deviceId), _.assign({
          type: types.SET
        }, action.data)));
      });

    case types.REMOVE:
      return state.delete(action.deviceId);
  }

  return state;
};

var editModalDeviceIdReducer = function editModalDeviceIdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return action.deviceId || null;
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
  list: listReducer,
  online: onlineReducer,
  editModalDeviceId: editModalDeviceIdReducer,
  isEditModalOpen: isEditModalOpenReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqRemove = exports.reqEdit = exports.reqCreate = exports.load = exports.remove = exports.hideEditModal = exports.showEditModal = exports.set = exports.clear = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var actions = _interopRequireWildcard(__webpack_require__(53));

var _app = __webpack_require__(5);

var _terminals = __webpack_require__(15);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var clear = actions.clear;
exports.clear = clear;
var set = actions.set;
exports.set = set;
var showEditModal = actions.showEditModal;
exports.showEditModal = showEditModal;
var hideEditModal = actions.hideEditModal;
exports.hideEditModal = hideEditModal;

var remove = function remove(_ref) {
  var deviceId = _ref.deviceId;
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch, getState) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.all( // eslint-disable-next-line lodash/prefer-lodash-method
                _terminals.terminalsSelectors.getTerminalsMap(getState()).map(function (terminal, terminalId) {
                  if (terminal.get("deviceId") === deviceId) return dispatch(_terminals.terminalsOperations.remove({
                    terminalId: terminalId
                  }));
                }).toList().filter(function (item) {
                  return !!item;
                }).toJS());

              case 2:
                return _context.abrupt("return", dispatch(actions.remove({
                  deviceId: deviceId
                })));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

exports.remove = remove;

var load = function load() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      req = _ref3.req;

  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch) {
        var devices, response;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!req) {
                  _context2.next = 9;
                  break;
                }

                _context2.t0 = _;
                _context2.next = 4;
                return req.di.get("repository.devices").getDevices(req);

              case 4:
                _context2.t1 = _context2.sent;

                _context2.t2 = function (device) {
                  return _.assign({}, device, {
                    whenCreated: device.whenCreated.valueOf(),
                    whenUpdated: device.whenUpdated.valueOf()
                  });
                };

                devices = _context2.t0.map.call(_context2.t0, _context2.t1, _context2.t2);
                _context2.next = 13;
                break;

              case 9:
                _context2.next = 11;
                return dispatch(_app.appOperations.gqlQuery("\n          query {\n            devices {\n              id\n              name\n            }\n          }\n        "));

              case 11:
                response = _context2.sent;
                devices = response && _.get(response, "data.devices");

              case 13:
                _context2.next = 15;
                return dispatch(actions.setList({
                  list: devices
                }));

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

exports.load = load;

var reqCreate = function reqCreate(_ref5) {
  var name = _ref5.name,
      password = _ref5.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch) {
        var result, response, error;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = false;
                _context3.prev = 1;
                _context3.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($name: String, $password: String) {\n            createDevice(name: $name, password: $password) {\n              success\n            }\n          }\n        ", {
                  name: name,
                  password: password
                }));

              case 4:
                response = _context3.sent;

                if (!(response && _.get(response, "data.createDevice.success", false))) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 8;
                return dispatch(actions.hideEditModal());

              case 8:
                return _context3.abrupt("return", true);

              case 11:
                error = response && _.get(response, "errors.0", null);
                if (error && error.code === "E_VALIDATION") result = error.details;

              case 13:
                _context3.next = 18;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](1);
                console.error(_context3.t0);

              case 18:
                return _context3.abrupt("return", result);

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 15]]);
      }));

      return function (_x4) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

exports.reqCreate = reqCreate;

var reqEdit = function reqEdit(_ref7) {
  var id = _ref7.id,
      name = _ref7.name,
      password = _ref7.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch) {
        var result, response, error;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                result = false;
                _context4.prev = 1;
                _context4.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($id: String, $name: String, $password: String) {\n            editDevice(id: $id, name: $name, password: $password) {\n              success\n            }\n          }\n        ", {
                  id: id,
                  name: name,
                  password: password
                }));

              case 4:
                response = _context4.sent;

                if (!(response && _.get(response, "data.editDevice.success", false))) {
                  _context4.next = 11;
                  break;
                }

                _context4.next = 8;
                return dispatch(actions.hideEditModal());

              case 8:
                return _context4.abrupt("return", true);

              case 11:
                error = response && _.get(response, "errors.0", null);
                if (error && error.code === "E_VALIDATION") result = error.details;

              case 13:
                _context4.next = 18;
                break;

              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4["catch"](1);
                console.error(_context4.t0);

              case 18:
                return _context4.abrupt("return", result);

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 15]]);
      }));

      return function (_x5) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

exports.reqEdit = reqEdit;

var reqRemove = function reqRemove(_ref9) {
  var id = _ref9.id;
  return (
    /*#__PURE__*/
    function () {
      var _ref10 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch) {
        var response, success;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return dispatch(_app.appOperations.gqlQuery("\n        mutation ($id: String) {\n          deleteDevice(id: $id) {\n            success\n          }\n        }\n      ", {
                  id: id
                }));

              case 2:
                response = _context5.sent;
                success = response && _.get(response, "data.deleteDevice.success") || false;
                return _context5.abrupt("return", success);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x6) {
        return _ref10.apply(this, arguments);
      };
    }()
  );
};

exports.reqRemove = reqRemove;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideEditModal = exports.showEditModal = exports.remove = exports.set = exports.clear = exports.setList = void 0;

var types = _interopRequireWildcard(__webpack_require__(14));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var setList = function setList(_ref) {
  var list = _ref.list;
  return {
    type: types.SET_LIST,
    list: list
  };
};

exports.setList = setList;

var clear = function clear() {
  return {
    type: types.CLEAR
  };
};

exports.clear = clear;

var set = function set(data) {
  return _.assign({
    type: types.SET
  }, data);
};

exports.set = set;

var remove = function remove(_ref2) {
  var deviceId = _ref2.deviceId;
  return {
    type: types.REMOVE,
    deviceId: deviceId
  };
};

exports.remove = remove;

var showEditModal = function showEditModal() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      deviceId = _ref3.deviceId;

  return {
    type: types.SHOW_EDIT_MODAL,
    deviceId: deviceId
  };
};

exports.showEditModal = showEditModal;

var hideEditModal = function hideEditModal() {
  return {
    type: types.HIDE_EDIT_MODAL
  };
};

exports.hideEditModal = hideEditModal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxImmutable = __webpack_require__(4);

var _immutable = __webpack_require__(2);

var types = _interopRequireWildcard(__webpack_require__(16));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  online: Map({
    terminalId: Map({
      deviceId: String,
      name: String,
      isConnecting: Boolean, // true when started connecting
      isWaiting: Boolean, // true after keyboard auth stage
      isConnected: Boolean, // true when logged in
      status: String, // or null
      auth: Map({ // or null if not requested
        username: String,
        banner: String,
        prompts: List([String]),
      }),
    })
  })
})
*/
var authUsernameReducer = function authUsernameReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var tmp;

  switch (action.type) {
    case types.SET:
      tmp = action.auth;
      if (!_.isUndefined(tmp)) return tmp && tmp.username ? tmp.username : null;
      break;
  }

  return state;
};

var authBannerReducer = function authBannerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var tmp;

  switch (action.type) {
    case types.SET:
      tmp = action.auth;
      if (!_.isUndefined(tmp)) return tmp && tmp.banner ? tmp.banner : null;
      break;
  }

  return state;
};

var authPromptsReducer = function authPromptsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var tmp;

  switch (action.type) {
    case types.SET:
      tmp = action.auth;
      if (!_.isUndefined(tmp)) return tmp && tmp.prompts ? (0, _immutable.fromJS)(tmp.prompts) : null;
      break;
  }

  return state;
};

var authReducer = (0, _reduxImmutable.combineReducers)({
  username: authUsernameReducer,
  banner: authBannerReducer,
  prompts: authPromptsReducer
});

var deviceIdReducer = function deviceIdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.deviceId)) return action.deviceId;
      break;
  }

  return state;
};

var nameReducer = function nameReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.name)) return action.name;
      break;
  }

  return state;
};

var isConnectingReducer = function isConnectingReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.isConnecting)) return action.isConnecting;
      break;
  }

  return state;
};

var isWaitingReducer = function isWaitingReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.isWaiting)) return action.isWaiting;
      break;
  }

  return state;
};

var isConnectedReducer = function isConnectedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.isConnected)) return action.isConnected;
      break;
  }

  return state;
};

var statusReducer = function statusReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.status)) return action.status;
      break;
  }

  return state;
};

var terminalReducer = (0, _reduxImmutable.combineReducers)({
  deviceId: deviceIdReducer,
  name: nameReducer,
  isConnecting: isConnectingReducer,
  isWaiting: isWaitingReducer,
  isConnected: isConnectedReducer,
  status: statusReducer,
  auth: authReducer
});

var onlineReducer = function onlineReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)({});
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CLEAR:
      return (0, _immutable.Map)({});

    case types.SET:
      return state.withMutations(function (map) {
        return map.set(action.terminalId, terminalReducer(map.get(action.terminalId), _.assign({
          type: types.SET
        }, action.data)));
      });

    case types.REMOVE:
      return state.delete(action.terminalId);
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  online: onlineReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.kill = exports.sendResize = exports.sendInput = exports.finishKeyboardAuth = exports.cancelKeyboardAuth = exports.finishSetupAuth = exports.cancelSetupAuth = exports.startSetupAuth = exports.set = exports.clear = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var actions = _interopRequireWildcard(__webpack_require__(56));

var _app = __webpack_require__(5);

var _histories = __webpack_require__(20);

var _activeTerminal = __webpack_require__(27);

var _constants = _interopRequireDefault(__webpack_require__(3));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var clear = actions.clear;
exports.clear = clear;
var set = actions.set;
exports.set = set;

var startSetupAuth = function startSetupAuth(_ref) {
  var deviceId = _ref.deviceId;
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
                return _context.abrupt("return", dispatch(_activeTerminal.activeTerminalOperations.set({
                  deviceId: deviceId,
                  terminalId: null,
                  isCollectingCredentials: true
                })));

              case 1:
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
};

exports.startSetupAuth = startSetupAuth;

var cancelSetupAuth = function cancelSetupAuth(_ref3) {
  var deviceId = _ref3.deviceId;
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", dispatch(_activeTerminal.activeTerminalOperations.set({
                  deviceId: deviceId,
                  terminalId: null,
                  isCollectingCredentials: false
                })));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

exports.cancelSetupAuth = cancelSetupAuth;

var finishSetupAuth = function finishSetupAuth(_ref5) {
  var deviceId = _ref5.deviceId,
      username = _ref5.username,
      password = _ref5.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch, getState) {
        var socket;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return dispatch(_activeTerminal.activeTerminalOperations.set({
                  deviceId: deviceId,
                  terminalId: null,
                  isCollectingCredentials: false
                }));

              case 2:
                socket = _app.appSelectors.getService(getState(), {
                  service: "socket"
                });

                if (socket) {
                  socket.emit(_constants.default.messages.CONNECT_TERMINAL, {
                    deviceId: deviceId,
                    username: username,
                    password: password
                  },
                  /*#__PURE__*/
                  function () {
                    var _ref7 = _asyncToGenerator(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee3(response) {
                      return _regenerator.default.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              if (!(response.id && response.name)) {
                                _context3.next = 3;
                                break;
                              }

                              _context3.next = 3;
                              return dispatch(_activeTerminal.activeTerminalOperations.set({
                                deviceId: deviceId,
                                terminalId: response.id,
                                isCollectingCredentials: false
                              }));

                            case 3:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3, this);
                    }));

                    return function (_x5) {
                      return _ref7.apply(this, arguments);
                    };
                  }());
                }

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x3, _x4) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

exports.finishSetupAuth = finishSetupAuth;

var cancelKeyboardAuth = function cancelKeyboardAuth(_ref8) {
  var terminalId = _ref8.terminalId;
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch, getState) {
        var socket;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return dispatch(set({
                  terminalId: terminalId,
                  data: {
                    isConnecting: false,
                    isWaiting: false,
                    isConnected: false,
                    status: null,
                    auth: null
                  }
                }));

              case 2:
                socket = _app.appSelectors.getService(getState(), {
                  service: "socket"
                });

                if (socket) {
                  socket.emit(_constants.default.messages.KEYBOARD_AUTH, {
                    terminalId: terminalId,
                    reply: null
                  });
                }

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x6, _x7) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
};

exports.cancelKeyboardAuth = cancelKeyboardAuth;

var finishKeyboardAuth = function finishKeyboardAuth(_ref10) {
  var terminalId = _ref10.terminalId,
      reply = _ref10.reply;
  return (
    /*#__PURE__*/
    function () {
      var _ref11 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(dispatch, getState) {
        var socket;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return dispatch(set({
                  terminalId: terminalId,
                  data: {
                    isConnecting: true,
                    isWaiting: true,
                    isConnected: false,
                    status: null,
                    auth: null
                  }
                }));

              case 2:
                socket = _app.appSelectors.getService(getState(), {
                  service: "socket"
                });

                if (socket) {
                  socket.emit(_constants.default.messages.KEYBOARD_AUTH, {
                    terminalId: terminalId,
                    reply: reply
                  });
                }

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x8, _x9) {
        return _ref11.apply(this, arguments);
      };
    }()
  );
};

exports.finishKeyboardAuth = finishKeyboardAuth;

var sendInput = function sendInput(_ref12) {
  var terminalId = _ref12.terminalId,
      data = _ref12.data;
  return (
    /*#__PURE__*/
    function () {
      var _ref13 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(dispatch, getState) {
        var socket;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                socket = _app.appSelectors.getService(getState(), {
                  service: "socket"
                });

                if (socket) {
                  socket.emit(_constants.default.messages.TERMINAL_INPUT, {
                    terminalId: terminalId,
                    data: data
                  });
                }

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x10, _x11) {
        return _ref13.apply(this, arguments);
      };
    }()
  );
};

exports.sendInput = sendInput;

var sendResize = function sendResize(_ref14) {
  var terminalId = _ref14.terminalId,
      cols = _ref14.cols,
      rows = _ref14.rows,
      width = _ref14.width,
      height = _ref14.height;
  return (
    /*#__PURE__*/
    function () {
      var _ref15 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(dispatch, getState) {
        var socket;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                socket = _app.appSelectors.getService(getState(), {
                  service: "socket"
                });

                if (socket) {
                  socket.emit(_constants.default.messages.TERMINAL_RESIZED, {
                    terminalId: terminalId,
                    cols: cols,
                    rows: rows,
                    width: width,
                    height: height
                  });
                }

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x12, _x13) {
        return _ref15.apply(this, arguments);
      };
    }()
  );
};

exports.sendResize = sendResize;

var kill = function kill(_ref16) {
  var terminalId = _ref16.terminalId;
  return (
    /*#__PURE__*/
    function () {
      var _ref17 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(dispatch, getState) {
        var socket;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                socket = _app.appSelectors.getService(getState(), {
                  service: "socket"
                });

                if (socket) {
                  socket.emit(_constants.default.messages.DISCONNECT_TERMINAL, {
                    terminalId: terminalId
                  });
                }

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function (_x14, _x15) {
        return _ref17.apply(this, arguments);
      };
    }()
  );
};

exports.kill = kill;

var remove = function remove(_ref18) {
  var terminalId = _ref18.terminalId;
  return (
    /*#__PURE__*/
    function () {
      var _ref19 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee10(dispatch) {
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return dispatch(_histories.historiesOperations.remove({
                  terminalId: terminalId
                }));

              case 2:
                return _context10.abrupt("return", dispatch(actions.remove({
                  terminalId: terminalId
                })));

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function (_x16) {
        return _ref19.apply(this, arguments);
      };
    }()
  );
};

exports.remove = remove;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.set = exports.clear = void 0;

var types = _interopRequireWildcard(__webpack_require__(16));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var clear = function clear() {
  return {
    type: types.CLEAR
  };
};

exports.clear = clear;

var set = function set(data) {
  return _.assign({
    type: types.SET
  }, data);
};

exports.set = set;

var remove = function remove(_ref) {
  var terminalId = _ref.terminalId;
  return {
    type: types.REMOVE,
    terminalId: terminalId
  };
};

exports.remove = remove;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxImmutable = __webpack_require__(4);

var _immutable = __webpack_require__(2);

var _uuid = _interopRequireDefault(__webpack_require__(58));

var types = _interopRequireWildcard(__webpack_require__(17));

var _constants = _interopRequireDefault(__webpack_require__(3));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* State Shape
Map({
  historyId: List([ // equals terminalId or cameraId
    {
      recordId: string,
      isError: Boolean,
      data: String,
    },
  ])
})
*/
var recordIdReducer = function recordIdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _uuid.default.v4();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.ADD:
      if (!_.isUndefined(action.recordId)) return action.recordId;
      break;
  }

  return state;
};

var isErrorReducer = function isErrorReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.ADD:
      if (!_.isUndefined(action.isError)) return action.isError;
      break;
  }

  return state;
};

var dataReducer = function dataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.ADD:
      if (!_.isUndefined(action.data)) return action.data;
      break;
  }

  return state;
};

var recordReducer = (0, _reduxImmutable.combineReducers)({
  recordId: recordIdReducer,
  isError: isErrorReducer,
  data: dataReducer
});

var listReducer = function listReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.ADD:
      return state.withMutations(function (list) {
        var data = _.isArray(action.data) ? action.data : [action.data];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          var _loop = function _loop() {
            var item = _step.value;
            // eslint-disable-next-line lodash/prefer-lodash-method
            if (list.find(function (el) {
              return el.get("recordId") === item.recordId;
            })) return "continue";
            list.push(recordReducer(undefined, _.assign({
              type: types.ADD
            }, item)));
            if (list.size > _constants.default.historySize) list.shift();
          };

          for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ret = _loop();

            if (_ret === "continue") continue;
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

  return state;
};

var historiesReducer = function historiesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)({});
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CLEAR:
      return (0, _immutable.Map)({});

    case types.ADD:
      return state.withMutations(function (map) {
        var id = action.historyId || action.terminalId;
        map.set(id, listReducer(map.get(id), action));
      });

    case types.REMOVE:
      return state.delete(action.historyId || action.terminalId);

    case types.REMOVE_STARTING:
      return state.withMutations(function (map) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = map.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var id = _step2.value;
            if (_.startsWith(id, action.historyId || action.terminalId)) map.delete(id);
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
      });
  }

  return state;
};

var _default = historiesReducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = exports.removeStarting = exports.remove = exports.add = void 0;

var actions = _interopRequireWildcard(__webpack_require__(60));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var add = actions.add;
exports.add = add;
var remove = actions.remove;
exports.remove = remove;
var removeStarting = actions.removeStarting;
exports.removeStarting = removeStarting;
var clear = actions.clear;
exports.clear = clear;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeStarting = exports.remove = exports.add = exports.clear = void 0;

var types = _interopRequireWildcard(__webpack_require__(17));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var clear = function clear() {
  return {
    type: types.CLEAR
  };
};

exports.clear = clear;

var add = function add(_ref) {
  var historyId = _ref.historyId,
      terminalId = _ref.terminalId,
      data = _ref.data;
  return {
    type: types.ADD,
    historyId: historyId,
    terminalId: terminalId,
    data: data
  };
};

exports.add = add;

var remove = function remove(_ref2) {
  var historyId = _ref2.historyId,
      terminalId = _ref2.terminalId;
  return {
    type: types.REMOVE,
    historyId: historyId,
    terminalId: terminalId
  };
};

exports.remove = remove;

var removeStarting = function removeStarting(_ref3) {
  var historyId = _ref3.historyId,
      terminalId = _ref3.terminalId;
  return {
    type: types.REMOVE_STARTING,
    historyId: historyId,
    terminalId: terminalId
  };
};

exports.removeStarting = removeStarting;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getList = void 0;

var _immutable = __webpack_require__(2);

var getList = function getList(state, props) {
  return state.getIn(["histories", props.historyId || props.terminalId]) || (0, _immutable.List)([]);
};

exports.getList = getList;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxImmutable = __webpack_require__(4);

var types = _interopRequireWildcard(__webpack_require__(18));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  deviceId: null,
  terminalId: null,
  isCollectingCredentails: false,
})
*/
var deviceIdReducer = function deviceIdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET:
      return action.deviceId || null;
  }

  return state;
};

var terminalIdReducer = function terminalIdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET:
      return action.terminalId || null;
  }

  return state;
};

var isCollectingCredentialsReducer = function isCollectingCredentialsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET:
      return action.isCollectingCredentials || false;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  deviceId: deviceIdReducer,
  terminalId: terminalIdReducer,
  isCollectingCredentials: isCollectingCredentialsReducer
});
var _default = reducer;
exports.default = _default;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = void 0;

var actions = _interopRequireWildcard(__webpack_require__(64));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var set = actions.set;
exports.set = set;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = void 0;

var types = _interopRequireWildcard(__webpack_require__(18));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var set = function set(_ref) {
  var deviceId = _ref.deviceId,
      terminalId = _ref.terminalId,
      isCollectingCredentials = _ref.isCollectingCredentials;
  return {
    type: types.SET,
    deviceId: deviceId,
    terminalId: terminalId,
    isCollectingCredentials: isCollectingCredentials
  };
};

exports.set = set;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAuthInfo = exports.isCollectingCredentials = exports.getDeviceId = void 0;

var getDeviceId = function getDeviceId(state) {
  return state.getIn(["activeTerminal", "deviceId"]);
};

exports.getDeviceId = getDeviceId;

var isCollectingCredentials = function isCollectingCredentials(state) {
  return state.getIn(["activeTerminal", "isCollectingCredentials"]) || false;
};

exports.isCollectingCredentials = isCollectingCredentials;

var getAuthInfo = function getAuthInfo(state) {
  // eslint-disable-next-line lodash/prefer-lodash-method
  var terminals = state.get("terminals").filter(function (item) {
    return !!item.getIn(["auth", "prompts"]);
  });

  if (!terminals.size) {
    return {
      terminalId: null,
      banner: null,
      prompts: []
    };
  }

  var terminalId = Array.from(terminals.keys())[0];
  return {
    terminalId: terminalId,
    banner: terminals.getIn([terminalId, "auth", "banner"]),
    prompts: terminals.getIn([terminalId, "auth", "prompts"]).toJS()
  };
};

exports.getAuthInfo = getAuthInfo;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTerminalMap = exports.getTerminalsMap = void 0;

var getTerminalsMap = function getTerminalsMap(state) {
  return state.getIn(["terminals", "online"]);
};

exports.getTerminalsMap = getTerminalsMap;

var getTerminalMap = function getTerminalMap(state, props) {
  return state.getIn(["terminals", "online", props.terminalId]);
};

exports.getTerminalMap = getTerminalMap;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEditModalData = exports.isEditModalOpen = exports.getList = void 0;

var _reselect = __webpack_require__(23);

var _immutable = __webpack_require__(2);

var getList = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["devices", "online"]);
}, function (state) {
  return state.getIn(["terminals", "online"]);
}, function (devices, terminals) {
  return devices // eslint-disable-line lodash/prefer-lodash-method
  .map(function (deviceInfo, deviceId) {
    return (0, _immutable.Map)({
      id: deviceId,
      name: deviceInfo.get("name"),
      cameraId: deviceInfo.get("cameraId"),
      terminals: terminals // eslint-disable-line lodash/prefer-lodash-method
      .map(function (terminalInfo, terminalId) {
        return {
          id: terminalId,
          valid: terminalInfo.get("deviceId") === deviceId && terminalInfo.get("isConnecting")
        };
      }).toList().filter(function (item) {
        return !!item.valid;
      }).map(function (item) {
        return item.id;
      })
    });
  }).toList().sort(function (a, b) {
    return a.get("name").toString().localeCompare(b.get("name").toString());
  });
});
exports.getList = getList;

var isEditModalOpen = function isEditModalOpen(state) {
  return state.getIn(["devices", "isEditModalOpen"]);
};

exports.isEditModalOpen = isEditModalOpen;

var getEditModalData = function getEditModalData(state) {
  var id = state.getIn(["devices", "editModalDeviceId"]);
  if (!id) return null; // eslint-disable-next-line

  return state.getIn(["devices", "list"]).find(function (item) {
    return item.get("id") === id;
  });
};

exports.getEditModalData = getEditModalData;

/***/ }),
/* 68 */
/***/ (function(module) {

module.exports = {"name":"remote-configurator","version":"0.1.0","private":true,"dependencies":{"@date-io/moment":"~0.0.2","@material-ui/core":"~3.6.1","@material-ui/icons":"~3.0.1","@zeit/next-bundle-analyzer":"~0.1.2","@zeit/next-css":"~1.0.1","base64util":"~2.0.0-f","bcrypt":"~3.0.2","body-parser":"~1.18.3","classnames":"~2.2.6","compression":"~1.7.3","connect-loki":"~1.1.0","cookie-parser":"~1.4.3","cors":"~2.8.5","csurf":"~1.9.0","debug":"~4.1.0","dotenv":"~6.1.0","express":"~4.16.4","express-graphql":"~0.7.1","express-session":"~1.15.6","fs-extra":"~7.0.1","generate-rsa-keypair":"~0.1.2","graphql":"14.0.2","graphql-tools":"~4.0.3","immutable":"~4.0.0-rc.12","injectt":"~0.1.1","intl":"~1.2.5","intl-locales-supported":"~1.0.0","intl-messageformat":"~2.2.0","isomorphic-unfetch":"~3.0.0","json-immutable":"~0.4.0","jss":"~9.8.7","jss-extend":"~6.2.0","lodash":"~4.17.11","lokijs":"~1.5.5","lru-cache":"~5.1.1","material-ui-pickers":"~2.0.4","moment":"~2.22.2","moment-timezone":"~0.5.23","morgan":"~1.9.1","next":"~7.0.2","next-compose-plugins":"~2.1.1","next-progressbar":"~1.0.0","raf":"~3.4.1","react":"~16.6.3","react-dom":"~16.6.3","react-intl":"~2.7.2","react-jss":"~8.6.1","react-redux":"~5.1.1","react-swipeable-views":"~0.13.0","react-virtualized":"~9.21.0","redux":"~4.0.1","redux-devtools-extension":"~2.13.7","redux-form":"~7.4.2","redux-immutable":"~4.0.0","redux-thunk":"~2.3.0","reselect":"~4.0.0","serve-favicon":"~2.5.0","serviceworker-webpack-plugin":"~1.0.1","socket.io":"~2.2.0","ssh2":"~0.6.1","svg-inline-loader":"~0.8.0","utf8":"~3.0.0","uuid":"~3.3.2","validator":"~10.9.0","webpack":"4.20.2","xterm":"~3.8.0"},"devDependencies":{"@babel/core":"7.0.0","babel-core":"7.0.0-bridge.0","babel-eslint":"~10.0.1","babel-jest":"~23.6.0","babel-plugin-lodash":"~3.3.4","css-mqpacker":"~7.0.0","enzyme":"~3.7.0","enzyme-adapter-react-16":"~1.7.0","eslint":"~5.9.0","eslint-plugin-lodash":"~5.0.0","eslint-plugin-react":"~7.11.1","jest":"~23.6.0","jsdom":"~13.0.0","jsdom-global":"~3.0.2","postcss-clean":"~1.1.0","postcss-loader":"~3.0.0","postcss-preset-env":"~6.4.0","postcss-url":"~8.0.0","prop-types":"~15.6.2","supertest":"~3.3.0","webfontloader":"~1.6.28"},"scripts":{"lint":"eslint . --max-warnings=0","test":"jest . --no-cache --forceExit","build":"node ./bin/prepare-build && env NODE_ENV=production TMPDIR=$PWD/.tmp next build","export":"env NODE_ENV=production TMPDIR=$PWD/.tmp next export","dev":"node ./bin/prepare-build && env NODE_ENV=development node ./bin/www","start":"env NODE_ENV=production node ./bin/www"}};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cookie =
/*#__PURE__*/
function () {
  function Cookie() {
    _classCallCheck(this, Cookie);
  }

  _createClass(Cookie, [{
    key: "get",
    value: function get(name) {
      if (true) return;
      var v = document.cookie.match("(^|;) ?" + encodeURIComponent(name) + "=([^;]*)(;|$)");
      return v ? decodeURIComponent(v[2]) : null;
    }
  }, {
    key: "set",
    value: function set(name, value) {
      var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 365;
      if (true) return;
      var d = new Date();
      d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
      document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";path=/;expires=" + d.toGMTString();
    }
  }, {
    key: "delete",
    value: function _delete(name) {
      if (true) return;
      this.set(encodeURIComponent(name), "", -1);
    }
  }], [{
    key: "$provides",
    // eslint-disable-next-line lodash/prefer-constant
    get: function get() {
      return "cookie";
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$requires",
    get: function get() {
      return [];
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$lifecycle",
    get: function get() {
      return "singleton";
    }
  }]);

  return Cookie;
}();

var _default = Cookie;
exports.default = _default;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isConnected = exports.isStarted = exports.getLocale = exports.getStatusCode = exports.getService = exports.getCreated = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getCreated = function getCreated(state) {
  return state.getIn(["app", "created"]);
};

exports.getCreated = getCreated;

var getService = function getService(state, props) {
  var di = state.getIn(["app", "di"]);
  return di ? di.get.apply(di, [props.service].concat(_toConsumableArray(props.params || []))) : null;
};

exports.getService = getService;

var getStatusCode = function getStatusCode(state) {
  return state.getIn(["app", "statusCode"]);
};

exports.getStatusCode = getStatusCode;

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
/* 71 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(19);

var _immutable = __webpack_require__(21);

var getImmutableFields = function getImmutableFields(Form) {
  return _.difference(_.keys(Form.propTypes), _.keys(_immutable.propTypes));
};

var getBlurFields = function getBlurFields(Form) {
  return _.transform(Form.fields, function (acc, value, key) {
    if (value.transform || value.validate) acc.push(key);
  }, []);
};

var _default = function _default(FormComponent, mapStateToProps, mapDispatchToProps) {
  var Form = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _immutable.reduxForm)({
    form: FormComponent.formName,
    destroyOnUnmount: false,
    immutableProps: getImmutableFields(FormComponent),
    asyncBlurFields: getBlurFields(FormComponent),
    asyncChangeFields: [],
    onSubmit: FormComponent.onSubmit.bind(FormComponent),
    onSubmitFail: FormComponent.onSubmitFail.bind(FormComponent),
    onSubmitSuccess: FormComponent.onSubmitSuccess.bind(FormComponent),
    onChange: FormComponent.onChange.bind(FormComponent),
    asyncValidate: FormComponent.onValidate.bind(FormComponent)
  })(FormComponent));
  Form.formName = FormComponent.formName;
  return Form;
};

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(6));

var _propTypes = _interopRequireDefault(__webpack_require__(7));

var _immutable = __webpack_require__(21);

var _normalize = _interopRequireDefault(__webpack_require__(80));

var _validate2 = _interopRequireDefault(__webpack_require__(91));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormComponent, _React$Component);

  _createClass(FormComponent, null, [{
    key: "getValue",
    value: function getValue(props, name) {
      return props.fieldValues[this.formName].get(name);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit()
    /*values, dispatch, props*/
    {}
  }, {
    key: "onSubmitFail",
    value: function onSubmitFail(error, dispatch, submitError
    /*, props */
    ) {
      if (false) {}
    }
  }, {
    key: "onSubmitSuccess",
    value: function onSubmitSuccess(result
    /*, dispatch, props */
    ) {
      if (false) {}
    }
  }, {
    key: "onChange",
    value: function onChange(values, dispatch, props, prevValues) {
      if (!this.cachedErrors[props.form]) return; // remove error status of the field changed

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = values.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var field = _step.value;

          if (this.cachedErrors[props.form][field] && values.get(field) !== prevValues.get(field)) {
            delete this.cachedErrors[props.form][field];
            dispatch(props.clearAsyncError(field));
          }
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
    }
  }, {
    key: "doValidate",
    value: function () {
      var _doValidate = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(values, dispatch, props, blurredField) {
        var transform,
            fields,
            _iteratorNormalCompletion2,
            _didIteratorError2,
            _iteratorError2,
            _iterator2,
            _step2,
            field,
            value,
            transformed,
            errors,
            _args = arguments;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                transform = _args.length > 4 && _args[4] !== undefined ? _args[4] : true;
                _context.prev = 1;
                // if blurred field is not set, validate all of them
                fields = blurredField ? _.isArray(blurredField) ? blurredField : [blurredField] : _.keys(this.fields);
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context.prev = 6;
                _iterator2 = fields[Symbol.iterator]();

              case 8:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context.next = 23;
                  break;
                }

                field = _step2.value;
                value = values.get(field); // transform value first if requested

                if (!(transform && this.fields[field].transform)) {
                  _context.next = 17;
                  break;
                }

                transformed = (0, _normalize.default)(props, this.fields[field].transform, value, value, values, values);

                if (!(transformed !== value)) {
                  _context.next = 17;
                  break;
                }

                _context.next = 16;
                return dispatch(props.change(field, transformed));

              case 16:
                value = transformed;

              case 17:
                errors = []; // validate

                if (this.fields[field].validate) errors = (0, _validate2.default)(props, this.fields[field].validate, value, values); // cache result

                if (errors.length) {
                  if (!this.cachedErrors[props.form]) this.cachedErrors[props.form] = {};
                  this.cachedErrors[props.form][field] = errors;
                } else {
                  if (this.cachedErrors[props.form]) delete this.cachedErrors[props.form][field];
                }

              case 20:
                _iteratorNormalCompletion2 = true;
                _context.next = 8;
                break;

              case 23:
                _context.next = 29;
                break;

              case 25:
                _context.prev = 25;
                _context.t0 = _context["catch"](6);
                _didIteratorError2 = true;
                _iteratorError2 = _context.t0;

              case 29:
                _context.prev = 29;
                _context.prev = 30;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 32:
                _context.prev = 32;

                if (!_didIteratorError2) {
                  _context.next = 35;
                  break;
                }

                throw _iteratorError2;

              case 35:
                return _context.finish(32);

              case 36:
                return _context.finish(29);

              case 37:
                _context.next = 42;
                break;

              case 39:
                _context.prev = 39;
                _context.t1 = _context["catch"](1);
                console.error(_context.t1);

              case 42:
                if (!(this.cachedErrors[props.form] && _.keys(this.cachedErrors[props.form]).length)) {
                  _context.next = 44;
                  break;
                }

                throw _.cloneDeep(this.cachedErrors[props.form]);

              case 44:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 39], [6, 25, 29, 37], [30,, 32, 36]]);
      }));

      function doValidate(_x, _x2, _x3, _x4) {
        return _doValidate.apply(this, arguments);
      }

      return doValidate;
    }()
  }, {
    key: "onValidate",
    value: function () {
      var _onValidate = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3() {
        var _this2 = this;

        var _len,
            args,
            _key,
            _args3 = arguments;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                for (_len = _args3.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args3[_key];
                }

                setTimeout(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                _regenerator.default.mark(function _callee2() {
                  return _regenerator.default.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.prev = 0;
                          _context2.next = 3;
                          return _this2.doValidate.apply(_this2, args);

                        case 3:
                          _context2.next = 7;
                          break;

                        case 5:
                          _context2.prev = 5;
                          _context2.t0 = _context2["catch"](0);

                        case 7:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this, [[0, 5]]);
                })));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onValidate() {
        return _onValidate.apply(this, arguments);
      }

      return onValidate;
    }()
  }]);

  function FormComponent(props) {
    var _this;

    _classCallCheck(this, FormComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormComponent).call(this, props));
    _this.normalizers = {};
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      var _loop = function _loop() {
        var field = _step3.value;
        var options = _this.constructor.fields[field].normalize;
        if (options) _this.normalizers[field] = function () {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return _normalize.default.apply(void 0, [_this.props, options].concat(args));
        };
      };

      for (var _iterator3 = _.keys(_this.constructor.fields)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        _loop();
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

    return _this;
  }

  _createClass(FormComponent, [{
    key: "validate",
    value: function () {
      var _validate = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4() {
        var errors;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.constructor.doValidate(this.props.fieldValues[this.props.form], this.props.dispatch, this.props, undefined, false);

              case 3:
                _context4.next = 8;
                break;

              case 5:
                _context4.prev = 5;
                _context4.t0 = _context4["catch"](0);
                errors = _context4.t0;

              case 8:
                _context4.next = 10;
                return this.props.updateValidation(errors);

              case 10:
                return _context4.abrupt("return", errors ? errors : true);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 5]]);
      }));

      function validate() {
        return _validate.apply(this, arguments);
      }

      return validate;
    }()
  }, {
    key: "submit",
    value: function () {
      var _submit = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5() {
        var valid;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.validate();

              case 3:
                valid = _context5.sent;

                if (!(valid !== true)) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", valid);

              case 6:
                _context5.next = 8;
                return this.props.handleSubmit();

              case 8:
                return _context5.abrupt("return", _context5.sent);

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](0);
                console.error(_context5.t0);

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 11]]);
      }));

      function submit() {
        return _submit.apply(this, arguments);
      }

      return submit;
    }() // eslint-disable-next-line

  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return FormComponent;
}(_react.default.Component);

_defineProperty(FormComponent, "formName", "baseForm");

_defineProperty(FormComponent, "fields", {
  /*
  fieldName: {
    normalize: 'rules', // happens on change
    transform: 'rules', // happens on blur
    validate: 'rules',  // happens on blur
    label: 'ID',        // translation ID
  },
   */
});

_defineProperty(FormComponent, "cachedErrors", {});

var _default = FormComponent;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var validator = __webpack_require__(81);
/**
 * Normalizer function for Redux Form
 * takes input like "command1:param1:param2|command2:param1:param2"
 */


module.exports = function normalize(props, options, value, prevValue, allValues
/* prevAllValues */
) {
  var rules = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _.split(options, "|")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var rule = _step.value;

      var params = _.split(_.trim(rule), ":");

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
    for (var _iterator2 = _.keys(rules)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _command = _step2.value;
      var i = void 0;
      var tmp = void 0;

      switch (_command) {
        case "trim":
          // trims the input, no params
          tmp = [];
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = _.split(_.replace(_.trim(result), /\r+/g, ""), "\n")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
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

          result = tmp.join("\r\n");
          break;

        case "compact":
          // with "spaces" param compacts spaces into single space preserving new lines
          if (_.includes(rules[_command], "spaces")) {
            tmp = [];
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = _.split(_.replace(result, /\r+/g, ""), "\n")[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
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

            result = tmp.join("\r\n");
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
              for (var _iterator5 = _.split(_.replace(result, /\r+/g, ""), "\n")[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
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

            result = tmp.join("\r\n");
          }

          break;

        case "rows":
          // first param is the number of rows in the result (defaults to 1)
          tmp = _.split(_.replace(result, /\r+/g, ""), "\n");
          result = "";

          for (i = 0; i < tmp.length; i++) {
            if (i > 0 && i < (rules[_command].length ? parseInt(rules[_command][0]) : 1)) result += "\r\n";
            result += tmp[i];
          }

          break;

        case "phone":
          // converts input to internations phone number format
          // props of the form should have getCallingCodes() selector function
          tmp = _.replace(result, /[^0-9]+/g, "");
          result = "";
          i = 0;
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = props.getCallingCodes(allValues.get("country"))[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var code = _step6.value;

              if (_.startsWith(tmp, code)) {
                result += code + (code.length < tmp.length ? " " : "");
                i = code.length;
                break;
              }
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(6));

var _propTypes = _interopRequireDefault(__webpack_require__(7));

var _shallowEqual = _interopRequireDefault(__webpack_require__(92));

var _reactIntl = __webpack_require__(8);

var _immutable = __webpack_require__(21);

var _styles = __webpack_require__(10);

var _List = _interopRequireDefault(__webpack_require__(93));

var _ListItem = _interopRequireDefault(__webpack_require__(94));

var _ListItemIcon = _interopRequireDefault(__webpack_require__(88));

var _ListItemText = _interopRequireDefault(__webpack_require__(89));

var _TextField = _interopRequireDefault(__webpack_require__(95));

var _Select = _interopRequireDefault(__webpack_require__(96));

var _FormControl = _interopRequireDefault(__webpack_require__(97));

var _FormControlLabel = _interopRequireDefault(__webpack_require__(98));

var _FormHelperText = _interopRequireDefault(__webpack_require__(99));

var _MenuItem = _interopRequireDefault(__webpack_require__(75));

var _Checkbox = _interopRequireDefault(__webpack_require__(90));

var _InputLabel = _interopRequireDefault(__webpack_require__(100));

var _FilledInput = _interopRequireDefault(__webpack_require__(101));

var _InfoOutlined = _interopRequireDefault(__webpack_require__(102));

var _normalize2 = _interopRequireDefault(__webpack_require__(80));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    formHelper: {
      margin: 0
    },
    errorList: {
      padding: 0
    },
    errorListItem: {
      paddingTop: "0.5rem",
      paddingLeft: "0.5rem",
      paddingRight: 0
    },
    label: {
      marginLeft: 0
    },
    error: {
      color: theme.palette.primary.contrastText
    }
  };
};

var FieldComponent =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(FieldComponent, _React$PureComponent);

  function FieldComponent(props) {
    var _this;

    _classCallCheck(this, FieldComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FieldComponent).call(this, props));
    _this.input = _react.default.createRef();
    _this.cachedValue = props.input.value;
    _this.cachedPosition = 0;

    switch (props.type) {
      case "checkbox":
        _this.handleChange = _this.handleCheckboxChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
        break;

      default:
        _this.handleChange = _this.handleDefaultChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    }

    _this.handleFocus = _this.handleDefaultFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleBlur = _this.handleDefaultBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(FieldComponent, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.input.value === prevProps.input.value) return;

      if (this.input.current) {
        // fix cursor position on changing the value to the normalized variant
        var str;
        var index;

        switch (this.props.type) {
          case "text":
          case "password":
            str = (this.cachedValue || "").substr(0, this.cachedPosition);
            index = (this.props.input.value || "").indexOf(str) + this.cachedPosition;
            if (index !== -1 && this.cachedPosition < (this.cachedValue || "").length) this.input.current.selectionStart = this.input.current.selectionEnd = index;
            break;
        }
      }

      this.cachedValue = this.props.input.value;
    }
  }, {
    key: "handleDefaultChange",
    value: function handleDefaultChange(evt) {
      this.cachedValue = evt.target.value;
      this.cachedPosition = evt.target.selectionEnd;
      return this.props.input.onChange(this.cachedValue);
    }
  }, {
    key: "handleCheckboxChange",
    value: function handleCheckboxChange(evt) {
      return this.props.input.onChange(evt.target.checked ? "on" : "off");
    }
  }, {
    key: "handleDefaultFocus",
    value: function handleDefaultFocus() {
      var _this$props$input;

      return (_this$props$input = this.props.input).onFocus.apply(_this$props$input, arguments);
    }
  }, {
    key: "handleDefaultBlur",
    value: function handleDefaultBlur() {
      return this.props.input.onBlur(this.cachedValue);
    }
  }, {
    key: "renderErrors",
    value: function renderErrors() {
      var _this2 = this;

      if (!this.props.meta.error) return null;
      return _react.default.createElement(_List.default, {
        classes: {
          root: this.props.classes.errorList
        }
      },
      /* eslint-disable-line */
      this.props.meta.error.map(function (error, index) {
        return _react.default.createElement(_ListItem.default, {
          key: "error-".concat(index),
          classes: {
            root: _this2.props.classes.errorListItem
          }
        }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_InfoOutlined.default, {
          className: _this2.props.classes.error
        })), _react.default.createElement(_ListItemText.default, {
          classes: {
            primary: _this2.props.classes.error
          },
          primary: _.isString(error) ? error : _this2.props.intl.formatMessage(error.toJS())
        }));
      }));
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this3 = this;

      var errors = this.renderErrors();
      return _react.default.createElement(_TextField.default, {
        className: this.props.className,
        autoComplete: "off",
        fullWidth: true,
        type: this.props.type,
        value: this.props.input.value.toString(),
        label: this.props.label && this.props.intl.formatMessage({
          id: this.props.label
        }),
        disabled: this.props.meta.submitting || this.props.disabled,
        error: !!this.props.meta.error,
        FormHelperTextProps: {
          component: errors ? "div" : undefined,
          classes: {
            root: this.props.classes.formHelper
          }
        },
        helperText: errors || undefined,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        inputRef: this.input,
        inputProps: {
          id: this.props.fieldId,
          onKeyDown: function onKeyDown(evt) {
            if (evt.keyCode === 13) {
              evt.preventDefault();
              evt.stopPropagation();
              if (_this3.props.onSubmit) _this3.props.onSubmit();
            }
          }
        }
      });
    }
  }, {
    key: "renderCheckbox",
    value: function renderCheckbox() {
      return _react.default.createElement(_FormControlLabel.default, {
        classes: {
          root: this.props.classes.label
        },
        control: _react.default.createElement(_Checkbox.default, {
          checked: this.props.input.value === "on",
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          value: "on",
          color: this.props.color
        }),
        label: this.props.intl.formatMessage({
          id: this.props.label
        })
      });
    }
  }, {
    key: "renderDropdown",
    value: function renderDropdown() {
      var _this4 = this;

      var errors = this.renderErrors();
      return _react.default.createElement(_FormControl.default, {
        className: this.props.className,
        variant: "filled",
        fullWidth: true,
        error: !!this.props.meta.error
      }, _react.default.createElement(_InputLabel.default, {
        htmlFor: this.props.fieldId
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: this.props.label
      })), _react.default.createElement(_Select.default, {
        value: this.props.input.value,
        disabled: this.props.meta.submitting || this.props.disabled,
        onChange: this.handleChange,
        input: _react.default.createElement(_FilledInput.default, {
          id: this.props.fieldId,
          inputProps: {
            onKeyDown: function onKeyDown(evt) {
              if (evt.keyCode === 13) {
                evt.preventDefault();
                evt.stopPropagation();
                if (_this4.props.onSubmit) _this4.props.onSubmit();
              }
            }
          }
        })
      }, _.map(this.props.options, function (item, index) {
        return _react.default.createElement(_MenuItem.default, {
          key: "item-".concat(index),
          value: item.value
        }, item.label);
      })), errors && _react.default.createElement(_FormHelperText.default, {
        component: "div",
        classes: {
          root: this.props.classes.formHelper
        }
      }, errors));
    }
  }, {
    key: "render",
    value: function render() {
      switch (this.props.type) {
        case "text":
        case "password":
          return this.renderInput();

        case "checkbox":
          return this.renderCheckbox();

        case "dropdown":
          return this.renderDropdown();
      }

      return null;
    }
  }]);

  return FieldComponent;
}(_react.default.PureComponent);

_defineProperty(FieldComponent, "defaultProps", {
  color: "primary"
});

var LocalizedField = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles, {
  withTheme: true
})(FieldComponent));

var FormField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormField, _React$Component);

  function FormField(props) {
    var _this5;

    _classCallCheck(this, FormField);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(FormField).call(this, props));
    _this5.normalize = _this5.normalize.bind(_assertThisInitialized(_assertThisInitialized(_this5)));
    return _this5;
  }

  _createClass(FormField, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _shallowEqual.default)(this.props.formFields, nextProps.formFields) || this.props.name !== nextProps.name || this.props.type !== nextProps.type || this.props.options !== nextProps.options || this.props.autoFocus !== nextProps.autoFocus || this.props.disabled !== nextProps.disabled;
    }
  }, {
    key: "normalize",
    value: function normalize(value) {
      if (!this.props.formFields[this.props.name]) return value;
      var options = this.props.formFields[this.props.name].normalize;
      if (!options) return value;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return _normalize2.default.apply(void 0, [this.props.formProps, options, value].concat(args));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          formFields = _this$props.formFields,
          formProps = _this$props.formProps,
          name = _this$props.name,
          type = _this$props.type,
          fieldProps = _objectWithoutProperties(_this$props, ["formFields", "formProps", "name", "type"]); // eslint-disable-line


      return _react.default.createElement(_immutable.Field, _extends({
        component: LocalizedField,
        fieldId: "input-".concat(name),
        name: name,
        type: type,
        normalize: this.normalize,
        label: formFields[name] && formFields[name].label
      }, fieldProps));
    }
  }]);

  return FormField;
}(_react.default.Component);

var _default = FormField;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var validator = __webpack_require__(81);
/**
 * Validation function for Redux Form
 * takes input like "command1:param1:param2|command2:param1:param2"
 */


module.exports = function validate(props, options, value, allValues) {
  var rules = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _.split(options, "|")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var rule = _step.value;

      var params = _.split(_.trim(rule), ":");

      var _command = params.shift();

      rules[_command] = params;
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

      if (allValues && rules.required.length && rules.required[0]) {
        var other = allValues.get(rules.required[0]);
        if (!other || !other.length) failed = false;
      }

      if (failed) errors.push({
        id: "ERROR_FIELD_REQUIRED"
      });
    }
  } else {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = commands[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var command = _step2.value;
        var success = void 0;
        var tmp = void 0;
        var normalized = void 0;

        switch (command) {
          case "phone":
            // validate phone number in international format
            if (!validator.isEmpty(value)) {
              normalized = _.replace(value, /[^0-9]+/g, "");

              if (normalized.length !== 12) {
                errors.push({
                  id: "ERROR_INVALID_PHONE"
                });
              } else {
                tmp = props.getCallingCodes(allValues.get("country"));
                success = !tmp.size;
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                  for (var _iterator3 = tmp[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var code = _step3.value;

                    if (_.startsWith(normalized, code)) {
                      success = true;
                      break;
                    }
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

                if (!success) errors.push({
                  id: "ERROR_INVALID_PHONE_COUNTRY"
                });
              }
            }

            break;

          case "email":
            // validate email
            if (!validator.isEmpty(value) && !validator.isEmail(value)) errors.push({
              id: "ERROR_INVALID_EMAIL"
            });
            break;

          case "password":
            // validate password, first param is password length (6 by default)
            if (value.length < (rules[command].length && rules[command][0]) || 6) errors.push({
              id: "ERROR_INVALID_PASSWORD"
            });
            break;

          case "credit_card":
            // validate credit card attribute set by first param ("number", "date" or "secret")
            normalized = _.replace(value, /[^0-9]+/g, "");

            switch (rules[command].length && rules[command][0]) {
              case "number":
                if (normalized.length !== 16 || !validator.isCreditCard(normalized)) errors.push({
                  id: "ERROR_INVALID_CREDIT_CARD_NUMBER"
                });
                break;

              case "date":
                if (normalized.length !== 4) {
                  errors.push({
                    id: "ERROR_INVALID_CREDIT_CARD_DATE"
                  });
                } else {
                  tmp = [parseInt(normalized.slice(0, 2)), parseInt(normalized.slice(2))];
                  if (tmp[0] < 1 || tmp[0] > 12 || tmp[1] < new Date().getFullYear() - 2000) errors.push({
                    id: "ERROR_INVALID_CREDIT_CARD_DATE"
                  });
                }

                break;

              case "secret":
                if (normalized.length !== 3) errors.push({
                  id: "ERROR_INVALID_CREDIT_CARD_SECRET"
                });
                break;
            }

            break;

          case "match":
            // this rule is triggered when field set by first param has other value than this one
            tmp = rules[command].length && rules[command][0];
            if (tmp && allValues && allValues.get(tmp) !== value) errors.push({
              id: "ERROR_MISMATCHED_VALUES"
            });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("react-redux/lib/utils/shallowEqual");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FilledInput");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InfoOutlined");

/***/ }),
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(170);


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _UsersPage = _interopRequireDefault(__webpack_require__(171));

var _users = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_UsersPage.default.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var store, req;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref.store, req = _ref.req;
            _context.next = 3;
            return store.dispatch(_users.usersOperations.load({
              req: req
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = _UsersPage.default;
exports.default = _default;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(19);

var _auth = __webpack_require__(9);

var _UsersPage = _interopRequireDefault(__webpack_require__(172));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: _auth.authSelectors.isAuthenticated(state)
  };
};

var UsersPage = (0, _reactRedux.connect)(mapStateToProps, null, null, {
  pure: false
})(_UsersPage.default);
var _default = UsersPage;
exports.default = _default;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(6));

var _propTypes = _interopRequireDefault(__webpack_require__(7));

var _styles = __webpack_require__(10);

var _Grid = _interopRequireDefault(__webpack_require__(32));

var _Users = _interopRequireDefault(__webpack_require__(173));

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
      padding: theme.main.spacing
    }, theme.breakpoints.down("md"), {
      padding: theme.main.spacing / 2,
      maxWidth: 1300 + theme.main.spacing
    })
  };
};

var UsersPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UsersPage, _React$Component);

  function UsersPage() {
    _classCallCheck(this, UsersPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(UsersPage).apply(this, arguments));
  }

  _createClass(UsersPage, [{
    key: "render",
    value: function render() {
      if (!this.props.isAuthenticated) return null;
      return _react.default.createElement("div", {
        className: this.props.classes.layout
      }, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: this.props.theme.main.spacing
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement(_Users.default, null))));
    }
  }]);

  return UsersPage;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(UsersPage);

exports.default = _default;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(19);

var _reactIntl = __webpack_require__(8);

var _users = __webpack_require__(24);

var _Users = _interopRequireDefault(__webpack_require__(174));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: _users.usersSelectors.getList(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLoad: function onLoad() {
      return dispatch(_users.usersOperations.load());
    },
    onCreate: function onCreate() {
      return dispatch(_users.usersOperations.showEditModal());
    },
    onEdit: function onEdit(userId) {
      return dispatch(_users.usersOperations.showEditModal({
        userId: userId
      }));
    },
    onDelete: function onDelete(userId) {
      return dispatch(_users.usersOperations.remove({
        id: userId
      }));
    }
  };
};

var Users = (0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Users.default));
var _default = Users;
exports.default = _default;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(6));

var _propTypes = _interopRequireDefault(__webpack_require__(7));

var _classnames = _interopRequireDefault(__webpack_require__(175));

var _immutable = __webpack_require__(2);

var _reactIntl = __webpack_require__(8);

var _styles = __webpack_require__(10);

var _Table = _interopRequireDefault(__webpack_require__(83));

var _TableBody = _interopRequireDefault(__webpack_require__(84));

var _TableCell = _interopRequireDefault(__webpack_require__(85));

var _TableHead = _interopRequireDefault(__webpack_require__(86));

var _TableRow = _interopRequireDefault(__webpack_require__(87));

var _Button = _interopRequireDefault(__webpack_require__(29));

var _KeyboardArrowDown = _interopRequireDefault(__webpack_require__(176));

var _Menu = _interopRequireDefault(__webpack_require__(177));

var _MenuItem = _interopRequireDefault(__webpack_require__(75));

var _Checkbox = _interopRequireDefault(__webpack_require__(90));

var _EditUserModal = _interopRequireDefault(__webpack_require__(178));

var _ConfirmModal = _interopRequireDefault(__webpack_require__(181));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var styles = function styles() {
  return {
    checkbox: {
      padding: "0.5rem"
    },
    button: {
      margin: "0.5rem"
    },
    collapsing: {
      width: 1
    }
  };
};

var Users =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Users, _React$Component);

  function Users(props) {
    var _this;

    _classCallCheck(this, Users);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Users).call(this, props));
    _this.state = {
      checkboxes: (0, _immutable.Map)({}),
      isConfirmOpen: false
    };
    _this.handleEditAction = _this.handleEditAction.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleDeleteAction = _this.handleDeleteAction.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleCancelDelete = _this.handleCancelDelete.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleConfirmDelete = _this.handleConfirmDelete.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleCreateAction = _this.handleCreateAction.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Users, [{
    key: "getNumSelected",
    value: function getNumSelected() {
      return this.state.checkboxes // eslint-disable-line lodash/prefer-lodash-method
      .toList().filter(function (item) {
        return item === true;
      }).size;
    }
  }, {
    key: "handleToggleAll",
    value: function handleToggleAll() {
      var forceOff = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (forceOff || this.state.checkboxes.size === this.getNumSelected()) {
        this.setState({
          checkboxes: this.state.checkboxes.map(_.constant(false)) // eslint-disable-line lodash/prefer-lodash-method

        });
      } else {
        this.setState({
          checkboxes: this.state.checkboxes.map(_.constant(true)) // eslint-disable-line lodash/prefer-lodash-method

        });
      }
    }
  }, {
    key: "handleToggle",
    value: function handleToggle(id, isChecked) {
      this.setState({
        checkboxes: this.state.checkboxes.set(id, isChecked)
      });
    }
  }, {
    key: "handleEditAction",
    value: function handleEditAction() {
      this.props.onEdit(this.state.checkboxes.findKey(function (item) {
        return !!item;
      }));
    }
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
      var _handleConfirmDelete = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _this2 = this;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  isConfirmOpen: false
                });
                _context.next = 3;
                return Promise.all(_.compact( // eslint-disable-next-line lodash/prefer-lodash-method
                this.state.checkboxes.map(function (item, id) {
                  return item && _this2.props.onDelete(id);
                })));

              case 3:
                this.props.onLoad();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleConfirmDelete() {
        return _handleConfirmDelete.apply(this, arguments);
      }

      return handleConfirmDelete;
    }()
  }, {
    key: "handleCreateAction",
    value: function handleCreateAction() {
      this.props.onCreate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", null, _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "secondary",
        classes: {
          root: this.props.classes.button
        },
        onClick: this.handleCreateAction
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "USERS_CREATE_BUTTON"
      }))), _react.default.createElement(_Table.default, {
        padding: "dense"
      }, _react.default.createElement(_TableHead.default, null, _react.default.createElement(_TableRow.default, null, _react.default.createElement(_TableCell.default, {
        padding: "none",
        classes: {
          root: this.props.classes.collapsing
        }
      }, _react.default.createElement(_Checkbox.default, {
        classes: {
          root: this.props.classes.checkbox
        },
        checked: !!this.state.checkboxes.size && this.state.checkboxes.size === this.getNumSelected(),
        indeterminate: !!this.getNumSelected() && this.state.checkboxes.size !== this.getNumSelected(),
        onChange: function onChange() {
          return _this3.handleToggleAll();
        },
        value: "on"
      })), _react.default.createElement(_TableCell.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "USERS_LOGIN_COLUMN"
      })), _react.default.createElement(_TableCell.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "USERS_ROLES_COLUMN"
      })))), _react.default.createElement(_TableBody.default, null, this.props.users.map(function (row, index) {
        return _react.default.createElement(_TableRow.default, {
          key: "row-".concat(index)
        }, _react.default.createElement(_TableCell.default, {
          padding: "none",
          className: (0, _classnames.default)(index % 2 ? "even" : "odd", _this3.state.checkboxes.get(row.get("id")) && "selected"),
          classes: {
            root: _this3.props.classes.collapsing
          }
        }, _react.default.createElement(_Checkbox.default, {
          classes: {
            root: _this3.props.classes.checkbox
          },
          checked: !!_this3.state.checkboxes.get(row.get("id")),
          onChange: function onChange(event) {
            return _this3.handleToggle(row.get("id"), event.target.checked);
          },
          value: "on"
        })), _react.default.createElement(_TableCell.default, {
          className: (0, _classnames.default)(index % 2 ? "even" : "odd", _this3.state.checkboxes.get(row.get("id")) && "selected"),
          component: "th",
          scope: "row"
        }, row.get("login")), _react.default.createElement(_TableCell.default, {
          className: (0, _classnames.default)(index % 2 ? "even" : "odd", _this3.state.checkboxes.get(row.get("id")) && "selected")
        }, row.get("roles").toJS().map(function (item) {
          return _this3.props.intl.formatMessage({
            id: "EDIT_USER_".concat(item, "_LABEL")
          });
        }).join(", ")));
      }))), _react.default.createElement("div", null, _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        disabled: !this.getNumSelected(),
        classes: {
          root: this.props.classes.button
        },
        onClick: this.handleEditAction
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "USERS_EDIT_BUTTON"
      })), _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        disabled: !this.getNumSelected(),
        classes: {
          root: this.props.classes.button
        },
        onClick: this.handleDeleteAction
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "USERS_DELETE_BUTTON"
      }))), _react.default.createElement(_EditUserModal.default, null), _react.default.createElement(_ConfirmModal.default, {
        isOpen: this.state.isConfirmOpen,
        title: "DELETE_USER_TITLE",
        text: "DELETE_USER_TEXT",
        cancel: "DELETE_USER_CANCEL",
        submit: "DELETE_USER_SUBMIT",
        onCancel: this.handleCancelDelete,
        onSubmit: this.handleConfirmDelete
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.hash === nextProps.users.hashCode()) return null;
      var checkboxes = (0, _immutable.Map)({});
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = nextProps.users.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          checkboxes = checkboxes.set(item.get("id"), prevState.checkboxes.has(item.get("id")) ? prevState.checkboxes.get(item.get("id")) : false);
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

      return {
        hash: nextProps.users.hashCode(),
        checkboxes: checkboxes
      };
    }
  }]);

  return Users;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(Users);

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowDown");

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _immutable = __webpack_require__(2);

var _reactIntl = __webpack_require__(8);

var _immutable2 = __webpack_require__(21);

var _reduxForm = __webpack_require__(76);

var _users = __webpack_require__(24);

var _createForm = _interopRequireDefault(__webpack_require__(77));

var _EditUserModal = _interopRequireDefault(__webpack_require__(179));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var formName = _EditUserModal.default.formName;

var mapStateToProps = function mapStateToProps(state) {
  return {
    fieldValues: _defineProperty({}, formName, (0, _immutable2.getFormValues)(formName)(state) || (0, _immutable.Map)()),
    fieldErrors: _defineProperty({}, formName, (0, _immutable2.getFormAsyncErrors)(formName)(state) || (0, _immutable.Map)()),
    data: _users.usersSelectors.getEditModalData(state),
    isOpen: _users.usersSelectors.isEditModalOpen(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
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
                return dispatch((0, _reduxForm.startAsyncValidation)(formName));

              case 2:
                _context.next = 4;
                return dispatch((0, _reduxForm.stopAsyncValidation)(formName, errors));

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
    }(),
    onCancel: function onCancel() {
      return dispatch(_users.usersOperations.hideEditModal());
    },
    onLoad: function onLoad() {
      return dispatch(_users.usersOperations.load());
    },
    onCreate: function onCreate(login, password, isAdmin) {
      return dispatch(_users.usersOperations.create({
        login: login,
        password: password,
        isAdmin: isAdmin
      }));
    },
    onEdit: function onEdit(id, login, password, isAdmin) {
      return dispatch(_users.usersOperations.edit({
        id: id,
        login: login,
        password: password,
        isAdmin: isAdmin
      }));
    }
  };
};

var EditUserModal = (0, _reactIntl.injectIntl)((0, _createForm.default)(_EditUserModal.default, mapStateToProps, mapDispatchToProps));
var _default = EditUserModal;
exports.default = _default;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(6));

var _propTypes = _interopRequireDefault(__webpack_require__(7));

var _immutable = __webpack_require__(2);

var _reactIntl = __webpack_require__(8);

var _immutable2 = __webpack_require__(21);

var _styles = __webpack_require__(10);

var _Dialog = _interopRequireDefault(__webpack_require__(71));

var _DialogActions = _interopRequireDefault(__webpack_require__(72));

var _DialogContent = _interopRequireDefault(__webpack_require__(73));

var _DialogContentText = _interopRequireDefault(__webpack_require__(78));

var _DialogTitle = _interopRequireDefault(__webpack_require__(74));

var _Grid = _interopRequireDefault(__webpack_require__(32));

var _Button = _interopRequireDefault(__webpack_require__(29));

var _red = _interopRequireDefault(__webpack_require__(180));

var _Form2 = _interopRequireDefault(__webpack_require__(79));

var _Field = _interopRequireDefault(__webpack_require__(82));

var _constants = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var EditUserModal =
/*#__PURE__*/
function (_Form) {
  _inherits(EditUserModal, _Form);

  _createClass(EditUserModal, null, [{
    key: "onSubmit",
    value: function () {
      var _onSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(values, dispatch, props) {
        var result, errors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, field, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, message;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!props.data) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return props.onEdit(props.data.get("id"), this.getValue(props, "login"), this.getValue(props, "password"), this.getValue(props, "isAdmin") === "on");

              case 3:
                result = _context.sent;
                _context.next = 9;
                break;

              case 6:
                _context.next = 8;
                return props.onCreate(this.getValue(props, "login"), this.getValue(props, "password"), this.getValue(props, "isAdmin") === "on");

              case 8:
                result = _context.sent;

              case 9:
                if (!(result && _.isObject(result))) {
                  _context.next = 58;
                  break;
                }

                errors = {};
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 14;
                _iterator = _.keys(result)[Symbol.iterator]();

              case 16:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 41;
                  break;
                }

                field = _step.value;
                errors[field] = [];
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context.prev = 22;

                for (_iterator2 = result[field][Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  message = _step2.value;
                  errors[field].push({
                    id: message
                  });
                }

                _context.next = 30;
                break;

              case 26:
                _context.prev = 26;
                _context.t0 = _context["catch"](22);
                _didIteratorError2 = true;
                _iteratorError2 = _context.t0;

              case 30:
                _context.prev = 30;
                _context.prev = 31;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 33:
                _context.prev = 33;

                if (!_didIteratorError2) {
                  _context.next = 36;
                  break;
                }

                throw _iteratorError2;

              case 36:
                return _context.finish(33);

              case 37:
                return _context.finish(30);

              case 38:
                _iteratorNormalCompletion = true;
                _context.next = 16;
                break;

              case 41:
                _context.next = 47;
                break;

              case 43:
                _context.prev = 43;
                _context.t1 = _context["catch"](14);
                _didIteratorError = true;
                _iteratorError = _context.t1;

              case 47:
                _context.prev = 47;
                _context.prev = 48;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 50:
                _context.prev = 50;

                if (!_didIteratorError) {
                  _context.next = 53;
                  break;
                }

                throw _iteratorError;

              case 53:
                return _context.finish(50);

              case 54:
                return _context.finish(47);

              case 55:
                throw new _immutable2.SubmissionError(errors);

              case 58:
                _context.next = 60;
                return props.onLoad();

              case 60:
                return _context.abrupt("return", result);

              case 61:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[14, 43, 47, 55], [22, 26, 30, 38], [31,, 33, 37], [48,, 50, 54]]);
      }));

      function onSubmit(_x, _x2, _x3) {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var state = {};
      /* eslint-disable lodash/prefer-lodash-method */

      if (prevState.isOpen !== nextProps.isOpen) {
        var login = nextProps.data && nextProps.data.get("login");
        var isAdmin = nextProps.data && nextProps.data.get("roles").includes(_constants.default.roles.ADMIN);
        nextProps.dispatch(nextProps.change("login", login || ""));
        nextProps.dispatch(nextProps.change("password", ""));
        nextProps.dispatch(nextProps.change("isAdmin", isAdmin ? "on" : "off"));
        nextProps.dispatch(nextProps.clearAsyncError("_"));
        state.isOpen = nextProps.isOpen;
        state.errors = null;
      }
      /* eslint-enable */


      if (nextProps.error && nextProps.error.has("_")) state.errors = nextProps.error.get("_");else if (!nextProps.error || !nextProps.error.has("_")) state.errors = null;
      return _.keys(state).length ? state : null;
    }
  }]);

  function EditUserModal(props) {
    var _this;

    _classCallCheck(this, EditUserModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditUserModal).call(this, props));
    _this.state = {
      isOpen: props.isOpen,
      errors: null
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(EditUserModal, [{
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  errors: null
                });
                _context2.next = 3;
                return _get(_getPrototypeOf(EditUserModal.prototype), "submit", this).call(this);

              case 3:
                _context2.t0 = !_context2.sent;

                if (!_context2.t0) {
                  _context2.next = 6;
                  break;
                }

                _context2.t0 = !this.state.errors;

              case 6:
                if (!_context2.t0) {
                  _context2.next = 8;
                  break;
                }

                this.setState({
                  errors: ["EDIT_USER_FAILED"]
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleSubmit() {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_Dialog.default, {
        maxWidth: "xs",
        fullWidth: true,
        open: this.props.isOpen,
        onClose: this.props.onCancel
      }, _react.default.createElement(_DialogTitle.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: this.props.data ? "EDIT_USER_TITLE_EDIT" : "EDIT_USER_TITLE_CREATE"
      })), this.state.errors && _react.default.createElement(_DialogContent.default, null, _.map(this.state.errors, function (error, index) {
        return _react.default.createElement(_DialogContentText.default, {
          key: "error-".concat(index),
          classes: {
            root: _this2.props.classes.error
          }
        }, _react.default.createElement(_reactIntl.FormattedMessage, {
          id: error
        }));
      })), _react.default.createElement(_DialogContent.default, null, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 16,
        component: "form",
        noValidate: true,
        autoComplete: "off",
        onSubmit: this.handleSubmit
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement(_Field.default, {
        formFields: this.constructor.fields,
        formProps: this.props,
        name: "login",
        type: "text",
        onSubmit: this.handleSubmit
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement(_Field.default, {
        formFields: this.constructor.fields,
        formProps: this.props,
        name: "password",
        type: "password",
        onSubmit: this.handleSubmit
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement(_Field.default, {
        formFields: this.constructor.fields,
        formProps: this.props,
        name: "isAdmin",
        type: "checkbox",
        onSubmit: this.handleSubmit
      })))), _react.default.createElement(_DialogActions.default, {
        classes: {
          root: this.props.classes.actions
        }
      }, _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        disabled: this.props.submitting,
        onClick: this.props.onCancel
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EDIT_USER_CANCEL"
      })), _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "secondary",
        disabled: this.props.submitting,
        onClick: this.handleSubmit
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EDIT_USER_SUBMIT"
      }))));
    }
  }]);

  return EditUserModal;
}(_Form2.default);

_defineProperty(EditUserModal, "propTypes", _objectSpread({}, _Form2.default.propTypes, {
  intl: _reactIntl.intlShape,
  theme: _propTypes.default.object.isRequired,
  classes: _propTypes.default.object.isRequired,
  isOpen: _propTypes.default.bool.isRequired,
  data: _propTypes.default.instanceOf(_immutable.Map),
  onCancel: _propTypes.default.func.isRequired,
  onLoad: _propTypes.default.func.isRequired,
  onCreate: _propTypes.default.func.isRequired,
  onEdit: _propTypes.default.func.isRequired
}));

_defineProperty(EditUserModal, "formName", "editUserForm");

_defineProperty(EditUserModal, "fields", {
  login: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    label: "EDIT_USER_LOGIN_LABEL"
  },
  password: {
    label: "EDIT_USER_PASSWORD_LABEL"
  },
  isAdmin: {
    label: "EDIT_USER_ADMIN_LABEL"
  }
});

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(EditUserModal);

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(6));

var _propTypes = _interopRequireDefault(__webpack_require__(7));

var _reactIntl = __webpack_require__(8);

var _styles = __webpack_require__(10);

var _Dialog = _interopRequireDefault(__webpack_require__(71));

var _DialogActions = _interopRequireDefault(__webpack_require__(72));

var _DialogContent = _interopRequireDefault(__webpack_require__(73));

var _DialogContentText = _interopRequireDefault(__webpack_require__(78));

var _DialogTitle = _interopRequireDefault(__webpack_require__(74));

var _Button = _interopRequireDefault(__webpack_require__(29));

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

var styles = function styles() {
  return {
    actions: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "1rem"
    }
  };
};

var ConfirmModal =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ConfirmModal, _React$PureComponent);

  function ConfirmModal() {
    _classCallCheck(this, ConfirmModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConfirmModal).apply(this, arguments));
  }

  _createClass(ConfirmModal, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Dialog.default, {
        maxWidth: "xs",
        fullWidth: true,
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

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(ConfirmModal);

exports.default = _default;

/***/ })
/******/ ]);