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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/constants */ \"./_assets/js/utils/constants.js\");\n/* harmony import */ var _utils_taSelectors_expandTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/taSelectors/expandTarget */ \"./_assets/js/utils/taSelectors/expandTarget.js\");\n/* harmony import */ var _utils_taSelectors_updateDomAndURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/taSelectors/updateDomAndURL */ \"./_assets/js/utils/taSelectors/updateDomAndURL.js\");\n/* harmony import */ var _utils_taSelectors_dropDownKeyListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/taSelectors/dropDownKeyListener */ \"./_assets/js/utils/taSelectors/dropDownKeyListener.js\");\n/* harmony import */ var _utils_searchParamUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/searchParamUtils */ \"./_assets/js/utils/searchParamUtils.js\");\n\n\n\n\n // Get our checkboxes:\n\nconst checkboxes = document.getElementsByClassName('usa-checkbox__input'); // Get our dropdown:\n\nconst dropdownContainer = document.getElementsByClassName('crt-dropdown')[0]; // Get our dropdown button:\n\nconst dropdownButton = document.getElementById('category-expand'); // Get our dropdown options:\n\nconst optionsArray = Array.from(document.querySelectorAll('.checkbox-option')); // Get our category container:\n\nconst listContainer = document.getElementById('category-list-container'); // Initialize state:\n\nlet selectorState = []; // Replicate keyboard functionality from select elements:\n\ndropdownContainer.addEventListener('keyup', e => {\n  (0,_utils_taSelectors_dropDownKeyListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e.key, selectorState, listContainer, optionsArray, dropdownButton);\n}); // Add event listener to checkboxes to update state:\n\nArray.from(checkboxes).forEach(checkbox => {\n  checkbox.addEventListener('change', event => {\n    // Update the check box state\n    if (event.target.dataset.checked === 'true') {\n      event.target.dataset.checked = false;\n      const index = selectorState.indexOf(event.target.value);\n      selectorState.splice(index, 1); // Find and remove badge:\n\n      document.getElementById(`${event.target.value}-badge`).remove();\n    } else if (event.target.dataset.checked === 'false') {\n      event.target.dataset.checked = true;\n      selectorState.push(event.target.value);\n    }\n\n    (0,_utils_taSelectors_updateDomAndURL__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(selectorState);\n  });\n});\ndropdownButton.addEventListener('click', () => {\n  (0,_utils_taSelectors_expandTarget__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(listContainer.id);\n});\n\nwindow.onload = function () {\n  selectorState = (0,_utils_searchParamUtils__WEBPACK_IMPORTED_MODULE_4__.getSearchParam)('filters').split(';'); // If selector state is empty string, set to empty array\n\n  if (selectorState[0] === '') {\n    selectorState = [];\n  } // Remove items not allowed in the tags list:\n\n\n  const tempState = selectorState.filter(item => {\n    if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__.TAGS.includes(item)) {\n      return item;\n    }\n  });\n  selectorState = tempState; // Set checkboxes on load:\n\n  for (let item in selectorState) {\n    if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__.TAGS.includes(selectorState[item])) {\n      document.getElementById(selectorState[item]).checked = true;\n      document.getElementById(selectorState[item]).dataset.checked = true;\n    }\n  }\n\n  ; // Close the dropdown if user clicks outside of it:\n\n  document.addEventListener('click', e => {\n    const didClickedOutside = !dropdownContainer.contains(e.target);\n\n    if (didClickedOutside && !listContainer.hasAttribute('hidden')) {\n      (0,_utils_taSelectors_expandTarget__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(listContainer.id);\n    }\n  });\n  (0,_utils_taSelectors_updateDomAndURL__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(selectorState);\n};\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/ta-selectors.js?");

/***/ }),

/***/ "./_assets/js/templates/badges/attachBadge.js":
/*!****************************************************!*\
  !*** ./_assets/js/templates/badges/attachBadge.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ attachBadge; }\n/* harmony export */ });\n/* harmony import */ var _utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/replaceHistory */ \"./_assets/js/utils/replaceHistory.js\");\n/* harmony import */ var _utils_taSelectors_updateTASelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/taSelectors/updateTASelectors */ \"./_assets/js/utils/taSelectors/updateTASelectors.js\");\n/* harmony import */ var _utils_taSelectors_toggleVisibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/taSelectors/toggleVisibility */ \"./_assets/js/utils/taSelectors/toggleVisibility.js\");\n/* harmony import */ var _search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/totalResultsTemplate */ \"./_assets/js/templates/search/totalResultsTemplate.js\");\n\n\n\n\nfunction attachBadge(element, state) {\n  // Get our unordered list to put badges in:\n  const badgeList = document.querySelector('#selector-badges ul');\n\n  if (!document.getElementById(element.id)) {\n    badgeList.appendChild(element);\n\n    if (document.querySelector(`#${element.id} button`)) {\n      document.querySelector(`#${element.id} button`).addEventListener('click', function () {\n        document.getElementById(element.id).remove();\n        const value = element.id.replace('-badge', '');\n        const index = state.indexOf(value);\n        state.splice(index, 1);\n        (0,_utils_replaceHistory__WEBPACK_IMPORTED_MODULE_0__.replaceState)(state, 'updatedState', `/resources/?filters=${state.join(';')}`);\n        (0,_utils_taSelectors_updateTASelectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, state);\n        document.getElementById('resultsListTarget').innerHTML = (0,_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_utils_taSelectors_toggleVisibility__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state), 'item');\n      });\n    }\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/badges/attachBadge.js?");

/***/ }),

/***/ "./_assets/js/templates/badges/badgeTemplate.js":
/*!******************************************************!*\
  !*** ./_assets/js/templates/badges/badgeTemplate.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ badge; }\n/* harmony export */ });\nfunction badge(title) {\n  const normalizedTitle = title.split('-').join(\" \");\n  return `\n    <span class=\"usa-button text-normal button-wrapper\">\n     ${normalizedTitle[0].toUpperCase() + normalizedTitle.substring(1)}\n    <button class=\"usa-button usa-button--unstyled text-no-underline\"\n    >\n    <span class=\"margin-left-05 flex-align-center\"><svg fill='#162e51' aria-hidden=\"true\" role=\"img\">\n    <use xlink:href=\"/assets/img/sprite.svg#close\"></use>\n        </svg></span>\n    <span class=\"usa-sr-only\">Press enter to remove ${normalizedTitle} filter.</span>\n    </button>\n    </span>\n    `;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/badges/badgeTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/badges/renderBadges.js":
/*!*****************************************************!*\
  !*** ./_assets/js/templates/badges/renderBadges.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ renderBages; }\n/* harmony export */ });\n/* harmony import */ var _attachBadge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attachBadge */ \"./_assets/js/templates/badges/attachBadge.js\");\n/* harmony import */ var _badgeTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badgeTemplate */ \"./_assets/js/templates/badges/badgeTemplate.js\");\n\n\nfunction renderBages(state) {\n  for (const item in state) {\n    let tagBadge = document.createElement('li');\n    tagBadge.classList.add('usa-button-group__item', 'categoryTag');\n    tagBadge.setAttribute('id', `${state[item]}-badge`);\n\n    if (state[item] === 'title-ii') {\n      tagBadge.innerHTML = (0,_badgeTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('State and local government');\n    } else if (state[item] === 'title-iii') {\n      tagBadge.innerHTML = (0,_badgeTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Businesses');\n    } else {\n      tagBadge.innerHTML = (0,_badgeTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state[item]);\n    }\n\n    (0,_attachBadge__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tagBadge, state);\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/badges/renderBadges.js?");

/***/ }),

/***/ "./_assets/js/templates/search/totalResultsTemplate.js":
/*!*************************************************************!*\
  !*** ./_assets/js/templates/search/totalResultsTemplate.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ totalResults; }\n/* harmony export */ });\nfunction totalResults(resultsTotal = 0, type = \"results\") {\n  const moreThanOne = `<div markdown=\"0\" role=\"status\"><p class=\"total-results margin-y-0\">${resultsTotal} ${type}s found</p></div>`;\n  const equalToOne = `<div markdown=\"0\" role=\"status\"><p class=\"total-results margin-y-0\">${resultsTotal} ${type} found</p></div>`;\n  const lessThanOne = `<div markdown=\"0\" role=\"status\"><p class=\"total-results margin-y-0\">No ${type}s found</p></div>`;\n\n  if (type === null) {\n    type = 'results';\n  }\n\n  if (resultsTotal > 1) {\n    return moreThanOne;\n  }\n\n  if (resultsTotal === 1) {\n    return equalToOne;\n  }\n\n  if (resultsTotal < 1) {\n    return lessThanOne;\n  }\n\n  if (resultsTotal === null) {\n    return lessThanOne;\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/search/totalResultsTemplate.js?");

/***/ }),

/***/ "./_assets/js/utils/constants.js":
/*!***************************************!*\
  !*** ./_assets/js/utils/constants.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NUMBER_OF_RESULTS\": function() { return /* binding */ NUMBER_OF_RESULTS; },\n/* harmony export */   \"SEARCH_ENDPOINT\": function() { return /* binding */ SEARCH_ENDPOINT; },\n/* harmony export */   \"ACCESS_KEY\": function() { return /* binding */ ACCESS_KEY; },\n/* harmony export */   \"AFFILIATE\": function() { return /* binding */ AFFILIATE; },\n/* harmony export */   \"TAGS\": function() { return /* binding */ TAGS; }\n/* harmony export */ });\n// Pagination Constants:\nconst NUMBER_OF_RESULTS = 20;\nconst SEARCH_ENDPOINT = 'https://search.usa.gov/api/v2/search/i14y';\nconst ACCESS_KEY = 'R9JA5YunOBaTGydUNm-oJjGCqKQ-zXsulsNskJVe5-c=';\nconst AFFILIATE = 'justice-ada-beta';\nconst TAGS = ['artificial-intelligence', 'service-animals', 'title-ii', 'title-iii', 'web-access', 'intro', 'child-care', 'curb-ramps', 'education', 'effective-communication', 'eligibility-criteria', 'emergency-management', 'employment', 'healthcare', 'parking', 'mobility-devices'];\n\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/constants.js?");

/***/ }),

/***/ "./_assets/js/utils/findFocus.js":
/*!***************************************!*\
  !*** ./_assets/js/utils/findFocus.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ findFocus; }\n/* harmony export */ });\nfunction findFocus() {\n  const focusPoint = document.activeElement;\n  return focusPoint;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/findFocus.js?");

/***/ }),

/***/ "./_assets/js/utils/moveFocus.js":
/*!***************************************!*\
  !*** ./_assets/js/utils/moveFocus.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ moveFocus; }\n/* harmony export */ });\n/* harmony import */ var _findFocus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findFocus */ \"./_assets/js/utils/findFocus.js\");\n\nfunction moveFocus(fromHere, toThere, optionsArray, dropDownContainer) {\n  // fromHere is the element you are currently on\n  // toThere is decided by the arrow key pressed\n  // optionsArray is the list of options within the dropDownContainer\n  // dropDownContainer is the top level of the category selector element\n  switch (fromHere) {\n    case dropDownContainer:\n      // If the current element is the drop down container and the down key is pressed, focus the first option within that dropdown:\n      if (toThere === 'forward') {\n        optionsArray[0].focus(); // If the current element is the dropdown container and the up arrow is pressed, loop back to the last item in the options list:\n      } else if (toThere === 'back') {\n        optionsArray[optionsArray.length - 1].focus();\n      }\n\n      break;\n\n    case optionsArray[0]:\n      // If the first item in the dropdown list is focused, and the down key is pressed, then focus the next item in the list\n      if (toThere === 'forward') {\n        optionsArray[1].focus(); // If you press the up arrow key then go back to the dropdown container\n      } else if (toThere === 'back') {\n        dropDownContainer.focus();\n      }\n\n      break;\n    // If the last item in the options list is the item in focus\n\n    case optionsArray[optionsArray.length - 1]:\n      // and the down arrow key is pressed, focus the first option in the list:\n      if (toThere === 'forward') {\n        optionsArray[0].focus(); // if the up arrow key is pressed, then move back to the second to last item:\n      } else if (toThere === 'back') {\n        optionsArray[optionsArray.length - 2].focus();\n      }\n\n      break;\n\n    default:\n      // middle list or filtered items \n      const currentItem = (0,_findFocus__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      const whichOne = optionsArray.indexOf(currentItem); // if the down arrow key is pressed\n\n      if (toThere === 'forward') {\n        // get the next item in the options array\n        const nextOne = optionsArray[whichOne + 1]; // put it into focus:\n\n        nextOne.focus(); // if the up arrow key is pressed:\n      } else if (toThere === 'back' && whichOne > 0) {\n        // get the previous item in the options list\n        const previousOne = optionsArray[whichOne - 1]; // focus it\n\n        previousOne.focus();\n      } else {\n        // if whichOne = 0\n        dropDownContainer.focus();\n      }\n\n      break;\n  }\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/moveFocus.js?");

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

/***/ "./_assets/js/utils/taSelectors/dropDownKeyListener.js":
/*!*************************************************************!*\
  !*** ./_assets/js/utils/taSelectors/dropDownKeyListener.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ dropDownKeyListener; }\n/* harmony export */ });\n/* harmony import */ var _moveFocus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moveFocus */ \"./_assets/js/utils/moveFocus.js\");\n/* harmony import */ var _findFocus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../findFocus */ \"./_assets/js/utils/findFocus.js\");\n/* harmony import */ var _expandTarget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandTarget */ \"./_assets/js/utils/taSelectors/expandTarget.js\");\n/* harmony import */ var _updateDomAndURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateDomAndURL */ \"./_assets/js/utils/taSelectors/updateDomAndURL.js\");\n\n\n\n\nfunction dropDownKeyListener(whichKey, state, listContainer, optionsArray, dropdownButton) {\n  const currentFocus = (0,_findFocus__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  switch (whichKey) {\n    case 'Enter':\n      // If on li element, check box. If box checked, uncheck box\n      if (!listContainer.hasAttribute('hidden') && currentFocus.tagName === 'INPUT') {\n        if (currentFocus.dataset.checked === 'true') {\n          currentFocus.dataset.checked = false;\n          currentFocus.checked = false;\n          let index = state.indexOf(currentFocus.value);\n          state.splice(index, 1); // Find and remove badge:\n\n          document.getElementById(`${currentFocus.value}-badge`).remove();\n        } else if (currentFocus.dataset.checked === 'false') {\n          currentFocus.dataset.checked = true;\n          state.push(currentFocus.value);\n          currentFocus.checked = true;\n        }\n\n        (0,_updateDomAndURL__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state);\n      }\n\n      break;\n\n    case 'Escape':\n      // If open and foucs on LI element, close, otherwise do nothing\n      if (!listContainer.hasAttribute('hidden') && (currentFocus.tagName === 'INPUT' || currentFocus.id === 'category-expand')) {\n        (0,_expandTarget__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(listContainer.id);\n      }\n\n      break;\n\n    case 'ArrowDown':\n      // if dropdow is open, and focus is on li element, then move forward\n      (0,_moveFocus__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentFocus, 'forward', optionsArray, dropdownButton);\n      break;\n\n    case 'ArrowUp':\n      // If dropdow is open and focus is on li element then move back\n      (0,_moveFocus__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentFocus, 'back', optionsArray, dropdownButton);\n      break;\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/taSelectors/dropDownKeyListener.js?");

/***/ }),

/***/ "./_assets/js/utils/taSelectors/expandTarget.js":
/*!******************************************************!*\
  !*** ./_assets/js/utils/taSelectors/expandTarget.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ expandTarget; }\n/* harmony export */ });\nfunction expandTarget(targetID) {\n  const target = document.getElementById(targetID);\n\n  if (target) {\n    if (target.hasAttribute('hidden')) {\n      target.removeAttribute('hidden'); // Toggle the drop down button icons:\n\n      document.getElementById(\"expand-more\").style.display = 'none';\n      document.getElementById('expand-less').style.display = 'block'; // Set the proper aria expanded attribute:\n\n      document.getElementById('category-expand').setAttribute('aria-expanded', 'true');\n    } else {\n      target.setAttribute('hidden', \"\"); // Toggle the drop down button icons:\n\n      document.getElementById(\"expand-more\").style.display = 'block';\n      document.getElementById('expand-less').style.display = 'none'; // Set the proper aria expanded attribute:\n\n      document.getElementById('category-expand').setAttribute('aria-expanded', 'false');\n    }\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/taSelectors/expandTarget.js?");

/***/ }),

/***/ "./_assets/js/utils/taSelectors/toggleVisibility.js":
/*!**********************************************************!*\
  !*** ./_assets/js/utils/taSelectors/toggleVisibility.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ toggleVisibility; }\n/* harmony export */ });\nfunction toggleVisibility(state) {\n  const elements = Array.from(document.querySelectorAll('li.visibilityTarget'));\n  const visibleElements = [];\n  elements.forEach(element => {\n    if (state.length === 0 && !visibleElements.includes(element)) {\n      element.style.display = 'block';\n      visibleElements.push(element);\n    } else {\n      element.style.display = 'none';\n      const classes = Array.from(element.classList);\n      classes.forEach(item => {\n        if (state.includes(item) && !visibleElements.includes(element)) {\n          element.style.display = 'block';\n          visibleElements.push(element);\n        }\n      });\n    }\n  });\n  return visibleElements.length;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/taSelectors/toggleVisibility.js?");

/***/ }),

/***/ "./_assets/js/utils/taSelectors/updateDomAndURL.js":
/*!*********************************************************!*\
  !*** ./_assets/js/utils/taSelectors/updateDomAndURL.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ updateDOMandURL; }\n/* harmony export */ });\n/* harmony import */ var _replaceHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../replaceHistory */ \"./_assets/js/utils/replaceHistory.js\");\n/* harmony import */ var _templates_badges_renderBadges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../templates/badges/renderBadges */ \"./_assets/js/templates/badges/renderBadges.js\");\n/* harmony import */ var _toggleVisibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleVisibility */ \"./_assets/js/utils/taSelectors/toggleVisibility.js\");\n/* harmony import */ var _templates_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../templates/search/totalResultsTemplate */ \"./_assets/js/templates/search/totalResultsTemplate.js\");\n\n\n\n // Update badges and update the url:\n\nfunction updateDOMandURL(state) {\n  // Clean up state:\n  (0,_replaceHistory__WEBPACK_IMPORTED_MODULE_0__.replaceState)(state, 'updatedState', `/resources/?filters=${state.join(';')}`);\n  (0,_templates_badges_renderBadges__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state);\n  document.getElementById('resultsListTarget').innerHTML = (0,_templates_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_toggleVisibility__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state), 'item');\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/taSelectors/updateDomAndURL.js?");

/***/ }),

/***/ "./_assets/js/utils/taSelectors/updateTASelectors.js":
/*!***********************************************************!*\
  !*** ./_assets/js/utils/taSelectors/updateTASelectors.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ toggleSelectorState; }\n/* harmony export */ });\nfunction toggleSelectorState(selector) {\n  let id = selector.id.replace('-badge', '');\n  const element = document.getElementById(id); // Update the check box state\n\n  if (element.dataset.checked === 'true') {\n    element.checked = false;\n    element.dataset.checked = false;\n    return;\n  }\n\n  element.checked = true;\n  element.dataset.checked = true;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/taSelectors/updateTASelectors.js?");

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