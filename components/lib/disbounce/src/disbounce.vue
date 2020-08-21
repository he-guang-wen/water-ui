<template>
  <div :style="{'background-color':backgroundColor }" class="wr-disbounce__wrapper">
    <div class="wr-disbounce" ref="disbounce">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "wrDisbounce",

  props: {
    backgroundColor: {
      type: String,
      default: "#ffffff"
    }
  },

  data() {
    return {
        startPoint:''
    };
  },

  mounted() {
    this.disbounce = this.$refs["disbounce"];
    this.disbounce.addEventListener("touchstart", this.touchstartEvent);
    this.disbounce.addEventListener("touchmove", this.touchmoveEvent, {
      passive: false // 阻止默认事件时，设置passive为false，提高性能
    });
  },

  methods: {
    getPoint(e) {
      return {
        x: e.touches ? e.touches[0].pageX : e.clientX,
        y: e.touches ? e.touches[0].pageY : e.clientY
      };
    },

    touchstartEvent(e) {
      this.startPoint = this.getPoint(e);
    },

    touchmoveEvent(e) {
      if (!this.startPoint) return;

      

      const scrollTop = this.disbounce.scrollTop; // 距离页面顶部的距离
      const curPoint = this.getPoint(e);
      const moveY = curPoint.y - this.startPoint.y; // 纵向移动的距离

      // 下拉
      if (moveY > 0) {
        // 如果在顶部，阻止浏览器默认的滚动，避免触发bounce
        if (scrollTop <= 0) e.preventDefault();
   
        // 上拉
      } else {
        // const scrollHeight = this.disbounce.scrollHeight; // 全文区域的高度
        // const clientHeight = this.disbounce.clientHeight; // 可见区域的高度
        // const scrollBottom = scrollHeight - clientHeight - scrollTop; // 距离页面底部的距离

        // // 如果在底部，阻止浏览器默认的滚动，避免触发ios的bounce效果
        // if (scrollBottom <= 0) e.preventDefault();
      }
    }
  }
};
</script>

<style scoped="scoped">
@import "./disbounce.scss";
</style>