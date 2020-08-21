<template>
  <div class="wr-swiper-item" :style="getSwiperItemStyle" @click="swiperItemClick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "wrSwiperItem",
  data() {
    return {
      clientWidth: 0,
      translateX: 0
    };
  },
  mounted() {
    this.clientWidth = this.$parent.$el.clientWidth;
  },
  computed: {
    getSwiperItemStyle() {
      let style = {
        width: this.clientWidth + "px"
      };
      let direction = this.$parent.vertical;
      direction = direction ? "Y" : "X";
      if (this.translateX) {
        style.transform =
          " translate" + direction + "(" + this.translateX + "px)";
      }
      return style;
    }
  },
  methods: {
    /**
     * 设置偏移量
     * @param {translateX} number --单位为px
     * @return undefined
     */
    setTranslateX(translateX) {
      this.translateX = translateX;
    },
    swiperItemClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="scss" >
@import "./swiper-item.scss";
</style>