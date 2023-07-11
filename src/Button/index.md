---
nav:
   title: components
   path: /components
---

# Button

Button 按钮

```jsx
import {Button} from "E-UI";

function click(){
    alert("我被点击了")
}

export default () =>
  <div>
    <Button text="Hello dumi!" disabled/>
    <Button text="Hello dumi!" type="primary" disabled/>
    <Button text="Hello dumi!" type="success" disabled/>
    <Button text="Hello dumi!" type="info" disabled/>
    <Button text="Hello dumi!" type="warning" disabled/>
    <Button text="Hello dumi!" type="danger" disabled/>

    <Button text="Hello dumi!" handleClick={click}/>
    <Button text="Hello dumi!" type="primary" round handleClick={click}/>
    <Button text="Hello dumi!" type="success" round handleClick={click}/>
    <Button text="Hello dumi!" type="info" round handleClick={click}/>
    <Button text="Hello dumi!" type="warning" round handleClick={click}/>
    <Button text="Hello dumi!" type="danger" round handleClick={click}/>
    <br/>
    <Button text="1234" circle handleClick={click}/>
    <Button text="1234" type="primary" circle handleClick={click}/>
    <Button text="1234" type="success" circle handleClick={click}/>
    <Button text="1234" type="info" circle handleClick={click}/>
    <Button text="1234" type="warning" circle handleClick={click}/>
    <Button text="1234" type="danger" circle handleClick={click}/>

  </div>

```

| 参数       | 说明      | 类型       | 可选值                                         | 默认值   |
|----------|---------|----------|---------------------------------------------|-------|
| size     | 尺寸      | string   | lg/md/sm                                    | md    |
| type     | 类型      | string   | primary / success / warning / danger / info | ---   |
| round    | 是否为圆角按钮 | boolean  | ---                                         | false |
| circle   | 是否为圆形按钮 | boolean  | ---                                         | false |
| disabled | 是否为禁用状态 | boolean  | ---                                         | false |
| handleClick | 点击回调    | function | ---                                         | ----  |
