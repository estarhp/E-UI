---
nav:
  title: components
  path: /components
---

```tsx
import { Badge, Button, Link } from 'e-ui';

export default () => (
  <div>
    <Badge type="primary">
      <Button type="primary">HOT</Button>
    </Badge>
    <div style={{ marginBottom: '20px' }}></div>
    <Badge>dashdioashdkoas</Badge>
    <div style={{ marginBottom: '20px' }}></div>
    <Badge type="warning">
      <Link>HOT</Link>
    </Badge>
  </div>
);
```

| 参数      | 说明       | 类型   | 可选值                                      | 默认值 |
| --------- | ---------- | ------ | ------------------------------------------- | ------ |
| type      | 类型       | string | primary / success / warning / danger / info | ---    |
| className | 自定义类名 | string | ---                                         | ---    |
| badge     | 显示内容   | string | ---                                         | ---    |
