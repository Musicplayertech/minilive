"use strict";
exports.id = 786;
exports.ids = [786];
exports.modules = {

/***/ 55:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
;// CONCATENATED MODULE: ./component/blogSlider.js




function blogSlider_BlogSlider() {
    const { 0: asd , 1: setAsd  } = useState();
    const settings = {
        dots: false,
        arrows: false,
        centerMode: false,
        slidesToShow: 3,
        draggable: true,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerMode: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }, 
        ]
    };
    const renderArrows = ()=>{
        return /*#__PURE__*/ _jsxs("div", {
            className: "owl-nav",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "owl-prev",
                    onClick: ()=>asd.slickPrev()
                    ,
                    children: /*#__PURE__*/ _jsx("i", {
                        className: "fa fa-arrow-left"
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "owl-next",
                    onClick: ()=>asd.slickNext()
                    ,
                    children: /*#__PURE__*/ _jsx("i", {
                        className: "fa fa-arrow-right"
                    })
                })
            ]
        });
    };
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "blog-carousel1 owl-btn-1 owl-btn-center-lr owl-btn-primary",
            style: {
                "position": "relative"
            },
            children: [
                /*#__PURE__*/ _jsxs(Slider, {
                    ref: (c)=>setAsd(c)
                    ,
                    ...settings,
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "item wow fadeInUp",
                            "data-wow-duration": "2s",
                            "data-wow-delay": "0.2s",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "dlab-blog style-1 bg-white text-center",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "dlab-media",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: "images/blog/blog-grid-1/pic1.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "dlab-info",
                                        children: [
                                            /*#__PURE__*/ _jsx("h5", {
                                                className: "dlab-title",
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: "blog-details-1",
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        children: "Praesent ut lobortis purus hasellus libero orci, accumsan."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "m-b0",
                                                children: "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "dlab-meta meta-bottom",
                                                children: /*#__PURE__*/ _jsxs("ul", {
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("li", {
                                                            className: "post-date",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("i", {
                                                                    className: "flaticon-clock m-r10"
                                                                }),
                                                                "7 March, 2020"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("li", {
                                                            className: "post-comment",
                                                            children: /*#__PURE__*/ _jsxs("a", {
                                                                href: "javascript:void(0);",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("i", {
                                                                        className: "flaticon-speech-bubble"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        children: "15"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("li", {
                                                            className: "post-share",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("i", {
                                                                    className: "flaticon-share"
                                                                }),
                                                                /*#__PURE__*/ _jsxs("ul", {
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("li", {
                                                                            children: /*#__PURE__*/ _jsx("a", {
                                                                                className: "fa fa-facebook",
                                                                                href: "https://en-gb.facebook.com/"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("li", {
                                                                            children: /*#__PURE__*/ _jsx("a", {
                                                                                className: "fa fa-twitter",
                                                                                href: "https://twitter.com/login?lang=en"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("li", {
                                                                            children: /*#__PURE__*/ _jsx("a", {
                                                                                className: "fa fa-linkedin",
                                                                                href: "https://www.linkedin.com/login"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "item wow fadeInUp",
                            "data-wow-duration": "2s",
                            "data-wow-delay": "0.4s",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "dlab-blog style-1 bg-white text-center",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "dlab-media",
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: "blog-details-1",
                                            children: /*#__PURE__*/ _jsx("a", {
                                                children: /*#__PURE__*/ _jsx("img", {
                                                    src: "images/blog/blog-grid-1/pic2.jpg",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "dlab-info",
                                        children: [
                                            /*#__PURE__*/ _jsx("h5", {
                                                className: "dlab-title",
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: "blog-details-1",
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        children: "Donec feugiat mollis nisi in dignissim. Morbi lectus."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "m-b0",
                                                children: "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "dlab-meta meta-bottom",
                                                children: /*#__PURE__*/ _jsxs("ul", {
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("li", {
                                                            className: "post-date",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("i", {
                                                                    className: "flaticon-clock m-r10"
                                                                }),
                                                                "7 March, 2020"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("li", {
                                                            className: "post-comment",
                                                            children: /*#__PURE__*/ _jsxs("a", {
                                                                href: "javascript:void(0);",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("i", {
                                                                        className: "flaticon-speech-bubble"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        children: "15"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("li", {
                                                            className: "post-share",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("i", {
                                                                    className: "flaticon-share"
                                                                }),
                                                                /*#__PURE__*/ _jsxs("ul", {
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("li", {
                                                                            children: /*#__PURE__*/ _jsx("a", {
                                                                                className: "fa fa-facebook",
                                                                                href: "https://en-gb.facebook.com/"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("li", {
                                                                            children: /*#__PURE__*/ _jsx("a", {
                                                                                className: "fa fa-twitter",
                                                                                href: "https://twitter.com/login?lang=en"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("li", {
                                                                            children: /*#__PURE__*/ _jsx("a", {
                                                                                className: "fa fa-linkedin",
                                                                                href: "https://www.linkedin.com/login"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "item wow fadeInUp",
                            "data-wow-duration": "2s",
                            "data-wow-delay": "0.6s",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "dlab-blog style-1 bg-white text-center",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "dlab-media",
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: "blog-details-1",
                                            children: /*#__PURE__*/ _jsx("a", {
                                                children: /*#__PURE__*/ _jsx("img", {
                                                    src: "images/blog/blog-grid-1/pic3.jpg",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "dlab-info",
                                        children: [
                                            /*#__PURE__*/ _jsx("h5", {
                                                className: "dlab-title",
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: "blog-details-1",
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        children: "Quisque sem tortor, convallis in arcu eu, accumsan finibus."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "m-b0",
                                                children: "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "dlab-meta meta-bottom",
                                                children: /*#__PURE__*/ _jsxs("ul", {
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("li", {
                                                            className: "post-date",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("i", {
                                                                    className: "flaticon-clock m-r10"
                                                                }),
                                                                "7 March, 2020"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("li", {
                                                            className: "post-comment",
                                                            children: /*#__PURE__*/ _jsxs("a", {
                                                                href: "javascript:void(0);",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("i", {
                                                                        className: "flaticon-speech-bubble"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        children: "15"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("li", {
                                                            className: "post-share",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("i", {
                                                                    className: "flaticon-share"
                                                                }),
                                                                /*#__PURE__*/ _jsxs("ul", {
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("li", {
                                                                            children: /*#__PURE__*/ _jsx("a", {
                                                                                className: "fa fa-facebook",
                                                                                href: "https://en-gb.facebook.com/"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("li", {
                                                                            children: /*#__PURE__*/ _jsx("a", {
                                                                                className: "fa fa-twitter",
                                                                                href: "https://twitter.com/login?lang=en"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("li", {
                                                                            children: /*#__PURE__*/ _jsx("a", {
                                                                                className: "fa fa-linkedin",
                                                                                href: "https://www.linkedin.com/login"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "item wow fadeInUp",
                            "data-wow-duration": "2s",
                            "data-wow-delay": "0.6s",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "dlab-blog style-1 bg-white text-center",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "dlab-media",
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: "blog-details-1",
                                            children: /*#__PURE__*/ _jsx("a", {
                                                children: /*#__PURE__*/ _jsx("img", {
                                                    src: "images/blog/blog-grid-1/pic3.jpg",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "dlab-info",
                                        children: [
                                            /*#__PURE__*/ _jsx("h5", {
                                                className: "dlab-title",
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: "blog-details-1",
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        children: "Quisque sem tortor, convallis in arcu eu, accumsan finibus."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "m-b0",
                                                children: "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "dlab-meta meta-bottom",
                                                children: /*#__PURE__*/ _jsxs("ul", {
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("li", {
                                                            className: "post-date",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("i", {
                                                                    className: "flaticon-clock m-r10"
                                                                }),
                                                                "7 March, 2020"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("li", {
                                                            className: "post-comment",
                                                            children: /*#__PURE__*/ _jsxs("a", {
                                                                href: "javascript:void(0);",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("i", {
                                                                        className: "flaticon-speech-bubble"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        children: "15"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("li", {
                                                            className: "post-share",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("i", {
                                                                    className: "flaticon-share"
                                                                }),
                                                                /*#__PURE__*/ _jsxs("ul", {
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("li", {
                                                                            children: /*#__PURE__*/ _jsx("a", {
                                                                                className: "fa fa-facebook",
                                                                                href: "https://en-gb.facebook.com/"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("li", {
                                                                            children: /*#__PURE__*/ _jsx("a", {
                                                                                className: "fa fa-twitter",
                                                                                href: "https://twitter.com/login?lang=en"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("li", {
                                                                            children: /*#__PURE__*/ _jsx("a", {
                                                                                className: "fa fa-linkedin",
                                                                                href: "https://www.linkedin.com/login"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                renderArrows()
            ]
        })
    });
}
/* harmony default export */ const blogSlider = ((/* unused pure expression or super */ null && (blogSlider_BlogSlider)));

;// CONCATENATED MODULE: ./element/blog.js


function Blog() {
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("section", {
            className: "content-inner-2",
            style: {
                "backgroundImage": "url(images/background/bg1.png)"
            },
            children: /*#__PURE__*/ _jsxs("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "section-head style-1 text-center",
                        children: [
                            /*#__PURE__*/ _jsx("h6", {
                                className: "sub-title bgl-primary m-b20 text-primary",
                                children: "Blog"
                            }),
                            /*#__PURE__*/ _jsx("h2", {
                                className: "title",
                                children: "Latest Blog & News"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(BlogSlider, {})
                ]
            })
        })
    });
}
/* harmony default export */ const blog = ((/* unused pure expression or super */ null && (Blog)));


/***/ }),

/***/ 5583:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__(6882);
;// CONCATENATED MODULE: ./component/counterup.js



function counterup_Counterup({ count  }) {
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx(CountUp, {
            end: count,
            redraw: true,
            children: ({ countUpRef , start  })=>/*#__PURE__*/ _jsx(VisibilitySensor, {
                    onChange: start,
                    delayedCall: true,
                    children: /*#__PURE__*/ _jsx("span", {
                        ref: countUpRef,
                        children: "count"
                    })
                })
        })
    });
}
/* harmony default export */ const counterup = ((/* unused pure expression or super */ null && (counterup_Counterup)));

;// CONCATENATED MODULE: ./element/counter.js


function Counter() {
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("section", {
            className: "content-inner bg-primary",
            style: {
                "backgroundImage": "url(images/background/bg3.png)",
                "backgroundRepeat": "no-repeat",
                "backgroundSize": "cover"
            },
            children: /*#__PURE__*/ _jsx("div", {
                className: "container",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-3 col-sm-6 wow fadeInUp",
                            "data-wow-duration": "2s",
                            "data-wow-delay": "0.2s",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "icon-bx-wraper style-4 text-center",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "icon-bx-sm radius bg-green shadow-green m-b20",
                                        children: /*#__PURE__*/ _jsx("a", {
                                            href: "javascript:void(0);",
                                            className: "icon-cell",
                                            children: /*#__PURE__*/ _jsx("i", {
                                                className: "flaticon-smile"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "icon-content",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "title",
                                                children: "Satisfied Clients"
                                            }),
                                            /*#__PURE__*/ _jsx("h2", {
                                                className: "counter m-b0 text-primary",
                                                children: /*#__PURE__*/ _jsx(Counterup, {
                                                    count: 9875
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-3 col-sm-6 wow fadeInUp",
                            "data-wow-duration": "2s",
                            "data-wow-delay": "0.4s",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "icon-bx-wraper style-4 text-center m-tb30",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "icon-bx-sm radius bg-yellow shadow-yellow m-b20",
                                        children: /*#__PURE__*/ _jsx("a", {
                                            href: "javascript:void(0);",
                                            className: "icon-cell",
                                            children: /*#__PURE__*/ _jsx("i", {
                                                className: "flaticon-line-graph"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "icon-content",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "title",
                                                children: "Project Completed"
                                            }),
                                            /*#__PURE__*/ _jsx("h2", {
                                                className: "counter m-b0 text-primary",
                                                children: /*#__PURE__*/ _jsx(Counterup, {
                                                    count: 8765
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-3 col-sm-6 wow fadeInUp",
                            "data-wow-duration": "2s",
                            "data-wow-delay": "0.6s",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "icon-bx-wraper style-4 text-center",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "icon-bx-sm radius bg-blue shadow-blue m-b20",
                                        children: /*#__PURE__*/ _jsx("a", {
                                            href: "javascript:void(0);",
                                            className: "icon-cell",
                                            children: /*#__PURE__*/ _jsx("i", {
                                                className: "flaticon-startup"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "icon-content",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "title",
                                                children: "Project Lunched"
                                            }),
                                            /*#__PURE__*/ _jsx("h2", {
                                                className: "counter m-b0 text-primary",
                                                children: /*#__PURE__*/ _jsx(Counterup, {
                                                    count: 7894
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-3 col-sm-6 wow fadeInUp",
                            "data-wow-duration": "2s",
                            "data-wow-delay": "0.8s",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "icon-bx-wraper style-4 text-center m-tb30",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "icon-bx-sm radius bg-red shadow-red m-b20",
                                        children: /*#__PURE__*/ _jsx("a", {
                                            href: "javascript:void(0);",
                                            className: "icon-cell",
                                            children: /*#__PURE__*/ _jsx("i", {
                                                className: "flaticon-confetti"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "icon-content",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "title",
                                                children: "Years Completed"
                                            }),
                                            /*#__PURE__*/ _jsx("h2", {
                                                className: "counter m-b0 text-primary",
                                                children: /*#__PURE__*/ _jsx(Counterup, {
                                                    count: 65
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const counter = ((/* unused pure expression or super */ null && (Counter)));


/***/ })

};
;