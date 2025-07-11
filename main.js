/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;         \n    padding: 0;    \n    box-sizing: border-box; \n}\nbody {\n    font-family: 'Arial', sans-serif; \n    background-color: #f4f4f4; \n    color: #333;            \n    line-height: 1.6;       \n    min-height: 100vh;      \n    display: flex;         \n    flex-direction: column;  \n    align-items: center;     \n}\nheader {\n    background-color: #556B2F; \n    color: #ECF0F1;          \n    padding: 1.5rem 0;      \n    width: 100%;             \n    text-align: center;   \n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1000;\n}\nnav {\n    display: flex;        \n    justify-content: center;   \n    gap: 20px;                \n    margin-top: 0.5rem;  \n    justify-content: center;\n    align-items:center;    \n}\nnav button {\n    background-color: #6B8E23; \n    color: #F8F8F8;            \n    border: 2px solid #8B4513;\n    padding: 1rem 2rem;      \n    border-radius: 8px;       \n    cursor: pointer;           \n    font-size: 1.2em;      \n    font-weight: bold;       \n    transition: background-color 0.3s ease, border-color 0.3s ease;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\nnav button:hover {\n    background-color: #8B4513; \n    border-color: #556B2F;    \n    transform: translateY(-2px); \n}\nnav button.active {\n    background-color: #A0522D; \n    border-color: #556B2F;\n    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5); \n    color: #FFDAB9; \n}\n#content {\n    background-color: #F8F8F8; \n    width: 100%;\n    max-width: 900px; \n    margin: 2rem auto; \n    padding: 2rem;\n    border-radius: 10px; \n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); \n    flex-grow: 1; \n    text-align: center; \n    overflow: hidden; \n    padding-top: 100px;\n}\n.home-container {\n    display: flex;         \n    flex-direction: column; \n    align-items: center;   \n    gap: 1.5rem;          \n    padding: 1rem 0;      \n}\n.home-title {\n    color: #8B4513; \n    font-size: 3em;\n    margin-bottom: 0.5rem; \n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n}\n.home-description,\n.hours-legend,\n.location-description {\n    font-size: 1.1em;\n    color: #696969;\n    max-width: 700px; \n    line-height: 1.8; \n    margin-bottom: 1.5rem; \n}\n.home-hours,\n.home-location {\n    color: #556B2F; \n    font-size: 2em;\n    margin-top: 1.5rem; \n    margin-bottom: 0.5rem;\n}\n.home-title, \n.description, \n.hours-legend {\n    border-bottom: 1px solid #C0C0C0; \n    padding-bottom: 1.5rem; \n    margin-bottom: 1.5rem; \n    width: 80%; \n    max-width: 600px; \n    margin-left: auto; \n    margin-right: auto; \n}\n.home-description {\n    border-bottom: 1px solid #C0C0C0; \n    padding-bottom: 1.5rem;\n    margin-bottom: 1.5rem;\n    width: 80%;\n    max-width: 600px;\n    margin-left: auto;\n    margin-right: auto;\n}\n.home-container *:last-child {\n    border-bottom: none;\n    margin-bottom: 0;\n    padding-bottom: 0;\n}\n.menu-container {\n    display: flex;             \n    flex-direction: column;    \n    align-items: center;      \n    gap: 2.5rem;               \n    padding: 1rem 0;           \n}\n.menu-container .menu {\n    color: #8B4513; \n    font-size: 3.2em;\n    margin-bottom: 2.5rem; \n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n}\n.rice-container,\n.rice-beans-container,\n.pasta-container {\n    background-color: #ECEFF1;\n    border: 2px solid #A0522D; \n    border-radius: 12px;       \n    padding: 2rem;            \n    width: 90%;                \n    max-width: 600px;          \n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25); \n    text-align: center;        \n    transition: transform 0.3s ease, box-shadow 0.3s ease; \n}\n.rice-container:hover,\n.rice-beans-container:hover,\n.pasta-container:hover {\n    transform: translateY(-5px); \n    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);\n    border-color: #556B2F; \n}\n.rice-title,\n.rice-beans-title,\n.pasta-title {\n    color: #696969; \n    font-size: 2.2em;\n    margin-bottom: 1rem;\n    text-transform: uppercase; \n}\n.rice,\n.rice-beans,\n.pasta {\n    font-size: 1.1em;\n    color: #777; \n    margin-bottom: 1.5rem;\n    line-height: 1.7;\n    font-style: italic; \n}\n.rice-price,\n.rice-beans-price,\n.pasta-price {\n    font-size: 2.8em; \n    font-weight: bold; \n    color: #d9534f;\n    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);\n    margin-top: 1.5rem; \n}\n.about-container {\n    display: flex;          \n    flex-direction: column; \n    align-items: center;    \n    padding: 2rem;          \n    gap: 1.5rem;            \n}\n.about-title {\n    color: #8B4513; \n    font-size: 3em;         \n    margin-bottom: 1rem;   \n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    text-align: center;     \n}\n.about-description {\n    font-size: 1.2em;     \n    color: #696969;         \n    max-width: 750px;       \n    line-height: 1.8;      \n    text-align: justify;    \n    padding: 0 1rem;        \n}\n.about-container::after {\n    content: \"Nunca volte depois da primeira vez!\";\n    display: block;\n    margin-top: 3rem;\n    font-size: 1.5em;\n    font-weight: bold;\n    color: #A0522D; \n    border: 2px dashed #A0522D;\n    padding: 1rem 2rem;\n    border-radius: 5px;\n    background-color: #FFF0F5;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    animation: pulse 2s infinite alternate; \n}\n@keyframes pulse {\n    from {\n        transform: scale(1);\n        opacity: 1;\n    }\n    to {\n        transform: scale(1.02);\n        opacity: 0.9;\n    }\n}\n.complaints-container {\n    display: flex;            \n    flex-direction: column;    \n    align-items: center;       \n    padding: 2rem;             \n    gap: 2rem;                \n}\n.form-title {\n    color: #8B4513; \n    font-size: 3em;\n    margin-bottom: 1.5rem; \n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    text-align: center;\n}\n.complaints-container .form { \n    background-color: #ECEFF1; \n    border: 2px solid #A0522D; \n    border-radius: 12px;       \n    padding: 2.5rem;           \n    width: 90%;                \n    max-width: 650px;          \n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25); \n    display: flex;            \n    flex-direction: column;   \n    gap: 1.5rem;              \n}\n.form-group {\n    display: flex; \n    flex-direction: column; \n    gap: 0.5rem;        \n    margin-bottom: 1rem;    \n}\n.form-group label {\n    display: block;        \n    margin-bottom: 0.6rem;   \n    font-weight: bold;    \n    color: #556B2F;          \n    font-size: 1.1em;\n}\n.form-group input[type=\"text\"],\n.form-group textarea {\n    width: 100%;             \n    padding: 1rem;           \n    border: 1px solid #C0C0C0; \n    border-radius: 6px;      \n    font-size: 1.1em;       \n    color: #333;           \n    background-color: #F8F8F8; \n    transition: border-color 0.3s ease, box-shadow 0.3s ease;\n}\n.form-group input[type=\"text\"]:focus,\n.form-group textarea:focus {\n    border-color: #DDA0DD;\n    box-shadow: 0 0 0 3px rgba(221, 160, 221, 0.5); \n    outline: none;           \n}\n.form-group input::placeholder,\n.form-group textarea::placeholder {\n    color: #A9A9A9;         \n    font-style: italic;     \n}\n.submit-btn {\n    background-color: #A0522D; \n    color: #F8F8F8;           \n    border: none;              \n    padding: 1.2rem 2.5rem;    \n    border-radius: 8px;        \n    cursor: pointer;           \n    font-size: 1.4em;          \n    font-weight: bold;        \n    margin-top: 2rem;          \n    transition: background-color 0.3s ease, transform 0.2s ease; \n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); \n}\n.submit-btn:hover {\n    background-color: #8B4513; \n    transform: translateY(-2px); \n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAbout: () => (/* binding */ createAbout)\n/* harmony export */ });\nfunction createAbout() {\n    const aboutContainer = document.createElement('div');\n    aboutContainer.classList.add('about-container');\n\n    const aboutTitle = document.createElement('h1');\n    aboutTitle.textContent = \"About Our Restaurant and Services\";\n    aboutTitle.classList.add('about-title');\n\n    const aboutDescription = document.createElement('p');\n    aboutDescription.textContent = \"In our restaurant no one have rights, here the waiter can be rude with you and you can't complaim about it, but you can't be rude with our team, we work too much to serve you the worst service and the worst food you can find in this country. So just ask for your plate eat, or not, and go away, we don't like you. Our slogan is: Never come back after the first time!\"\n    aboutDescription.classList.add('about-description');\n\n    aboutContainer.appendChild(aboutTitle);\n    aboutContainer.appendChild(aboutDescription);\n\n    return aboutContainer;\n}\n\n\n//# sourceURL=webpack://odin-restaurant/./src/about.js?\n}");

/***/ }),

/***/ "./src/complaints.js":
/*!***************************!*\
  !*** ./src/complaints.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createComplaints: () => (/* binding */ createComplaints)\n/* harmony export */ });\nfunction createComplaints() {\n    const complaintsContainer = document.createElement(\"div\");\n    complaintsContainer.classList.add(\"complaints-container\");\n\n    const formTitle = document.createElement(\"h2\");\n    formTitle.textContent = \"Here you can make your Complaint\";\n    formTitle.classList.add(\"form-title\");\n\n    //that's the form to make the complaint about the restaurant\n    const form = document.createElement(\"form\");\n    form.classList.add(\"form\");\n    form.action = \"#\";\n    form.method = \"GET\";\n\n    //here will be the label and input fields\n    const enterContainer = document.createElement(\"div\");\n    enterContainer.classList.add(\"form-group\");\n\n    const nameLabel = document.createElement(\"label\");\n    nameLabel.textContent = \"Your Name:\";\n    nameLabel.htmlFor = \"complaintName\";\n    \n    const nameInput = document.createElement(\"input\");\n    nameInput.type = \"text\";\n    nameInput.id = \"complaintName\";\n    nameInput.name = \"name\";\n    nameInput.placeholder = \"Karen BlaBlaBla\";\n    nameInput.required = true;\n    \n    //text area\n    const textContainer = document.createElement(\"div\");\n    textContainer.classList.add(\"form-group\");\n\n    const textAreaLabel = document.createElement(\"label\");\n    textAreaLabel.textContent = \"Your Complaint:\";\n    textAreaLabel.htmlFor = \"complaintMessage\";\n\n    const textArea = document.createElement(\"textarea\");\n    textArea.id = \"complaintMessage\";\n    textArea.name = \"message\";\n    textArea.rows = 5;\n    textArea.placeholder = \"Here you can Cry a lot! No one cares.\";\n    textArea.maxLength = 200;\n    textArea.required = true;\n    \n    //submit button\n    const submitButton = document.createElement(\"button\");\n    submitButton.type = \"submit\";\n    submitButton.textContent = \"I cried! Please Hear me out :(\";\n    submitButton.classList.add(\"submit-btn\");\n\n    //alert message when submit\n    form.addEventListener('submit', (event) => {\n        event.preventDefault();\n        alert(\"Do you really think we care about your complaint. Oh god please!\");\n        form.reset();\n    });\n\n    //others containers\n    enterContainer.appendChild(nameLabel); //label of the form\n    enterContainer.appendChild(nameInput); //input of the form\n    form.appendChild(enterContainer);  //container of the form\n    textContainer.appendChild(textAreaLabel);\n    textContainer.appendChild(textArea);\n    form.appendChild(textContainer);\n    form.appendChild(submitButton);\n\n    //main containter\n    complaintsContainer.appendChild(formTitle);\n    complaintsContainer.appendChild(form);\n\n\n    return complaintsContainer;\n}\n\n\n//# sourceURL=webpack://odin-restaurant/./src/complaints.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage)\n/* harmony export */ });\nfunction createHomePage() {\n    const homeContainer = document.createElement('div');\n    homeContainer.classList.add('home-container');\n\n    const homeTitle = document.createElement('h1');\n    homeTitle.textContent = \"Welcome to Our Maybe Not That Good Restaurant\";\n    homeTitle.classList.add('home-title');\n\n    const description = document.createElement('p');\n    description.textContent = \"Here you can find some food, it didn't said GOOD food, it's just food so do your choice and please don't call our manager! (PS: he wants to find another job so he doesn't care about your complainments\";\n    description.classList.add('home-description');\n\n    const hours = document.createElement('h2');\n    hours.textContent = \"Our Hours:\";\n    hours.classList.add('home-hours');\n\n    const hoursLegend = document.createElement('p');\n    hoursLegend.textContent = \"If our restaurant is still operating or opened\";\n    hoursLegend.classList.add('hours-legend');\n\n    const location = document.createElement('h2');\n    location.textContent = \"Location:\";\n    location.classList.add('home-location');\n\n    const locationDescription = document.createElement('p');\n    locationDescription.textContent = \"Your DON'T want to come here to eat. Please GO AWAY\";\n    locationDescription.classList.add('location-description');\n\n    homeContainer.appendChild(homeTitle);\n    homeContainer.appendChild(description);\n    homeContainer.appendChild(hours);\n    homeContainer.appendChild(hoursLegend);\n    homeContainer.appendChild(location);\n    homeContainer.appendChild(locationDescription);\n\n    return homeContainer;\n}\n\n\n//# sourceURL=webpack://odin-restaurant/./src/home.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _complaints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complaints */ \"./src/complaints.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const contentDiv = document.getElementById(\"content\");\n    const homeButton = document.getElementById(\"homebtn\");\n    const menuButton = document.getElementById(\"menubtn\");\n    const aboutButton = document.getElementById(\"aboutbtn\");\n    const complaintsButton = document.getElementById(\"complaintsbtn\");\n\n    //function to help clean the content and reaload\n    function loadAndDsiplayContent(pageCreatorFunction, activeButton) {\n        const allNavButtons = document.querySelectorAll(\"nav button\");\n        allNavButtons.forEach(button => {\n            button.classList.remove(\"active\");\n        });\n        \n        contentDiv.innerHTML = \"\";\n        contentDiv.appendChild(pageCreatorFunction());\n\n        if (activeButton) {\n            activeButton.classList.add(\"active\");\n        }\n    }\n\n    //load the home page everytime the page get reloaded or opened\n    loadAndDsiplayContent(_home__WEBPACK_IMPORTED_MODULE_0__.createHomePage, homeButton);\n\n    //event listeners to each button\n    homeButton.addEventListener('click', () =>  {\n        loadAndDsiplayContent(_home__WEBPACK_IMPORTED_MODULE_0__.createHomePage, homeButton);\n    });\n    menuButton.addEventListener('click', () => {\n        loadAndDsiplayContent(_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu, menuButton);\n    });\n    aboutButton.addEventListener('click', () => {\n        loadAndDsiplayContent(_about__WEBPACK_IMPORTED_MODULE_2__.createAbout, aboutButton);\n    });\n    complaintsButton.addEventListener('click', () => {\n        loadAndDsiplayContent(_complaints__WEBPACK_IMPORTED_MODULE_3__.createComplaints, complaintsButton);\n    });\n});\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu() {\n    const menuContainer = document.createElement('div');\n    menuContainer.classList.add('menu-container');\n\n    const menu = document.createElement('h1');\n    menu.textContent = \"Menu:\";\n    menu.classList.add('menu');\n\n    //rice container description and price\n    const riceContainer = document.createElement('div');\n    riceContainer.classList.add('rice-container');\n\n    const riceTitle = document.createElement('h2');\n    riceTitle.textContent = \"Rice:\";\n    riceTitle.classList.add('rice-title');\n    \n    const rice = document.createElement('p');\n    rice.textContent = \"Just a plate with Rice, beacuse of that it's so cheap.\";\n    rice.classList.add('rice');\n\n    const ricePrice = document.createElement('p');\n    ricePrice.textContent = \"$0.20\";\n    ricePrice.classList.add('rice-price');\n\n    //rice and beans container description and price\n    const riceBeansContainer = document.createElement('div');\n    riceBeansContainer.classList.add('rice-beans-container');\n\n    const riceBeansTitle = document.createElement('h2');\n    riceBeansTitle.textContent = \"Rice and Beans:\";\n    riceBeansTitle.classList.add('rice-beans-title');\n\n    const riceBeans = document.createElement('p');\n    riceBeans.textContent = \"A plate with Rice and Beans, only this. Sorry.\";\n    riceBeans.classList.add('rice-beans');\n\n    const riceBeansPrice = document.createElement('p');\n    riceBeansPrice.textContent = \"$0.40\";\n    riceBeansPrice.classList.add('rice-beans-price');\n\n    //pasta container description and price\n    const pastaContainer = document.createElement('div');\n    pastaContainer.classList.add('pasta-container');\n\n    const pastaTitle = document.createElement('h2');\n    pastaTitle.textContent = \"Pasta:\";\n    pastaTitle.classList.add('pasta-title');\n\n    const pasta = document.createElement('p');\n    pasta.textContent = \"Our best plate, but not of the taste, just because come with more quantity. Never someone bough it.\";\n    pasta.classList.add('pasta');\n\n    const pastaPrice = document.createElement('p');\n    pastaPrice.textContent = \"$1.500,69\";\n    pastaPrice.classList.add('pasta-price');\n    \n    //put the itens inside each div\n    riceContainer.appendChild(riceTitle);\n    riceContainer.appendChild(rice);\n    riceContainer.appendChild(ricePrice);\n\n    riceBeansContainer.appendChild(riceBeansTitle);\n    riceBeansContainer.appendChild(riceBeans);\n    riceBeansContainer.appendChild(riceBeansPrice);\n\n    pastaContainer.appendChild(pastaTitle);\n    pastaContainer.appendChild(pasta);\n    pastaContainer.appendChild(pastaPrice);\n\n    //now add all the containers of the menu inside the menucontainer\n    menuContainer.appendChild(riceContainer);\n    menuContainer.appendChild(riceBeansContainer);\n    menuContainer.appendChild(pastaContainer);\n\n    return menuContainer;\n}\n\n\n//# sourceURL=webpack://odin-restaurant/./src/menu.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/styles.css?\n}");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;