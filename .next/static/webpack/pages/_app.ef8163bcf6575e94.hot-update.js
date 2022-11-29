"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LayOut\": function() { return /* binding */ LayOut; },\n/* harmony export */   \"instance\": function() { return /* binding */ instance; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookies-next */ \"./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ \"./context/index.tsx\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ \"./components/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst instance = axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n    baseURL: \"http://localhost:8000/\",\n    headers: {\n        Authorization: (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)(\"token\")\n    }\n});\nconst LayOut = (props)=>{\n    _s();\n    const { setOpenLoader , setOpenshadow , loader , shadow  } = (0,_context__WEBPACK_IMPORTED_MODULE_4__.useLoaderContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>console.log({\n            loader,\n            shadow\n        }), [\n        loader,\n        shadow\n    ]);\n    axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].interceptors.request.use(function(config) {\n        console.log(config);\n        setOpenLoader(true);\n        setOpenshadow(true);\n        return config;\n    }, function(error) {\n        return Promise.reject(error);\n    });\n    // Add a response interceptor\n    axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].interceptors.response.use(function(response) {\n        console.log(response);\n        setOpenLoader(false);\n        setOpenshadow(false);\n        return response;\n    }, function(error) {\n        return Promise.reject(error);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-[100vh] w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_5__.Modal, {}, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/Student_Assignment_Project-_Front_End/components/Layout.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_5__.Header, {}, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/Student_Assignment_Project-_Front_End/components/Layout.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            props.children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_5__.Shadow, {}, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/Student_Assignment_Project-_Front_End/components/Layout.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_5__.Loader, {}, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/Student_Assignment_Project-_Front_End/components/Layout.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_5__.Footer, {}, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/Student_Assignment_Project-_Front_End/components/Layout.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bilguunleap2/Desktop/Student_Assignment_Project-_Front_End/components/Layout.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LayOut, \"tVDjszSPLquNCJHULIH+umLzGTE=\", false, function() {\n    return [\n        _context__WEBPACK_IMPORTED_MODULE_4__.useLoaderContext\n    ];\n});\n_c = LayOut;\nvar _c;\n$RefreshReg$(_c, \"LayOut\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDZTtBQUNXO0FBQ047QUFFa0I7QUFDekQsTUFBTVUsV0FBV1Ysb0RBQVksQ0FBQztJQUNuQ1ksU0FBUztJQUNUQyxTQUFTO1FBQUVDLGVBQWViLHVEQUFTQSxDQUFDO0lBQVM7QUFDL0MsR0FBRztBQUNJLE1BQU1jLFNBQVMsQ0FBQ0MsUUFBbUM7O0lBQ3hELE1BQU0sRUFBRUMsY0FBYSxFQUFFQyxjQUFhLEVBQUVDLE9BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdoQiwwREFBZ0JBO0lBQ3pFRCxnREFBU0EsQ0FBQyxJQUFNa0IsUUFBUUMsR0FBRyxDQUFDO1lBQUVIO1lBQVFDO1FBQU8sSUFBSTtRQUFDRDtRQUFRQztLQUFPO0lBQ2pFcEIsc0VBQThCLENBQzVCLFNBQVUwQixNQUFNLEVBQUU7UUFDaEJMLFFBQVFDLEdBQUcsQ0FBQ0k7UUFDWlQsY0FBYyxJQUFJO1FBQ2xCQyxjQUFjLElBQUk7UUFDbEIsT0FBT1E7SUFDVCxHQUNBLFNBQVVDLEtBQUssRUFBRTtRQUNmLE9BQU9DLFFBQVFDLE1BQU0sQ0FBQ0Y7SUFDeEI7SUFHRiw2QkFBNkI7SUFDN0IzQix1RUFBK0IsQ0FDN0IsU0FBVThCLFFBQVEsRUFBRTtRQUNsQlQsUUFBUUMsR0FBRyxDQUFDUTtRQUNaYixjQUFjLEtBQUs7UUFDbkJDLGNBQWMsS0FBSztRQUNuQixPQUFPWTtJQUNULEdBQ0EsU0FBVUgsS0FBSyxFQUFFO1FBQ2YsT0FBT0MsUUFBUUMsTUFBTSxDQUFDRjtJQUN4QjtJQUVGLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ3pCLHlDQUFLQTs7Ozs7MEJBQ04sOERBQUNGLDBDQUFNQTs7Ozs7WUFDTlcsTUFBTWlCLFFBQVE7MEJBQ2YsOERBQUN6QiwwQ0FBTUE7Ozs7OzBCQUNQLDhEQUFDQywwQ0FBTUE7Ozs7OzBCQUNQLDhEQUFDSCwwQ0FBTUE7Ozs7Ozs7Ozs7O0FBR2IsRUFBRTtHQXJDV1M7O1FBQzhDWCxzREFBZ0JBOzs7S0FEOURXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LnRzeD8zYzhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gXCJjb29raWVzLW5leHRcIjtcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTG9hZGVyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgSGVhZGVyLCBGb290ZXIsIE1vZGFsLCBTaGFkb3csIExvYWRlciB9IGZyb20gXCIuL2luZGV4XCI7XG5leHBvcnQgY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9cIixcbiAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBnZXRDb29raWUoXCJ0b2tlblwiKSB9LFxufSk7XG5leHBvcnQgY29uc3QgTGF5T3V0ID0gKHByb3BzOiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkgPT4ge1xuICBjb25zdCB7IHNldE9wZW5Mb2FkZXIsIHNldE9wZW5zaGFkb3csIGxvYWRlciwgc2hhZG93IH0gPSB1c2VMb2FkZXJDb250ZXh0KCk7XG4gIHVzZUVmZmVjdCgoKSA9PiBjb25zb2xlLmxvZyh7IGxvYWRlciwgc2hhZG93IH0pLCBbbG9hZGVyLCBzaGFkb3ddKTtcbiAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxuICAgIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKGNvbmZpZylcbiAgICAgIHNldE9wZW5Mb2FkZXIodHJ1ZSk7XG4gICAgICBzZXRPcGVuc2hhZG93KHRydWUpO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9LFxuICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gICk7XG5cbiAgLy8gQWRkIGEgcmVzcG9uc2UgaW50ZXJjZXB0b3JcbiAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcbiAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgc2V0T3BlbkxvYWRlcihmYWxzZSk7XG4gICAgICBzZXRPcGVuc2hhZG93KGZhbHNlKTtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9LFxuICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLVsxMDB2aF0gdy1mdWxsXCI+XG4gICAgICA8TW9kYWwgLz5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDxTaGFkb3cvPlxuICAgICAgPExvYWRlciAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImdldENvb2tpZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlTG9hZGVyQ29udGV4dCIsIkhlYWRlciIsIkZvb3RlciIsIk1vZGFsIiwiU2hhZG93IiwiTG9hZGVyIiwiaW5zdGFuY2UiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJMYXlPdXQiLCJwcm9wcyIsInNldE9wZW5Mb2FkZXIiLCJzZXRPcGVuc2hhZG93IiwibG9hZGVyIiwic2hhZG93IiwiY29uc29sZSIsImxvZyIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsImRpdiIsImNsYXNzTmFtZSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n"));

/***/ })

});