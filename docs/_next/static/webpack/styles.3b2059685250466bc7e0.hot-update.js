webpackHotUpdate("styles",{

/***/ "./components/BackStage/style.scss":
/*!*****************************************!*\
  !*** ./components/BackStage/style.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"_3ta5w3a","header":"_3r13Kdy","main":"_3Vu-Ty7","footer":"_2X6tdLw","blhx":"UOeKicL"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1578174494800");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.3b2059685250466bc7e0.hot-update.js.map