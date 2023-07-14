function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["placeholder", "className", "size", "disabled", "type", "width", "height", "prefix", "suffix", "icon", "background", "round", "handleFocus", "handleBlur", "handleChange"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from "react";
import { Simulate } from "react-dom/test-utils";
var input = Simulate.input;
import classNames from "classnames";
import "./style/index.scss";
var Input = /*#__PURE__*/forwardRef(function (props, ref) {
  var _classNames;
  var _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? "" : _props$placeholder,
    _props$className = props.className,
    className = _props$className === void 0 ? "" : _props$className,
    _props$size = props.size,
    size = _props$size === void 0 ? "md" : _props$size,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$type = props.type,
    type = _props$type === void 0 ? "text" : _props$type,
    width = props.width,
    height = props.height,
    prefix = props.prefix,
    suffix = props.suffix,
    icon = props.icon,
    _props$background = props.background,
    background = _props$background === void 0 ? "white" : _props$background,
    _props$round = props.round,
    round = _props$round === void 0 ? false : _props$round,
    handleFocus = props.handleFocus,
    handleBlur = props.handleBlur,
    handleChange = props.handleChange,
    restProps = _objectWithoutProperties(props, _excluded);
  var classes = classNames('e-input', className, (_classNames = {}, _defineProperty(_classNames, "e-input-".concat(size), size), _defineProperty(_classNames, "e-input-disabled", disabled), _defineProperty(_classNames, "e-input-round", round), _classNames));
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, prefix && /*#__PURE__*/React.createElement("div", {
    className: "e-input-group-prefix"
  }, prefix), icon && /*#__PURE__*/React.createElement("div", {
    className: "e-icon"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    placeholder: placeholder,
    className: "e-input-inner",
    type: type,
    style: {
      height: height,
      width: width,
      background: background
    },
    disabled: disabled,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange
  }, restProps)), suffix && /*#__PURE__*/React.createElement("div", {
    className: "e-input-group-suffix"
  }, suffix));
});
export default Input;