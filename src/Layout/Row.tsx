import "./style/Row.scss"
import React, {FC, useEffect, useRef} from "react";
import classNames from "classnames";

export type align = |'center'|'flex-start'|'flex-end'|'stretch'|'baseline'
export type justify = |'start'|'end'|'center'|'space-around'|'space-between'
export interface RowProps {
    className?:string
    gutter?:number
    children?:React.ReactNode
    flex?:boolean
    align?:align
    justify?:justify
}

const Row : FC<RowProps> = (props)=>{
   const {
     className,
     children,
     gutter=0,
     flex=false,
     align,
     justify,
     ...restProps
   } = props;
  const classes = classNames("e-row",className,{

  })

  const rowRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (rowRef.current) {
      rowRef.current.style.marginLeft = `-${gutter/2}px`;
      rowRef.current.style.marginRight = `-${gutter/2}px`;
      if (rowRef.current.children) {
        const children = Array.from(rowRef.current.children);

        children.forEach(child => {
          // @ts-ignore
          child.style.paddingLeft = gutter/2 + "px";
          // @ts-ignore
          child.style.paddingRight = gutter/2 + "px";
        });
      }
    }
  }, [gutter]);

  useEffect(() => {
      if (rowRef.current) {
        rowRef.current.style.display = flex ? "block" : "flex"
        align &&(rowRef.current.style.alignItems = align);
        justify && (rowRef.current.style.justifyContent = justify);

      }

    },
    [flex,justify,align])



  return <div className={classes} {...restProps} ref={rowRef}>{children}</div>
}

export default Row
