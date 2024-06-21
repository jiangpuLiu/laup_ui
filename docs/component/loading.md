---
title: Loading
---
# Loading

## 基本用法

::: tip
loading遮罩
:::

<base-code-block>
<directive-demo-loading></directive-demo-loading>
<highlight-code slot="codeText" lang="vue">
```
<template>
  <div>
    <el-button type="primary"  @click="loading = true">测试loading</el-button>
    <div v-if="loading" class="demo-loading" >
      <div v-nn-loading="loading"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'demo-loading',
  data() {
    return {
      loading: false
    }
  }
}
</script>
<style lang="scss">
.demo-loading{
  position: relative;
  width: 900px;
  height: 100px;
  margin-top: 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;
}

</style>
```
</highlight-code>
</base-code-block>
