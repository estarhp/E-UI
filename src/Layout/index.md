---
nav:
  title: components
  path: /components
---

# Layout

Layout 布局

```tsx
import { Col, Row } from 'thy-ui';

import './demo/index.scss';

export default () => {
  return (
    <div>
      <Row gutter={12} align="center" justify="center">
        <Col span={3}>
          <div className="content"></div>
        </Col>
        <Col span={3}>
          <div className="content"></div>
        </Col>
        <Col span={3}>
          <div className="content"></div>
        </Col>
        <Col span={3}>
          <div className="content"></div>
        </Col>
      </Row>
    </div>
  );
};
```

## Row 行

| 参数      | 说明                    | 类型    | 可选值                                         | 默认值    |
| --------- | ----------------------- | ------- | ---------------------------------------------- | --------- |
| className | 自定义类名              | string  | ---                                            | ---       |
| gutter    | 子列的间隔              | number  | ---                                            | 0 单位 px |
| flex      | 是否 flex 布局          | boolean | ---                                            | false     |
| align     | flex 布局，垂直方向布局 | string  | center/flex-start /flex-end /stretch /baseline | ---       |
| justify   | flex 布局,水平方向布局  | string  | start/end/center/space-around/space-between    | ---       |

## Col 列

| 参数      | 说明               | 类型   | 可选值 | 默认值 |
| --------- | ------------------ | ------ | ------ | ------ |
| className | 自定义类名         | string | ---    | ---    |
| span      | 栅格占据的列数     | number | [1,24] | 24     |
| offset    | 栅格左侧的间隔格数 | number | [1,24] | 0      |
