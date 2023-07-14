---
nav:
  title: components
  path: /components
---

# Carousel

Carousel 轮播图

```jsx
import { Carousel } from 'e-ui';

export default () => {
  return (
    <div style={{ height: '600px', width: '800px' }}>
      <Carousel time={5000}>
        <img
          src="https://s2.loli.net/2023/06/25/ogSYF3GJNOEldsM.jpg"
          alt="Image 1"
        />
        <img
          src="https://s2.loli.net/2023/06/20/7JtaImcMLHC3NbB.jpg"
          alt="Image 2"
        />
        <img
          src="https://s2.loli.net/2023/06/14/8napydHRgx4YAkX.jpg"
          alt="Image 3"
        />
        <img
          src="https://s2.loli.net/2023/06/14/4EhsDYKZl1zLAPu.jpg"
          alt="Image 4"
        />
        <img
          src="https://s2.loli.net/2023/06/10/Ie64zNKECfogmhF.jpg"
          alt="Image 5"
        />
      </Carousel>
    </div>
  );
};
```

| 参数      | 说明           | 类型   | 可选值   | 默认值 |
| --------- | -------------- | ------ | -------- | ------ |
| className | 自定义类名     | string | ---      | ---    |
| time      | 轮播更换的时间 | number | 单位毫秒 | 2000   |
