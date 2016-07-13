webpackJsonp([1],{

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Created by 代佳玲 on 2016/7/13.
	 */
	/*使用AMD机制*/
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function(sum){
	    return console.log("1+2="+sum(1,2));
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },

/***/ 7:
/***/ function(module, exports) {

	/**
	 * Created by 代佳玲 on 2016/7/13.
	 */
	/*// module2.js，使用的是CommonJs机制导出包*/
	module.exports= function (a,b) {
	    return a+b;
	}

/***/ }

});