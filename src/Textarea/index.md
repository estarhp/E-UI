---
nav:
   title: components
   path: /components
---

# Textarea

Textarea 文本框
```tsx
import {Textarea} from "E-UI";

export default ()=>{
    return <Textarea placeholder="dasd" autosize  ></Textarea>
}

```

Attributes

| 参数           | 说明            | 类型       | 可选值      | 默认值   |
|--------------|---------------|----------|----------|-------|
| placeholder  | 内置            | string   | ---      | ---   |
| rows         | 内置            | number   | ---      | ---   |
| cols         | 内置            | number   | ---      | ---   |
| autosize     | 是否自动调节高度      | boolean  | ---      | false |
| resize       | 是否允许用户更改输入框大小 | string   | none, both, horizontal, vertical      | none  |
| disabled     | 是否为禁用状态       | boolean  | ---      | false |
| className    | 自定义类名         | string   | ---      | ---   |
| background   | 输入框背景         | string   | ---      | ---   |
| handleFocus  | 聚焦回调          | Function | ---      | ---   |
| handleBlur   | 取消聚焦回调        | Function | ---      | ---   |
| handleChange | 改变回调          | Function | ---      | ---   |

