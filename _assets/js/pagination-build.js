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

/***/ "./_assets/js/pagination.js":
/*!**********************************!*\
  !*** ./_assets/js/pagination.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_renderSearchResults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/renderSearchResults */ \"./_assets/js/utils/renderSearchResults.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants */ \"./_assets/js/utils/constants.js\");\n/* harmony import */ var _utils_renderSearchPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/renderSearchPage */ \"./_assets/js/utils/renderSearchPage.js\");\n\n\n // Set up the search parameters:\n\nvar urlParams = new URLSearchParams(window.location.search);\nvar searchEndpoint = new URL(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.SEARCH_ENDPOINT);\nvar searchParams = {\n  affiliate: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.AFFILIATE,\n  access_key: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.ACCESS_KEY,\n  query: urlParams.get('query'),\n  offset: urlParams.get('offset') || 0,\n  limit: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.NUMBER_OF_RESULTS\n};\nObject.keys(searchParams).forEach(function (key) {\n  searchEndpoint.searchParams.append(key, searchParams[key]);\n}); // Get the results, convert them to JSON, then render them:\n// When the results are returned, check that the status is 200\n// then render the results:\n\nfunction reqLoaded() {\n  if (this.status === 200) {\n    var resJSON = JSON.parse(this.responseText);\n    (0,_utils_renderSearchPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(resJSON, urlParams, _utils_constants__WEBPACK_IMPORTED_MODULE_1__.NUMBER_OF_RESULTS);\n  } else {\n    (0,_utils_renderSearchResults__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"\".concat(noResults()), false);\n  }\n} // If timeout:\n\n\nfunction reqTimeout() {\n  (0,_utils_renderSearchResults__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"\".concat(noResults()), false);\n}\n\nvar req = new XMLHttpRequest();\nreq.addEventListener('load', reqLoaded);\nreq.open('GET', searchEndpoint);\nreq.timeout = 5000; //timeout after 5 seconds\n\nreq.addEventListener('timeout', reqTimeout);\nreq.send();\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/pagination.js?");

/***/ }),

/***/ "./_assets/js/templates/pagination/ellipsisTemplate.js":
/*!*************************************************************!*\
  !*** ./_assets/js/templates/pagination/ellipsisTemplate.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ellipsis; }\n/* harmony export */ });\nfunction ellipsis() {\n  return \"<li\\n    class=\\\"usa-pagination__item usa-pagination__overflow display-none tablet:display-block\\\"\\n    role=\\\"none\\\"\\n    tabindex='-1'\\n  >\\n    <span class=\\\"text-bold\\\"> \\u2026 </span>\\n  </li>\";\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/pagination/ellipsisTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/pagination/nextButtonTemplate.js":
/*!***************************************************************!*\
  !*** ./_assets/js/templates/pagination/nextButtonTemplate.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ nextButton; }\n/* harmony export */ });\nfunction nextButton() {\n  return \"<li class=\\\"usa-pagination__item usa-pagination__arrow display-flex\\\">\\n          <a\\n            href=\\\"javascript:void(0);\\\"\\n            class=\\\"usa-pagination__link usa-pagination__next-page\\\"\\n            aria-label=\\\"Next page\\\"\\n          >\\n            <span class=\\\"usa-pagination__link-text\\\"> Next Page </span>\\n\\n            <svg class=\\\"usa-icon\\\" aria-hidden=\\\"true\\\" role=\\\"img\\\">\\n              <use xlink:href=\\\"/assets/img/sprite.svg#navigate_next\\\"></use>\\n            </svg>\\n          </a>\\n          </li>\";\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/pagination/nextButtonTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/pagination/pageNumber.js":
/*!*******************************************************!*\
  !*** ./_assets/js/templates/pagination/pageNumber.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ pageNumber; }\n/* harmony export */ });\n/* harmony import */ var _utils_offsetUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/offsetUtils */ \"./_assets/js/utils/offsetUtils.js\");\n\nfunction pageNumber(resArray) {\n  var currentOffset = parseInt((0,_utils_offsetUtils__WEBPACK_IMPORTED_MODULE_0__.getOffsetParam)());\n  var currentPage;\n\n  if (resArray.indexOf(currentOffset) >= 0) {\n    currentPage = resArray.indexOf(currentOffset) + 1;\n  } else {\n    currentPage = resArray.indexOf(currentOffset) + 2;\n  }\n\n  var lastPage = resArray.length;\n  var templateContent = \"\".concat(currentPage, \" of \").concat(lastPage);\n  var para = document.createElement(\"p\");\n  var newContent = document.createTextNode(templateContent);\n  para.appendChild(newContent);\n  para.classList.add('margin-left-205');\n  var target = document.getElementById('pagination-nav');\n  target.append(para);\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/pagination/pageNumber.js?");

/***/ }),

/***/ "./_assets/js/templates/pagination/paginationButtonTemplate.js":
/*!*********************************************************************!*\
  !*** ./_assets/js/templates/pagination/paginationButtonTemplate.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ paginationButton; }\n/* harmony export */ });\n/* harmony import */ var _utils_offsetUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/offsetUtils */ \"./_assets/js/utils/offsetUtils.js\");\n//= require ../../utils/offsetUtils.js\n\nfunction paginationButton(offsetVal, index, resultsArr) {\n  var currentOffset = (0,_utils_offsetUtils__WEBPACK_IMPORTED_MODULE_0__.getOffsetParam)();\n  var ariaLabel = \"\";\n  var ariaCurrent = \"false\";\n\n  if (currentOffset !== offsetVal && offsetVal === resultsArr[resultsArr.length - 1]) {\n    ariaLabel = \"Last page; Page \" + (index + 1);\n  } else if (currentOffset !== offsetVal) {\n    ariaLabel = \"Page \" + (index + 1);\n  }\n\n  if (currentOffset === offsetVal) {\n    ariaCurrent = \"true\";\n  }\n\n  return \"<li class=\\\"usa-pagination__item usa-pagination__page-no display-none tablet:display-block\\\">\\n      <a\\n        href=\\\"?\".concat((0,_utils_offsetUtils__WEBPACK_IMPORTED_MODULE_0__.setOffsetParam)(offsetVal), \"\\\"\\n        class=\\\"usa-pagination__button bg-primary-darker\\\"\\n        aria-label=\\\"\").concat(ariaLabel, \"\\\"\\\"\\n        aria-current=\").concat(ariaCurrent, \"\\n        data-offset=\").concat(offsetVal, \"\\n      >\\n        \").concat(index + 1, \"\\n      </a>\\n    </li>\");\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/pagination/paginationButtonTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/pagination/paginationTemplate.js":
/*!***************************************************************!*\
  !*** ./_assets/js/templates/pagination/paginationTemplate.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ paginationTemplate; }\n/* harmony export */ });\n/* harmony import */ var _nextButtonTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nextButtonTemplate */ \"./_assets/js/templates/pagination/nextButtonTemplate.js\");\n/* harmony import */ var _previousButtonTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./previousButtonTemplate */ \"./_assets/js/templates/pagination/previousButtonTemplate.js\");\n/* harmony import */ var _ellipsisTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ellipsisTemplate */ \"./_assets/js/templates/pagination/ellipsisTemplate.js\");\n/* harmony import */ var _paginationButtonTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paginationButtonTemplate */ \"./_assets/js/templates/pagination/paginationButtonTemplate.js\");\n/* harmony import */ var _pageNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageNumber */ \"./_assets/js/templates/pagination/pageNumber.js\");\n/* harmony import */ var _utils_paginationLogic_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/paginationLogic/index */ \"./_assets/js/utils/paginationLogic/index.js\");\n// Imports:\n\n\n\n\n\n\nfunction paginationTemplate(resultsArr, urlParams) {\n  var offsetInt = parseInt(urlParams.get(\"offset\"));\n  (0,_pageNumber__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(resultsArr);\n\n  if (resultsArr.length <= 7) {\n    return \"\\n        \".concat((0,_previousButtonTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), \"\\n        \").concat(resultsArr.map(function (offsetValue, index, resArr) {\n      return (0,_paginationButtonTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(offsetValue, index, resArr);\n    }).join(\" \"), \"\\n        \").concat((0,_nextButtonTemplate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  }\n\n  return \"\\n        \".concat((0,_previousButtonTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), \"\\n        \").concat((0,_paginationButtonTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(resultsArr[0], 0, resultsArr), \"\\n        \").concat( // If we are on the first, second or third page of results hide the left ellipses\n  offsetInt === 0 || offsetInt === 20 || offsetInt === 40 ? \"\" : (0,_ellipsisTemplate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(offsetInt, resultsArr), \"\\n        \").concat(resultsArr.map(function (offsetValue, index, resArr) {\n    // If it is either the first page or last page, render nothing. The first and last page buttons are fixed.\n    if (index === 0 || index === resultsArr.indexOf(resultsArr[resultsArr.length - 1])) {// If you are on the first page, render the next three page buttons.\n    } else if ((0,_utils_paginationLogic_index__WEBPACK_IMPORTED_MODULE_5__.firstPage)(offsetValue, offsetInt)) {\n      return (0,_paginationButtonTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(offsetValue, index, resArr); // If you are on the second page, render the second page button, third page button and fourth page button:\n    } else if ((0,_utils_paginationLogic_index__WEBPACK_IMPORTED_MODULE_5__.secondPageEtc)(offsetValue, offsetInt)) {\n      return (0,_paginationButtonTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(offsetValue, index, resArr); // If you are on the second to last page, render that page button and the previous two page buttons.\n    } else if ((0,_utils_paginationLogic_index__WEBPACK_IMPORTED_MODULE_5__.secondToLastPage)(offsetValue, offsetInt, resultsArr)) {\n      return (0,_paginationButtonTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(offsetValue, index, resArr); // If you are on the last page, render the previous 3 page buttons.\n    } else if ((0,_utils_paginationLogic_index__WEBPACK_IMPORTED_MODULE_5__.lastPage)(offsetValue, offsetInt, resultsArr)) {\n      return (0,_paginationButtonTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(offsetValue, index, resArr); // If you are on any other page, render that page button, the previous page button and the next page button.\n    } else if ((0,_utils_paginationLogic_index__WEBPACK_IMPORTED_MODULE_5__.intermediatePages)(urlParams, offsetValue, offsetInt)) {\n      return (0,_paginationButtonTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(offsetValue, index, resArr);\n    }\n  }).join(\" \"), \"\\n        \").concat( // If we are on the third to last, second to last or last page of results, hide the right ellipsis.\n  offsetInt === resultsArr[resultsArr.length - 1] || offsetInt === resultsArr[resultsArr.length - 2] || offsetInt === resultsArr[resultsArr.length - 3] ? \"\" : (0,_ellipsisTemplate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), \"\\n        \").concat((0,_paginationButtonTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(resultsArr[resultsArr.length - 1], resultsArr.indexOf(resultsArr[resultsArr.length - 1]), resultsArr), \"\\n        \").concat((0,_nextButtonTemplate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/pagination/paginationTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/pagination/previousButtonTemplate.js":
/*!*******************************************************************!*\
  !*** ./_assets/js/templates/pagination/previousButtonTemplate.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ previousButton; }\n/* harmony export */ });\nfunction previousButton() {\n  return \"<li class=\\\"usa-pagination__item usa-pagination__arrow display-flex\\\">\\n    <a\\n      href=\\\"javascript:void(0);\\\"\\n      class=\\\"usa-pagination__link usa-pagination__previous-page\\\"\\n      aria-label=\\\"Previous page\\\"\\n    >\\n      <svg class=\\\"usa-icon\\\" aria-hidden=\\\"true\\\" role=\\\"img\\\">\\n        <use xlink:href=\\\"/assets/img/sprite.svg#navigate_before\\\"></use>\\n      </svg>\\n\\n      <span class=\\\"usa-pagination__link-text\\\">Previous Page</span>\\n    </a>\\n  </li>\";\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/pagination/previousButtonTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/search/noResultsTemplate.js":
/*!**********************************************************!*\
  !*** ./_assets/js/templates/search/noResultsTemplate.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ noResults; }\n/* harmony export */ });\nfunction noResults() {\n  return \"<li role=\\\"status\\\" class=\\\"h4\\\" style=\\\"list-style: none\\\">No results found</li>\";\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/search/noResultsTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/search/searchResultsTemplate.js":
/*!**************************************************************!*\
  !*** ./_assets/js/templates/search/searchResultsTemplate.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ searchResultsTemplate; }\n/* harmony export */ });\nfunction searchResultsTemplate(content) {\n  return \"\\n        <li class=\\\"padding-bottom-5 margin-top-4 usa-prose border-bottom-05 border-base-lightest\\\">\\n        <b class=\\\"title\\\"><a href=\\\"\".concat(content.url, \"\\\">\").concat(content.title.replace(/\\uE000/g, '<span class=\"bg-yellow\">').replace(/\\uE001/g, \"</span>\"), \"</a></b>\\n      <div class=\\\"text-base content-url\\\"> \").concat(content.url, \" </div>\\n      <div> \").concat(content.snippet.replace(/\\uE000/g, '<span class=\"bg-yellow\">').replace(/\\uE001/g, \"</span>\"), \" </div>\\n      </li>\\n\");\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/search/searchResultsTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/search/textBestBetsTemplate.js":
/*!*************************************************************!*\
  !*** ./_assets/js/templates/search/textBestBetsTemplate.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ textBestBetsTemplate; }\n/* harmony export */ });\nfunction textBestBetsTemplate(content) {\n  return \"\\n    <li class=\\\"padding-bottom-5 margin-top-4 usa-prose border-bottom-05 border-base-lightest\\\">\\n      <b class=\\\"title\\\"><a href=\\\"\".concat(content.url, \"\\\">\").concat(content.title.replace(/\\uE000/g, '<span class=\"bg-yellow\">').replace(/\\uE001/g, \"</span>\"), \"</a></b>\\n      <div class=\\\"text-base\\\"> \").concat(content.url, \" </div>\\n      <div> \").concat(content.description.replace(/\\uE000/g, '<span class=\"bg-yellow\">').replace(/\\uE001/g, \"</span>\"), \" </div>\\n    </li>\\n    \");\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/search/textBestBetsTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/search/totalResultsTemplate.js":
/*!*************************************************************!*\
  !*** ./_assets/js/templates/search/totalResultsTemplate.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ totalResults; }\n/* harmony export */ });\nfunction totalResults(resultsTotal) {\n  return \"<div role=\\\"status\\\" class=\\\"text-black\\\">\".concat(resultsTotal, \" results found</div>\");\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/search/totalResultsTemplate.js?");

/***/ }),

/***/ "./_assets/js/utils/applyFocusStyling.js":
/*!***********************************************!*\
  !*** ./_assets/js/utils/applyFocusStyling.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ applyFocusStyling; }\n/* harmony export */ });\n/* harmony import */ var _offsetUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offsetUtils */ \"./_assets/js/utils/offsetUtils.js\");\n // Apply focus styling for the active button:\n\nfunction applyFocusStyling() {\n  // offset value in this case will equal the data-offset\n  var allPaginationButtons = document.querySelectorAll(\"a.usa-pagination__button\");\n  var allButtonsArr = Array.prototype.slice.call(allPaginationButtons);\n  var currentOffset = (0,_offsetUtils__WEBPACK_IMPORTED_MODULE_0__.getOffsetParam)();\n  allButtonsArr.forEach(function (button) {\n    if (currentOffset === \"\" && button.dataset.offset === \"0\") {\n      button.classList.add(\"usa-current\");\n      button.setAttribute('aria-current', 'true');\n    }\n\n    if (button.dataset.offset === currentOffset) {\n      button.classList.add(\"usa-current\");\n      button.setAttribute('aria-current', 'true');\n    }\n  });\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/applyFocusStyling.js?");

/***/ }),

/***/ "./_assets/js/utils/constants.js":
/*!***************************************!*\
  !*** ./_assets/js/utils/constants.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NUMBER_OF_RESULTS\": function() { return /* binding */ NUMBER_OF_RESULTS; },\n/* harmony export */   \"SEARCH_ENDPOINT\": function() { return /* binding */ SEARCH_ENDPOINT; },\n/* harmony export */   \"ACCESS_KEY\": function() { return /* binding */ ACCESS_KEY; },\n/* harmony export */   \"AFFILIATE\": function() { return /* binding */ AFFILIATE; }\n/* harmony export */ });\n// Pagination Constants:\nvar NUMBER_OF_RESULTS = 20;\nvar SEARCH_ENDPOINT = 'https://search.usa.gov/api/v2/search/i14y';\nvar ACCESS_KEY = 'R9JA5YunOBaTGydUNm-oJjGCqKQ-zXsulsNskJVe5-c=';\nvar AFFILIATE = 'justice-ada-beta';\n\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/constants.js?");

/***/ }),

/***/ "./_assets/js/utils/createRange.js":
/*!*****************************************!*\
  !*** ./_assets/js/utils/createRange.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ createRange; }\n/* harmony export */ });\nfunction createRange(start, end, step) {\n  var range = [];\n  if (start === end) return range.push(start);\n\n  if (end % step === 0) {\n    end = end - step;\n  }\n\n  for (var i = start; i <= end; i += step) {\n    range.push(i);\n  }\n\n  return range;\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/createRange.js?");

/***/ }),

/***/ "./_assets/js/utils/offsetUtils.js":
/*!*****************************************!*\
  !*** ./_assets/js/utils/offsetUtils.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getOffsetParam\": function() { return /* binding */ getOffsetParam; },\n/* harmony export */   \"setOffsetParam\": function() { return /* binding */ setOffsetParam; }\n/* harmony export */ });\n// Get the current offset value:\nfunction getOffsetParam() {\n  var searchParams = new URLSearchParams(window.location.search);\n  var offset = searchParams.get('offset');\n\n  if (offset !== null) {\n    return offset;\n  } else {\n    return '';\n  }\n} // Get the url params offset value and convert it to a string. This is used to set the href link for each pagination button.\n\n\nfunction setOffsetParam(offsetValue) {\n  var searchParams = new URLSearchParams(window.location.search);\n  searchParams.set('offset', offsetValue);\n  return searchParams.toString();\n} // Export our public methods:\n\n\n\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/offsetUtils.js?");

/***/ }),

/***/ "./_assets/js/utils/paginationLogic/index.js":
/*!***************************************************!*\
  !*** ./_assets/js/utils/paginationLogic/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firstPage\": function() { return /* binding */ firstPage; },\n/* harmony export */   \"secondPageEtc\": function() { return /* binding */ secondPageEtc; },\n/* harmony export */   \"intermediatePages\": function() { return /* binding */ intermediatePages; },\n/* harmony export */   \"secondToLastPage\": function() { return /* binding */ secondToLastPage; },\n/* harmony export */   \"lastPage\": function() { return /* binding */ lastPage; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./_assets/js/utils/constants.js\");\n // If you are viewing the first page of results,\n// display the first, second, third and fourth pagination\n// buttons.\n\nvar firstPage = function firstPage(offsetArrayVal, offsetParamVal) {\n  return offsetParamVal === 0 && (offsetArrayVal === offsetParamVal + _constants__WEBPACK_IMPORTED_MODULE_0__.NUMBER_OF_RESULTS || offsetArrayVal === offsetParamVal + (_constants__WEBPACK_IMPORTED_MODULE_0__.NUMBER_OF_RESULTS + 20) || offsetArrayVal === offsetParamVal + (_constants__WEBPACK_IMPORTED_MODULE_0__.NUMBER_OF_RESULTS + 40));\n}; // If you are viewing the second page of results, display the second, third and fourth pagination buttons.\n\n\nvar secondPageEtc = function secondPageEtc(offsetArrayVal, offsetParamVal) {\n  return offsetParamVal === _constants__WEBPACK_IMPORTED_MODULE_0__.NUMBER_OF_RESULTS && (offsetArrayVal === offsetParamVal || offsetArrayVal === offsetParamVal + _constants__WEBPACK_IMPORTED_MODULE_0__.NUMBER_OF_RESULTS || offsetArrayVal === offsetParamVal + (_constants__WEBPACK_IMPORTED_MODULE_0__.NUMBER_OF_RESULTS + 20));\n}; // If you are viewing any page page after page 1 or 2, or before the second to last and last pages, display\n// the pagination buttons for the previous page, current page and next page of results.\n\n\nvar intermediatePages = function intermediatePages(urlParams, offsetArrayVal, offsetParamVal) {\n  return urlParams.get('offset') && (offsetArrayVal === offsetParamVal || offsetArrayVal === offsetParamVal - _constants__WEBPACK_IMPORTED_MODULE_0__.NUMBER_OF_RESULTS || offsetArrayVal === offsetParamVal + _constants__WEBPACK_IMPORTED_MODULE_0__.NUMBER_OF_RESULTS);\n}; // If you are viewing the second-to-last page of results, display the second-to-last, third-to-last and fourth-to-last pagination buttons.\n\n\nvar secondToLastPage = function secondToLastPage(offsetArrayVal, offsetParamVal, resultsArray) {\n  return offsetParamVal === resultsArray[resultsArray.length - 2] && (offsetArrayVal === offsetParamVal || offsetArrayVal === offsetParamVal - _constants__WEBPACK_IMPORTED_MODULE_0__.NUMBER_OF_RESULTS || offsetArrayVal === offsetParamVal - (_constants__WEBPACK_IMPORTED_MODULE_0__.NUMBER_OF_RESULTS + 20));\n}; // If you are viewing the last page of results, display the last four pagination buttons.\n\n\nvar lastPage = function lastPage(offsetArrayVal, offsetParamVal, resultsArray) {\n  return offsetParamVal === resultsArray[resultsArray.length - 1] && (offsetArrayVal === offsetParamVal - _constants__WEBPACK_IMPORTED_MODULE_0__.NUMBER_OF_RESULTS || offsetArrayVal === offsetParamVal - (_constants__WEBPACK_IMPORTED_MODULE_0__.NUMBER_OF_RESULTS + 20) || offsetArrayVal === offsetParamVal - (_constants__WEBPACK_IMPORTED_MODULE_0__.NUMBER_OF_RESULTS + 40));\n}; // Export public methods:\n\n\n\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/paginationLogic/index.js?");

/***/ }),

/***/ "./_assets/js/utils/renderSearchPage.js":
/*!**********************************************!*\
  !*** ./_assets/js/utils/renderSearchPage.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ renderSearchPage; }\n/* harmony export */ });\n/* harmony import */ var _renderSearchResults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderSearchResults */ \"./_assets/js/utils/renderSearchResults.js\");\n/* harmony import */ var _applyFocusStyling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applyFocusStyling */ \"./_assets/js/utils/applyFocusStyling.js\");\n/* harmony import */ var _createRange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createRange */ \"./_assets/js/utils/createRange.js\");\n/* harmony import */ var _wrapUrls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wrapUrls */ \"./_assets/js/utils/wrapUrls.js\");\n/* harmony import */ var _templates_pagination_paginationTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/pagination/paginationTemplate */ \"./_assets/js/templates/pagination/paginationTemplate.js\");\n/* harmony import */ var _templates_search_textBestBetsTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/search/textBestBetsTemplate */ \"./_assets/js/templates/search/textBestBetsTemplate.js\");\n/* harmony import */ var _templates_search_searchResultsTemplate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/search/searchResultsTemplate */ \"./_assets/js/templates/search/searchResultsTemplate.js\");\n/* harmony import */ var _templates_search_noResultsTemplate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../templates/search/noResultsTemplate */ \"./_assets/js/templates/search/noResultsTemplate.js\");\n/* harmony import */ var _templates_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../templates/search/totalResultsTemplate */ \"./_assets/js/templates/search/totalResultsTemplate.js\");\n// Imports:\n\n\n\n\n\n\n\n\n\nfunction renderSearchPage(searchResults, urlParams, numberOfResults) {\n  var results = searchResults;\n  var textResults = results.text_best_bets;\n  var webResults = results.web.results; // Then check if this key has any values:\n\n  if (textResults.length) {\n    textResults.forEach(function (item) {\n      // If it does, slap this into the DOM\n      (0,_renderSearchResults__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_templates_search_textBestBetsTemplate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(item));\n    });\n  }\n\n  if (webResults.length) {\n    // Set the offset value to 0 initially, this helps with styling the first page icon:\n    if (urlParams.get(\"offset\") === null) {\n      urlParams.set(\"offset\", 0);\n    } // Cap the results total since search.gov is only returning 1000 results:\n\n\n    var webTotalResults = results.web.total;\n\n    if (webTotalResults > 1000) {\n      webTotalResults = 1000;\n    } // Grab our pagination list node that will contain the pagination:\n\n\n    var pagination_list = document.querySelectorAll(\"ol.usa-pagination__list\")[0]; // Put the fetched results into a list, and render in the DOM:\n\n    webResults.forEach(function (item) {\n      (0,_renderSearchResults__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_templates_search_searchResultsTemplate__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(item));\n    }); // FOR PAGINATION:\n    // Generate our results pages array:\n\n    var offsetValueArray = (0,_createRange__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(0, webTotalResults, numberOfResults); // Generate our html template:\n\n    var page_links = (0,_templates_pagination_paginationTemplate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(offsetValueArray, urlParams); // Put our template into the DOM:\n\n    pagination_list.innerHTML = page_links; // Apply focus styling to our new pagination list:\n\n    (0,_applyFocusStyling__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Previous and Next button functionality:\n\n    var prevLink = document.querySelector(\".usa-pagination__previous-page\");\n    var nextLink = document.querySelector(\".usa-pagination__next-page\");\n    var currentOffset = urlParams.get(\"offset\");\n\n    if (webTotalResults > numberOfResults) {\n      document.getElementById(\"pagination-nav\").removeAttribute(\"hidden\");\n\n      if (currentOffset > 0) {\n        urlParams.set(\"offset\", currentOffset - numberOfResults);\n        prevLink.href = \"?\".concat(urlParams.toString());\n        prevLink.ariaDisabled = 'false';\n        prevLink.tabIndex = 0;\n      } else {\n        prevLink.setAttribute('disabled', 'true');\n        prevLink.ariaDisabled = 'true';\n        prevLink.tabIndex = -1;\n      }\n\n      if (results.web.next_offset) {\n        urlParams.set(\"offset\", results.web.next_offset);\n        nextLink.href = \"?\".concat(urlParams.toString());\n        nextLink.ariaDisabled = 'false';\n        nextLink.tabIndex = 0;\n      } else {\n        nextLink.setAttribute('disabled', 'true');\n        nextLink.ariaDisabled = 'true';\n        nextLink.tabIndex = -1;\n      }\n    }\n  }\n\n  if (document.getElementById(\"search-results\").childNodes.length == 0) {\n    (0,_renderSearchResults__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"\".concat((0,_templates_search_noResultsTemplate__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()), false);\n  } else {\n    var target = document.querySelector(\".crt-landing--separator_small\");\n    target.insertAdjacentHTML(\"afterend\", (0,_templates_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(webTotalResults));\n    var urlsToWrap = document.querySelectorAll(\".content-url\");\n    Array.prototype.forEach.call(urlsToWrap, function (url) {\n      var wrapped = (0,_wrapUrls__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(url.innerHTML);\n      return url.innerHTML = wrapped;\n    });\n  }\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/renderSearchPage.js?");

/***/ }),

/***/ "./_assets/js/utils/renderSearchResults.js":
/*!*************************************************!*\
  !*** ./_assets/js/utils/renderSearchResults.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ renderSearchResults; }\n/* harmony export */ });\nfunction renderSearchResults(content) {\n  var append = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  var previous = document.getElementById(\"search-results\").innerHTML;\n\n  if (append) {\n    document.getElementById(\"search-results\").innerHTML = previous + content;\n  } else {\n    document.getElementById(\"search-results\").innerHTML = content;\n  }\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/renderSearchResults.js?");

/***/ }),

/***/ "./_assets/js/utils/wrapUrls.js":
/*!**************************************!*\
  !*** ./_assets/js/utils/wrapUrls.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ wrapUrls; }\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _wrapRegExp() { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, void 0, groups); }; var _super = RegExp.prototype, _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = new RegExp(re, flags); return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype); } function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { return groups[name] = result[g[name]], groups; }, Object.create(null)); } return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); return result && (result.groups = buildGroups(result, this)), result; }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (\"string\" == typeof substitution) { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\\$<([^>]+)>/g, function (_, name) { return \"$\" + groups[name]; })); } if (\"function\" == typeof substitution) { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = arguments; return \"object\" != _typeof(args[args.length - 1]) && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args); }); } return _super[Symbol.replace].call(this, str, substitution); }, _wrapRegExp.apply(this, arguments); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n// Insert word break opportunities into a URL following the Chicago Manual of Style\n// @param {string} url A URL to format\n// @return {string} A formatted URL\n// @see {@link https://www.chicagomanualofstyle.org/book/ed17/part3/ch14/psec018.html Chicago Manual of Style 14.18}\n// @see Turabian 2018, 20.4.2\n// Adapted from: https://css-tricks.com/better-line-breaks-for-long-urls/\nfunction wrapUrls(url) {\n  // Split the URL into an array to distingish double slashes from single slashes\n  var doubleSlash = url.split(\"//\"); // Format the strings on either side of double slashes separately\n\n  var formatted = doubleSlash.map(function (str) {\n    return str.replace( /*#__PURE__*/_wrapRegExp(/(:)/gi, {\n      after: 1\n    }), \"$1<wbr>\") // Before a single slash, tilde, period, comma, hyphen, underline, question mark, number sign, or percent symbol\n    .replace( /*#__PURE__*/_wrapRegExp(/([#%,-\\/\\?_~])/gi, {\n      before: 1\n    }), \"<wbr>$1\") // Before and after an equals sign or ampersand\n    .replace( /*#__PURE__*/_wrapRegExp(/(=)/gi, {\n      equals: 1\n    }), \"<wbr>$1<wbr>\").replace( /*#__PURE__*/_wrapRegExp(/(&amp;)/gi, {\n      ampersand: 1\n    }), \"<wbr>&<wbr>\"); // Reconnect the strings with word break opportunities after double slashes\n  }).join(\"//<wbr>\");\n  return formatted;\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/wrapUrls.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./_assets/js/pagination.js");
/******/ 	
/******/ })()
;