"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkservice_platform"] = self["webpackChunkservice_platform"] || []).push([["src_views_serve_on-siteInspection_result_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/serve/on-siteInspection/result.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/serve/on-siteInspection/result.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'result',\n  setup(__props, {\n    expose\n  }) {\n    expose();\n    const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const onClickLeft = () => history.back();\n    // const pdfSrc = 'path/to/your/pdf/document.pdf'\n    const pdfLoaded = page => {\n      console.log('PDF loaded:', page);\n    };\n    const list = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);\n    const loading = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);\n    const finished = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);\n    const refreshing = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);\n    const pageNo = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(1);\n    const pageSize = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(10);\n    const onLoad = () => {\n      if (refreshing.value) {\n        list.value = [];\n        pageNo.value = 1;\n        refreshing.value = false;\n      }\n      (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.get)('checkReport', {\n        pageNo: pageNo.value,\n        pageSize: pageSize.value\n      }).then(res => {\n        list.value = list.value.concat(res.data.list);\n        pageNo.value++;\n        loading.value = false;\n        if (res.data.list.length == 0) {\n          finished.value = true;\n        }\n      });\n    };\n    const onRefresh = () => {\n      // 清空列表数据\n      finished.value = false;\n      // 重新加载数据\n      // 将 loading 设置为 true，表示处于加载状态\n      loading.value = true;\n      onLoad();\n    };\n    const goDetails = item => {\n      localStorage.setItem('result', JSON.stringify(item));\n      router.push('/resultDetails');\n    };\n    const __returned__ = {\n      router,\n      onClickLeft,\n      pdfLoaded,\n      list,\n      loading,\n      finished,\n      refreshing,\n      pageNo,\n      pageSize,\n      onLoad,\n      onRefresh,\n      goDetails,\n      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,\n      get get() {\n        return _utils_api__WEBPACK_IMPORTED_MODULE_2__.get;\n      },\n      get post() {\n        return _utils_api__WEBPACK_IMPORTED_MODULE_2__.post;\n      },\n      get useRouter() {\n        return vue_router__WEBPACK_IMPORTED_MODULE_3__.useRouter;\n      },\n      get useRoute() {\n        return vue_router__WEBPACK_IMPORTED_MODULE_3__.useRoute;\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://service_platform/./src/views/serve/on-siteInspection/result.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/serve/on-siteInspection/result.vue?vue&type=template&id=9dbbcd86":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/serve/on-siteInspection/result.vue?vue&type=template&id=9dbbcd86 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_van_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"van-icon\");\n  const _component_van_nav_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"van-nav-bar\");\n  const _component_van_cell = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"van-cell\");\n  const _component_van_list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"van-list\");\n  const _component_van_pull_refresh = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"van-pull-refresh\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_van_nav_bar, {\n    title: \"运维巡检\",\n    placeholder: true,\n    fixed: true\n  }, {\n    left: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_van_icon, {\n      name: \"arrow-left\",\n      size: \"18\",\n      color: \"#000\",\n      onClick: _cache[0] || (_cache[0] = $event => $setup.onClickLeft())\n    })]),\n    _: 1 /* STABLE */\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_van_pull_refresh, {\n    modelValue: $setup.refreshing,\n    \"onUpdate:modelValue\": _cache[2] || (_cache[2] = $event => $setup.refreshing = $event),\n    onRefresh: $setup.onRefresh\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_van_list, {\n      loading: $setup.loading,\n      \"onUpdate:loading\": _cache[1] || (_cache[1] = $event => $setup.loading = $event),\n      finished: $setup.finished,\n      \"finished-text\": \"没有更多了\",\n      onLoad: $setup.onLoad\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.list, (item, index) => {\n        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_van_cell, {\n          key: index,\n          onClick: $event => $setup.goDetails(item),\n          title: item.reportName,\n          \"is-link\": \"\"\n        }, null, 8 /* PROPS */, [\"onClick\", \"title\"]);\n      }), 128 /* KEYED_FRAGMENT */))]),\n      _: 1 /* STABLE */\n    }, 8 /* PROPS */, [\"loading\", \"finished\"])]),\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"modelValue\"])], 64 /* STABLE_FRAGMENT */);\n}\n\n//# sourceURL=webpack://service_platform/./src/views/serve/on-siteInspection/result.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/views/serve/on-siteInspection/result.vue":
/*!******************************************************!*\
  !*** ./src/views/serve/on-siteInspection/result.vue ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _result_vue_vue_type_template_id_9dbbcd86__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result.vue?vue&type=template&id=9dbbcd86 */ \"./src/views/serve/on-siteInspection/result.vue?vue&type=template&id=9dbbcd86\");\n/* harmony import */ var _result_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result.vue?vue&type=script&setup=true&lang=js */ \"./src/views/serve/on-siteInspection/result.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_result_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_result_vue_vue_type_template_id_9dbbcd86__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/serve/on-siteInspection/result.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://service_platform/./src/views/serve/on-siteInspection/result.vue?");

/***/ }),

/***/ "./src/views/serve/on-siteInspection/result.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************!*\
  !*** ./src/views/serve/on-siteInspection/result.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_result_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_result_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./result.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/serve/on-siteInspection/result.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://service_platform/./src/views/serve/on-siteInspection/result.vue?");

/***/ }),

/***/ "./src/views/serve/on-siteInspection/result.vue?vue&type=template&id=9dbbcd86":
/*!************************************************************************************!*\
  !*** ./src/views/serve/on-siteInspection/result.vue?vue&type=template&id=9dbbcd86 ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_result_vue_vue_type_template_id_9dbbcd86__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_result_vue_vue_type_template_id_9dbbcd86__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./result.vue?vue&type=template&id=9dbbcd86 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/serve/on-siteInspection/result.vue?vue&type=template&id=9dbbcd86\");\n\n\n//# sourceURL=webpack://service_platform/./src/views/serve/on-siteInspection/result.vue?");

/***/ })

}]);