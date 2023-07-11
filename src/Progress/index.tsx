import "./style/index.scss"
import React,{forwardRef} from "react";
import classNames from "classnames";


interface ProgressProps {
    type?:string
    percentage:number
    textInside:boolean
    strokeWidth:number
    showText:boolean
}

const  Progress = forwardRef<HTMLInputElement, ProgressProps>((props,ref)=>{
  let {
    type="primary",
    percentage,
    textInside=false,
    strokeWidth,
    showText=true
  } = props;
  let limitedPercentage = Math.min(percentage, 100);
  limitedPercentage = Math.max(limitedPercentage, 0);
  const classes = classNames("e-progress",{
    [`e-progress-${type}`] : type
  })
  return(

      <div className={classes} >
        <div className="e-progress-outer" style={{height:strokeWidth+"rem"}}>
          <div className="e-progress-inner" style={{width:limitedPercentage+"%"}}>
            {(textInside && showText) && <span className="e-progress-text">{limitedPercentage}%</span>}
          </div>
        </div>
        <div className= "e-progress-outside">
          {(!textInside && showText) && <span className="e-progress-text">{limitedPercentage}%</span>}
        </div>
      </div>
  )

});

export default Progress

