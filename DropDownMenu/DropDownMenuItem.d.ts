import React from "react";
import "./style/DropDownMenuItem.scss";
export interface DropDownMenuItemProps {
    children?: React.ReactNode;
    className?: string;
}
declare const DropDownMenuItem: React.ForwardRefExoticComponent<DropDownMenuItemProps & React.RefAttributes<HTMLDivElement>>;
export default DropDownMenuItem;
