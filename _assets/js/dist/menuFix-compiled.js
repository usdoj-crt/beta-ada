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

/***/ "./_assets/js/utils/menuSetTabindex.js":
/*!*********************************************!*\
  !*** ./_assets/js/utils/menuSetTabindex.js ***!
  \*********************************************/
/***/ (function() {

eval("// Extending the functionality of the navigation.js code from USWDS\nvar NON_NAV_ELEMENTS = 'body > *:not(.usa-header):not([aria-hidden])';\nvar NON_NAV_HIDDEN = '[data-nav-hidden]';\nvar MENUBUTTON = document.querySelector('button.usa-menu-btn');\nvar CLOSEBUTTON = document.querySelector('button.usa-nav__close');\n\nvar hideNonNavItems = function hideNonNavItems() {\n  nonNavElements = document.querySelectorAll(NON_NAV_ELEMENTS);\n  nonNavElements.forEach(function (nonNavElement) {\n    nonNavElement.setAttribute('disabled', true);\n  });\n};\n\nvar showNonNavItems = function showNonNavItems() {\n  nonNavElements = document.querySelectorAll(NON_NAV_HIDDEN);\n\n  if (!nonNavElements) {\n    return;\n  } // Remove aria-hidden from non-header elements\n\n\n  nonNavElements.forEach(function (nonNavElement) {\n    nonNavElement.removeAttribute('disabled');\n  });\n}; // Toggle all non-header elements #3527.\n\n\nvar toggleNonNavItems = function toggleNonNavItems(active) {\n  if (active) {\n    showNonNavItems();\n  } else {\n    hideNonNavItems();\n  }\n}; // Add event listener to menu button:\n\n\nMENUBUTTON.addEventListener('click', function (e) {\n  e.preventDefault();\n  toggleNonNavItems(false);\n}); // Add an event listener to the close button:\n\nCLOSEBUTTON.addEventListener('click', function (e) {\n  e.preventDefault();\n  toggleNonNavItems(true);\n});\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/menuSetTabindex.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./_assets/js/utils/menuSetTabindex.js"]();
/******/ 	
/******/ })()
;