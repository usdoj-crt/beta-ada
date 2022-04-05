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

eval("// Extending the functionality of the navigation.js code from USWDS\nvar MENUBUTTON = document.querySelector('button.usa-menu-btn');\nvar CLOSEBUTTON = document.querySelector('button.usa-nav__close');\nvar NONNAVELEMENTS = document.querySelectorAll('body > *:not(.usa-header):not([aria-hidden])');\nvar childrenArray = [];\n\nvar getChildrenElements = function getChildrenElements(nonNavElements) {\n  var nonNavArray = Array.from(nonNavElements);\n\n  for (var i = 0; i < nonNavArray.length; i++) {\n    if (nonNavArray[i].nodeType === 1) {\n      childrenArray.push(nonNavArray[i]);\n    }\n\n    if (nonNavArray[i].hasChildNodes()) {\n      getChildrenElements(nonNavArray[i].childNodes);\n    }\n  }\n\n  return childrenArray;\n};\n\nvar hideNonNavItems = function hideNonNavItems(nonNavArr) {\n  // Add disabled attribute to parent elements:\n  NONNAVELEMENTS.forEach(function (element) {\n    element.setAttribute('disabled', true);\n  });\n  nonNavArr.forEach(function (nonNavElement) {\n    //Add tabindex to non-header elements\n    nonNavElement.setAttribute('tabindex', -1);\n  });\n};\n\nvar showNonNavItems = function showNonNavItems(nonNavArr) {\n  if (nonNavArr.length === 0) {\n    return;\n  } // Remove disabled attribute to parent elements:\n\n\n  NONNAVELEMENTS.forEach(function (element) {\n    element.removeAttribute('disabled');\n  }); // Remove tabindex from non-header elements\n\n  nonNavArr.forEach(function (nonNavElement) {\n    nonNavElement.removeAttribute('tabindex');\n  });\n}; // Toggle all non-header elements.\n\n\nvar toggleNonNavItems = function toggleNonNavItems(active) {\n  var childArr = getChildrenElements(NONNAVELEMENTS); //let flattenedChildArr = flatDeep(childArr, Infinity);\n\n  if (active) {\n    showNonNavItems(childArr);\n  } else {\n    hideNonNavItems(childArr);\n  }\n}; // Add event listener to menu button:\n\n\nMENUBUTTON.addEventListener('click', function (e) {\n  e.preventDefault();\n  toggleNonNavItems(false);\n}); // Add an event listener to the close button:\n\nCLOSEBUTTON.addEventListener('click', function (e) {\n  e.preventDefault();\n  toggleNonNavItems(true);\n});\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/menuSetTabindex.js?");

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