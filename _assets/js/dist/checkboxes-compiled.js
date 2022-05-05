/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./_assets/js/organization-checkboxes.js":
/*!***********************************************!*\
  !*** ./_assets/js/organization-checkboxes.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/replaceHistory */ \"./_assets/js/utils/replaceHistory.js\");\n/* harmony import */ var _utils_searchParamUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/searchParamUtils */ \"./_assets/js/utils/searchParamUtils.js\");\n\n // Get our checkboxes:\n\nconst checkboxes = document.getElementsByClassName('usa-checkbox__input');\nconst searchParams = new URLSearchParams(window.location.search);\n\nconst updateState = e => {\n  let allParams = searchParams.getAll('org');\n  (0,_utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__.replaceState)(e.target.value, 'checked', `/resources?org=${allParams}`);\n};\n\nconst deleteParam = e => {\n  let allParams = searchParams.getAll('org');\n  console.log(allParams);\n  const remove = allParams.indexOf(e.target.value);\n\n  if (remove > -1) {\n    allParams.splice(remove, 1);\n  }\n\n  ;\n  console.log(allParams);\n  (0,_utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__.replaceState)(e.target.value, 'checked', `/resources?org=${allParams}`);\n};\n\nArray.from(checkboxes).forEach(checkbox => {\n  checkbox.addEventListener('change', event => {\n    if ((0,_utils_searchParamUtils__WEBPACK_IMPORTED_MODULE_1__.getSearchParam)('org') === '' && event.target.checked) {\n      (0,_utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__.replaceState)(event.target.value, 'initial', `/resources?org=${event.target.value}`);\n    }\n\n    console.log(searchParams.getAll('org')); // If checked, add target value to url\n\n    if ((0,_utils_searchParamUtils__WEBPACK_IMPORTED_MODULE_1__.getSearchParam)('org') !== '' && event.target.checked) {\n      searchParams.append('org', event.target.value);\n      updateState(event);\n    } // If unchecked remove target value from url\n\n\n    if ((0,_utils_searchParamUtils__WEBPACK_IMPORTED_MODULE_1__.getSearchParam)('org') !== '' && !event.target.checked) {\n      deleteParam(event);\n    }\n  });\n});\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/organization-checkboxes.js?");

/***/ }),

/***/ "./_assets/js/utils/replaceHistory.js":
/*!********************************************!*\
  !*** ./_assets/js/utils/replaceHistory.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pushStateToURL\": function() { return /* binding */ pushStateToURL; },\n/* harmony export */   \"replaceState\": function() { return /* binding */ replaceState; }\n/* harmony export */ });\nfunction pushStateToURL(state, title = null, url = null) {\n  history.pushState(state, title, url);\n}\n\nfunction replaceState(state, title = null, url = null) {\n  history.replaceState(state, title, url);\n}\n\n\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/replaceHistory.js?");

/***/ }),

/***/ "./_assets/js/utils/searchParamUtils.js":
/*!**********************************************!*\
  !*** ./_assets/js/utils/searchParamUtils.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSearchParam\": function() { return /* binding */ getSearchParam; },\n/* harmony export */   \"setSearchParam\": function() { return /* binding */ setSearchParam; }\n/* harmony export */ });\n// Get the current offset value:\nfunction getSearchParam(param, paramString = null) {\n  const searchParams = new URLSearchParams(window.location.search || paramString);\n  const query = searchParams.get(param);\n\n  if (query !== null) {\n    return query;\n  } else {\n    return '';\n  }\n} // Get the url params offset value and convert it to a string. This is used to set the href link for each pagination button.\n\n\nfunction setSearchParam(param, value, paramString = null) {\n  const searchParams = new URLSearchParams(window.location.search || paramString);\n  searchParams.set(param, value);\n  return searchParams.toString();\n} // Export our public methods:\n\n\n\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/searchParamUtils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./_assets/js/organization-checkboxes.js");
/******/ 	
/******/ })()
;