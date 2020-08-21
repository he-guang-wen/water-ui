<template>
  <div
    class="wr-picker-item"
    @touchstart.prevent="touchstart($event,data,selectedIndex)"
    @touchmove.prevent="mousemove($event,data,selectedIndex)"
    @touchend.prevent="touchend($event,data,selectedIndex)"
    :style="'height:'+(selecteHeight*5)+'px'"
  >
    <div class="wr-picker-item__wrapper" :style="getWrapperStyle">
      <div
        v-for="(val,index) in wdata"
        :key="index"
        class="item-selecte"
        :style="'height:'+selecteHeight+'px'"
      >
        <span @touchstart.stop="setPositionByIndex(index)">{{val.label}}</span>
      </div>
    </div>
    <div class="wr-picker-item-mask" :style="{backgroundSize:'100%  '+ (selecteHeight*2 - 2)+'px'}"></div>
    <div
      class="wr-picker-item-indicator"
      :style="{'top':(selecteHeight * 2)+'px','height':selecteHeight+'px' }"
    ></div>
  </div>
</template>

<script>
// import { throttle } from "../../utils/debounce";
// let testThrottle = throttle();
export default {
  name: "wrPickerItem",
  props: {
    data: {
      type: Array,
    },
    name: {
      type: [Number, String],
    },
  },

  data() {
    return {
      startPageY: 0,
      translateY: 0,
      lastPageY: 0,
      currentTranslateY: 0,
      activity: false,
      timer: null,
      mousemoveIngo: "",
      number: 0,
      time: "",
      mousemoveTime: 1,
      selecteHeight: 40,
      selectedIndex: 0,
      wdata: "",
      short: false,
    };
  },
  watch: {
    data: {
      handler(val) {
        this.wdata = val;
      },
      immediate: true,
    },
  },
  computed: {
    getWrapperStyle() {
      let translateY = this.translateY + this.currentTranslateY;
      let transform = "translateY(" + translateY + "px)";
      let time = this.activity ? 0 : 0.3;
      let transitionDuration = time + "s";
      return {
        transform: transform,
        transitionDuration: transitionDuration,
      };
    },
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.translateY = this.selecteHeight * 2;
    });
  },
  methods: {
    ddd() {
      console.log(11);
    },
    setDate(data) {
      for (let key in data) {
        this[key] = data[key];
      }
    },
    touchstart(e) {
      // transition-duration: 0ms;
      this.activity = true;
      this.startPageY = e.touches[0].pageY;
    },
    mousemove(e) {
      this.mousemoveIngo = e;
      let pageY = e.touches[0].pageY;
      let difference = this.startPageY - pageY;

      if (Math.abs(difference) > this.selecteHeight / 2) {
        this.short = true;
      } else {
        this.short = false;
      }
      // this.translateY =  v
      if (difference > 0) {
        if (this.currentTranslateY + this.translateY >= 80) {
          this.translateY = 80;
          this.currentTranslateY = 0;
          difference = 0;
        }
      } else {
        let max = (this.wdata.length - 3) * this.selecteHeight;
        if (this.currentTranslateY + this.translateY <= -max) {
          this.translateY = -max;
          this.currentTranslateY = 0;
          difference = 0;
        }
      }

      this.currentTranslateY += difference * 0.6;
      // console.log(dff);
      // if (!this.time) {
      //   this.time = setInterval(() => {
      //     this.mousemoveTime += 1;
      //   }, 1000);
      // }

      // testThrottle(this.setPageY, 50);

      // if (this.mousemoveTime > 1) {
      //   testThrottle(this.setPageY, 150);
      // } else {
      //   testThrottle(this.setPageY, 20);
      // }
    },
    setTranslateYByIndex(index) {
      //  this.translateY = 0;
      this.currentTranslateY = 0;
      this.translateY = index * this.selecteHeight;
    },

    setPositionByIndex(index) {
      if (index == 0) {
        index = 2;
      } else if (index == 1) {
        index = 1;
      } else {
        index = -index + 2;
      }
      this.setTranslateYByIndex(index);
    },
    getIndexbyTranslateY() {
      let translate = this.currentTranslateY + this.translateY;
      let index = Math.round(translate / this.selecteHeight);
      if (index == 0) {
        index = 2;
      } else {
        index -= 2;
      }
      return Math.abs(index);
    },
    setPageY() {
      let e = this.mousemoveIngo;
      if (this.lastPageY) {
        if (this.lastPageY > e.touches[0].pageY) {
          if (
            Math.abs(this.translateY) ==
            Math.abs(
              this.selecteHeight * (this.wdata.length - 1) -
                this.selecteHeight * 2
            )
          ) {
            return;
          }
          this.translateY -= this.selecteHeight;
        } else {
          if (this.translateY == this.selecteHeight * 2) {
            return;
          }
          this.translateY += this.selecteHeight;
        }
        this.lastPageY = e.touches[0].pageY;
      } else {
        this.lastPageY = e.touches[0].pageY;
      }
      console.log(
        Math.abs(this.translateY),
        this.selecteHeight,
        this.wdata.length - 1,
        this.selecteHeight * 2,
        this.selecteHeight * (this.wdata.length - 1) - this.selecteHeight * 2
      );
    },
    touchend() {
      this.activity = false;
      if (this.short) return;
      // if (Math.abs(difference) < this.selecteHeight / 2) return;

      let translate = this.currentTranslateY + this.translateY;

      let st = Math.round(translate / this.selecteHeight);
      this.setTranslateYByIndex(st);
      // console.log(this.translateY, this.translateY / this.selecteHeight);
      // console.log(e, "eeeeeeeeeee");
      // clearInterval(this.time);
      // this.time = "";
      // this.mousemoveTime = 1;
      // this.selectedIndex = parseInt(
      //   Math.abs(this.translateY - this.selecteHeight * 2) / this.selecteHeight
      // );

      // console.log(this.selectedIndex, "this.selectedIndex");
      // console.log(this.selectedIndex, this.wdata[this.selectedIndex]);
      // console.log(this._uid, data, "datadatadata");
      let selectedIndex = this.getIndexbyTranslateY();

      this.selectedIndex = selectedIndex;
      this.$emit("change", this);
    },
  },
};
</script>

<style lang="scss">
@import "./picker-item.scss";
</style>
