module.exports=function(e){var t=require("../../../ssr-module-cache.js");function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}},i=!0;try{e[r].call(o.exports,o,o.exports,n),i=!1}finally{i&&delete t[r]}return o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/_next/",n(n.s=2)}({"+Opk":function(e,t,n){"use strict";(function(e){var r=n("5Uuq"),o=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.signOut=t.signIn=t.setStatus=t.setCsrf=t.setCookie=void 0;var i=o(n("ln6h")),a=(o(n("eVuF")),o(n("+oT+"))),u=r(n("z+7x")),s=(r(n("p/Qe")),n("E4eY")),c=n("ciYs"),l=(o(n("o4p3")),o(n("1eZf"))),f=o(n("DxzU")),p=u.setCookie;t.setCookie=p;var d=u.setCsrf;t.setCsrf=d;var E=function(e){return function(){var t=(0,a.default)(i.default.mark(function t(n,r,o){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.next=4;break;case 3:e=t.sent;case 4:if(e){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,n(u.setStatus(e));case 8:0;case 9:case"end":return t.stop()}},t)}));return function(e,n,r){return t.apply(this,arguments)}}()};t.setStatus=E;t.signIn=function(t){var n=t.login,r=t.password;return o=(0,a.default)(i.default.mark(function t(o,a,u){var s;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.default)(u,{login:n,password:r});case 2:if(s=t.sent,!e.get(s,"data.signIn.success",!1)){t.next=7;break}return t.next=6,o(E());case 6:return t.abrupt("return",!0);case 7:return t.abrupt("return",(0,c.getFormErrors)(s,"APP_AUTH_FAILED"));case 8:case"end":return t.stop()}},t)})),function(e,t,n){return o.apply(this,arguments)};var o};t.signOut=function(){return e=(0,a.default)(i.default.mark(function e(t,n,r){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(s.appOperations.stop());case 2:return e.next=4,(0,f.default)(r);case 4:return window.location.href="/",e.abrupt("return",!0);case 6:case"end":return e.stop()}},e)})),function(t,n,r){return e.apply(this,arguments)};var e}}).call(this,n("YLtl"))},"+oT+":function(e,t,n){var r=n("eVuF");function o(e,t,n,o,i,a,u){try{var s=e[a](u),c=s.value}catch(e){return void n(e)}s.done?t(c):r.resolve(c).then(o,i)}e.exports=function(e){return function(){var t=this,n=arguments;return new r(function(r,i){var a=e.apply(t,n);function u(e){o(a,r,i,u,s,"next",e)}function s(e){o(a,r,i,u,s,"throw",e)}u(void 0)})}}},"+z5V":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SET_GOOGLE_MAPS_KEY=t.SET_STATUS=t.SET_CSRF=void 0;t.SET_CSRF="app/auth/SET_CSRF";t.SET_STATUS="app/auth/SET_STATUS";t.SET_GOOGLE_MAPS_KEY="app/auth/SET_GOOGLE_MAPS_KEY"},"/+P4":function(e,t,n){var r=n("Bhuq"),o=n("TRZx");function i(t){return e.exports=i=o?r:function(e){return e.__proto__||r(e)},i(t)}e.exports=i},"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/HRN":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"1eZf":function(e,t,n){"use strict";var r=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("ln6h")),i=r(n("eVuF")),a=r(n("+oT+")),u=n("iuEU"),s=function(){return n("bI0k")},c=function(){var e=(0,a.default)(o.default.mark(function e(t,n){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new i.default(function(e,r){(0,u.commitMutation)(t.get("env"),{mutation:s,variables:{input:n||{}},onCompleted:function(t,n){return e({data:t,errors:n})},onError:r})}));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}();t.default=c},2:function(e,t,n){e.exports=n("Y0NT")},"4mXO":function(e,t,n){e.exports=n("k1wZ")},"5Uuq":function(e,t,n){var r=n("Jo+v"),o=n("hfKm");e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=o&&r?r(e,n):{};i.get||i.set?o(t,n,i):t[n]=e[n]}return t.default=e,t}},"7Z6F":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isConnected=t.isStopped=t.isStarted=t.getLocale=t.getSelfRegistration=t.getSshPort=t.getSshHost=t.getProxyOrigin=t.getAppOrigin=t.getSubscriptionsServer=t.getStatusCode=t.getCreated=void 0;t.getCreated=function(e){return e.getIn(["app","created"])};t.getStatusCode=function(e){return e.getIn(["app","statusCode"])};t.getSubscriptionsServer=function(e){return e.getIn(["app","subscriptionsServer"])};t.getAppOrigin=function(e){return e.getIn(["app","appOrigin"])};t.getProxyOrigin=function(e){return e.getIn(["app","proxyOrigin"])};t.getSshHost=function(e){return e.getIn(["app","sshHost"])};t.getSshPort=function(e){return e.getIn(["app","sshPort"])};t.getSelfRegistration=function(e){return e.getIn(["app","selfRegistration"])};t.getLocale=function(e){return e.getIn(["app","locale"])};t.isStarted=function(e){return e.getIn(["app","isStarted"])};t.isStopped=function(e){return e.getIn(["app","isStopped"])};t.isConnected=function(e){return e.getIn(["app","isConnected"])}},"8L3H":function(e,t,n){"use strict";var r=n("5Uuq"),o=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.getToken=t.getCookie=t.setCookie=t.start=t.create=t.stop=t.setLocale=t.setConnected=t.setStatusCode=void 0;var i=o(n("ln6h")),a=o(n("+oT+")),u=r(n("gRch")),s=n("Yoxy"),c=u.setStatusCode;t.setStatusCode=c;var l=u.setConnected;t.setConnected=l;var f=u.setLocale;t.setLocale=f;var p=u.stop;t.stop=p;t.create=function(e){var t=e.statusCode,n=e.cookie,r=e.csrf,o=e.status,l=e.subscriptionsServer,f=e.appOrigin,p=e.proxyOrigin,d=e.sshHost,E=e.sshPort,T=e.selfRegistration;return _=(0,a.default)(i.default.mark(function e(a){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(u.create({subscriptionsServer:l,appOrigin:f,proxyOrigin:p,sshHost:d,sshPort:E,selfRegistration:T}));case 2:if(!t){e.next=5;break}return e.next=5,a(c({code:t}));case 5:if(!n){e.next=8;break}return e.next=8,a(s.authOperations.setCookie({cookie:n}));case 8:if(!r){e.next=11;break}return e.next=11,a(s.authOperations.setCsrf({csrf:r}));case 11:if(!o){e.next=14;break}return e.next=14,a(s.authOperations.setStatus(o));case 14:case"end":return e.stop()}},e)})),function(e){return _.apply(this,arguments)};var _};t.start=function(){return e=(0,a.default)(i.default.mark(function e(t){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(s.authOperations.setStatus());case 2:return e.abrupt("return",t(u.start()));case 3:case"end":return e.stop()}},e)})),function(t){return e.apply(this,arguments)};var e};t.setCookie=function(e){var t=e.name,n=e.value,r=e.days;return o=(0,a.default)(i.default.mark(function e(o,a,u){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u.get("cookie").set(t,n,r);case 1:case"end":return e.stop()}},e)})),function(e,t,n){return o.apply(this,arguments)};var o};t.getCookie=function(e){var t=e.name;return n=(0,a.default)(i.default.mark(function e(n,r,o){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.get("cookie").get(t));case 1:case"end":return e.stop()}},e)})),function(e,t,r){return n.apply(this,arguments)};var n};t.getToken=function(){return e=(0,a.default)(i.default.mark(function e(t,n,r){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r.get("fetcher").getToken());case 1:case"end":return e.stop()}},e)})),function(t,n,r){return e.apply(this,arguments)};var e}},"9Pu4":function(e,t){e.exports=require("@material-ui/core/styles")},Avpf:function(e,t,n){var r=n("Jo+v"),o=n("4mXO"),i=n("pLtp"),a=n("xHqa");e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},u=i(n);"function"==typeof o&&(u=u.concat(o(n).filter(function(e){return r(n,e).enumerable}))),u.forEach(function(t){a(e,t,n[t])})}return e}},Bhuq:function(e,t,n){e.exports=n("/+oN")},BlHF:function(e,t){e.exports=require("react-intl/locale-data/en.js")},Cg2A:function(e,t,n){e.exports=n("y6vh")},DxzU:function(e,t,n){"use strict";var r=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("ln6h")),i=r(n("eVuF")),a=r(n("+oT+")),u=n("iuEU"),s=function(){return n("RJ40")},c=function(){var e=(0,a.default)(o.default.mark(function e(t,n){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new i.default(function(e,r){(0,u.commitMutation)(t.get("env"),{mutation:s,variables:{input:n||{}},onCompleted:function(t,n){return e({data:t,errors:n})},onError:r})}));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}();t.default=c},E4eY:function(e,t,n){"use strict";var r=n("5Uuq"),o=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.appSelectors=t.appOperations=t.appTypes=t.default=void 0;var i=o(n("FE/x")),a=r(n("rz8+"));t.appTypes=a;var u=r(n("8L3H"));t.appOperations=u;var s=r(n("7Z6F"));t.appSelectors=s;var c=i.default;t.default=c},EY6e:function(e,t,n){var r=n("4mXO"),o=n("L2E4");e.exports=function(e,t){if(null==e)return{};var n,i,a=o(e,t);if(r){var u=r(e);for(i=0;i<u.length;i++)n=u[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},"FE/x":function(e,t,n){"use strict";(function(e){var r=n("5Uuq"),o=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("Cg2A")),a=n("RGyf"),u=r(n("rz8+")),s=o(n("fXLo")),c=(0,a.combineReducers)({created:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,i.default)(),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u.CREATE:if(!e.isUndefined(n.created))return n.created}return t},locale:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.default.defaultLocale,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u.SET_LOCALE:if(!e.isUndefined(n.locale))return n.locale}return t},statusCode:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u.SET_STATUS_CODE:if(e.isFinite(n.code)&&n.code>=200)return n.code}return t},subscriptionsServer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u.CREATE:if(!e.isUndefined(n.subscriptionsServer))return n.subscriptionsServer}return t},appOrigin:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"http://localhost",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u.CREATE:if(!e.isUndefined(n.appOrigin))return n.appOrigin}return t},proxyOrigin:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"http://localhost",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u.CREATE:if(!e.isUndefined(n.proxyOrigin))return n.proxyOrigin}return t},sshHost:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"localhost",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u.CREATE:if(!e.isUndefined(n.sshHost))return n.sshHost}return t},sshPort:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:22,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u.CREATE:if(!e.isUndefined(n.sshPort))return n.sshPort}return t},selfRegistration:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u.CREATE:if(!e.isUndefined(n.selfRegistration))return n.selfRegistration}return t},isStarted:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case u.START:return!0}return e},isStopped:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case u.STOP:return!0}return e},isConnected:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u.SET_CONNECTED:if(!e.isUndefined(n.isConnected))return n.isConnected}return t}});t.default=c}).call(this,n("YLtl"))},"J3/a":function(e,t){e.exports=require("core-js/library/fn/get-iterator")},"Jo+v":function(e,t,n){e.exports=n("Z6Kq")},K47E:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},KI45:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},L2E4:function(e,t,n){var r=n("pLtp");e.exports=function(e,t){if(null==e)return{};var n,o,i={},a=r(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}},LZqe:function(e,t){e.exports=require("http-status-codes")},MWqi:function(e,t){e.exports=require("reselect")},N9n2:function(e,t,n){var r=n("SqZg"),o=n("vjea");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=r(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},NFhO:function(e,t){e.exports=require("redux-form/immutable")},RGyf:function(e,t){e.exports=require("redux-immutable")},RJ40:function(e,t,n){"use strict";var r,o,i={kind:"Request",fragment:{kind:"Fragment",name:"SignOutMutation",type:"Mutation",metadata:null,argumentDefinitions:r=[{kind:"LocalArgument",name:"input",type:"SignOutInput!",defaultValue:null}],selections:o=[{kind:"LinkedField",alias:null,name:"signOut",storageKey:null,args:[{kind:"Variable",name:"input",variableName:"input",type:"SignOutInput!"}],concreteType:"SignOutPayload",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"success",args:null,storageKey:null}]}]},operation:{kind:"Operation",name:"SignOutMutation",argumentDefinitions:r,selections:o},params:{operationKind:"mutation",name:"SignOutMutation",id:null,text:"mutation SignOutMutation(\n  $input: SignOutInput!\n) {\n  signOut(input: $input) {\n    success\n  }\n}\n",metadata:{}}};i.hash="417ec230bfa986933ff799e6fab9074c",e.exports=i},SqZg:function(e,t,n){e.exports=n("o5io")},T56u:function(e,t,n){"use strict";var r=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("/HRN")),i=r(n("WaGi")),a=r(n("ZDA2")),u=r(n("/+P4")),s=r(n("N9n2")),c=r(n("cDcd")),l=(r(n("rf6O")),r(n("Y3Ay"))),f=function(e){function t(){return(0,o.default)(this,t),(0,a.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return c.default.createElement(l.default,{statusCode:this.props.statusCode})}}]),t}(c.default.Component);t.default=f},TRZx:function(e,t,n){e.exports=n("Wk4r")},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},TXK0:function(e,t){e.exports=require("moment-timezone")},Ty80:function(e,t,n){"use strict";var r=n("TXK0");e.exports=r},WaGi:function(e,t,n){var r=n("hfKm");function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r(e,o.key,o)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XVgq:function(e,t,n){e.exports=n("gHn/")},XXOK:function(e,t,n){e.exports=n("J3/a")},Y0NT:function(e,t,n){"use strict";var r=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=r(n("wA6z"))},Y3Ay:function(e,t,n){"use strict";var r=n("5Uuq");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("k004"),i=n("9Pu4"),a=r(n("p198")),u=(0,i.withStyles)(a.styles)((0,o.injectIntl)(a.default));t.default=u},YLtl:function(e,t){e.exports=require("lodash")},Yoxy:function(e,t,n){"use strict";var r=n("5Uuq"),o=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.authSelectors=t.authOperations=t.authTypes=t.default=void 0;var i=o(n("xbgq")),a=r(n("+z5V"));t.authTypes=a;var u=r(n("+Opk"));t.authOperations=u;var s=r(n("p/Qe"));t.authSelectors=s;var c=i.default;t.default=c},Z6Kq:function(e,t){e.exports=require("core-js/library/fn/object/get-own-property-descriptor")},Z7t5:function(e,t,n){e.exports=n("vqFK")},ZDA2:function(e,t,n){var r=n("iZP3"),o=n("K47E");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},aC71:function(e,t){e.exports=require("core-js/library/fn/promise")},bI0k:function(e,t,n){"use strict";var r,o,i={kind:"Request",fragment:{kind:"Fragment",name:"SignInMutation",type:"Mutation",metadata:null,argumentDefinitions:r=[{kind:"LocalArgument",name:"input",type:"SignInInput!",defaultValue:null}],selections:o=[{kind:"LinkedField",alias:null,name:"signIn",storageKey:null,args:[{kind:"Variable",name:"input",variableName:"input",type:"SignInInput!"}],concreteType:"SignInPayload",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"success",args:null,storageKey:null}]}]},operation:{kind:"Operation",name:"SignInMutation",argumentDefinitions:r,selections:o},params:{operationKind:"mutation",name:"SignInMutation",id:null,text:"mutation SignInMutation(\n  $input: SignInInput!\n) {\n  signIn(input: $input) {\n    success\n  }\n}\n",metadata:{}}};i.hash="153fa344d90b87f0fcb641bc7a1ed120",e.exports=i},cDcd:function(e,t){e.exports=require("react")},ciYs:function(e,t,n){"use strict";(function(e){var r=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.getFormErrors=void 0;var o=r(n("ln6h")),i=r(n("+oT+")),a=r(n("EY6e")),u=r(n("XXOK")),s=r(n("cDcd")),c=n("nuGg"),l=n("h74D"),f=n("NFhO"),p=n("eLzx"),d=n("mSjk");t.getFormErrors=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"OPERATION_FAILED",r={},o=e.get(t,"errors")||[],i=!0,a=!1,s=void 0;try{for(var c,l=(0,u.default)(o);!(i=(c=l.next()).done);i=!0){var f=c.value;f&&"E_VALIDATION"===f.code?e.merge(r,f.details):r._error=(r._error||[]).concat([f.message])}}catch(e){a=!0,s=e}finally{try{i||null==l.return||l.return()}finally{if(a)throw s}}return e.keys(r).length||(r={_error:n}),r};t.default=function(t,n,r,u){var E,T=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},_=T.destroyOnUnmount,v=(0,a.default)(T,["destroyOnUnmount"]),g=(0,l.connect)(function(r,o){return e.assign(n?n(r,o):{},{getValue:function(e){var n=(0,f.getFormValues)(t.formName)(r);return e?n&&n.get(e):n||(0,c.Map)()},getError:function(e){var n=(0,f.getFormAsyncErrors)(t.formName)(r);return e?n&&n.get(e):n||(0,c.Map)()}})},function(n,a){return e.assign(r?r(n,a):{},{dispatch:n,updateValidation:(u=(0,i.default)(o.default.mark(function e(r){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n((0,p.startAsyncValidation)(t.formName));case 2:return e.next=4,n((0,p.stopAsyncValidation)(t.formName,r));case 4:case"end":return e.stop()}},e)})),function(e){return u.apply(this,arguments)})});var u},u,e.keys(v).length?v:void 0)((E=(0,f.reduxForm)({form:t.formName,destroyOnUnmount:_||!0,pure:!1,shouldAsyncValidate:function(t){var n=t.trigger;return e.includes(["blur","submit"],n)},onSubmit:t.onSubmit.bind(t),onSubmitFail:t.onSubmitFail.bind(t),onSubmitSuccess:t.onSubmitSuccess.bind(t),onChange:t.onChange.bind(t),asyncValidate:t.onValidate.bind(t)})(t),function(e){return s.default.createElement(d.FormNameContext.Provider,{value:t.formName},s.default.createElement(d.FormFieldsContext.Provider,{value:t.fields},s.default.createElement(E,e)))}));return g.formName=t.formName,g}}).call(this,n("YLtl"))},cu1A:function(e,t){e.exports=require("regenerator-runtime")},eLzx:function(e,t){e.exports=require("redux-form")},eVuF:function(e,t,n){e.exports=n("aC71")},fXLo:function(e,t,n){"use strict";(function(t){var r=n("KI45")(n("XXOK"));e.exports={defaultLocale:"en",locales:["en"],flags:{en:"US"},names:{en:"English"},messages:{en:function(e){var n={},o=!0,i=!1,a=void 0;try{for(var u,s=(0,r.default)(t.keys(e));!(o=(u=s.next()).done);o=!0){var c=u.value;n[c]=t.isArray(e[c])?e[c].join(""):e[c]}}catch(e){i=!0,a=e}finally{try{o||null==s.return||s.return()}finally{if(i)throw a}}return n}(n("vmr9"))},getLocaleData:function(){return[n("BlHF")]}}}).call(this,n("YLtl"))},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},gRch:function(e,t,n){"use strict";(function(e){var r=n("5Uuq"),o=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.setLocale=t.setConnected=t.setStatusCode=t.stop=t.start=t.create=void 0;var i=o(n("Ty80")),a=r(n("rz8+"));t.create=function(t){return e.assign({type:a.CREATE},t)};t.start=function(){return{type:a.START}};t.stop=function(){return{type:a.STOP}};t.setStatusCode=function(e){var t=e.code;return{type:a.SET_STATUS_CODE,code:t}};t.setConnected=function(e){var t=e.isConnected;return{type:a.SET_CONNECTED,isConnected:t}};t.setLocale=function(e){var t=e.locale;return i.default.locale(t),{type:a.SET_LOCALE,locale:t}}}).call(this,n("YLtl"))},h74D:function(e,t){e.exports=require("react-redux")},hfKm:function(e,t,n){e.exports=n("TUA0")},iZP3:function(e,t,n){var r=n("XVgq"),o=n("Z7t5");function i(e){return(i="function"==typeof o&&"symbol"==typeof r?function(e){return typeof e}:function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":typeof e})(e)}function a(t){return"function"==typeof o&&"symbol"===i(r)?e.exports=a=function(e){return i(e)}:e.exports=a=function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":i(e)},a(t)}e.exports=a},iuEU:function(e,t){e.exports=require("react-relay")},k004:function(e,t){e.exports=require("react-intl")},k1wZ:function(e,t){e.exports=require("core-js/library/fn/object/get-own-property-symbols")},ln6h:function(e,t,n){e.exports=n("cu1A")},mSjk:function(e,t,n){"use strict";var r=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.FormFieldsContext=t.FormNameContext=void 0;var o=r(n("cDcd")),i=o.default.createContext({});t.FormNameContext=i;var a=o.default.createContext({});t.FormFieldsContext=a},nuGg:function(e,t){e.exports=require("immutable")},o4p3:function(e,t,n){"use strict";var r={AUTHENTICATED:"AUTHENTICATED",ADMIN:"ADMIN"};e.exports={apiBase:"/api",graphqlBase:"/graphql",socketsBase:"/ws",roles:r,pages:{"/":{page:"/"},"/devices":{page:"/devices",icon:"devices",menu:"MENU_DEVICES",title:"TITLE_DEVICES",roles:[r.AUTHENTICATED]},"/terminal":{page:"/terminal",icon:"terminal",roles:[r.AUTHENTICATED]},"/browser":{page:"/browser",icon:"browser",roles:[r.AUTHENTICATED]},"/users":{page:"/users",icon:"users",menu:"MENU_USERS",title:"TITLE_USERS",roles:[r.ADMIN]}},messages:{CONNECT_DEVICE:"CONNECT_DEVICE",FINISH_AUTH:"FINISH_AUTH",DISCONNECT_DEVICE:"DISCONNECT_DEVICE",CONNECT_TERMINAL:"CONNECT_TERMINAL",TERMINAL_INPUT:"TERMINAL_INPUT",TERMINAL_RESIZED:"TERMINAL_RESIZED",DISCONNECT_TERMINAL:"DISCONNECT_TERMINAL",CONNECT_BROWSER:"CONNECT_BROWSER",HELLO:"HELLO",SET_STATUS:"SET_STATUS",SET_DEVICE:"SET_DEVICE",DELETE_DEVICE:"DELETE_DEVICE",SET_TERMINAL:"SET_TERMINAL",DELETE_TERMINAL:"DELETE_TERMINAL",HISTORY:"HISTORY"},events:{FONTS_LOADED:"FONTS_LOADED"},historySize:30,commandPort:22}},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},"p/Qe":function(e,t,n){"use strict";var r=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.getRoles=t.getLogin=t.isAdmin=t.isAuthenticated=t.getCsrf=void 0;var o=n("MWqi"),i=r(n("o4p3"));t.getCsrf=function(e){return e.getIn(["auth","csrf"])};t.isAuthenticated=function(e){return e.getIn(["auth","isAuthenticated"])};t.isAdmin=function(e){return e.getIn(["auth","roles"]).includes(i.default.roles.ADMIN)};t.getLogin=function(e){return e.getIn(["auth","login"])};var a=(0,o.createSelector)(function(e){return e.getIn(["auth","roles"])},function(e){return e.toJS()});t.getRoles=a},p198:function(e,t,n){"use strict";var r=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=r(n("/HRN")),i=r(n("WaGi")),a=r(n("ZDA2")),u=r(n("/+P4")),s=r(n("N9n2")),c=r(n("xHqa")),l=r(n("cDcd")),f=(r(n("rf6O")),n("k004")),p=r(n("LZqe"));t.styles=function(e){return{layout:(0,c.default)({width:"100%",maxWidth:1300+2*e.main.spacing,flex:1,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",padding:e.main.spacing},e.breakpoints.down("md"),{flexDirection:"column",padding:e.main.spacing/2,maxWidth:1300+e.main.spacing}),code:(0,c.default)({fontSize:"300%",textShadow:"2px 2px 4px #000000",padding:"0.5rem 2rem",color:"1px solid ".concat(e.palette.text.primary),borderRight:"1px solid ".concat(e.palette.text.disabled)},e.breakpoints.down("md"),{borderRight:"none"}),text:{fontSize:"200%",textShadow:"2px 2px 4px #000000",padding:"0.5rem 2rem",color:"1px solid ".concat(e.palette.text.secondary)},linkWrapper:{fontSize:"1rem",marginTop:"1rem"},link:{color:e.palette.text.primary,textDecoration:"none","&:hover":{color:"#ffffff"}}}};var d=function(e){function t(){return(0,o.default)(this,t),(0,a.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:"getCode",value:function(){return this.props.error?this.props.intl.formatMessage({id:"ERROR"}):this.props.statusCode&&200!==this.props.statusCode?this.props.statusCode:500}},{key:"getText",value:function(){return this.props.error?this.props.error.message:p.default.getStatusText(this.getCode())}},{key:"render",value:function(){return l.default.createElement("div",{className:this.props.classes.layout},l.default.createElement("div",{className:this.props.classes.code},this.getCode()),l.default.createElement("div",{className:this.props.classes.text},this.getText(),l.default.createElement("div",{className:this.props.classes.linkWrapper},">  ",l.default.createElement("a",{href:"/",className:this.props.classes.link},l.default.createElement(f.FormattedMessage,{id:"ERROR_GO_HOME_LINK"})))))}}]),t}(l.default.Component);t.default=d},pLtp:function(e,t,n){e.exports=n("qJj/")},"qJj/":function(e,t){e.exports=require("core-js/library/fn/object/keys")},rf6O:function(e,t){e.exports=require("prop-types")},"rz8+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SET_LOCALE=t.SET_CONNECTED=t.SET_STATUS_CODE=t.STOP=t.START=t.CREATE=void 0;t.CREATE="app/app/CREATE";t.START="app/app/START";t.STOP="app/app/STOP";t.SET_STATUS_CODE="app/app/SET_STATUS_CODE";t.SET_CONNECTED="app/app/SET_CONNECTED";t.SET_LOCALE="app/app/SET_LOCALE"},vjea:function(e,t,n){var r=n("TRZx");function o(t,n){return e.exports=o=r||function(e,t){return e.__proto__=t,e},o(t,n)}e.exports=o},vmr9:function(e){e.exports={MENU_DEVICES:"Device List",TITLE_DEVICES:"Remote Configurator",MENU_DEVICE:"Device",TITLE_DEVICE:"Device",MENU_USERS:"Users",TITLE_USERS:"Users",SIDEBAR_SIGN_OUT_LINK:"Sign Out",DEVICES_PAGE_WORKFLOW_TITLE:"Workflow",DEVICES_PAGE_WORKFLOW_HTML:["<ul>","<li>Create a device with unique name and a password. You will be provided with a shell command you can then"," copy-paste into the terminal of your device.</li>","<li>Enter the same password you used to create the device and the device will appear in the list below after"," connecting to this server. All further interaction with the device will be done through this encrypted SSH channel.</li>",'<li>Press "SIGN IN" button to sign in into your device. Please use the same user under which you typed the <strong>ssh</strong>',' command above or you might get "Host key verification failed" error otherwise.</li>',"<li>When signed in you can then open an in-browser terminal session to this device under the credentials you used"," or create a private HTTP proxy for any port on your device</li>","</ul>"],DEVICES_PAGE_SECURITY_TITLE:"Security Considerations",DEVICES_PAGE_SECURITY_HTML:["<ul>","<li>Credentials you use to sign in into your device are readable to this server. Although these credentials are never"," stored to disk and only live in the server's memory while the session exists, a compromised server might have a"," different idea what to do with your information.</li>","<li>A more secure apporoach would be to set up your own server (preferably after inspecting the source code) so you"," trust the credentials only to a reliable server.</li>","<li>Some web services protect their users from phishing sites, for which they detect and prevent proxies and &lt;iframe&gt;"," tags from working. You will have to configure an exception for the server in such case. For Webmin, you can achieve"," this by adding to the end of <strong>/etc/webmin/config</strong>: <pre>referers={origin}</pre></li>","</ul>"],DEVICES_NAME_COLUMN:"Name",DEVICES_ADDRESS_COLUMN:"Address",DEVICES_CREATE_BUTTON:"Create Device",DEVICES_EDIT_BUTTON:"Edit Device",DEVICES_DELETE_BUTTON:"Delete Devices",DEVICES_CONNECT_BUTTON:"Sign In",DEVICES_OFFLINE_LABEL:"Offline",DEVICES_OPEN_TERMINAL_TIP:"Open terminal",DEVICES_OPEN_BROWSER_TIP:"Open browser",DEVICES_DISCONNECT_TIP:"Disconnect",EDIT_DEVICE_TITLE_CREATE:"Create Device",EDIT_DEVICE_TITLE_EDIT:"Edit Device",EDIT_DEVICE_NAME_LABEL:"Name",EDIT_DEVICE_PASSWORD_LABEL:"Password",EDIT_DEVICE_FAILED:"Form submission failed",EDIT_DEVICE_SUBMIT:"Submit",EDIT_DEVICE_CANCEL:"Cancel",DELETE_DEVICE_TITLE:"Delete Devices",DELETE_DEVICE_TEXT:"Delete selected devices?",DELETE_DEVICE_CANCEL:"Cancel",DELETE_DEVICE_SUBMIT:"Delete",PROXY_TPL_TITLE:"<h1>Proxy Reporting</h1>",PROXY_TPL_MESSAGE:"<h3>Could not fetch the page</h3>",PROXY_TPL_403:"<p>Access denied</p>",PROXY_TPL_404:"<p>Try to reopen this page from the Device List</p>",PROXY_TPL_502:"<p>Looks like nobody is listening on this port</p>",PROXY_MODAL_TITLE:"HTTP Proxy",PROXY_HOST_LABEL:"Which host to connect to?",PROXY_PORT_LABEL:"Which port to proxy?",PROXY_AUTH_LABEL:"Remote service needs HTTP BASIC AUTH",PROXY_LOGIN_LABEL:"Login",PROXY_PASSWORD_LABEL:"Password",PROXY_MODAL_CANCEL:"Cancel",PROXY_MODAL_SUBMIT:"Submit",USERS_LOGIN_COLUMN:"Login",USERS_ROLES_COLUMN:"Roles",USERS_CREATE_BUTTON:"Create User",USERS_EDIT_BUTTON:"Edit User",USERS_DELETE_BUTTON:"Delete Users",EDIT_USER_TITLE_CREATE:"Create User",EDIT_USER_TITLE_EDIT:"Edit User",EDIT_USER_LOGIN_LABEL:"Login",EDIT_USER_PASSWORD_LABEL:"Password",EDIT_USER_AUTHENTICATED_LABEL:"Authenticated",EDIT_USER_ADMIN_LABEL:"Administrator",EDIT_USER_CANCEL:"Cancel",EDIT_USER_SUBMIT:"Submit",EDIT_USER_FAILED:"An error occured",DELETE_USER_TITLE:"Delete Users",DELETE_USER_TEXT:"Delete selected users?",DELETE_USER_CANCEL:"Cancel",DELETE_USER_SUBMIT:"Delete",TERMINAL_CONNECTING_LABEL:"Connecting...",TERMINAL_NOT_CONNECTED_LABEL:"Not connected",APP_AUTH_TITLE:"Authentication",APP_AUTH_SELF_REGISTRATION_TITLE:"Self-registration enabled",APP_AUTH_SELF_REGISTRATION_MESSAGE:"If you are a new user, you can use any free login and the password you want to sign in",APP_AUTH_LOGIN_LABEL:"Login",APP_AUTH_PASSWORD_LABEL:"Password",APP_AUTH_SUBMIT:"Sign In",APP_AUTH_FAILED:"Invalid credentials",SETUP_AUTH_TITLE:"Authentication",SETUP_AUTH_LOGIN_LABEL:"Login",SETUP_AUTH_PASSWORD_LABEL:"Password",SETUP_AUTH_CANCEL:"Cancel",SETUP_AUTH_SUBMIT:"Submit",KEYBOARD_AUTH_TITLE:"Authentication",KEYBOARD_AUTH_REPLY_LABEL:"Response",KEYBOARD_AUTH_CANCEL:"Cancel",KEYBOARD_AUTH_SUBMIT:"Submit",OPERATION_FAILED:"Operations failed",ERROR_GO_HOME_LINK:"Reload the start page",ERROR_FIELD_REQUIRED:"This field is required",ERROR_INVALID_LOGIN:"Login should start with a letter and contain letters and digits only",ERROR_INVALID_PASSWORD:"Password must be at least 6 characters long"}},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")},wA6z:function(e,t,n){"use strict";var r=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("h74D"),i=n("E4eY"),a=r(n("T56u")),u=(0,o.connect)(function(e){return{statusCode:i.appSelectors.getStatusCode(e)}})(a.default);u.getInitialProps=a.default.getInitialProps;var s=u;t.default=s},xHqa:function(e,t,n){var r=n("hfKm");e.exports=function(e,t,n){return t in e?r(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},xbgq:function(e,t,n){"use strict";(function(e){var r=n("5Uuq");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("nuGg"),i=n("RGyf"),a=r(n("+z5V")),u=(0,i.combineReducers)({csrf:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a.SET_CSRF:if(!e.isUndefined(n.csrf))return n.csrf}return t},isAuthenticated:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a.SET_STATUS:if(!e.isUndefined(n.isAuthenticated))return n.isAuthenticated}return t},login:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a.SET_STATUS:if(!e.isUndefined(n.login))return n.login}return t},roles:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,o.List)([]),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a.SET_STATUS:if(!e.isUndefined(n.roles))return(0,o.fromJS)(n.roles)}return t}});t.default=u}).call(this,n("YLtl"))},y6vh:function(e,t){e.exports=require("core-js/library/fn/date/now")},"z+7x":function(e,t,n){"use strict";var r=n("5Uuq"),o=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.setStatus=t.setCsrf=void 0;var i=o(n("Avpf")),a=r(n("+z5V"));t.setCsrf=function(e){var t=e.csrf;return{type:a.SET_CSRF,csrf:t}};t.setStatus=function(e){return(0,i.default)({type:a.SET_STATUS},e)}}});