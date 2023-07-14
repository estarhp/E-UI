function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { forwardRef, useRef, useState } from "react";
import classNames from "classnames";
import "./style/index.scss";
import { Simulate } from "react-dom/test-utils";
var resize = Simulate.resize;
var Textarea = /*#__PURE__*/forwardRef(function (props, ref) {
  var placeholder = props.placeholder,
    _props$rows = props.rows,
    rows = _props$rows === void 0 ? 6 : _props$rows,
    _props$cols = props.cols,
    cols = _props$cols === void 0 ? 40 : _props$cols,
    _props$autosize = props.autosize,
    autosize = _props$autosize === void 0 ? false : _props$autosize,
    _props$resize = props.resize,
    resize = _props$resize === void 0 ? "none" : _props$resize,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    background = props.background,
    handleChange = props.handleChange,
    handleBlur = props.handleBlur,
    handleFocus = props.handleFocus;
  var classes = classNames("e-textarea", {
    "e-textarea-autosize": autosize,
    "e-textarea-disabled": disabled
  });
  var textRef = useRef(null);
  ref = textRef;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    text = _useState2[0],
    setText = _useState2[1];
  var adjustHeight = function adjustHeight() {
    var element = textRef.current;

    // @ts-ignore
    element.style.height = 'auto'; // 先将高度重置为自动以获取内容的完整高度
    // @ts-ignore
    element.style.height = "".concat(element.scrollHeight, "px"); // 根据内容设置新的高度
  };

  var InnerHandleChange = function InnerHandleChange(event) {
    setText(event.target.value);
    if (!autosize) {
      return;
    }
    adjustHeight(); // 根据内容设置新的高度
  };

  function change(event) {
    InnerHandleChange(event);
    if (handleChange) {
      handleChange(event);
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, /*#__PURE__*/React.createElement("textarea", {
    placeholder: placeholder,
    rows: rows,
    cols: cols,
    className: "e-textarea-inner",
    ref: textRef,
    value: text,
    onChange: change,
    onBlur: handleBlur,
    onFocus: handleFocus,
    disabled: disabled
    // @ts-ignore
    ,
    style: {
      resize: resize,
      background: background
    }
  }));
});
export default Textarea;