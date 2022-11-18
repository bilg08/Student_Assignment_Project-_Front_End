exports.id = 738;
exports.ids = [738];
exports.modules = {

/***/ 2285:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "login_section__flLF7",
	"color": "login_color__mdqw0",
	"color1": "login_color1___LwKL",
	"color2": "login_color2__9mBJ6",
	"color3": "login_color3__khqgY",
	"box": "login_box__EAWmR",
	"square": "login_square__X46cl",
	"animate": "login_animate__2uYef",
	"square1": "login_square1__ZeUew",
	"square2": "login_square2__K7VhF",
	"square3": "login_square3___Y8R6",
	"square4": "login_square4__xGc1C",
	"square5": "login_square5__E9X16",
	"container": "login_container__PKLw_",
	"form": "login_form__H7Yjv",
	"inputBox": "login_inputBox__TDBzA",
	"forget": "login_forget__KcGUE"
};


/***/ }),

/***/ 7647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* reexport */ useWindowWidth)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./hooks/windowWidth.tsx

const useWindowWidth = ()=>{
    const [windowWidth, setWindowWidth] = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    return windowWidth;
};

;// CONCATENATED MODULE: ./hooks/index.ts



/***/ }),

/***/ 3765:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2285);
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9980);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6459);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, _profile__WEBPACK_IMPORTED_MODULE_6__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, _profile__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const LoginPage = ()=>{
    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { isLoggedIn  } = (0,_context__WEBPACK_IMPORTED_MODULE_4__/* .useIsUserLoggedContext */ .Cq)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    if (isLoggedIn) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_profile__WEBPACK_IMPORTED_MODULE_6__["default"], {});
    function takeUserInput(e) {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        });
    }
    async function login() {
        await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("http://localhost:8000/users/login", userInput).then(async (response)=>{
            await (0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.setCookie)("token", response.data.token);
            location.reload();
        });
    }
    async function signUp() {
        await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("http://localhost:8000/users/register", userInput).then(async (response)=>{
            await (0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.setCookie)("token", response.data.token);
            location.reload();
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().section),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().color),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().color1)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().color2)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().color3)
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().box),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().square),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().square1)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().square2)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().square3)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().square4)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().square5)
                            })
                        ]
                    }),
                    isLogin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().form),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Нэвтрэх"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    onSubmit: (e)=>e.preventDefault(),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().inputBox),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                onChange: takeUserInput,
                                                type: "text",
                                                placeholder: "ИМайл",
                                                name: "email"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().inputBox),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                onChange: takeUserInput,
                                                name: "password",
                                                type: "password",
                                                placeholder: "Нууц үг"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().inputBox),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                onClick: (e)=>{
                                                    login();
                                                },
                                                type: "submit",
                                                value: "Нэвтрэх"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().forget),
                                            children: "Нууц үгээ мартсан"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            onClick: ()=>{
                                                setUserInput({});
                                                setIsLogin(false);
                                            },
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().forget),
                                            children: [
                                                "Шинэ хэрэглэгч?",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    style: {
                                                        color: "#804fb3"
                                                    },
                                                    children: "Бүртгүүлэх"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    !isLogin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().form),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Бүртгүүлэх"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    onSubmit: (e)=>e.preventDefault(),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().inputBox),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                onChange: takeUserInput,
                                                type: "text",
                                                placeholder: "Таны Овог",
                                                name: "FirstName"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().inputBox),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                onChange: takeUserInput,
                                                type: "text",
                                                placeholder: "Таны нэр",
                                                name: "LastName"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().inputBox),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                placeholder: "Сургууль",
                                                style: {
                                                    width: "100%",
                                                    background: "rgba(255,255,255,0.2)",
                                                    border: "none",
                                                    outline: "none",
                                                    padding: "10px 20px",
                                                    borderRadius: "35px",
                                                    borderWidth: "1px",
                                                    borderStyle: "solid",
                                                    borderColor: "rgba(255,255,255,0.5)",
                                                    borderRight: "1px solid rgba(255,255,255,0.2)",
                                                    borderBottom: "1px solid rgba(255,255,255,0.2)",
                                                    fontSize: "16px",
                                                    letterSpacing: "1px",
                                                    color: "#fff",
                                                    boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
                                                },
                                                name: "School",
                                                id: "",
                                                onChange: takeUserInput,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "NUM",
                                                        children: "NUM"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "UFE",
                                                        children: "UFE"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "MUST",
                                                        children: "MUST"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().inputBox),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                onChange: takeUserInput,
                                                type: "text",
                                                placeholder: "Түвшин",
                                                name: "level"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().inputBox),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                onChange: takeUserInput,
                                                name: "email",
                                                type: "email",
                                                placeholder: "И-мэйл"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().inputBox),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                onChange: takeUserInput,
                                                name: "password",
                                                type: "password",
                                                placeholder: "Нууц үг"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().inputBox),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                onClick: (e)=>{
                                                    signUp();
                                                },
                                                type: "submit",
                                                value: "Бүртгүүлэх"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            onClick: ()=>setIsLogin(true),
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().forget),
                                            children: [
                                                "Би өмнө нь бүртгүүлчихсэн",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    style: {
                                                        color: "#804fb3"
                                                    },
                                                    children: "Нэвтрэх"
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
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6459:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8993);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9980);
/* harmony import */ var _context_isActive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7795);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7647);
/* harmony import */ var _loginPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3765);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_index__WEBPACK_IMPORTED_MODULE_2__, _loginPage__WEBPACK_IMPORTED_MODULE_6__]);
([_components_index__WEBPACK_IMPORTED_MODULE_2__, _loginPage__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const UserProfile = ()=>{
    const { cActive , setCactive  } = (0,_context_isActive__WEBPACK_IMPORTED_MODULE_4__/* .useCollectionContext */ .dI)();
    const { isLoggedIn  } = (0,_context__WEBPACK_IMPORTED_MODULE_3__/* .useIsUserLoggedContext */ .Cq)();
    const windowWidth = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useWindowWidth */ .L)();
    if (!isLoggedIn) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_loginPage__WEBPACK_IMPORTED_MODULE_6__["default"], {});
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            display: "flex",
            flexDirection: "row"
        },
        children: [
            windowWidth >= 950 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__/* .UserSideBar */ .AC, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__/* .SeizedSideBar */ .dm, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__/* .ReceivedPosts */ .uk, {}),
            cActive ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__/* .PostModal */ .lc, {
                cActive: cActive,
                setCactive: setCactive
            }) : false
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProfile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;