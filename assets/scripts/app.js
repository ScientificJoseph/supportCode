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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (function() {

eval("var button = document.querySelector('button');\nvar textParagraph = document.querySelector('p');\nbutton.addEventListener('click', function () {\n  var text = textParagraph.textContent; // store content of p elements text\n  if (navigator.clipboard) {\n    // feature detection - if 'falsey' fallback code is executed\n    navigator.clipboard.writeText(text) // clipboard API returns a promise\n    .then(function (result) {\n      console.log(result);\n    }).catch(function (error) {\n      console.log(error);\n    });\n  } else {\n    // fallback code if feature (navigator API) is unavilable\n    alert('Feature not available...please copy manually!');\n  }\n});\n\n//# sourceURL=webpack://supportcode/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;