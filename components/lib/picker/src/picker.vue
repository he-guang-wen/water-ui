

<script>
import wrPickerItem from "../../picker-item/index";
import wrPopup from "../../popup/index";
export default {
  name: "wrPicker",
  components: {
    wrPickerItem,
    wrPopup,
  },
  props: {
    value: {
      type: Array,
    },
    data: {
      type: Array,
    },
    title: {
      type: String,
    },
    props: {
      type: Object,
      default: () => {
        return {
          value: "value",
          label: "label",
          children: "children",
        };
      },
    },
  },
  data() {
    return {
      index: 0,
      prIndex: 0,
      array: [],
      show: false,
      pickerItemList: [],
    };
  },

  render: function (h) {
    //pickerItem集合
    let pickerItemList = [];
    let id = 0;
    let index = 0;
    //picker头部
    let pickerTitle = h(
      "div",
      {
        class: "wr-picker-title-body",
      },
      [
        h(
          "div",
          {
            class: "wr-picker__cancel",
            on: {
              click: this.emitCancel,
            },
          },
          "取消"
        ),
        h("div", this.title),
        h(
          "div",
          {
            class: "wr-picker__confirm",
            on: {
              click: this.emitConfirm,
            },
          },
          "确定"
        ),
      ]
    );

    //创建pickerItem
    const createPickerItem = (_data) => {
      const createE = h("wr-picker-item", {
        props: {
          data: _data,
          name: index,
        },
        attrs: {
          id: "wr-picker-item-" + index,
          index: index,
        },
        on: {
          change: (e) => {
            if (!this.data[0].children) return;
            this.setPickerList(e);
          },
        },
        style: {
          width: "100%",
        },
      });

      //pickerItem添加到pickerItemList
      pickerItemList.push(createE);
      index += 1;
      if (this.data[0].children) {
        if (_data[id].children) createPickerItem(_data[id].children);
      } else {
        if (index < this.data.length) createPickerItem(this.data[index]);
      }
    };

    //执行，创建pickerItem
    if (this.data[0].children) {
      createPickerItem(this.data);
    } else {
      createPickerItem(this.data[0]);
    }

    //创建picker组件
    const picker = h(
      "wr-popup",
      {
        props: {
          position: "bottom",
          value: this.show,
        },
        on: {
          click: () => {
            this.show = false;
          },
        },
      },
      [
        pickerTitle,
        h(
          "div",
          {
            class: "wr-picker-body",
          },
          [pickerItemList]
        ),
      ]
    );

    return picker;
  },
  mounted() {
    this.pickerItemList = this.$children[0].$children.filter((item) => {
      return item.$el.className.indexOf("wr-picker-item") != -1;
    });
    // this.getValue(this.data);
    // console.log(this.array, "arrr");
  },
  watch: {
    value: {
      handler() {
        this.$nextTick(() => {
          this.setPickersByValue();
        });
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    change() {
      console.log(this, "111111111111111111");
    },
    demo() {
      this.$h("div", "3288888888", this.$refs.der);
      return 1231;
    },
    setPickerList(e) {
      this.pickerItemList.map((item, index, arr) => {
        if (e.$attrs.index < item.$attrs.index) {
          let selectedIndex = arr[index - 1].selectedIndex;
          let children = arr[index - 1].wdata[selectedIndex].children;
          if (!children) children = [];
          item.setDate({
            wdata: children,
            translateY: item.selecteHeight * 2,
            selectedIndex: 0,
          });
        }
      });
    },
    setPickersByValue() {
      this.$nextTick(() => {
        let data = this.data;
        this.value.forEach((item, itemIndex) => {
          if (!this.data[0].children) data = this.data[itemIndex];
          let index = data.findIndex((val) => {
            return val.value == item;
          });
          if (index == -1) return;
          if (this.data[0].children) {
            this.pickerItemList[itemIndex].wdata = data;
            data = data[index].children;
          }
          let pickerItem = this.pickerItemList[itemIndex];
          pickerItem.setPositionByIndex(index);
          let selectedIndex = pickerItem.getIndexbyTranslateY();
          pickerItem.selectedIndex = selectedIndex;
        });
      });
    },
    emitConfirm() {
      let list = [];
      let values = [];
      this.pickerItemList.map((item) => {
        if (item.wdata.length > 0) {
          let pValue = this.props.value;
          let pLabel = this.props.label;
          let selectedIndex = item.selectedIndex;
          let value = item.wdata[selectedIndex][pValue];
          let label = item.wdata[selectedIndex][pLabel];
          list.push({ value, label });
          values.push(value);
        } else {
          list.push({ value: null, label: null });
        }
      });
      if (this.value) this.$emit("input", values);
      this.$emit("confirm", { list, values });
    },
    emitCancel() {
      this.close();
      this.$emit("cancel");
    },
    close() {
      this.show = false;
    },
    open() {
      this.show = true;
    },
    getValue(data) {
      data.forEach((item, itemIndex) => {
        let st = { label: item[this.props.label] };
        this.array.push(st);
        //   this.array.push(item)
        item.children.forEach((val, valIndex) => {
          this.array[itemIndex][valIndex] = val;
        });
      });
    },
  },
};
</script>
<style lang="scss">
@import "./picker.scss";
</style>