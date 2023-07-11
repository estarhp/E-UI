import React,{forwardRef} from "react";
import classNames from "classnames";
import "./style/index.scss"

export interface SwitchProps {

}

const Switch=forwardRef<HTMLDivElement,SwitchProps>((props,ref) =>{
  const {} = props;
  const classes  = classNames("e-switch",{

  })

  function handleClick (event: { target: any; }){

  }
  return <div className={classes} onClick={handleClick}>

  </div>
})

export default Switch
