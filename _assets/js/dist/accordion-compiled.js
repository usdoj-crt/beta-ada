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

/***/ "./_assets/js/expand-accordions.js":
/*!*****************************************!*\
  !*** ./_assets/js/expand-accordions.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/expandAccordions/getItemIds'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/expandAccordions/changeAccordionStateOnClick'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/expandAccordions/checkIfAccordionOpenOrClosed'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/expandAccordions/toggleAccordionButtons'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n // Options for the observer (which mutations to observe)\n\nconst config = {\n  attributes: true,\n  childList: true,\n  subtree: true\n}; // Grab the button that will actually toggle things:\n\nconst openAccordionsButton = document.querySelector('#crt-page--expandaccordions'); // Select the node that will be observed for mutations\n\nconst contentNode = document.querySelector('#crt-page--content'); // On mutation, run check all buttons: when the state of a button changes, get the new array of button and detail states.\n// Callback function to execute when mutations are observed\n\nconst checkIfMutationIsFromAccordion = function (mutationsList, observer) {\n  for (const mutation of mutationsList) {\n    if ( // If the aria expanded attribute changes, but not on the main open all section button fire check our accordion state\n    mutation.attributeName === 'aria-expanded' && mutation.target.id !== 'crt-page--expandaccordions' || // Also check if the state of the details elements changes, if so re-run the check accordion buttons so we can update our main button\n    mutation.attributeName === 'data-detail-open') {\n      Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/expandAccordions/checkIfAccordionOpenOrClosed'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(openAccordionsButton);\n    }\n  }\n}; // Create an observer instance linked to the callback function\n\n\nconst observer = new MutationObserver(checkIfMutationIsFromAccordion); // Only do anything if the toggle button is on the page:\n\nif (openAccordionsButton) {\n  // Start observing the target node for configured mutations:\n  observer.observe(contentNode, config); //Get our list of item ids so we know what elements the button is controlling:\n\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/expandAccordions/getItemIds'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(openAccordionsButton); // Initialize the event handlers\n\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/expandAccordions/checkIfAccordionOpenOrClosed'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(openAccordionsButton);\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/expandAccordions/toggleAccordionButtons'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(openAccordionsButton);\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/expandAccordions/changeAccordionStateOnClick'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(openAccordionsButton);\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/expand-accordions.js?");

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
/******/ 	__webpack_modules__["./_assets/js/expand-accordions.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;