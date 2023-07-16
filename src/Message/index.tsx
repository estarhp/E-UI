import classNames from 'classnames';
import React, {  useEffect, useRef,type FC } from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import { DeleteDOM } from './utils';

export type type = 'success' | 'warning' | 'info' | 'error';

interface MessageProps {
  message: React.ReactNode;
  className?: string;
  type?: string;
  duration?: number;
}

const MessageBox:FC< MessageProps> = ((props) => {
  const { message, className, type = 'info', duration = 2000 } = props;

  const messageRef: React.LegacyRef<HTMLDivElement> = useRef(null);

  const classes = classNames('e-message', className, {
    [`e-message-${type}`]: type,
  });

  useEffect(() => {
    if (messageRef.current) {
      setTimeout(() => {
        DeleteDOM(messageRef);
      }, duration);
    }
  }, [messageRef, duration]);

  return (
    <div className={classes} ref={messageRef}>
      {message}
    </div>
  );
});
const Message = function (MessageConfig: MessageProps) {
  const body = document.querySelector('body');

  const container = document.createElement('div');
  container.className = 'e-message-outer';

  let containerList = document.querySelectorAll('.e-message-outer');

  let TopDistance = 20;
  if (containerList.length > 0) {
    let lastElement = containerList[containerList.length - 1];
    let lastElementRect = lastElement.getBoundingClientRect();
    TopDistance = lastElementRect.top + lastElementRect.height + 10;
  }

  container.style.top = TopDistance + 'px';
  // @ts-ignore
  body.appendChild(container);

  // Instantiate MessageBox as a React component
  const messageBox = <MessageBox {...MessageConfig} />;

  // Append the instantiated MessageBox component to the body
  ReactDOM.render(messageBox, container);
};

export default Message;

export {MessageBox}
