import React, {forwardRef} from "react";
import classNames from "classnames";
import "./style/index.scss"

export interface SwitchProps {
   prefix?:React.ReactNode
   suffix?:React.ReactNode
  disabled?:boolean
  className?:string
  handleClick?:React.MouseEventHandler<HTMLInputElement>
  handleChange?: React.ChangeEventHandler<HTMLInputElement>

}

const Switch=forwardRef<HTMLDivElement,SwitchProps>((props,ref) =>{
  const {
    prefix,
    suffix,
    handleClick,
    disabled=false,
    className="",
    handleChange
  } = props;
  const classes  = classNames("e-switch",className,{
    "e-switch-disabled":disabled
  })
  return <div className={classes} ref={ref}>

      <input   type="checkbox" id="toggle" style={{display:"none"}} onClick={handleClick} onChange={handleChange} disabled={disabled}/>
      {prefix&& <label htmlFor="toggle" className="e-switch-prefix">{prefix}</label>}
      <label htmlFor="toggle" className="e-switch-label"></label>
      {suffix && <label htmlFor="toggle" className="e-switch-suffix">{suffix}</label>}

  </div>
})

export default Switch
