import React, {FC} from "react";
import ReactDOM from 'react-dom';
import classNames from "classnames";
import "./style/index.scss"

interface MessageProps {
  message:string
  className?:string
  type?:string

}

const MessageBox : FC<MessageProps> = (props)=>{
  const {
    message,
    className,
    type="primary"
  } = props;

  const classes = classNames("e-message",className, {

  })
  return <div className={classes}>{message}</div>
}
const Message = function (MessageConfig:MessageProps) {
    const body  = document.querySelector("body")

  // Instantiate MessageBox as a React component
  const messageBox = <MessageBox {...MessageConfig} />;

  // Append the instantiated MessageBox component to the body
  ReactDOM.render(messageBox, body);

}

export default Message

export {MessageBox}
