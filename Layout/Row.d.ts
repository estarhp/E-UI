import "./style/Row.scss";
import React, { FC } from "react";
export declare type align = 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
export declare type justify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';
export interface RowProps {
    className?: string;
    gutter?: number;
    children?: React.ReactNode;
    flex: boolean;
    align: align;
    justify: justify;
}
declare const Row: FC<RowProps>;
export default Row;
