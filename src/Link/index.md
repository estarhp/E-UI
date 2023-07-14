---
nav:
  title: components
  path: /components
---

# Link

Link 文字链接

```tsx
import { Link } from 'thy-ui';

export default () => {
  return (
    <div>
      <Link href="/components/Button" underline type="primaey">
        文字链接
      </Link>
      <Link href="/components/Button" underline type="success">
        文字链接
      </Link>
      <Link href="/components/Button" underline type="info">
        文字链接
      </Link>
      <Link href="/components/Button" underline type="warning">
        文字链接
      </Link>
      <Link href="/components/Button" underline type="danger">
        文字链接
      </Link>
      <br />
      <Link href="/components/Button" underline type="primaey" disabled>
        文字链接
      </Link>
      <Link href="/components/Button" underline type="success" disabled>
        文字链接
      </Link>
      <Link href="/components/Button" underline type="info" disabled>
        文字链接
      </Link>
      <Link href="/components/Button" underline type="warning" disabled>
        文字链接
      </Link>
      <Link href="/components/Button" underline type="danger" disabled>
        文字链接
      </Link>
    </div>
  );
};
```

| 参数      | 说明           | 类型    | 可选值                                      | 默认值 |
| --------- | -------------- | ------- | ------------------------------------------- | ------ |
| disabled  | 是否为禁用状态 | boolean | ---                                         | false  |
| className | 自定义类名     | string  | ---                                         | ---    |
| underline | 是否有下划线   | boolean | ---                                         | false  |
| href      | 原生 href 属性 | string  | ---                                         | ---    |
| type      | 类型           | string  | primary / success / warning / danger / info | ---    |
