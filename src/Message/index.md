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

function handleClick() {
  Message({
    message: messageContent,
    type: "info"
  })
}

export default () => {

  return <Button handleClick={handleClick} text="info"></Button>
  
}

```
