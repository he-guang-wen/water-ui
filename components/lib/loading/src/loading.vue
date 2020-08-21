<script>
export default {
  name: "wrLoading",
  props: {
    type: {
      type: String,
      default: "circle"
    },
    size: {
      type: [String, Number],
      default: "40"
    },
    color: {
      type: String,
      default: "#999"
    }
  },
  render: function(h) {
    let loading;
    //菊花loading的子节点集合
    const spinnerItemList = [];
    //公用的class
    const publicCLassList = ["wr-loading", "wr-" + this.type];
    //环形loading
    const circle = h("div", {
      class: publicCLassList,
      style: {
        width: this.size + "px",
        height: this.size + "px",
        borderTop: "3px solid " + this.color
      }
    });

    //菊花loading的子节点
    const spinnerItem = function(i) {
      return h("div", {
        class: "wr-spinner-content wr-spinner-item" + (i + 1)
      });
    };

    //循环添加子节点
    for (let i = 0; i < 12; i++) {
      spinnerItemList.push(spinnerItem(i));
    }

    //环形loading
    const spinner = h(
      "div",
      {
        class: publicCLassList,
        style: {
          "--wr-spinnerColor": this.color,
          width: this.size + "px",
          height: this.size + "px"
        }
      },
      spinnerItemList
    );

    //根据type进行渲染
    if (this.type == "circle") {
      loading = circle;
    } else if (this.type == "spinner") {
      loading = spinner;
    }

    return loading;
  }
};
</script>
<style lang="sass" scoped>
@import './loading.scss'
</style>