
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
    description: {
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
      const headerLeftContent = [
        this.showIcon ? icon : "",
        h(
          "span",
          {
            class: "wr-cell-header_right"
          },
          this.title
        )
      ];
   
      //头部左侧插槽
      const slotHeaderLeft = this.$scopedSlots.left
        ? this.$scopedSlots.left()
        : headerLeftContent;

           const headerLeft = h(
        "div",
        {
          class: "wr-cell-header_left",
          style: {
            color: this.titleColor
          }
        },
        slotHeaderLeft
      );

      //头部右侧内容

      const headerRightContent = [
        h(
          "span",
          {
            class: "wr-cell-header_content"
          },
          this.content
        ),
        arrow
      ];

      //头部右侧插槽
      const slotHeaderRight = this.$scopedSlots.right
        ? this.$scopedSlots.right()
        : headerRightContent;

      const headerRight = h(
        "div",
        {
          class: "wr-cell-header_right"
        },
        [slotHeaderRight]
      );

      //头部
      const cellHeader = h(
        "div",
        {
          class: "wr-cell-header"
        },
        [headerLeft, headerRight]
      );

      return cellHeader;
    };

    //设置描述内容
    const setcelldescription = () => {
      //描述内容
      const description = this.description
        ? h(
            "div",
            {
              class: "cell-description"
            },
            this.description
          )
        : "";

      //描述插槽
      const slotdescription = this.$scopedSlots.description
        ? this.$scopedSlots.description()
        : description;

      const celldescription = h(
        "div",
        {
          class: "cell-description"
        },
        [slotdescription]
      );

      return celldescription;
    };

    //cell组件 
    const cell = h(
      "div",
      {
        class: "wr-cell",
        on: {
          click: this.cellClick
        }
      },
      [setcellHeader(), setcelldescription()]
    );

    return cell;
  },
  methods: {
    cellClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="scss">
@import "./cell.scss";
</style>