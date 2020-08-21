<template>
  <div
    class="wr-swiper-wrapper"
    @touchstart.prevent="swiperTouchstart"
    @touchmove.prevent="swiperTouchmove"
    @touchend.prevent="swiperTouchend"
  >
    <div
      class="wr-swiper"
      :style="{width:wrSwiperwidth+ 'px',transform:'translateX('+translateX+'%)'}"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
// import { throttle } from "../../../utils/debounce";
// let Throttle = throttle();
export default {
  name: "wrSwiper",
  data() {
    return {
      wrSwiperwidth: "100%",
      translateX: 0,
      moveStartTranslateX: 0,
      moveStartX: 0,
      moveEndX: 0,
      index: 0,
      swiperTouchmoveEl: ""
    };
  },
  mounted() {
    // console.log(this.$children);
    this.setChildrenWidth();
  },
  methods: {
    setChildrenWidth() {
      this.wrSwiperwidth = this.$el.offsetWidth * this.$children.length;
      console.log(this.$children, "this.$children");
      // if (this.$children.length > 0) {

      // }
    },
    setTransform() {
      this.$children.map((item, index) => {
        item.$el.setAttribute("index", index);
        if (index == 0) {
          item.$el.style.transform = "translateX(0)";
        } else if (this.$children.length - 1) {
          item.$el.style.transform = "translateX(" + (index + 1) * 100 + "%)";
        } else {
          item.$el.style.transform = "translateX(-100%)";
        }
        // item.$el.style.height = "100%";
      });
    },
    swiperTouchstart(e) {
      this.moveStartX = e.touches[0].pageX;
      this.moveStartTranslateX = this.translateX;
    },
    // throttle2(method, delay, time) {
    //   var timeout,
    //     startTime = new Date();
    //   return function() {
    //     var context = this,
    //       args = arguments;
    //     var curTime = new Date();
    //     clearTimeout(timeout);
    //     // 若达到了触发的时间间隔，则立即触发handler
    //     if (curTime - startTime >= time) {
    //       method.apply(context, args);
    //       startTime = curTime;
    //       // 若没有达到触发的时间间隔，则重新设定定时器
    //     } else {
    //       timeout = setTimeout(method, delay);
    //     }
    //   };
    // },
    // swiperTouchmoveThrottle() {
    //   let pageX = this.swiperTouchmoveEl.touches[0].pageX;
    //   let differ = pageX - this.moveStartX;
    //   if (this.translateX <= 0 && differ > 0) {
    //     return;
    //   }
    //   // let index= this.index?this.index+1:1
    //   console.log()
    //   this.translateX = ((differ / this.$children.length) * 10) ;
    //   console.log(differ, this.translateX);
    // },
    swiperTouchmove(e) {
      this.swiperTouchmoveEl = e;
      let pageX = e.touches[0].pageX;
      let differ = pageX - this.moveStartX;
      //最终步长
      let finalStep =
        Math.abs(this.translateX) >= (100 / this.$children.length) * 2;
      //本次运动的百分比
      let translateX =
        differ / this.$children.length / 2 + this.moveStartTranslateX;

      if (this.translateX >= 0 && differ > 0) {
        return;
      } else if (finalStep && differ < 0) {
        return;
      } else {
        this.translateX = translateX;
      }

      console.log(differ, this.translateX);
    },
    swiperTouchend() {
      let nui = 100 / this.$children.length;

      // if(this.translateX>)
      this.translateX = Math.round(this.translateX / nui) * nui;
      this.index = Math.abs(Math.round(this.translateX / nui));
      // console.log(this.translateX)
      // this.moveEndX = e.touches[0].pageX
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./swiper.scss";
</style>