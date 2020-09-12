<template>
  <div class="wr-badge" @click="badgeClick">
    <slot></slot>
    <span
      class="wr-badge-content"
      :class="[{'is-dot':isDot},'wr-badge_content--'+type]"
      :style="badgeContentStyle"
    >{{formatValue}}</span>
  </div>
</template> 
<script>
import { computed, onMounted } from "vue";
export default {
  name: "wrBadge",
  props: {
    //标徽值
    value: {
      type: [String, Number],
    },
    //背景色
    background: {
      type: String,
    },
    //字体颜色
    color: {
      type: String,
      default: "#fff",
    },
    //主题
    type: {
      type: String,
      default: "primary",
    },
    //是否圆点
    isDot: {
      type: Boolean,
      default: false,
    },
    //偏移
    offset: {
      type: Array,
      default: () => {
        return [0, 0];
      },
    },
  },
  setup(props, context) {
    onMounted(function(){
console.log(context,'console.log(this)console.log(this)')
    })
    const badgeContentStyle = computed(() => {
      return {
        right: props.offset[0] + "px",
        top: props.offset[1] + "px",
        color: props.color,
        background: props.background,
      };
    });

    const formatValue = computed(() => {
      let value = "";
      if (props.value) value = props.value;
      return value;
    });

    const badgeClick = (e) => {
      context.emit("click", e);
    };

    return { badgeContentStyle, formatValue, badgeClick };
  },
};
</script>
<style lang="scss" >
@import "./badge.scss";
</style>