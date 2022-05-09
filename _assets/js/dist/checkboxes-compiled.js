/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./_assets/js/organization-checkboxes.js":
/*!***********************************************!*\
  !*** ./_assets/js/organization-checkboxes.js ***!
  \***********************************************/
/***/ (function() {

eval("// Get our checkboxes:\nconst checkboxes = document.getElementsByClassName('usa-checkbox__input');\nconst checkboxState = {\n  \"title-ii\": false,\n  \"title-iii\": false\n};\nArray.from(checkboxes).forEach(checkbox => {\n  checkbox.addEventListener('change', event => {\n    // Update the check box state\n    if (event.target.checked) {\n      checkboxState[event.target.value] = event.target.checked;\n    } else {\n      checkboxState[event.target.value] = event.target.checked;\n    }\n  });\n});\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/organization-checkboxes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./_assets/js/organization-checkboxes.js"]();
/******/ 	
/******/ })()
;