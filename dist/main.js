/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var Count = __webpack_require__(/*! ./scripts/count */ \"./src/scripts/count.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  // DOM elements to grap from page\n  var count = document.getElementById('count');\n  var clicker = document.getElementById('clicker');\n  var reset = document.getElementById('reset');\n  var count_obj = new Count();\n  count.innerText = count_obj.value();\n  clicker.addEventListener('click', function (e) {\n    e.preventDefault();\n    count_obj.increment();\n    count.innerText = count_obj.value();\n  });\n  reset.addEventListener('click', function (e) {\n    e.preventDefault();\n    count_obj.reset();\n    count.innerText = count_obj.value();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLCtDQUFELENBQXJCOztBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0VBQ2hEO0VBQ0EsSUFBTUMsS0FBSyxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZDtFQUNBLElBQU1DLE9BQU8sR0FBR0osUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQWhCO0VBQ0EsSUFBTUUsS0FBSyxHQUFHTCxRQUFRLENBQUNHLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZDtFQUVBLElBQU1HLFNBQVMsR0FBRyxJQUFJUixLQUFKLEVBQWxCO0VBRUFJLEtBQUssQ0FBQ0ssU0FBTixHQUFrQkQsU0FBUyxDQUFDRSxLQUFWLEVBQWxCO0VBRUFKLE9BQU8sQ0FBQ0gsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBQVEsQ0FBQyxFQUFJO0lBQ25DQSxDQUFDLENBQUNDLGNBQUY7SUFDQUosU0FBUyxDQUFDSyxTQUFWO0lBQ0FULEtBQUssQ0FBQ0ssU0FBTixHQUFrQkQsU0FBUyxDQUFDRSxLQUFWLEVBQWxCO0VBQ0gsQ0FKRDtFQU1BSCxLQUFLLENBQUNKLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFVBQUFRLENBQUMsRUFBSTtJQUNqQ0EsQ0FBQyxDQUFDQyxjQUFGO0lBQ0FKLFNBQVMsQ0FBQ0QsS0FBVjtJQUNBSCxLQUFLLENBQUNLLFNBQU4sR0FBa0JELFNBQVMsQ0FBQ0UsS0FBVixFQUFsQjtFQUNILENBSkQ7QUFNSCxDQXRCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdW50ZXIvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb3VudCA9IHJlcXVpcmUoJy4vc2NyaXB0cy9jb3VudCcpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgLy8gRE9NIGVsZW1lbnRzIHRvIGdyYXAgZnJvbSBwYWdlXG4gICAgY29uc3QgY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKTtcbiAgICBjb25zdCBjbGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWNrZXInKTtcbiAgICBjb25zdCByZXNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldCcpO1xuXG4gICAgY29uc3QgY291bnRfb2JqID0gbmV3IENvdW50KCk7XG5cbiAgICBjb3VudC5pbm5lclRleHQgPSBjb3VudF9vYmoudmFsdWUoKTtcblxuICAgIGNsaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb3VudF9vYmouaW5jcmVtZW50KCk7XG4gICAgICAgIGNvdW50LmlubmVyVGV4dCA9IGNvdW50X29iai52YWx1ZSgpO1xuICAgIH0pO1xuXG4gICAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb3VudF9vYmoucmVzZXQoKTtcbiAgICAgICAgY291bnQuaW5uZXJUZXh0ID0gY291bnRfb2JqLnZhbHVlKClcbiAgICB9KTtcblxufSkiXSwibmFtZXMiOlsiQ291bnQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY291bnQiLCJnZXRFbGVtZW50QnlJZCIsImNsaWNrZXIiLCJyZXNldCIsImNvdW50X29iaiIsImlubmVyVGV4dCIsInZhbHVlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5jcmVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/count.js":
/*!******************************!*\
  !*** ./src/scripts/count.js ***!
  \******************************/
/***/ ((module) => {

eval("function Count() {\n  this.count = 0;\n}\n\nCount.prototype.increment = function () {\n  this.count += 1;\n};\n\nCount.prototype.reset = function () {\n  this.count = 0;\n};\n\nCount.prototype.value = function () {\n  return this.count;\n};\n\nmodule.exports = Count;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jb3VudC5qcy5qcyIsIm5hbWVzIjpbIkNvdW50IiwiY291bnQiLCJwcm90b3R5cGUiLCJpbmNyZW1lbnQiLCJyZXNldCIsInZhbHVlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291bnRlci8uL3NyYy9zY3JpcHRzL2NvdW50LmpzPzQyMWYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQ291bnQgKCkge1xuICAgIHRoaXMuY291bnQgPSAwXG59XG5cbkNvdW50LnByb3RvdHlwZS5pbmNyZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jb3VudCArPSAxO1xufVxuXG5Db3VudC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jb3VudCA9IDA7XG59XG5cbkNvdW50LnByb3RvdHlwZS52YWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5jb3VudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb3VudDsiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLEtBQVQsR0FBa0I7RUFDZCxLQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNIOztBQUVERCxLQUFLLENBQUNFLFNBQU4sQ0FBZ0JDLFNBQWhCLEdBQTRCLFlBQVk7RUFDcEMsS0FBS0YsS0FBTCxJQUFjLENBQWQ7QUFDSCxDQUZEOztBQUlBRCxLQUFLLENBQUNFLFNBQU4sQ0FBZ0JFLEtBQWhCLEdBQXdCLFlBQVk7RUFDaEMsS0FBS0gsS0FBTCxHQUFhLENBQWI7QUFDSCxDQUZEOztBQUlBRCxLQUFLLENBQUNFLFNBQU4sQ0FBZ0JHLEtBQWhCLEdBQXdCLFlBQVk7RUFDaEMsT0FBTyxLQUFLSixLQUFaO0FBQ0gsQ0FGRDs7QUFJQUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCUCxLQUFqQiJ9\n//# sourceURL=webpack-internal:///./src/scripts/count.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3VudGVyLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;