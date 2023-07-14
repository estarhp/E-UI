---
nav:
  title: components
  path: /components
---

# Input

Input 输入框

```jsx
import { Input } from 'e-ui';

export default () => (
  <div>
    <Input
      placeholder="请开始输入吧"
      type="text"
      suffix={<div>123</div>}
      size="lg"
      round
      icon={
        <svg
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          data-v-ea893728=""
        >
          <path
            fill="currentColor"
            d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
          ></path>
        </svg>
      }
    />
    <Input
      placeholder="请开始输入吧"
      type="text"
      suffix={<div>123</div>}
      prefix={<div>123</div>}
      size="md"
      round
    />
    <Input
      placeholder="请开始输入吧"
      type="text"
      suffix={<div>123</div>}
      prefix={<div>123</div>}
      size="sm"
      round
    />
  </div>
);
```

Attributes

| 参数         | 说明                 | 类型      | 可选值   | 默认值 |
| ------------ | -------------------- | --------- | -------- | ------ |
| size         | 尺寸                 | string    | lg/md/sm | md     |
| type         | 类型（内置）         | string    | ---      | text   |
| round        | 是否为圆角输入输入框 | boolean   | ---      | false  |
| placeholder  | 内置                 | string    | ---      | ---    |
| disabled     | 是否为禁用状态       | boolean   | ---      | false  |
| className    | 自定义类名           | string    | ---      | ---    |
| height       | 高度                 | string    | ---      | ---    |
| width        | 宽度                 | string    | ---      | ---    |
| prefix       | 前置元素             | ReactNode | ---      | ---    |
| suffix       | 宽度                 | ReactNode | ---      | ---    |
| background   | 输入框背景           | string    | ---      | ---    |
| icon         | 图标 svg             | string    | ---      | ---    |
| handleFocus  | 聚焦回调             | Function  | ---      | ---    |
| handleBlur   | 取消聚焦回调         | Function  | ---      | ---    |
| handleChange | 改变回调             | Function  | ---      | ---    |
