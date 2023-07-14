function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import classNames from 'classnames';
import React, { forwardRef, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import "./style/index.scss";
import { DeleteDOM } from "./utils";
var MessageBox = /*#__PURE__*/forwardRef(function (props) {
  var message = props.message,
    className = props.className,
    _props$type = props.type,
    type = _props$type === void 0 ? 'info' : _props$type,
    _props$duration = props.duration,
    duration = _props$duration === void 0 ? 2000 : _props$duration;
  var messageRef = useRef(null);
  var classes = classNames('e-message', className, _defineProperty({}, "e-message-".concat(type), type));
  useEffect(function () {
    if (messageRef.current) {
      setTimeout(function () {
        DeleteDOM(messageRef);
      }, duration);
    }
  }, [messageRef, duration]);
  return /*#__PURE__*/React.createElement("div", {
    className: classes,
    ref: messageRef
  }, message);
});
var Message = function Message(MessageConfig) {
  var body = document.querySelector('body');
  var container = document.createElement('div');
  container.className = 'e-message-outer';
  var containerList = document.querySelectorAll('.e-message-outer');
  var TopDistance = 20;
  if (containerList.length > 0) {
    var lastElement = containerList[containerList.length - 1];
    var lastElementRect = lastElement.getBoundingClientRect();
    TopDistance = lastElementRect.top + lastElementRect.height + 10;
  }
  container.style.top = TopDistance + 'px';
  // @ts-ignore
  body.appendChild(container);

  // Instantiate MessageBox as a React component
  var messageBox = /*#__PURE__*/React.createElement(MessageBox, MessageConfig);

  // Append the instantiated MessageBox component to the body
  ReactDOM.render(messageBox, container);
};
export default Message;
export { MessageBox };