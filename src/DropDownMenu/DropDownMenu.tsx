import React,{forwardRef} from "react";
import classNames from "classnames";
import "./style/DropDownMenu.scss"
// @ts-ignore
import EContext from "./context.js";

export interface DropDownMenuProps {
  children?:React.ReactNode
  className?:string,
  divided?:boolean,
  backgroundColor?:string
  NoHover:boolean
}

const DropDownMenu = forwardRef<HTMLDivElement,DropDownMenuProps>((props, ref)=>{
  const {
    children,
    className,
    divided=false,
    backgroundColor="white",
    NoHover=true,
    ...resProps
  } = props;

  const classes = classNames("e-drop-down-menu",className,{
    "e-drop-down-menu-divided":divided,
    "e-drop-down-menu-no-hover":NoHover
  })

  return <EContext.Consumer>
    {(value: boolean) => (
      <ul style={{display:value ? "inline-block" : "none",backgroundColor:backgroundColor}} {...resProps} className={classes} >{children}</ul>
    )}
  </EContext.Consumer>
})

export default DropDownMenu
