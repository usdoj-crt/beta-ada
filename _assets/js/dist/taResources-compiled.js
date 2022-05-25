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

/***/ "./_assets/js/ta-selectors.js":
/*!************************************!*\
  !*** ./_assets/js/ta-selectors.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/replaceHistory */ \"./_assets/js/utils/replaceHistory.js\");\n/* harmony import */ var _templates_badges_renderBadges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/badges/renderBadges */ \"./_assets/js/templates/badges/renderBadges.js\");\n/* harmony import */ var _utils_toggleVisibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/toggleVisibility */ \"./_assets/js/utils/toggleVisibility.js\");\n/* harmony import */ var _utils_checkURLOnLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/checkURLOnLoad */ \"./_assets/js/utils/checkURLOnLoad.js\");\n/* harmony import */ var _templates_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/search/totalResultsTemplate */ \"./_assets/js/templates/search/totalResultsTemplate.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/constants */ \"./_assets/js/utils/constants.js\");\n/* harmony import */ var _utils_expandTarget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/expandTarget */ \"./_assets/js/utils/expandTarget.js\");\n\n\n\n\n\n\n // Get our checkboxes:\n\nconst checkboxes = document.getElementsByClassName('usa-checkbox__input'); // Get our dropdown:\n\nconst dropdownButton = document.getElementById('category-expand'); // Get our tag node:\n\nconst tagNode = document.getElementById('selector-tags'); // Create a new unordered list to put our tags:\n\nconst list = document.createElement('ul');\nlist.setAttribute('aria-label', 'List of applied filters.');\nlist.classList.add('usa-button-group'); // Add the list to our container div:\n\ntagNode.append(list); // Initialize state:\n\nlet selectorState = []; // Update badges and update the url:\n\nconst updateDOMandURL = () => {\n  (0,_utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__.replaceState)(selectorState, 'updatedState', `/resources/?filters=${selectorState.join(';')}`);\n  (0,_templates_badges_renderBadges__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(list, selectorState);\n  document.getElementById('resultsListTarget').innerHTML = (0,_templates_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_utils_toggleVisibility__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(selectorState), 'item');\n}; // Update checkbox state:\n\n\nArray.from(checkboxes).forEach(checkbox => {\n  checkbox.addEventListener('change', event => {\n    // Update the check box state\n    if (event.target.dataset.checked === 'true') {\n      event.target.dataset.checked = false;\n      let index = selectorState.indexOf(event.target.value);\n      selectorState.splice(index, 1); // Find and remove badge:\n\n      document.getElementById(`${event.target.value}-badge`).remove();\n    } else if (event.target.dataset.checked === 'false') {\n      event.target.dataset.checked = true;\n      selectorState.push(event.target.value);\n    }\n\n    updateDOMandURL();\n  });\n});\ndropdownButton.addEventListener('click', () => {\n  (0,_utils_expandTarget__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"category-list-container\");\n});\n\nfunction setSelectedValue(state) {\n  // Set checkboxes on load:\n  for (let item in state) {\n    if (_utils_constants__WEBPACK_IMPORTED_MODULE_5__.TAGS.includes(state[item])) {\n      document.getElementById(state[item]).checked = true;\n      document.getElementById(state[item]).dataset.checked = true;\n    }\n  }\n}\n\nwindow.onload = function () {\n  selectorState = (0,_utils_checkURLOnLoad__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('filters');\n\n  if (selectorState[0] === '') {\n    selectorState = [];\n  }\n\n  setSelectedValue(selectorState);\n  updateDOMandURL();\n};\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/ta-selectors.js?");

/***/ }),

/***/ "./_assets/js/templates/badges/badgeLogic.js":
/*!***************************************************!*\
  !*** ./_assets/js/templates/badges/badgeLogic.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ badgeLogic; }\n/* harmony export */ });\n/* harmony import */ var _utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/replaceHistory */ \"./_assets/js/utils/replaceHistory.js\");\n/* harmony import */ var _utils_updateTASelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/updateTASelectors */ \"./_assets/js/utils/updateTASelectors.js\");\n/* harmony import */ var _utils_toggleVisibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/toggleVisibility */ \"./_assets/js/utils/toggleVisibility.js\");\n/* harmony import */ var _search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/totalResultsTemplate */ \"./_assets/js/templates/search/totalResultsTemplate.js\");\n\n\n\n\nfunction badgeLogic(node, element, state) {\n  if (!document.getElementById(element.id)) {\n    node.appendChild(element);\n    document.querySelector(`#${element.id} button`).addEventListener('click', function () {\n      document.getElementById(element.id).remove();\n      let value = element.id.replace('-badge', '');\n      let index = state.indexOf(value);\n      state.splice(index, 1);\n      (0,_utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__.replaceState)(state, 'updatedState', `/resources/?filters=${state.join(';')}`);\n      (0,_utils_updateTASelectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, state);\n      document.getElementById('resultsListTarget').innerHTML = (0,_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_utils_toggleVisibility__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state), 'item');\n    });\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/badges/badgeLogic.js?");

/***/ }),

/***/ "./_assets/js/templates/badges/badgeTemplate.js":
/*!******************************************************!*\
  !*** ./_assets/js/templates/badges/badgeTemplate.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ badge; }\n/* harmony export */ });\nfunction badge(title) {\n  title = title.split('-').join(\" \");\n  return `\n    <span class=\"usa-button usa-button--outline\">\n     ${title[0].toUpperCase() + title.substring(1)}\n    <button class=\"usa-button usa-button--unstyled text-no-underline\"\n    ><span class=\"text-ink text-bold text-no-underline\">X</span>\n    <span class=\"usa-sr-only\">Press enter to remove ${title} filter.</span>\n    </button>\n    </span>\n    `;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/badges/badgeTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/badges/renderBadges.js":
/*!*****************************************************!*\
  !*** ./_assets/js/templates/badges/renderBadges.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ renderBages; }\n/* harmony export */ });\n/* harmony import */ var _badgeLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badgeLogic */ \"./_assets/js/templates/badges/badgeLogic.js\");\n/* harmony import */ var _badgeTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badgeTemplate */ \"./_assets/js/templates/badges/badgeTemplate.js\");\n\n\nfunction renderBages(node, state) {\n  for (const item in state) {\n    let tagBadge = document.createElement('li');\n    tagBadge.classList.add('usa-button-group__item', 'categoryTag');\n    tagBadge.setAttribute('id', `${state[item]}-badge`);\n\n    if (state[item] === 'title-ii') {\n      tagBadge.innerHTML = (0,_badgeTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('State and local government');\n    } else if (state[item] === 'title-iii') {\n      tagBadge.innerHTML = (0,_badgeTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Businesses');\n    } else {\n      tagBadge.innerHTML = (0,_badgeTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state[item]);\n    }\n\n    (0,_badgeLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node, tagBadge, state);\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/badges/renderBadges.js?");

/***/ }),

/***/ "./_assets/js/templates/search/totalResultsTemplate.js":
/*!*************************************************************!*\
  !*** ./_assets/js/templates/search/totalResultsTemplate.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ totalResults; }\n/* harmony export */ });\nfunction totalResults(resultsTotal, type) {\n  if (resultsTotal > 1) {\n    return `<div markdown=\"0\" role=\"status\"><p class=\"total-results margin-y-0\">${resultsTotal} ${type}s found</p></div>`;\n  } else if (resultsTotal === 1) {\n    return `<div markdown=\"0\" role=\"status\"><p class=\"total-results margin-y-0\">${resultsTotal} ${type} found</p></div>`;\n  } else if (resultsTotal < 1) {\n    return `<div markdown=\"0\" role=\"status\"><p class=\"total-results margin-y-0\">No ${type}s found</p></div>`;\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/search/totalResultsTemplate.js?");

/***/ }),

/***/ "./_assets/js/utils/checkURLOnLoad.js":
/*!********************************************!*\
  !*** ./_assets/js/utils/checkURLOnLoad.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ checkURL; }\n/* harmony export */ });\n/* harmony import */ var _searchParamUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchParamUtils */ \"./_assets/js/utils/searchParamUtils.js\");\n\nfunction checkURL(param) {\n  const params = (0,_searchParamUtils__WEBPACK_IMPORTED_MODULE_0__.getSearchParam)(param).split(';');\n  return params;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/checkURLOnLoad.js?");

/***/ }),

/***/ "./_assets/js/utils/constants.js":
/*!***************************************!*\
  !*** ./_assets/js/utils/constants.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NUMBER_OF_RESULTS\": function() { return /* binding */ NUMBER_OF_RESULTS; },\n/* harmony export */   \"SEARCH_ENDPOINT\": function() { return /* binding */ SEARCH_ENDPOINT; },\n/* harmony export */   \"ACCESS_KEY\": function() { return /* binding */ ACCESS_KEY; },\n/* harmony export */   \"AFFILIATE\": function() { return /* binding */ AFFILIATE; },\n/* harmony export */   \"TAGS\": function() { return /* binding */ TAGS; }\n/* harmony export */ });\n// Pagination Constants:\nconst NUMBER_OF_RESULTS = 20;\nconst SEARCH_ENDPOINT = 'https://search.usa.gov/api/v2/search/i14y';\nconst ACCESS_KEY = 'R9JA5YunOBaTGydUNm-oJjGCqKQ-zXsulsNskJVe5-c=';\nconst AFFILIATE = 'justice-ada-beta';\nconst TAGS = ['service-animals', 'title-ii', 'title-iii', 'web-guidance', 'intro', 'child-care-centers', 'curb-ramps', 'education', 'effective-communication', 'eligibility-criteria', 'emergency-management', 'employment', 'healthcare'];\n\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/constants.js?");

/***/ }),

/***/ "./_assets/js/utils/expandTarget.js":
/*!******************************************!*\
  !*** ./_assets/js/utils/expandTarget.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ expandTarget; }\n/* harmony export */ });\nfunction expandTarget(targetID) {\n  const target = document.getElementById(targetID);\n\n  if (target) {\n    if (target.hasAttribute('hidden')) {\n      target.removeAttribute('hidden');\n      document.getElementById(\"expand-more\").style.display = 'none';\n      document.getElementById('expand-less').style.display = 'block';\n      document.getElementById('category-expand').setAttribute('aria-expanded', 'true');\n    } else {\n      target.setAttribute('hidden', \"\");\n      document.getElementById(\"expand-more\").style.display = 'block';\n      document.getElementById('expand-less').style.display = 'none';\n      document.getElementById('category-expand').setAttribute('aria-expanded', 'false');\n    }\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/expandTarget.js?");

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

/***/ }),

/***/ "./_assets/js/utils/toggleVisibility.js":
/*!**********************************************!*\
  !*** ./_assets/js/utils/toggleVisibility.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ toggleVisibility; }\n/* harmony export */ });\nfunction toggleVisibility(state) {\n  const elements = Array.from(document.querySelectorAll('li.visibilityTarget'));\n  const visibleElements = [];\n  elements.forEach(element => {\n    if (state.length === 0 && !visibleElements.includes(element)) {\n      element.style.display = 'block';\n      visibleElements.push(element);\n    } else {\n      element.style.display = 'none';\n      let classes = Array.from(element.classList);\n      classes.forEach(item => {\n        if (state.includes(item) && !visibleElements.includes(element)) {\n          element.style.display = 'block';\n          visibleElements.push(element);\n        }\n      });\n    }\n  });\n  return visibleElements.length;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/toggleVisibility.js?");

/***/ }),

/***/ "./_assets/js/utils/updateTASelectors.js":
/*!***********************************************!*\
  !*** ./_assets/js/utils/updateTASelectors.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ renderSelector; }\n/* harmony export */ });\nfunction renderSelector(selector, state) {\n  let id = selector.id.replace('-badge', ''); // Update the check box state\n\n  if (document.getElementById(id).dataset.checked === 'true') {\n    document.getElementById(id).checked = false;\n    document.getElementById(id).dataset.checked = false;\n  } else if (document.getElementById(id).dataset.checked === 'false') {\n    document.getElementById(id).checked = true;\n    document.getElementById(id).dataset.checked = true;\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/updateTASelectors.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./_assets/js/ta-selectors.js");
/******/ 	
/******/ })()
;