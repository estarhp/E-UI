import React, {
  FocusEventHandler,
  forwardRef, MouseEvent, TextareaHTMLAttributes, useRef, useState
} from "react";
import classNames from "classnames";
import "./style/index.scss"
import * as events from "events";
import {Simulate} from "react-dom/test-utils";
import resize = Simulate.resize;

export interface TextareaProps {
  placeholder?:string
  rows?:number
  cols?:number
  autosize?:boolean
  text?:string
  resize?: string
  disabled?:boolean
  background?:string,
  handleFocus?:FocusEventHandler<HTMLTextAreaElement>
  handleBlur?: React.FocusEventHandler<HTMLTextAreaElement>
  handleChange?:React.ChangeEventHandler<HTMLTextAreaElement>
}

const Textarea = forwardRef<HTMLTextAreaElement,TextareaProps>(
  (props, ref)=>{
    const {
      placeholder,
      rows=6,
      cols=40,
      autosize=false,
      resize="none",
      disabled=false,
      background,
      handleChange,
      handleBlur,
      handleFocus
    }=props;
    const classes = classNames("e-textarea",{
        "e-textarea-autosize":autosize,
        "e-textarea-disabled":disabled
    })

    const textRef = useRef(null);
    ref=textRef;
    const [text, setText] = useState('');


    const adjustHeight = () => {
      let element:React.ReactNode = textRef.current;

      // @ts-ignore
      element.style.height = 'auto'; // 先将高度重置为自动以获取内容的完整高度
      // @ts-ignore
      element.style.height = `${element.scrollHeight}px`; // 根据内容设置新的高度
    };
    const InnerHandleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setText(event.target.value);
      if (!autosize){
        return
      }
      adjustHeight(); // 根据内容设置新的高度
    };

    function change(event: React.ChangeEvent<HTMLTextAreaElement>){
      InnerHandleChange(event);
      if (handleChange) {
        handleChange(event);
      }
    }



    return <div className={classes}>
      <textarea
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        className="e-textarea-inner"
        ref={textRef}
        value={text}
        onChange={change}
        onBlur={handleBlur}
        onFocus={handleFocus}
        disabled={disabled}
        // @ts-ignore
        style={{ resize: resize,background:background }}
      ></textarea>
    </div>
  }
)

export default Textarea
