/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
globalThis["webpackHotUpdatesupportcode"]("main",{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("// import 'core-js'; // includes all supported features\n// import 'core-js/stable' // used when using entry option\n// import 'regenerator-runtime/runtime' // used when using entry option\n// import 'core-js/actual/promise'; // includes compatibility tools for just promise feature\n\nconst button = document.querySelector('button');\nconst textParagraph = document.querySelector('p');\nbutton.addEventListener('click', () => {\n  const text = textParagraph.textContent; // store content of p elements text\n  // const promise = new Promise();\n  // console.log(promise);  \n  if (navigator.clipboard) {\n    // feature detection - code only runs in browsers where navigator.clipboard is supported. if 'falsey' fallback code is executed\n    navigator.clipboard.writeText(text) // clipboard API returns a promise\n    .then(result => {\n      console.log(result);\n    }).catch(error => {\n      console.log(error);\n    });\n  } else {\n    // fallback code if feature (navigator API) is unavilable\n    alert('Feature not available...please copy manually!');\n  }\n});\n\n//# sourceURL=webpack://supportcode/./src/app.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("95c2d9b779e2012619fb")
/******/ })();
/******/ 
/******/ }
);