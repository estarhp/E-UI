import React, {type FC, useEffect, useRef, useState} from "react";
import classNames from "classnames";
import "./style/DropDown.scss"
// @ts-ignore
import EContext from "./context";


export interface DropDownProps {
  children?:React.ReactNode
  className?:string
  showTimeout?:number

}

const DropDown : FC<DropDownProps> = ((props)=>{
  const {
    children,
    className,
    showTimeout=0,
    ...restProps
  } = props;

  const classes = classNames("e-drop-down",className,{

  })

  const menu = React.Children.toArray(children).find(
    (child:any) => child.key !== ".0"
  );

  const trigger = React.Children.toArray(children)[0]

  const [Trigger,setTrigger] = useState(false)

  const dropdownRef = useRef(null);


  function handleClick(){

      setTimeout(()=>{
        setTrigger(Trigger =>{
          return !Trigger
        })
      },showTimeout)
    }


  const handleOutsideClick = (event: { target: any; }) => {
    // @ts-ignore
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setTrigger(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);


    return <EContext.Provider value={Trigger}>
    <div className={classes}  ref={dropdownRef} {...restProps}>
       <div onClick={handleClick} className="e-drop-down-trigger">{trigger}</div>
      {menu}
    </div>
  </EContext.Provider>

})

export default  DropDown
