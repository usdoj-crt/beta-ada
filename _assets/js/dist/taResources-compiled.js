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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/replaceHistory */ \"./_assets/js/utils/replaceHistory.js\");\n/* harmony import */ var _templates_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/tags */ \"./_assets/js/templates/tags.js\");\n\n // Get our checkboxes:\n\nconst checkboxes = document.getElementsByClassName('usa-checkbox__input'); // Get our dropdown:\n\nconst dropdown = document.getElementById('category'); // Get our tag node:\n\nconst tagNode = document.getElementById('selector-tags'); // Create a new unordered list to put our tags:\n\nconst list = document.createElement('ul');\nlist.classList.add('usa-button-group'); // Add the list to our container div: \n\ntagNode.append(list); // Initialize state:\n\nconst selectorState = {\n  \"title-ii\": false,\n  \"title-iii\": false,\n  \"category\": \"\"\n};\n\nconst updateDOMandURL = () => {\n  (0,_utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__.replaceState)(selectorState, 'updatedState', `/resources/?org=title-ii=${selectorState['title-ii']};title-iii=${selectorState['title-iii']};category=${selectorState['category']}`);\n  (0,_templates_tags__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(list, selectorState);\n}; // Update checkbox state:\n\n\nArray.from(checkboxes).forEach(checkbox => {\n  checkbox.addEventListener('change', event => {\n    // Update the check box state\n    if (event.target.checked) {\n      selectorState[event.target.value] = event.target.checked;\n    } else {\n      selectorState[event.target.value] = event.target.checked;\n    }\n\n    updateDOMandURL();\n  });\n}); // Update dropdown state:\n\ndropdown.addEventListener('change', event => {\n  selectorState['category'] = event.target.value;\n  updateDOMandURL();\n});\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/ta-selectors.js?");

/***/ }),

/***/ "./_assets/js/templates/tags.js":
/*!**************************************!*\
  !*** ./_assets/js/templates/tags.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ renderTags; }\n/* harmony export */ });\n/* harmony import */ var _utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/replaceHistory */ \"./_assets/js/utils/replaceHistory.js\");\n/* harmony import */ var _utils_updateTASelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/updateTASelectors */ \"./_assets/js/utils/updateTASelectors.js\");\n\n\nfunction renderTags(node, state) {\n  // Construct our list elements:\n  const titleTwo = document.createElement('li');\n  const titleThree = document.createElement('li');\n  const category = document.createElement('li'); // Add a class to each and add an id to each:\n\n  titleTwo.classList.add('usa-button-group__item');\n  titleTwo.setAttribute('id', 'titleTwoTag');\n  titleThree.classList.add('usa-button-group__item');\n  titleThree.setAttribute('id', 'titleThreeTag');\n  category.classList.add('usa-button-group__item');\n  category.setAttribute('id', 'categoryTag'); // Create the HTML templates:\n\n  const titleTwoHTML = `<button class=\"usa-button usa-button--outline\"\n      >Title II <span class=\"text-ink\">X</span></button>`;\n  const titleThreeHTML = `<button class=\"usa-button usa-button--outline\"\n    >Title III <span class=\"text-ink\">X</span></button>`;\n  const categoryHTML = `<button class=\"usa-button usa-button--outline\"\n    >${state.category} <span class=\"text-ink\">X</span></button>`;\n  titleTwo.innerHTML = titleTwoHTML;\n  titleThree.innerHTML = titleThreeHTML;\n  category.innerHTML = categoryHTML; // Depending on the state of the selectors, render different tags:\n\n  if (state['title-ii'] === true && !document.getElementById('titleTwoTag')) {\n    node.appendChild(titleTwo);\n    document.querySelector(\"#titleTwoTag button\").addEventListener('click', function (event) {\n      state['title-ii'] = false;\n      (0,_utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__.replaceState)(state, 'updatedState', `/resources/?org=title-ii=${state['title-ii']};title-iii=${state['title-iii']};category=${state['category']}`);\n      (0,_utils_updateTASelectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('title-ii', state);\n      document.getElementById('titleTwoTag').remove();\n    });\n  } else if (state['title-ii'] === false && document.getElementById('titleTwoTag')) {\n    document.getElementById('titleTwoTag').remove();\n  }\n\n  if (state['title-iii'] === true && !document.getElementById('titleThreeTag')) {\n    node.appendChild(titleThree);\n    document.querySelector(\"#titleThreeTag button\").addEventListener('click', function (event) {\n      state['title-iii'] = false;\n      (0,_utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__.replaceState)(state, 'updatedState', `/resources/?org=title-ii=${state['title-ii']};title-iii=${state['title-iii']};category=${state['category']}`);\n      (0,_utils_updateTASelectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('title-iii', state);\n      document.getElementById('titleThreeTag').remove();\n    });\n  } else if (state['title-iii'] === false && document.getElementById('titleThreeTag')) {\n    document.getElementById('titleThreeTag').remove();\n  }\n\n  if (state.category !== '' && !document.getElementById('categoryTag')) {\n    node.appendChild(category);\n    document.querySelector(\"#categoryTag button\").addEventListener('click', function (event) {\n      state['category'] = \"\";\n      (0,_utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__.replaceState)(state, 'updatedState', `/resources/?org=title-ii=${state['title-ii']};title-iii=${state['title-iii']};category=${state['category']}`);\n      (0,_utils_updateTASelectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('category', state);\n      document.getElementById('categoryTag').remove();\n    });\n  } else if (state.category !== '' && document.getElementById('categoryTag')) {\n    document.getElementById('categoryTag').remove();\n    node.appendChild(category);\n    document.querySelector(\"#categoryTag button\").addEventListener('click', function (event) {\n      state['category'] = \"\";\n      (0,_utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__.replaceState)(state, 'updatedState', `/resources/?org=title-ii=${state['title-ii']};title-iii=${state['title-iii']};category=${state['category']}`);\n      (0,_utils_updateTASelectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('category', state);\n      document.getElementById('categoryTag').remove();\n    });\n  } else if (state.category === '' && document.getElementById('categoryTag')) {\n    document.getElementById('categoryTag').remove();\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/tags.js?");

/***/ }),

/***/ "./_assets/js/utils/replaceHistory.js":
/*!********************************************!*\
  !*** ./_assets/js/utils/replaceHistory.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pushStateToURL\": function() { return /* binding */ pushStateToURL; },\n/* harmony export */   \"replaceState\": function() { return /* binding */ replaceState; }\n/* harmony export */ });\nfunction pushStateToURL(state, title = null, url = null) {\n  history.pushState(state, title, url);\n}\n\nfunction replaceState(state, title = null, url = null) {\n  history.replaceState(state, title, url);\n}\n\n\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/replaceHistory.js?");

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