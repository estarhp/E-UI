import React, {FC, forwardRef} from "react";
import classNames from "classnames";
import "./style/index.scss"

export interface BadgeProps {
  className?:string,
  children?:React.ReactNode
  badge?:string
  type?:string

}

const Badge : FC<BadgeProps>= (props)=>{
  const {
    className,
    children,
    badge,
    type="danger"
  } = props;


  const classes  = classNames(
    "e-badge",className,{
      "e-badge-no-text":!badge,
      [`e-badge-${type}`]:type
    }
  )

  return <div className={classes}>
    {children}
    <sup>{badge}</sup>
  </div>
}

export default Badge
