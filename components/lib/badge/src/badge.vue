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
export default {
  name: "wrBadge",
  props: {
    //标徽值
    value: {
      type: [String, Number]
    },
    //背景色
    background: {
      type: String
    },
    //字体颜色
    color: {
      type: String,
      default:'#fff'
    },
    //主题
    type: {
      type: String,
      default: "primary"
    },
    //是否圆点
    isDot: {
      type: Boolean,
      default: false
    },
    //偏移
    offset: {
      type: Array,
      default: () => {
        return [0, 0];
      }
    }
  },
  computed: {
    badgeContentStyle() {
      return {
        right: this.offset[0] + "px",
        top: this.offset[1] + "px",
        color:this.color,
        background:this.background
      };
    },
    formatValue() {
      if (this.value) {
    return this.value;
      } else {
        return "";
      }
    }
  },
  methods:{
    badgeClick(e){
      this.$emit("click",e)
    }
  }
};
</script>
<style lang="scss" >
@import "./badge.scss";
</style>