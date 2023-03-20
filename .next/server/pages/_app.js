/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-rangeslider */ \"react-rangeslider\");\n/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-rangeslider/lib/index.css */ \"./node_modules/react-rangeslider/lib/index.css\");\n/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! use-scroll-position */ \"use-scroll-position\");\n/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(use_scroll_position__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/skin/skin-1.css */ \"./css/skin/skin-1.css\");\n/* harmony import */ var _css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_skin_skin_1_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/switcher.css */ \"./styles/switcher.css\");\n/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_switcher_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: toggle1 , 1: setToggle1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: body_ , 1: setbody_  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: header , 1: setHeader  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"fixed\");\n    const { 0: header_ , 1: setHeader_  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setbody_(document.querySelector(\"body\"));\n        setHeader_(document.getElementsByClassName(\"main-bar-wraper\"));\n    }, []);\n    let scrollPosition = use_scroll_position__WEBPACK_IMPORTED_MODULE_6___default()();\n    function toggle() {\n        setToggle1(!toggle1);\n    }\n    const chageHeader = (value)=>{\n        setHeader(value);\n        if (value === \"fixed\") {\n            header_[0].classList.add(\"sticky-header\");\n            header_[0].classList.remove(\"sticky-no\");\n        } else {\n            header_[0].classList.add(\"sticky-no\");\n            header_[0].classList.remove(\"sticky-header\");\n            header_[0].classList.remove(\"is-fixed\");\n        }\n    };\n    const onChange = (value)=>{\n        setSliderValu(value);\n        body_.style.padding = value + \"px\";\n    };\n    header === \"fixed\" && scrollPosition > 10 ? header_ && header_[0].classList.add(\"is-fixed\") : header_ && header_[0].classList.remove(\"is-fixed\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"page-wraper\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mohan\\\\Documents\\\\Project-Minilive\\\\Minilive\\\\pages\\\\_app.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mohan\\\\Documents\\\\Project-Minilive\\\\Minilive\\\\pages\\\\_app.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#top\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"scroltop icon-up\",\n                    type: \"button\",\n                    style: {\n                        display: \"inline-block\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fa fa-arrow-up\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mohan\\\\Documents\\\\Project-Minilive\\\\Minilive\\\\pages\\\\_app.js\",\n                        lineNumber: 61,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mohan\\\\Documents\\\\Project-Minilive\\\\Minilive\\\\pages\\\\_app.js\",\n                    lineNumber: 56,\n                    columnNumber: 4\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mohan\\\\Documents\\\\Project-Minilive\\\\Minilive\\\\pages\\\\_app.js\",\n                lineNumber: 55,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL21pbmlsaXZlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3QtcmFuZ2VzbGlkZXJcIjtcclxuaW1wb3J0IFwicmVhY3QtcmFuZ2VzbGlkZXIvbGliL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbmltcG9ydCB1c2VTY3JvbGxQb3NpdGlvbiBmcm9tIFwidXNlLXNjcm9sbC1wb3NpdGlvblwiO1xyXG5pbXBvcnQgXCIuLi9jc3Mvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9za2luL3NraW4tMS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9zd2l0Y2hlci5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG5cdGNvbnN0IFt0b2dnbGUxLCBzZXRUb2dnbGUxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbYm9keV8sIHNldGJvZHlfXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKFwiZml4ZWRcIik7XHJcblx0Y29uc3QgW2hlYWRlcl8sIHNldEhlYWRlcl9dID0gdXNlU3RhdGUoKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldGJvZHlfKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpKTtcclxuXHRcdHNldEhlYWRlcl8oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tYmFyLXdyYXBlclwiKSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRsZXQgc2Nyb2xsUG9zaXRpb24gPSB1c2VTY3JvbGxQb3NpdGlvbigpO1xyXG5cdGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuXHRcdHNldFRvZ2dsZTEoIXRvZ2dsZTEpO1xyXG5cdH1cclxuIFxyXG4gIGNvbnN0IGNoYWdlSGVhZGVyID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRIZWFkZXIodmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlID09PSBcImZpeGVkXCIpIHtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LWhlYWRlclwiKTtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LW5vXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LW5vXCIpO1xyXG4gICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktaGVhZGVyXCIpO1xyXG4gICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1maXhlZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0U2xpZGVyVmFsdSh2YWx1ZSk7XHJcbiAgICBib2R5Xy5zdHlsZS5wYWRkaW5nID0gdmFsdWUgKyBcInB4XCI7XHJcbiAgfTtcclxuXHJcbiAgaGVhZGVyID09PSBcImZpeGVkXCIgJiYgc2Nyb2xsUG9zaXRpb24gPiAxMFxyXG4gICAgPyBoZWFkZXJfICYmIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZChcImlzLWZpeGVkXCIpXHJcbiAgICA6IGhlYWRlcl8gJiYgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtZml4ZWRcIik7XHJcblx0XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS13cmFwZXJcIj5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvZGl2PiBcclxuXHQgIFxyXG5cdFx0PGEgaHJlZj1cIiN0b3BcIj5cclxuXHRcdFx0PGJ1dHRvblxyXG5cdFx0XHQgIGNsYXNzTmFtZT1cInNjcm9sdG9wIGljb24tdXBcIlxyXG5cdFx0XHQgIHR5cGU9XCJidXR0b25cIlxyXG5cdFx0XHQgIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX1cclxuXHRcdFx0PlxyXG5cdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LXVwXCIgLz5cclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHQ8L2E+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2xpZGVyIiwidXNlU2Nyb2xsUG9zaXRpb24iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRvZ2dsZTEiLCJzZXRUb2dnbGUxIiwiYm9keV8iLCJzZXRib2R5XyIsImhlYWRlciIsInNldEhlYWRlciIsImhlYWRlcl8iLCJzZXRIZWFkZXJfIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNjcm9sbFBvc2l0aW9uIiwidG9nZ2xlIiwiY2hhZ2VIZWFkZXIiLCJ2YWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm9uQ2hhbmdlIiwic2V0U2xpZGVyVmFsdSIsInN0eWxlIiwicGFkZGluZyIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwiYnV0dG9uIiwidHlwZSIsImRpc3BsYXkiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./css/skin/skin-1.css":
/*!*****************************!*\
  !*** ./css/skin/skin-1.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-rangeslider/lib/index.css":
/*!******************************************************!*\
  !*** ./node_modules/react-rangeslider/lib/index.css ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/switcher.css":
/*!*****************************!*\
  !*** ./styles/switcher.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-rangeslider":
/*!************************************!*\
  !*** external "react-rangeslider" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-rangeslider");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "use-scroll-position":
/*!**************************************!*\
  !*** external "use-scroll-position" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("use-scroll-position");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();