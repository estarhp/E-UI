---
nav:
   title: components
   path: /components
---

```tsx

import {MessageBox, Message,Button} from "E-UI";
import React from "react";


const messageContent = (
  <div>
   今天在下雨 <br/>
    你吃了么
  </div>
);

function handleClick1() {
  Message({
    message: messageContent,
    type: "info",
    duration:5000
  })
}
function handleClick2() {
  Message({
    message: messageContent,
    type: "warning",
    duration:5000
  })
}
function handleClick3() {
  Message({
    message: messageContent,
    type: "success",
    duration:5000
  })
}
function handleClick4() {
  Message({
    message: messageContent,
    type: "error",
    duration:5000
  })
}

export default () => {

  return <div><Button handleClick={handleClick1} text="info"></Button>
    <Button handleClick={handleClick2} text="warning"></Button>
    <Button handleClick={handleClick3} text="success"></Button>
    <Button handleClick={handleClick4} text="error"></Button></div>
  
}

```
