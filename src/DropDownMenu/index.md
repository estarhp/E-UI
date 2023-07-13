---
nav:
   title: components
   path: /components
---

# DropDownMenu

```tsx
import {DropDown,DropDownMenu,DropDownMenuItem,Button} from "E-UI"


export default ()=>{
    return <DropDown>
      <Button type="primary">此乃下拉菜单</Button>
      <DropDownMenu divided>
        <DropDownMenuItem><div style={{width:"300px"}}>1232312312</div></DropDownMenuItem>
        <DropDownMenuItem><div>1232312312</div></DropDownMenuItem>
        <DropDownMenuItem><div>1232312312</div></DropDownMenuItem>
        <DropDownMenuItem><div>1232312312</div></DropDownMenuItem>
        <DropDownMenuItem><div>1232312312</div></DropDownMenuItem>
      </DropDownMenu>
    </DropDown>
}

```

## DropDown
| 参数              | 说明        | 类型      | 可选值  | 默认值   |
|-----------------|-----------|---------|------|-------|
| className       | 自定义类名     | string  | ---  | ---   |
| showTimeout     | 延时出现菜单    | number  | 单位ms | 0     |


## DropDownMenu
| 参数              | 说明        | 类型      | 可选值  | 默认值   |
|-----------------|-----------|---------|------|-------|
| className       | 自定义类名     | string  | ---  | ---   |
| divided         | 是否显示分割线   | boolean | ---  | false |
| backgroundColor | 菜单背景颜色    | string  | ---  | white |
| NoHover         | 关闭hover色彩 | boolean | ---  | true  |

## DropDownMenuItem
| 参数              | 说明        | 类型      | 可选值  | 默认值   |
|-----------------|-----------|---------|------|-------|
| className       | 自定义类名     | string  | ---  | ---   |
