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

/***/ "./_assets/js/click-tracking.js":
/*!**************************************!*\
  !*** ./_assets/js/click-tracking.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ clickTracking; }\n/* harmony export */ });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/constants */ \"./_assets/js/utils/constants.js\");\n/* harmony import */ var _utils_searchParamUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/searchParamUtils */ \"./_assets/js/utils/searchParamUtils.js\");\n// Import our constants from constandts.js\n\n\nfunction clickTracking() {\n  // Get all the anchor tags that are children of b tags on the page:\n  const allLinks = document.querySelectorAll('.search-result'); // Loop through all the links and add a click event listener to each one:\n\n  allLinks.forEach((link, index) => {\n    const url = link.href;\n    const query = encodeURI((0,_utils_searchParamUtils__WEBPACK_IMPORTED_MODULE_1__.getSearchParam)('query'));\n    const position = encodeURI(Number((0,_utils_searchParamUtils__WEBPACK_IMPORTED_MODULE_1__.getSearchParam)('offset')) + (index + 1)); // What we need to send to the click tracking endpoint:\n    // url clicked\n    // search query\n    // affiliate\n    // position\n    // module code\n    // access key\n\n    const endpoint = `${_utils_constants__WEBPACK_IMPORTED_MODULE_0__.CLICK_TRACKING_ENDPOINT}?url=${url}&affiliate=${_utils_constants__WEBPACK_IMPORTED_MODULE_0__.AFFILIATE}&access_key=${_utils_constants__WEBPACK_IMPORTED_MODULE_0__.ACCESS_KEY}&module_code=${_utils_constants__WEBPACK_IMPORTED_MODULE_0__.MODULE_CODE}&${query}&position=${position}`; // When a link is clicked, send a POST request to the search endpoint:\n\n    link.addEventListener('click', () => {\n      fetch(endpoint, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/x-www-form-urlencoded',\n          'Content-length': 0\n        }\n      });\n    });\n  });\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/click-tracking.js?");

/***/ }),

/***/ "./_assets/js/pagination.js":
/*!**********************************!*\
  !*** ./_assets/js/pagination.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/constants */ \"./_assets/js/utils/constants.js\");\n/* harmony import */ var _utils_renderSearchPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/renderSearchPage */ \"./_assets/js/utils/renderSearchPage.js\");\n/* harmony import */ var _templates_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/search/totalResultsTemplate */ \"./_assets/js/templates/search/totalResultsTemplate.js\");\n\n\n // Set up the search parameters:\n\nlet urlParams = new URLSearchParams(window.location.search);\nlet searchEndpoint = new URL(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.SEARCH_ENDPOINT);\nlet searchParams = {\n  affiliate: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.AFFILIATE,\n  access_key: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.ACCESS_KEY,\n  query: urlParams.get('query'),\n  offset: urlParams.get('offset') || 0,\n  limit: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.NUMBER_OF_RESULTS\n}; // Add our total number of results DOM node:\n\nconst target = document.getElementById(\"totalResultsTarget\");\nObject.keys(searchParams).forEach(function (key) {\n  searchEndpoint.searchParams.append(key, searchParams[key]);\n}); // Get the results, convert them to JSON, then render them:\n// When the results are returned, check that the status is 200\n// then render the results:\n\nfunction reqLoaded() {\n  if (this.status === 200) {\n    let resJSON = JSON.parse(this.responseText);\n    (0,_utils_renderSearchPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resJSON, urlParams, _utils_constants__WEBPACK_IMPORTED_MODULE_0__.NUMBER_OF_RESULTS);\n  } else {\n    target.innerHTML = (0,_templates_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(-1, 'result');\n  }\n} // If timeout:\n\n\nfunction reqTimeout() {\n  target.innerHTML = (0,_templates_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(-1, 'result');\n}\n\nlet req = new XMLHttpRequest();\nreq.addEventListener('load', reqLoaded);\nreq.open('GET', searchEndpoint);\nreq.timeout = 5000; //timeout after 5 seconds\n\nreq.addEventListener('timeout', reqTimeout);\nreq.send();\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/pagination.js?");

/***/ }),

/***/ "./_assets/js/templates/pagination/ellipsisTemplate.js":
/*!*************************************************************!*\
  !*** ./_assets/js/templates/pagination/ellipsisTemplate.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ellipsis; }\n/* harmony export */ });\nfunction ellipsis() {\n  return `<li\n    class=\"usa-pagination__item usa-pagination__overflow display-none tablet:display-block\"\n    role=\"none\"\n    tabindex='-1'\n  >\n    <span class=\"text-bold\"> … </span>\n  </li>`;\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/pagination/ellipsisTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/pagination/nextButtonTemplate.js":
/*!***************************************************************!*\
  !*** ./_assets/js/templates/pagination/nextButtonTemplate.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ nextButton; }\n/* harmony export */ });\nfunction nextButton() {\n  return `<li class=\"usa-pagination__item usa-pagination__arrow display-flex\">\n          <a\n            href=\"javascript:void(0);\"\n            class=\"usa-pagination__link usa-pagination__next-page\"\n            aria-label=\"Next page\"\n          >\n            <span class=\"usa-pagination__link-text\"> Next Page </span>\n\n            <svg class=\"usa-icon\" aria-hidden=\"true\" role=\"img\">\n              <use xlink:href=\"/assets/img/sprite.svg#navigate_next\"></use>\n            </svg>\n          </a>\n          </li>`;\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/pagination/nextButtonTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/pagination/pageNumber.js":
/*!*******************************************************!*\
  !*** ./_assets/js/templates/pagination/pageNumber.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ pageNumber; }\n/* harmony export */ });\n/* harmony import */ var _utils_searchParamUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/searchParamUtils */ \"./_assets/js/utils/searchParamUtils.js\");\n\nfunction pageNumber(resArray) {\n  const currentOffset = parseInt((0,_utils_searchParamUtils__WEBPACK_IMPORTED_MODULE_0__.getSearchParam)('offset'));\n  let currentPage;\n\n  if (resArray.indexOf(currentOffset) >= 0) {\n    currentPage = resArray.indexOf(currentOffset) + 1;\n  } else {\n    currentPage = resArray.indexOf(currentOffset) + 2;\n  }\n\n  const lastPage = resArray.length;\n  const templateContent = `${currentPage} of ${lastPage}`;\n  const para = document.createElement(\"p\");\n  const newContent = document.createTextNode(templateContent);\n  para.appendChild(newContent);\n  para.classList.add('margin-left-205');\n  const target = document.getElementById('pagination-nav');\n  target.append(para);\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/pagination/pageNumber.js?");

/***/ }),

/***/ "./_assets/js/templates/pagination/paginationButtonTemplate.js":
/*!*********************************************************************!*\
  !*** ./_assets/js/templates/pagination/paginationButtonTemplate.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ paginationButton; }\n/* harmony export */ });\n/* harmony import */ var _utils_searchParamUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/searchParamUtils */ \"./_assets/js/utils/searchParamUtils.js\");\n//= require ../../utils/offsetUtils.js\n\nfunction paginationButton(offsetVal, index, resultsArr) {\n  const currentOffset = (0,_utils_searchParamUtils__WEBPACK_IMPORTED_MODULE_0__.getSearchParam)('offset');\n  let ariaLabel = \"\";\n  let ariaCurrent = \"false\";\n\n  if (currentOffset !== offsetVal && offsetVal === resultsArr[resultsArr.length - 1]) {\n    ariaLabel = \"Last page; Page \" + (index + 1);\n  } else if (currentOffset !== offsetVal) {\n    ariaLabel = \"Page \" + (index + 1);\n  }\n\n  if (currentOffset === offsetVal) {\n    ariaCurrent = \"true\";\n  }\n\n  return `<li class=\"usa-pagination__item usa-pagination__page-no display-none tablet:display-block\">\n      <a\n        href=\"?${(0,_utils_searchParamUtils__WEBPACK_IMPORTED_MODULE_0__.setSearchParam)('offset', offsetVal)}\"\n        class=\"usa-pagination__button bg-primary-darker\"\n        aria-label=\"${ariaLabel}\"\"\n        aria-current=${ariaCurrent}\n        data-offset=${offsetVal}\n      >\n        ${index + 1}\n      </a>\n    </li>`;\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/pagination/paginationButtonTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/pagination/paginationTemplate.js":
/*!***************************************************************!*\
  !*** ./_assets/js/templates/pagination/paginationTemplate.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ paginationTemplate; }\n/* harmony export */ });\n/* harmony import */ var _nextButtonTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nextButtonTemplate */ \"./_assets/js/templates/pagination/nextButtonTemplate.js\");\n/* harmony import */ var _previousButtonTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./previousButtonTemplate */ \"./_assets/js/templates/pagination/previousButtonTemplate.js\");\n/* harmony import */ var _ellipsisTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ellipsisTemplate */ \"./_assets/js/templates/pagination/ellipsisTemplate.js\");\n/* harmony import */ var _paginationButtonTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paginationButtonTemplate */ \"./_assets/js/templates/pagination/paginationButtonTemplate.js\");\n/* harmony import */ var _pageNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageNumber */ \"./_assets/js/templates/pagination/pageNumber.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../utils/paginationLogic/index'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n// Imports:\n\n\n\n\n\n\nfunction paginationTemplate(resultsArr, urlParams) {\n  const offsetInt = parseInt(urlParams.get(\"offset\"));\n  (0,_pageNumber__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(resultsArr);\n\n  if (resultsArr.length <= 7) {\n    return `\n        ${(0,_previousButtonTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()}\n        ${resultsArr.map(function (offsetValue, index, resArr) {\n      return (0,_paginationButtonTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(offsetValue, index, resArr);\n    }).join(\" \")}\n        ${(0,_nextButtonTemplate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()}`;\n  }\n\n  return `\n        ${(0,_previousButtonTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()}\n        ${(0,_paginationButtonTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(resultsArr[0], 0, resultsArr)}\n        ${// If we are on the first, second or third page of results hide the left ellipses\n  offsetInt === 0 || offsetInt === 20 || offsetInt === 40 ? \"\" : (0,_ellipsisTemplate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(offsetInt, resultsArr)}\n        ${resultsArr.map(function (offsetValue, index, resArr) {\n    // If it is either the first page or last page, render nothing. The first and last page buttons are fixed.\n    if (index === 0 || index === resultsArr.indexOf(resultsArr[resultsArr.length - 1])) {// If you are on the first page, render the next three page buttons.\n    } else if (Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../utils/paginationLogic/index'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(offsetValue, offsetInt)) {\n      return (0,_paginationButtonTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(offsetValue, index, resArr); // If you are on the second page, render the second page button, third page button and fourth page button:\n    } else if (Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../utils/paginationLogic/index'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(offsetValue, offsetInt)) {\n      return (0,_paginationButtonTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(offsetValue, index, resArr); // If you are on the second to last page, render that page button and the previous two page buttons.\n    } else if (Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../utils/paginationLogic/index'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(offsetValue, offsetInt, resultsArr)) {\n      return (0,_paginationButtonTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(offsetValue, index, resArr); // If you are on the last page, render the previous 3 page buttons.\n    } else if (Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../utils/paginationLogic/index'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(offsetValue, offsetInt, resultsArr)) {\n      return (0,_paginationButtonTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(offsetValue, index, resArr); // If you are on any other page, render that page button, the previous page button and the next page button.\n    } else if (Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../utils/paginationLogic/index'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(urlParams, offsetValue, offsetInt)) {\n      return (0,_paginationButtonTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(offsetValue, index, resArr);\n    }\n  }).join(\" \")}\n        ${// If we are on the third to last, second to last or last page of results, hide the right ellipsis.\n  offsetInt === resultsArr[resultsArr.length - 1] || offsetInt === resultsArr[resultsArr.length - 2] || offsetInt === resultsArr[resultsArr.length - 3] ? \"\" : (0,_ellipsisTemplate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()}\n        ${(0,_paginationButtonTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(resultsArr[resultsArr.length - 1], resultsArr.indexOf(resultsArr[resultsArr.length - 1]), resultsArr)}\n        ${(0,_nextButtonTemplate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()}`;\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/pagination/paginationTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/pagination/previousButtonTemplate.js":
/*!*******************************************************************!*\
  !*** ./_assets/js/templates/pagination/previousButtonTemplate.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ previousButton; }\n/* harmony export */ });\nfunction previousButton() {\n  return `<li class=\"usa-pagination__item usa-pagination__arrow display-flex\">\n    <a\n      href=\"javascript:void(0);\"\n      class=\"usa-pagination__link usa-pagination__previous-page\"\n      aria-label=\"Previous page\"\n    >\n      <svg class=\"usa-icon\" aria-hidden=\"true\" role=\"img\">\n        <use xlink:href=\"/assets/img/sprite.svg#navigate_before\"></use>\n      </svg>\n\n      <span class=\"usa-pagination__link-text\">Previous Page</span>\n    </a>\n  </li>`;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/pagination/previousButtonTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/search/bestBetsSectionTemplate.js":
/*!****************************************************************!*\
  !*** ./_assets/js/templates/search/bestBetsSectionTemplate.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ bestBetsSectionTemplate; }\n/* harmony export */ });\nfunction bestBetsSectionTemplate(content) {\n  return `\n     <div class=\"padding-bottom-1 padding-top-4 usa-prose border-top-2px border-bottom-2px border-primary margin-top-5\">\n     <p markdown=\"0\" class=\"total-results\">Recommended by ADA.gov</p>\n        <div class=\"grid-row flex-wrap flex-justify ${content.length === 1 ? \"single-result\" : null}\">\n        ${content.join('')}\n        </div>\n     </div>\n     `;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/search/bestBetsSectionTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/search/graphicBestBetsSectionTemplate.js":
/*!***********************************************************************!*\
  !*** ./_assets/js/templates/search/graphicBestBetsSectionTemplate.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ bestBetsSectionTemplate; }\n/* harmony export */ });\nfunction bestBetsSectionTemplate(content) {\n  return `\n     <div class=\"padding-bottom-1 padding-top-4 usa-prose border-top-2px border-bottom-2px border-primary margin-top-5\">\n     <p markdown=\"0\" class=\"font-body-lg\">Recommended by ADA.gov</p>\n        <div class=\"grid-row flex-wrap flex-justify\">\n        ${content.join('')}\n        </div>\n     </div>\n     `;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/search/graphicBestBetsSectionTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/search/graphicBestBetsTemplate.js":
/*!****************************************************************!*\
  !*** ./_assets/js/templates/search/graphicBestBetsTemplate.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ graphicBestBetsTemplate; }\n/* harmony export */ });\nfunction graphicBestBetsTemplate(content) {\n  const links = content.links.map(link => {\n    return `<a href=\"${link.url}\" class=\"padding-right-3 grid-col-6 padding-bottom-2 best-bet\" aria-label=\"best bet box\">${link.title}</a>`;\n  });\n  return `\n     <div class=\"padding-bottom-3 padding-top-2 usa-prose\">\n       <p class=\"font-body-lg\"><b class=\"title\">${content.title.replace(/\\uE000/g, '').replace(/\\uE001/g, '')}</b></p>\n     <div class=\"grid-row flex-wrap flex-justify-start\">\n       ${links.join(' ')}\n       </div>\n     </div>\n     `;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/search/graphicBestBetsTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/search/searchResultsTemplate.js":
/*!**************************************************************!*\
  !*** ./_assets/js/templates/search/searchResultsTemplate.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ searchResultsTemplate; }\n/* harmony export */ });\nfunction searchResultsTemplate(content) {\n  return `\n        <li class=\"padding-bottom-5 margin-top-4 usa-prose border-bottom-05 border-base-lightest\">\n        <b class=\"title\"><a class='search-result' href=\"${content.url}\">${content.title.replace(/\\uE000/g, '<span class=\"bg-yellow\">').replace(/\\uE001/g, \"</span>\")}</a></b>\n      <div class=\"text-base content-url\"> ${content.url} </div>\n      <div> ${content.snippet.replace(/\\uE000/g, '<span class=\"bg-yellow\">').replace(/\\uE001/g, \"</span>\")} </div>\n      </li>\n`;\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/search/searchResultsTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/search/textBestBetsTemplate.js":
/*!*************************************************************!*\
  !*** ./_assets/js/templates/search/textBestBetsTemplate.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ textBestBetsTemplate; }\n/* harmony export */ });\nfunction textBestBetsTemplate(content) {\n  return `\n    <div class=\"padding-bottom-3 padding-top-2 usa-prose best-bet-item\">\n      <b class=\"title\"><a href=\"${content.url}\" class=\"best-bet\" data-ga-event-name=\"best bet box\">${content.title.replace(/\\uE000/g, '').replace(/\\uE001/g, '')}</a></b>\n      <div> ${content.description.replace(/\\uE000/g, '').replace(/\\uE001/g, '')} </div>\n    </div>\n    `;\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/search/textBestBetsTemplate.js?");

/***/ }),

/***/ "./_assets/js/templates/search/totalResultsTemplate.js":
/*!*************************************************************!*\
  !*** ./_assets/js/templates/search/totalResultsTemplate.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ totalResults; }\n/* harmony export */ });\nfunction totalResults(resultsTotal = 0, type = \"results\", query = '') {\n  const moreThanOne = `<p role=\"status\" markdown=\"0\" class=\"total-results margin-y-0\">${resultsTotal} ${type}s found ${query}</p>`;\n  const equalToOne = `<p role=\"status\" markdown=\"0\" class=\"total-results margin-y-0\">${resultsTotal} ${type} found ${query}</p>`;\n  const lessThanOne = `<p role=\"status\" markdown=\"0\" class=\"total-results margin-y-0\">No ${type}s found ${query}</p>`; // Error message:\n\n  const errorMessage = `<p role=\"status\" markdown=\"0\" class=\"total-results margin-y-0\">Your search cannot be completed at this time. Please try again later.</p>`;\n\n  if (type === null) {\n    type = 'results';\n  }\n\n  if (resultsTotal > 1) {\n    return moreThanOne;\n  }\n\n  if (resultsTotal === 1) {\n    return equalToOne;\n  }\n\n  if (resultsTotal === 0) {\n    return lessThanOne;\n  }\n\n  if (resultsTotal === -1) {\n    return errorMessage;\n  }\n}\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/templates/search/totalResultsTemplate.js?");

/***/ }),

/***/ "./_assets/js/utils/applyFocusStyling.js":
/*!***********************************************!*\
  !*** ./_assets/js/utils/applyFocusStyling.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ applyFocusStyling; }\n/* harmony export */ });\n/* harmony import */ var _searchParamUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchParamUtils */ \"./_assets/js/utils/searchParamUtils.js\");\n // Apply focus styling for the active button:\n\nfunction applyFocusStyling() {\n  // offset value in this case will equal the data-offset\n  const allPaginationButtons = document.querySelectorAll(\"a.usa-pagination__button\");\n  const allButtonsArr = Array.prototype.slice.call(allPaginationButtons);\n  const currentOffset = (0,_searchParamUtils__WEBPACK_IMPORTED_MODULE_0__.getSearchParam)('offset');\n  allButtonsArr.forEach(function (button) {\n    if (currentOffset === \"\" && button.dataset.offset === \"0\") {\n      button.classList.add(\"usa-current\");\n      button.setAttribute('aria-current', 'true');\n    }\n\n    if (button.dataset.offset === currentOffset) {\n      button.classList.add(\"usa-current\");\n      button.setAttribute('aria-current', 'true');\n    }\n  });\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/applyFocusStyling.js?");

/***/ }),

/***/ "./_assets/js/utils/constants.js":
/*!***************************************!*\
  !*** ./_assets/js/utils/constants.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NUMBER_OF_RESULTS\": function() { return /* binding */ NUMBER_OF_RESULTS; },\n/* harmony export */   \"SEARCH_ENDPOINT\": function() { return /* binding */ SEARCH_ENDPOINT; },\n/* harmony export */   \"CLICK_TRACKING_ENDPOINT\": function() { return /* binding */ CLICK_TRACKING_ENDPOINT; },\n/* harmony export */   \"ACCESS_KEY\": function() { return /* binding */ ACCESS_KEY; },\n/* harmony export */   \"AFFILIATE\": function() { return /* binding */ AFFILIATE; },\n/* harmony export */   \"MODULE_CODE\": function() { return /* binding */ MODULE_CODE; },\n/* harmony export */   \"TAGS\": function() { return /* binding */ TAGS; }\n/* harmony export */ });\n// Pagination Constants:\nconst NUMBER_OF_RESULTS = 20;\nconst SEARCH_ENDPOINT = 'https://search.usa.gov/api/v2/search/i14y';\nconst CLICK_TRACKING_ENDPOINT = 'https://api.gsa.gov/technology/searchgov/v2/clicks/';\nconst ACCESS_KEY = 'Z8vERzCYuVMzAh2CKIRiyj1tRbOhdzseBGOuirGz1AQ=';\nconst AFFILIATE = 'justice-ada';\nconst MODULE_CODE = 'I14Y';\nconst TAGS = ['artificial-intelligence', 'service-animals', 'title-ii', 'title-iii', 'web-access', 'employment', 'effective-communication', 'parking', 'medical-care', 'mobility-devices', 'child-care', 'covid-19'];\n\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/constants.js?");

/***/ }),

/***/ "./_assets/js/utils/createRange.js":
/*!*****************************************!*\
  !*** ./_assets/js/utils/createRange.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ createRange; }\n/* harmony export */ });\nfunction createRange(start, end, step) {\n  const range = [];\n  if (start === end) return range.push(start);\n\n  if (end % step === 0) {\n    end = end - step;\n  }\n\n  for (let i = start; i <= end; i += step) {\n    range.push(i);\n  }\n\n  return range;\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/createRange.js?");

/***/ }),

/***/ "./_assets/js/utils/renderSearchPage.js":
/*!**********************************************!*\
  !*** ./_assets/js/utils/renderSearchPage.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ renderSearchPage; }\n/* harmony export */ });\n/* harmony import */ var _renderSearchResults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderSearchResults */ \"./_assets/js/utils/renderSearchResults.js\");\n/* harmony import */ var _applyFocusStyling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applyFocusStyling */ \"./_assets/js/utils/applyFocusStyling.js\");\n/* harmony import */ var _createRange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createRange */ \"./_assets/js/utils/createRange.js\");\n/* harmony import */ var _wrapUrls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wrapUrls */ \"./_assets/js/utils/wrapUrls.js\");\n/* harmony import */ var _templates_search_bestBetsSectionTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/search/bestBetsSectionTemplate */ \"./_assets/js/templates/search/bestBetsSectionTemplate.js\");\n/* harmony import */ var _templates_search_graphicBestBetsTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/search/graphicBestBetsTemplate */ \"./_assets/js/templates/search/graphicBestBetsTemplate.js\");\n/* harmony import */ var _templates_search_graphicBestBetsSectionTemplate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/search/graphicBestBetsSectionTemplate */ \"./_assets/js/templates/search/graphicBestBetsSectionTemplate.js\");\n/* harmony import */ var _templates_pagination_paginationTemplate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../templates/pagination/paginationTemplate */ \"./_assets/js/templates/pagination/paginationTemplate.js\");\n/* harmony import */ var _templates_search_textBestBetsTemplate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../templates/search/textBestBetsTemplate */ \"./_assets/js/templates/search/textBestBetsTemplate.js\");\n/* harmony import */ var _templates_search_searchResultsTemplate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../templates/search/searchResultsTemplate */ \"./_assets/js/templates/search/searchResultsTemplate.js\");\n/* harmony import */ var _templates_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../templates/search/totalResultsTemplate */ \"./_assets/js/templates/search/totalResultsTemplate.js\");\n/* harmony import */ var _click_tracking__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../click-tracking */ \"./_assets/js/click-tracking.js\");\n// Imports:\n\n\n\n\n\n\n\n\n\n\n\n\nfunction renderSearchPage(searchResults, urlParams, numberOfResults) {\n  const results = searchResults;\n  const graphicResults = results.graphic_best_bets;\n  const textResults = results.text_best_bets;\n  const webResults = results.web.results;\n  let webTotalResults = results.web.total;\n  const target = document.getElementById(\"totalResultsTarget\"); // Then check if this key has any values:\n\n  if (textResults.length) {\n    const bestBetResults = textResults.map(item => (0,_templates_search_textBestBetsTemplate__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(item));\n    const bestBetsSection = (0,_templates_search_bestBetsSectionTemplate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(bestBetResults);\n    (0,_renderSearchResults__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(bestBetsSection);\n  }\n\n  if (graphicResults.length) {\n    const bestBetGraphicResults = graphicResults.map(item => (0,_templates_search_graphicBestBetsTemplate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(item));\n    const bestBetsGraphicSection = (0,_templates_search_graphicBestBetsSectionTemplate__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(bestBetGraphicResults);\n    (0,_renderSearchResults__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(bestBetsGraphicSection);\n  }\n\n  if (textResults.length || graphicResults.length) {\n    (0,_renderSearchResults__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`<p markdown=\"0\" class=\"total-results margin-top-4\">All search results</p>`);\n  }\n\n  if (webResults.length) {\n    // Set the offset value to 0 initially, this helps with styling the first page icon:\n    if (urlParams.get(\"offset\") === null) {\n      urlParams.set(\"offset\", 0);\n    } // Cap the results total since search.gov is only returning 1000 results:\n\n\n    if (webTotalResults > 1000) {\n      webTotalResults = 1000;\n    } // Grab our pagination list node that will contain the pagination:\n\n\n    const pagination_list = document.querySelectorAll(\"ol.usa-pagination__list\")[0]; // Put the fetched results into a list, and render in the DOM:\n\n    webResults.forEach(function (item) {\n      (0,_renderSearchResults__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_templates_search_searchResultsTemplate__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(item));\n    }); // Set up click tracking for search.gov:\n\n    (0,_click_tracking__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(); // List the total number of results:\n\n    target.innerHTML = (0,_templates_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(webTotalResults, 'result', `for '` + results.query + `'`); // FOR PAGINATION:\n    // Generate our results pages array:\n\n    const offsetValueArray = (0,_createRange__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(0, webTotalResults, numberOfResults); // Generate our html template:\n\n    const page_links = (0,_templates_pagination_paginationTemplate__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(offsetValueArray, urlParams); // Put our template into the DOM:\n\n    pagination_list.innerHTML = page_links; // Apply focus styling to our new pagination list:\n\n    (0,_applyFocusStyling__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Previous and Next button functionality:\n\n    const prevLink = document.querySelector(\".usa-pagination__previous-page\");\n    const nextLink = document.querySelector(\".usa-pagination__next-page\");\n    const currentOffset = urlParams.get(\"offset\");\n\n    if (webTotalResults > numberOfResults) {\n      document.getElementById(\"pagination-nav\").removeAttribute(\"hidden\");\n\n      if (currentOffset > 0) {\n        urlParams.set(\"offset\", currentOffset - numberOfResults);\n        prevLink.href = `?${urlParams.toString()}`;\n        prevLink.ariaDisabled = 'false';\n        prevLink.tabIndex = 0;\n      } else {\n        prevLink.setAttribute('disabled', 'true');\n        prevLink.ariaDisabled = 'true';\n        prevLink.tabIndex = -1;\n      }\n\n      if (results.web.next_offset) {\n        urlParams.set(\"offset\", results.web.next_offset);\n        nextLink.href = `?${urlParams.toString()}`;\n        nextLink.ariaDisabled = 'false';\n        nextLink.tabIndex = 0;\n      } else {\n        nextLink.setAttribute('disabled', 'true');\n        nextLink.ariaDisabled = 'true';\n        nextLink.tabIndex = -1;\n      }\n    }\n  }\n\n  if (document.getElementById(\"search-results\").childNodes.length == 0) {\n    target.innerHTML = (0,_templates_search_totalResultsTemplate__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(webTotalResults, 'result', `for '` + results.query + `'`);\n  } else {\n    const urlsToWrap = document.querySelectorAll(\".content-url\");\n    Array.prototype.forEach.call(urlsToWrap, function (url) {\n      const wrapped = (0,_wrapUrls__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(url.innerHTML);\n      return url.innerHTML = wrapped;\n    });\n  }\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/renderSearchPage.js?");

/***/ }),

/***/ "./_assets/js/utils/renderSearchResults.js":
/*!*************************************************!*\
  !*** ./_assets/js/utils/renderSearchResults.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ renderSearchResults; }\n/* harmony export */ });\nfunction renderSearchResults(content, append = true) {\n  const previous = document.getElementById(\"search-results\").innerHTML;\n\n  if (append) {\n    document.getElementById(\"search-results\").innerHTML = previous + content;\n  } else {\n    document.getElementById(\"search-results\").innerHTML = content;\n  }\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/renderSearchResults.js?");

/***/ }),

/***/ "./_assets/js/utils/searchParamUtils.js":
/*!**********************************************!*\
  !*** ./_assets/js/utils/searchParamUtils.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSearchParam\": function() { return /* binding */ getSearchParam; },\n/* harmony export */   \"setSearchParam\": function() { return /* binding */ setSearchParam; }\n/* harmony export */ });\n// Get the current offset value:\nfunction getSearchParam(param, paramString = null) {\n  const searchParams = new URLSearchParams(window.location.search || paramString);\n  const query = searchParams.get(param);\n\n  if (query !== null) {\n    return query;\n  } else {\n    return '';\n  }\n} // Get the url params offset value and convert it to a string. This is used to set the href link for each pagination button.\n\n\nfunction setSearchParam(param, value, paramString = null) {\n  const searchParams = new URLSearchParams(window.location.search || paramString);\n  searchParams.set(param, value);\n  return searchParams.toString();\n} // Export our public methods:\n\n\n\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/searchParamUtils.js?");

/***/ }),

/***/ "./_assets/js/utils/wrapUrls.js":
/*!**************************************!*\
  !*** ./_assets/js/utils/wrapUrls.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ wrapUrls; }\n/* harmony export */ });\n// Insert word break opportunities into a URL following the Chicago Manual of Style\n// @param {string} url A URL to format\n// @return {string} A formatted URL\n// @see {@link https://www.chicagomanualofstyle.org/book/ed17/part3/ch14/psec018.html Chicago Manual of Style 14.18}\n// @see Turabian 2018, 20.4.2\n// Adapted from: https://css-tricks.com/better-line-breaks-for-long-urls/\nfunction wrapUrls(url) {\n  // Split the URL into an array to distingish double slashes from single slashes\n  const doubleSlash = url.split(\"//\"); // Format the strings on either side of double slashes separately\n\n  const formatted = doubleSlash.map(function (str) {\n    return str.replace(/(?<after>:)/giu, \"$1<wbr>\") // Before a single slash, tilde, period, comma, hyphen, underline, question mark, number sign, or percent symbol\n    .replace(/(?<before>[/~.,_?#%-])/giu, \"<wbr>$1\") // Before and after an equals sign or ampersand\n    .replace(/(?<equals>=)/giu, \"<wbr>$1<wbr>\").replace(/(?<ampersand>&amp;)/giu, \"<wbr>&<wbr>\"); // Reconnect the strings with word break opportunities after double slashes\n  }).join(\"//<wbr>\");\n  return formatted;\n}\n;\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/utils/wrapUrls.js?");

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