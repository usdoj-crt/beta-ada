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

/***/ "./_assets/js/redirect404.js":
/*!***********************************!*\
  !*** ./_assets/js/redirect404.js ***!
  \***********************************/
/***/ (function() {

eval("function showNotFound() {\n  document.getElementById('redirect-pending').style.display = 'none';\n}\nfunction attemptToRedirect(attemptedPath, manual, generated) {\n  if (!attemptedPath.replaceAll('/', '').trim()) {\n    return; // Don't even try if the path is empty\n  }\n\n  // (the path without html/htm/trailing slash)\n  const cleanPath = attemptedPath.replace(/\\.html?$/, '').replace(/\\/+$/, '');\n  const pathsToTry = [cleanPath, cleanPath + '/', cleanPath + '.htm', cleanPath + '.html'];\n  for (const normalizedPath of pathsToTry) {\n    if (manual.hasOwnProperty(normalizedPath)) {\n      window.location.replace(manual[normalizedPath]);\n      return;\n    }\n    if (generated.hasOwnProperty(normalizedPath)) {\n      window.location.replace(generated[normalizedPath]);\n      return;\n    }\n  }\n\n  // If we make it here, it's a real 404.\n  showNotFound();\n}\nconst gotRedirects = {};\nfunction waitForRedirects(name, request) {\n  gotRedirects[name] = JSON.parse(request.responseText);\n  if (!gotRedirects.hasOwnProperty('manual')) return;\n  if (!gotRedirects.hasOwnProperty('generated')) return;\n  attemptToRedirect(window.location.pathname, gotRedirects['manual'], gotRedirects['generated']);\n}\nfunction requestRedirects(name, attempts) {\n  if (attempts <= 0) {\n    showNotFound();\n    return;\n  }\n  const request = new XMLHttpRequest();\n  function handleResponse() {\n    if (this.status !== 200) {\n      requestRedirects(name, attempts - 1);\n      return;\n    }\n    waitForRedirects(name, this);\n  }\n  request.addEventListener('load', handleResponse);\n  request.overrideMimeType('application/json');\n  request.open('GET', `/${name}_redirects.json`);\n  request.send();\n}\nconst ATTEMPTS = 5;\nrequestRedirects('manual', ATTEMPTS);\nrequestRedirects('generated', ATTEMPTS);\n\n//# sourceURL=webpack://federalist-uswds-jekyll/./_assets/js/redirect404.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./_assets/js/redirect404.js"]();
/******/ 	
/******/ })()
;