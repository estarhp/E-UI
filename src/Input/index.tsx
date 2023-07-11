import React from "react";
import {type FC} from "react"
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import classNames from "classnames";

interface InputProps {
  place?:string
  className?:string
  size?:string
  disabled?:boolean
  focus?: boolean
}

const Input : FC<InputProps> = (props) => {

  const {
    place="",
    className="",
    size="md",
    disabled=false,
    focus=false
  } = props;
  const classes = classNames('e-input',className , {
    [`e-input-${size}]`]:size,

  })
  return <input value="place" className={classes}/>
};

export default Input
