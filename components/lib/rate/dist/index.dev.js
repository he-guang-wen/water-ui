"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rate = _interopRequireDefault(require("./src/rate.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_rate["default"].install = function (Vue) {
  Vue.components(_rate["default"].name, _rate["default"]);
};

var _default = _rate["default"];
exports["default"] = _default;