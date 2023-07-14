---
nav:
  title: components
  path: /components
---

# Button

Button 按钮

```jsx
import { Button } from 'e-ui';

function click() {
  alert('我被点击了');
}

export default () => (
  <div>
    <Button disabled> Hello dumi! </Button>
    <Button type="primary" disabled>
      {' '}
      Hello dumi!{' '}
    </Button>
    <Button type="success" disabled>
      {' '}
      Hello dumi!{' '}
    </Button>
    <Button type="info" disabled>
      {' '}
      Hello dumi!{' '}
    </Button>
    <Button type="warning" disabled>
      {' '}
      Hello dumi!
    </Button>
    <Button type="danger" disabled>
      {' '}
      Hello dumi!
    </Button>
    <br />
    <Button handleClick={click}> Hello dumi!</Button>
    <Button type="primary" round handleClick={click}>
      {' '}
      Hello dumi!
    </Button>
    <Button type="success" round handleClick={click}>
      {' '}
      Hello dumi!{' '}
    </Button>
    <Button type="info" round handleClick={click}>
      {' '}
      Hello dumi!
    </Button>
    <Button type="warning" round handleClick={click}>
      {' '}
      Hello dumi!{' '}
    </Button>
    <Button type="danger" round handleClick={click}>
      {' '}
      Hello dumi!
    </Button>
    <br />
    <Button circle handleClick={click}>
      hhhh
    </Button>
    <Button type="primary" circle handleClick={click}>
      {' '}
      hhhh
    </Button>
    <Button type="success" circle handleClick={click}>
      hhhh
    </Button>
    <Button type="info" circle handleClick={click}>
      {' '}
      hhhh
    </Button>
    <Button type="warning" circle handleClick={click}>
      hhhh
    </Button>
    <Button type="danger" circle handleClick={click}>
      {' '}
      hhhh
    </Button>
  </div>
);
```

| 参数        | 说明           | 类型     | 可选值                                      | 默认值 |
| ----------- | -------------- | -------- | ------------------------------------------- | ------ |
| size        | 尺寸           | string   | lg/md/sm                                    | md     |
| type        | 类型           | string   | primary / success / warning / danger / info | ---    |
| round       | 是否为圆角按钮 | boolean  | ---                                         | false  |
| circle      | 是否为圆形按钮 | boolean  | ---                                         | false  |
| disabled    | 是否为禁用状态 | boolean  | ---                                         | false  |
| handleClick | 点击回调       | function | ---                                         | ----   |
