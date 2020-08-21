<template>
  <wr-transition-animation name="fade">
    <div
      v-show="value"
      class="wr-overlay"
      :class="className"
      :style="[getOverlayStyle,customStyle]"
      @click="overlayClick"
    >
      <slot></slot>
    </div>
  </wr-transition-animation>
</template>
<script>
import wrTransitionAnimation from "../../transition-animation/index";
export default {
  name: "wrOverlay",
  components: {
    wrTransitionAnimation,
  },
  props: {
    //显示与隐藏
    value: {
      type: Boolean,
      default: false,
    },
    //层级
    zIndex: {
      type: [String, Number],
      default: 1000,
    },
    //自定义类名
    className: {
      type: String,
    },
    //自定义样式
    customStyle: {
      type: Object,
    },
    //不可点击关闭
    mask: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  watch: {
    value: {
      handler(val) {
        this.show = val;
      },
      immediate: true,
    },
  },
  computed: {
    getOverlayStyle() {
      return {
        zIndex: this.zIndex,
      };
    },
  },
  methods: {
    overlayClick(e) {
      if (!this.mask) {
        this.show = false;
        this.$emit("input", false);
      }
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="scss">
@import "./overlay.scss";
</style>