import React from "react";
import "./style/DropDownMenu.scss";
export interface DropDownMenuProps {
    children?: React.ReactNode;
    className?: string;
    divided?: boolean;
    backgroundColor?: string;
    NoHover: boolean;
}
declare const DropDownMenu: React.ForwardRefExoticComponent<DropDownMenuProps & React.RefAttributes<HTMLDivElement>>;
export default DropDownMenu;
