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
/******/ 	return __webpack_require__(__webpack_require__.s = "bba7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+1HE":
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

/***/ "+B5c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash ef011526e423b5832e97ba406daa3356
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DeviceListContainer_viewer$ref = any;
export type DevicesPageQueryVariables = {|
  first?: ?number,
  after?: ?string,
  last?: ?number,
  before?: ?string,
|};
export type DevicesPageQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: DeviceListContainer_viewer$ref
  |}
|};
export type DevicesPageQuery = {|
  variables: DevicesPageQueryVariables,
  response: DevicesPageQueryResponse,
|};
*/

/*
query DevicesPageQuery(
  $first: Int
  $after: String
  $last: Int
  $before: String
) {
  viewer {
    ...DeviceListContainer_viewer_pbnwq
  }
}

fragment DeviceListContainer_viewer_pbnwq on Viewer {
  devices(first: $first, after: $after, last: $last, before: $before) {
    edges {
      cursor
      node {
        id
        ...DeviceItemContainer_node
      }
    }
    totalCount
  }
}

fragment DeviceItemContainer_node on Device {
  id
  name
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
      "name": "DevicesPageQuery",
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
          "name": "DeviceListContainer_viewer",
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
      "name": "DevicesPageQuery",
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
          "name": "devices",
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
          "concreteType": "DeviceConnection",
          "plural": false,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "DeviceEdge",
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
              "concreteType": "Device",
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
                "name": "name",
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
      "name": "DevicesPageQuery",
      "id": null,
      "text": "query DevicesPageQuery(\n  $first: Int\n  $after: String\n  $last: Int\n  $before: String\n) {\n  viewer {\n    ...DeviceListContainer_viewer_pbnwq\n  }\n}\n\nfragment DeviceListContainer_viewer_pbnwq on Viewer {\n  devices(first: $first, after: $after, last: $last, before: $before) {\n    edges {\n      cursor\n      node {\n        id\n        ...DeviceItemContainer_node\n      }\n    }\n    totalCount\n  }\n}\n\nfragment DeviceItemContainer_node on Device {\n  id\n  name\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '90facbb98f94ba959e04a424e02e6640';
module.exports = node;

/***/ }),

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

/***/ "+Wwo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_CREDENTIALS_MODAL = exports.SHOW_CREDENTIALS_MODAL = exports.HIDE_EDIT_MODAL = exports.SHOW_EDIT_MODAL = exports.DESELECT_ALL = exports.SELECT_ALL = exports.SET_SELECTED = exports.REMOVE = exports.SET = exports.CLEAR = void 0;
var CLEAR = "app/devices/CLEAR";
exports.CLEAR = CLEAR;
var SET = "app/devices/SET";
exports.SET = SET;
var REMOVE = "app/devices/REMOVE";
exports.REMOVE = REMOVE;
var SET_SELECTED = "app/devices/SET_SELECTED";
exports.SET_SELECTED = SET_SELECTED;
var SELECT_ALL = "app/devices/SELECT_ALL";
exports.SELECT_ALL = SELECT_ALL;
var DESELECT_ALL = "app/devices/DESELECT_ALL";
exports.DESELECT_ALL = DESELECT_ALL;
var SHOW_EDIT_MODAL = "app/devices/SHOW_EDIT_MODAL";
exports.SHOW_EDIT_MODAL = SHOW_EDIT_MODAL;
var HIDE_EDIT_MODAL = "app/devices/HIDE_EDIT_MODAL";
exports.HIDE_EDIT_MODAL = HIDE_EDIT_MODAL;
var SHOW_CREDENTIALS_MODAL = "app/devices/SHOW_CREDENTIALS_MODAL";
exports.SHOW_CREDENTIALS_MODAL = SHOW_CREDENTIALS_MODAL;
var HIDE_CREDENTIALS_MODAL = "app/devices/HIDE_CREDENTIALS_MODAL";
exports.HIDE_CREDENTIALS_MODAL = HIDE_CREDENTIALS_MODAL;

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

/***/ "/1NK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 91c0f5b8a4a38066c75e4ac79e2fe3d7
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DeviceListContainer_viewer$ref = any;
export type DeviceListContainerQueryVariables = {|
  first?: ?number,
  after?: ?string,
  last?: ?number,
  before?: ?string,
|};
export type DeviceListContainerQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: DeviceListContainer_viewer$ref
  |}
|};
export type DeviceListContainerQuery = {|
  variables: DeviceListContainerQueryVariables,
  response: DeviceListContainerQueryResponse,
|};
*/

/*
query DeviceListContainerQuery(
  $first: Int
  $after: String
  $last: Int
  $before: String
) {
  viewer {
    ...DeviceListContainer_viewer_pbnwq
  }
}

fragment DeviceListContainer_viewer_pbnwq on Viewer {
  devices(first: $first, after: $after, last: $last, before: $before) {
    edges {
      cursor
      node {
        id
        ...DeviceItemContainer_node
      }
    }
    totalCount
  }
}

fragment DeviceItemContainer_node on Device {
  id
  name
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
      "name": "DeviceListContainerQuery",
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
          "name": "DeviceListContainer_viewer",
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
      "name": "DeviceListContainerQuery",
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
          "name": "devices",
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
          "concreteType": "DeviceConnection",
          "plural": false,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "DeviceEdge",
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
              "concreteType": "Device",
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
                "name": "name",
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
      "name": "DeviceListContainerQuery",
      "id": null,
      "text": "query DeviceListContainerQuery(\n  $first: Int\n  $after: String\n  $last: Int\n  $before: String\n) {\n  viewer {\n    ...DeviceListContainer_viewer_pbnwq\n  }\n}\n\nfragment DeviceListContainer_viewer_pbnwq on Viewer {\n  devices(first: $first, after: $after, last: $last, before: $before) {\n    edges {\n      cursor\n      node {\n        id\n        ...DeviceItemContainer_node\n      }\n    }\n    totalCount\n  }\n}\n\nfragment DeviceItemContainer_node on Device {\n  id\n  name\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '1f18a6cf387a1cbdde577b8267757438';
module.exports = node;

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

/***/ "0zb8":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

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

/***/ "1gBk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "1lAS":
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

var _DeviceListContainer = _interopRequireWildcard(__webpack_require__("jjb1"));

var _ErrorMessageContainer = _interopRequireDefault(__webpack_require__("Y3Ay"));

var defaultVariables = {
  first: _DeviceListContainer.pageSize
};

var query = function query() {
  return __webpack_require__("+B5c");
};

exports.query = query;

var DevicesPage =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(DevicesPage, _React$Component);

  function DevicesPage() {
    (0, _classCallCheck2.default)(this, DevicesPage);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DevicesPage).apply(this, arguments));
  }

  (0, _createClass2.default)(DevicesPage, [{
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
          return _react.default.createElement(_DeviceListContainer.default, {
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
  return DevicesPage;
}(_react.default.Component);

var _default = DevicesPage;
exports.default = _default;

/***/ }),

/***/ "204w":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required",
    label: "EDIT_DEVICE_NAME_LABEL"
  },
  password: {
    normalize: "rows:1",
    transform: "trim",
    validate: "password",
    label: "EDIT_DEVICE_PASSWORD_LABEL"
  }
};

/***/ }),

/***/ "30mr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "3RZF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 2110e6b75419c096f08c37ec79afb67b
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeviceListSubscriptionVariables = {|
  token?: ?string
|};
export type DeviceListSubscriptionResponse = {|
  +deviceEvent: ?{|
    +id: string
  |}
|};
export type DeviceListSubscription = {|
  variables: DeviceListSubscriptionVariables,
  response: DeviceListSubscriptionResponse,
|};
*/

/*
subscription DeviceListSubscription(
  $token: String
) {
  deviceEvent(token: $token) {
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
    "name": "deviceEvent",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "token",
      "variableName": "token",
      "type": "String"
    }],
    "concreteType": "Device",
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
      "name": "DeviceListSubscription",
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
      "name": "DeviceListSubscription",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "subscription",
      "name": "DeviceListSubscription",
      "id": null,
      "text": "subscription DeviceListSubscription(\n  $token: String\n) {\n  deviceEvent(token: $token) {\n    id\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '68c5e045821fa5adda92312c7db0bae0';
module.exports = node;

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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "6eRU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = exports.removeStarting = exports.remove = exports.add = void 0;

var actions = _interopRequireWildcard(__webpack_require__("Ag9e"));

var add = actions.add;
exports.add = add;
var remove = actions.remove;
exports.remove = remove;
var removeStarting = actions.removeStarting;
exports.removeStarting = removeStarting;
var clear = actions.clear;
exports.clear = clear;

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

/***/ "9cni":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideCredentialsModal = exports.showCredentialsModal = exports.hideEditModal = exports.showEditModal = exports.deselectAll = exports.selectAll = exports.setSelected = exports.remove = exports.set = exports.clear = void 0;

var types = _interopRequireWildcard(__webpack_require__("+Wwo"));

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
  var deviceId = _ref.deviceId;
  return {
    type: types.REMOVE,
    deviceId: deviceId
  };
};

exports.remove = remove;

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

var selectAll = function selectAll(_ref3) {
  var deviceIds = _ref3.deviceIds;
  return {
    type: types.SELECT_ALL,
    deviceIds: deviceIds
  };
};

exports.selectAll = selectAll;

var deselectAll = function deselectAll() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      exceptDeviceIds = _ref4.exceptDeviceIds;

  return {
    type: types.DESELECT_ALL,
    exceptDeviceIds: exceptDeviceIds
  };
};

exports.deselectAll = deselectAll;

var showEditModal = function showEditModal() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      deviceId = _ref5.deviceId;

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
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      deviceId = _ref6.deviceId;

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "AV/6":
/***/ (function(module, exports) {

module.exports = require("relay-runtime");

/***/ }),

/***/ "Ag9e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeStarting = exports.remove = exports.add = exports.clear = void 0;

var types = _interopRequireWildcard(__webpack_require__("jfPW"));

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

/***/ "D+hd":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Language");

/***/ }),

/***/ "DaI5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _styles = __webpack_require__("9Pu4");

var _reactIntl = __webpack_require__("k004");

var _state = __webpack_require__("DdWW");

var _ProxyModal = _interopRequireWildcard(__webpack_require__("dPWu"));

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    name: _state.devicesSelectors.getName(state, {
      deviceId: props.deviceId
    })
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    onFinish: function onFinish(host, port, isAuthNeeded, username, password) {
      return dispatch(_state.devicesOperations.openBrowser({
        deviceId: props.deviceId,
        host: host,
        port: port,
        isAuthNeeded: isAuthNeeded,
        username: username,
        password: password
      }));
    }
  };
};

var ProxyModal = (0, _styles.withStyles)(_ProxyModal.styles)((0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ProxyModal.default)));
var _default = ProxyModal;
exports.default = _default;

/***/ }),

/***/ "DdWW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.devicesSelectors = exports.devicesOperations = exports.devicesTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__("mQDy"));

var devicesTypes = _interopRequireWildcard(__webpack_require__("+Wwo"));

exports.devicesTypes = devicesTypes;

var devicesOperations = _interopRequireWildcard(__webpack_require__("QGsx"));

exports.devicesOperations = devicesOperations;

var devicesSelectors = _interopRequireWildcard(__webpack_require__("I/1Q"));

exports.devicesSelectors = devicesSelectors;
var _default = _reducers.default;
exports.default = _default;

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

/***/ "EVP0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.historiesSelectors = exports.historiesOperations = exports.historiesTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__("KoUe"));

var historiesTypes = _interopRequireWildcard(__webpack_require__("jfPW"));

exports.historiesTypes = historiesTypes;

var historiesOperations = _interopRequireWildcard(__webpack_require__("6eRU"));

exports.historiesOperations = historiesOperations;

var historiesSelectors = _interopRequireWildcard(__webpack_require__("oUkC"));

exports.historiesSelectors = historiesSelectors;
var _default = _reducers.default;
exports.default = _default;

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

/***/ "GO9A":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  host: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required",
    label: "PROXY_HOST_LABEL"
  },
  port: {
    normalize: "rows:1|integer",
    transform: "trim",
    validate: "required",
    label: "PROXY_PORT_LABEL"
  },
  isAuthNeeded: {
    label: "PROXY_AUTH_LABEL"
  },
  login: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    label: "PROXY_LOGIN_LABEL"
  },
  password: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    label: "PROXY_PASSWORD_LABEL"
  }
};

/***/ }),

/***/ "GfNl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DeviceItemContainer_node$ref: FragmentReference;
export type DeviceItemContainer_node = {|
  +id: string,
  +name: string,
  +$refType: DeviceItemContainer_node$ref,
|};
*/

var node
/*: ReaderFragment*/
= {
  "kind": "Fragment",
  "name": "DeviceItemContainer_node",
  "type": "Device",
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
    "name": "name",
    "args": null,
    "storageKey": null
  }]
}; // prettier-ignore

node
/*: any*/
.hash = '23bb8a7d6449982c634e28acc4cea63f';
module.exports = node;

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

/***/ "HUi2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required",
    label: "EDIT_DEVICE_NAME_LABEL"
  },
  password: {
    normalize: "rows:1",
    transform: "trim",
    validate: "required|password",
    label: "EDIT_DEVICE_PASSWORD_LABEL"
  }
};

/***/ }),

/***/ "I/1Q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInteractiveModalData = exports.isInteractiveModalOpen = exports.getInteractiveModalDeviceId = exports.getCredentialsModalData = exports.getCredentialsModalDeviceId = exports.isCredentialsModalOpen = exports.getEditModalDeviceId = exports.isEditModalOpen = exports.getSelected = exports.getAddress = exports.getName = exports.getDeviceInfo = exports.getOnline = void 0;

var _immutable = __webpack_require__("nuGg");

var _reselect = __webpack_require__("MWqi");

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
var getDeviceInfo = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["devices", "online"]);
}, function (state, props) {
  return props.deviceId;
}, function (online, deviceId) {
  var info = online.get(deviceId);
  return info && info.toJS();
});
exports.getDeviceInfo = getDeviceInfo;

var getName = function getName(state, props) {
  return state.getIn(["devices", "online", props.deviceId, "name"]) || "";
};

exports.getName = getName;

var getAddress = function getAddress(state, props) {
  return state.getIn(["devices", "online", props.deviceId, "address"]) || "";
};

exports.getAddress = getAddress;
var getSelected = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["devices", "selected"]);
}, function (selected) {
  return selected.toJS();
});
exports.getSelected = getSelected;

var isEditModalOpen = function isEditModalOpen(state) {
  return state.getIn(["devices", "isEditModalOpen"]);
};

exports.isEditModalOpen = isEditModalOpen;

var getEditModalDeviceId = function getEditModalDeviceId(state) {
  return state.getIn(["devices", "editModalDeviceId"]);
};

exports.getEditModalDeviceId = getEditModalDeviceId;

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
  var data = // eslint-disable-next-line lodash/prefer-lodash-method
  state.getIn(["devices", "online"]).find(function (item) {
    return item.get("deviceId") === id;
  }) || (0, _immutable.Map)();
  return data.toJS();
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
  var data = id && state.getIn(["devices", "online", id, "auth"]) || (0, _immutable.Map)();
  return data.toJS();
};

exports.getInteractiveModalData = getInteractiveModalData;

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

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "Jgo9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _styles = __webpack_require__("9Pu4");

var _state = __webpack_require__("DdWW");

var _EditDeviceModal = _interopRequireWildcard(__webpack_require__("PU3P"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: _state.devicesSelectors.isEditModalOpen(state),
    currentId: _state.devicesSelectors.getEditModalDeviceId(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onCancel: function onCancel() {
      return dispatch(_state.devicesOperations.hideEditModal());
    },
    onCreate: function onCreate(name, password) {
      return dispatch(_state.devicesOperations.reqCreate({
        name: name,
        password: password
      }));
    },
    onEdit: function onEdit(id, name, password) {
      return dispatch(_state.devicesOperations.reqEdit({
        id: id,
        name: name,
        password: password
      }));
    }
  };
};

var EditDeviceModal = (0, _styles.withStyles)(_EditDeviceModal.styles)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_EditDeviceModal.default));
var _default = EditDeviceModal;
exports.default = _default;

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

/***/ "JyUI":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/OpenInBrowser");

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

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KoUe":
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

var _reduxImmutable = __webpack_require__("RGyf");

var _immutable = __webpack_require__("nuGg");

var _uuid = _interopRequireDefault(__webpack_require__("kNaX"));

var types = _interopRequireWildcard(__webpack_require__("jfPW"));

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

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

          for (var _iterator = (0, _getIterator2.default)(data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
          for (var _iterator2 = (0, _getIterator2.default)(map.keys()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

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

/***/ "O3Y7":
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
  return __webpack_require__("hY29");
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

/***/ "OFRV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ErrorOutlined");

/***/ }),

/***/ "OdWO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "PU3P":
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

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

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

var _editDevice = _interopRequireDefault(__webpack_require__("204w"));

var _createDevice = _interopRequireDefault(__webpack_require__("HUi2"));

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
  return __webpack_require__("t3At");
};

exports.query = query;

var EditDeviceModal =
/*#__PURE__*/
function (_Form) {
  (0, _inherits2.default)(EditDeviceModal, _Form);

  function EditDeviceModal(props) {
    var _this;

    (0, _classCallCheck2.default)(this, EditDeviceModal);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(EditDeviceModal).call(this, props));
    _this.state = {
      initialValues: null
    };
    _this.submit = _this.submit.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(EditDeviceModal, [{
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
        var name, password, result;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = _ref.name, password = _ref.password;

                if (!this.props.currentId) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return this.props.onEdit(this.props.currentId, name, password);

              case 4:
                result = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.next = 9;
                return this.props.onCreate(name, password);

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
        fields: this.props.currentId ? _editDevice.default : _createDevice.default,
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
            id: _this2.props.currentId ? "EDIT_DEVICE_TITLE_EDIT" : "EDIT_DEVICE_TITLE_CREATE"
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
            name: "name",
            type: "text"
          })), _react.default.createElement(_Grid.default, {
            item: true,
            xs: 12
          }, _react.default.createElement(_forms.Field, {
            name: "password",
            type: "password"
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
            id: "EDIT_DEVICE_CANCEL"
          })), _react.default.createElement(_Button.default, {
            variant: "contained",
            color: "secondary",
            disabled: submitting,
            onClick: handleSubmit
          }, _react.default.createElement(_reactIntl.FormattedMessage, {
            id: "EDIT_DEVICE_SUBMIT"
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
                    name: _.get(viewer, "device.name", ""),
                    password: _.get(viewer, "device.password", "")
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
  return EditDeviceModal;
}(_forms.Form);

(0, _defineProperty2.default)(EditDeviceModal, "propTypes", {
  classes: _propTypes.default.object.isRequired,
  isOpen: _propTypes.default.bool.isRequired,
  currentId: _propTypes.default.string,
  onCancel: _propTypes.default.func.isRequired,
  onCreate: _propTypes.default.func.isRequired,
  onEdit: _propTypes.default.func.isRequired
});
var _default = EditDeviceModal;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

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

/***/ "QGsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disconnect = exports.openBrowser = exports.openTerminal = exports.doInteractiveAuth = exports.finishAuth = exports.cancelAuth = exports.startAuth = exports.reqRemove = exports.reqEdit = exports.reqCreate = exports.remove = exports.editFirstSelected = exports.deselectAll = exports.selectAll = exports.setSelected = exports.hideCredentialsModal = exports.showCredentialsModal = exports.hideEditModal = exports.showEditModal = exports.set = exports.clear = void 0;

var _parseInt2 = _interopRequireDefault(__webpack_require__("6BQ9"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _router = _interopRequireDefault(__webpack_require__("4Q3z"));

var actions = _interopRequireWildcard(__webpack_require__("9cni"));

var selectors = _interopRequireWildcard(__webpack_require__("I/1Q"));

var _state = __webpack_require__("cf5E");

var _getFormErrors = _interopRequireDefault(__webpack_require__("EUet"));

var _CreateDevice = _interopRequireDefault(__webpack_require__("O3Y7"));

var _EditDevice = _interopRequireDefault(__webpack_require__("njrX"));

var _DeleteDevice = _interopRequireDefault(__webpack_require__("nzBE"));

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

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
                  deviceId: selected[0]
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

var remove = function remove(_ref2) {
  var deviceId = _ref2.deviceId;
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _promise.default.all( // eslint-disable-next-line lodash/prefer-lodash-method
                _state.terminalsSelectors.getTerminalsMap(getState()).map(function (terminal, terminalId) {
                  if (terminal.get("deviceId") === deviceId) return dispatch(_state.terminalsOperations.remove({
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
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

exports.remove = remove;

var reqCreate = function reqCreate(_ref4) {
  var name = _ref4.name,
      password = _ref4.password;
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
                return (0, _CreateDevice.default)(di, {
                  name: name,
                  password: password
                });

              case 2:
                data = _context3.sent;

                if (!_.get(data, "data.createDevice.device.id", null)) {
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

      return function (_x5, _x6, _x7) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.reqCreate = reqCreate;

var reqEdit = function reqEdit(_ref6) {
  var id = _ref6.id,
      name = _ref6.name,
      password = _ref6.password;
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
                return (0, _EditDevice.default)(di, {
                  id: id,
                  name: name,
                  password: password
                });

              case 2:
                data = _context4.sent;

                if (!_.get(data, "data.editDevice.device.id", null)) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 6;
                return dispatch(actions.hideEditModal());

              case 6:
                return _context4.abrupt("return", true);

              case 7:
                return _context4.abrupt("return", (0, _getFormErrors.default)(data));

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x8, _x9, _x10) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.reqEdit = reqEdit;

var reqRemove = function reqRemove(_ref8) {
  var id = _ref8.id;
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _DeleteDevice.default)(di, {
                  id: id
                });

              case 2:
                data = _context5.sent;
                return _context5.abrupt("return", !!_.get(data, "data.deleteDevice.device.id", null));

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x11, _x12, _x13) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
};

exports.reqRemove = reqRemove;

var startAuth = function startAuth(_ref10) {
  var deviceId = _ref10.deviceId;
  return (
    /*#__PURE__*/
    function () {
      var _ref11 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(dispatch) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", dispatch(showCredentialsModal({
                  deviceId: deviceId
                })));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x14) {
        return _ref11.apply(this, arguments);
      };
    }()
  );
};

exports.startAuth = startAuth;

var cancelAuth = function cancelAuth() {
  return (
    /*#__PURE__*/
    function () {
      var _ref12 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(dispatch) {
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", dispatch(hideCredentialsModal()));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x15) {
        return _ref12.apply(this, arguments);
      };
    }()
  );
};

exports.cancelAuth = cancelAuth;

var finishAuth = function finishAuth(_ref13) {
  var username = _ref13.username,
      password = _ref13.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref14 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(dispatch, getState, di) {
        var deviceId, socket;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                deviceId = selectors.getCredentialsModalDeviceId(getState());
                _context8.next = 3;
                return dispatch(hideCredentialsModal());

              case 3:
                socket = di.get("socket");

                if (socket && deviceId) {
                  socket.emit(_constants.default.messages.CONNECT_DEVICE, {
                    deviceId: deviceId,
                    username: username,
                    password: password
                  });
                }

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x16, _x17, _x18) {
        return _ref14.apply(this, arguments);
      };
    }()
  );
};

exports.finishAuth = finishAuth;

var doInteractiveAuth = function doInteractiveAuth() {
  var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref15$reply = _ref15.reply,
      reply = _ref15$reply === void 0 ? "" : _ref15$reply;

  return (
    /*#__PURE__*/
    function () {
      var _ref16 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(dispatch, getState, di) {
        var deviceId, socket;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                deviceId = selectors.getInteractiveModalDeviceId(getState());
                socket = di.get("socket");

                if (socket && deviceId) {
                  socket.emit(_constants.default.messages.FINISH_AUTH, {
                    deviceId: deviceId,
                    reply: reply
                  });
                }

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function (_x19, _x20, _x21) {
        return _ref16.apply(this, arguments);
      };
    }()
  );
};

exports.doInteractiveAuth = doInteractiveAuth;

var openTerminal = function openTerminal(_ref17) {
  var deviceId = _ref17.deviceId;
  return (
    /*#__PURE__*/
    function () {
      var _ref18 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee11(dispatch, getState, di) {
        var socket;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                socket = di.get("socket");

                if (socket) {
                  socket.emit(_constants.default.messages.CONNECT_TERMINAL, {
                    deviceId: deviceId
                  },
                  /*#__PURE__*/
                  function () {
                    var _ref19 = (0, _asyncToGenerator2.default)(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee10(response) {
                      return _regenerator.default.wrap(function _callee10$(_context10) {
                        while (1) {
                          switch (_context10.prev = _context10.next) {
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
                              return _context10.stop();
                          }
                        }
                      }, _callee10);
                    }));

                    return function (_x25) {
                      return _ref19.apply(this, arguments);
                    };
                  }());
                }

              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      return function (_x22, _x23, _x24) {
        return _ref18.apply(this, arguments);
      };
    }()
  );
};

exports.openTerminal = openTerminal;

var openBrowser = function openBrowser(_ref20) {
  var deviceId = _ref20.deviceId,
      host = _ref20.host,
      port = _ref20.port,
      isAuthNeeded = _ref20.isAuthNeeded,
      username = _ref20.username,
      password = _ref20.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref21 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee13(dispatch, getState, di) {
        var socket;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                port = (0, _parseInt2.default)(port);

                if (port) {
                  _context13.next = 3;
                  break;
                }

                return _context13.abrupt("return");

              case 3:
                socket = di.get("socket");

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
                    var _ref22 = (0, _asyncToGenerator2.default)(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee12(response) {
                      return _regenerator.default.wrap(function _callee12$(_context12) {
                        while (1) {
                          switch (_context12.prev = _context12.next) {
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
                              return _context12.stop();
                          }
                        }
                      }, _callee12);
                    }));

                    return function (_x29) {
                      return _ref22.apply(this, arguments);
                    };
                  }());
                }

              case 5:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      return function (_x26, _x27, _x28) {
        return _ref21.apply(this, arguments);
      };
    }()
  );
};

exports.openBrowser = openBrowser;

var disconnect = function disconnect(_ref23) {
  var deviceId = _ref23.deviceId;
  return (
    /*#__PURE__*/
    function () {
      var _ref24 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee14(dispatch, getState, di) {
        var socket;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                socket = di.get("socket");

                if (socket) {
                  socket.emit(_constants.default.messages.DISCONNECT_DEVICE, {
                    deviceId: deviceId
                  });
                }

              case 2:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      return function (_x30, _x31, _x32) {
        return _ref24.apply(this, arguments);
      };
    }()
  );
};

exports.disconnect = disconnect;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

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

/***/ "RR3x":
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

var _classnames = _interopRequireDefault(__webpack_require__("K2gz"));

var _reactIntl = __webpack_require__("k004");

var _TableCell = _interopRequireDefault(__webpack_require__("Ai9N"));

var _TableRow = _interopRequireDefault(__webpack_require__("iDDF"));

var _Checkbox = _interopRequireDefault(__webpack_require__("r6Lb"));

var _Button = _interopRequireDefault(__webpack_require__("Wh1t"));

var _IconButton = _interopRequireDefault(__webpack_require__("EmCc"));

var _LinearProgress = _interopRequireDefault(__webpack_require__("0zb8"));

var _Tooltip = _interopRequireDefault(__webpack_require__("vF8F"));

var _OpenInBrowser = _interopRequireDefault(__webpack_require__("JyUI"));

var _Language = _interopRequireDefault(__webpack_require__("D+hd"));

var _ExitToApp = _interopRequireDefault(__webpack_require__("RiyV"));

var styles = function styles() {
  return {
    checkboxRow: {
      whiteSpace: "nowrap"
    },
    checkboxField: {
      width: 1
    },
    checkbox: {
      padding: 0
    },
    tableButton: {
      marginLeft: "0.5rem"
    },
    progress: {
      display: "inline-block",
      width: 100,
      marginLeft: "0.5rem"
    },
    tooltip: {
      fontSize: "1rem"
    }
  };
};

exports.styles = styles;

var DeviceItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(DeviceItem, _React$Component);

  function DeviceItem() {
    (0, _classCallCheck2.default)(this, DeviceItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DeviceItem).apply(this, arguments));
  }

  (0, _createClass2.default)(DeviceItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_TableRow.default, null, _react.default.createElement(_TableCell.default, {
        padding: "checkbox",
        className: (0, _classnames.default)(this.props.classes.checkboxRow, this.props.isSelected && "selected"),
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
      }), this.props.info && this.props.info.isLoggedIn ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Tooltip.default, {
        disableFocusListener: true,
        classes: {
          tooltip: this.props.classes.tooltip
        },
        title: this.props.intl.formatMessage({
          id: "DEVICES_OPEN_TERMINAL_TIP"
        })
      }, _react.default.createElement("span", null, _react.default.createElement(_IconButton.default, {
        color: "inherit",
        classes: {
          root: this.props.classes.tableButton
        },
        onClick: function onClick() {
          return _this.props.onTerminal(_this.props.node.id);
        }
      }, _react.default.createElement(_OpenInBrowser.default, null)))), _react.default.createElement(_Tooltip.default, {
        disableFocusListener: true,
        classes: {
          tooltip: this.props.classes.tooltip
        },
        title: this.props.intl.formatMessage({
          id: "DEVICES_OPEN_BROWSER_TIP"
        })
      }, _react.default.createElement("span", null, _react.default.createElement(_IconButton.default, {
        color: "inherit",
        classes: {
          root: this.props.classes.tableButton
        },
        onClick: function onClick() {
          return _this.props.onProxy(_this.props.node.id);
        }
      }, _react.default.createElement(_Language.default, null)))), _react.default.createElement(_Tooltip.default, {
        disableFocusListener: true,
        classes: {
          tooltip: this.props.classes.tooltip
        },
        title: this.props.intl.formatMessage({
          id: "DEVICES_DISCONNECT_TIP"
        })
      }, _react.default.createElement("span", null, _react.default.createElement(_IconButton.default, {
        color: "inherit",
        classes: {
          root: this.props.classes.tableButton
        },
        onClick: function onClick() {
          return _this.props.onDisconnect(_this.props.node.id);
        }
      }, _react.default.createElement(_ExitToApp.default, null))))) : this.props.info && this.props.info.isLoggingIn ? _react.default.createElement("div", {
        className: this.props.classes.progress
      }, _react.default.createElement(_LinearProgress.default, null)) : _react.default.createElement(_Button.default, {
        size: "small",
        variant: "contained",
        color: "primary",
        disabled: !this.props.info,
        classes: {
          root: this.props.classes.tableButton
        },
        onClick: function onClick() {
          return _this.props.onConnect(_this.props.node.id);
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "DEVICES_CONNECT_BUTTON"
      }))), _react.default.createElement(_TableCell.default, {
        className: (0, _classnames.default)(this.props.isSelected && "selected"),
        component: "th",
        scope: "row"
      }, this.props.node.name), _react.default.createElement(_TableCell.default, {
        className: (0, _classnames.default)(this.props.isSelected && "selected")
      }, this.props.info ? this.props.info.address : this.props.intl.formatMessage({
        id: "DEVICES_OFFLINE_LABEL"
      })), _react.default.createElement(_TableCell.default, {
        className: (0, _classnames.default)(this.props.isSelected && "selected")
      }, "ssh -p ".concat(this.props.sshPort, " -R 22:localhost:22 -N ").concat(this.props.login + "_" + this.props.node.name, "@").concat(this.props.sshHost), !!(this.props.info && this.props.info.status) && _react.default.createElement("span", null, _react.default.createElement("br", null), this.props.info.status)));
    }
  }]);
  return DeviceItem;
}(_react.default.Component);

var _default = DeviceItem;
exports.default = _default;

/***/ }),

/***/ "RiyV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

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

/***/ "XyPp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.kill = exports.sendResize = exports.sendInput = exports.set = exports.clear = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var actions = _interopRequireWildcard(__webpack_require__("oTdc"));

var _state = __webpack_require__("EVP0");

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

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
      var _ref2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch, getState, di) {
        var socket;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                socket = di.get("socket");

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
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
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
      var _ref4 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState, di) {
        var socket;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                socket = di.get("socket");

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
        }, _callee2);
      }));

      return function (_x4, _x5, _x6) {
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
      var _ref6 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch, getState, di) {
        var socket;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                socket = di.get("socket");

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
        }, _callee3);
      }));

      return function (_x7, _x8, _x9) {
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
      var _ref8 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return dispatch(_state.historiesOperations.remove({
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
        }, _callee4);
      }));

      return function (_x10) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

exports.remove = remove;

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

/***/ "Ygce":
/***/ (function(module, exports) {

module.exports = require("graphql-relay");

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

/***/ "a9Mw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash bedd920006f01dc47f1d1b914e7c35fd
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteDeviceInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteDeviceMutationVariables = {|
  input: DeleteDeviceInput
|};
export type DeleteDeviceMutationResponse = {|
  +deleteDevice: ?{|
    +device: ?{|
      +id: string
    |}
  |}
|};
export type DeleteDeviceMutation = {|
  variables: DeleteDeviceMutationVariables,
  response: DeleteDeviceMutationResponse,
|};
*/

/*
mutation DeleteDeviceMutation(
  $input: DeleteDeviceInput!
) {
  deleteDevice(input: $input) {
    device {
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
    "type": "DeleteDeviceInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteDevice",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "DeleteDeviceInput!"
    }],
    "concreteType": "DeleteDevicePayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "device",
      "storageKey": null,
      "args": null,
      "concreteType": "Device",
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
      "name": "DeleteDeviceMutation",
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
      "name": "DeleteDeviceMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "DeleteDeviceMutation",
      "id": null,
      "text": "mutation DeleteDeviceMutation(\n  $input: DeleteDeviceInput!\n) {\n  deleteDevice(input: $input) {\n    device {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '414bfc5fc7aa344a813e486866e69592';
module.exports = node;

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "amB/":
/***/ (function(module, exports) {

module.exports = require("react-final-form");

/***/ }),

/***/ "bAhK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _DevicesPage.default;
  }
});

var _DevicesPage = _interopRequireDefault(__webpack_require__("1lAS"));

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

/***/ "bba7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("bAhK");


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

/***/ "cf5E":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.terminalsSelectors = exports.terminalsOperations = exports.terminalsTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__("ivBY"));

var terminalsTypes = _interopRequireWildcard(__webpack_require__("+1HE"));

exports.terminalsTypes = terminalsTypes;

var terminalsOperations = _interopRequireWildcard(__webpack_require__("XyPp"));

exports.terminalsOperations = terminalsOperations;

var terminalsSelectors = _interopRequireWildcard(__webpack_require__("vi2s"));

exports.terminalsSelectors = terminalsSelectors;
var _default = _reducers.default;
exports.default = _default;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dPWu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

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

var _Dialog = _interopRequireDefault(__webpack_require__("fEgT"));

var _DialogActions = _interopRequireDefault(__webpack_require__("1gBk"));

var _DialogContent = _interopRequireDefault(__webpack_require__("iTUb"));

var _DialogContentText = _interopRequireDefault(__webpack_require__("MbIc"));

var _DialogTitle = _interopRequireDefault(__webpack_require__("0Jp5"));

var _Grid = _interopRequireDefault(__webpack_require__("JQ2V"));

var _Button = _interopRequireDefault(__webpack_require__("Wh1t"));

var _forms = __webpack_require__("h7lg");

var _proxy = _interopRequireDefault(__webpack_require__("GO9A"));

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

var ProxyModal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ProxyModal, _React$Component);

  function ProxyModal(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ProxyModal);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ProxyModal).call(this, props));
    _this.submit = _this.submit.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(ProxyModal, [{
    key: "submit",
    value: function () {
      var _submit = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var host, port, isAuthNeeded, login, password, result;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                host = _ref.host, port = _ref.port, isAuthNeeded = _ref.isAuthNeeded, login = _ref.login, password = _ref.password;
                _context.next = 3;
                return this.props.onFinish(host, port, isAuthNeeded, login, password);

              case 3:
                result = _context.sent;

                if (!(result === true)) {
                  _context.next = 7;
                  break;
                }

                this.props.onCancel();
                return _context.abrupt("return", {});

              case 7:
                return _context.abrupt("return", result);

              case 8:
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
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.props.isOpen) return null;
      return _react.default.createElement(_forms.Form, {
        fields: _proxy.default,
        initialValues: {
          host: "localhost",
          port: "80"
        },
        onSubmit: this.submit,
        render: function render(_ref2) {
          var values = _ref2.values,
              submitting = _ref2.submitting,
              submitError = _ref2.submitError,
              handleSubmit = _ref2.handleSubmit;
          return _react.default.createElement(_Dialog.default, {
            maxWidth: "xs",
            open: true,
            onClose: _this2.props.onCancel
          }, _react.default.createElement(_DialogTitle.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
            id: "PROXY_MODAL_TITLE"
          }), ": ", _this2.props.name), !!submitError && _react.default.createElement(_DialogContent.default, null, _.map(_.isArray(submitError) ? submitError : [submitError], function (error, index) {
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
            name: "host",
            type: "text"
          })), _react.default.createElement(_Grid.default, {
            item: true,
            xs: 12
          }, _react.default.createElement(_forms.Field, {
            name: "port",
            type: "text"
          })), _react.default.createElement(_Grid.default, {
            item: true,
            xs: 12
          }, _react.default.createElement(_forms.Field, {
            name: "isAuthNeeded",
            type: "checkbox"
          })), _react.default.createElement(_Grid.default, {
            item: true,
            xs: 12
          }, _react.default.createElement(_forms.Field, {
            name: "login",
            type: "text",
            disabled: !values.isAuthNeeded
          })), _react.default.createElement(_Grid.default, {
            item: true,
            xs: 12
          }, _react.default.createElement(_forms.Field, {
            name: "password",
            type: "password",
            disabled: !values.isAuthNeeded
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
            id: "PROXY_MODAL_CANCEL"
          })), _react.default.createElement(_Button.default, {
            variant: "contained",
            color: "secondary",
            disabled: submitting,
            onClick: handleSubmit
          }, _react.default.createElement(_reactIntl.FormattedMessage, {
            id: "PROXY_MODAL_SUBMIT"
          }))));
        }
      });
    }
  }]);
  return ProxyModal;
}(_react.default.Component);

var _default = ProxyModal;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

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

/***/ "hY29":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash be6a9d2ac2d1bb568e51e308e7cbd573
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateDeviceInput = {|
  name?: ?string,
  password?: ?string,
  clientMutationId?: ?string,
|};
export type CreateDeviceMutationVariables = {|
  input: CreateDeviceInput
|};
export type CreateDeviceMutationResponse = {|
  +createDevice: ?{|
    +device: ?{|
      +id: string
    |}
  |}
|};
export type CreateDeviceMutation = {|
  variables: CreateDeviceMutationVariables,
  response: CreateDeviceMutationResponse,
|};
*/

/*
mutation CreateDeviceMutation(
  $input: CreateDeviceInput!
) {
  createDevice(input: $input) {
    device {
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
    "type": "CreateDeviceInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "createDevice",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "CreateDeviceInput!"
    }],
    "concreteType": "CreateDevicePayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "device",
      "storageKey": null,
      "args": null,
      "concreteType": "Device",
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
      "name": "CreateDeviceMutation",
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
      "name": "CreateDeviceMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "CreateDeviceMutation",
      "id": null,
      "text": "mutation CreateDeviceMutation(\n  $input: CreateDeviceInput!\n) {\n  createDevice(input: $input) {\n    device {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '5b6180498bb2d5d9c5511f79955145a7';
module.exports = node;

/***/ }),

/***/ "hbHv":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hsTe":
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
    return _DeviceItem.styles;
  }
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("9Pu4");

var _reactRelay = __webpack_require__("iuEU");

var _state = __webpack_require__("E4eY");

var _state2 = __webpack_require__("Yoxy");

var _state3 = __webpack_require__("DdWW");

var _DeviceItem = _interopRequireWildcard(__webpack_require__("RR3x"));

var _graphqlRelay = __webpack_require__("Ygce");

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    sshHost: _state.appSelectors.getSshHost(state),
    sshPort: _state.appSelectors.getSshPort(state),
    login: _state2.authSelectors.getLogin(state) || "",
    isSelected: _.includes(_state3.devicesSelectors.getSelected(state), props.node.id),
    info: _state3.devicesSelectors.getDeviceInfo(state, {
      deviceId: (0, _graphqlRelay.fromGlobalId)(props.node.id).id
    })
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onTerminal: function onTerminal(deviceId) {
      return dispatch(_state3.devicesOperations.openTerminal({
        deviceId: (0, _graphqlRelay.fromGlobalId)(deviceId).id
      }));
    },
    onConnect: function onConnect(deviceId) {
      return dispatch(_state3.devicesOperations.startAuth({
        deviceId: (0, _graphqlRelay.fromGlobalId)(deviceId).id
      }));
    },
    onDisconnect: function onDisconnect(deviceId) {
      return dispatch(_state3.devicesOperations.disconnect({
        deviceId: (0, _graphqlRelay.fromGlobalId)(deviceId).id
      }));
    }
  };
};

var DeviceItem = (0, _reactRelay.createFragmentContainer)((0, _styles.withStyles)(_DeviceItem.styles)((0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_DeviceItem.default))), {
  node: function node() {
    return __webpack_require__("GfNl");
  }
});
var _default = DeviceItem;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

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

/***/ "ivBY":
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

var _immutable = __webpack_require__("nuGg");

var types = _interopRequireWildcard(__webpack_require__("+1HE"));

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
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _now.default)();
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "jfPW":
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

/***/ "jjb1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "pageSize", {
  enumerable: true,
  get: function get() {
    return _DeviceList.pageSize;
  }
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _reactRelay = __webpack_require__("iuEU");

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("9Pu4");

var _state = __webpack_require__("E4eY");

var _state2 = __webpack_require__("DdWW");

var _DeviceList = _interopRequireWildcard(__webpack_require__("t5Xs"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    selected: _state2.devicesSelectors.getSelected(state),
    proxyOrigin: _state.appSelectors.getProxyOrigin(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSetCookie: function onSetCookie(name, value, days) {
      return dispatch(_state.appOperations.setCookie({
        name: name,
        value: value,
        days: days
      }));
    },
    onGetCookie: function onGetCookie(name) {
      return dispatch(_state.appOperations.getCookie({
        name: name
      }));
    },
    getToken: function getToken() {
      return dispatch(_state.appOperations.getToken());
    },
    onCreate: function onCreate() {
      return dispatch(_state2.devicesOperations.showEditModal());
    },
    onEdit: function onEdit() {
      return dispatch(_state2.devicesOperations.editFirstSelected());
    },
    onDelete: function onDelete(deviceId) {
      return dispatch(_state2.devicesOperations.reqRemove({
        id: deviceId
      }));
    },
    onSetSelected: function onSetSelected(deviceId, isSelected) {
      return dispatch(_state2.devicesOperations.setSelected({
        deviceId: deviceId,
        isSelected: isSelected
      }));
    },
    onSelectAll: function onSelectAll(deviceIds) {
      return dispatch(_state2.devicesOperations.selectAll({
        deviceIds: deviceIds
      }));
    },
    onDeselectAll: function onDeselectAll(exceptDeviceIds) {
      return dispatch(_state2.devicesOperations.deselectAll({
        exceptDeviceIds: exceptDeviceIds
      }));
    }
  };
};

var DeviceList = (0, _reactRelay.createRefetchContainer)((0, _styles.withStyles)(_DeviceList.styles)((0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_DeviceList.default))), {
  viewer: function viewer() {
    return __webpack_require__("sOFP");
  }
}, function () {
  return __webpack_require__("/1NK");
});
var _default = DeviceList;
exports.default = _default;

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "mQDy":
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

var types = _interopRequireWildcard(__webpack_require__("+Wwo"));

/* State Shape
Map({
  online: Map({
    deviceId: Map({
      name: String,
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
  selected: Set([String]), // IDs
  editModalDeviceId: String, // null when creating a new device
  isEditModalOpen: false,
  credentialsModalDeviceId: String,
  isCredentialsModalOpen: false,
})
*/
var nameReducer = function nameReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET:
      if (!_.isUndefined(action.name)) return action.name;
      break;
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
  name: nameReducer,
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

var selectedReducer = function selectedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Set)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_SELECTED:
      if (!_.isUndefined(action.deviceId) && !_.isUndefined(action.isSelected)) {
        // eslint-disable-next-line lodash/prefer-lodash-method
        if (state.includes(action.deviceId)) return state.delete(action.deviceId);else return state.add(action.deviceId);
      }

      break;

    case types.SELECT_ALL:
      if (!_.isUndefined(action.deviceIds)) return (0, _immutable.Set)(action.deviceIds);
      break;

    case types.DESELECT_ALL:
      if (_.isUndefined(action.exceptDeviceIds)) {
        return (0, _immutable.Set)([]);
      } else {
        return state.withMutations(function (set) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator2.default)(set.values()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;
              if (!_.includes(action.exceptDeviceIds, item)) set.delete(item);
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
  online: onlineReducer,
  selected: selectedReducer,
  editModalDeviceId: editModalDeviceIdReducer,
  isEditModalOpen: isEditModalOpenReducer,
  credentialsModalDeviceId: credentialsModalDeviceIdReducer,
  isCredentialsModalOpen: isCredentialsModalOpenReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

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

/***/ "njrX":
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
  return __webpack_require__("quj4");
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

/***/ "nuGg":
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "nzBE":
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
  return __webpack_require__("a9Mw");
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

/***/ "oOPP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "oTdc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.set = exports.clear = void 0;

var types = _interopRequireWildcard(__webpack_require__("+1HE"));

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "oUkC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getList = void 0;

var _immutable = __webpack_require__("nuGg");

var getList = function getList(state, props) {
  return state.getIn(["histories", props.historyId || props.terminalId]) || (0, _immutable.List)([]);
};

exports.getList = getList;

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

/***/ "quj4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash f6d3e057036815dbc7b7eacb0c5c13c6
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditDeviceInput = {|
  id: string,
  name?: ?string,
  password?: ?string,
  clientMutationId?: ?string,
|};
export type EditDeviceMutationVariables = {|
  input: EditDeviceInput
|};
export type EditDeviceMutationResponse = {|
  +editDevice: ?{|
    +device: ?{|
      +id: string
    |}
  |}
|};
export type EditDeviceMutation = {|
  variables: EditDeviceMutationVariables,
  response: EditDeviceMutationResponse,
|};
*/

/*
mutation EditDeviceMutation(
  $input: EditDeviceInput!
) {
  editDevice(input: $input) {
    device {
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
    "type": "EditDeviceInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "editDevice",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "EditDeviceInput!"
    }],
    "concreteType": "EditDevicePayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "device",
      "storageKey": null,
      "args": null,
      "concreteType": "Device",
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
      "name": "EditDeviceMutation",
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
      "name": "EditDeviceMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "EditDeviceMutation",
      "id": null,
      "text": "mutation EditDeviceMutation(\n  $input: EditDeviceInput!\n) {\n  editDevice(input: $input) {\n    device {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '0283ca05ed653a95ce0faafe0d36788b';
module.exports = node;

/***/ }),

/***/ "r6Lb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

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

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ "sOFP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ReaderFragment } from 'relay-runtime';
type DeviceItemContainer_node$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type DeviceListContainer_viewer$ref: FragmentReference;
export type DeviceListContainer_viewer = {|
  +devices: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +id: string,
        +$fragmentRefs: DeviceItemContainer_node$ref,
      |},
    |}>,
    +totalCount: ?number,
  |},
  +$refType: DeviceListContainer_viewer$ref,
|};
*/

var node
/*: ReaderFragment*/
= {
  "kind": "Fragment",
  "name": "DeviceListContainer_viewer",
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
    "name": "devices",
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
    "concreteType": "DeviceConnection",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "DeviceEdge",
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
        "concreteType": "Device",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }, {
          "kind": "FragmentSpread",
          "name": "DeviceItemContainer_node",
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
.hash = 'bfdfef44c86f4ae4830e639192ed748d';
module.exports = node;

/***/ }),

/***/ "t3At":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 4e5da4c69547eedbebfcabdb2c05bbf3
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditDeviceModalQueryVariables = {|
  currentId?: ?string
|};
export type EditDeviceModalQueryResponse = {|
  +viewer: ?{|
    +device: ?{|
      +id: string,
      +name: string,
    |}
  |}
|};
export type EditDeviceModalQuery = {|
  variables: EditDeviceModalQueryVariables,
  response: EditDeviceModalQueryResponse,
|};
*/

/*
query EditDeviceModalQuery(
  $currentId: ID
) {
  viewer {
    device(id: $currentId) {
      id
      name
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
    "name": "device",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "id",
      "variableName": "currentId",
      "type": "ID"
    }],
    "concreteType": "Device",
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
      "name": "name",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "EditDeviceModalQuery",
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
      "name": "EditDeviceModalQuery",
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
      "name": "EditDeviceModalQuery",
      "id": null,
      "text": "query EditDeviceModalQuery(\n  $currentId: ID\n) {\n  viewer {\n    device(id: $currentId) {\n      id\n      name\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'acd392df4b4b79c90f5a16271b749287';
module.exports = node;

/***/ }),

/***/ "t5Xs":
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

var _graphqlRelay = __webpack_require__("Ygce");

var _colorManipulator = __webpack_require__("oOPP");

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

var _Close = _interopRequireDefault(__webpack_require__("j08L"));

var _responsiveTable = _interopRequireDefault(__webpack_require__("HSb4"));

var _DeviceItemContainer = _interopRequireWildcard(__webpack_require__("hsTe"));

var _EditDeviceModalContainer = _interopRequireDefault(__webpack_require__("Jgo9"));

var _ProxyModalContainer = _interopRequireDefault(__webpack_require__("DaI5"));

var _ConfirmModalContainer = _interopRequireDefault(__webpack_require__("+fmV"));

var _Relay = __webpack_require__("JyB7");

var pageSize = 10;
exports.pageSize = pageSize;

var styles = function styles(theme) {
  return (0, _objectSpread2.default)({
    docs: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: (0, _colorManipulator.fade)(theme.palette.primary.main, 0.5),
      "& ul": {
        marginBottom: 0
      },
      "& li": {
        marginTop: "1rem"
      }
    },
    docsLayout: (0, _defineProperty2.default)({
      position: "relative",
      width: "100%",
      maxWidth: 1300 + 2 * theme.main.spacing,
      display: "flex",
      flexDirection: "row",
      justifyContent: "stretch",
      alignItems: "stretch",
      padding: theme.main.spacing
    }, theme.breakpoints.down("md"), {
      flexDirection: "column",
      padding: theme.main.spacing / 2,
      maxWidth: 1300 + theme.main.spacing
    }),
    closeButton: {
      position: "absolute",
      top: 0,
      right: 0
    },
    docFirst: {
      flex: 1
    },
    docSeparator: {
      width: 30,
      height: 30
    },
    docSecond: {
      flex: 1
    },
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
    statusColumn: {
      width: "40%"
    },
    grow: {
      flex: 1
    }
  }, (0, _DeviceItemContainer.styles)(theme));
};

exports.styles = styles;

var subscription = function subscription() {
  return __webpack_require__("3RZF");
};

var DeviceList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(DeviceList, _React$Component);

  function DeviceList(props) {
    var _this;

    (0, _classCallCheck2.default)(this, DeviceList);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DeviceList).call(this, props));
    _this.state = {
      pageSize: pageSize,
      pageNumber: 0,
      variables: {
        first: pageSize
      },
      isConfirmOpen: false,
      isProxyModalOpen: false,
      proxyModalDeviceId: null,
      isIntroDismissed: true
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
    _this.handleTextClose = _this.handleTextClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleProxyModalOpen = _this.handleProxyModalOpen.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleProxyModalClose = _this.handleProxyModalClose.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(DeviceList, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.unsubscribe = (0, _Relay.subscribe)({
                  subscription: subscription,
                  getToken: this.props.getToken,
                  environment: this.context,
                  callback: this.handleRefreshAction
                });
                _context.t0 = this;
                _context.next = 4;
                return this.props.onGetCookie(DeviceList.introDismissedKey);

              case 4:
                _context.t1 = _context.sent;

                if (_context.t1) {
                  _context.next = 7;
                  break;
                }

                _context.t1 = false;

              case 7:
                _context.t2 = _context.t1;
                _context.t3 = {
                  isIntroDismissed: _context.t2
                };

                _context.t0.setState.call(_context.t0, _context.t3);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var total = _.get(this.props.viewer, "devices.totalCount", 0);

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

      this.props.onDeselectAll(_.map(_.get(this.props.viewer, "devices.edges", []), "node.id"));
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
      return _.get(this.props.viewer, "devices.edges", []).length > 0;
    }
  }, {
    key: "isAllSelected",
    value: function isAllSelected() {
      var list = _.map(_.get(this.props.viewer, "devices.edges", []), "node.id");

      return _.difference(list, this.props.selected).length === 0;
    }
  }, {
    key: "isAllDeselected",
    value: function isAllDeselected() {
      return this.props.selected.length === 0;
    }
  }, {
    key: "isSelected",
    value: function isSelected(deviceId) {
      return _.includes(this.props.selected, deviceId);
    }
  }, {
    key: "handleToggleAll",
    value: function handleToggleAll() {
      var forceOff = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (forceOff || this.isAllSelected()) {
        this.props.onDeselectAll();
      } else {
        this.props.onSelectAll(_.map(_.get(this.props.viewer, "devices.edges", []), "node.id"));
      }
    }
  }, {
    key: "handleToggle",
    value: function handleToggle(deviceId) {
      this.props.onSetSelected(deviceId, !this.isSelected(deviceId));
    }
  }, {
    key: "handleCreateAction",
    value: function () {
      var _handleCreateAction = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.props.onCreate();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
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
      _regenerator.default.mark(function _callee3() {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.props.onEdit();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
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
      _regenerator.default.mark(function _callee4() {
        var _this3 = this;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.setState({
                  isConfirmOpen: false
                });
                _context4.next = 3;
                return _promise.default.all(_.map(this.props.selected, function (deviceId) {
                  return _this3.props.onDelete(deviceId);
                }));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
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
        if (pageNumber + 1 > Math.ceil(_.get(this.props.viewer, "devices.totalCount", 0) / this.state.pageSize)) {
          return;
        }

        variables.first = this.state.pageSize;
        variables.after = _.get(this.props.viewer, "devices.pageInfo.endCursor", null);
      } else {
        if (this.state.pageNumber <= 0) return;
        variables.last = this.state.pageSize;
        variables.before = _.get(this.props.viewer, "devices.pageInfo.startCursor", null);
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
    key: "handleTextClose",
    value: function handleTextClose() {
      this.setState({
        isIntroDismissed: true
      });
      this.props.onSetCookie(DeviceList.introDismissedKey, true);
    }
  }, {
    key: "handleProxyModalOpen",
    value: function handleProxyModalOpen(deviceId) {
      this.setState({
        isProxyModalOpen: true,
        proxyModalDeviceId: (0, _graphqlRelay.fromGlobalId)(deviceId).id
      });
    }
  }, {
    key: "handleProxyModalClose",
    value: function handleProxyModalClose() {
      this.setState({
        isProxyModalOpen: false
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
        id: "TITLE_DEVICES"
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
        id: "DEVICES_NAME_COLUMN"
      })), _react.default.createElement(_TableCell.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "DEVICES_ADDRESS_COLUMN"
      })), _react.default.createElement(_TableCell.default, {
        className: this.props.classes.statusColumn
      }))), _react.default.createElement(_TableBody.default, null, _.map(this.props.viewer.devices.edges, function (edge) {
        return _react.default.createElement(_DeviceItemContainer.default, {
          key: edge.cursor,
          node: edge.node,
          onToggle: _this6.handleToggle,
          onProxy: _this6.handleProxyModalOpen
        });
      }))), _react.default.createElement(_TablePagination.default, {
        rowsPerPageOptions: [10, 20, 30, 50, 100],
        component: "div",
        count: _.get(this.props.viewer, "devices.totalCount", 0),
        rowsPerPage: this.state.pageSize,
        page: this.state.pageNumber,
        onChangeRowsPerPage: this.handleChangeRowsPerPage,
        onChangePage: this.handleChangePage
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, !this.state.isIntroDismissed && _react.default.createElement("div", {
        className: this.props.classes.docs
      }, _react.default.createElement("div", {
        className: this.props.classes.docsLayout
      }, _react.default.createElement(_IconButton.default, {
        color: "inherit",
        className: this.props.classes.closeButton,
        onClick: this.handleTextClose
      }, _react.default.createElement(_Close.default, null)), " ", _react.default.createElement("div", {
        className: this.props.classes.docFirst
      }, _react.default.createElement(_Typography.default, {
        variant: "h5"
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "DEVICES_PAGE_WORKFLOW_TITLE"
      })), _react.default.createElement(_reactIntl.FormattedHTMLMessage, {
        id: "DEVICES_PAGE_WORKFLOW_HTML"
      })), _react.default.createElement("div", {
        className: this.props.classes.docSeparator
      }), _react.default.createElement("div", {
        className: this.props.classes.docSecond
      }, _react.default.createElement(_Typography.default, {
        variant: "h5"
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "DEVICES_PAGE_SECURITY_TITLE"
      })), _react.default.createElement(_reactIntl.FormattedHTMLMessage, {
        id: "DEVICES_PAGE_SECURITY_HTML",
        values: {
          origin: new URL(this.props.proxyOrigin).hostname
        }
      })))), _react.default.createElement("div", {
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
        id: "DEVICES_CREATE_BUTTON"
      })), _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        disabled: this.props.selected.length === 0,
        classes: {
          root: this.props.classes.button
        },
        onClick: this.handleEditAction
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "DEVICES_EDIT_BUTTON"
      })), _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        disabled: this.props.selected.length === 0,
        classes: {
          root: this.props.classes.button
        },
        onClick: this.handleDeleteAction
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "DEVICES_DELETE_BUTTON"
      }))), this.renderTable(), _react.default.createElement(_EditDeviceModalContainer.default, null), _react.default.createElement(_ConfirmModalContainer.default, {
        isOpen: this.state.isConfirmOpen,
        title: "DELETE_DEVICE_TITLE",
        text: "DELETE_DEVICE_TEXT",
        cancel: "DELETE_DEVICE_CANCEL",
        submit: "DELETE_DEVICE_SUBMIT",
        onCancel: this.handleCancelDelete,
        onSubmit: this.handleConfirmDelete
      }), _react.default.createElement(_ProxyModalContainer.default, {
        isOpen: this.state.isProxyModalOpen,
        deviceId: this.state.proxyModalDeviceId,
        onCancel: this.handleProxyModalClose
      })));
    }
  }]);
  return DeviceList;
}(_react.default.Component);

(0, _defineProperty2.default)(DeviceList, "contextType", _Relay.RelayContext);
(0, _defineProperty2.default)(DeviceList, "introDismissedKey", "devicesIntroDismissed");
var _default = DeviceList;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

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

/***/ "vF8F":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "vi2s":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTerminalAddress = exports.getTerminalName = exports.getTerminalMap = exports.hasTerminal = exports.getTerminalsMap = void 0;

var _state = __webpack_require__("DdWW");

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
  return _state.devicesSelectors.getAddress(state, {
    deviceId: terminal.get("deviceId")
  });
};

exports.getTerminalAddress = getTerminalAddress;

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

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ })

/******/ });