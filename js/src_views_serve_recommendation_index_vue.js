/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkservice_platform"] = self["webpackChunkservice_platform"] || []).push([["src_views_serve_recommendation_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/serve/recommendation/index.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/serve/recommendation/index.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'index',\n  setup(__props, {\n    expose\n  }) {\n    expose();\n    const route = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.useRoute)();\n    const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const goToHotSales = () => {\n      router.push('/hotSales');\n    };\n    const list = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);\n    const loading = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);\n    const finished = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);\n    const refreshing = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);\n    const onLoad = () => {\n      setTimeout(() => {\n        if (refreshing.value) {\n          list.value = [];\n          refreshing.value = false;\n        }\n        for (let i = 0; i < 10; i++) {\n          list.value.push(list.value.length + 1);\n        }\n        loading.value = false;\n        if (list.value.length >= 10) {\n          finished.value = true;\n        }\n      }, 1000);\n    };\n    const onRefresh = () => {\n      // 清空列表数据\n      finished.value = false;\n\n      // 重新加载数据\n      // 将 loading 设置为 true，表示处于加载状态\n      loading.value = true;\n      onLoad();\n    };\n    const __returned__ = {\n      route,\n      router,\n      goToHotSales,\n      list,\n      loading,\n      finished,\n      refreshing,\n      onLoad,\n      onRefresh,\n      get useRoute() {\n        return vue_router__WEBPACK_IMPORTED_MODULE_2__.useRoute;\n      },\n      get useRouter() {\n        return vue_router__WEBPACK_IMPORTED_MODULE_2__.useRouter;\n      },\n      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://service_platform/./src/views/serve/recommendation/index.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/serve/recommendation/index.vue?vue&type=template&id=199b9cd4":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/serve/recommendation/index.vue?vue&type=template&id=199b9cd4 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"recommendation\"\n};\nconst _hoisted_2 = {\n  class: \"hotSales\"\n};\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n  src: \"https://img1.baidu.com/it/u=3007048469,3759326707&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1682528400&t=ec2b05ac4caa5f4dec0df675c18b2452\",\n  alt: \"\"\n}, null, -1 /* HOISTED */);\nconst _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"云桌面，用过的都说好\", -1 /* HOISTED */);\nconst _hoisted_5 = [_hoisted_3, _hoisted_4];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_van_nav_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"van-nav-bar\");\n  const _component_van_list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"van-list\");\n  const _component_van_pull_refresh = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"van-pull-refresh\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_van_nav_bar, {\n    \"left-arrow\": \"\",\n    title: \"产品推荐\",\n    placeholder: true,\n    fixed: true,\n    border: false\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_van_pull_refresh, {\n    modelValue: $setup.refreshing,\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $setup.refreshing = $event),\n    onRefresh: $setup.onRefresh\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_van_list, {\n      loading: $setup.loading,\n      \"onUpdate:loading\": _cache[0] || (_cache[0] = $event => $setup.loading = $event),\n      finished: $setup.finished,\n      \"finished-text\": \"没有更多了\",\n      onLoad: $setup.onLoad\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" <van-cell v-for=\\\"item in list\\\" :key=\\\"item\\\" :title=\\\"item\\\" /> \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.list, item => {\n        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n          class: \"hotSalesSon\",\n          onClick: $setup.goToHotSales,\n          key: item\n        }, _hoisted_5);\n      }), 128 /* KEYED_FRAGMENT */))])]),\n      _: 1 /* STABLE */\n    }, 8 /* PROPS */, [\"loading\", \"finished\"])]),\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"modelValue\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" <div class=\\\"hotSalesSon\\\" @click=\\\"goToHotSales\\\">\\r\\n                <img src=\\\"https://img1.baidu.com/it/u=3007048469,3759326707&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1682528400&t=ec2b05ac4caa5f4dec0df675c18b2452\\\"\\r\\n                    alt=\\\"\\\">\\r\\n                <p>云桌面，用过的都说好</p>\\r\\n            </div>\\r\\n\\r\\n            <div class=\\\"hotSalesSon\\\" @click=\\\"goToHotSales\\\">\\r\\n                <img src=\\\"https://img1.baidu.com/it/u=3007048469,3759326707&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1682528400&t=ec2b05ac4caa5f4dec0df675c18b2452\\\"\\r\\n                    alt=\\\"\\\">\\r\\n                <p>裸金属服务器，分钟级交G敖付</p>\\r\\n            </div>\\r\\n\\r\\n            <div class=\\\"hotSalesSon\\\" @click=\\\"goToHotSales\\\">\\r\\n                <img src=\\\"https://img1.baidu.com/it/u=3007048469,3759326707&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1682528400&t=ec2b05ac4caa5f4dec0df675c18b2452\\\"\\r\\n                    alt=\\\"\\\">\\r\\n                <p>云桌面，随时随地，舒长周期心尬仍滦柯秣电公裨辫扒</p>\\r\\n            </div>\\r\\n\\r\\n            <div class=\\\"hotSalesSon\\\" @click=\\\"goToHotSales\\\">\\r\\n                <img src=\\\"https://img1.baidu.com/it/u=3007048469,3759326707&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1682528400&t=ec2b05ac4caa5f4dec0df675c18b2452\\\"\\r\\n                    alt=\\\"\\\">\\r\\n                <p>冷数据如何存储?</p>\\r\\n            </div> \")])], 64 /* STABLE_FRAGMENT */);\n}\n\n//# sourceURL=webpack://service_platform/./src/views/serve/recommendation/index.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/serve/recommendation/index.vue?vue&type=style&index=0&id=199b9cd4&scope=true&lange=scss&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/serve/recommendation/index.vue?vue&type=style&index=0&id=199b9cd4&scope=true&lange=scss&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.recommendation {\\n.title {\\r\\n        line-height: 2;\\r\\n        text-align: center;\\r\\n        font-weight: bold;\\n}\\n.hotSales {\\r\\n        display: flex;\\r\\n        flex-wrap: wrap;\\r\\n        justify-content: space-between;\\r\\n        padding: 10px 12px;\\n.hotSalesSon {\\r\\n            width: 48%;\\nimg {\\r\\n                width: 100%;\\r\\n                height: auto;\\r\\n                display: block;\\r\\n                border-radius: 4px;\\n}\\np {\\r\\n                margin-top: 10px;\\r\\n                overflow: hidden;\\r\\n                text-overflow: ellipsis;\\r\\n                display: -webkit-box;\\r\\n                -webkit-line-clamp: 2;\\r\\n                /* 显示两行 */\\r\\n                -webkit-box-orient: vertical;\\r\\n                font-size: 14px;\\n}\\n}\\n}\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://service_platform/./src/views/serve/recommendation/index.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/views/serve/recommendation/index.vue":
/*!**************************************************!*\
  !*** ./src/views/serve/recommendation/index.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_199b9cd4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=199b9cd4 */ \"./src/views/serve/recommendation/index.vue?vue&type=template&id=199b9cd4\");\n/* harmony import */ var _index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&setup=true&lang=js */ \"./src/views/serve/recommendation/index.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _index_vue_vue_type_style_index_0_id_199b9cd4_scope_true_lange_scss_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=199b9cd4&scope=true&lange=scss&lang=css */ \"./src/views/serve/recommendation/index.vue?vue&type=style&index=0&id=199b9cd4&scope=true&lange=scss&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_index_vue_vue_type_template_id_199b9cd4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/serve/recommendation/index.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://service_platform/./src/views/serve/recommendation/index.vue?");

/***/ }),

/***/ "./src/views/serve/recommendation/index.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************!*\
  !*** ./src/views/serve/recommendation/index.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/serve/recommendation/index.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://service_platform/./src/views/serve/recommendation/index.vue?");

/***/ }),

/***/ "./src/views/serve/recommendation/index.vue?vue&type=template&id=199b9cd4":
/*!********************************************************************************!*\
  !*** ./src/views/serve/recommendation/index.vue?vue&type=template&id=199b9cd4 ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_199b9cd4__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_199b9cd4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=199b9cd4 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/serve/recommendation/index.vue?vue&type=template&id=199b9cd4\");\n\n\n//# sourceURL=webpack://service_platform/./src/views/serve/recommendation/index.vue?");

/***/ }),

/***/ "./src/views/serve/recommendation/index.vue?vue&type=style&index=0&id=199b9cd4&scope=true&lange=scss&lang=css":
/*!********************************************************************************************************************!*\
  !*** ./src/views/serve/recommendation/index.vue?vue&type=style&index=0&id=199b9cd4&scope=true&lange=scss&lang=css ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_199b9cd4_scope_true_lange_scss_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=199b9cd4&scope=true&lange=scss&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/serve/recommendation/index.vue?vue&type=style&index=0&id=199b9cd4&scope=true&lange=scss&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_199b9cd4_scope_true_lange_scss_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_199b9cd4_scope_true_lange_scss_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_199b9cd4_scope_true_lange_scss_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_199b9cd4_scope_true_lange_scss_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://service_platform/./src/views/serve/recommendation/index.vue?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/serve/recommendation/index.vue?vue&type=style&index=0&id=199b9cd4&scope=true&lange=scss&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/serve/recommendation/index.vue?vue&type=style&index=0&id=199b9cd4&scope=true&lange=scss&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=199b9cd4&scope=true&lange=scss&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/serve/recommendation/index.vue?vue&type=style&index=0&id=199b9cd4&scope=true&lange=scss&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"7f6a666b\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://service_platform/./src/views/serve/recommendation/index.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ })

}]);