import React from "react";
import "./style/DropDown.scss";
export interface DropDownProps {
    children?: React.ReactNode;
    className?: string;
    showTimeout?: number;
}
declare const DropDown: React.ForwardRefExoticComponent<DropDownProps & React.RefAttributes<HTMLDivElement>>;
export default DropDown;
