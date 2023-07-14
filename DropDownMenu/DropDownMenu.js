var _excluded = ["children", "className", "divided", "backgroundColor", "NoHover"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from "react";
import classNames from "classnames";
import "./style/DropDownMenu.scss";
// @ts-ignore
import EContext from "./context.js";
var DropDownMenu = /*#__PURE__*/forwardRef(function (props, ref) {
  var children = props.children,
    className = props.className,
    _props$divided = props.divided,
    divided = _props$divided === void 0 ? false : _props$divided,
    _props$backgroundColo = props.backgroundColor,
    backgroundColor = _props$backgroundColo === void 0 ? "white" : _props$backgroundColo,
    _props$NoHover = props.NoHover,
    NoHover = _props$NoHover === void 0 ? true : _props$NoHover,
    resProps = _objectWithoutProperties(props, _excluded);
  var classes = classNames("e-drop-down-menu", className, {
    "e-drop-down-menu-divided": divided,
    "e-drop-down-menu-no-hover": NoHover
  });
  return /*#__PURE__*/React.createElement(EContext.Consumer, null, function (value) {
    return /*#__PURE__*/React.createElement("ul", _extends({
      style: {
        display: value ? "inline-block" : "none",
        backgroundColor: backgroundColor
      }
    }, resProps, {
      className: classes
    }), children);
  });
});
export default DropDownMenu;