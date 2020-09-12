<template>
  <div class="wr-slider" ref="slider" @click="sliderClick" :style="{background:inactiveColor}">
    <div
      class="wr-slider-bar"
      ref="sliderBar"
      :style="{height:barHeight+'px',width:getPercent,background:activeColor}"
    >
      <div
        class="wr-slider-bar_wrapper"
        @click.stop
        @touchstart="touchstart"
        @touchmove="touchmove"
        @touchend="touchend "
        @touchcancel="touchcancel"
      >
        <slot>
          <div class="wr-slider-bar_move"></div>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import { debounce } from "../../../../utils/debounce";
const Mdebounce = debounce();
let startPageX;
// let moveFirst = true;
// let startValue;
export default {
  props: {
    value: {
      //当前值
      type: Number,
      default: 5
    },
    step: {
      //步长
      type: Number,
      default: 1
    },
    max: {
      //最大值
      type: Number,
      default: 100
    },
    min: {
      //最小值
      type: Number,
      default: 0
    },
    barHeight: {
      //进度条高度
      type: Number,
      default: 3
    },
    activeColor: {
      //进度条已进行的颜色
      type: String,
      default: "red"
    },
    inactiveColor: {
      //进度条未进行的颜色
      type: String,
      default: "#ccc"
    }
  },
  computed: {
    getPercent() {
      return this.valueConvertPercent(this.value) + "%";
    }
  },
  watch: {
    getPercent(val) {
      this.$emit("change", {
        value: this.value,
        percent: val
      });
    }
  },
  data() {
    return {
      progress: 0
    };
  },
  methods: {
    touchstart(e) {
      startPageX = e.touches[0].pageX;
      console.log(startPageX);
    },
    touchmove(e) {
      Mdebounce(() => {
         let runingPageX = e.touches[0].pageX;
      let differ = startPageX - runingPageX;
      // //滑动选择器总长度
      // let offsetWidth = this.$refs.slider.offsetWidth;
      if (this.value >= this.max && differ < 0) {
        return;
      }

      if (this.value <= this.min && differ > 0) {
        return;
      }
      if (differ > 0) {
        this.$emit("input", this.value - this.step);
      } else {
        this.$emit("input", this.value + this.step);
      }
      },15);


     
      // // let width = this.$refs.sliderBar.clientWidth;
      // // console.log(this.$refs);
      // //滑动选择器总长度
      // let offsetWidth = this.$refs.slider.offsetWidth;
      // //控制按钮的宽度
      // let differvBarWrapper = e.target.offsetWidth / 2;
      // //步长
      // let step = startPageX - e.touches[0].pageX  ;
      // // console.log(startPageX - step - differvBarWrapper);
      // let differ = startPageX - step - differvBarWrapper  ;
      // let progress = (differ / offsetWidth) * this.max ;
      // console.log(
      //  ( differ ),
      //   ( progress + 40),
      //   (differ / offsetWidth) * this.step,
      //   "progressprogressprogressprogress"
      // );

      // if (
      //   (progress >= this.max && differ < 0) ||
      //   (progress <= this.min && differ > 0)
      // ) {
      //   return;
      // }

      // if (progress < this.min + 1) {
      //   this.$emit("input", this.min);
      // } else if (progress > this.max - 1) {
      //   this.$emit("input", this.max);
      // } else {
      //   this.$emit("input", progress);
      // }

      //      this.value+= this.max/this.step / offsetWidth* this.max
    },
    restrict(progress) {
      if (progress < this.min + 1) {
        this.$emit("input", this.min);
      } else if (progress > this.max - 1) {
        this.$emit("input", this.max);
      } else {
        this.$emit("input", progress);
      }
    },
    touchend() {
      //   moveFirst = true;
      startPageX = 0;
    },
    touchcancel() {
      //   moveFirst = true;
    },
    //百分比转值
    percentConvertValue(value) {
      return (value / 100) * this.max;
    },
    //值转百分比
    valueConvertPercent(progress) {
      let diff = progress / this.max;
      return diff * 100;
    },
    sliderClick(e) {
      let offsetWidth = this.$refs.slider.offsetWidth;
      let progress = (e.offsetX / offsetWidth) * 100;
      this.restrict(this.percentConvertValue(progress));
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./slider.scss";
</style>