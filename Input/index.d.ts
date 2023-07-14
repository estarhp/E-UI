import React, { ReactNode, FocusEventHandler } from "react";
import "./style/index.scss";
export declare type InputSize = 'lg' | 'sm' | 'md';
interface InputProps {
    placeholder?: string;
    className?: string;
    size?: InputSize;
    disabled?: boolean;
    type?: string;
    height?: string;
    width?: string;
    prefix?: ReactNode;
    icon?: ReactNode;
    suffix?: ReactNode;
    background?: string;
    round?: boolean;
    handleFocus?: FocusEventHandler<HTMLInputElement>;
    handleBlur?: React.FocusEventHandler<HTMLInputElement>;
    handleChange?: React.ChangeEventHandler<HTMLInputElement>;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
