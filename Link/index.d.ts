import "./style/index.scss";
import React from "react";
export interface LinkProps {
    href?: string;
    className?: string;
    underline?: boolean;
    type?: string;
    disabled?: boolean;
    children?: React.ReactNode;
}
declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLLinkElement>>;
export default Link;
