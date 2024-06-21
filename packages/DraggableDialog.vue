<template>
  <transition name="dialog-fade">
    <div
      v-if="visible"
      ref="dragDialog"
      :class="{ 'float-button': isHidden, 'drag-dialog': !isHidden }"
      :style="dialogStyle"
    >
      <!-- 弹窗 -->
      <div
        v-show="!isHidden"
        class="drag-dialog__container"
      >
        <div
          class="drag-dialog__header"
          @mousedown="startDrag"
        >
          <slot name="title">
            <span class="drag-dialog__title">{{ title }}</span>
          </slot>
          <div class="header-icons">
            <span @click="toggleDialog"><i class="el-icon-news" /></span>
            <span @click="close"><i class="el-icon-close" /></span>
          </div>
        </div>
        <div class="drag-dialog__body">
          <slot />
        </div>
        <div
          v-if="$slots.footer"
          class="drag-dialog__footer"
        >
          <slot name="footer" />
        </div>
      </div>

      <!-- 悬浮按钮 -->
      <div
        v-show="isHidden"
        class="drag-float__button"
        :style="{ backgroundColor: floatBgc }"
        @mousedown="startDrag"
      >
        <i
          class="el-icon-full-screen"
          @click="toggleDialog"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'DraggableDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '30%',
    },
    title: {
      type: String,
      default: 'Draggable Dialog',
    },
    posByParent: {
      type: Boolean,
      default: true,
    },
  },
  data () {
    return {
      dragging: false,
      isHidden: false,
      position: { top: 0, left: 0 },
      offsetX: 0,
      offsetY: 0,
      transition: '',
      parentStyle: {},
      floatBgc: '',
      initDialogWidth: 0,
    };
  },
  computed: {
    dialogStyle () {
      return {
        width: this.width,
        top: `${this.position.top}px`,
        left: `${this.position.left}px`,
        transition: this.transition,
      };
    },
  },

  watch: {
    visible: {
      handler (val) {
        if (val) this.open();
      },
      immediate: true,
    },
  },

  methods: {
    // 打开弹窗
    open () {
      this.$nextTick(() => {
        this.initDialogWidth = this.$refs.dragDialog.offsetWidth;
        const  {offsetWidth, offsetHeight} = this.$parent.$el;
        let width = offsetWidth, height = offsetHeight;
        if (!this.$props.posByParent || (offsetWidth < 100 || offsetHeight < 100)) {
          width = window.innerWidth;
          height = window.innerHeight;
        }
        this.parentStyle = {width,height};
        this.initDialogPosition();
      });
    },

    // 初始化弹窗位置
    initDialogPosition () {
      this.position.left = (this.parentStyle.width - this.initDialogWidth) / 2;
      this.position.top = 30;
    },

    // 拖曳事件
    startDrag (e) {
      this.transition = 'none';
      this.dragging = true;
      this.offsetX = e.clientX - this.position.left;
      this.offsetY = e.clientY - this.position.top;

      const moveHandler = (e) => {
        if (this.dragging) {
          let newLeft = e.clientX - this.offsetX;
          let newTop = e.clientY - this.offsetY;

          newLeft = Math.max(0, Math.min(newLeft, this.parentStyle.width - 50));
          newTop = Math.max(0, Math.min(newTop, this.parentStyle.height - 50));

          this.position.left = newLeft;
          this.position.top = newTop;
        }
      };

      const stopDrag = () => {
        this.dragging = false;
        document.removeEventListener('mousemove', moveHandler);
        document.removeEventListener('mouseup', stopDrag);
      };

      document.addEventListener('mousemove', moveHandler);
      document.addEventListener('mouseup', stopDrag);
    },

    // 缩小 | 放大
    toggleDialog () {
      this.transition = 'all 0.3s cubic-bezier(.3,.82,.76,.98)';
      this.isHidden = !this.isHidden;
      if (!this.isHidden) {
        this.floatBgc = '';
        this.initDialogPosition();
      } else {
        this.position.left = this.parentStyle.width - 60;
        this.position.top = this.parentStyle.height - 60;
        setTimeout(() => (this.floatBgc = '#007bff'), 200);
      }

    },

    // 关闭
    close () {
      this.$emit('update:visible', false);
    },
  },
};
</script>

<style scoped lang="scss" src="./style/draggableDialog.scss">

</style>
