<template>
  <div class="wr-back-top" v-if="show" :style="backTopStyle" @click="backTop">
    <slot>
      <div class="wr-back-top-wrap" :class="backTopWrapClass">
        <wr-icon name="rising"></wr-icon>
      </div>
    </slot>
  </div>
</template> 
<script>
export default {
  name: "wrBackTop",
  props: {
    //触发滚动的对象
    target: {
      type: String,
    },
    //圆形
    round: {
      type: Boolean,
      default: false,
    },
    //距离顶部距离后显示
    top: {
      type: Number,
      default: 200,
    },
    //右边距离
    right: {
      type: Number,
      default: 10,
    },
    //底部距离
    bottom: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      scrollTop: 0,
      el: this.target ? document.querySelector(this.target) : window,
    };
  },
  computed: {
    backTopStyle() {
      return {
        right: this.right + "px",
        bottom: this.bottom + "px",
      };
    },
    backTopWrapClass() {
      return {
        "wr-back-top-wrap--round": this.round,
      };
    },
    show() {
      return this.top > this.scrollTop ? false : true;
    },
  },
  mounted() {
    this.addEventListenerScroll();
  },
  methods: {
    addEventListenerScroll() {
      this.el.addEventListener("scroll", this.handleScroll);
    },
    handleScroll() {
      if (this.target) {
        this.scrollTop = this.el.scrollTop;
      } else {
        this.scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
      }
    },
    backTop(e) {
      this.el.scrollTo(0, 0);
      this.$emit("click", e);
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.windowScroll);
  },
};
</script>
<style lang="scss">
@import "./back-top.scss";
</style>