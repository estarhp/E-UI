import React, { forwardRef } from "react";
import classNames from "classnames";
import "./style/index.scss";
var Switch = /*#__PURE__*/forwardRef(function (props, ref) {
  var prefix = props.prefix,
    suffix = props.suffix,
    handleClick = props.handleClick,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$className = props.className,
    className = _props$className === void 0 ? "" : _props$className,
    handleChange = props.handleChange;
  var classes = classNames("e-switch", className, {
    "e-switch-disabled": disabled
  });
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: "toggle",
    style: {
      display: "none"
    },
    onClick: handleClick,
    onChange: handleChange,
    disabled: disabled
  }), prefix && /*#__PURE__*/React.createElement("label", {
    htmlFor: "toggle",
    className: "e-switch-prefix"
  }, prefix), /*#__PURE__*/React.createElement("label", {
    htmlFor: "toggle",
    className: "e-switch-label"
  }), suffix && /*#__PURE__*/React.createElement("label", {
    htmlFor: "toggle",
    className: "e-switch-suffix"
  }, suffix));
});
export default Switch;