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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/replaceHistory */ \"./_assets/js/utils/replaceHistory.js\");\n/* harmony import */ var _templates_badges_renderBadges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/badges/renderBadges */ \"./_assets/js/templates/badges/renderBadges.js\");\n/* harmony import */ var _utils_toggleVisibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/toggleVisibility */ \"./_assets/js/utils/toggleVisibility.js\");\n/* harmony import */ var _utils_checkURLOnLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/checkURLOnLoad */ \"./_assets/js/utils/checkURLOnLoad.js\");\n/* harmony import */ var _utils_updateTASelectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/updateTASelectors */ \"./_assets/js/utils/updateTASelectors.js\");\n/* harmony import */ var _templates_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/search/totalResultsTemplate */ \"./_assets/js/templates/search/totalResultsTemplate.js\");\n\n\n\n\n\n // Get our checkboxes:\n\nconst checkboxes = document.getElementsByClassName('usa-checkbox__input'); // Get our dropdown:\n\nconst dropdown = document.getElementById('category'); // Get our tag node:\n\nconst tagNode = document.getElementById('selector-tags'); // Create a new unordered list to put our tags:\n\nconst list = document.createElement('ul');\nlist.classList.add('usa-button-group'); // Add the list to our container div:\n\ntagNode.append(list); // Initialize state:\n\nconst selectorState = {\n  'title-ii': false,\n  'title-iii': false,\n  category: ''\n}; // Update badges and update the url:\n\nconst updateDOMandURL = parentID => {\n  (0,_utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__.replaceState)(selectorState, 'updatedState', `/resources/?org=title-ii=${selectorState['title-ii']};title-iii=${selectorState['title-iii']};category=${selectorState['category']}`);\n  (0,_templates_badges_renderBadges__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(list, selectorState, parentID);\n}; // Update checkbox state:\n\n\nArray.from(checkboxes).forEach(checkbox => {\n  checkbox.addEventListener('change', event => {\n    // Update the check box state\n    if (event.target.checked) {\n      selectorState[event.target.value] = event.target.checked;\n    } else {\n      selectorState[event.target.value] = event.target.checked;\n    }\n\n    updateDOMandURL(event.target.id);\n    document.getElementById('resultsListTarget').innerHTML = (0,_templates_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_utils_toggleVisibility__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(selectorState), 'item');\n  });\n}); // Update dropdown state:\n\ndropdown.addEventListener('change', event => {\n  selectorState['category'] = event.target.value;\n  updateDOMandURL(event.target.name);\n  document.getElementById('resultsListTarget').innerHTML = (0,_templates_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_utils_toggleVisibility__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(selectorState), 'item');\n}); // Update the dropdown value when the url is called:\n\nfunction setSelectedValue(selectObj, valueToSet) {\n  for (let i = 0; i < selectObj.options.length; i++) {\n    if (selectObj.options[i].value === valueToSet) {\n      selectObj.options[i].selected = true;\n      document.querySelector('input[role=\"combobox\"]').value = selectObj.options[i].text;\n      return;\n    }\n  }\n}\n\nfunction getInitiallyVisibleItems() {\n  document.getElementById('resultsListTarget').innerHTML = (0,_templates_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Array.from(document.querySelectorAll('li.visibilityTarget')).length, 'item');\n}\n\nwindow.onload = function () {\n  getInitiallyVisibleItems();\n  const params = (0,_utils_checkURLOnLoad__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('org');\n\n  if (params.length === 3) {\n    if (params[0].includes('true')) {\n      selectorState['title-ii'] = true;\n      (0,_templates_badges_renderBadges__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(list, selectorState, 'title-ii');\n      (0,_utils_updateTASelectors__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('title-ii', selectorState);\n    }\n\n    if (params[1].includes('true')) {\n      selectorState['title-iii'] = true;\n      (0,_templates_badges_renderBadges__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(list, selectorState, 'title-iii');\n      (0,_utils_updateTASelectors__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('title-iii', selectorState);\n    }\n\n    if (params[2].split('=').length >= 2) {\n      const category = params[2].split('=');\n      selectorState['category'] = category[1];\n      (0,_templates_badges_renderBadges__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(list, selectorState, 'category');\n      document.querySelector('div.usa-combo-box').classList.add('usa-combo-box--pristine');\n      document.querySelector('input[role=\"combobox\"]').setAttribute('aria-activedescendant', '');\n      setSelectedValue(document.querySelector('select[name=\"category\"]'), selectorState.category);\n    }\n\n    document.getElementById('resultsListTarget').innerHTML = (0,_templates_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_utils_toggleVisibility__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(selectorState), 'item');\n  }\n};\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/ta-selectors.js?");

/***/ }),

/***/ "./_assets/js/templates/badges/badgeLogic.js":
/*!***************************************************!*\
  !*** ./_assets/js/templates/badges/badgeLogic.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ badgeLogic; }\n/* harmony export */ });\n/* harmony import */ var _utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/replaceHistory */ \"./_assets/js/utils/replaceHistory.js\");\n/* harmony import */ var _utils_updateTASelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/updateTASelectors */ \"./_assets/js/utils/updateTASelectors.js\");\n/* harmony import */ var _utils_toggleVisibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/toggleVisibility */ \"./_assets/js/utils/toggleVisibility.js\");\n/* harmony import */ var _search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/totalResultsTemplate */ \"./_assets/js/templates/search/totalResultsTemplate.js\");\n\n\n\n\nfunction badgeLogic(node, state, tagContainer, tag, value) {\n  if ((state[value] !== '' || state[value] === true) && !document.getElementById(tag)) {\n    node.appendChild(tagContainer);\n    document.querySelector(`#${tag} button`).addEventListener('click', function (event) {\n      if (typeof state[value] === 'string') {\n        state[value] = '';\n      } else {\n        state[value] = false;\n      }\n\n      (0,_utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__.replaceState)(state, 'updatedState', `/resources/?org=title-ii=${state['title-ii']};title-iii=${state['title-iii']};category=${state['category']}`);\n      (0,_utils_updateTASelectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value, state);\n      document.getElementById(tag).remove();\n      document.getElementById('resultsListTarget').innerHTML = (0,_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_utils_toggleVisibility__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state), 'item');\n    });\n  } else if (typeof state[value] === 'string' && state[value] !== '' && document.getElementById(tag)) {\n    document.getElementById(tag).remove();\n    node.appendChild(tagContainer);\n    document.querySelector(`#${tag} button`).addEventListener('click', function (event) {\n      if (typeof state[value] === 'string') {\n        state[value] = '';\n      } else {\n        state[value] = false;\n      }\n\n      (0,_utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__.replaceState)(state, 'updatedState', `/resources/?org=title-ii=${state['title-ii']};title-iii=${state['title-iii']};category=${state['category']}`);\n      (0,_utils_updateTASelectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value, state);\n      document.getElementById(tag).remove();\n      document.getElementById('resultsListTarget').innerHTML = (0,_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_utils_toggleVisibility__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state), 'item');\n    });\n  } else if (state[value] === false && document.getElementById(tag) || typeof state[value] === 'string' && state[value] === \"\" && document.getElementById(tag)) {\n    document.getElementById(tag).remove();\n    document.getElementById('resultsListTarget').innerHTML = (0,_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_utils_toggleVisibility__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state), 'item');\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/badges/badgeLogic.js?");

/***/ }),

/***/ "./_assets/js/templates/badges/badgeTemplate.js":
/*!******************************************************!*\
  !*** ./_assets/js/templates/badges/badgeTemplate.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ badge; }\n/* harmony export */ });\nfunction badge(title) {\n  return `\n    <span class=\"usa-button usa-button--outline\">\n     ${title}\n    <button class=\"usa-button usa-button--unstyled text-no-underline\"\n    ><span class=\"text-ink text-bold text-no-underline\">X</span>\n    <span class=\"usa-sr-only\">Press enter to remove ${title} filter.</span>\n    </button>\n    </span>\n    `;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/badges/badgeTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/badges/renderBadges.js":
/*!*****************************************************!*\
  !*** ./_assets/js/templates/badges/renderBadges.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ renderBages; }\n/* harmony export */ });\n/* harmony import */ var _badgeLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badgeLogic */ \"./_assets/js/templates/badges/badgeLogic.js\");\n/* harmony import */ var _badgeTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badgeTemplate */ \"./_assets/js/templates/badges/badgeTemplate.js\");\n\n\nfunction renderBages(node, state, parentID) {\n  // Construct our list elements:\n  const titleTwo = document.createElement('li');\n  const titleThree = document.createElement('li');\n  const category = document.createElement('li'); // Add a class to each and add an id to each:\n\n  titleTwo.classList.add('usa-button-group__item');\n  titleTwo.setAttribute('id', 'titleTwoTag');\n  titleThree.classList.add('usa-button-group__item');\n  titleThree.setAttribute('id', 'titleThreeTag');\n  category.classList.add('usa-button-group__item');\n  category.setAttribute('id', 'categoryTag'); // Create the HTML templates:\n\n  titleTwo.innerHTML = (0,_badgeTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('State and Local government');\n  titleThree.innerHTML = (0,_badgeTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Businesses');\n  category.innerHTML = (0,_badgeTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state.category); // Depending on the state of the selectors, render different tags:\n\n  if (parentID === 'title-ii') {\n    (0,_badgeLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node, state, titleTwo, 'titleTwoTag', parentID);\n  }\n\n  if (parentID === 'title-iii') {\n    (0,_badgeLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node, state, titleThree, 'titleThreeTag', parentID);\n  }\n\n  if (parentID === 'category') {\n    (0,_badgeLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node, state, category, 'categoryTag', parentID);\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/badges/renderBadges.js?");

/***/ }),

/***/ "./_assets/js/templates/search/totalResultsTemplate.js":
/*!*************************************************************!*\
  !*** ./_assets/js/templates/search/totalResultsTemplate.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ totalResults; }\n/* harmony export */ });\nfunction totalResults(resultsTotal, type) {\n  if (resultsTotal > 1) {\n    return `<div markdown=\"0\" role=\"status\" class=\"text-black\">${resultsTotal} ${type}s found</div>`;\n  } else if (resultsTotal === 1) {\n    return `<div markdown=\"0\" role=\"status\" class=\"text-black\">${resultsTotal} ${type} found</div>`;\n  } else if (resultsTotal < 1) {\n    return `<div markdown=\"0\" role=\"status\" class=\"text-black\">No ${type}s found</div>`;\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/search/totalResultsTemplate.js?");

/***/ }),

/***/ "./_assets/js/utils/checkURLOnLoad.js":
/*!********************************************!*\
  !*** ./_assets/js/utils/checkURLOnLoad.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ checkURL; }\n/* harmony export */ });\n/* harmony import */ var _searchParamUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchParamUtils */ \"./_assets/js/utils/searchParamUtils.js\");\n\nfunction checkURL(param) {\n  const params = (0,_searchParamUtils__WEBPACK_IMPORTED_MODULE_0__.getSearchParam)(param).split(';');\n  return params;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/checkURLOnLoad.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ toggleVisibility; }\n/* harmony export */ });\nfunction toggleVisibility(state) {\n  const elements = Array.from(document.querySelectorAll('li.visibilityTarget'));\n  const visibleElements = [];\n  const titleTwo = state['title-ii'];\n  const titleThree = state['title-iii'];\n  const category = state['category'];\n  elements.forEach(element => {\n    if (titleTwo === false && titleThree === false && category === '') {\n      element.style.display = 'block';\n      visibleElements.push(element);\n    } else if (titleTwo === true && titleThree === false && category === '') {\n      if (Array.from(element.classList).includes('title-ii')) {\n        element.style.display = 'block';\n        visibleElements.push(element);\n      } else {\n        element.style.display = 'none';\n      }\n    } else if (titleTwo === false && titleThree === true && category === '') {\n      if (Array.from(element.classList).includes('title-iii')) {\n        element.style.display = 'block';\n        visibleElements.push(element);\n      } else {\n        element.style.display = 'none';\n      }\n    } else if (titleTwo === false && titleThree === false && category !== '') {\n      if (Array.from(element.classList).includes(category)) {\n        element.style.display = 'block';\n        visibleElements.push(element);\n      } else {\n        element.style.display = 'none';\n      }\n    } else if (titleTwo === true && titleThree === true && category === '') {\n      if (Array.from(element.classList).includes('title-ii') || Array.from(element.classList).includes('title-iii')) {\n        element.style.display = 'block';\n        visibleElements.push(element);\n      } else {\n        element.style.display = 'none';\n      }\n    } else if (titleTwo === true && titleThree === false && category !== '') {\n      if (Array.from(element.classList).includes('title-ii') || Array.from(element.classList).includes(category)) {\n        element.style.display = 'block';\n        visibleElements.push(element);\n      } else {\n        element.style.display = 'none';\n      }\n    } else if (titleTwo === false && titleThree === true && category !== '') {\n      if (Array.from(element.classList).includes('title-iii') || Array.from(element.classList).includes(category)) {\n        element.style.display = 'block';\n        visibleElements.push(element);\n      } else {\n        element.style.display = 'none';\n      }\n    } else if (titleTwo === true && titleThree === true && category !== '') {\n      if (Array.from(element.classList).includes('title-ii') || Array.from(element.classList).includes('title-iii') || Array.from(element.classList).includes(category)) {\n        element.style.display = 'block';\n        visibleElements.push(element);\n      } else {\n        element.style.display = 'none';\n      }\n    }\n  });\n  return visibleElements.length;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/toggleVisibility.js?");

/***/ }),

/***/ "./_assets/js/utils/updateTASelectors.js":
/*!***********************************************!*\
  !*** ./_assets/js/utils/updateTASelectors.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ renderSelector; }\n/* harmony export */ });\nfunction renderSelector(selector, state) {\n  if (selector.includes('title')) {\n    document.getElementById(selector).checked = state[selector];\n  } else {\n    document.getElementById(selector).value = state[selector];\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/updateTASelectors.js?");

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