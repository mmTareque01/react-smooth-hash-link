"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HashLink = HashLink;

var _react = _interopRequireWildcard(require("react"));

var _useNavigation = require("./useNavigation");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HashLinks = /*#__PURE__*/function (_Component) {
  _inherits(HashLinks, _Component);

  var _super = _createSuper(HashLinks);

  function HashLinks() {
    _classCallCheck(this, HashLinks);

    return _super.apply(this, arguments);
  }

  _createClass(HashLinks, [{
    key: "scrollingEffect",
    value: function scrollingEffect() {
      if (window.location.hash) {
        var element = document.getElementById(window.location.hash.replace('#', ''));
        if (element) element.scrollIntoView({
          block: 'start',
          behavior: this.props.stopSmooth ? 'auto' : 'smooth'
        });
      }
    }
  }, {
    key: "hashNavigation",
    value: function hashNavigation(path) {
      this.props.navigateTo(path);
      this.scrollingEffect();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollingEffect();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollingEffect();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/_react["default"].createElement("div", {
        onClick: function onClick() {
          _this.hashNavigation(_this.props.to);
        },
        style: {
          cursor: 'pointer'
        },
        className: this.props.className
      }, this.props.menu);
    }
  }]);

  return HashLinks;
}(_react.Component);

function HashLink(_ref) {
  var to = _ref.to,
      menu = _ref.menu,
      _ref$stopSmooth = _ref.stopSmooth,
      stopSmooth = _ref$stopSmooth === void 0 ? false : _ref$stopSmooth,
      className = _ref.className;
  var navigateObj = (0, _useNavigation.useNavigation)();
  return /*#__PURE__*/_react["default"].createElement(HashLinks, {
    to: to,
    menu: menu,
    stopSmooth: stopSmooth,
    className: className,
    navigateTo: navigateObj
  });
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNavigation = useNavigation;

var _reactRouterDom = require("react-router-dom");

function useNavigation() {
  return (0, _reactRouterDom.useNavigate)();
}
