"use strict";
exports.id = 993;
exports.ids = [993];
exports.modules = {

/***/ 6667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export Avatar */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Avatar = (props)=>{
    return /*#__PURE__*/ _jsx("div", {
        style: {
            width: `50px`,
            height: "50px",
            borderRadius: `100%`
        },
        children: /*#__PURE__*/ _jsx("img", {
            style: {
                width: `100%`,
                height: `100%`,
                borderRadius: `100%`
            },
            src: props.image
        })
    });
};


/***/ }),

/***/ 2422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


//Bicegelel adilhan
// const Button = (props:ButtonProps) => <div>{message}</div>;
const Button = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        onClick: props.onClick,
        className: "inline-flex items-center justify-center py-2 px-3 text-sm font-medium text-center text-dark-purple bg-white border border-dark-purple h-12 w-өшэ rounded-full hover:bg-mid-purple hover:text-white ",
        children: [
            props.children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                "aria-hidden": "true",
                className: "ml-2 -mr-1 w-4 h-4",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fillRule: "evenodd",
                    d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                    clipRule: "evenodd"
                })
            })
        ]
    });
};


/***/ }),

/***/ 6050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9980);



const Card = (props)=>{
    const { children  } = props;
    const { selectedAd  } = (0,_context_index__WEBPACK_IMPORTED_MODULE_2__/* .useSelectedContext */ .cC)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: selectedAd?.index === props.index && selectedAd !== undefined && " animate-border w-full max-w-sm border-dark-purple  border-2 p-6 max-w-md bg-white rounded mt-5 " || "p-6 max-w-md bg-white rounded-lg border border-dark-purple shadow-cardShadow mt-5",
        children: children
    });
};


/***/ }),

/***/ 4260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "p-4 bg-white rounded-lg ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            className: "block text-sm text-gray-500 sm:text-center ",
            children: [
                "\xa9 2022",
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "https://flowbite.com/",
                    className: "hover:underline",
                    children: "React"
                }),
                ". React HelloWorld."
            ]
        })
    });
};


/***/ }),

/***/ 3505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9980);



const Header = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { isLoggedIn  } = (0,_context__WEBPACK_IMPORTED_MODULE_2__/* .useIsUserLoggedContext */ .Cq)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
            className: "bg-white border-gray-200 px-4 lg:px-6 py-2.5 ",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-wrap justify-between items-center mx-auto max-w-screen-xl",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        onClick: ()=>{
                            router.push("/");
                        },
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
                                className: "mr-3 h-6 sm:h-9",
                                alt: "Flowbite Logo"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "self-center text-xl font-semibold whitespace-nowrap ",
                                children: "React"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center lg:order-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                style: {
                                    display: isLoggedIn ? "none" : "block"
                                },
                                onClick: ()=>router.push("loginPage"),
                                className: "z-10 text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ",
                                children: "Нэвтрэх/Бүртгүүлэх"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                style: {
                                    display: isLoggedIn ? "block" : "none"
                                },
                                onClick: ()=>router.push("profile"),
                                className: "z-10 text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ",
                                children: "Миний хэсэг"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1",
                        id: "mobile-menu-2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    onClick: ()=>{
                                        router.push("/");
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ",
                                        children: "Ажил Хайх"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        className: "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ",
                                        children: "Эрэлттэй хүмүүс"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 2918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Input = ({ placeholder , icon , onchange , name , userInput  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex hover:border-dark-purple hover:border-2 focus justify-between pl-4 pr-4 items-center border-solid border border-mid-purple h-12 w-72 rounded-full ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: "outline-none placeholder-mid-purple hover:placeholder-dark-purple",
                onChange: (e)=>onchange({
                        ...userInput,
                        [e.target.name]: e.target.value
                    }),
                name: name,
                placeholder: placeholder
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-2xl text-dark-purple",
                children: icon
            })
        ]
    });
};


/***/ }),

/***/ 1943:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ LayOut)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_2__]);
_index__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const LayOut = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-[100vh] w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h4, {}),
            props.children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$_, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ Shadow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Shadow = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "absolute w-[100%] h-[100%] bg-grey/3 backdrop-blur-xl flex justify-center overflow-none",
        children: children
    });
};


/***/ }),

/***/ 9455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export Chat */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Chat = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: "Chat"
    });
};


/***/ }),

/***/ 1065:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ ColasipbleChatBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_postButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9876);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4612);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9980);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_5__]);
([socket_io_client__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const connectChatServer = ()=>{
    const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)("http://localhost:8000/", {
        transports: [
            "websocket"
        ]
    });
    return socket;
};
const ColasipbleChatBox = ({ chatRoomName  })=>{
    const [isSentMessage, setIsSentMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { user  } = (0,_context__WEBPACK_IMPORTED_MODULE_7__/* .useUserContext */ .SE)();
    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            message: "",
            createdAt: "",
            owner: {
                email: ""
            }
        }
    ]);
    const listRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let socket = connectChatServer();
        socket.emit(`chat message`, message);
        return ()=>{
            socket.disconnect();
        };
    }, [
        isSentMessage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let socket = connectChatServer();
        socket.onAny(async (type, message)=>{
            if (message) {
                await setIsSentMessage((e)=>!e);
                scrollToLastMessage();
            }
        });
        return ()=>{
            socket.disconnect();
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function sendChat() {
            try {
                await axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(`http://localhost:8000/chat/${chatRoomName}/sendMessage`, {
                    message
                }, {
                    headers: {
                        authorization: (0,cookies_next__WEBPACK_IMPORTED_MODULE_6__.getCookie)("token")
                    }
                });
            } catch (error) {}
        }
        if (message !== "" && chatRoomName !== "") sendChat();
    }, [
        isSentMessage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function getMessages() {
            try {
                const data = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(`http://localhost:8000/chat/${chatRoomName}/getMessages`, {
                    headers: {
                        authorization: (0,cookies_next__WEBPACK_IMPORTED_MODULE_6__.getCookie)("token")
                    }
                });
                (0,react_dom__WEBPACK_IMPORTED_MODULE_4__.flushSync)(async ()=>{
                    setMessages(data.data.data);
                });
                scrollToLastMessage();
            } catch (error) {}
        }
        getMessages();
    }, [
        chatRoomName,
        isSentMessage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{});
    function scrollToLastMessage() {
        let lastChild = listRef.current.lastChild;
        lastChild?.scrollIntoView({
            block: "end",
            inline: "nearest",
            behavior: "smooth"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-48 w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "convo",
                className: "h-2/3 w-5/6 border border-black rounded-lg overflow-scroll ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    ref: listRef,
                    children: messages && messages.map((message)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: `m-1 flex justify-between w-full`,
                            children: message.owner && user.email === message.owner.email ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `border-2 px-2 relative rounded-xl ${message.owner && user.email === message.owner.email ? `bg-blue-500 ` : "bg-white "}`,
                                        children: message.message
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `border-2 px-2 relative rounded-xl ${message.owner && user.email === message.owner.email ? `bg-blue-500 ` : "bg-white "}`,
                                        children: message.message
                                    }),
                                    " "
                                ]
                            })
                        });
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: message,
                        onChange: async (e)=>{
                            await setMessage(e.target.value);
                        },
                        className: "border border-black rounded-lg w-4/6 h-8 align-center mt-2 mr-2"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_postButton__WEBPACK_IMPORTED_MODULE_2__/* .PostButton */ .I, {
                        data: "Send",
                        prop: "rgb(220, 211, 255)",
                        ym: async ()=>{
                            if (message !== "" && chatRoomName !== "") {
                                await setIsSentMessage((e)=>!e);
                                setMessage("");
                            }
                        }
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 630:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ UserProfileBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_postButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9876);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chatBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1065);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chatBox__WEBPACK_IMPORTED_MODULE_3__]);
_chatBox__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const UserProfileBox = (request)=>{
    const [isChatting, setChatting] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [chatRoom, setChatRoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "rounded-full h-12 w-12 border border-black mr-[10px]"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: request.request.email && request.request.email
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    "Дундаж үнэлгээ:",
                    " ",
                    request.request.averageRating && request.request.averageRating
                ]
            }),
            isChatting ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chatBox__WEBPACK_IMPORTED_MODULE_3__/* .ColasipbleChatBox */ .n, {
                chatRoomName: chatRoom
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_postButton__WEBPACK_IMPORTED_MODULE_1__/* .PostButton */ .I, {
                        data: "Батлах",
                        prop: "rgb(191, 252, 198)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_postButton__WEBPACK_IMPORTED_MODULE_1__/* .PostButton */ .I, {
                        data: isChatting ? "Дуусгах" : "Харилцах",
                        prop: "#FDFD96",
                        ym: async ()=>{
                            console.log("kkk");
                            await setChatRoom(request.request.chatRoomName);
                            console.log(request.request, "request.request");
                            setChatting(!isChatting);
                        }
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_2__.$),
/* harmony export */   "AC": () => (/* reexport safe */ _userSideBar__WEBPACK_IMPORTED_MODULE_6__.A),
/* harmony export */   "II": () => (/* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_3__.I),
/* harmony export */   "PP": () => (/* reexport safe */ _profileCard__WEBPACK_IMPORTED_MODULE_17__.P),
/* harmony export */   "Vh": () => (/* reexport safe */ _ui_myImage__WEBPACK_IMPORTED_MODULE_16__.V),
/* harmony export */   "Zb": () => (/* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "cS": () => (/* reexport safe */ _ui_menuList2__WEBPACK_IMPORTED_MODULE_10__.c),
/* harmony export */   "dm": () => (/* reexport safe */ _userSideBar__WEBPACK_IMPORTED_MODULE_6__.d),
/* harmony export */   "h4": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_1__.h),
/* harmony export */   "j8": () => (/* reexport safe */ _ui_siderBarBox__WEBPACK_IMPORTED_MODULE_15__.j8),
/* harmony export */   "jX": () => (/* reexport safe */ _Shadow__WEBPACK_IMPORTED_MODULE_11__.j),
/* harmony export */   "lD": () => (/* reexport safe */ _ui_siderBarBox__WEBPACK_IMPORTED_MODULE_15__.lD),
/* harmony export */   "lc": () => (/* reexport safe */ _postModel_Postmodel__WEBPACK_IMPORTED_MODULE_8__.l),
/* harmony export */   "ly": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_0__.l),
/* harmony export */   "qy": () => (/* reexport safe */ _ui_menuList__WEBPACK_IMPORTED_MODULE_9__.q),
/* harmony export */   "uk": () => (/* reexport safe */ _receivedpost__WEBPACK_IMPORTED_MODULE_7__.u),
/* harmony export */   "yQ": () => (/* reexport safe */ _ui_siderBarBox__WEBPACK_IMPORTED_MODULE_15__.yQ),
/* harmony export */   "zx": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_4__.z)
/* harmony export */ });
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1943);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3505);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4260);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2918);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2422);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6050);
/* harmony import */ var _userSideBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1244);
/* harmony import */ var _receivedpost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9533);
/* harmony import */ var _postModel_Postmodel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8133);
/* harmony import */ var _ui_menuList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4624);
/* harmony import */ var _ui_menuList2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7933);
/* harmony import */ var _Shadow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1449);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6667);
/* harmony import */ var _ui_postReceived__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9729);
/* harmony import */ var _ui_postButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9876);
/* harmony import */ var _ui_siderBarBox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4697);
/* harmony import */ var _ui_myImage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2965);
/* harmony import */ var _profileCard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8068);
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9455);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout__WEBPACK_IMPORTED_MODULE_0__, _userSideBar__WEBPACK_IMPORTED_MODULE_6__, _receivedpost__WEBPACK_IMPORTED_MODULE_7__, _postModel_Postmodel__WEBPACK_IMPORTED_MODULE_8__]);
([_Layout__WEBPACK_IMPORTED_MODULE_0__, _userSideBar__WEBPACK_IMPORTED_MODULE_6__, _receivedpost__WEBPACK_IMPORTED_MODULE_7__, _postModel_Postmodel__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8133:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ PostModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1449);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8993);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _index__WEBPACK_IMPORTED_MODULE_4__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, _index__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const PostModal = ({ cActive , setCactive  })=>{
    const [fileSelected, setFileSelected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [createObjectURL, setCreateObjectURL] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const formDatas = new FormData();
        formDatas.append("advertisingHeader", event.currentTarget.first.value);
        formDatas.append("detail", event.currentTarget.second.value);
        formDatas.append("price", event.currentTarget.third.value);
        formDatas.append("subject", event.currentTarget.fourth.value);
        formDatas.append("file", fileSelected);
        (0,axios__WEBPACK_IMPORTED_MODULE_1__["default"])({
            method: "post",
            url: "http://localhost:8000/post",
            data: formDatas,
            headers: {
                "Content-Type": "multipart/form-data",
                "authorization": (0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.getCookie)("token")
            }
        }).then(function(response) {
            setCactive(false);
        }).catch(function(response) {});
    };
    const uploadFile = function(e) {
        if (e.target.files && e.target.files[0]) {
            const i = e.target.files[0];
            setFileSelected(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shadow__WEBPACK_IMPORTED_MODULE_3__/* .Shadow */ .j, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            className: "w-full sm:w-3/4 md:w-2/4 lg:w-auto h-auto absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 p-10 rounded-3xl backdrop-blur-md bg-black ",
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "Create post"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: ()=>setCactive(false),
                            type: "button",
                            className: " text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center ",
                            "data-modal-toggle": "authentication-modal",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    "aria-hidden": "true",
                                    className: "w-5 h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                        clipRule: "evenodd"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sr-only",
                                    children: "Close"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-wrap -mx-3 mb-6",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full 2 px-3 mb-6 md:mb-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center",
                                children: "Title"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                                id: "grid-first-name",
                                type: "text",
                                placeholder: "Title",
                                name: "first"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-wrap -mx-3 mb-6",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full px-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center",
                                children: "Description"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "appearance-none block w-full h-auto bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white ",
                                type: "text",
                                placeholder: "...",
                                name: "second"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-wrap -mx-3 mb-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full md:w-1/3 px-3 mb-6 md:mb-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                                    children: "Price"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                                    type: "text",
                                    placeholder: "deal",
                                    name: "third"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full md:w-2/3 px-3 mb-6 md:mb-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                                    children: "Subject"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            className: "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                                            id: "grid-state",
                                            name: "fourth",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    children: "hicheel1"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    children: "hicheel2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    children: "hicheel3"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "fill-current h-4 w-4",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_4__/* .MyImage */ .Vh, {
                    src: createObjectURL
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-center items-center w-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "block mb-5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none ",
                        id: "small_size",
                        type: "file",
                        onChange: uploadFile
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "submit",
                    className: "w-auto h-[20px] text-gray-500 ",
                    children: "Submit"
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ ProfileCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ProfileCard = (props)=>{
    const { children  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: " w-2/3 flex flex-col flex-wrap border-dark-purple border shadow-cardShadow p-6 bg-white rounded mt-5 ",
        children: children
    });
};


/***/ }),

/***/ 9533:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ ReceivedPosts)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_postReceived__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9729);
/* harmony import */ var _ui_postButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9876);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8993);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _chat_userProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(630);
/* harmony import */ var _chat_chatBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1065);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_index__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_5__, _chat_userProfile__WEBPACK_IMPORTED_MODULE_7__, _chat_chatBox__WEBPACK_IMPORTED_MODULE_8__]);
([_components_index__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_5__, _chat_userProfile__WEBPACK_IMPORTED_MODULE_7__, _chat_chatBox__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ReceivedPosts = ()=>{
    const [personalPosts, setPersonalPosts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([
        {
            subject: "",
            detail: "",
            worker: {
                id: "",
                averageRating: "",
                email: ""
            },
            pendingRequest: [
                {
                    id: "",
                    averageRating: "",
                    email: ""
                }
            ]
        }
    ]);
    const [postIInterested, setPostIInterested] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([
        {
            chatRoom: "",
            subject: "",
            detail: ""
        }
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const getPostIInterested = async ()=>{
            const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_6__.getCookie)("token");
            try {
                const datas = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("http://localhost:8000/post/postToBeDone", {
                    headers: {
                        Authorization: token
                    }
                });
                setPostIInterested(datas.data.data);
            } catch (error) {}
        };
        getPostIInterested();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const getPersonalData = async ()=>{
            const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_6__.getCookie)("token");
            try {
                const datas = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("http://localhost:8000/users/posts", {
                    headers: {
                        Authorization: token
                    }
                });
                setPersonalPosts(datas.data.data);
            } catch (error) {}
        };
        getPersonalData();
    }, []);
    const postedButtonArr = [
        {
            textValue: "Edit",
            style: "#C4FAF8",
            function: ()=>console.log("edit")
        },
        {
            textValue: "Delete",
            style: "#FFABAB",
            function: (el)=>{
                const button = el.currentTarget;
                const id = button.value;
                axios__WEBPACK_IMPORTED_MODULE_5__["default"]["delete"](`http://localhost:8000/post/${id}`).then(function(response) {
                    console.log(response);
                });
            }
        }
    ];
    const buttonArr = [
        {
            textValue: "Submit",
            style: "#C4FAF8",
            function: ()=>console.log("edit")
        },
        {
            textValue: "Cancel",
            style: "#FFABAB",
            function: ()=>{
                console.log("canceled");
            }
        }
    ];
    const [chosen, setChosen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
    const [isChatting, setChatting] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [chatRoom, setChatRoom] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-col items-center lg:w-4/6 md:w-full xs:w-full m-auto ml-14 overflow-auto h-screen overscroll-y-none",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " h-[50px] pr-2 z-10 bg-white flex justify-between items-end",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-4xl text-center mt-4",
                        children: chosen ? "Миний зар" : "Хүлээн авсан зар"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .zx, {
                        onClick: ()=>setChosen(!chosen),
                        children: chosen ? "Хүлээн авсан зар" : "Миний зар"
                    })
                ]
            }),
            chosen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "overscroll-y-none flex-col flex items-center pb-[100px]",
                children: personalPosts.map((el, ind)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_index__WEBPACK_IMPORTED_MODULE_3__/* .ProfileCard */ .PP, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_postReceived__WEBPACK_IMPORTED_MODULE_1__/* .PostReceived */ .i, {
                                name: el.subject,
                                owner: "oruuln",
                                description: el.detail
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-row flex-wrap",
                                children: postedButtonArr?.map((el, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_postButton__WEBPACK_IMPORTED_MODULE_2__/* .PostButton */ .I, {
                                        data: el.textValue,
                                        prop: el.style,
                                        ym: el.function
                                    }, index))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: "Хийх хүсэлтүүд:"
                                    }),
                                    el.pendingRequest.map((request)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: " h-fit lg:w-[90%] md:w-[55vw] sm:w-[80%] border border-black rounded-lg flex flex-col p-2 mt-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chat_userProfile__WEBPACK_IMPORTED_MODULE_7__/* .UserProfileBox */ .l, {
                                                request: request
                                            })
                                        });
                                    }),
                                    el.worker.id && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-yellow-300 flex flex-col",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                children: "Хийх хүн"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center justify-around",
                                                children: [
                                                    el.worker.email,
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_postButton__WEBPACK_IMPORTED_MODULE_2__/* .PostButton */ .I, {
                                                        data: "Харилцах",
                                                        prop: "rgb(225 29 72)"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, ind);
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "overscroll-y-none flex-col flex items-center pb-[100px]",
                children: postIInterested.map((el, ind)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_index__WEBPACK_IMPORTED_MODULE_3__/* .ProfileCard */ .PP, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_postReceived__WEBPACK_IMPORTED_MODULE_1__/* .PostReceived */ .i, {
                                name: el.subject,
                                owner: "oruuln",
                                description: el.detail
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row flex-wrap",
                                children: [
                                    buttonArr?.map((el, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_postButton__WEBPACK_IMPORTED_MODULE_2__/* .PostButton */ .I, {
                                            data: el.textValue,
                                            prop: el.style,
                                            ym: el.function
                                        }, index)),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_postButton__WEBPACK_IMPORTED_MODULE_2__/* .PostButton */ .I, {
                                        data: isChatting ? "Дуусгах" : "Харилцах",
                                        prop: "#FDFD96",
                                        ym: async ()=>{
                                            console.log(el.chatRoom, "el.chatRoom");
                                            await setChatRoom(el.chatRoom);
                                            setChatting(!isChatting);
                                        }
                                    })
                                ]
                            }),
                            isChatting ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chat_chatBox__WEBPACK_IMPORTED_MODULE_8__/* .ColasipbleChatBox */ .n, {
                                chatRoomName: chatRoom
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                        ]
                    }, ind);
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ MenuList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const MenuList = ({ name , spanText , href  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: href,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "flex-1 ml-3 whitespace-nowrap font-semibold",
                        children: spanText
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "flex-1 whitespace-nowrap",
                        children: name
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 7933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ MenuList2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const MenuList2 = ({ name , svg , onClick  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 ",
            onClick: onClick,
            children: [
                svg,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "ml-4 cursor-pointer",
                    children: name
                })
            ]
        })
    });
};


/***/ }),

/***/ 2965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ MyImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const MyImage = ({ src , width , quality  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex items-center justify-center p-5",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: src,
            className: "w-3/4 h-[240px]"
        })
    });
};


/***/ }),

/***/ 9876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ PostButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PostButton = ({ prop , data , ym  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "pt-4 ",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: ym,
            style: {
                backgroundColor: `${prop}`
            },
            className: "inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ",
            children: data
        })
    });
};


/***/ }),

/***/ 9729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ PostReceived)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PostReceived = ({ name , owner , description  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-row flex-wrap w-screen md:w-screen lg:w-11/12 ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "font-bold text-xl mb-2",
                    children: name
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-m mb-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "font-bold text-base",
                            children: "Зар тавьсан:"
                        }),
                        owner
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "text-gray-700 text-base",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "font-bold text-gray-600 text-base",
                            children: "Бие даалт:"
                        }),
                        description
                    ]
                })
            ]
        })
    });
};
{
/* <img
				                    className='w-full'
				                    src='/img/card-top.jpg'
				                    alt='Sunset in the mountains'
			                    /> */ }

/***/ }),

/***/ 4697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j8": () => (/* binding */ SidebarBox),
/* harmony export */   "lD": () => (/* binding */ ColasipbleSidebarBox),
/* harmony export */   "yQ": () => (/* binding */ SidebarBox2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_collapsed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var react_collapsed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_collapsed__WEBPACK_IMPORTED_MODULE_2__);



const SidebarBox = (props)=>{
    const { children  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            marginTop: "25px"
        },
        className: "bg-white rounded-lg border-mid-purple border shadow-sidebarbox mt-0 ",
        children: children
    });
};
const SidebarBox2 = (props)=>{
    const { children  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            marginTop: "25px"
        },
        className: "bg-white rounded-lg border-mid-purple border shadow-sidebarbox2 mt-0 ",
        children: children
    });
};
const ColasipbleSidebarBox = (props)=>{
    const [isExpanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { getCollapseProps , getToggleProps  } = react_collapsed__WEBPACK_IMPORTED_MODULE_2___default()({
        isExpanded
    });
    function handleOnClick() {
        setExpanded(!isExpanded);
    }
    const { children  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "collapsible",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "header",
                ...getToggleProps({
                    onClick: handleOnClick
                }),
                children: isExpanded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        marginTop: "25px"
                    },
                    className: "bg-white rounded-lg border-mid-purple border shadow-sidebarbox mt-0 ",
                    children: children
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                marginTop: "25px"
                            },
                            className: "bg-white rounded-lg border-mid-purple border shadow-sidebarbox mt-0 ",
                            children: children
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                marginTop: "15px"
                            },
                            className: "bg-white rounded-lg border-mid-purple border shadow-sidebarbox mt-0 flex flex-col",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: "(хичээлийн нэр):(ng too) "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: "(хичээлийн нэр):(ng too) "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: "(хичээлийн нэр):(ng too) "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: "(хичээлийн нэр):(ng too) "
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ...getCollapseProps()
            })
        ]
    });
};


/***/ }),

/***/ 1244:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ UserSideBar),
/* harmony export */   "d": () => (/* binding */ SeizedSideBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8993);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9980);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_index__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_5__]);
([_components_index__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const UserSideBar = ()=>{
    const { user , setUser  } = (0,_context_index__WEBPACK_IMPORTED_MODULE_3__/* .useUserContext */ .SE)();
    const [editing, setEditing] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { cActive , setCactive  } = (0,_context_index__WEBPACK_IMPORTED_MODULE_3__/* .useCollectionContext */ .dI)();
    const isActive = true;
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const getPersonalInfo = async ()=>{
            const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("token");
            try {
                const datas = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("http://localhost:8000/users/myInfo", {
                    headers: {
                        Authorization: token
                    }
                });
                console.log(datas.data);
                setUser(datas.data.data);
            } catch (error) {}
        };
        getPersonalInfo();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
            className: "w-96 ml-24 h-[100vh]",
            "aria-label": "Sidebar",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " overflow-y-auto py-4 px-3 bg-light-purple rounded-lg flex-col align-center items-center h-full border border-light-purple",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "space-y-2 ",
                        children: [
                            !editing ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "h-64 w-64 rounded-full border-white border-2 shadow-sidebarbox mb-16 bg-white"
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "image"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .SidebarBox */ .j8, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .MenuList */ .qy, {
                                        name: user.LastName,
                                        spanText: "Овог",
                                        href: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .MenuList */ .qy, {
                                        name: user.FirstName,
                                        spanText: "Нэр",
                                        href: ""
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .SidebarBox */ .j8, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .MenuList */ .qy, {
                                        name: user.School,
                                        spanText: "Их сургууль",
                                        href: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .MenuList */ .qy, {
                                        name: user.level,
                                        spanText: "Курс",
                                        href: ""
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "pt-4 mt-4 space-y-2 border-t border-gray-200 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .ColasipbleSidebarBox */ .lD, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .MenuList2 */ .cS, {
                                    onClick: ()=>{},
                                    name: "Хийсэн бие даалтын тоо",
                                    svg: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "1.5",
                                        stroke: "currentColor",
                                        className: "w-6 h-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .ColasipbleSidebarBox */ .lD, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .MenuList2 */ .cS, {
                                    onClick: ()=>{},
                                    name: "Бие даалтын дундаж үнэлгээ",
                                    svg: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "1.5",
                                        stroke: "currentColor",
                                        className: "w-6 h-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    height: "0.8vw"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .SidebarBox2 */ .yQ, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .MenuList2 */ .cS, {
                                    onClick: ()=>{
                                        setEditing(!editing);
                                    },
                                    name: "Профайл өөрчлөх",
                                    svg: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "1.5",
                                        stroke: "currentColor",
                                        className: "w-6 h-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .SidebarBox2 */ .yQ, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .MenuList2 */ .cS, {
                                    onClick: ()=>{
                                        isActive ? setCactive(true) : setCactive(false);
                                    },
                                    name: "Зар Нэмэх",
                                    svg: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "1.5",
                                        stroke: "currentColor",
                                        className: "w-6 h-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .SidebarBox2 */ .yQ, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .MenuList2 */ .cS, {
                                    onClick: ()=>{
                                        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.deleteCookie)("token");
                                        location.reload();
                                    },
                                    name: "Гарах",
                                    svg: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        "aria-hidden": "true",
                                        className: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 ",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
                                            clipRule: "evenodd"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
const SeizedSideBar = ()=>{
    const { cActive , setCactive  } = (0,_context_index__WEBPACK_IMPORTED_MODULE_3__/* .useCollectionContext */ .dI)();
    const isActive = true;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
        className: "fixed top-64 flex justify-center left-2 md:w-24 xs:w-48 h-fit",
        "aria-label": "Sidebar",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: " overflow-y-auto py-4 px-3 bg-dark-purple rounded-lg flex-col align-center h-full border border-light-purple text-white",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "space-y-2 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .MenuList2 */ .cS, {
                        onClick: ()=>{},
                        name: "",
                        svg: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: "1.5",
                            stroke: "currentColor",
                            className: "w-8 h-8 text-white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .MenuList2 */ .cS, {
                        onClick: ()=>{},
                        name: "",
                        svg: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: "1.5",
                            stroke: "currentColor",
                            className: "w-8 h-8 text-white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .MenuList2 */ .cS, {
                        onClick: ()=>{},
                        name: "",
                        svg: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: "1.5",
                            stroke: "currentColor ",
                            className: "w-8 h-8 text-white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .MenuList2 */ .cS, {
                        onClick: ()=>{},
                        name: "",
                        svg: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: "1.5",
                            stroke: "currentColor",
                            className: "w-8 h-8 text-white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .MenuList2 */ .cS, {
                        onClick: ()=>{
                            isActive ? setCactive(true) : setCactive(false);
                        },
                        name: "",
                        svg: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: "1.5",
                            stroke: "currentColor",
                            className: "w-8 h-8 text-white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .MenuList2 */ .cS, {
                        onClick: ()=>{
                            (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.deleteCookie)("token");
                            location.reload();
                        },
                        name: "",
                        svg: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            "aria-hidden": "true",
                            className: "flex-shrink-0 w-6 h-6 text-white transition duration-75 group-hover:text-gray-900 ",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fillRule: "evenodd",
                                d: "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
                                clipRule: "evenodd"
                            })
                        })
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eB": () => (/* binding */ IsAgainGetDatasProvider),
/* harmony export */   "i2": () => (/* binding */ useIsAgainGetDatas)
/* harmony export */ });
/* unused harmony export IsAgainGetDatas */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const IsAgainGetDatas = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    isAgainGetDatas: false,
    setIsAgainGetDatas: (_val)=>{}
});
const IsAgainGetDatasProvider = ({ children  })=>{
    const [isAgainGetDatas, setIsAgainGetDatas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IsAgainGetDatas.Provider, {
        value: {
            isAgainGetDatas,
            setIsAgainGetDatas
        },
        children: children
    });
};
const useIsAgainGetDatas = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(IsAgainGetDatas);


/***/ }),

/***/ 9980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L3": () => (/* reexport */ isActive/* CollectionContextProvider */.L3),
  "eB": () => (/* reexport */ againGetAllDatas/* IsAgainGetDatasProvider */.eB),
  "jS": () => (/* reexport */ IsUserLoggedContextProvider),
  "gF": () => (/* reexport */ SelectedAdContextProvider),
  "fS": () => (/* reexport */ UserContextProvider),
  "dI": () => (/* reexport */ isActive/* useCollectionContext */.dI),
  "Cq": () => (/* reexport */ useIsUserLoggedContext),
  "cC": () => (/* reexport */ useSelectedContext),
  "SE": () => (/* reexport */ useUserContext)
});

// UNUSED EXPORTS: CollectionContext, IsAgainGetDatas, IsUserLoggedContext, SelectedAdContext, UserContext, useIsAgainGetDatas

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./context/selectedAd.tsx


const SelectedAdContext = /*#__PURE__*/ (0,external_react_.createContext)({
    selectedAd: {
        index: null,
        ad: {
            owner: {
                name: ""
            },
            _id: "",
            advertisingHeader: "",
            createdAt: "",
            detail: ""
        }
    },
    setSelectedAd: (_val)=>{}
});
const SelectedAdContextProvider = ({ children  })=>{
    const [selectedAd, setSelectedAd] = (0,external_react_.useState)();
    return /*#__PURE__*/ jsx_runtime_.jsx(SelectedAdContext.Provider, {
        value: {
            selectedAd,
            setSelectedAd
        },
        children: children
    });
};
const useSelectedContext = ()=>(0,external_react_.useContext)(SelectedAdContext);

// EXTERNAL MODULE: ./context/isActive.tsx
var isActive = __webpack_require__(7795);
// EXTERNAL MODULE: ./context/againGetAllDatas.tsx
var againGetAllDatas = __webpack_require__(1939);
// EXTERNAL MODULE: external "cookies-next"
var external_cookies_next_ = __webpack_require__(8982);
;// CONCATENATED MODULE: ./context/isUserLoggedIn.tsx



const IsUserLoggedContext = /*#__PURE__*/ (0,external_react_.createContext)({
    isLoggedIn: false,
    setIsLoggedIn: (val)=>{}
});
const IsUserLoggedContextProvider = ({ children  })=>{
    const [isLoggedIn, setIsLoggedIn] = (0,external_react_.useState)(false);
    const loadedRef = (0,external_react_.useRef)(false);
    (0,external_react_.useEffect)(()=>{
        getTokenFromLocal();
    }, []);
    async function getTokenFromLocal() {
        let token;
        try {
            token = await (0,external_cookies_next_.getCookie)("token");
            if (token) setIsLoggedIn(true);
        } catch (error) {}
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(IsUserLoggedContext.Provider, {
        value: {
            isLoggedIn,
            setIsLoggedIn
        },
        children: children
    });
};
const useIsUserLoggedContext = ()=>(0,external_react_.useContext)(IsUserLoggedContext);

;// CONCATENATED MODULE: ./context/user.tsx


const UserContext = /*#__PURE__*/ (0,external_react_.createContext)({
    user: {
        LastName: "",
        FirstName: "",
        School: "",
        level: "",
        email: ""
    },
    setUser: (val)=>{}
});
const UserContextProvider = ({ children  })=>{
    // Button false or true
    const [user, setUser] = (0,external_react_.useState)({
        LastName: "",
        FirstName: "",
        School: "",
        level: "",
        email: ""
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(UserContext.Provider, {
        value: {
            user,
            setUser
        },
        children: children
    });
};
const useUserContext = ()=>(0,external_react_.useContext)(UserContext);

;// CONCATENATED MODULE: ./context/index.tsx







/***/ }),

/***/ 7795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L3": () => (/* binding */ CollectionContextProvider),
/* harmony export */   "dI": () => (/* binding */ useCollectionContext)
/* harmony export */ });
/* unused harmony export CollectionContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CollectionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    cActive: true,
    setCactive: (val)=>{}
});
const CollectionContextProvider = ({ children  })=>{
    // Button false or true
    const [cActive, setCactive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CollectionContext.Provider, {
        value: {
            cActive,
            setCactive
        },
        children: children
    });
};
const useCollectionContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CollectionContext);


/***/ })

};
;