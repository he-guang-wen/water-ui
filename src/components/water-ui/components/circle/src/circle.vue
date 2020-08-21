
<script>
export default {
  name: "wrCircle",
  props: {
    //当前值
    value: {
      type: Number,
      default: 0
    },
    //最终值
    target: {
      type: Number,
      default: 120
    },
    //进度条形状 circle圆形 bar条形
    type: {
      type: String,
      default: "circle"
    },

    //圆形进度条直径
    size: {
      type: [String, Number],
      default: 200
    },
    //进度条颜色
    color: {
      type: String,
      default: "#E73468"
    },
    //圆形进度轨道颜色
    trackColor: {
      type: String,
      default: "#C9CACA"
    },
    //圆形进度条宽度
    strokeWidth: {
      type: [String, Number],
      default: 10
    },
    //保留几位小数
    decimalPlace: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      progressWidth: 0
    };
  },
  render: function(h) {
    //进度信息
    // const progressInfo = h(
    //   "div",
    //   {
    //     class: "wr-progress-barBuilt-info",
    //     style: {
    //       fontSize: this.barHeight * 0.8 + "px"
    //     }
    //   },
    //   this.getDecimal() >= 100 ? "成功" : this.getDecimal() + "%"
    // );

    //圆形进度
    const circle = h("svg", {}, [
      h("circle", {
        attrs: {
          cx: this.size / 2,
          cy: this.size / 2,
          r: this.size / 4,
          "stroke-width": this.strokeWidth,
          stroke: this.trackColor,
          fill: "none"
        }
      }),
      h("circle", {
        attrs: {
          cx: this.size / 2,
          cy: this.size / 2,
          r: this.size / 4,
          "stroke-width": this.strokeWidth,
          stroke: this.color,
          fill: "none",
          "stroke-dasharray": this.getStrokeDasharray()
        },
        style: {
          transform: " matrix(0, -1, 1, 0, 0, " + this.size + ")",
          transition: "stroke-dasharray .2s ease-in"
        }
      })
    ]);

    // 圆形进度容器内联样式
    const circleContainerStyle = {
      width: this.size + "px",
      height: this.size + "px"
    };

    // 圆形进度容器
    const circleContainer = h(
      "div",
      {
        class: "wr-progress-circle",
        style: circleContainerStyle
      },
      [
        circle,
        h(
          "div",
          {
            class: "wr-progress-circle_text"
          },
          this.value > 5 ? this.getDecimal() + "%" : ""
        )
      ]
    );

    //进度条
    let Progress = h(
      "div",
      {
        class: "wr-progress",
        ref: "wrProgressBar"
      },
      [circleContainer]
    );

    return Progress;
  },
  computed: {},
  mounted() {},
  methods: {
    //svg圆形进度
    getStrokeDasharray() {
      let percent = this.value / this.target,
        perimeter = Math.PI * 100;
      return perimeter * percent + " " + perimeter * (1 - percent);
    },
    //获取进度值
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
@import "./circle.scss";
</style>