import "./style/Col.scss";
import React, { FC } from "react";
export interface ColProps {
    className?: string;
    offset?: number;
    span: number;
    children?: React.ReactNode;
}
declare const Col: FC<ColProps>;
export default Col;
