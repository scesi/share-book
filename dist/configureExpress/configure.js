"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import routes from './routes/index.js'
var app = (0, _express["default"])();
exports.app = app;
app.set('port', process.env.PORT || 4000); // app.use(routes);