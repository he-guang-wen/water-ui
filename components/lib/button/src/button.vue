<template>
  <button @click="onClick" class="wr-button" :class="getButtonClass" :style="getButtonStyle">
    <div class="wr-button-body">
      <wr-loading v-if="loading" size="19" type="spinner" color="red"></wr-loading>
      <wr-icon v-else-if="icon" size="19" :name="icon"></wr-icon>
      <slot></slot>
    </div>
  </button>
</template>
<script>
import { computed } from "vue";
export default {
  name: "wrButton",
  props: {
    //主题
    type: {
      type: String,
      default: "default",
    },
    //a圆形
    round: {
      type: Boolean,
      default: false,
    },
    //大小
    size: {
      type: String,
      default: "default",
    },
    //朴素按钮
    plain: {
      type: Boolean,
      default: false,
    },
    //禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    //颜色
    color: {
      type: String,
    },
    //文本颜色
    textColor: {
      type: String,
    },
    //加载状态
    loading: {
      type: Boolean,
      default: false,
    },
    //图标
    icon: {
      type: String,
    },
  },
  setup(props, context) {
    const isDisabled = computed(() => (props.disabled ? true : false));

    const isBorderColor = computed(() =>
      props.color.indexOf("linear") == -1 ? props.color : "transparent"
    );

    const getButtonClass = computed(() => [
      "wr-button--" + props.type,
      "wr-button-size--" + props.size,
      { round: props.round },
      { plain: props.plain },
      { "wr-disabled": props.isDisabled },
    ]);

    const getButtonStyle = computed(() => {
      let background = props.plain ? "#ffffff" : props.color;
      return {
        background: background,
        color: props.textColor,
        borderColor: props.color,
      };
    });

    /**
     * 按钮被点击
     */
    const onClick = (e) => {
      context.emit("click", e);
    };

    return {
      isDisabled,
      isBorderColor,
      getButtonClass,
      getButtonStyle,
      onClick,
    };
  },
};
</script>
<style lang="scss">
@import "./button.scss";
</style>