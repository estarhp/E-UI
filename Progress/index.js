function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import classNames from 'classnames';
import React, { forwardRef } from 'react';
import "./style/index.scss";
var Progress = /*#__PURE__*/forwardRef(function (props, ref) {
  var _props$type = props.type,
    type = _props$type === void 0 ? 'primary' : _props$type,
    percentage = props.percentage,
    _props$textInside = props.textInside,
    textInside = _props$textInside === void 0 ? false : _props$textInside,
    strokeWidth = props.strokeWidth,
    _props$showText = props.showText,
    showText = _props$showText === void 0 ? true : _props$showText;
  var limitedPercentage = Math.min(percentage, 100);
  limitedPercentage = Math.max(limitedPercentage, 0);
  var classes = classNames('e-progress', _defineProperty({}, "e-progress-".concat(type), type));
  return /*#__PURE__*/React.createElement("div", {
    className: classes,
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "e-progress-outer",
    style: {
      height: strokeWidth + 'rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "e-progress-inner",
    style: {
      width: limitedPercentage + '%'
    }
  }, textInside && showText && /*#__PURE__*/React.createElement("span", {
    className: "e-progress-text"
  }, limitedPercentage, "%"))), !textInside && showText && /*#__PURE__*/React.createElement("div", {
    className: "e-progress-outside"
  }, /*#__PURE__*/React.createElement("span", {
    className: "e-progress-text"
  }, limitedPercentage, "%")));
});
export default Progress;