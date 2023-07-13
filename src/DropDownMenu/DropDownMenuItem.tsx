import React, {forwardRef, useEffect, useState} from "react";
import classNames from "classnames";
import "./style/DropDownMenuItem.scss"


export interface DropDownMenuItemProps {
  children?:React.ReactNode
  className?:string
}

const DropDownMenuItem = forwardRef<HTMLDivElement,DropDownMenuItemProps>((props, ref)=>{
  const {
    children,
    className,
    ...restProps
  } = props;

  const classes = classNames("e-drop-down-menu-item",className,{

  })

  return <li className={classes} {...restProps}>
      {children}
    </li>

})

export default DropDownMenuItem
