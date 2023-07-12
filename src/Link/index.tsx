import "./style/index.scss"

import React,{forwardRef} from "react";
import classNames from "classnames";

export interface LinkProps {
  href?: string
  className?:string,
  underline?:boolean,
  type?:string
  disabled?:boolean
  children?:React.ReactNode
}

const Link = forwardRef<HTMLLinkElement,LinkProps>((props,ref) => {
  const {
    href,
    className="",
    children,
    underline,
    type="primary",
    disabled=false
  } =  props;

  const classes = classNames("e-link",className,{
      ["e-link-underline"]:underline,
      [`e-link-${type}`]:type,
      ['e-link-disabled']:disabled
  })

  return <a href={href} className={classes} ><span>{children}</span></a>
})


export default Link
