
<script>
export default {
  name: "wrCell",
  props: {
    title: {
      type: [String, Number]
    },
    titleColor: {
      type: String
    },
    icon: {
      type: String
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    iconColor: {
      type: String
    },
    content: {
      type: [String, Number]
    },
    arrow: {
      type: Boolean,
      default: false
    },
    arrowDirection: {
      type: String,
      default: "right"
    },
    describe: {
      type: [String, Number]
    }
  },
  render: function(h) {
    //设置头部内容
    const setcellHeader = () => {
      //左边图标
      const icon = this.icon
        ? h("wr-icon", {
            props: {
              name: this.icon,
              color: this.iconColor
            }
          })
        : "";
      //右边是否显示箭头
      const arrow = this.arrow
        ? h("wr-icon", {
            props: {
              name: "arrow-right",
              color: this.iconColor
            },
            class: "arrow-direction--" + this.arrowDirection
          })
        : "";

      //头部左侧内容
      const leftTitle = h(
        "div",
        {
          class: "wr-cell-header_left",
          style: {
            color: this.titleColor
          }
        },
        [
         this.showIcon? icon:'',
          h(
            "span",
            {
              class: "wr-cell-header_right"
            },
            this.title
          )
        ]
      );
      //头部左侧插槽
      const slotHeaderLeft = this.$scopedSlots.left
        ? this.$scopedSlots.left()
        : leftTitle;
      //头部
      const cellHeader = h(
        "div",
        {
          class: "wr-cell-header"
        },
        [
          slotHeaderLeft,
          h(
            "div",
            {
              class: "wr-cell-header_right"
            },
            [
              h(
                "span",
                {
                  class: "wr-cell-header_content"
                },
                this.content
              ),
              arrow
            ]
          )
        ]
      );

      return cellHeader;
    };

    //设置描述内容
    const setcellDescribe = () => {
      //描述内容
      const describe = this.describe
        ? h(
            "div",
            {
              class: "cell-describe"
            },
            this.describe
          )
        : "";

      //描述插槽
      const slotDescribe = this.$scopedSlots.describe
        ? this.$scopedSlots.describe()
        : describe;

      const cellDescribe = h(
        "div",
        {
          class: "cell-describe"
        },
        [slotDescribe]
      );

      return cellDescribe;
    };

    //cell组件
    const cell = h(
      "div",
      {
        class: "wr-cell"
      },
      [setcellHeader(), setcellDescribe()]
    );

    return cell;
  }
};
</script>
<style lang="scss">
@import "./cell.scss";
</style>