---
nav:
   title: components
   path: /components
---

```tsx
import {Switch} from "E-UI";
import {useState} from "react";


function handleClick(event) {
  console.log(event.target.checked)
}

export default () => <Switch 
  prefix={<div>选择左</div>}
  suffix={<div>选择右</div>}
  handleClick={handleClick}
></Switch>

```
