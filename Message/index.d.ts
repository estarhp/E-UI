import React from 'react';
import './style/index.scss';
export declare type type = 'success' | 'warning' | 'info' | 'error';
interface MessageProps {
    message: React.ReactNode;
    className?: string;
    type?: string;
    duration?: number;
}
declare const MessageBox: React.ForwardRefExoticComponent<MessageProps & React.RefAttributes<HTMLDivElement>>;
declare const Message: (MessageConfig: MessageProps) => void;
export default Message;
export { MessageBox };
