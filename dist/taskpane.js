/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/taskpane/taskpane.css":
/*!***********************************!*\
  !*** ./src/taskpane/taskpane.css ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "1fda685b81e1123773f6.css";

/***/ }),

/***/ "./src/taskpane/taskpane.js?4727":
/*!**********************************!*\
  !*** ./src/taskpane/taskpane.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "a63f2a00f702ed8e41b0.js";

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
/******/ 			"taskpane": 0
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
/*!**********************************!*\
  !*** ./src/taskpane/taskpane.js ***!
  \**********************************/
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global console, document, Excel, Office */

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
    var rowCountInput, rowCount, messageBox, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          event.preventDefault();
          rowCountInput = document.getElementById("rowCount");
          rowCount = parseInt(rowCountInput.value, 10);
          messageBox = document.getElementById("messageBox"); // Validate input
          if (!(isNaN(rowCount) || rowCount < 1 || rowCount > 1000)) {
            _context2.n = 1;
            break;
          }
          showMessage("请输入1到1000之间的数字", "error");
          return _context2.a(2);
        case 1:
          _context2.p = 1;
          _context2.n = 2;
          return Excel.run(/*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(context) {
              var selection, startRowIndex, worksheet, usedRange, columnCount, i, range;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    // Get the selected range
                    selection = context.workbook.getSelectedRange();
                    selection.load("rowIndex");
                    _context.n = 1;
                    return context.sync();
                  case 1:
                    // Get the row index of the first row in the selection
                    startRowIndex = selection.rowIndex; // Get the active worksheet
                    worksheet = context.workbook.worksheets.getActiveWorksheet();
                    usedRange = worksheet.getUsedRange();
                    usedRange.load("columnCount");
                    _context.n = 2;
                    return context.sync();
                  case 2:
                    columnCount = usedRange.columnCount; // Insert rows one by one
                    for (i = 0; i < rowCount; i++) {
                      range = worksheet.getRangeByIndexes(startRowIndex, 0, 1, columnCount);
                      range.insert(Excel.InsertShiftDirection.down);
                    }
                    _context.n = 3;
                    return context.sync();
                  case 3:
                    // Show success message
                    showMessage("\u6210\u529F\u63D2\u5165 ".concat(rowCount, " \u884C\uFF01"), "success");
                  case 4:
                    return _context.a(2);
                }
              }, _callee);
            }));
            return function (_x2) {
              return _ref.apply(this, arguments);
            };
          }());
        case 2:
          _context2.n = 4;
          break;
        case 3:
          _context2.p = 3;
          _t = _context2.v;
          showMessage("错误: " + _t.message, "error");
          console.error(_t);
        case 4:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 3]]);
  }));
  return _insertRows.apply(this, arguments);
}
function showMessage(message, type) {
  var messageBox = document.getElementById("messageBox");
  messageBox.textContent = message;
  messageBox.className = "message " + (type === "error" ? "error-message" : "success-message");
  messageBox.style.display = "block";

  // Auto hide message after 3 seconds
  setTimeout(function () {
    messageBox.style.display = "none";
  }, 3000);
}
}();
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!************************************!*\
  !*** ./src/taskpane/taskpane.html ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./taskpane.css */ "./src/taskpane/taskpane.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./taskpane.js */ "./src/taskpane/taskpane.js?4727"), __webpack_require__.b);
// Module
var code = "<!-- Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT License. -->\n<!-- This file shows how to design a task pane with batch insert rows functionality. -->\n\n<!doctype html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <title>Excel 批量插入</title>\n\n    <!-- Office JavaScript API -->\n    <" + "script\n      type=\"text/javascript\"\n      src=\"https://appsforoffice.microsoft.com/lib/1/hosted/office.js\"\n    ><" + "/script>\n\n    <!-- For more information on Fluent UI, visit https://developer.microsoft.com/fluentui#/. -->\n    <link\n      rel=\"stylesheet\"\n      href=\"https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-core/11.1.0/css/fabric.min.css\"\n    />\n\n    <!-- Template styles -->\n    <link href=\"" + ___HTML_LOADER_IMPORT_0___ + "\" rel=\"stylesheet\" type=\"text/css\" />\n\n    <style>\n      body {\n        margin: 0;\n        padding: 20px;\n        font-family:\n          -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\",\n          \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n      }\n\n      .container {\n        max-width: 100%;\n      }\n\n      h2 {\n        color: #323130;\n        font-size: 18px;\n        margin: 0 0 20px 0;\n        border-bottom: 2px solid #0078d4;\n        padding-bottom: 10px;\n      }\n\n      .form-group {\n        margin-bottom: 20px;\n      }\n\n      label {\n        display: block;\n        color: #323130;\n        font-size: 14px;\n        font-weight: 600;\n        margin-bottom: 8px;\n      }\n\n      input[type=\"number\"] {\n        width: 100%;\n        padding: 10px;\n        border: 1px solid #c8c6c4;\n        border-radius: 2px;\n        font-size: 14px;\n        box-sizing: border-box;\n      }\n\n      input[type=\"number\"]:focus {\n        outline: none;\n        border-color: #0078d4;\n        box-shadow: 0 0 0 1px #0078d4;\n      }\n\n      .button-group {\n        display: flex;\n        gap: 8px;\n        margin-top: 20px;\n      }\n\n      button {\n        flex: 1;\n        padding: 12px;\n        border: none;\n        border-radius: 2px;\n        font-size: 14px;\n        font-weight: 600;\n        cursor: pointer;\n        transition: background-color 0.2s;\n      }\n\n      .btn-primary {\n        background-color: #0078d4;\n        color: white;\n      }\n\n      .btn-primary:hover {\n        background-color: #005a9e;\n      }\n\n      .btn-primary:active {\n        background-color: #004578;\n      }\n\n      .message {\n        padding: 10px;\n        border-radius: 2px;\n        margin-top: 15px;\n        font-size: 13px;\n        display: none;\n      }\n\n      .error-message {\n        background-color: #fde7e9;\n        color: #a4373a;\n        border: 1px solid #f1707f;\n        display: block;\n      }\n\n      .success-message {\n        background-color: #dffcf0;\n        color: #107c10;\n        border: 1px solid #7cdb7f;\n        display: block;\n      }\n\n      .info-text {\n        font-size: 12px;\n        color: #605e5c;\n        margin-top: 10px;\n        line-height: 1.5;\n      }\n    </style>\n  </head>\n\n  <body class=\"ms-font-m ms-Fabric\">\n    <div class=\"container\">\n      <h2>批量插入行</h2>\n\n      <div class=\"info-text\">\n        选择要插入行的位置，然后输入要插入的行数。新行将在选中行的下方插入。\n      </div>\n\n      <form id=\"insertRowsForm\">\n        <div class=\"form-group\">\n          <label for=\"rowCount\">输入要插入的行数:</label>\n          <input\n            type=\"number\"\n            id=\"rowCount\"\n            name=\"rowCount\"\n            min=\"1\"\n            max=\"1000\"\n            value=\"1\"\n            required\n          />\n        </div>\n        <div class=\"button-group\">\n          <button type=\"submit\" class=\"btn-primary\">插入行</button>\n        </div>\n      </form>\n\n      <div id=\"messageBox\" class=\"message\"></div>\n    </div>\n\n    <" + "script src=\"" + ___HTML_LOADER_IMPORT_1___ + "\"><" + "/script>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);
}();
/******/ })()
;
//# sourceMappingURL=taskpane.js.map