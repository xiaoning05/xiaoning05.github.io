"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkservice_platform"] = self["webpackChunkservice_platform"] || []).push([["src_views_layout_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/layout/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/layout/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  setup() {\n    const store = (0,vuex__WEBPACK_IMPORTED_MODULE_1__.useStore)(); // 获取 Store 实例\n    // const { action1, action2 } = mapActions(['action1', 'action2']);\n    const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // const active = ref(0);\n    const routerList = ['/layout/home', '/layout/serve', '/layout/news', '/layout/chooseProduct', '/layout/my'];\n    // const onChange = (index) => router.push(routerList[index]);\n    const switchMenu = index => {\n      store.dispatch('setBottomMenu', {\n        bottomMenuIndex: index\n      });\n    };\n    return {\n      // active,\n      // onChange,\n      switchMenu\n    };\n  }\n});\n\n//# sourceURL=webpack://service_platform/./src/views/layout/index.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/layout/index.vue?vue&type=template&id=038e7047":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/layout/index.vue?vue&type=template&id=038e7047 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-view\");\n  const _component_van_tabbar_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"van-tabbar-item\");\n  const _component_van_tabbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"van-tabbar\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_van_tabbar, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(_ctx.$store.state.bottomMenu, {\n    placeholder: true,\n    route: \"\"\n  }), {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_van_tabbar_item, {\n      onClick: _cache[0] || (_cache[0] = $event => $setup.switchMenu(0)),\n      to: \"/layout/home\",\n      icon: \"wap-home-o\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"首页\")]),\n      _: 1 /* STABLE */\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_van_tabbar_item, {\n      onClick: _cache[1] || (_cache[1] = $event => $setup.switchMenu(1)),\n      to: \"/layout/serve\",\n      icon: \"shield-o\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"服务\")]),\n      _: 1 /* STABLE */\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_van_tabbar_item, {\n      onClick: _cache[2] || (_cache[2] = $event => $setup.switchMenu(2)),\n      to: \"/layout/news\",\n      icon: \"chat-o\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"消息\")]),\n      _: 1 /* STABLE */\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_van_tabbar_item, {\n      onClick: _cache[3] || (_cache[3] = $event => $setup.switchMenu(3)),\n      to: \"/layout/chooseProduct\",\n      icon: \"apps-o\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"已购\")]),\n      _: 1 /* STABLE */\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_van_tabbar_item, {\n      onClick: _cache[4] || (_cache[4] = $event => $setup.switchMenu(4)),\n      to: \"/layout/my\",\n      icon: \"user-o\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"我的\")]),\n      _: 1 /* STABLE */\n    })]),\n    _: 1 /* STABLE */\n  }, 16 /* FULL_PROPS */)]);\n}\n\n//# sourceURL=webpack://service_platform/./src/views/layout/index.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/views/layout/index.vue":
/*!************************************!*\
  !*** ./src/views/layout/index.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_038e7047__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=038e7047 */ \"./src/views/layout/index.vue?vue&type=template&id=038e7047\");\n/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ \"./src/views/layout/index.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_index_vue_vue_type_template_id_038e7047__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/layout/index.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://service_platform/./src/views/layout/index.vue?");

/***/ }),

/***/ "./src/views/layout/index.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/views/layout/index.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/layout/index.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://service_platform/./src/views/layout/index.vue?");

/***/ }),

/***/ "./src/views/layout/index.vue?vue&type=template&id=038e7047":
/*!******************************************************************!*\
  !*** ./src/views/layout/index.vue?vue&type=template&id=038e7047 ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_038e7047__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_038e7047__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=038e7047 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/layout/index.vue?vue&type=template&id=038e7047\");\n\n\n//# sourceURL=webpack://service_platform/./src/views/layout/index.vue?");

/***/ })

}]);