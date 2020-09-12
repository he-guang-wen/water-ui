
<script>
import {h} from "vue";
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
  setup(props,context){
     
    //设置头部内容
    const setcellHeader = () => {
      //左边图标
      const icon = props.icon
        ? h("wr-icon", {
            props: {
              name: props.icon,
              color: props.iconColor
            }
          })
        : "";
      //右边是否显示箭头
      const arrow = props.arrow
        ? h("wr-icon", {
            props: {
              name: "arrow-right",
              color: props.iconColor
            },
            class: "arrow-direction--" + props.arrowDirection
          })
        : "";

      //头部左侧内容
      const headerLeftContent = [
        props.showIcon ? icon : "",
        h(
          "span",
          {
            class: "wr-cell-header_right"
          },
          props.title 
        )
      ];
   
      //头部左侧插槽
      const slotHeaderLeft = context.slots.left
        ? context.slots.left()
        : headerLeftContent;

           const headerLeft = h(
        "div",
        {
          class: "wr-cell-header_left",
          style: {
            color: props.titleColor
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
          props.content
        ),
        arrow
      ];

      //头部右侧插槽
      const slotHeaderRight = context.slots.right
        ? context.slots.right()
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
      const description = props.description
        ? h(
            "div",
            {
              class: "cell-description"
            },
            props.description
          )
        : "";

      //描述插槽
      const slotdescription = context.slots.description
        ? context.slots.description()
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
          click: props.cellClick
        }
      },
      [setcellHeader(), setcelldescription()]
    );
    return () =>cell;
  },
  // methods: {
  //   cellClick(e) {
  //     this.$emit("click", e);
  //   }
  // }
};
</script>
<style lang="scss">
@import "./cell.scss";
</style>