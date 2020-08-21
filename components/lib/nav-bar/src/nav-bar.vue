<template>
  <div class="wr-nav-bar">
    <div class="wr-nav-bar-wrap" :class="navBarClass" :style="navBarStyle">
      <div class="wr-nav-bar_left" @click="leftClick" :style="navBarLeftStyle">
        <slot name="left">
          <wr-icon :name="leftIcon"></wr-icon>
          <span>{{leftText}}</span>
        </slot>
      </div>
      <div class="wr-nav-bar_center" @click="titleClick">
        <slot name="center">{{title}}</slot>
      </div>
      <div class="wr-nav-bar_right" @click="rightClick" :style="navBarRightStyle">
        <slot name="right">
          <span>{{rightText}}</span>
          <wr-icon :name="rightIcon"></wr-icon>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "wrNavBar",
  props: {
    //中间文本
    title: {
      type: String,
    },
    //左边图标
    leftIcon: {
      type: String,
    },
    //右边图标
    rightIcon: {
      type: String,
    },
    //左边文本
    leftText: {
      type: String,
    },
    //右边文本
    rightText: {
      type: String,
    },
    //底部边框
    border: {
      type: Boolean,
      default: true,
    },
    //背景颜色
    background: {
      type: String,
      default: "#ffffff",
    },
    //字体颜色
    color: {
      type: String,
      default: "#000000",
    },
    //左侧字体颜色，优先级高于color
    leftColor: {
      type: String,
    },
    //右侧字体颜色，优先级高于color
    rightColor: {
      type: String,
    },
    //显示层级
    zIndex: {
      type: [String, Number],
      default: 99,
    },
    //是否固定在顶部
    fixed: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    navBarStyle() {
      return {
        backgroundColor: this.background,
        zIndex: this.zIndex,
        color: this.color,
      };
    },
    navBarLeftStyle() {
      return {
        color: this.leftColor ? this.leftColor : this.color,
      };
    },
    navBarRightStyle() {
      return {
        color: this.rightColor ? this.rightColor : this.color,
      };
    },
    navBarClass() {
      return {
        "wr-nav-bar--boder": this.border,
        "wr-nav-bar--fixed": this.fixed,
      };
    },
  },
  methods: {
    leftClick(e) {
      this.$emit("left-click", e);
    },
    rightClick(e) {
      this.$emit("right-click", e);
    },
    titleClick(e) {
      this.$emit("title-click", e);
    },
  },
};
</script>
<style lang="scss">
@import "./nav-bar.scss";
</style>