"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-rangeslider"
const external_react_rangeslider_namespaceObject = require("react-rangeslider");
;// CONCATENATED MODULE: external "use-scroll-position"
const external_use_scroll_position_namespaceObject = require("use-scroll-position");
var external_use_scroll_position_default = /*#__PURE__*/__webpack_require__.n(external_use_scroll_position_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js











function MyApp({ Component , pageProps  }) {
    const { 0: toggle1 , 1: setToggle1  } = (0,external_react_.useState)(false);
    const { 0: body_ , 1: setbody_  } = (0,external_react_.useState)();
    const { 0: header , 1: setHeader  } = (0,external_react_.useState)("fixed");
    const { 0: header_ , 1: setHeader_  } = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        setbody_(document.querySelector("body"));
        setHeader_(document.getElementsByClassName("main-bar-wraper"));
    }, []);
    let scrollPosition = external_use_scroll_position_default()();
    function toggle() {
        setToggle1(!toggle1);
    }
    const chageHeader = (value)=>{
        setHeader(value);
        if (value === "fixed") {
            header_[0].classList.add("sticky-header");
            header_[0].classList.remove("sticky-no");
        } else {
            header_[0].classList.add("sticky-no");
            header_[0].classList.remove("sticky-header");
            header_[0].classList.remove("is-fixed");
        }
    };
    const onChange = (value)=>{
        setSliderValu(value);
        body_.style.padding = value + "px";
    };
    header === "fixed" && scrollPosition > 10 ? header_ && header_[0].classList.add("is-fixed") : header_ && header_[0].classList.remove("is-fixed");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "page-wraper",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#top",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "scroltop icon-up",
                    type: "button",
                    style: {
                        display: "inline-block"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fa fa-arrow-up"
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8673));
module.exports = __webpack_exports__;

})();