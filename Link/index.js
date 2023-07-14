function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import "./style/index.scss";
import React, { forwardRef } from "react";
import classNames from "classnames";
var Link = /*#__PURE__*/forwardRef(function (props, ref) {
  var _classNames;
  var href = props.href,
    _props$className = props.className,
    className = _props$className === void 0 ? "" : _props$className,
    children = props.children,
    underline = props.underline,
    _props$type = props.type,
    type = _props$type === void 0 ? "primary" : _props$type,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled;
  var classes = classNames("e-link", className, (_classNames = {}, _defineProperty(_classNames, "e-link-underline", underline), _defineProperty(_classNames, "e-link-".concat(type), type), _defineProperty(_classNames, 'e-link-disabled', disabled), _classNames));
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    className: classes
  }, /*#__PURE__*/React.createElement("span", null, children));
});
export default Link;