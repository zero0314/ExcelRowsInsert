/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/taskpane/insert-rows-dialog.js?63bd":
/*!********************************************!*\
  !*** ./src/taskpane/insert-rows-dialog.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "0db57cbfacda6be205c3.js";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"insertRowsDialog": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
!function() {
/*!********************************************!*\
  !*** ./src/taskpane/insert-rows-dialog.js ***!
  \********************************************/
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global Excel, Office */

Office.onReady(function (info) {
  if (info.host === Office.HostType.Excel) {
    document.getElementById("insertRowsForm").onsubmit = insertRows;
  }
});

/**
 * Inserts the specified number of rows below the current selection
 */
function insertRows(_x) {
  return _insertRows.apply(this, arguments);
}
function _insertRows() {
  _insertRows = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(event) {
    var rowCountInput, rowCount, errorMessage, _errorMessage, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          event.preventDefault();
          rowCountInput = document.getElementById("rowCount");
          rowCount = parseInt(rowCountInput.value, 10);
          errorMessage = document.getElementById("errorMessage"); // Validate input
          if (!(isNaN(rowCount) || rowCount < 1 || rowCount > 1000)) {
            _context2.n = 1;
            break;
          }
          errorMessage.textContent = "请输入1到1000之间的数字";
          errorMessage.style.display = "block";
          return _context2.a(2);
        case 1:
          errorMessage.style.display = "none";
          _context2.p = 2;
          _context2.n = 3;
          return Excel.run(/*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(context) {
              var selection, startRowIndex, range, i;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    // Get the selected range
                    selection = context.workbook.getSelectedRange();
                    selection.load("rowIndex, rowCount");
                    _context.n = 1;
                    return context.sync();
                  case 1:
                    // Get the row index of the first row in the selection
                    startRowIndex = selection.rowIndex; // Insert rows
                    range = context.workbook.worksheets.getActiveWorksheet().getRangeByIndexes(startRowIndex, 0, 1, context.workbook.worksheets.getActiveWorksheet().getUsedRange().columnCount);
                    for (i = 0; i < rowCount; i++) {
                      range.insert(Excel.InsertShiftDirection.down);
                    }
                    _context.n = 2;
                    return context.sync();
                  case 2:
                    // Close the dialog
                    closeDialog();
                  case 3:
                    return _context.a(2);
                }
              }, _callee);
            }));
            return function (_x2) {
              return _ref.apply(this, arguments);
            };
          }());
        case 3:
          _context2.n = 5;
          break;
        case 4:
          _context2.p = 4;
          _t = _context2.v;
          _errorMessage = document.getElementById("errorMessage");
          _errorMessage.textContent = "错误: " + _t.message;
          _errorMessage.style.display = "block";
          console.error(_t);
        case 5:
          return _context2.a(2);
      }
    }, _callee2, null, [[2, 4]]);
  }));
  return _insertRows.apply(this, arguments);
}
function closeDialog() {
  Office.context.ui.messageParent("close");
}
}();
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!**********************************************!*\
  !*** ./src/taskpane/insert-rows-dialog.html ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./insert-rows-dialog.js */ "./src/taskpane/insert-rows-dialog.js?63bd"), __webpack_require__.b);
// Module
var code = "<!doctype html>\r\n<html>\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n    <title>批量插入行</title>\r\n\r\n    <!-- Office JavaScript API -->\r\n    <" + "script\r\n      type=\"text/javascript\"\r\n      src=\"https://appsforoffice.microsoft.com/lib/1/hosted/office.js\"\r\n    ><" + "/script>\r\n\r\n    <!-- For more information on Fluent UI, visit https://developer.microsoft.com/fluentui#/. -->\r\n    <link\r\n      rel=\"stylesheet\"\r\n      href=\"https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-core/11.1.0/css/fabric.min.css\"\r\n    />\r\n\r\n    <style>\r\n      body {\r\n        margin: 0;\r\n        padding: 20px;\r\n        font-family:\r\n          -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\",\r\n          \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\r\n        background-color: #fff;\r\n      }\r\n\r\n      .dialog-container {\r\n        max-width: 400px;\r\n        margin: 0 auto;\r\n      }\r\n\r\n      h2 {\r\n        color: #323130;\r\n        font-size: 24px;\r\n        margin-top: 0;\r\n        margin-bottom: 20px;\r\n      }\r\n\r\n      .form-group {\r\n        margin-bottom: 20px;\r\n      }\r\n\r\n      label {\r\n        display: block;\r\n        color: #323130;\r\n        font-size: 14px;\r\n        font-weight: 600;\r\n        margin-bottom: 8px;\r\n      }\r\n\r\n      input[type=\"number\"] {\r\n        width: 100%;\r\n        padding: 10px;\r\n        border: 1px solid #c8c6c4;\r\n        border-radius: 2px;\r\n        font-size: 14px;\r\n        box-sizing: border-box;\r\n      }\r\n\r\n      input[type=\"number\"]:focus {\r\n        outline: none;\r\n        border-color: #0078d4;\r\n        box-shadow: 0 0 0 1px #0078d4;\r\n      }\r\n\r\n      .button-group {\r\n        display: flex;\r\n        gap: 8px;\r\n        margin-top: 30px;\r\n      }\r\n\r\n      button {\r\n        flex: 1;\r\n        padding: 10px;\r\n        border: none;\r\n        border-radius: 2px;\r\n        font-size: 14px;\r\n        font-weight: 600;\r\n        cursor: pointer;\r\n        transition: background-color 0.2s;\r\n      }\r\n\r\n      .btn-primary {\r\n        background-color: #0078d4;\r\n        color: white;\r\n      }\r\n\r\n      .btn-primary:hover {\r\n        background-color: #005a9e;\r\n      }\r\n\r\n      .btn-primary:active {\r\n        background-color: #004578;\r\n      }\r\n\r\n      .btn-secondary {\r\n        background-color: #f3f2f1;\r\n        color: #323130;\r\n        border: 1px solid #c8c6c4;\r\n      }\r\n\r\n      .btn-secondary:hover {\r\n        background-color: #edebe9;\r\n      }\r\n\r\n      .error-message {\r\n        color: #a4373a;\r\n        font-size: 12px;\r\n        margin-top: 4px;\r\n        display: none;\r\n      }\r\n\r\n      .success-message {\r\n        color: #107c10;\r\n        font-size: 12px;\r\n        margin-top: 4px;\r\n        display: none;\r\n      }\r\n    </style>\r\n  </head>\r\n\r\n  <body>\r\n    <div class=\"dialog-container\">\r\n      <h2>批量插入行</h2>\r\n      <form id=\"insertRowsForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"rowCount\">输入要插入的行数:</label>\r\n          <input\r\n            type=\"number\"\r\n            id=\"rowCount\"\r\n            name=\"rowCount\"\r\n            min=\"1\"\r\n            max=\"1000\"\r\n            value=\"1\"\r\n            required\r\n          />\r\n          <div class=\"error-message\" id=\"errorMessage\"></div>\r\n        </div>\r\n        <div class=\"button-group\">\r\n          <button type=\"submit\" class=\"btn-primary\">插入</button>\r\n          <button type=\"button\" class=\"btn-secondary\" onclick=\"closeDialog()\">取消</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <" + "script src=\"" + ___HTML_LOADER_IMPORT_0___ + "\"><" + "/script>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);
}();
/******/ })()
;
//# sourceMappingURL=insertRowsDialog.js.map