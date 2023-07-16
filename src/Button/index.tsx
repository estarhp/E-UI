import React, {type FC, MouseEventHandler} from 'react';
import classNames from "classnames";
import "./style/index.scss"
export interface ButtonProps {
  size?:string,
  round?:boolean
  disabled?:boolean,
  className?:string,
  type?:string,
  circle?:boolean
  handleClick?:MouseEventHandler<HTMLButtonElement>,
  children?:React.ReactNode
}
const Button: FC<ButtonProps> = (props) =>  {
  const {
    children,
    size="md",
    round,
    disabled=false,
    className="",
    type="",
    circle=false,
    handleClick

  } = props;
  const classnames = classNames(
    "e-btn",
    className,{
      [`e-btn-${type}`]:type,
      "e-btn-round":round,
      [`e-btn-${size}`]:size,
      [`e-btn-circle`]:circle,
      [`e-btn-disabled`]:disabled
    }

  )

  return (
    <button
      className={classnames}
      disabled={disabled}
      onClick={handleClick}
    >{children}</button>
  )
};

export default Button;
