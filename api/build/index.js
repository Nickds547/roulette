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

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.config = void 0;\r\nexports.config = {\r\n    tokenSecret: process.env.TOKEN_SECRET || \"mySuperSecretTokenPlzDontHack\",\r\n    port: process.env.PORT || 3000,\r\n    databaseURL: process.env.DATABASE\r\n};\r\n\n\n//# sourceURL=webpack://api/./src/config.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar config_1 = __webpack_require__(/*! ./config */ \"./src/config.ts\");\r\nvar routes = __webpack_require__(/*! ./routes/index */ \"./src/routes/index.ts\");\r\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\r\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\r\nvar Db_1 = __webpack_require__(/*! ./service/Db */ \"./src/service/Db.ts\");\r\ndotenv.config();\r\nglobal.db = Db_1[\"default\"];\r\nvar app = express();\r\napp.use(bodyParser.json());\r\napp.get('/user', routes.userRouter);\r\napp.listen(config_1.config.port, function () {\r\n    console.log('server running on PORT:' + config_1.config.port);\r\n});\r\n\n\n//# sourceURL=webpack://api/./src/index.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.userRouter = void 0;\r\nvar userRoutes_1 = __webpack_require__(/*! ./userRoutes */ \"./src/routes/userRoutes.ts\");\r\nexports.userRouter = userRoutes_1.userRouter;\r\n\n\n//# sourceURL=webpack://api/./src/routes/index.ts?");

/***/ }),

/***/ "./src/routes/userRoutes.ts":
/*!**********************************!*\
  !*** ./src/routes/userRoutes.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.userRouter = void 0;\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nexports.userRouter = express.Router({ mergeParams: true });\r\nexports.userRouter.get('/login', function () { return console.log(\"In Login Route\"); });\r\nexports.userRouter.get(\"*\", function () { return console.log(\"In Default Route\"); });\r\n\n\n//# sourceURL=webpack://api/./src/routes/userRoutes.ts?");

/***/ }),

/***/ "./src/service/Db.ts":
/*!***************************!*\
  !*** ./src/service/Db.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar mongodb_1 = __webpack_require__(/*! mongodb */ \"mongodb\");\r\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/config.ts\");\r\nvar db = new mongodb_1.MongoClient(config_1.config.databaseURL);\r\ndb.connect(function (err) {\r\n    if (err)\r\n        throw err;\r\n    console.log(\"Connected To MongoDB\");\r\n});\r\nexports[\"default\"] = db;\r\n\n\n//# sourceURL=webpack://api/./src/service/Db.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;