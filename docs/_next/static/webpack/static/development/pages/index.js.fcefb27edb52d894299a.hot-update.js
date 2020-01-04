webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./assets/VectorImages.tsx":
/*!*********************************!*\
  !*** ./assets/VectorImages.tsx ***!
  \*********************************/
/*! exports provided: WVectorImageDOMConverter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WVectorImageDOMConverter", function() { return WVectorImageDOMConverter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\wldh.g\\Desktop\\wldh-www\\src\\assets\\VectorImages.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* Type Definition */

;
;
;
/* Converter */

var WVectorImageDOMConverter = function WVectorImageDOMConverter(vi) {
  var viewbox = "0 0 ".concat(vi.width, " ").concat(vi.height);
  var vectors = vi.vectors.map(function (vec, idx) {
    var element;

    switch (vec.type) {
      case 'path':
        element = __jsx("path", {
          d: vec.data,
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        });
        break;
    }

    return element;
  });
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: vi.width,
    height: vi.height,
    viewBox: viewbox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, vectors);
};
/* Vector Images */

var VectorImages = {
  wldh: {
    width: 225,
    height: 225,
    vectors: [{
      type: 'path',
      data: 'm 62.2531 195.965 c -6.77325 0.954407 -13.6828 -3.90832 -15.6099 -10.2697 c -0.508789 -4.79114 0.895611 -9.37938 3.92307 -13.2973 c 3.74917 -4.85194 8.50735 -8.45125 13.201 -12.2038 c -17.4105 -15.8142 -30.1018 -36.2512 -38.5992 -58.0687 c -3.7655 -9.26949 -5.95485 -19.1194 -8.18191 -28.8482 c -1.75697 -8.80379 -2.19757 -17.77 -1.25495 -26.6941 c 0.685751 -6.28266 1.87233 -14.1318 8.18108 -17.1484 c 4.87196 -2.1798 8.3207 2.91237 9.63991 7.62412 c 2.95223 10.5443 6.71136 20.8551 11.1812 30.886 c 6.08284 15.8405 14.0144 31.0339 23.7906 44.9123 c 6.61678 8.98366 14.5027 17.3715 23.3623 23.9841 c 2.67021 -2.39134 5.22746 -5.31415 7.56217 -8.15787 c -10.4808 -9.81097 -19.5873 -20.9042 -28.2728 -32.3016 c -5.53772 -7.42009 -12.007 -14.4747 -15.5175 -23.1224 c -2.43471 -6.57686 -0.227062 -14.696 5.97366 -18.2724 c 5.85519 -3.96976 13.5412 -1.81926 18.5948 2.93448 c 6.47869 6.0943 13.5772 12.7297 20.3293 18.5578 c 7.44698 6.42799 15.3106 11.1639 23.2137 17.0247 c 2.8605 -6.1085 6.60159 -11.8789 7.82022 -18.5973 c 1.51298 -5.00284 3.52585 -10.7546 9.11749 -12.3375 c 4.1609 -0.896957 8.76012 0.192551 11.4665 3.71606 c 6.05576 6.2112 6.49695 15.7372 5.97734 23.8797 c -0.492935 7.72453 -3.31813 15.0936 -5.57481 22.4632 c 12.6801 7.51446 26.6991 12.6855 40.8546 16.743 c 8.34241 2.5563 15.2773 9.84836 16.1428 18.7039 c 1.75478 12.4378 -9.63647 24.7019 -22.2143 23.7122 c -11.4842 -0.232361 -22.3822 -4.71947 -33.0367 -8.64645 c -8.15671 -3.4055 -16.1442 -7.30788 -23.7558 -11.8129 c -2.62269 2.96549 -5.26968 5.90935 -7.90379 8.86467 c 3.86825 4.05698 8.81584 7.76958 9.43112 13.7756 c 1.5126 8.51373 -7.37437 15.3682 -15.5682 14.7828 c -7.34094 -0.524414 -14.247 -2.9054 -20.8736 -5.77805 c -8.30789 5.26269 -17.157 9.9082 -26.7197 12.2967 c -2.21996 0.357452 -4.42409 0.695282 -6.67976 0.695251 Z'
    }]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (VectorImages);

/***/ })

})
//# sourceMappingURL=index.js.fcefb27edb52d894299a.hot-update.js.map