"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var router = (0, _express.Router)();
router.get('/book', function (req, res) {
  res.send('welcome to my Api');
});
router.get('/', function (req, res) {
  res.send('welcome to share-book');
});
var _default = router;
exports["default"] = _default;