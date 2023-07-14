import React from "react";
import "./style/index.scss";
export interface SwitchProps {
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    disabled?: boolean;
    className: string;
    handleClick: React.MouseEventHandler<HTMLInputElement>;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLDivElement>>;
export default Switch;
