<template>
  <div class="wr-count-down">
    <slot name="default" :timeData="getTimeRemaining ">{{getTimeRemaining | format(decollator)}}</slot>
  </div>
</template>
<script>
export default {
  name: "wrCountDown",
  props: {
    // 分隔符号  decollator 
    decollator: {
      type: Object,
      default: () => {
        return {
          d: ":",
          h: ":",
          m: ":",
          s: "",
          ms: ""
        };
      }
    },
    //倒计时
    time: {
      type: Number,
      default: 0
    },
    //格式
    format: {
      type: String,
      default: "mm-ss"
    },
    //是否开启毫秒
    millisecond: {
      type: Boolean,
      default: false
    },
    //自动倒计时
    automation: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      totalTime: 0,
      step: this.millisecond ? 80 : 100,
     setIntervalID:''

    };
  },

  watch: {
    time: {
      handler(val) {
        this.totalTime = val;
        clearInterval(this.setIntervalID);
        this.start();
      },
      immediate: true
    }
  },
  filters: {
    format(val,decollator) {
      let value = "";
      for (let key in val) {
  
        value += val[key] +decollator[key] ;
      }
      return value;
    }
  },
  computed: {
    getTimeRemaining() {
      let result;

      //    初始化数值
      let d = 0; //天数
      let h = 0; //时
      let m = 0; //分
      let s = 0; //秒
      let ms = 0; //秒
      if (this.format.indexOf("dd-hh-mm-ss") != -1) {
        d = Math.floor(this.totalTime / 1000 / 60 / 60 / 24); //计算天数
        h = Math.floor((this.totalTime / 1000 / 60 / 60) % 24); //计算时数
        m = Math.floor((this.totalTime / 1000 / 60) % 60); //计算分数
        s = Math.floor((this.totalTime / 1000) % 60); //计算秒数
        result = {
          // d: d < 10 ? "0" + d + this.decollator.d : d + this.decollator.d,
          // h: h < 10 ? "0" + h + this.decollator.h : h + this.decollator.h,
          // m: m < 10 ? "0" + m + this.decollator.m : m + this.decollator.m,
          // s: s < 10 ? "0" + s + this.decollator.s : s + this.decollator.s
                 d: d < 10 ? "0" + d  : d ,
          h: h < 10 ? "0" + h  : h ,
          m: m < 10 ? "0" + m  : m ,
          s: s < 10 ? "0" + s  : s 
        };
      } else if (this.format.indexOf("hh-mm-ss") != -1) {
        h = Math.floor(this.totalTime / 1000 / 60 / 60); //计算时数
        m = Math.floor((this.totalTime / 1000 / 60) % 60); //计算分数
        s = Math.floor((this.totalTime / 1000) % 60); //计算秒数
        result = {
          // h: h < 10 ? "0" + h + this.decollator.h : h + this.decollator.h,
          // m: m < 10 ? "0" + m + this.decollator.m : m + this.decollator.m,
          // s: s < 10 ? "0" + s + this.decollator.s : s + this.decollator.s
              h: h < 10 ? "0" + h  : h ,
          m: m < 10 ? "0" + m  : m ,
          s: s < 10 ? "0" + s  : s 
        };
      } else if (this.format.indexOf("mm-ss") != -1) {
        m = Math.floor(this.totalTime / 1000 / 60); //计算分数
        s = Math.floor((this.totalTime / 1000) % 60); //计算秒数
        result = {
          // m: m < 10 ? "0" + m + this.decollator.m : m + this.decollator.m,
          // s: s < 10 ? "0" + s + this.decollator.s : s + this.decollator.s
              m: m < 10 ? "0" + m : m,
          s: s < 10 ? "0" + s  : s 
        };
      } else if (this.format.indexOf("ss") != -1) {
        s = Math.floor(this.totalTime / 1000); //计算秒数
        result = {
          // s: s < 10 ? "0" + s + this.decollator.s : s + this.decollator.s
             s: s < 10 ? "0" + s  : s 
        };
      }

      //毫秒
      if (this.millisecond) {
        ms = Math.floor(this.totalTime % 1000) / 10; //计算秒数
        let placeholder = this.decollator.s ? "" : ":";
        // result.ms =
        //   ms < 10
        //     ? placeholder + "0" + ms + this.decollator.ms
        //     : placeholder + ms + this.decollator.ms;
            result.ms =
          ms < 10
            ? placeholder + "0" + ms 
            : placeholder + ms ;
      }
      this.$emit("change", result);
      return result;
    }
  },
  mounted() {},
  beforeDestroy() {
    clearInterval(this.setIntervalID);
  },
  methods: {
    start() {
      this.setIntervalID = setInterval(() => {
        if (this.totalTime <= 0) {
          this.$emit("finish", "");
          clearInterval(this.setIntervalID);
        } else {
          this.totalTime = this.totalTime - this.step;
        }
      }, this.step);
    },
    pause() {
      clearInterval(this.setIntervalID);
    },
    reset() {
      clearInterval(this.setIntervalID);
      this.totalTime = this.time;
      this.automation ? this.start() : "";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./count-down.scss";
</style>