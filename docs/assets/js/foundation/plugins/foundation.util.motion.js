(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./foundation.core"), require("./foundation.core.utils"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["./foundation.core", "./foundation.core.utils", "jquery"], factory);
	else if(typeof exports === 'object')
		exports["foundation.util.motion"] = factory(require("./foundation.core"), require("./foundation.core.utils"), require("jquery"));
	else
		root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.util.motion"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["jQuery"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE__foundation_core_utils__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./foundation.core":
/*!****************************************************************************************************************************************************************!*\
  !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.core"],"amd":"./foundation.core","commonjs":"./foundation.core","commonjs2":"./foundation.core"} ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_core__;

/***/ }),

/***/ "./foundation.core.utils":
/*!**********************************************************************************************************************************************************************************!*\
  !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.core"],"amd":"./foundation.core.utils","commonjs":"./foundation.core.utils","commonjs2":"./foundation.core.utils"} ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_core_utils__;

/***/ }),

/***/ "./js/entries/plugins/foundation.util.motion.js":
/*!******************************************************!*\
  !*** ./js/entries/plugins/foundation.util.motion.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Foundation", {
  enumerable: true,
  get: function get() {
    return _foundation.Foundation;
  }
});
Object.defineProperty(exports, "Motion", {
  enumerable: true,
  get: function get() {
    return _foundationUtil.Motion;
  }
});
Object.defineProperty(exports, "Move", {
  enumerable: true,
  get: function get() {
    return _foundationUtil.Move;
  }
});

var _foundation = __webpack_require__(/*! ./foundation.core */ "./foundation.core");

var _foundationUtil = __webpack_require__(/*! ../../foundation.util.motion */ "./js/foundation.util.motion.js");

_foundation.Foundation.Motion = _foundationUtil.Motion;
_foundation.Foundation.Move = _foundationUtil.Move;

/***/ }),

/***/ "./js/foundation.util.motion.js":
/*!**************************************!*\
  !*** ./js/foundation.util.motion.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Move = Move;
exports.Motion = void 0;

var _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ "jquery"));

var _foundationCore = __webpack_require__(/*! ./foundation.core.utils */ "./foundation.core.utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Motion module.
 * @module foundation.motion
 */
var initClasses = ['mui-enter', 'mui-leave'];
var activeClasses = ['mui-enter-active', 'mui-leave-active'];
var Motion = {
  animateIn: function animateIn(element, animation, cb) {
    animate(true, element, animation, cb);
  },
  animateOut: function animateOut(element, animation, cb) {
    animate(false, element, animation, cb);
  }
};
exports.Motion = Motion;

function Move(duration, elem, fn) {
  var anim,
      prog,
      start = null; // console.log('called');

  if (duration === 0) {
    fn.apply(elem);
    elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
    return;
  }

  function move(ts) {
    if (!start) start = ts; // console.log(start, ts);

    prog = ts - start;
    fn.apply(elem);

    if (prog < duration) {
      anim = window.requestAnimationFrame(move, elem);
    } else {
      window.cancelAnimationFrame(anim);
      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
    }
  }

  anim = window.requestAnimationFrame(move);
}
/**
 * Animates an element in or out using a CSS transition class.
 * @function
 * @private
 * @param {Boolean} isIn - Defines if the animation is in or out.
 * @param {Object} element - jQuery or HTML object to animate.
 * @param {String} animation - CSS class to use.
 * @param {Function} cb - Callback to run when animation is finished.
 */


function animate(isIn, element, animation, cb) {
  element = (0, _jquery.default)(element).eq(0);
  if (!element.length) return;
  var initClass = isIn ? initClasses[0] : initClasses[1];
  var activeClass = isIn ? activeClasses[0] : activeClasses[1]; // Set up the animation

  reset();
  element.addClass(animation).css('transition', 'none');
  requestAnimationFrame(function () {
    element.addClass(initClass);
    if (isIn) element.show();
  }); // Start the animation

  requestAnimationFrame(function () {
    element[0].offsetWidth;
    element.css('transition', '').addClass(activeClass);
  }); // Clean up the animation when it finishes

  element.one((0, _foundationCore.transitionend)(element), finish); // Hides the element (for out animations), resets the element, and runs a callback

  function finish() {
    if (!isIn) element.hide();
    reset();
    if (cb) cb.apply(element);
  } // Resets transitions and removes motion-specific classes


  function reset() {
    element[0].style.transitionDuration = 0;
    element.removeClass("".concat(initClass, " ").concat(activeClass, " ").concat(animation));
  }
}

/***/ }),

/***/ 25:
/*!************************************************************!*\
  !*** multi ./js/entries/plugins/foundation.util.motion.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.util.motion.js */"./js/entries/plugins/foundation.util.motion.js");


/***/ }),

/***/ "jquery":
/*!********************************************************************************************!*\
  !*** external {"root":["jQuery"],"amd":"jquery","commonjs":"jquery","commonjs2":"jquery"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ })

/******/ });
});
//# sourceMappingURL=foundation.util.motion.js.map