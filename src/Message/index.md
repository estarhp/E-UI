---
nav:
  title: components
  path: /components
---

```tsx
import React from 'react';
import { Button, Message,Row,Col } from 'thy-ui';

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
     <Row>
       <Col><Button handleClick={handleClick1} type="info">info</Button></Col>
       <Col><Button handleClick={handleClick2} type="warning">warning</Button></Col>
       <Col> <Button handleClick={handleClick3} type="success">success</Button></Col>
       <Col><Button handleClick={handleClick4} type="danger">error</Button></Col>
     </Row>
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
