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

<script>

export default {
  name: 'demo-dialog',
  data () {
    return {
      visible: false
    }
  }
}
</script>
