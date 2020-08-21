<template>
  <div class="wr-notice-bar" :style="[noticeBarStyle,scrollable?'':{height:'auto'}]">
    <div @click="leftClick">
      <slot name="left">
        <wr-icon v-if="leftIcon" :name="leftIcon" :size="22"></wr-icon>
      </slot>
    </div>
    <div class="wr-notice-bar_warp" ref="warp" @click="warpClick">
      <div
        class="wr-notice-bar_content"
        ref="content"
        :style="noticeBarContentStyle"
        :class="{'wr-notice-bar--wrapable':scrollable}"
      >{{text}}</div>
    </div>
    <div @click="rightClick">
      <slot name="right">
        <wr-icon v-if="rightIcon" :name="rightIcon" :size="22"></wr-icon>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "wrNoticeBar",
  props: {
    //文本
    text: {
      type: String,
    },
    //滚动速率
    speed: {
      type: Number,
      default: 5,
    },
    //是否滚动
    scrollable: {
      type: Boolean,
      default: true,
    },
    //背景颜色
    background: {
      type: String,
      default: "rgb(236, 249, 255)",
    },
    //文本颜色
    textColor: {
      type: String,
      default: "rgb(25, 137, 250)",
    },
    //左侧图标
    leftIcon: {
      type: String,
    },
    //右侧图标
    rightIcon: {
      type: String,
    },
  },
  data() {
    return {
      warpClientWidth: 0,
      contentClientWidth: 0,
      movement: false,
      noticeBarContentStyle: "",
      startTranslateX: "",
      endTranslateX: "",
      first: true,
      movementTimeoutID: "",
      resetTimeoutID: "",
      duration: "",
    };
  },
  mounted() {
    this.warpClientWidth = this.$refs.warp.clientWidth;
    this.contentClientWidth = this.$refs.content.clientWidth;

    if (this.scrollable) {
      this.setAnimation();
      this.start();
    }
  },
  computed: {
    noticeBarStyle() {
      return {
        background: this.background,
        color: this.textColor,
      };
    },
  },
  methods: {
    setAnimation() {
      this.duration =
        ((this.warpClientWidth + this.contentClientWidth) / this.speed) * 100;
      this.startTranslateX = -this.contentClientWidth;
      this.endTranslateX = this.contentClientWidth;
      this.noticeBarContentStyle = {
        transitionDuration: "0s",
        transform: "translateX(" + this.warpClientWidth + "px)",
      };
    },
    start() {
      this.movementTimeoutID = setTimeout(() => {
        this.noticeBarContentStyle = {
          transitionDuration: this.duration / 1000 + "s",
          transform: "translateX(" + this.startTranslateX + "px)",
        };
        this.movement = true;
      }, 100);

      if (!this.resetTimeoutID) {
        this.resetTimeoutID = setInterval(() => {
          this.noticeBarContentStyle = {
            transitionDuration: "0s",
            transform: "translateX(" + this.warpClientWidth + "px)",
          };
          this.start();
        }, this.duration);
      }
    },
    leftClick() {
      this.$emit("left-click");
    },
    warpClick(e) {
      this.$emit("center-click");
    },
    rightClick() {
      this.$emit("right-click");
    },
  },
  beforeDestroy() {
    clearInterval(this.resetTimeoutID);
  },
};
</script>
<style lang="scss">
@import "./notice-bar.scss";
</style>