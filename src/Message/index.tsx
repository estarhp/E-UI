import React, {forwardRef, useEffect, useRef} from "react";
import ReactDOM from 'react-dom';
import classNames from "classnames";
import "./style/index.scss"

export type type = 'success'|'warning'|'info'|'error'

interface MessageProps {
  message:React.ReactNode
  className?:string
  type?:string
  duration?:number

}

const MessageBox = forwardRef<HTMLDivElement,MessageProps>((props,ref)=>{
  const {
    message,
    className,
    type="info",
    duration=2000

  } = props;

  const messageRef =  useRef(null)

  const classes = classNames("e-message",className, {
            [`e-message-${type}`]:type
  })

  useEffect(()=>{
    if (messageRef.current){
      setTimeout(()=>{
       if (messageRef.current){
         // @ts-ignore
         messageRef.current.parentNode.parentNode.removeChild(messageRef.current.parentNode);
       }
      },duration)
    }
    }, [messageRef,duration])

  return <div className={classes} ref={messageRef} >{message}</div>
})
const Message = function (MessageConfig:MessageProps) {
    const body  = document.querySelector("body")

    const container = document.createElement("div");
    container.className = "e-message-outer"
    // @ts-ignore
    body.appendChild(container)

  // Instantiate MessageBox as a React component
    const messageBox = <MessageBox {...MessageConfig} />;

  // Append the instantiated MessageBox component to the body
    ReactDOM.render(messageBox, container);

}

export default Message

export {MessageBox}
