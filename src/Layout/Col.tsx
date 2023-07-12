import "./style/Col.scss"
import React,{FC} from "react";
import classNames from "classnames";

export interface ColProps {
  className?:string
  offset?:number
  span:number
  children?:React.ReactNode
}
const Col:FC<ColProps> = ((props)=>{
  const {
    className,
    offset=0,
    span=24,
    children,
    ...restProps
  } = props;
  const classes = classNames("e-col",className,{
        [`e-col-offset-${offset}`]:offset,
        [`e-col-${span}`]:span
  })

  return <div className={classes} {...restProps} >{children}</div>
})

export default Col
