import React, {type FC, MouseEventHandler} from 'react';
import classNames from "classnames";
import "./style/index.scss"
interface ButtonProps {
  text?: string,
  color?:string,
  background?:string,
  size?:string,
  round?:boolean
  disabled?:boolean,
  className?:string,
  type?:string,
  circle:boolean
  handleClick:MouseEventHandler<HTMLButtonElement>
}
const Button: FC<ButtonProps> = (props) =>  {
  const {
    text,
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
    >{text}</button>
  )
};

export default Button;
