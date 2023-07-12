---
nav:
   title: components
   path: /components
---

```tsx
import {Badge} from "E-UI";
import {Button} from "E-UI";
import {Link} from "E-UI"
import {Switch} from "E-UI"

export default () => <div>
  <Badge type="primary"><Button type="primary" text="dasd"></Button></Badge>
  <div style={{marginBottom:"20px"}}></div>
  <Badge >dashdioashdkoas</Badge>
  <div style={{marginBottom:"20px"}}></div>
  <Badge type="warning"><Link>HOT</Link></Badge>
</div>

```

| 参数        | 说明    | 类型       | 可选值                                        | 默认值   |
|-----------|-------|----------|--------------------------------------------|-------|
| type      | 类型    | string   | primary / success / warning / danger / info | ---   |
| className | 自定义类名 | string   | ---                                        | ---   |
| badge     | 显示内容  | string   | ---                                        | ---   |

