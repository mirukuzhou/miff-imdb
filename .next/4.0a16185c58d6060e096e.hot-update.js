webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);

var _jsxFileName = "/Users/molly.zhou/dev/miff-imdb/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var movies = __webpack_require__("./imdb_result.json");

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "3956523046",
        css: "div.container.jsx-3956523046{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:10px;}@media (min-width:600px){div.container.jsx-3956523046{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}div.poster.jsx-3956523046{margin-right:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCb0IsQUFHMEIsQUFNUSxBQUdELGtCQUNwQixtREFIQSxLQU5zQiw4RUFDSCxtQkFDckIiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21vbGx5Lnpob3UvZGV2L21pZmYtaW1kYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmNvbnN0IG1vdmllcyA9IHJlcXVpcmUoXCIuLi9pbWRiX3Jlc3VsdC5qc29uXCIpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgY29uc3QgcmV2aWV3ZWRfbW92aWV3cyA9IG1vdmllcy5maWx0ZXIobSA9PiBtLmltZGJSYXRpbmcgIT09ICdOL0EnKVxuICAgIGNvbnN0IHNvcnRlZF9tb3ZpZXMgPSBfLnNvcnRCeShyZXZpZXdlZF9tb3ZpZXdzLCBbJ2ltZGJSYXRpbmcnLCdpbWRiVm90ZXMnXSkucmV2ZXJzZSgpO1xuICAgIHJldHVybiB7IGRhdGE6IHNvcnRlZF9tb3ZpZXN9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICBkaXYuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdi5wb3N0ZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxoMT5NSUZGIC0gSU1EQiBSYXRpbmdzPC9oMT5cbiAgICAgICAge3RoaXMucHJvcHMuZGF0YS5tYXAoKGQsaSkgPT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGtleT17aX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RlclwiIHN0eWxlPXt7IGZsZXg6IDEsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ319PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17ZC5Qb3N0ZXJ9IHN0eWxlPXt7IGRpc3BsYXk6J2Jsb2NrJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnYXV0byd9fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDN9fT5cbiAgICAgICAgICAgICAgPGgxPntkLlRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6IDE4LCBmb250V2VpZ2h0OiA1MDB9fT57ZC5pbWRiUmF0aW5nfSBvdXQgb2Yge2QuaW1kYlZvdGVzfSB2b3RlczwvcD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57ZC5EaXJlY3Rvcn08L3NwYW4+IC8gPHNwYW4+e2QuUmVsZWFzZWR9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPHNwYW4+SU1EQiBsaW5rOiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vd3d3LmltZGIuY29tL3RpdGxlLyR7ZC5pbWRiSUR9YH0+e2QuaW1kYklEfTwvYT5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD57ZC5QbG90fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=pages/index.js */"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-3956523046"
      }, "MIFF - IMDB Ratings"), this.props.data.map(function (d, i) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          className: "jsx-3956523046" + " " + "container"
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          style: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          className: "jsx-3956523046" + " " + "poster"
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
          src: d.Poster,
          style: {
            display: 'block',
            width: '100%',
            height: 'auto'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          className: "jsx-3956523046"
        })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          style: {
            flex: 3
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          className: "jsx-3956523046"
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          className: "jsx-3956523046"
        }, d.Title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
          style: {
            fontSize: 18,
            fontWeight: 500
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          className: "jsx-3956523046"
        }, d.imdbRating, " out of ", d.imdbVotes, " votes"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          className: "jsx-3956523046"
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          className: "jsx-3956523046"
        }, d.Director), " / ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          className: "jsx-3956523046"
        }, d.Released)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          className: "jsx-3956523046"
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          className: "jsx-3956523046"
        }, "IMDB link: "), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
          href: "https://www.imdb.com/title/".concat(d.imdbID),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          className: "jsx-3956523046"
        }, d.imdbID)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          className: "jsx-3956523046"
        }, d.Plot)));
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var reviewed_moviews, sorted_movies;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // eslint-disable-next-line no-undef
                reviewed_moviews = movies.filter(function (m) {
                  return m.imdbRating !== 'N/A';
                });
                sorted_movies = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.sortBy(reviewed_moviews, ['imdbRating', 'imdbVotes']).reverse();
                return _context.abrupt("return", {
                  data: sorted_movies
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.0a16185c58d6060e096e.hot-update.js.map