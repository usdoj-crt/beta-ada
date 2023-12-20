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

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/constants'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/taSelectors/expandTarget'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/taSelectors/updateDomAndURL'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/taSelectors/dropDownKeyListener'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/searchParamUtils'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/getSetlocalStorage'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/userClickedAnchorLink'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n\n // Get our checkboxes:\n\nconst checkboxes = document.getElementsByClassName('usa-checkbox__input'); // Get our dropdown:\n\nconst dropdownContainer = document.getElementsByClassName('crt-dropdown')[0]; // Get our dropdown button:\n\nconst dropdownButton = document.getElementById('category-expand'); // Get our dropdown options:\n\nconst optionsArray = Array.from(document.querySelectorAll('.checkbox-option')); // Get our category container:\n\nconst listContainer = document.getElementById('category-list-container'); // Define our param name for both localStorage key and search param name:\n\nconst paramName = 'filters'; // Initialize state:\n\nlet selectorState = []; // Replicate keyboard functionality from select elements:\n\ndropdownContainer.addEventListener('keyup', e => {\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/taSelectors/dropDownKeyListener'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(e.key, selectorState, listContainer, optionsArray, dropdownButton);\n}); // Add event listener to checkboxes to update state:\n\nArray.from(checkboxes).forEach(checkbox => {\n  checkbox.addEventListener('change', event => {\n    // Update the check box state\n    if (event.target.dataset.checked === 'true') {\n      event.target.dataset.checked = false;\n      const index = selectorState.indexOf(event.target.value);\n      selectorState.splice(index, 1); // Find and remove badge:\n\n      document.getElementById(`${event.target.value}-badge`).remove();\n    } else if (event.target.dataset.checked === 'false') {\n      event.target.dataset.checked = true;\n      selectorState.push(event.target.value);\n    }\n\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/taSelectors/updateDomAndURL'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(selectorState);\n  });\n});\ndropdownButton.addEventListener('click', () => {\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/taSelectors/expandTarget'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(listContainer.id);\n});\n\nwindow.onload = function () {\n  // Get our saved filter state either by using localStorage or by using the URL search params.\n  // We want to use local storage in the case that someone is navigating by links to return to the resources page\n  // This won't invoke the browser's history, so we need another way to grab the previous state of the checkboxes\n  // When navigating via link, the search params in the link will be empty, so if we have them in local storage, lets use them:\n  if (Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/userClickedAnchorLink'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(paramName)) {\n    selectorState = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/getSetlocalStorage'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(paramName).split(';');\n  } else {\n    // If we have search params available in the URL, use them to populate state\n    selectorState = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/searchParamUtils'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(paramName).split(';');\n  } // Remove items not allowed in the tags list:\n\n\n  const tempState = selectorState.filter(item => {\n    if (Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/constants'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(item)) {\n      return item;\n    }\n  });\n  selectorState = tempState; // Set checkboxes on load:\n\n  for (let item in selectorState) {\n    if (Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/constants'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(selectorState[item])) {\n      document.getElementById(selectorState[item]).checked = true;\n      document.getElementById(selectorState[item]).dataset.checked = true;\n    }\n  }\n\n  ; // Close the dropdown if user clicks outside of it:\n\n  document.addEventListener('click', e => {\n    const didClickedOutside = !dropdownContainer.contains(e.target);\n\n    if (didClickedOutside && !listContainer.hasAttribute('hidden')) {\n      Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/taSelectors/expandTarget'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(listContainer.id);\n    }\n  });\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/taSelectors/updateDomAndURL'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(selectorState);\n};\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/ta-selectors.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./_assets/js/ta-selectors.js"](0, __webpack_exports__, __webpack_require__);
/******/
/******/ 	var __webpack_modules__ = ({

/***/ "./_assets/js/ta-selectors.js":
/*!************************************!*\
  !*** ./_assets/js/ta-selectors.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/constants'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/taSelectors/expandTarget'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/taSelectors/updateDomAndURL'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/taSelectors/dropDownKeyListener'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/searchParamUtils'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/getSetlocalStorage'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/userClickedAnchorLink'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n\n // Get our checkboxes:\n\nconst checkboxes = document.getElementsByClassName('usa-checkbox__input'); // Get our dropdown:\n\nconst dropdownContainer = document.getElementsByClassName('crt-dropdown')[0]; // Get our dropdown button:\n\nconst dropdownButton = document.getElementById('category-expand'); // Get our dropdown options:\n\nconst optionsArray = Array.from(document.querySelectorAll('.checkbox-option')); // Get our category container:\n\nconst listContainer = document.getElementById('category-list-container'); // Define our param name for both localStorage key and search param name:\n\nconst paramName = 'filters'; // Initialize state:\n\nlet selectorState = []; // Replicate keyboard functionality from select elements:\n\ndropdownContainer.addEventListener('keyup', e => {\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/taSelectors/dropDownKeyListener'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(e.key, selectorState, listContainer, optionsArray, dropdownButton);\n}); // Add event listener to checkboxes to update state:\n\nArray.from(checkboxes).forEach(checkbox => {\n  checkbox.addEventListener('change', event => {\n    // Update the check box state\n    if (event.target.dataset.checked === 'true') {\n      event.target.dataset.checked = false;\n      const index = selectorState.indexOf(event.target.value);\n      selectorState.splice(index, 1); // Find and remove badge:\n\n      document.getElementById(`${event.target.value}-badge`).remove();\n    } else if (event.target.dataset.checked === 'false') {\n      event.target.dataset.checked = true;\n      selectorState.push(event.target.value);\n    }\n\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/taSelectors/updateDomAndURL'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(selectorState);\n  });\n});\ndropdownButton.addEventListener('click', () => {\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/taSelectors/expandTarget'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(listContainer.id);\n});\n\nwindow.onload = function () {\n  // Get our saved filter state either by using localStorage or by using the URL search params.\n  // We want to use local storage in the case that someone is navigating by links to return to the resources page\n  // This won't invoke the browser's history, so we need another way to grab the previous state of the checkboxes\n  // When navigating via link, the search params in the link will be empty, so if we have them in local storage, lets use them:\n  if (Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/userClickedAnchorLink'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(paramName)) {\n    selectorState = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/getSetlocalStorage'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(paramName).split(';');\n  } else {\n    // If we have search params available in the URL, use them to populate state\n    selectorState = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/searchParamUtils'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(paramName).split(';');\n  } // Remove items not allowed in the tags list:\n\n\n  const tempState = selectorState.filter(item => {\n    if (Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/constants'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(item)) {\n      return item;\n    }\n  });\n  selectorState = tempState; // Set checkboxes on load:\n\n  for (let item in selectorState) {\n    if (Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/constants'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(selectorState[item])) {\n      document.getElementById(selectorState[item]).checked = true;\n      document.getElementById(selectorState[item]).dataset.checked = true;\n    }\n  }\n\n  ; // Close the dropdown if user clicks outside of it:\n\n  document.addEventListener('click', e => {\n    const didClickedOutside = !dropdownContainer.contains(e.target);\n\n    if (didClickedOutside && !listContainer.hasAttribute('hidden')) {\n      Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/taSelectors/expandTarget'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(listContainer.id);\n    }\n  });\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/taSelectors/updateDomAndURL'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(selectorState);\n};\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/ta-selectors.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./_assets/js/ta-selectors.js"](0, __webpack_exports__, __webpack_require__);
/******/
/******/ })()
;
