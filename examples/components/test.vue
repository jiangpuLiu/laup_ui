<template>
  <div class="test-warpper">
    <el-button
      type="primary"
      @click="visible = true"
    >
      打开弹窗
    </el-button>
    <DraggableDialog
      :visible.sync="visible"
    />
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data () {
    return {
      visible: false,

    };
  },
};
</script>

<style scoped lang="scss">
.test-warpper{
  width: 100%;
  height: 90vh;
  overflow: hidden;
}

</style>
