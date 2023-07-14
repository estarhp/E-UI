import React, { FocusEventHandler } from "react";
import "./style/index.scss";
export interface TextareaProps {
    placeholder?: string;
    rows?: number;
    cols?: number;
    autosize?: boolean;
    text?: string;
    resize?: string;
    disabled?: boolean;
    background?: string;
    handleFocus?: FocusEventHandler<HTMLTextAreaElement>;
    handleBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
    handleChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
