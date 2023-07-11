import React, {ReactNode, forwardRef, FocusEventHandler} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import classNames from "classnames";
import "./style/index.scss"

export type InputSize = 'lg'|'sm'| 'md';

interface InputProps {
  placeholder?:string
  className?:string
  size?:InputSize
  disabled?:boolean
  type?:string
  height?:string
  width?:string,
  prefix?:ReactNode,
  icon?:ReactNode
  suffix?:ReactNode,
  background?:string,
  round?:boolean,
  handleFocus?:FocusEventHandler<HTMLInputElement>
  handleBlur?: React.FocusEventHandler<HTMLInputElement>
  handleChange?:React.ChangeEventHandler<HTMLInputElement>

}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {

  const {
    placeholder="",
    className="",
    size="md",
    disabled=false,
    type= "text",
    width,
    height,
    prefix,
    suffix,
    icon,
    background="white",
    round=false,
    handleFocus,
    handleBlur,
    handleChange,
    ...restProps
  } = props;
  const classes = classNames('e-input',className , {
    [`e-input-${size}`]:size,
    [`e-input-disabled`]:disabled,
    [`e-input-round`]:round
  })

  return(
  <div className={classes} >
    {prefix && <div className="e-input-group-prefix">{prefix}</div>}
    {icon && <div className="e-icon">{icon}</div>}
    <input
      ref={ref}
      placeholder={placeholder}
      className="e-input-inner"
      type={type}
      style={{height:height,width:width,background:background}}
      disabled={disabled}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      {...restProps}

    />
    {suffix && <div className="e-input-group-suffix">{suffix}</div>}
  </div>
  )
});

export default Input
