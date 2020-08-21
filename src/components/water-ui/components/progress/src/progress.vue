
<script>
export default {
  name: "wrProgress",
  props: {
    //当前值
    value: {
      type: Number,
      default: 0
    },
    target: {
      type: Number,
      default: 120
    },
    //进度条颜色
    color: {
      type: String,
      default: "#E73468"
    },
    //进度轨道颜色
    trackColor: {
      type: String,
      default: "#C9CACA"
    },
    //保留几位小数
    decimalPlace: {
      type: Number,
      default: 2
    },
    //条形进度条内嵌的百分比
    barBuilt: {
      type: Boolean,
      default: false
    },
    //条形进度的高度
    barHeight: {
      type: Number,
      default: 15
    },
    //条形进度条是否显示波浪特效
    wave: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      progressWidth: 0
    };
  },
  render: function(h) {
    //进度信息
    const progressInfo = h(
      "div",
      {
        class: "wr-progress-barBuilt-info",
        style: {
          fontSize: this.barHeight * 0.8 + "px"
        }
      },
      this.getDecimal() >= 100 ? "成功" : this.getDecimal() + "%"
    );

    const barBuiltProgressInfo = h(
      "div",
      {
        class: "wr-progress-info",
        style: {
          fontSize: this.barHeight * 0.8 + "px"
        }
      },
      this.getDecimal() + "%"
    );

    //条形进度条
    const bar = h(
      "div",
      {
        class: "wr-progress-bar",
        style: {
          background: this.trackColor
        }
      },
      [
        h(
          "div",
          {
            class: [
              this.wave ? "wr-progress-bar-wave" : "",
              "wr-progress-bar-value"
            ],
            style: {
              width: this.getDecimal() + "%",
              height: this.barHeight + "px",
              background: this.color,
              transition: "width .2s ease-in"
            }
          },
          [
            h(
              "div",
              {
                class: "wr-progress-bar-marke"
              },
              [barBuiltProgressInfo]
            )
          ]
        )
      ]
    );

    // 条形进度容器
    const barContainer = h(
      "div",
      {
        class: "wr-progress-barContainer"
      },
      [bar, progressInfo]
    );

    //进度条
    let Progress = h(
      "div",
      {
        class: "wr-progress",
        ref: "wrProgressBar"
      },
      [barContainer]
    );

    return Progress;
  },
  computed: {},
  mounted() {
    this.getBarWidth();
  },
  methods: {
    getStrokeDasharray() {
      let percent = this.value / this.target,
        perimeter = Math.PI * 100;
      return perimeter * percent + " " + perimeter * (1 - percent);
    },
    getBarWidth() {
      this.progressWidth = this.$refs.wrProgressBar.offsetWidth;
    },
    getDecimal() {
      //   let rez = 1;
      //   let lenght = this.decimalPlace;
      //   for (let i = 0; i < lenght; i++) {
      //     rez += "0";
      //   }
      //   rez = parseInt(rez);
      //   value = Math.round(value * rez) / rez;
      //   if (value >= 100) {
      //     return Math.round(100 * rez) / rez;
      //   } else {
      //     return value;
      //   }
      let dat = Math.round((this.value / this.target) * 100);

      if (dat <= 100) {
        return dat;
      } else {
        return 100;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./progress.scss";
</style>