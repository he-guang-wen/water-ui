<template>
  <div
    class="wr-swiper"
    @touchstart.prevent="swiperTouchstart"
    @touchmove.stop.prevent="swiperTouchmove"
    @touchend.prevent="swiperTouchend"
    :style="{
      height:height
    }"
  >
    <div class="wr-swiper__wrapper" :style="getSwiperWrapperStyle" :class="getSwiperWrapperClass">
      <slot></slot>
    </div>

    <div
      class="wr-swipe__indicators"
      :class="getIndicatorClass"
      :style="getIndicatorStyle"
      v-if="showIndicator"
    >
      <slot name="indicator">
        <div
          class="wr-swipe__indicator"
          v-for="val in swiperItemList.length"
          :key="val"
          :style="{background:val==index?indicatorActiveColor:indicatorInactiveColor}"
        ></div>
      </slot>
    </div>
  </div>
</template>
<script>
// import { throttle } from "../../../utils/debounce";
// let Throttle = throttle();
export default {
  name: "wrSwiper",
  props: {
    //高度
    height: {
      type: String
    },
    //指示器
    showIndicator: {
      type: Boolean,
      default: true
    },
    //垂直
    vertical: {
      type: Boolean,
      default: false
    },
    //动画时长(毫秒)
    duration: {
      type: [String, Number],
      default: 600
    },
    autoplay: {
      type: [String, Number],
      default: 2000
    },
    //选中颜色
    indicatorActiveColor: {
      type: String,
      default: "#fff"
    },
    //未选中颜色
    indicatorInactiveColor: {
      type: String,
      default: "#c8c9cc"
    },
    indicatorAlign: {
      type: String,
      default: "center"
    },
    //是否循环滚动
    touchLoop: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      //子元素列表
      swiperItemList: [],
      wrSwiperwidth: "100%",
      //基础偏移量
      translate: 0,
      //每次移动的偏移量
      moveTranslate: 0,
      //触摸位置
      distance: 0,
      //显示是第几个
      index: 1,
      //是否在触摸移动
      activity: false,
      //定时器ID
      setIntervalId: "",
      //swiper的高度或宽度
      clientExtent: 0
    };
  },
  mounted() {
    this.clientExtent = this.vertical
      ? this.$el.clientHeight
      : this.$el.clientWidth;
    this.setChildrenWidth();
    this.getSwiperItemList();
    this.startAutoPlay();
  },
  computed: {
    getSwiperWrapperStyle() {
      let direction = this.vertical ? "Y" : "X";
      let offset = this.translate + this.moveTranslate;
      let duration = this.activity ? 0 : this.duration;

      return {
        width: this.wrSwiperwidth + "px",
        transform: "translate" + direction + "(" + offset + "px)",
        transitionDuration: duration + "ms"
      };
    },
    getIndicatorStyle() {
      return {
        justifyContent: this.indicatorAlign,
        alignAtems: this.indicatorAlign
      };
    },
    getSwiperWrapperClass() {
      return {
        "wr-swiper__wrapper--vertical": this.vertical
      };
    },
    getIndicatorClass() {
      return {
        "wr-swiper__indicators--vertical": this.vertical
      };
    }
  },
  watch: {
    index(val) {
      this.$emit("change", val);
    }
  },
  methods: {
    /**
     *获取滑动子元素实例集合
     * @return undefined
     * */
    getSwiperItemList() {
      this.swiperItemList = this.$children.filter(item => {
        return item.$el.className.indexOf("wr-swipe-item");
      });
    },
    /**
     *设置子元素容器宽度
     * @return undefined
     * */
    setChildrenWidth() {
      this.wrSwiperwidth = this.$el.offsetWidth * (this.$children.length - 1);
    },
    /**
     * 获取常用数据
     * @return object
     */
    getTouchActiveInfo() {
      let info = {};
      info.swiperTranslateX = this.translate + this.moveTranslate;
      info.swiperClientWidth = this.$el.clientWidth;
      info.length = this.swiperItemList.length;
      info.translate = this.clientExtent * info.length;
      info.swiperItemLast = this.swiperItemList[info.length - 1];
      info.swiperItemFirst = this.swiperItemList[0];
      info.swiperWrapperWidth = this.clientExtent * info.length;
      info.swiperItemWidthLastOne = info.swiperWrapperWidth - this.clientExtent;
      return info;
    },
    /**
     * 开头和结尾可以触摸循环移动
     * @param {distanceDiffer} number -- 触摸移动的距离
     * @return undefined
     */
    loopMove(distanceDiffer) {
      if (!this.touchLoop) return false;
      let {
        swiperTranslateX,
        translate,
        swiperItemLast,
        swiperItemFirst,
        swiperItemWidthLastOne
      } = this.getTouchActiveInfo();

      if (distanceDiffer > 0) {
        if (swiperTranslateX > 0) swiperItemLast.setTranslateX(-translate);
        swiperItemFirst.setTranslateX(0);
      } else {
        if (swiperTranslateX < -swiperItemWidthLastOne) {
          swiperItemFirst.setTranslateX(translate);
        }

        swiperItemLast.setTranslateX(0);
      }
    },
    /**
     * 开头和结尾不可以触摸循环移动
     * @param {distanceDiffer} number -- 触摸移动的距离
     * @return undefined
     */
    unLoopMove(distanceDiffer) {
      if (this.touchLoop) return false;
      let {
        swiperTranslateX,
        swiperItemLast,
        swiperItemFirst,
        swiperItemWidthLastOne
      } = this.getTouchActiveInfo();
      if (distanceDiffer < 0) {
        if (swiperTranslateX <= -swiperItemWidthLastOne) {
          swiperItemFirst.setTranslateX(0);
          swiperItemLast.setTranslateX(0);
          this.translate = -swiperItemWidthLastOne;
          this.moveTranslate = 0;
          return false;
        }
      } else {
        if (swiperTranslateX >= 0) {
          swiperItemFirst.setTranslateX(0);
          swiperItemLast.setTranslateX(0);
          this.translate = 0;
          this.moveTranslate = 0;
          return false;
        }
      }
      return true;
    },
    /**
     * 获取开头和结尾是否可以触摸循环移动
     * @param {distanceDiffer} number -- 触摸移动的距离
     * @return undefined
     */
    getSwipertLoop(distanceDiffer) {
      if (!this.unLoopMove(distanceDiffer)) {
        if (!this.loopMove(distanceDiffer)) return;
      }

      this.moveTranslate = distanceDiffer / 1.1;
    },
    /**
     *开始触摸
     * @param {e} event
     * @return undefined
     */
    swiperTouchstart(e) {
      let {
        length,
        swiperItemLast,
        swiperItemFirst
      } = this.getTouchActiveInfo();
      this.stopAutoPlay();

      if (this.vertical) {
        this.distance = e.touches[0].clientY;
      } else {
        this.distance = e.touches[0].clientX;
      }
      this.activity = true;

      if (this.clientExtent == this.translate) {
        this.translate = -this.clientExtent * (length - 1);
        swiperItemLast.setTranslateX(0);
      }
      if (-length * this.clientExtent == this.translate) {
        this.translate = 0;
        swiperItemFirst.setTranslateX(0);
      }
    },
    /**
     *触摸移动中
     * @param {e} event
     * @return undefined
     */
    swiperTouchmove(e) {
      // this.swiperTouchmoveEl = e;
      let distance;
      if (this.vertical) {
        distance = e.touches[0].clientY;
      } else {
        distance = e.touches[0].clientX;
      }
      let distanceDiffer = distance - this.distance;
      this.getSwipertLoop(distanceDiffer);
    },
    /**
     *触摸结束
     * @return undefined
     */
    swiperTouchend() {
      this.startAutoPlay();
      let index = (this.translate + this.moveTranslate) / this.clientExtent;
      index = Math.round(index);
      this.activity = false;
      this.changeTranslateXByIndex(index);
    },
    /**
     *根据索引改变位置
     *@param {index} index --第几个
     *  @return undefined
     */
    changeTranslateXByIndex(index) {
      let { length } = this.getTouchActiveInfo();
      index = Math.abs(index);
      if (index < length) {
        this.index = index + 1;
      } else {
        this.index = 1;
      }
      this.translate = -this.clientExtent * index;

      this.moveTranslate = 0;
    },
    /**
     *停止自动播放
     * @return undefined
     * */
    stopAutoPlay() {
      if (!this.setIntervalId) return;
      clearInterval(this.setIntervalId);
      this.setIntervalId = "";
    },
    /**
     *开始自动播放
     * @return undefined
     * */
    startAutoPlay() {
      this.stopAutoPlay();
      if (!parseInt(this.autoplay)) return;
      let { length, translate, swiperItemFirst } = this.getTouchActiveInfo();
      if (this.setIntervalId) clearInterval(this.setIntervalId);

      this.setIntervalId = setInterval(() => {
        let { swiperTranslateX } = this.getTouchActiveInfo();
        let index = (swiperTranslateX - this.clientExtent) / this.clientExtent;
        index = Math.round(index);
        if (swiperTranslateX == -(translate - this.clientExtent)) {
          swiperItemFirst.setTranslateX(translate);
          this.activity = false;
          this.translate = 0;
          this.moveTranslate = 0;
        }
        if (index == -(length - 1)) {
          this.activity = false;
          swiperItemFirst.setTranslateX(translate);
          this.changeTranslateXByIndex(index);
        } else if (index < -length) {
          this.activity = true;
          this.translate = 0;
          this.moveTranslate = 0;
          swiperItemFirst.setTranslateX(0);
          setTimeout(() => {
            this.activity = false;
            this.translate = -this.clientExtent;
            this.moveTranslate = 0;
            this.changeTranslateXByIndex(1);
          }, 100);
        } else {
          this.activity = false;
          this.changeTranslateXByIndex(index);
        }
      }, this.autoplay);
    }
  },
  beforeDestroy() {
    this.stopAutoPlay();
  }
};
</script>
<style lang="scss" scoped>
@import "./swiper.scss";
</style>