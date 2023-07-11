---
nav:
   title: components
   path: /components
---

```jsx
import {Progress} from "E-UI";
import {useState} from "react";
import {Button} from "E-UI";

const ExampleComponent = () => {
  const [percentage, setPercentage] = useState(60);

  const increase = () => {
    setPercentage(percentage + 5);
  };

  const decrease = () => {
    setPercentage(percentage - 5);
  };

  return (
    <div>
      <Progress percentage={percentage} type="primary" strokeWidth={1}/>
      <Progress percentage={percentage} type="info" strokeWidth={1}/>
      <Progress percentage={percentage} type="success" strokeWidth={1}/>
      <Progress percentage={percentage} type="warning" strokeWidth={1}/>
      <Progress percentage={percentage} type="danger" strokeWidth={1}/>
      <Button handleClick={increase} text="Increase Progress" type="primary"></Button>
      <Button handleClick={decrease} text="Decrease Progress" type="primary"></Button>
    </div>
  );
};

export default ExampleComponent;

```

| 参数         | 说明      | 类型           | 可选值                                         | 默认值   |
|------------|---------|--------------|---------------------------------------------|-------|
| percentage | 尺寸      | string       | lg/md/sm                                    | md    |
| type       | 类型      | string       | primary / success / warning / danger / info | ---   |
| percentage | 类型      | number       | [0,100]                                     | 必填    |
| textInside       | 文字出现的位置 | boolean      | ---                                         | false |
| strokeWidth       | 进度条的高度  | number 单位rem | ---                                         | 0.7   |
| showText       | 是否显示文字  | boolean      | ---                                         | true  |
