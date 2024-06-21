---
title: Dialog 对话框(可拖曳 )
---
# Dialog 对话框(可拖曳 )

## 基本用法

::: tip
1.可拖拽的Dialog, 可缩小和放大, 缩小为悬浮按钮, 放大为弹窗;

2.其组件是相对定位，使用包裹该组件的div长宽小于100, 该组件将相对于视窗定位
:::

<base-code-block>
<dialog-demo-dialog></dialog-demo-dialog>
<highlight-code slot="codeText" lang="vue">
```
<template>
  <div>
    <el-button @click="visible = true" type="primary">打开弹窗</el-button>
    <draggable-dialog
      :visible.sync="visible"
      title="dragDialog"
      width="40%"
  ></draggable-dialog>
  </div>
</template>
```

```
<script>
export default {
  name: 'demo-dialog',
  data() {
    return {
      visible: false
    }
  }
}
</script>
```
</highlight-code>
</base-code-block>

## Attributes

| 参数          | 说明                             | 类型      | 可选值       | 默认值   |
|-------------|--------------------------------|---------- |-------------  |-------|
| visible     | 是否显示 Dialog，支持 .sync 修饰符       | boolean   | — | false |
| title       | Dialog 的标题，也可通过具名 slot （见下表）传入 | string    | — | —     |
| width       | Dialog 的宽度                     | string    | — | 40%   |
| posByParent | 是否是相对父组件定位，false即相对于视窗定位       | boolean    | — | true  |

## Slot

| name   | 说明            |
|--------|---------------|
| -      | Dialog 的内容    |
| title  | Dialog 标题区的内容 |
| footer | Dialog 底部区的内容 |
