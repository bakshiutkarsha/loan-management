!function t(e,r,o){function n(i,a){if(!r[i]){if(!e[i]){var f="function"==typeof require&&require;if(!a&&f)return f(i,!0);if(u)return u(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var O=r[i]={exports:{}};e[i][0].call(O.exports,function(t){var r=e[i][1][t];return n(r?r:t)},O,O.exports,t,e,r,o)}return r[i].exports}for(var u="function"==typeof require&&require,i=0;i<o.length;i++)n(o[i]);return n}({1:[function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var n=t("./common/routeHandler"),u=o(n),i=t("./common/constants"),a=o(i);!function(){var t={};t[a["default"].TO_LOAN]=u["default"].toLoan,t[a["default"].TO_AMMORTIZATION]=u["default"].toAmmortization,t["*"]=u["default"].toLoan,routie(t)}()},{"./common/constants":2,"./common/routeHandler":3}],2:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={TO_LOAN:"/loans",TO_AMMORTIZATION:"/ammortize",STOARGE_ALL_LOANS:"STORAGE_ALL_LOANS"}},{}],3:[function(t,e,r){"use strict"},{}]},{},[1]);