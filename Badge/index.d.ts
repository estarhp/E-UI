import React, { FC } from "react";
import "./style/index.scss";
export interface BadgeProps {
    className?: string;
    children?: React.ReactNode;
    badge?: string;
    type?: string;
}
declare const Badge: FC<BadgeProps>;
export default Badge;
