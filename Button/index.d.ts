import React, { type FC, MouseEventHandler } from 'react';
import "./style/index.scss";
interface ButtonProps {
    color?: string;
    background?: string;
    size?: string;
    round?: boolean;
    disabled?: boolean;
    className?: string;
    type?: string;
    circle: boolean;
    handleClick: MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
}
declare const Button: FC<ButtonProps>;
export default Button;
