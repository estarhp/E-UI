---
nav:
  title: components
  path: /components
---

# Button

Button 按钮

```jsx
import { Button,Row,Col } from 'thy-ui';

function click() {
  alert('我被点击了');
}

export default () => (
  <div>
   <Row>
     <Col> 
       <Button disabled> Hello dumi! </Button>
     </Col>
     <Col>
       <Button type="primary" disabled>
       Hello dumi!
     </Button></Col>
     <Col>
       <Button type="success" disabled>
         Hello dumi!
       </Button>
     </Col>
     <Col>
       <Button type="info" disabled>
         Hello dumi!
       </Button>
     </Col>
     <Col>
       <Button type="warning" disabled>
         Hello dumi!
       </Button>
     </Col>
     <Col>
       <Button type="danger" disabled>
         Hello dumi!
       </Button>
     </Col>
   </Row>
    <Row>
      <Col>
        <Button disabled> Hello dumi! </Button>
      </Col>
      <Col>
        <Button type="primary" >
          Hello dumi!
        </Button></Col>
      <Col>
        <Button type="success" >
          Hello dumi!
        </Button>
      </Col>
      <Col>
        <Button type="info" >
          Hello dumi!
        </Button>
      </Col>
      <Col>
        <Button type="warning" >
          Hello dumi!
        </Button>
      </Col>
      <Col>
        <Button type="danger" >
          Hello dumi!
        </Button>
      </Col>
    </Row>
   <Row>
     <Row>
       <Col>
         <Button circle handleClick={click}>
         h
       </Button>
       </Col>
       <Col>
         <Button type="primary" circle handleClick={click}>
           h
         </Button>
       </Col>
       <Col>
         <Button type="success" circle handleClick={click}>
           h
         </Button>
       </Col>
       <Col>
         <Button type="info" circle handleClick={click}>
           h
         </Button>
       </Col>
       <Col>
         <Button type="warning" circle handleClick={click}>
           h
         </Button>
       </Col>
       <Col>
         <Button type="danger" circle handleClick={click}>
           h
         </Button>
       </Col>
     </Row>
   </Row>
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
