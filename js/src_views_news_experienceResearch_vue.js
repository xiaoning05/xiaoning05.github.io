"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkservice_platform"] = self["webpackChunkservice_platform"] || []).push([["src_views_news_experienceResearch_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/news/experienceResearch.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/news/experienceResearch.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _components_notice_notice_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/notice/notice.vue */ \"./src/components/notice/notice.vue\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Notice: _components_notice_notice_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  setup() {\n    const onClickLeft = () => history.back();\n    const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const list = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([{\n      time: '2022-08-30上午10：28',\n      title: '服务需求调研',\n      tips: '尊敬的客户，诚邀您花1-2分钟告知您的服务需求，以便我们更好地为您服务。'\n    }]);\n    const goDetails = () => {\n      router.push('/questionnaire');\n    };\n    return {\n      onClickLeft,\n      goDetails,\n      list\n    };\n  }\n});\n\n//# sourceURL=webpack://service_platform/./src/views/news/experienceResearch.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/news/experienceResearch.vue?vue&type=template&id=a76e2f92":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/news/experienceResearch.vue?vue&type=template&id=a76e2f92 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"bg\"\n};\nconst _hoisted_2 = {\n  class: \"list\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_van_nav_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"van-nav-bar\");\n  const _component_Notice = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Notice\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_van_nav_bar, {\n    title: \"客户体验调研\",\n    \"left-arrow\": \"\",\n    onClickLeft: $setup.onClickLeft,\n    placeholder: true\n  }, null, 8 /* PROPS */, [\"onClickLeft\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Notice, {\n    list: $setup.list,\n    linkFn: $setup.goDetails,\n    butText: '请填写',\n    isHide: false\n  }, null, 8 /* PROPS */, [\"list\", \"linkFn\"])])]);\n}\n\n//# sourceURL=webpack://service_platform/./src/views/news/experienceResearch.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/views/news/experienceResearch.vue":
/*!***********************************************!*\
  !*** ./src/views/news/experienceResearch.vue ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _experienceResearch_vue_vue_type_template_id_a76e2f92__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experienceResearch.vue?vue&type=template&id=a76e2f92 */ \"./src/views/news/experienceResearch.vue?vue&type=template&id=a76e2f92\");\n/* harmony import */ var _experienceResearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experienceResearch.vue?vue&type=script&lang=js */ \"./src/views/news/experienceResearch.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_experienceResearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_experienceResearch_vue_vue_type_template_id_a76e2f92__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/news/experienceResearch.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://service_platform/./src/views/news/experienceResearch.vue?");

/***/ }),

/***/ "./src/views/news/experienceResearch.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./src/views/news/experienceResearch.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_experienceResearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_experienceResearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./experienceResearch.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/news/experienceResearch.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://service_platform/./src/views/news/experienceResearch.vue?");

/***/ }),

/***/ "./src/views/news/experienceResearch.vue?vue&type=template&id=a76e2f92":
/*!*****************************************************************************!*\
  !*** ./src/views/news/experienceResearch.vue?vue&type=template&id=a76e2f92 ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_experienceResearch_vue_vue_type_template_id_a76e2f92__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_experienceResearch_vue_vue_type_template_id_a76e2f92__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./experienceResearch.vue?vue&type=template&id=a76e2f92 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/news/experienceResearch.vue?vue&type=template&id=a76e2f92\");\n\n\n//# sourceURL=webpack://service_platform/./src/views/news/experienceResearch.vue?");

/***/ })

}]);