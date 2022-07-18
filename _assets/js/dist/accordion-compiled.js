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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_expandAccordions_getItemIds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/expandAccordions/getItemIds */ \"./_assets/js/utils/expandAccordions/getItemIds.js\");\n/* harmony import */ var _utils_expandAccordions_changeAccordionStateOnClick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/expandAccordions/changeAccordionStateOnClick */ \"./_assets/js/utils/expandAccordions/changeAccordionStateOnClick.js\");\n/* harmony import */ var _utils_expandAccordions_checkIfAccordionOpenOrClosed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/expandAccordions/checkIfAccordionOpenOrClosed */ \"./_assets/js/utils/expandAccordions/checkIfAccordionOpenOrClosed.js\");\n/* harmony import */ var _utils_expandAccordions_toggleAccordionButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/expandAccordions/toggleAccordionButtons */ \"./_assets/js/utils/expandAccordions/toggleAccordionButtons.js\");\n\n\n\n // Options for the observer (which mutations to observe)\n\nconst config = {\n  attributes: true,\n  childList: true,\n  subtree: true\n}; // Grab the button that will actually toggle things:\n\nconst openAccordionsButton = document.querySelector('#crt-page--expandaccordions'); // Select the node that will be observed for mutations\n\nconst contentNode = document.querySelector('#crt-page--content'); // On mutation, run check all buttons: when the state of a button changes, get the new array of button and detail states.\n// Callback function to execute when mutations are observed\n\nconst checkIfMutationIsFromAccordion = function (mutationsList, observer) {\n  for (const mutation of mutationsList) {\n    if ( // If the aria expanded attribute changes, but not on the main open all section button fire check our accordion state\n    mutation.attributeName === 'aria-expanded' && mutation.target.id !== 'crt-page--expandaccordions' || // Also check if the state of the details elements changes, if so re-run the check accordion buttons so we can update our main button\n    mutation.attributeName === 'data-detail-open') {\n      (0,_utils_expandAccordions_checkIfAccordionOpenOrClosed__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(openAccordionsButton);\n    }\n  }\n}; // Create an observer instance linked to the callback function\n\n\nconst observer = new MutationObserver(checkIfMutationIsFromAccordion); // Only do anything if the toggle button is on the page:\n\nif (openAccordionsButton) {\n  // Start observing the target node for configured mutations:\n  observer.observe(contentNode, config); //Get our list of item ids so we know what elements the button is controlling:\n\n  (0,_utils_expandAccordions_getItemIds__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(openAccordionsButton); // Initialize the event handlers\n\n  (0,_utils_expandAccordions_checkIfAccordionOpenOrClosed__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(openAccordionsButton);\n  (0,_utils_expandAccordions_toggleAccordionButtons__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(openAccordionsButton);\n  (0,_utils_expandAccordions_changeAccordionStateOnClick__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(openAccordionsButton);\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/expand-accordions.js?");

/***/ }),

/***/ "./_assets/js/utils/expandAccordions/changeAccordionStateOnClick.js":
/*!**************************************************************************!*\
  !*** ./_assets/js/utils/expandAccordions/changeAccordionStateOnClick.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getAccordions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAccordions */ \"./_assets/js/utils/expandAccordions/getAccordions.js\");\n/* harmony import */ var _getAccordionButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAccordionButtons */ \"./_assets/js/utils/expandAccordions/getAccordionButtons.js\");\n/* harmony import */ var _getDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDetails */ \"./_assets/js/utils/expandAccordions/getDetails.js\");\n/* harmony import */ var _setToggleButtonState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setToggleButtonState */ \"./_assets/js/utils/expandAccordions/setToggleButtonState.js\");\n/* harmony import */ var _setDetailsElementState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setDetailsElementState */ \"./_assets/js/utils/expandAccordions/setDetailsElementState.js\");\n\n\n\n\n // When we click the expand or close button, loop over the accordions and their buttons and either hide them or show them depending on the state of the button\n\nconst changeAccordionStateOnClick = openAccordionsButton => {\n  openAccordionsButton.addEventListener('click', function (e) {\n    const expanded = (0,_setToggleButtonState__WEBPACK_IMPORTED_MODULE_3__.toggleButtonText)(openAccordionsButton);\n    let accordions = (0,_getAccordions__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    let buttons = (0,_getAccordionButtons__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    let details = (0,_getDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // Manage accordion state:\n\n    accordions.forEach(accordion => {\n      if (expanded && accordion.getAttribute('hidden') !== null) {\n        // Make accordion content visible:\n        accordion.removeAttribute('hidden');\n      }\n\n      if (!expanded && accordion.getAttribute('hidden') === null) {\n        // Hide that accordion content:\n        accordion.setAttribute('hidden', 'hidden');\n      }\n    }); // Manage accordion buttons state:\n\n    buttons.forEach(button => {\n      if (expanded) {\n        // Let screen readers know that the accordion is expanded:\n        button.setAttribute('aria-expanded', 'true');\n      }\n\n      if (!expanded) {\n        // Let screen readers know that the accordion is collapsed:\n        button.setAttribute('aria-expanded', 'false');\n      }\n    }); // Manage details state:\n\n    details.forEach(detail => {\n      if (expanded && detail.getAttribute('open') === null) {\n        (0,_setDetailsElementState__WEBPACK_IMPORTED_MODULE_4__.openDetails)(detail);\n      }\n\n      if (!expanded && detail.getAttribute('open') !== null) {\n        (0,_setDetailsElementState__WEBPACK_IMPORTED_MODULE_4__.closeDetails)(detail);\n      }\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (changeAccordionStateOnClick);\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/expandAccordions/changeAccordionStateOnClick.js?");

/***/ }),

/***/ "./_assets/js/utils/expandAccordions/checkIfAccordionOpenOrClosed.js":
/*!***************************************************************************!*\
  !*** ./_assets/js/utils/expandAccordions/checkIfAccordionOpenOrClosed.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getAccordionButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAccordionButtons */ \"./_assets/js/utils/expandAccordions/getAccordionButtons.js\");\n/* harmony import */ var _getDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDetails */ \"./_assets/js/utils/expandAccordions/getDetails.js\");\n/* harmony import */ var _setToggleButtonState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setToggleButtonState */ \"./_assets/js/utils/expandAccordions/setToggleButtonState.js\");\n\n\n // Consolidate accordion buttons and detail elements states into a single array and use to update the toggle button state.\n\nconst checkIfAccordionOpenOrClosed = openAccordionsButton => {\n  let buttons = (0,_getAccordionButtons__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  let details = (0,_getDetails__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  let btnArr = [];\n\n  for (let button of buttons) {\n    btnArr.push(button.getAttribute('aria-expanded'));\n  }\n\n  for (let detail of details) {\n    btnArr.push(detail.getAttribute('data-detail-open'));\n  }\n\n  if (!btnArr.includes('true') && !btnArr.includes('data-detail-open')) {\n    openAccordionsButton.setAttribute('data-open', 'true');\n    (0,_setToggleButtonState__WEBPACK_IMPORTED_MODULE_2__.toggleButtonText)(openAccordionsButton);\n  }\n\n  return btnArr.includes('true') && btnArr.includes('data-detail-open');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (checkIfAccordionOpenOrClosed);\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/expandAccordions/checkIfAccordionOpenOrClosed.js?");

/***/ }),

/***/ "./_assets/js/utils/expandAccordions/getAccordionButtons.js":
/*!******************************************************************!*\
  !*** ./_assets/js/utils/expandAccordions/getAccordionButtons.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// Grab all of the accordion buttons except for the table of contents button and convert the Nodelist into an array:\nconst getAccordionButtons = () => Array.from(document.querySelectorAll('.expand button.usa-accordion__button.pa11y-skip'));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getAccordionButtons);\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/expandAccordions/getAccordionButtons.js?");

/***/ }),

/***/ "./_assets/js/utils/expandAccordions/getAccordions.js":
/*!************************************************************!*\
  !*** ./_assets/js/utils/expandAccordions/getAccordions.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// Grab all of the accordions and convert the Nodelist into an array:\nconst getAccordions = () => {\n  const regexp = /accordion-expandable\\-*/gm;\n  const accordions = Array.from(document.querySelectorAll('.expand div.usa-accordion__content')).filter(accordion => accordion.id.match(regexp));\n  return accordions;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getAccordions);\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/expandAccordions/getAccordions.js?");

/***/ }),

/***/ "./_assets/js/utils/expandAccordions/getDetails.js":
/*!*********************************************************!*\
  !*** ./_assets/js/utils/expandAccordions/getDetails.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// Grab all of the <details> elements and convert the Nodelist into an array:\nconst getDetails = () => Array.from(document.querySelectorAll('details.expand'));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getDetails);\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/expandAccordions/getDetails.js?");

/***/ }),

/***/ "./_assets/js/utils/expandAccordions/getItemIds.js":
/*!*********************************************************!*\
  !*** ./_assets/js/utils/expandAccordions/getItemIds.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getAccordions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAccordions */ \"./_assets/js/utils/expandAccordions/getAccordions.js\");\n/* harmony import */ var _getDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDetails */ \"./_assets/js/utils/expandAccordions/getDetails.js\");\n\n // Generate a list of all the controllable element ids so we can reference them using aria-controls in our button.\n\nconst getItemIds = parentButton => {\n  let ids = [];\n  (0,_getAccordions__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().forEach(acc => ids.push(acc.id));\n  (0,_getDetails__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().forEach(det => ids.push(det.id));\n  ids = ids.join(' ');\n  parentButton.setAttribute('aria-controls', ids);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getItemIds);\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/expandAccordions/getItemIds.js?");

/***/ }),

/***/ "./_assets/js/utils/expandAccordions/setDetailsElementState.js":
/*!*********************************************************************!*\
  !*** ./_assets/js/utils/expandAccordions/setDetailsElementState.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openDetails\": function() { return /* binding */ openDetails; },\n/* harmony export */   \"closeDetails\": function() { return /* binding */ closeDetails; }\n/* harmony export */ });\n// Change the state of the details elements:\nconst openDetails = detail => {\n  detail.setAttribute('open', 'open');\n  detail.setAttribute('data-detail-open', 'true');\n};\n\nconst closeDetails = detail => {\n  detail.removeAttribute('open');\n  detail.setAttribute('data-detail-open', 'false');\n};\n\n\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/expandAccordions/setDetailsElementState.js?");

/***/ }),

/***/ "./_assets/js/utils/expandAccordions/setToggleButtonState.js":
/*!*******************************************************************!*\
  !*** ./_assets/js/utils/expandAccordions/setToggleButtonState.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isOpen\": function() { return /* binding */ isOpen; },\n/* harmony export */   \"isClosed\": function() { return /* binding */ isClosed; },\n/* harmony export */   \"toggleButtonText\": function() { return /* binding */ toggleButtonText; }\n/* harmony export */ });\n// Toggle the state of the main toggle button:\n// If the toggle button is open and clicked, change it's state to the opposite:\nconst isOpen = button => {\n  button.setAttribute('data-open', 'false');\n  button.setAttribute('aria-expanded', 'false');\n  button.innerText = 'Open all sections';\n  return false;\n}; // If the toggle button is closed and clicked, change it's state to the opposite:\n\n\nconst isClosed = button => {\n  button.setAttribute('data-open', 'true');\n  button.setAttribute('aria-expanded', 'true');\n  button.innerText = 'Close all sections';\n  return true;\n}; // Change the text within the open all button and swap the value of the data open attribute:\n\n\nconst toggleButtonText = button => {\n  if (button.getAttribute('data-open') === 'true') {\n    return isOpen(button);\n  } else if (button.getAttribute('data-open') === 'false') {\n    return isClosed(button);\n  }\n};\n\n\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/expandAccordions/setToggleButtonState.js?");

/***/ }),

/***/ "./_assets/js/utils/expandAccordions/toggleAccordionButtons.js":
/*!*********************************************************************!*\
  !*** ./_assets/js/utils/expandAccordions/toggleAccordionButtons.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getAccordionButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAccordionButtons */ \"./_assets/js/utils/expandAccordions/getAccordionButtons.js\");\n/* harmony import */ var _getDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDetails */ \"./_assets/js/utils/expandAccordions/getDetails.js\");\n/* harmony import */ var _setToggleButtonState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setToggleButtonState */ \"./_assets/js/utils/expandAccordions/setToggleButtonState.js\");\n\n\n\n\nconst toggleAccordionButtons = openAccordionsButton => {\n  let buttons = (0,_getAccordionButtons__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  let details = (0,_getDetails__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Listen for events on the accordion buttons and trigger toggle button side effect\n\n  buttons.forEach(button => {\n    button.addEventListener('click', e => {\n      if (e.target.getAttribute('aria-expanded') === 'false') {\n        openAccordionsButton.setAttribute('data-open', 'false');\n        (0,_setToggleButtonState__WEBPACK_IMPORTED_MODULE_2__.toggleButtonText)(openAccordionsButton);\n        return;\n      }\n    });\n  }); // Listen for events on the details element, manage details state and trigger toggle button side effect\n\n  details.forEach(detail => {\n    detail.addEventListener('click', () => {\n      if (detail.getAttribute('open') === null) {\n        detail.setAttribute('data-detail-open', 'true');\n        openAccordionsButton.setAttribute('data-open', 'false');\n        (0,_setToggleButtonState__WEBPACK_IMPORTED_MODULE_2__.toggleButtonText)(openAccordionsButton);\n        return;\n      } else {\n        detail.setAttribute('data-detail-open', 'false');\n      }\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (toggleAccordionButtons);\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/expandAccordions/toggleAccordionButtons.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./_assets/js/expand-accordions.js");
/******/ 	
/******/ })()
;