<template>
  <button @click="buttonClick" class="wr-button" :class="getButtonClass" :style="getButtonStyle">
    <div class="wr-button-body">
      <wr-loading v-if="loading" size="19" type="spinner" color="red"></wr-loading>
      <wr-icon v-else-if="icon" size="19" :name="icon"></wr-icon>
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  name: "wrButton",
  data() {
    return {};
  }, 
  props: {
    //主题
    type: {
      type: String,
      default: "default"
    },
    //a圆形
    round: {
      type: Boolean,
      default: false
    },
    //大小
    size: {
      type: String, 
      default: "default"
    },
    //朴素按钮
    plain: {
      type: Boolean,
      default: false
    },
    //禁用
    disabled: {
      type: Boolean,
      default: false
    },
    //颜色
    color: {
      type: String
    },
    //文本颜色
    textColor: {
      type: String
    },
    //加载状态
    loading: {
      type: Boolean,
      default: false
    },
    //图标
    icon: {
      type: String
    }
  },
  computed: {
    isDisabled() {
      return this.disabled ? true : false;
    },
    isBorderColor() {
      return this.color.indexOf("linear") == -1 ? this.color : "transparent";
    },
    getButtonClass() {
      return [
        "wr-button--" + this.type,
        "wr-button-size--" + this.size,
        { round: this.round },
        { plain: this.plain },
        { "wr-disabled": this.isDisabled }
      ];
    },
    getButtonStyle() {
      let background = this.plain ? "#ffffff" : this.color;
      return {
        background: background,
        color: this.textColor,
        borderColor: this.color
      };
    }
  },
  methods: {
    /**
     * 按钮被点击
     */
    buttonClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="scss">
@import "./button.scss";
</style>