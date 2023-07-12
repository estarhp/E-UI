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
Attributes

| 参数           | 说明      | 类型        | 可选值      | 默认值   |
|--------------|---------|-----------|----------|-------|
| disabled     | 是否为禁用状态 | boolean   | ---      | false |
| className    | 自定义类名   | string    | ---      | ---   |
| prefix       | 前置元素    | ReactNode | ---      | ---   |
| suffix       | 后置元素    | ReactNode | ---      | ---   |
| handleChange | 改变回调    | Function  | ---      | ---   |
| handleClick  | 点击回调    | Function  | ---      | ---   |



