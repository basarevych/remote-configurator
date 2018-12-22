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
/******/ 	return __webpack_require__(__webpack_require__.s = 167);
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
    "/terminal": {
      page: "/terminal",
      icon: "terminal"
    },
    "/browser": {
      page: "/browser",
      icon: "browser"
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appSelectors = exports.appOperations = exports.appTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(29));

var appTypes = _interopRequireWildcard(__webpack_require__(13));

exports.appTypes = appTypes;

var appOperations = _interopRequireWildcard(__webpack_require__(32));

exports.appOperations = appOperations;

var appSelectors = _interopRequireWildcard(__webpack_require__(57));

exports.appSelectors = appSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
exports.devicesSelectors = exports.devicesOperations = exports.devicesTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(43));

var devicesTypes = _interopRequireWildcard(__webpack_require__(15));

exports.devicesTypes = devicesTypes;

var devicesOperations = _interopRequireWildcard(__webpack_require__(44));

exports.devicesOperations = devicesOperations;

var devicesSelectors = _interopRequireWildcard(__webpack_require__(24));

exports.devicesSelectors = devicesSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authSelectors = exports.authOperations = exports.authTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(37));

var authTypes = _interopRequireWildcard(__webpack_require__(14));

exports.authTypes = authTypes;

var authOperations = _interopRequireWildcard(__webpack_require__(38));

exports.authOperations = authOperations;

var authSelectors = _interopRequireWildcard(__webpack_require__(22));

exports.authSelectors = authSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_CREDENTIALS_MODAL = exports.SHOW_CREDENTIALS_MODAL = exports.HIDE_EDIT_MODAL = exports.SHOW_EDIT_MODAL = exports.REMOVE = exports.SET = exports.CLEAR = exports.DESELECT_ALL = exports.SELECT_ALL = exports.SET_SELECTED = exports.SET_LIST = void 0;
var SET_LIST = "app/devices/SET_LIST";
exports.SET_LIST = SET_LIST;
var SET_SELECTED = "app/devices/SET_SELECTED";
exports.SET_SELECTED = SET_SELECTED;
var SELECT_ALL = "app/devices/SELECT_ALL";
exports.SELECT_ALL = SELECT_ALL;
var DESELECT_ALL = "app/devices/DESELECT_ALL";
exports.DESELECT_ALL = DESELECT_ALL;
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
var SHOW_CREDENTIALS_MODAL = "app/devices/SHOW_CREDENTIALS_MODAL";
exports.SHOW_CREDENTIALS_MODAL = SHOW_CREDENTIALS_MODAL;
var HIDE_CREDENTIALS_MODAL = "app/devices/HIDE_CREDENTIALS_MODAL";
exports.HIDE_CREDENTIALS_MODAL = HIDE_CREDENTIALS_MODAL;

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
/* 18 */,
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
exports.terminalsSelectors = exports.terminalsOperations = exports.terminalsTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(46));

var terminalsTypes = _interopRequireWildcard(__webpack_require__(16));

exports.terminalsTypes = terminalsTypes;

var terminalsOperations = _interopRequireWildcard(__webpack_require__(47));

exports.terminalsOperations = terminalsOperations;

var terminalsSelectors = _interopRequireWildcard(__webpack_require__(54));

exports.terminalsSelectors = terminalsSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.historiesSelectors = exports.historiesOperations = exports.historiesTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(49));

var historiesTypes = _interopRequireWildcard(__webpack_require__(17));

exports.historiesTypes = historiesTypes;

var historiesOperations = _interopRequireWildcard(__webpack_require__(51));

exports.historiesOperations = historiesOperations;

var historiesSelectors = _interopRequireWildcard(__webpack_require__(53));

exports.historiesSelectors = historiesSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

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
exports.getInteractiveModalData = exports.isInteractiveModalOpen = exports.getInteractiveModalDeviceId = exports.getCredentialsModalData = exports.getCredentialsModalDeviceId = exports.isCredentialsModalOpen = exports.getEditModalData = exports.isEditModalOpen = exports.isAllDeselected = exports.isAllSelected = exports.getNumSelected = exports.getSelected = exports.getAddress = exports.getName = exports.getOnline = exports.getList = void 0;

var _reselect = __webpack_require__(23);

var _immutable = __webpack_require__(2);

var getList = function getList(state) {
  return state.getIn(["devices", "list"]);
};

exports.getList = getList;
var getOnline = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["devices", "online"]);
}, function (state) {
  return state.getIn(["terminals", "online"]);
}, function (devices, terminals) {
  return devices // eslint-disable-line lodash/prefer-lodash-method
  .map(function (deviceInfo, deviceId) {
    return deviceInfo.set("terminals", terminals // eslint-disable-line lodash/prefer-lodash-method
    .map(function (terminalInfo, terminalId) {
      return {
        id: terminalId,
        valid: terminalInfo.get("deviceId") === deviceId
      };
    }).toList().filter(function (item) {
      return !!item.valid;
    }).map(function (item) {
      return item.id;
    }));
  });
});
exports.getOnline = getOnline;

var getName = function getName(state, props) {
  // eslint-disable-next-line lodash/prefer-lodash-method
  var device = state.getIn(["devices", "list"]).find(function (item) {
    return item.get("id") === props.deviceId;
  });
  return device ? device.get("name") : "";
};

exports.getName = getName;

var getAddress = function getAddress(state, props) {
  return state.getIn(["devices", "online", props.deviceId, "address"]) || "";
};

exports.getAddress = getAddress;

var getSelected = function getSelected(state) {
  return (// eslint-disable-next-line lodash/prefer-lodash-method
    state.getIn(["devices", "list"]).filter(function (item) {
      return !!item.get("isSelected");
    })
  );
};

exports.getSelected = getSelected;

var getNumSelected = function getNumSelected(state) {
  return getSelected(state).size;
};

exports.getNumSelected = getNumSelected;

var isAllSelected = function isAllSelected(state) {
  return getList(state).size === getSelected(state).size;
};

exports.isAllSelected = isAllSelected;

var isAllDeselected = function isAllDeselected(state) {
  return getSelected(state).size === 0;
};

exports.isAllDeselected = isAllDeselected;

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

var isCredentialsModalOpen = function isCredentialsModalOpen(state) {
  return state.getIn(["devices", "isCredentialsModalOpen"]);
};

exports.isCredentialsModalOpen = isCredentialsModalOpen;

var getCredentialsModalDeviceId = function getCredentialsModalDeviceId(state) {
  return state.getIn(["devices", "credentialsModalDeviceId"]);
};

exports.getCredentialsModalDeviceId = getCredentialsModalDeviceId;

var getCredentialsModalData = function getCredentialsModalData(state) {
  var id = state.getIn(["devices", "credentialsModalDeviceId"]);
  if (!id) return (0, _immutable.Map)();
  return (// eslint-disable-next-line
    state.getIn(["devices", "online"]).find(function (item) {
      return item.get("deviceId") === id;
    }) || (0, _immutable.Map)()
  );
};

exports.getCredentialsModalData = getCredentialsModalData;

var getInteractiveModalDeviceId = function getInteractiveModalDeviceId(state) {
  return state.getIn(["devices", "online"]).findKey(function (device) {
    return !!device.getIn(["auth", "prompts"]);
  }) || null;
};

exports.getInteractiveModalDeviceId = getInteractiveModalDeviceId;

var isInteractiveModalOpen = function isInteractiveModalOpen(state) {
  return !!getInteractiveModalDeviceId(state);
};

exports.isInteractiveModalOpen = isInteractiveModalOpen;

var getInteractiveModalData = function getInteractiveModalData(state) {
  var id = getInteractiveModalDeviceId(state);
  return id && state.getIn(["devices", "online", id, "auth"]) || (0, _immutable.Map)();
};

exports.getInteractiveModalData = getInteractiveModalData;

/***/ }),
/* 25 */
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
/* 26 */
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
    en: parse(__webpack_require__(30))
  },
  getLocaleData: function getLocaleData() {
    return [__webpack_require__(31)];
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var moment = __webpack_require__(36); // Add locales:
//require("moment/locale/ru.js"); // en is already there


module.exports = moment;

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxImmutable = __webpack_require__(5);

var types = _interopRequireWildcard(__webpack_require__(13));

var _locales = _interopRequireDefault(__webpack_require__(26));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  created: Number, // timestamp
  appOrigin: String,
  sshHost: String,
  sshPort: Number,
  selfRegistration: Boolean,
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

var appOriginReducer = function appOriginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "localhost";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.appOrigin)) return action.appOrigin;
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
  appOrigin: appOriginReducer,
  sshHost: sshHostReducer,
  sshPort: sshPortReducer,
  selfRegistration: selfRegistrationReducer,
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
/* 30 */
/***/ (function(module) {

module.exports = {"MENU_DEVICES":"Device List","TITLE_DEVICES":"Remote Configurator","MENU_DEVICE":"Device","TITLE_DEVICE":"Device","MENU_USERS":"Users","TITLE_USERS":"Users","SIDEBAR_SIGN_OUT_LINK":"Sign Out","DEVICES_PAGE_WORKFLOW_TITLE":"Workflow","DEVICES_PAGE_WORKFLOW_HTML":["<ul>","<li>Create a device with a name and a password. You will be provided then with a shell command you need"," to copy-paste to the terminal of your device. Enter the same password you used to create the device and"," it will appear in the list below after connecting to this server</li>","<li>Press \"SIGN IN\" button to sign in into your device. You don't need to use root's credentials if you are"," not going to perform superuser-only operations","<li>When signed in you can then open an in-browser terminal session to this device under the credentials you used"," or create a private HTTP proxy for any port on your device</li>","</ul>"],"DEVICES_PAGE_SECURITY_TITLE":"Security Considerations","DEVICES_PAGE_SECURITY_HTML":["<p>Credentials you use to sign in into your device are readable to this server. Although these credentials are never"," stored to the disk and only live in the server's memory while the session exists, a compromised server might have a"," different idea what to do with your information.</p>","<p>A good idea would be to set up your own server (preferably after inspecting the source code) so you provide the"," credentials only to the server you trust</p>"],"DEVICES_NAME_COLUMN":"Name","DEVICES_ADDRESS_COLUMN":"Address","DEVICES_CREATE_BUTTON":"Create Device","DEVICES_EDIT_BUTTON":"Edit Device","DEVICES_DELETE_BUTTON":"Delete Devices","DEVICES_CONNECT_BUTTON":"Sign In","DEVICES_OFFLINE_LABEL":"Offline","DEVICES_OPEN_TERMINAL_TIP":"Open terminal","DEVICES_OPEN_BROWSER_TIP":"Open browser","DEVICES_DISCONNECT_TIP":"Disconnect","EDIT_DEVICE_TITLE_CREATE":"Create Device","EDIT_DEVICE_TITLE_EDIT":"Edit Device","EDIT_DEVICE_NAME_LABEL":"Name","EDIT_DEVICE_PASSWORD_LABEL":"Password","EDIT_DEVICE_FAILED":"Form submission failed","EDIT_DEVICE_SUBMIT":"Submit","EDIT_DEVICE_CANCEL":"Cancel","DELETE_DEVICE_TITLE":"Delete Devices","DELETE_DEVICE_TEXT":"Delete selected devices?","DELETE_DEVICE_CANCEL":"Cancel","DELETE_DEVICE_SUBMIT":"Delete","PROXY_TPL_TITLE":"<h1>Proxy Reporting</h1>","PROXY_TPL_MESSAGE":"<h3>Could not fetch the page</h3>","PROXY_TPL_403":"<p>Access denied</p>","PROXY_TPL_404":"<p>Try to reopen this page from the Device List</p>","PROXY_TPL_502":"<p>Looks like nobody is listening on this port</p>","PROXY_MODAL_TITLE":"HTTP Proxy","PROXY_HOST_LABEL":"Which host to connect to?","PROXY_PORT_LABEL":"Which port to proxy?","PROXY_AUTH_LABEL":"Remote service needs HTTP BASIC AUTH","PROXY_LOGIN_LABEL":"Login","PROXY_PASSWORD_LABEL":"Password","PROXY_MODAL_CANCEL":"Cancel","PROXY_MODAL_SUBMIT":"Submit","USERS_LOGIN_COLUMN":"Login","USERS_ROLES_COLUMN":"Roles","USERS_CREATE_BUTTON":"Create User","USERS_EDIT_BUTTON":"Edit User","USERS_DELETE_BUTTON":"Delete Users","EDIT_USER_TITLE_CREATE":"Create User","EDIT_USER_TITLE_EDIT":"Edit User","EDIT_USER_LOGIN_LABEL":"Login","EDIT_USER_PASSWORD_LABEL":"Password","EDIT_USER_ADMIN_LABEL":"Administrator","EDIT_USER_CANCEL":"Cancel","EDIT_USER_SUBMIT":"Submit","EDIT_USER_FAILED":"An error occured","DELETE_USER_TITLE":"Delete Users","DELETE_USER_TEXT":"Delete selected users?","DELETE_USER_CANCEL":"Cancel","DELETE_USER_SUBMIT":"Delete","TERMINAL_CONNECTING_LABEL":"Connecting...","TERMINAL_NOT_CONNECTED_LABEL":"Not connected","APP_AUTH_TITLE":"Authentication","APP_AUTH_SELF_REGISTRATION_TITLE":"Self-registration enabled","APP_AUTH_SELF_REGISTRATION_MESSAGE":"If you are a new user, you can invent any unused login and the password to sign in","APP_AUTH_LOGIN_LABEL":"Login","APP_AUTH_PASSWORD_LABEL":"Password","APP_AUTH_SUBMIT":"Sign In","APP_AUTH_FAILED":"Invalid credentials","SETUP_AUTH_TITLE":"Authentication","SETUP_AUTH_LOGIN_LABEL":"Login","SETUP_AUTH_PASSWORD_LABEL":"Password","SETUP_AUTH_CANCEL":"Cancel","SETUP_AUTH_SUBMIT":"Submit","KEYBOARD_AUTH_TITLE":"Authentication","KEYBOARD_AUTH_REPLY_LABEL":"Response","KEYBOARD_AUTH_CANCEL":"Cancel","KEYBOARD_AUTH_SUBMIT":"Submit","ERROR_FIELD_REQUIRED":"This field is required","ERROR_INVALID_PASSWORD":"Password length must be at least 6 characters"};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en.js");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.init = exports.create = exports.gqlQuery = exports.stop = exports.setLocale = exports.setConnected = exports.setStatusCode = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _isomorphicUnfetch = _interopRequireDefault(__webpack_require__(33));

var _injectt = _interopRequireDefault(__webpack_require__(34));

var actions = _interopRequireWildcard(__webpack_require__(35));

var _auth = __webpack_require__(12);

var _constants = _interopRequireDefault(__webpack_require__(3));

var _Storage = _interopRequireDefault(__webpack_require__(40));

var _Socket = _interopRequireDefault(__webpack_require__(41));

var _Cookie = _interopRequireDefault(__webpack_require__(56));

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
  var status = _ref3.status,
      appOrigin = _ref3.appOrigin,
      sshHost = _ref3.sshHost,
      sshPort = _ref3.sshPort,
      selfRegistration = _ref3.selfRegistration;
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
                return dispatch(actions.create({
                  appOrigin: appOrigin,
                  sshHost: sshHost,
                  sshPort: sshPort,
                  selfRegistration: selfRegistration
                }));

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
/* 33 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("injectt");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocale = exports.setConnected = exports.setStatusCode = exports.stop = exports.start = exports.init = exports.create = void 0;

var _moment = _interopRequireDefault(__webpack_require__(27));

var types = _interopRequireWildcard(__webpack_require__(13));

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
/* 36 */
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(2);

var _reduxImmutable = __webpack_require__(5);

var types = _interopRequireWildcard(__webpack_require__(14));

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfile = exports.signOut = exports.signIn = exports.setStatus = exports.setCsrf = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _router = _interopRequireDefault(__webpack_require__(9));

var _isRouteAllowed = _interopRequireDefault(__webpack_require__(25));

var actions = _interopRequireWildcard(__webpack_require__(39));

var selectors = _interopRequireWildcard(__webpack_require__(22));

var _app = __webpack_require__(4);

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
        var result, response, errors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, error;

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
                  _context3.next = 14;
                  break;
                }

                _context3.next = 8;
                return dispatch(setStatus());

              case 8:
                if (true) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 11;
                return window.__NEXT_PAGE_INIT({
                  store: window.__NEXT_REDUX_STORE__
                });

              case 11:
                return _context3.abrupt("return", true);

              case 14:
                result = {};
                errors = response && _.get(response, "errors", []);
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context3.prev = 19;

                for (_iterator = errors[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  error = _step.value;
                  if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result._error = (result._error || []).concat([error.message]);
                }

                _context3.next = 27;
                break;

              case 23:
                _context3.prev = 23;
                _context3.t0 = _context3["catch"](19);
                _didIteratorError = true;
                _iteratorError = _context3.t0;

              case 27:
                _context3.prev = 27;
                _context3.prev = 28;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 30:
                _context3.prev = 30;

                if (!_didIteratorError) {
                  _context3.next = 33;
                  break;
                }

                throw _iteratorError;

              case 33:
                return _context3.finish(30);

              case 34:
                return _context3.finish(27);

              case 35:
                if (!_.keys(result).length) result = {
                  _error: "APP_AUTH_FAILED"
                };

              case 36:
                _context3.next = 41;
                break;

              case 38:
                _context3.prev = 38;
                _context3.t1 = _context3["catch"](1);
                console.error(_context3.t1);

              case 41:
                return _context3.abrupt("return", result);

              case 42:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 38], [19, 23, 27, 35], [28,, 30, 34]]);
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
        var result, response, errors, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, error;

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

                if (!(response && _.get(response, "data.updateProfile.success", false))) {
                  _context5.next = 9;
                  break;
                }

                result = true;
                _context5.next = 31;
                break;

              case 9:
                result = {};
                errors = response && _.get(response, "errors", []);
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context5.prev = 14;

                for (_iterator2 = errors[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  error = _step2.value;
                  if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result._error = (result._error || []).concat([error.message]);
                }

                _context5.next = 22;
                break;

              case 18:
                _context5.prev = 18;
                _context5.t0 = _context5["catch"](14);
                _didIteratorError2 = true;
                _iteratorError2 = _context5.t0;

              case 22:
                _context5.prev = 22;
                _context5.prev = 23;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 25:
                _context5.prev = 25;

                if (!_didIteratorError2) {
                  _context5.next = 28;
                  break;
                }

                throw _iteratorError2;

              case 28:
                return _context5.finish(25);

              case 29:
                return _context5.finish(22);

              case 30:
                if (!_.keys(result).length) result = {
                  _error: "PROFILE_UPDATE_FAILED"
                };

              case 31:
                _context5.next = 36;
                break;

              case 33:
                _context5.prev = 33;
                _context5.t1 = _context5["catch"](1);
                console.error(_context5.t1);

              case 36:
                return _context5.abrupt("return", result);

              case 37:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 33], [14, 18, 22, 30], [23,, 25, 29]]);
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStatus = exports.setCsrf = void 0;

var types = _interopRequireWildcard(__webpack_require__(14));

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
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _router = _interopRequireDefault(__webpack_require__(9));

var _socket = _interopRequireDefault(__webpack_require__(42));

var _app = __webpack_require__(4);

var _auth = __webpack_require__(12);

var _devices = __webpack_require__(11);

var _terminals = __webpack_require__(20);

var _histories = __webpack_require__(21);

var _constants = _interopRequireDefault(__webpack_require__(3));

var _package = _interopRequireDefault(__webpack_require__(55));

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

                if (_router.default.pathname === "/terminal" && _.get(_router.default, "query.terminalId") === msg.terminalId) {
                  _router.default.push("/");
                }

                _context6.next = 5;
                return this.dispatch(_terminals.terminalsOperations.remove(msg));

              case 5:
                _context6.next = 10;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                console.error(_context6.t0);

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 7]]);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxImmutable = __webpack_require__(5);

var _immutable = __webpack_require__(2);

var types = _interopRequireWildcard(__webpack_require__(15));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  list: List([
    Map({
      id: String,
      isSelected: Boolean,
      name: String,
    })
  ]),
  online: Map({
    deviceId: Map({
      status: String, // or null
      address: String,
      isLoggingIn: Boolean,
      isLoggedIn: Boolean,
      auth: Map({
        banner: String, // or null
        prompts: List([String]), // or null if not requested
      }),
    }),
  })
  editModalDeviceId: String, // null when creating a new device
  isEditModalOpen: false,
  credentialsModalDeviceId: String,
  isCredentialsModalOpen: false,
})
*/
var listReducer = function listReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_LIST:
      if (!_.isUndefined(action.list)) // eslint-disable-next-line lodash/prefer-lodash-method
        return (0, _immutable.fromJS)(action.list).map(function (item, index) {
          return item.set("isSelected", !!state.getIn([index, "isSelected"]));
        });
      break;

    case types.SET_SELECTED:
      if (!_.isUndefined(action.deviceId)) return state.withMutations(function (list) {
        // eslint-disable-next-line lodash/prefer-lodash-method
        var index = list.findIndex(function (item) {
          return item.get("id") === action.deviceId;
        });
        if (index !== -1) list.setIn([index, "isSelected"], !!action.isSelected);
      });
      break;

    case types.SELECT_ALL:
      // eslint-disable-next-line lodash/prefer-lodash-method
      return state.map(function (item) {
        return item.set("isSelected", true);
      });

    case types.DESELECT_ALL:
      // eslint-disable-next-line lodash/prefer-lodash-method
      return state.map(function (item) {
        return item.set("isSelected", false);
      });
  }

  return state;
};

var statusReducer = function statusReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET:
      if (!_.isUndefined(action.status)) return action.status;
      break;
  }

  return state;
};

var addressReducer = function addressReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET:
      if (!_.isUndefined(action.address)) return action.address;
      break;
  }

  return state;
};

var isLoggingInReducer = function isLoggingInReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET:
      if (!_.isUndefined(action.isLoggingIn)) return action.isLoggingIn;
      break;
  }

  return state;
};

var isLoggedInReducer = function isLoggedInReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET:
      if (!_.isUndefined(action.isLoggedIn)) return action.isLoggedIn;
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
  banner: authBannerReducer,
  prompts: authPromptsReducer
});
var deviceReducer = (0, _reduxImmutable.combineReducers)({
  status: statusReducer,
  address: addressReducer,
  isLoggingIn: isLoggingInReducer,
  isLoggedIn: isLoggedInReducer,
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

var credentialsModalDeviceIdReducer = function credentialsModalDeviceIdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_CREDENTIALS_MODAL:
      return action.deviceId || null;
  }

  return state;
};

var isCredentialsModalOpenReducer = function isCredentialsModalOpenReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_CREDENTIALS_MODAL:
      return true;

    case types.HIDE_CREDENTIALS_MODAL:
      return false;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  list: listReducer,
  online: onlineReducer,
  editModalDeviceId: editModalDeviceIdReducer,
  isEditModalOpen: isEditModalOpenReducer,
  credentialsModalDeviceId: credentialsModalDeviceIdReducer,
  isCredentialsModalOpen: isCredentialsModalOpenReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disconnect = exports.openBrowser = exports.openTerminal = exports.doInteractiveAuth = exports.finishAuth = exports.cancelAuth = exports.startAuth = exports.reqRemove = exports.reqEdit = exports.reqCreate = exports.load = exports.remove = exports.editFirstSelected = exports.deselectAll = exports.selectAll = exports.setSelected = exports.hideInteractiveModal = exports.showInteractiveModal = exports.hideCredentialsModal = exports.showCredentialsModal = exports.hideEditModal = exports.showEditModal = exports.set = exports.clear = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _router = _interopRequireDefault(__webpack_require__(9));

var actions = _interopRequireWildcard(__webpack_require__(45));

var selectors = _interopRequireWildcard(__webpack_require__(24));

var _app = __webpack_require__(4);

var _terminals = __webpack_require__(20);

var _constants = _interopRequireDefault(__webpack_require__(3));

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
var showCredentialsModal = actions.showCredentialsModal;
exports.showCredentialsModal = showCredentialsModal;
var hideCredentialsModal = actions.hideCredentialsModal;
exports.hideCredentialsModal = hideCredentialsModal;
var showInteractiveModal = actions.showInteractiveModal;
exports.showInteractiveModal = showInteractiveModal;
var hideInteractiveModal = actions.hideInteractiveModal;
exports.hideInteractiveModal = hideInteractiveModal;
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
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch, getState) {
        var selected;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                selected = selectors.getSelected(getState());

                if (!selected.size) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", dispatch(actions.showEditModal({
                  deviceId: selected.first().get("id")
                })));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

exports.editFirstSelected = editFirstSelected;

var remove = function remove(_ref2) {
  var deviceId = _ref2.deviceId;
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Promise.all( // eslint-disable-next-line lodash/prefer-lodash-method
                _terminals.terminalsSelectors.getTerminalsMap(getState()).map(function (terminal, terminalId) {
                  if (terminal.get("deviceId") === deviceId) return dispatch(_terminals.terminalsOperations.remove({
                    terminalId: terminalId
                  }));
                }).toList().filter(function (item) {
                  return !!item;
                }).toJS());

              case 2:
                return _context2.abrupt("return", dispatch(actions.remove({
                  deviceId: deviceId
                })));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

exports.remove = remove;

var load = function load() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      req = _ref4.req;

  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch) {
        var devices, response;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!req) {
                  _context3.next = 9;
                  break;
                }

                _context3.t0 = _;
                _context3.next = 4;
                return req.di.get("repository.devices").getDevices(req);

              case 4:
                _context3.t1 = _context3.sent;

                _context3.t2 = function (device) {
                  return _.assign({}, device, {
                    whenCreated: device.whenCreated.valueOf(),
                    whenUpdated: device.whenUpdated.valueOf()
                  });
                };

                devices = _context3.t0.map.call(_context3.t0, _context3.t1, _context3.t2);
                _context3.next = 13;
                break;

              case 9:
                _context3.next = 11;
                return dispatch(_app.appOperations.gqlQuery("\n          query {\n            devices {\n              id\n              name\n            }\n          }\n        "));

              case 11:
                response = _context3.sent;
                devices = response && _.get(response, "data.devices");

              case 13:
                _context3.next = 15;
                return dispatch(actions.setList({
                  list: devices
                }));

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.load = load;

var reqCreate = function reqCreate(_ref6) {
  var name = _ref6.name,
      password = _ref6.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch) {
        var result, response, errors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, error;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                result = false;
                _context4.prev = 1;
                _context4.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($name: String, $password: String) {\n            createDevice(name: $name, password: $password) {\n              success\n            }\n          }\n        ", {
                  name: name,
                  password: password
                }));

              case 4:
                response = _context4.sent;

                if (!(response && _.get(response, "data.createDevice.success", false))) {
                  _context4.next = 11;
                  break;
                }

                _context4.next = 8;
                return dispatch(actions.hideEditModal());

              case 8:
                return _context4.abrupt("return", true);

              case 11:
                result = {};
                errors = response && _.get(response, "errors", []);
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context4.prev = 16;

                for (_iterator = errors[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  error = _step.value;
                  if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result._error = (result._error || []).concat([error.message]);
                }

                _context4.next = 24;
                break;

              case 20:
                _context4.prev = 20;
                _context4.t0 = _context4["catch"](16);
                _didIteratorError = true;
                _iteratorError = _context4.t0;

              case 24:
                _context4.prev = 24;
                _context4.prev = 25;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 27:
                _context4.prev = 27;

                if (!_didIteratorError) {
                  _context4.next = 30;
                  break;
                }

                throw _iteratorError;

              case 30:
                return _context4.finish(27);

              case 31:
                return _context4.finish(24);

              case 32:
                if (!_.keys(result).length) result = {
                  _error: "EDIT_DEVICE_FAILED"
                };

              case 33:
                _context4.next = 38;
                break;

              case 35:
                _context4.prev = 35;
                _context4.t1 = _context4["catch"](1);
                console.error(_context4.t1);

              case 38:
                return _context4.abrupt("return", result);

              case 39:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 35], [16, 20, 24, 32], [25,, 27, 31]]);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.reqCreate = reqCreate;

var reqEdit = function reqEdit(_ref8) {
  var id = _ref8.id,
      name = _ref8.name,
      password = _ref8.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch) {
        var result, response, errors, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, error;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                result = false;
                _context5.prev = 1;
                _context5.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($id: String, $name: String, $password: String) {\n            editDevice(id: $id, name: $name, password: $password) {\n              success\n            }\n          }\n        ", {
                  id: id,
                  name: name,
                  password: password
                }));

              case 4:
                response = _context5.sent;

                if (!(response && _.get(response, "data.editDevice.success", false))) {
                  _context5.next = 11;
                  break;
                }

                _context5.next = 8;
                return dispatch(actions.hideEditModal());

              case 8:
                return _context5.abrupt("return", true);

              case 11:
                result = {};
                errors = response && _.get(response, "errors", []);
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context5.prev = 16;

                for (_iterator2 = errors[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  error = _step2.value;
                  if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result._error = (result._error || []).concat([error.message]);
                }

                _context5.next = 24;
                break;

              case 20:
                _context5.prev = 20;
                _context5.t0 = _context5["catch"](16);
                _didIteratorError2 = true;
                _iteratorError2 = _context5.t0;

              case 24:
                _context5.prev = 24;
                _context5.prev = 25;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 27:
                _context5.prev = 27;

                if (!_didIteratorError2) {
                  _context5.next = 30;
                  break;
                }

                throw _iteratorError2;

              case 30:
                return _context5.finish(27);

              case 31:
                return _context5.finish(24);

              case 32:
                if (!_.keys(result).length) result = {
                  _error: "EDIT_DEVICE_FAILED"
                };

              case 33:
                _context5.next = 38;
                break;

              case 35:
                _context5.prev = 35;
                _context5.t1 = _context5["catch"](1);
                console.error(_context5.t1);

              case 38:
                return _context5.abrupt("return", result);

              case 39:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 35], [16, 20, 24, 32], [25,, 27, 31]]);
      }));

      return function (_x7) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
};

exports.reqEdit = reqEdit;

var reqRemove = function reqRemove(_ref10) {
  var id = _ref10.id;
  return (
    /*#__PURE__*/
    function () {
      var _ref11 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(dispatch) {
        var response;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return dispatch(_app.appOperations.gqlQuery("\n        mutation ($id: String) {\n          deleteDevice(id: $id) {\n            success\n          }\n        }\n      ", {
                  id: id
                }));

              case 2:
                response = _context6.sent;
                return _context6.abrupt("return", response && _.get(response, "data.deleteDevice.success") || false);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x8) {
        return _ref11.apply(this, arguments);
      };
    }()
  );
};

exports.reqRemove = reqRemove;

var startAuth = function startAuth(_ref12) {
  var deviceId = _ref12.deviceId;
  return (
    /*#__PURE__*/
    function () {
      var _ref13 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(dispatch) {
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", dispatch(showCredentialsModal({
                  deviceId: deviceId
                })));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x9) {
        return _ref13.apply(this, arguments);
      };
    }()
  );
};

exports.startAuth = startAuth;

var cancelAuth = function cancelAuth() {
  return (
    /*#__PURE__*/
    function () {
      var _ref14 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(dispatch) {
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", dispatch(hideCredentialsModal()));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x10) {
        return _ref14.apply(this, arguments);
      };
    }()
  );
};

exports.cancelAuth = cancelAuth;

var finishAuth = function finishAuth(_ref15) {
  var username = _ref15.username,
      password = _ref15.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref16 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(dispatch, getState) {
        var deviceId, socket;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                deviceId = selectors.getCredentialsModalDeviceId(getState());
                _context9.next = 3;
                return dispatch(hideCredentialsModal());

              case 3:
                socket = _app.appSelectors.getService(getState(), {
                  service: "socket"
                });

                if (socket && deviceId) {
                  socket.emit(_constants.default.messages.CONNECT_DEVICE, {
                    deviceId: deviceId,
                    username: username,
                    password: password
                  });
                }

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function (_x11, _x12) {
        return _ref16.apply(this, arguments);
      };
    }()
  );
};

exports.finishAuth = finishAuth;

var doInteractiveAuth = function doInteractiveAuth() {
  var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref17$reply = _ref17.reply,
      reply = _ref17$reply === void 0 ? "" : _ref17$reply;

  return (
    /*#__PURE__*/
    function () {
      var _ref18 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee10(dispatch, getState) {
        var deviceId, socket;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                deviceId = selectors.getInteractiveModalDeviceId(getState());
                socket = _app.appSelectors.getService(getState(), {
                  service: "socket"
                });

                if (socket && deviceId) {
                  socket.emit(_constants.default.messages.FINISH_AUTH, {
                    deviceId: deviceId,
                    reply: reply
                  });
                }

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function (_x13, _x14) {
        return _ref18.apply(this, arguments);
      };
    }()
  );
};

exports.doInteractiveAuth = doInteractiveAuth;

var openTerminal = function openTerminal(_ref19) {
  var deviceId = _ref19.deviceId;
  return (
    /*#__PURE__*/
    function () {
      var _ref20 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee12(dispatch, getState) {
        var socket;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                socket = _app.appSelectors.getService(getState(), {
                  service: "socket"
                });

                if (socket) {
                  socket.emit(_constants.default.messages.CONNECT_TERMINAL, {
                    deviceId: deviceId
                  },
                  /*#__PURE__*/
                  function () {
                    var _ref21 = _asyncToGenerator(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee11(response) {
                      return _regenerator.default.wrap(function _callee11$(_context11) {
                        while (1) {
                          switch (_context11.prev = _context11.next) {
                            case 0:
                              if (response && response.id) {
                                _router.default.push({
                                  pathname: "/terminal",
                                  query: {
                                    terminalId: response.id
                                  }
                                });
                              }

                            case 1:
                            case "end":
                              return _context11.stop();
                          }
                        }
                      }, _callee11, this);
                    }));

                    return function (_x17) {
                      return _ref21.apply(this, arguments);
                    };
                  }());
                }

              case 2:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      return function (_x15, _x16) {
        return _ref20.apply(this, arguments);
      };
    }()
  );
};

exports.openTerminal = openTerminal;

var openBrowser = function openBrowser(_ref22) {
  var deviceId = _ref22.deviceId,
      host = _ref22.host,
      port = _ref22.port,
      isAuthNeeded = _ref22.isAuthNeeded,
      username = _ref22.username,
      password = _ref22.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref23 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee14(dispatch, getState) {
        var socket;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                port = parseInt(port);

                if (port) {
                  _context14.next = 3;
                  break;
                }

                return _context14.abrupt("return");

              case 3:
                socket = _app.appSelectors.getService(getState(), {
                  service: "socket"
                });

                if (socket) {
                  socket.emit(_constants.default.messages.CONNECT_BROWSER, {
                    deviceId: deviceId,
                    host: host,
                    port: port,
                    isAuthNeeded: isAuthNeeded,
                    username: username,
                    password: password
                  },
                  /*#__PURE__*/
                  function () {
                    var _ref24 = _asyncToGenerator(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee13(response) {
                      return _regenerator.default.wrap(function _callee13$(_context13) {
                        while (1) {
                          switch (_context13.prev = _context13.next) {
                            case 0:
                              if (response) {
                                _router.default.push({
                                  pathname: "/browser",
                                  query: {
                                    deviceId: deviceId,
                                    host: host,
                                    port: port
                                  }
                                });
                              }

                            case 1:
                            case "end":
                              return _context13.stop();
                          }
                        }
                      }, _callee13, this);
                    }));

                    return function (_x20) {
                      return _ref24.apply(this, arguments);
                    };
                  }());
                }

              case 5:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      return function (_x18, _x19) {
        return _ref23.apply(this, arguments);
      };
    }()
  );
};

exports.openBrowser = openBrowser;

var disconnect = function disconnect(_ref25) {
  var deviceId = _ref25.deviceId;
  return (
    /*#__PURE__*/
    function () {
      var _ref26 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee15(dispatch, getState) {
        var socket;
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                socket = _app.appSelectors.getService(getState(), {
                  service: "socket"
                });

                if (socket) {
                  socket.emit(_constants.default.messages.DISCONNECT_DEVICE, {
                    deviceId: deviceId
                  });
                }

              case 2:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      return function (_x21, _x22) {
        return _ref26.apply(this, arguments);
      };
    }()
  );
};

exports.disconnect = disconnect;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideCredentialsModal = exports.showCredentialsModal = exports.hideEditModal = exports.showEditModal = exports.remove = exports.set = exports.clear = exports.deselectAll = exports.selectAll = exports.setSelected = exports.setList = void 0;

var types = _interopRequireWildcard(__webpack_require__(15));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var setList = function setList(_ref) {
  var list = _ref.list;
  return {
    type: types.SET_LIST,
    list: list
  };
};

exports.setList = setList;

var setSelected = function setSelected(_ref2) {
  var deviceId = _ref2.deviceId,
      isSelected = _ref2.isSelected;
  return {
    type: types.SET_SELECTED,
    deviceId: deviceId,
    isSelected: isSelected
  };
};

exports.setSelected = setSelected;

var selectAll = function selectAll() {
  return {
    type: types.SELECT_ALL
  };
};

exports.selectAll = selectAll;

var deselectAll = function deselectAll() {
  return {
    type: types.DESELECT_ALL
  };
};

exports.deselectAll = deselectAll;

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

var remove = function remove(_ref3) {
  var deviceId = _ref3.deviceId;
  return {
    type: types.REMOVE,
    deviceId: deviceId
  };
};

exports.remove = remove;

var showEditModal = function showEditModal() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      deviceId = _ref4.deviceId;

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

var showCredentialsModal = function showCredentialsModal() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      deviceId = _ref5.deviceId;

  return {
    type: types.SHOW_CREDENTIALS_MODAL,
    deviceId: deviceId
  };
};

exports.showCredentialsModal = showCredentialsModal;

var hideCredentialsModal = function hideCredentialsModal() {
  return {
    type: types.HIDE_CREDENTIALS_MODAL
  };
};

exports.hideCredentialsModal = hideCredentialsModal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxImmutable = __webpack_require__(5);

var _immutable = __webpack_require__(2);

var types = _interopRequireWildcard(__webpack_require__(16));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  online: Map({
    terminalId: Map({
      deviceId: String,
      name: String,
    })
  })
})
*/
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

var whenCreatedReducer = function whenCreatedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
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

var terminalReducer = (0, _reduxImmutable.combineReducers)({
  deviceId: deviceIdReducer,
  whenCreated: whenCreatedReducer,
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.kill = exports.sendResize = exports.sendInput = exports.set = exports.clear = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var actions = _interopRequireWildcard(__webpack_require__(48));

var _app = __webpack_require__(4);

var _histories = __webpack_require__(21);

var _constants = _interopRequireDefault(__webpack_require__(3));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var clear = actions.clear;
exports.clear = clear;
var set = actions.set;
exports.set = set;

var sendInput = function sendInput(_ref) {
  var terminalId = _ref.terminalId,
      data = _ref.data;
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch, getState) {
        var socket;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
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

exports.sendInput = sendInput;

var sendResize = function sendResize(_ref3) {
  var terminalId = _ref3.terminalId,
      cols = _ref3.cols,
      rows = _ref3.rows,
      width = _ref3.width,
      height = _ref3.height;
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState) {
        var socket;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
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
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x3, _x4) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

exports.sendResize = sendResize;

var kill = function kill(_ref5) {
  var terminalId = _ref5.terminalId;
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch, getState) {
        var socket;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
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
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x5, _x6) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

exports.kill = kill;

var remove = function remove(_ref7) {
  var terminalId = _ref7.terminalId;
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return dispatch(_histories.historiesOperations.remove({
                  terminalId: terminalId
                }));

              case 2:
                return _context4.abrupt("return", dispatch(actions.remove({
                  terminalId: terminalId
                })));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

exports.remove = remove;

/***/ }),
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxImmutable = __webpack_require__(5);

var _immutable = __webpack_require__(2);

var _uuid = _interopRequireDefault(__webpack_require__(50));

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
/* 50 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = exports.removeStarting = exports.remove = exports.add = void 0;

var actions = _interopRequireWildcard(__webpack_require__(52));

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
/* 52 */
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
/* 53 */
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTerminalAddress = exports.getTerminalName = exports.getTerminalMap = exports.hasTerminal = exports.getTerminalsMap = void 0;

var _devices = __webpack_require__(11);

var getTerminalsMap = function getTerminalsMap(state) {
  return state.getIn(["terminals", "online"]);
};

exports.getTerminalsMap = getTerminalsMap;

var hasTerminal = function hasTerminal(state, props) {
  return state.hasIn(["terminals", "online", props.terminalId]);
};

exports.hasTerminal = hasTerminal;

var getTerminalMap = function getTerminalMap(state, props) {
  return state.getIn(["terminals", "online", props.terminalId]);
};

exports.getTerminalMap = getTerminalMap;

var getTerminalName = function getTerminalName(state, props) {
  return state.getIn(["terminals", "online", props.terminalId, "name"]);
};

exports.getTerminalName = getTerminalName;

var getTerminalAddress = function getTerminalAddress(state, props) {
  var terminal = state.getIn(["terminals", "online", props.terminalId]);
  if (!terminal) return "";
  return _devices.devicesSelectors.getAddress(state, {
    deviceId: terminal.get("deviceId")
  });
};

exports.getTerminalAddress = getTerminalAddress;

/***/ }),
/* 55 */
/***/ (function(module) {

module.exports = {"name":"remote-configurator","version":"0.1.0","private":true,"dependencies":{"@date-io/moment":"~0.0.2","@material-ui/core":"~3.7.0","@material-ui/icons":"~3.0.1","@zeit/next-bundle-analyzer":"~0.1.2","@zeit/next-css":"~1.0.1","base64util":"~2.0.0-f","bcrypt":"~3.0.2","body-parser":"~1.18.3","chance":"~1.0.18","classnames":"~2.2.6","compression":"~1.7.3","connect-loki":"~1.1.0","cookie-parser":"~1.4.3","cors":"~2.8.5","csurf":"~1.9.0","debug":"~4.1.0","decompress-response":"~3.3.0","dotenv":"~6.2.0","express":"~4.16.4","express-graphql":"~0.7.1","express-session":"~1.15.6","fs-extra":"~7.0.1","generate-rsa-keypair":"~0.1.2","graphql":"14.0.2","graphql-tools":"~4.0.3","http-proxy":"~1.17.0","http-status-codes":"~1.3.0","immutable":"~4.0.0-rc.12","injectt":"~0.1.6","intl":"~1.2.5","intl-locales-supported":"~1.0.0","intl-messageformat":"~2.2.0","isomorphic-unfetch":"~3.0.0","json-immutable":"~0.4.0","jsotp":"~1.0.4","jss":"~9.8.7","jss-extend":"~6.2.0","lodash":"~4.17.11","lokijs":"~1.5.5","lru-cache":"~5.1.1","material-ui-pickers":"~2.0.4","moment":"~2.23.0","moment-timezone":"~0.5.23","morgan":"~1.9.1","next":"~7.0.2","next-compose-plugins":"~2.1.1","next-progressbar":"~1.0.0","query-string":"~6.2.0","raf":"~3.4.1","react":"~16.7.0","react-dom":"~16.7.0","react-intl":"~2.7.2","react-jss":"~8.6.1","react-redux":"~6.0.0","react-swipeable-views":"~0.13.0","react-virtualized":"~9.21.0","redux":"~4.0.1","redux-devtools-extension":"~2.13.7","redux-form":"~8.0.4","redux-immutable":"~4.0.0","redux-thunk":"~2.3.0","reselect":"~4.0.0","serve-favicon":"~2.5.0","serviceworker-webpack-plugin":"~1.0.1","socket.io":"~2.2.0","ssh2":"~0.6.1","svg-inline-loader":"~0.8.0","utf8":"~3.0.0","uuid":"~3.3.2","validator":"~10.9.0","webpack":"4.20.2","xterm":"~3.9.1"},"devDependencies":{"@babel/core":"7.0.0","babel-core":"7.0.0-bridge.0","babel-eslint":"~10.0.1","babel-jest":"~23.6.0","babel-plugin-lodash":"~3.3.4","css-mqpacker":"~7.0.0","enzyme":"~3.8.0","enzyme-adapter-react-16":"~1.7.1","eslint":"~5.10.0","eslint-plugin-lodash":"~5.1.0","eslint-plugin-react":"~7.11.1","jest":"~23.6.0","jsdom":"~13.1.0","jsdom-global":"~3.0.2","postcss-clean":"~1.1.0","postcss-loader":"~3.0.0","postcss-preset-env":"~6.5.0","postcss-url":"~8.0.0","prop-types":"~15.6.2","supertest":"~3.3.0","webfontloader":"~1.6.28"},"scripts":{"lint":"eslint . --max-warnings=0","test":"jest . --no-cache --forceExit","build":"node ./bin/prepare-build && env NODE_ENV=production TMPDIR=$PWD/.tmp next build","export":"env NODE_ENV=production TMPDIR=$PWD/.tmp next export","dev":"node ./bin/prepare-build && env NODE_ENV=development node ./bin/www","start":"env NODE_ENV=production node ./bin/www"}};

/***/ }),
/* 56 */
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isConnected = exports.isStarted = exports.getLocale = exports.getStatusCode = exports.getService = exports.getSelfRegistration = exports.getSshPort = exports.getSshHost = exports.getAppOrigin = exports.getCreated = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getCreated = function getCreated(state) {
  return state.getIn(["app", "created"]);
};

exports.getCreated = getCreated;

var getAppOrigin = function getAppOrigin(state) {
  return state.getIn(["app", "appOrigin"]);
};

exports.getAppOrigin = getAppOrigin;

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
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/***/ (function(module, exports) {

module.exports = require("react-virtualized");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),
/* 102 */,
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
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(168);


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _BrowserPage.default;
  }
});

var _BrowserPage = _interopRequireDefault(__webpack_require__(169));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(1));

var _reactRedux = __webpack_require__(19);

var _auth = __webpack_require__(12);

var _devices = __webpack_require__(11);

var _BrowserPage = _interopRequireDefault(__webpack_require__(170));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: _auth.authSelectors.isAuthenticated(state)
  };
};

var BrowserPage = (0, _reactRedux.connect)(mapStateToProps, null, null, {
  pure: false
})(_BrowserPage.default);

BrowserPage.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var store, req, query;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref.store, req = _ref.req, query = _ref.query;
            _context.next = 3;
            return store.dispatch(_devices.devicesOperations.load({
              req: req
            }));

          case 3:
            return _context.abrupt("return", {
              deviceId: query.deviceId,
              host: query.host,
              port: parseInt(query.port) || 0
            });

          case 4:
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

var _default = BrowserPage;
exports.default = _default;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(6));

var _propTypes = _interopRequireDefault(__webpack_require__(7));

var _styles = __webpack_require__(10);

var _Browser = _interopRequireDefault(__webpack_require__(171));

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
      padding: theme.main.spacing
    }, theme.breakpoints.down("md"), {
      padding: theme.main.spacing / 2,
      maxWidth: 1300 + theme.main.spacing
    })
  };
};

var BrowserPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BrowserPage, _React$Component);

  function BrowserPage() {
    _classCallCheck(this, BrowserPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(BrowserPage).apply(this, arguments));
  }

  _createClass(BrowserPage, [{
    key: "render",
    value: function render() {
      if (!this.props.isAuthenticated) return null;
      return _react.default.createElement("div", {
        className: this.props.classes.layout
      }, _react.default.createElement(_Browser.default, {
        key: "browser-".concat(this.props.deviceId, "-").concat(this.props.host, "-").concat(this.props.port),
        deviceId: this.props.deviceId,
        host: this.props.host,
        port: this.props.port
      }));
    }
  }]);

  return BrowserPage;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(BrowserPage);

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

var _router = __webpack_require__(9);

var _Browser = _interopRequireDefault(__webpack_require__(172));

var _app = __webpack_require__(4);

var _devices = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    appOrigin: _app.appSelectors.getAppOrigin(state),
    name: _devices.devicesSelectors.getName(state, props),
    address: _devices.devicesSelectors.getAddress(state, props)
  };
};

var Browser = (0, _router.withRouter)((0, _reactRedux.connect)(mapStateToProps, null)(_Browser.default));
var _default = Browser;
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

var _router = _interopRequireDefault(__webpack_require__(9));

var _propTypes = _interopRequireDefault(__webpack_require__(7));

var _reactVirtualized = __webpack_require__(100);

var _styles = __webpack_require__(10);

var _IconButton = _interopRequireDefault(__webpack_require__(91));

var _Refresh = _interopRequireDefault(__webpack_require__(173));

var _Close = _interopRequireDefault(__webpack_require__(101));

var _Paper = _interopRequireDefault(__webpack_require__(92));

var _Typography = _interopRequireDefault(__webpack_require__(71));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      position: "relative",
      background: "#2a2c38"
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    headerText: {
      flex: 1
    },
    browser: {
      flex: 1
    }
  };
};

var Browser =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Browser, _React$Component);

  function Browser(props) {
    var _this;

    _classCallCheck(this, Browser);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Browser).call(this, props));
    _this.state = {
      key: Date.now()
    };
    _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleRefresh = _this.handleRefresh.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Browser, [{
    key: "getIframeId",
    value: function getIframeId() {
      return "frame-".concat(this.props.deviceId, "-").concat(this.props.host, "-").concat(this.props.port);
    }
  }, {
    key: "handleRefresh",
    value: function handleRefresh() {
      this.setState({
        key: Date.now()
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      _router.default.push("/");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_Paper.default, {
        className: this.props.classes.container
      }, _react.default.createElement("div", {
        className: this.props.classes.header
      }, _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleRefresh
      }, _react.default.createElement(_Refresh.default, null)), _react.default.createElement(_Typography.default, {
        variant: "h5",
        className: this.props.classes.headerText
      }, this.props.host, ":", this.props.port, "\xA0-\xA0", this.props.name, "\xA0", !!this.props.address && "(" + this.props.address + ")"), _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleClose
      }, _react.default.createElement(_Close.default, null))), _react.default.createElement("div", {
        className: this.props.classes.browser
      }, _react.default.createElement(_reactVirtualized.AutoSizer, null, function (_ref) {
        var width = _ref.width,
            height = _ref.height;
        return _react.default.createElement("iframe", {
          key: "frame-".concat(_this2.state.key),
          id: _this2.getIframeId(),
          width: width,
          height: height,
          sandbox: "allow-forms allow-modals allow-popups allow-scripts allow-same-origin",
          style: {
            background: "#ffffff",
            border: "none"
          },
          src: "".concat(_this2.props.appOrigin, "/api/browser/").concat(_this2.props.deviceId, "/").concat(_this2.props.host, "/").concat(_this2.props.port)
        });
      })));
    }
  }]);

  return Browser;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(Browser);

exports.default = _default;

/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Refresh");

/***/ })
/******/ ]);