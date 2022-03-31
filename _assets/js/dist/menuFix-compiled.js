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

/***/ "./_assets/js/utils/flattenArray.js":
/*!******************************************!*\
  !*** ./_assets/js/utils/flattenArray.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// to enable deep level flatten use recursion with reduce and concat\nvar flatDeep = function flatDeep(arr) {\n  var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  return d > 0 ? arr.reduce(function (acc, val) {\n    return acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val);\n  }, []) : arr.slice();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (flatDeep);\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/flattenArray.js?");

/***/ }),

/***/ "./_assets/js/utils/menuSetTabindex.js":
/*!*********************************************!*\
  !*** ./_assets/js/utils/menuSetTabindex.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _flattenArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flattenArray.js */ \"./_assets/js/utils/flattenArray.js\");\n // Extending the functionality of the navigation.js code from USWDS\n\nvar MENUBUTTON = document.querySelector('button.usa-menu-btn');\nvar CLOSEBUTTON = document.querySelector('button.usa-nav__close');\nvar NONNAVELEMENTS = document.querySelectorAll('body > *:not(.usa-header):not([aria-hidden])');\n\nvar getChildrenElements = function getChildrenElements(nonNavElements) {\n  var childrenArray = [];\n  nonNavElements.forEach(function (element) {\n    childrenArray.push(Array.from(element.children));\n  });\n  return childrenArray;\n};\n\nvar hideNonNavItems = function hideNonNavItems(nonNavArr) {\n  nonNavArr.forEach(function (nonNavElement) {\n    //Add tabindex to non-header elements\n    nonNavElement.setAttribute('tabindex', '-1');\n  });\n};\n\nvar showNonNavItems = function showNonNavItems(nonNavArr) {\n  if (nonNavArr.length === 0) {\n    return;\n  } // Remove tabindex from non-header elements\n\n\n  nonNavArr.forEach(function (nonNavElement) {\n    nonNavElement.removeAttribute('tabindex');\n  });\n}; // Toggle all non-header elements.\n\n\nvar toggleNonNavItems = function toggleNonNavItems(active) {\n  var childArr = getChildrenElements(NONNAVELEMENTS);\n  var flattenedChildArr = (0,_flattenArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(childArr, Infinity);\n  console.log(flattenedChildArr);\n\n  if (active) {\n    showNonNavItems(flattenedChildArr);\n  } else {\n    hideNonNavItems(flattenedChildArr);\n  }\n}; // Add event listener to menu button:\n\n\nMENUBUTTON.addEventListener('click', function (e) {\n  e.preventDefault();\n  toggleNonNavItems(false);\n}); // Add an event listener to the close button:\n\nCLOSEBUTTON.addEventListener('click', function (e) {\n  e.preventDefault();\n  toggleNonNavItems(true);\n});\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/menuSetTabindex.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./_assets/js/utils/menuSetTabindex.js");
/******/ 	
/******/ })()
;