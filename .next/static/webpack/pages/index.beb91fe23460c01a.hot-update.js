/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./layout/header.js":
/*!**************************!*\
  !*** ./layout/header.js ***!
  \**************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _element_aboutUs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../element/aboutUs */ \"./element/aboutUs.js\");\n/* harmony import */ var _element_blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../element/blog */ \"./element/blog.js\");\n/* harmony import */ var _element_clients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../element/clients */ \"./element/clients.js\");\n/* harmony import */ var _element_counter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../element/counter */ \"./element/counter.js\");\n/* harmony import */ var _element_cta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../element/cta */ \"./element/cta.js\");\n/* harmony import */ var _element_newsletter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../element/newsletter */ \"./element/newsletter.js\");\n/* harmony import */ var _element_our_features__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../element/our-features */ \"./element/our-features.js\");\n/* harmony import */ var _element_pricing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../element/pricing */ \"./element/pricing.js\");\n/* harmony import */ var _element_projects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../element/projects */ \"./element/projects.js\");\n/* harmony import */ var _element_quote__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../element/quote */ \"./element/quote.js\");\n/* harmony import */ var _element_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../element/service */ \"./element/service.js\");\n/* harmony import */ var _element_slider_1__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../element/slider-1 */ \"./element/slider-1.js\");\n/* harmony import */ var _element_team__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../element/team */ \"./element/team.js\");\n/* harmony import */ var _element_testimonial__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../element/testimonial */ \"./element/testimonial.js\");\n/* harmony import */ var _layout_footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../layout/footer */ \"./layout/footer.js\");\n/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../layout/header */ \"./layout/header.js\");\n/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_layout_header__WEBPACK_IMPORTED_MODULE_17__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        document.querySelector(\"body\").setAttribute(\"color\", \"color_1\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_layout_header__WEBPACK_IMPORTED_MODULE_17___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mohan\\\\Documents\\\\Project-Minilive\\\\Minilive\\\\pages\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"page-content bg-white\",\n                id: \"top\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_element_slider_1__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mohan\\\\Documents\\\\Project-Minilive\\\\Minilive\\\\pages\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_element_service__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mohan\\\\Documents\\\\Project-Minilive\\\\Minilive\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_element_aboutUs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mohan\\\\Documents\\\\Project-Minilive\\\\Minilive\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_element_our_features__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mohan\\\\Documents\\\\Project-Minilive\\\\Minilive\\\\pages\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_element_quote__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mohan\\\\Documents\\\\Project-Minilive\\\\Minilive\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mohan\\\\Documents\\\\Project-Minilive\\\\Minilive\\\\pages\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_footer__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mohan\\\\Documents\\\\Project-Minilive\\\\Minilive\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNPO0FBQ047QUFDTTtBQUNBO0FBQ1I7QUFDYztBQUNBO0FBQ047QUFDRTtBQUNOO0FBQ0k7QUFDQztBQUNQO0FBQ2M7QUFFWDtBQUNBOztTQUM1QmlCLElBQUksR0FBRyxDQUFDOztJQUNmakIsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNma0IsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBTSxPQUFFQyxZQUFZLENBQUMsQ0FBTyxRQUFFLENBQVMsU0FBQyxDQUFDO0lBQ2xFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsTUFBTTs7d0ZBRURKLHdEQUFNOzs7Ozt3RkFDTkssQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXVCO2dCQUFDQyxFQUFFLEVBQUMsQ0FBSzs7Z0dBQzVDWCwwREFBTzs7Ozs7Z0dBRVBELHlEQUFPOzs7OztnR0FDUFYsd0RBQU87Ozs7O2dHQUVQTSw2REFBUTs7Ozs7Z0dBT1JHLHVEQUFLOzs7Ozs7Ozs7Ozt3RkFHUEssdURBQU07Ozs7Ozs7QUFHYixDQUFDO0dBMUJRRSxJQUFJO0tBQUpBLElBQUk7QUE0QmIsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWJvdXRVcyBmcm9tIFwiLi4vZWxlbWVudC9hYm91dFVzXCI7XHJcbmltcG9ydCBCbG9nIGZyb20gXCIuLi9lbGVtZW50L2Jsb2dcIjtcclxuaW1wb3J0IENsaWVudHMgZnJvbSBcIi4uL2VsZW1lbnQvY2xpZW50c1wiO1xyXG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi4vZWxlbWVudC9jb3VudGVyXCI7XHJcbmltcG9ydCBDdGEgZnJvbSBcIi4uL2VsZW1lbnQvY3RhXCI7XHJcbmltcG9ydCBOZXdzbGV0dGVyIGZyb20gXCIuLi9lbGVtZW50L25ld3NsZXR0ZXJcIjtcclxuaW1wb3J0IEZlYXR1cmVzIGZyb20gXCIuLi9lbGVtZW50L291ci1mZWF0dXJlc1wiO1xyXG5pbXBvcnQgUHJpY2luZyBmcm9tIFwiLi4vZWxlbWVudC9wcmljaW5nXCI7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi4vZWxlbWVudC9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgUXVvdGUgZnJvbSBcIi4uL2VsZW1lbnQvcXVvdGVcIjtcclxuaW1wb3J0IFNlcnZpY2UgZnJvbSBcIi4uL2VsZW1lbnQvc2VydmljZVwiO1xyXG5pbXBvcnQgU2xpZGVyMSBmcm9tIFwiLi4vZWxlbWVudC9zbGlkZXItMVwiO1xyXG5pbXBvcnQgVGVhbSBmcm9tIFwiLi4vZWxlbWVudC90ZWFtXCI7XHJcbmltcG9ydCBUZXN0aW1vbmlhbCBmcm9tIFwiLi4vZWxlbWVudC90ZXN0aW1vbmlhbFwiO1xyXG4gXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2xheW91dC9mb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vbGF5b3V0L2hlYWRlclwiO1xyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zZXRBdHRyaWJ1dGUoXCJjb2xvclwiLCBcImNvbG9yXzFcIik7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50IGJnLXdoaXRlXCIgaWQ9XCJ0b3BcIj5cclxuICAgICAgICA8U2xpZGVyMSAvPlxyXG4gICAgICAgIHsvKiA8Q2xpZW50cyAvPiAqL31cclxuICAgICAgICA8U2VydmljZSAvPlxyXG4gICAgICAgIDxBYm91dFVzIC8+XHJcbiAgICAgICAgey8qIDxDb3VudGVyIC8+ICovfVxyXG4gICAgICAgIDxGZWF0dXJlcyAvPlxyXG4gICAgICAgey8qICA8UHJvamVjdHMgLz5cclxuICAgICAgICAgIDxOZXdzbGV0dGVyIC8+XHJcbiAgICAgICAgICAgICA8VGVhbSAvPlxyXG4gICAgICAgICAgIDxQcmljaW5nIC8+XHJcbiAgICAgICAgPFRlc3RpbW9uaWFsIC8+XHJcbiAgICAgICAgPEJsb2cgLz4gKi99XHJcbiAgICAgICAgPFF1b3RlIC8+XHJcbiAgICAgICAgey8qIDxDdGEgLz4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiQWJvdXRVcyIsIkJsb2ciLCJDbGllbnRzIiwiQ291bnRlciIsIkN0YSIsIk5ld3NsZXR0ZXIiLCJGZWF0dXJlcyIsIlByaWNpbmciLCJQcm9qZWN0cyIsIlF1b3RlIiwiU2VydmljZSIsIlNsaWRlcjEiLCJUZWFtIiwiVGVzdGltb25pYWwiLCJGb290ZXIiLCJIZWFkZXIiLCJIb21lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});