var _excluded = ["className", "children", "gutter", "flex", "align", "justify"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import "./style/Row.scss";
import React, { useEffect, useRef } from "react";
import classNames from "classnames";
var Row = function Row(props) {
  var className = props.className,
    children = props.children,
    _props$gutter = props.gutter,
    gutter = _props$gutter === void 0 ? 0 : _props$gutter,
    _props$flex = props.flex,
    flex = _props$flex === void 0 ? false : _props$flex,
    align = props.align,
    justify = props.justify,
    restProps = _objectWithoutProperties(props, _excluded);
  var classes = classNames("e-row", className, {});
  var rowRef = useRef(null);
  useEffect(function () {
    if (rowRef.current) {
      rowRef.current.style.marginLeft = "-".concat(gutter / 2, "px");
      rowRef.current.style.marginRight = "-".concat(gutter / 2, "px");
      if (rowRef.current.children) {
        var _children = Array.from(rowRef.current.children);
        _children.forEach(function (child) {
          // @ts-ignore
          child.style.paddingLeft = gutter / 2 + "px";
          // @ts-ignore
          child.style.paddingRight = gutter / 2 + "px";
        });
      }
    }
  }, [gutter]);
  useEffect(function () {
    if (rowRef.current) {
      rowRef.current.style.display = flex ? "block" : "flex";
      align && (rowRef.current.style.alignItems = align);
      justify && (rowRef.current.style.justifyContent = justify);
    }
  }, [flex, justify, align]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, restProps, {
    ref: rowRef
  }), children);
};
export default Row;