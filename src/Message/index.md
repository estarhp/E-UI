---
nav:
  title: components
  path: /components
---

```tsx
import { Button, Message } from 'e-ui';
import React from 'react';

const messageContent = (
  <div>
    今天在下雨 <br />
    你吃了么
  </div>
);

function handleClick1() {
  Message({
    message: messageContent,
    type: 'info',
    duration: 5000,
  });
}
function handleClick2() {
  Message({
    message: messageContent,
    type: 'warning',
    duration: 5000,
  });
}
function handleClick3() {
  Message({
    message: messageContent,
    type: 'success',
    duration: 5000,
  });
}
function handleClick4() {
  Message({
    message: messageContent,
    type: 'error',
    duration: 5000,
  });
}

export default () => {
  return (
    <div>
      <Button handleClick={handleClick1}>info</Button>
      <Button handleClick={handleClick2}>warning</Button>
      <Button handleClick={handleClick3}>success</Button>
      <Button handleClick={handleClick4}>error</Button>
    </div>
  );
};
```

| 参数      | 说明           | 类型        | 可选值                             | 默认值 |
| --------- | -------------- | ----------- | ---------------------------------- | ------ |
| className | 自定义类名     | string      | ---                                | ---    |
| type      | 类型           | string      | / success / warning / error / info | ---    |
| message   | 显示的消息     | HTMlElement | 必填                               | ---    |
| duration  | 持续显示的时间 | number      | 单位毫秒                           | 2000   |
