"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNavigation = useNavigation;

var _reactRouterDom = require("react-router-dom");

function useNavigation() {
  return (0, _reactRouterDom.useNavigate)();
}
