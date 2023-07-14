var _excluded = ["className", "children", "time"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef, useEffect, useState } from "react";
import classNames from "classnames";
import "./style/index.scss";
var Carousel = /*#__PURE__*/forwardRef(function (props, ref) {
  var className = props.className,
    children = props.children,
    _props$time = props.time,
    time = _props$time === void 0 ? 3000 : _props$time,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    activeIndex = _useState2[0],
    setActiveIndex = _useState2[1];
  var _useState3 = useState(1),
    _useState4 = _slicedToArray(_useState3, 2),
    opacity = _useState4[0],
    setOpacity = _useState4[1];
  var classes = classNames("e-carousel", className);
  useEffect(function () {
    var interval = setInterval(function () {
      setActiveIndex(function (prevIndex) {
        return prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1;
      });
      setOpacity(1); // 重置透明度为1
    }, time);
    return function () {
      return clearInterval(interval);
    };
  }, [children]);
  useEffect(function () {
    if (opacity > 0) {
      var fadeOutTimer = setInterval(function () {
        setOpacity(function (prevOpacity) {
          return prevOpacity - 0.01;
        }); // 透明度每次减少0.1
      }, time / 100); // 将总时间分为10个步骤来递减透明度

      return function () {
        return clearInterval(fadeOutTimer);
      };
    }
  }, [activeIndex]);
  var goToNextSlide = function goToNextSlide() {
    setActiveIndex(function (prevIndex) {
      return prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1;
    });
    setOpacity(1); // 重置透明度为1
  };

  var goToPrevSlide = function goToPrevSlide() {
    setActiveIndex(function (prevIndex) {
      return prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1;
    });
    setOpacity(1); // 重置透明度为1
  };

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, restProps), /*#__PURE__*/React.createElement("div", {
    className: "e-carousel-content"
  }, React.Children.map(children, function (child, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "e-carousel-item ".concat(index === activeIndex ? "e-carousel-item-active" : ""),
      style: {
        opacity: index === activeIndex ? opacity : 0
      }
    }, child);
  })), /*#__PURE__*/React.createElement("div", {
    className: "e-carousel-nav"
  }, React.Children.map(children, function (_, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "e-carousel-nav-dot ".concat(index === activeIndex ? "e-carousel-nav-dot-active" : ""),
      onClick: function onClick() {
        return setActiveIndex(index);
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "e-carousel-controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "e-carousel-control",
    onClick: goToPrevSlide
  }, "<"), /*#__PURE__*/React.createElement("div", {
    className: "e-carousel-control",
    onClick: goToNextSlide
  }, ">")));
});
export default Carousel;