<<<<<<< HEAD
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

/***/ "./_assets/js/ta-selectors.js":
/*!************************************!*\
  !*** ./_assets/js/ta-selectors.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/constants */ \"./_assets/js/utils/constants.js\");\n/* harmony import */ var _utils_taSelectors_expandTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/taSelectors/expandTarget */ \"./_assets/js/utils/taSelectors/expandTarget.js\");\n/* harmony import */ var _utils_taSelectors_updateDomAndURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/taSelectors/updateDomAndURL */ \"./_assets/js/utils/taSelectors/updateDomAndURL.js\");\n/* harmony import */ var _utils_taSelectors_dropDownKeyListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/taSelectors/dropDownKeyListener */ \"./_assets/js/utils/taSelectors/dropDownKeyListener.js\");\n/* harmony import */ var _utils_searchParamUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/searchParamUtils */ \"./_assets/js/utils/searchParamUtils.js\");\n/* harmony import */ var _utils_getSetlocalStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/getSetlocalStorage */ \"./_assets/js/utils/getSetlocalStorage.js\");\n/* harmony import */ var _utils_userClickedAnchorLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/userClickedAnchorLink */ \"./_assets/js/utils/userClickedAnchorLink.js\");\n\n\n\n\n\n\n // Get our checkboxes:\n\nconst checkboxes = document.getElementsByClassName('usa-checkbox__input'); // Get our dropdown:\n\nconst dropdownContainer = document.getElementsByClassName('crt-dropdown')[0]; // Get our dropdown button:\n\nconst dropdownButton = document.getElementById('category-expand'); // Get our dropdown options:\n\nconst optionsArray = Array.from(document.querySelectorAll('.checkbox-option')); // Get our category container:\n\nconst listContainer = document.getElementById('category-list-container'); // Define our param name for both localStorage key and search param name:\n\nconst paramName = 'filters'; // Initialize state:\n\nlet selectorState = []; // Replicate keyboard functionality from select elements:\n\ndropdownContainer.addEventListener('keyup', e => {\n  (0,_utils_taSelectors_dropDownKeyListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e.key, selectorState, listContainer, optionsArray, dropdownButton);\n}); // Add event listener to checkboxes to update state:\n\nArray.from(checkboxes).forEach(checkbox => {\n  checkbox.addEventListener('change', event => {\n    // Update the check box state\n    if (event.target.dataset.checked === 'true') {\n      event.target.dataset.checked = false;\n      const index = selectorState.indexOf(event.target.value);\n      selectorState.splice(index, 1); // Find and remove badge:\n\n      document.getElementById(`${event.target.value}-badge`).remove();\n    } else if (event.target.dataset.checked === 'false') {\n      event.target.dataset.checked = true;\n      selectorState.push(event.target.value);\n    }\n\n    (0,_utils_taSelectors_updateDomAndURL__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(selectorState);\n  });\n});\ndropdownButton.addEventListener('click', () => {\n  (0,_utils_taSelectors_expandTarget__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(listContainer.id);\n});\n\nwindow.onload = function () {\n  // Get our saved filter state either by using localStorage or by using the URL search params.\n  // We want to use local storage in the case that someone is navigating by links to return to the resources page\n  // This won't invoke the browser's history, so we need another way to grab the previous state of the checkboxes\n  // When navigating via link, the search params in the link will be empty, so if we have them in local storage, lets use them:\n  if ((0,_utils_userClickedAnchorLink__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(paramName)) {\n    selectorState = (0,_utils_getSetlocalStorage__WEBPACK_IMPORTED_MODULE_5__.accessStorage)(paramName).split(';');\n  } else {\n    // If we have search params available in the URL, use them to populate state\n    selectorState = (0,_utils_searchParamUtils__WEBPACK_IMPORTED_MODULE_4__.getSearchParam)(paramName).split(';');\n  } // Remove items not allowed in the tags list:\n\n\n  const tempState = selectorState.filter(item => {\n    if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__.TAGS.includes(item)) {\n      return item;\n    }\n  });\n  selectorState = tempState; // Set checkboxes on load:\n\n  for (let item in selectorState) {\n    if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__.TAGS.includes(selectorState[item])) {\n      document.getElementById(selectorState[item]).checked = true;\n      document.getElementById(selectorState[item]).dataset.checked = true;\n    }\n  }\n\n  ; // Close the dropdown if user clicks outside of it:\n\n  document.addEventListener('click', e => {\n    const didClickedOutside = !dropdownContainer.contains(e.target);\n\n    if (didClickedOutside && !listContainer.hasAttribute('hidden')) {\n      (0,_utils_taSelectors_expandTarget__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(listContainer.id);\n    }\n  });\n  (0,_utils_taSelectors_updateDomAndURL__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(selectorState);\n};\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/ta-selectors.js?");

/***/ }),

/***/ "./_assets/js/templates/badges/attachBadge.js":
/*!****************************************************!*\
  !*** ./_assets/js/templates/badges/attachBadge.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ attachBadge; }\n/* harmony export */ });\n/* harmony import */ var _utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/replaceHistory */ \"./_assets/js/utils/replaceHistory.js\");\n/* harmony import */ var _utils_taSelectors_updateTASelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/taSelectors/updateTASelectors */ \"./_assets/js/utils/taSelectors/updateTASelectors.js\");\n/* harmony import */ var _utils_taSelectors_toggleVisibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/taSelectors/toggleVisibility */ \"./_assets/js/utils/taSelectors/toggleVisibility.js\");\n/* harmony import */ var _search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/totalResultsTemplate */ \"./_assets/js/templates/search/totalResultsTemplate.js\");\n/* harmony import */ var _utils_getSetlocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/getSetlocalStorage */ \"./_assets/js/utils/getSetlocalStorage.js\");\n\n\n\n\n\nfunction attachBadge(element, state) {\n  // Get our unordered list to put badges in:\n  const badgeList = document.querySelector('#selector-badges ul');\n\n  if (!document.getElementById(element.id)) {\n    badgeList.appendChild(element);\n\n    if (document.querySelector(`#${element.id} button`)) {\n      document.querySelector(`#${element.id} button`).addEventListener('click', function () {\n        document.getElementById(element.id).remove();\n        const value = element.id.replace('-badge', '');\n        const index = state.indexOf(value);\n        state.splice(index, 1);\n        (0,_utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__.replaceState)(state, 'updatedState', `/resources/?filters=${state.join(';')}`);\n        (0,_utils_getSetlocalStorage__WEBPACK_IMPORTED_MODULE_4__.setStorage)('filters', state.join(';'));\n        (0,_utils_taSelectors_updateTASelectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, state);\n        document.getElementById('resultsListTarget').innerHTML = (0,_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_utils_taSelectors_toggleVisibility__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state), 'item');\n      });\n    }\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/badges/attachBadge.js?");

/***/ }),

/***/ "./_assets/js/templates/badges/badgeTemplate.js":
/*!******************************************************!*\
  !*** ./_assets/js/templates/badges/badgeTemplate.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ badge; }\n/* harmony export */ });\nfunction badge(title) {\n  const normalizedTitle = title.split('-').join(\" \");\n  return `\n    <span class=\"usa-button text-normal button-wrapper\">\n     ${normalizedTitle[0].toUpperCase() + normalizedTitle.substring(1)}\n    <button class=\"usa-button usa-button--unstyled text-no-underline\"\n    >\n    <span class=\"margin-left-05 flex-align-center\"><svg fill='#162e51' aria-hidden=\"true\" role=\"img\">\n    <use xlink:href=\"/assets/img/sprite.svg#close\"></use>\n        </svg></span>\n    <span class=\"usa-sr-only\">Press enter to remove ${normalizedTitle} filter.</span>\n    </button>\n    </span>\n    `;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/badges/badgeTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/badges/renderBadges.js":
/*!*****************************************************!*\
  !*** ./_assets/js/templates/badges/renderBadges.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ renderBages; }\n/* harmony export */ });\n/* harmony import */ var _attachBadge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attachBadge */ \"./_assets/js/templates/badges/attachBadge.js\");\n/* harmony import */ var _badgeTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badgeTemplate */ \"./_assets/js/templates/badges/badgeTemplate.js\");\n\n\nfunction renderBages(state) {\n  for (const item in state) {\n    let tagBadge = document.createElement('li');\n    tagBadge.classList.add('usa-button-group__item', 'categoryTag');\n    tagBadge.setAttribute('id', `${state[item]}-badge`);\n\n    if (state[item] === 'title-ii') {\n      tagBadge.innerHTML = (0,_badgeTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('State and local government');\n    } else if (state[item] === 'title-iii') {\n      tagBadge.innerHTML = (0,_badgeTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Businesses');\n    } else {\n      tagBadge.innerHTML = (0,_badgeTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state[item]);\n    }\n\n    (0,_attachBadge__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tagBadge, state);\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/badges/renderBadges.js?");

/***/ }),

/***/ "./_assets/js/templates/search/totalResultsTemplate.js":
/*!*************************************************************!*\
  !*** ./_assets/js/templates/search/totalResultsTemplate.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ totalResults; }\n/* harmony export */ });\nfunction totalResults(resultsTotal = 0, type = \"results\") {\n  const moreThanOne = `<div markdown=\"0\" role=\"status\"><p class=\"total-results margin-y-0\">${resultsTotal} ${type}s found</p></div>`;\n  const equalToOne = `<div markdown=\"0\" role=\"status\"><p class=\"total-results margin-y-0\">${resultsTotal} ${type} found</p></div>`;\n  const lessThanOne = `<div markdown=\"0\" role=\"status\"><p class=\"total-results margin-y-0\">No ${type}s found</p></div>`;\n\n  if (type === null) {\n    type = 'results';\n  }\n\n  if (resultsTotal > 1) {\n    return moreThanOne;\n  }\n\n  if (resultsTotal === 1) {\n    return equalToOne;\n  }\n\n  if (resultsTotal < 1) {\n    return lessThanOne;\n  }\n\n  if (resultsTotal === null) {\n    return lessThanOne;\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/search/totalResultsTemplate.js?");

/***/ }),

/***/ "./_assets/js/utils/constants.js":
/*!***************************************!*\
  !*** ./_assets/js/utils/constants.js ***!
  \***************************************/
/***/ (function() {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/cindynelson/Desktop/beta-ada/_assets/js/utils/constants.js: Unexpected token, expected \\\",\\\" (13:2)\\n\\n\\u001b[0m \\u001b[90m 11 |\\u001b[39m   \\u001b[32m'web-access'\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 |\\u001b[39m   \\u001b[32m'employment'\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 13 |\\u001b[39m   \\u001b[32m'effective-communication'\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m   \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 |\\u001b[39m ]\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 |\\u001b[39m \\u001b[36mexport\\u001b[39m { \\u001b[33mNUMBER_OF_RESULTS\\u001b[39m\\u001b[33m,\\u001b[39m \\u001b[33mSEARCH_ENDPOINT\\u001b[39m\\u001b[33m,\\u001b[39m \\u001b[33mACCESS_KEY\\u001b[39m\\u001b[33m,\\u001b[39m \\u001b[33mAFFILIATE\\u001b[39m\\u001b[33m,\\u001b[39m \\u001b[33mTAGS\\u001b[39m }\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at instantiate (/Users/cindynelson/Desktop/beta-ada/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:72:32)\\n    at constructor (/Users/cindynelson/Desktop/beta-ada/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:358:12)\\n    at Parser.raise (/Users/cindynelson/Desktop/beta-ada/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:3335:19)\\n    at Parser.unexpected (/Users/cindynelson/Desktop/beta-ada/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:3373:16)\\n    at Parser.expect (/Users/cindynelson/Desktop/beta-ada/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:4002:28)\\n    at Parser.parseExprList (/Users/cindynelson/Desktop/beta-ada/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:13900:14)\\n    at Parser.parseArrayLike (/Users/cindynelson/Desktop/beta-ada/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:13790:26)\\n    at Parser.parseExprAtom (/Users/cindynelson/Desktop/beta-ada/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:12879:23)\\n    at Parser.parseExprSubscripts (/Users/cindynelson/Desktop/beta-ada/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:12540:23)\\n    at Parser.parseUpdate (/Users/cindynelson/Desktop/beta-ada/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:12519:21)\");\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/constants.js?");

/***/ }),

/***/ "./_assets/js/utils/findFocus.js":
/*!***************************************!*\
  !*** ./_assets/js/utils/findFocus.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ findFocus; }\n/* harmony export */ });\nfunction findFocus() {\n  const focusPoint = document.activeElement;\n  return focusPoint;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/findFocus.js?");

/***/ }),

/***/ "./_assets/js/utils/getSetlocalStorage.js":
/*!************************************************!*\
  !*** ./_assets/js/utils/getSetlocalStorage.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accessStorage\": function() { return /* binding */ accessStorage; },\n/* harmony export */   \"setStorage\": function() { return /* binding */ setStorage; }\n/* harmony export */ });\n/* harmony import */ var _localStorageAvailable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorageAvailable */ \"./_assets/js/utils/localStorageAvailable.js\");\n\n\nfunction setStorage(name, data) {\n  if ((0,_localStorageAvailable__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('localStorage')) {\n    localStorage.setItem(name, data);\n  }\n}\n\nfunction accessStorage(name) {\n  return (0,_localStorageAvailable__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('localStorage') ? localStorage.getItem(name) : '';\n}\n\n\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/getSetlocalStorage.js?");

/***/ }),

/***/ "./_assets/js/utils/localStorageAvailable.js":
/*!***************************************************!*\
  !*** ./_assets/js/utils/localStorageAvailable.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ storageAvailable; }\n/* harmony export */ });\n// Adapted from MDN: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API\nfunction storageAvailable(type) {\n  let storage;\n\n  try {\n    storage = window[type];\n    const x = '__storage_test__';\n    storage.setItem(x, x);\n    storage.removeItem(x);\n    return true;\n  } catch (error) {\n    return error instanceof DOMException && ( // everything except Firefox\n    error.code === 22 || // Firefox\n    error.code === 1014 || // test name field too, because code might not be present\n    // everything except Firefox\n    error.name === 'QuotaExceededError' || // Firefox\n    error.name === 'NS_ERROR_DOM_QUOTA_REACHED') && // acknowledge QuotaExceededError only if there's something already stored\n    storage && storage.length !== 0;\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/localStorageAvailable.js?");

/***/ }),

/***/ "./_assets/js/utils/moveFocus.js":
/*!***************************************!*\
  !*** ./_assets/js/utils/moveFocus.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ moveFocus; }\n/* harmony export */ });\n/* harmony import */ var _findFocus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findFocus */ \"./_assets/js/utils/findFocus.js\");\n\nfunction moveFocus(fromHere, toThere, optionsArray, dropDownContainer) {\n  // fromHere is the element you are currently on\n  // toThere is decided by the arrow key pressed\n  // optionsArray is the list of options within the dropDownContainer\n  // dropDownContainer is the top level of the category selector element\n  switch (fromHere) {\n    case dropDownContainer:\n      // If the current element is the drop down container and the down key is pressed, focus the first option within that dropdown:\n      if (toThere === 'forward') {\n        optionsArray[0].focus(); // If the current element is the dropdown container and the up arrow is pressed, loop back to the last item in the options list:\n      } else if (toThere === 'back') {\n        optionsArray[optionsArray.length - 1].focus();\n      }\n\n      break;\n\n    case optionsArray[0]:\n      // If the first item in the dropdown list is focused, and the down key is pressed, then focus the next item in the list\n      if (toThere === 'forward') {\n        optionsArray[1].focus(); // If you press the up arrow key then go back to the dropdown container\n      } else if (toThere === 'back') {\n        dropDownContainer.focus();\n      }\n\n      break;\n    // If the last item in the options list is the item in focus\n\n    case optionsArray[optionsArray.length - 1]:\n      // and the down arrow key is pressed, focus the first option in the list:\n      if (toThere === 'forward') {\n        optionsArray[0].focus(); // if the up arrow key is pressed, then move back to the second to last item:\n      } else if (toThere === 'back') {\n        optionsArray[optionsArray.length - 2].focus();\n      }\n\n      break;\n\n    default:\n      // middle list or filtered items \n      const currentItem = (0,_findFocus__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      const whichOne = optionsArray.indexOf(currentItem); // if the down arrow key is pressed\n\n      if (toThere === 'forward') {\n        // get the next item in the options array\n        const nextOne = optionsArray[whichOne + 1]; // put it into focus:\n\n        nextOne.focus(); // if the up arrow key is pressed:\n      } else if (toThere === 'back' && whichOne > 0) {\n        // get the previous item in the options list\n        const previousOne = optionsArray[whichOne - 1]; // focus it\n\n        previousOne.focus();\n      } else {\n        // if whichOne = 0\n        dropDownContainer.focus();\n      }\n\n      break;\n  }\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/moveFocus.js?");

/***/ }),

/***/ "./_assets/js/utils/replaceHistory.js":
/*!********************************************!*\
  !*** ./_assets/js/utils/replaceHistory.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pushStateToURL\": function() { return /* binding */ pushStateToURL; },\n/* harmony export */   \"replaceState\": function() { return /* binding */ replaceState; }\n/* harmony export */ });\nfunction pushStateToURL(state, title = null, url = null) {\n  history.pushState(state, title, url);\n}\n\nfunction replaceState(state, title = null, url = null) {\n  history.replaceState(state, title, url);\n}\n\n\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/replaceHistory.js?");

/***/ }),

/***/ "./_assets/js/utils/searchParamUtils.js":
/*!**********************************************!*\
  !*** ./_assets/js/utils/searchParamUtils.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSearchParam\": function() { return /* binding */ getSearchParam; },\n/* harmony export */   \"setSearchParam\": function() { return /* binding */ setSearchParam; }\n/* harmony export */ });\n// Get the current offset value:\nfunction getSearchParam(param, paramString = null) {\n  const searchParams = new URLSearchParams(window.location.search || paramString);\n  const query = searchParams.get(param);\n\n  if (query !== null) {\n    return query;\n  } else {\n    return '';\n  }\n} // Get the url params offset value and convert it to a string. This is used to set the href link for each pagination button.\n\n\nfunction setSearchParam(param, value, paramString = null) {\n  const searchParams = new URLSearchParams(window.location.search || paramString);\n  searchParams.set(param, value);\n  return searchParams.toString();\n} // Export our public methods:\n\n\n\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/searchParamUtils.js?");

/***/ }),

/***/ "./_assets/js/utils/taSelectors/dropDownKeyListener.js":
/*!*************************************************************!*\
  !*** ./_assets/js/utils/taSelectors/dropDownKeyListener.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ dropDownKeyListener; }\n/* harmony export */ });\n/* harmony import */ var _moveFocus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moveFocus */ \"./_assets/js/utils/moveFocus.js\");\n/* harmony import */ var _findFocus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../findFocus */ \"./_assets/js/utils/findFocus.js\");\n/* harmony import */ var _expandTarget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandTarget */ \"./_assets/js/utils/taSelectors/expandTarget.js\");\n/* harmony import */ var _updateDomAndURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateDomAndURL */ \"./_assets/js/utils/taSelectors/updateDomAndURL.js\");\n\n\n\n\nfunction dropDownKeyListener(whichKey, state, listContainer, optionsArray, dropdownButton) {\n  const currentFocus = (0,_findFocus__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  switch (whichKey) {\n    case 'Enter':\n      // If on li element, check box. If box checked, uncheck box\n      if (!listContainer.hasAttribute('hidden') && currentFocus.tagName === 'INPUT') {\n        if (currentFocus.dataset.checked === 'true') {\n          currentFocus.dataset.checked = false;\n          currentFocus.checked = false;\n          let index = state.indexOf(currentFocus.value);\n          state.splice(index, 1); // Find and remove badge:\n\n          document.getElementById(`${currentFocus.value}-badge`).remove();\n        } else if (currentFocus.dataset.checked === 'false') {\n          currentFocus.dataset.checked = true;\n          state.push(currentFocus.value);\n          currentFocus.checked = true;\n        }\n\n        (0,_updateDomAndURL__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state);\n      }\n\n      break;\n\n    case 'Escape':\n      // If open and foucs on LI element, close, otherwise do nothing\n      if (!listContainer.hasAttribute('hidden') && (currentFocus.tagName === 'INPUT' || currentFocus.id === 'category-expand')) {\n        (0,_expandTarget__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(listContainer.id);\n      }\n\n      break;\n\n    case 'ArrowDown':\n      // if dropdow is open, and focus is on li element, then move forward\n      (0,_moveFocus__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentFocus, 'forward', optionsArray, dropdownButton);\n      break;\n\n    case 'ArrowUp':\n      // If dropdow is open and focus is on li element then move back\n      (0,_moveFocus__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentFocus, 'back', optionsArray, dropdownButton);\n      break;\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/taSelectors/dropDownKeyListener.js?");

/***/ }),

/***/ "./_assets/js/utils/taSelectors/expandTarget.js":
/*!******************************************************!*\
  !*** ./_assets/js/utils/taSelectors/expandTarget.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ expandTarget; }\n/* harmony export */ });\nfunction expandTarget(targetID) {\n  const target = document.getElementById(targetID);\n\n  if (target) {\n    if (target.hasAttribute('hidden')) {\n      target.removeAttribute('hidden'); // Toggle the drop down button icons:\n\n      document.getElementById(\"expand-more\").style.display = 'none';\n      document.getElementById('expand-less').style.display = 'block'; // Set the proper aria expanded attribute:\n\n      document.getElementById('category-expand').setAttribute('aria-expanded', 'true');\n    } else {\n      target.setAttribute('hidden', \"\"); // Toggle the drop down button icons:\n\n      document.getElementById(\"expand-more\").style.display = 'block';\n      document.getElementById('expand-less').style.display = 'none'; // Set the proper aria expanded attribute:\n\n      document.getElementById('category-expand').setAttribute('aria-expanded', 'false');\n    }\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/taSelectors/expandTarget.js?");

/***/ }),

/***/ "./_assets/js/utils/taSelectors/toggleVisibility.js":
/*!**********************************************************!*\
  !*** ./_assets/js/utils/taSelectors/toggleVisibility.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ toggleVisibility; }\n/* harmony export */ });\nfunction toggleVisibility(state) {\n  const elements = Array.from(document.querySelectorAll('li.visibilityTarget'));\n  const visibleElements = [];\n  elements.forEach(element => {\n    if (state.length === 0 && !visibleElements.includes(element)) {\n      element.style.display = 'block';\n      visibleElements.push(element);\n    } else {\n      element.style.display = 'none';\n      const classes = Array.from(element.classList);\n      classes.forEach(item => {\n        if (state.includes(item) && !visibleElements.includes(element)) {\n          element.style.display = 'block';\n          visibleElements.push(element);\n        }\n      });\n    }\n  });\n  return visibleElements.length;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/taSelectors/toggleVisibility.js?");

/***/ }),

/***/ "./_assets/js/utils/taSelectors/updateDomAndURL.js":
/*!*********************************************************!*\
  !*** ./_assets/js/utils/taSelectors/updateDomAndURL.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ updateDOMandURL; }\n/* harmony export */ });\n/* harmony import */ var _replaceHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../replaceHistory */ \"./_assets/js/utils/replaceHistory.js\");\n/* harmony import */ var _templates_badges_renderBadges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../templates/badges/renderBadges */ \"./_assets/js/templates/badges/renderBadges.js\");\n/* harmony import */ var _toggleVisibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleVisibility */ \"./_assets/js/utils/taSelectors/toggleVisibility.js\");\n/* harmony import */ var _templates_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../templates/search/totalResultsTemplate */ \"./_assets/js/templates/search/totalResultsTemplate.js\");\n/* harmony import */ var _getSetlocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../getSetlocalStorage */ \"./_assets/js/utils/getSetlocalStorage.js\");\n\n\n\n\n // Update badges and update the url:\n\nfunction updateDOMandURL(state) {\n  // Set state in the browser history - which will cover us for users without Local Storage in place\n  (0,_replaceHistory__WEBPACK_IMPORTED_MODULE_0__.replaceState)(state, 'updatedState', `/resources/?filters=${state.join(';')}`); // Set state in local storage\n\n  (0,_getSetlocalStorage__WEBPACK_IMPORTED_MODULE_4__.setStorage)('filters', state.join(';'));\n  (0,_templates_badges_renderBadges__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state);\n  document.getElementById('resultsListTarget').innerHTML = (0,_templates_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_toggleVisibility__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state), 'item');\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/taSelectors/updateDomAndURL.js?");

/***/ }),

/***/ "./_assets/js/utils/taSelectors/updateTASelectors.js":
/*!***********************************************************!*\
  !*** ./_assets/js/utils/taSelectors/updateTASelectors.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ toggleSelectorState; }\n/* harmony export */ });\nfunction toggleSelectorState(selector) {\n  let id = selector.id.replace('-badge', '');\n  const element = document.getElementById(id); // Update the check box state\n\n  if (element.dataset.checked === 'true') {\n    element.checked = false;\n    element.dataset.checked = false;\n    return;\n  }\n\n  element.checked = true;\n  element.dataset.checked = true;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/taSelectors/updateTASelectors.js?");

/***/ }),

/***/ "./_assets/js/utils/userClickedAnchorLink.js":
/*!***************************************************!*\
  !*** ./_assets/js/utils/userClickedAnchorLink.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ userClickedAnchorLink; }\n/* harmony export */ });\n/* harmony import */ var _searchParamUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchParamUtils */ \"./_assets/js/utils/searchParamUtils.js\");\n/* harmony import */ var _getSetlocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSetlocalStorage */ \"./_assets/js/utils/getSetlocalStorage.js\");\n\n\nfunction userClickedAnchorLink(param) {\n  return (0,_getSetlocalStorage__WEBPACK_IMPORTED_MODULE_1__.accessStorage)('filters') !== null && (0,_searchParamUtils__WEBPACK_IMPORTED_MODULE_0__.getSearchParam)('filters') === '' ? true : false;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/userClickedAnchorLink.js?");

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
=======
!function(){"use strict";const e=["artificial-intelligence","service-animals","title-ii","title-iii","web-access","employment"];function t(e){const t=document.getElementById(e);t&&(t.hasAttribute("hidden")?(t.removeAttribute("hidden"),document.getElementById("expand-more").style.display="none",document.getElementById("expand-less").style.display="block",document.getElementById("category-expand").setAttribute("aria-expanded","true")):(t.setAttribute("hidden",""),document.getElementById("expand-more").style.display="block",document.getElementById("expand-less").style.display="none",document.getElementById("category-expand").setAttribute("aria-expanded","false")))}function n(e,t=null,n=null){history.replaceState(e,t,n)}function a(e){const t=Array.from(document.querySelectorAll("li.visibilityTarget")),n=[];return t.forEach((t=>{0!==e.length||n.includes(t)?(t.style.display="none",Array.from(t.classList).forEach((a=>{e.includes(a)&&!n.includes(t)&&(t.style.display="block",n.push(t))}))):(t.style.display="block",n.push(t))})),n.length}function s(e=0,t="results"){const n=`<div markdown="0" role="status"><p class="total-results margin-y-0">${e} ${t}s found</p></div>`,a=`<div markdown="0" role="status"><p class="total-results margin-y-0">${e} ${t} found</p></div>`,s=`<div markdown="0" role="status"><p class="total-results margin-y-0">No ${t}s found</p></div>`;return null===t&&(t="results"),e>1?n:1===e?a:e<1||null===e?s:void 0}function c(e){let t;try{t=window[e];const n="__storage_test__";return t.setItem(n,n),t.removeItem(n),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}function o(e,t){c("localStorage")&&localStorage.setItem(e,t)}function r(e){return c("localStorage")?localStorage.getItem(e):""}function d(e,t){const c=document.querySelector("#selector-badges ul");document.getElementById(e.id)||(c.appendChild(e),document.querySelector(`#${e.id} button`)&&document.querySelector(`#${e.id} button`).addEventListener("click",(function(){document.getElementById(e.id).remove();const c=e.id.replace("-badge",""),r=t.indexOf(c);t.splice(r,1),n(t,"updatedState",`/resources/?filters=${t.join(";")}`),o("filters",t.join(";")),function(e){let t=e.id.replace("-badge","");const n=document.getElementById(t);if("true"===n.dataset.checked)return n.checked=!1,void(n.dataset.checked=!1);n.checked=!0,n.dataset.checked=!0}(e),document.getElementById("resultsListTarget").innerHTML=s(a(t),"item")})))}function l(e){const t=e.split("-").join(" ");return`\n    <span class="usa-button text-normal button-wrapper">\n     ${t[0].toUpperCase()+t.substring(1)}\n    <button class="usa-button usa-button--unstyled text-no-underline"\n    >\n    <span class="margin-left-05 flex-align-center"><svg fill='#162e51' aria-hidden="true" role="img">\n    <use xlink:href="/assets/img/sprite.svg#close"></use>\n        </svg></span>\n    <span class="usa-sr-only">Press enter to remove ${t} filter.</span>\n    </button>\n    </span>\n    `}function i(e){n(e,"updatedState",`/resources/?filters=${e.join(";")}`),o("filters",e.join(";")),function(e){for(const t in e){let n=document.createElement("li");n.classList.add("usa-button-group__item","categoryTag"),n.setAttribute("id",`${e[t]}-badge`),"title-ii"===e[t]?n.innerHTML=l("State and local government"):"title-iii"===e[t]?n.innerHTML=l("Businesses"):n.innerHTML=l(e[t]),d(n,e)}}(e),document.getElementById("resultsListTarget").innerHTML=s(a(e),"item")}function u(){return document.activeElement}function m(e,t,n,a){switch(e){case a:"forward"===t?n[0].focus():"back"===t&&n[n.length-1].focus();break;case n[0]:"forward"===t?n[1].focus():"back"===t&&a.focus();break;case n[n.length-1]:"forward"===t?n[0].focus():"back"===t&&n[n.length-2].focus();break;default:const e=u(),s=n.indexOf(e);"forward"===t?n[s+1].focus():"back"===t&&s>0?n[s-1].focus():a.focus()}}function g(e,t=null){const n=new URLSearchParams(window.location.search||t).get(e);return null!==n?n:""}const f=document.getElementsByClassName("usa-checkbox__input"),p=document.getElementsByClassName("crt-dropdown")[0],y=document.getElementById("category-expand"),h=Array.from(document.querySelectorAll(".checkbox-option")),b=document.getElementById("category-list-container"),k="filters";let E=[];p.addEventListener("keyup",(e=>{!function(e,n,a,s,c){const o=u();switch(e){case"Enter":if(!a.hasAttribute("hidden")&&"INPUT"===o.tagName){if("true"===o.dataset.checked){o.dataset.checked=!1,o.checked=!1;let e=n.indexOf(o.value);n.splice(e,1),document.getElementById(`${o.value}-badge`).remove()}else"false"===o.dataset.checked&&(o.dataset.checked=!0,n.push(o.value),o.checked=!0);i(n)}break;case"Escape":a.hasAttribute("hidden")||"INPUT"!==o.tagName&&"category-expand"!==o.id||t(a.id);break;case"ArrowDown":m(o,"forward",s,c);break;case"ArrowUp":m(o,"back",s,c)}}(e.key,E,b,h,y)})),Array.from(f).forEach((e=>{e.addEventListener("change",(e=>{if("true"===e.target.dataset.checked){e.target.dataset.checked=!1;const t=E.indexOf(e.target.value);E.splice(t,1),document.getElementById(`${e.target.value}-badge`).remove()}else"false"===e.target.dataset.checked&&(e.target.dataset.checked=!0,E.push(e.target.value));i(E)}))})),y.addEventListener("click",(()=>{t(b.id)})),window.onload=function(){E=null!==r("filters")&&""===g("filters")?r(k).split(";"):g(k).split(";");const n=E.filter((t=>{if(e.includes(t))return t}));E=n;for(let t in E)e.includes(E[t])&&(document.getElementById(E[t]).checked=!0,document.getElementById(E[t]).dataset.checked=!0);document.addEventListener("click",(e=>{!p.contains(e.target)&&!b.hasAttribute("hidden")&&t(b.id)})),i(E)}}();

>>>>>>> fe29f96f78c9098d86666d4678e5b3ea9fc8aafd
