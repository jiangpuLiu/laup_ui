<template>
  <div>
    <el-button type="primary"  @click="loading = true">开启loading</el-button>
    <el-button type="primary"  @click="loading = false">关闭loading</el-button>
    <div v-if="loading" class="demo-loading" v-nn-loading="loading">数据加载中....</div>
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

<style scoped lang="scss">
.demo-loading{
  position: relative;
  width: 900px;
  height: 100px;
  margin-top: 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  text-align: center;
}

</style>
