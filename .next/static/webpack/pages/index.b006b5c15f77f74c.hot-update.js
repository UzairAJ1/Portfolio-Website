"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/skills/Skill.js":
/*!****************************************!*\
  !*** ./src/components/skills/Skill.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_react_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../public/react.svg */ \"./public/react.svg\");\n\n\n\n\n\nconst skill = (param)=>{\n    let { backgroundImg , percent  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            className: \"relative flex cursor-pointer w-16 h-16\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: backgroundImg,\n                    \"object-fit\": \"cover\",\n                    layout: \"fill\",\n                    style: {\n                        color: \"white\"\n                    },\n                    className: \"border rounded-full p-2\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\uzair\\\\Portfolio-Website\\\\src\\\\components\\\\skills\\\\Skill.js\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"opacity-0 hover:opacity-80 absolute md:h-12 md:w-12 z-0 hover:bg-white rounded-full flex items-center justify-center transition duration-300 ease-in-out\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold text-black\",\n                        children: percent\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\uzair\\\\Portfolio-Website\\\\src\\\\components\\\\skills\\\\Skill.js\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\uzair\\\\Portfolio-Website\\\\src\\\\components\\\\skills\\\\Skill.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\uzair\\\\Portfolio-Website\\\\src\\\\components\\\\skills\\\\Skill.js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (skill);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9za2lsbHMvU2tpbGwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQTRFO0FBQ3RDO0FBQ1I7QUFDTztBQUVyQyxNQUFNSSxRQUFRLFNBQStCO1FBQTlCLEVBQUVDLGNBQWEsRUFBQ0MsUUFBTyxFQUFFO0lBRXBDLHFCQUNJO2tCQUNJLDRFQUFDTCxxREFBVTtZQUFDTyxXQUFVOzs4QkFFbEIsOERBQUNOLG1EQUFLQTtvQkFBRU8sS0FBS0o7b0JBQWVLLGNBQVc7b0JBQVFDLFFBQU87b0JBQU9DLE9BQU87d0JBQUVDLE9BQU87b0JBQVE7b0JBQUdMLFdBQVU7Ozs7Ozs4QkFFbEcsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDTTt3QkFBR04sV0FBVTtrQ0FBaUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkU7QUFFQSwrREFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9za2lsbHMvU2tpbGwuanM/ZmFkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEphdmFzY3JpcHRPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9KYXZhc2NyaXB0T3V0bGluZWQnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJy9wdWJsaWMvcmVhY3Quc3ZnJ1xyXG5cclxuY29uc3Qgc2tpbGwgPSAoeyBiYWNrZ3JvdW5kSW1nLHBlcmNlbnQgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBmbGV4IGN1cnNvci1wb2ludGVyIHctMTYgaC0xNic+XHJcblxyXG4gICAgICAgICAgICAgICAgPEltYWdlICBzcmM9e2JhY2tncm91bmRJbWd9IG9iamVjdC1maXQ9XCJjb3ZlclwiIGxheW91dD1cImZpbGxcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSBjbGFzc05hbWU9J2JvcmRlciByb3VuZGVkLWZ1bGwgcC0yJyAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvcGFjaXR5LTAgaG92ZXI6b3BhY2l0eS04MCBhYnNvbHV0ZSBtZDpoLTEyIG1kOnctMTIgei0wIGhvdmVyOmJnLXdoaXRlIHJvdW5kZWQtZnVsbCAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrJz57cGVyY2VudH08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBza2lsbCJdLCJuYW1lcyI6WyJKYXZhc2NyaXB0T3V0bGluZWRJY29uIiwibW90aW9uIiwiSW1hZ2UiLCJyZWFjdCIsInNraWxsIiwiYmFja2dyb3VuZEltZyIsInBlcmNlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJvYmplY3QtZml0IiwibGF5b3V0Iiwic3R5bGUiLCJjb2xvciIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/skills/Skill.js\n"));

/***/ })

});