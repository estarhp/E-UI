function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from "react";
import classNames from "classnames";
import "./style/index.scss";
var Badge = function Badge(props) {
  var className = props.className,
    children = props.children,
    badge = props.badge,
    _props$type = props.type,
    type = _props$type === void 0 ? "danger" : _props$type;
  var classes = classNames("e-badge", className, _defineProperty({
    "e-badge-no-text": !badge
  }, "e-badge-".concat(type), type));
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, children, /*#__PURE__*/React.createElement("sup", null, badge));
};
export default Badge;