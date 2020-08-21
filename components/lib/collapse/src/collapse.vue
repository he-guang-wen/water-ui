<template>
  <div :style="{background:background}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "wrCollapse",
  props: {
    value: {
      type: [Array, String]
    },
    //带箭头
    arrow: {
      type: Boolean,
      default: true
    },
    //是否开启手风琴效果
    accordion: {
      type: Boolean,
      default: false
    },
    //背景颜色
    background: {
      type: String,
      default: "#fff"
    }
  },
  mounted() {
    this.init();
    this.setCollapseItemShow();
  },
  methods: {
    //初始化显示状态
    setCollapseItemShow() {
      if (this.value) {
        if (this.accordion) {
          let value = this.getValueByType();

          this.$children.map(item => {
            // let name = item.name || item.defaultName
            if (value == item.name || value == item.defaultName) {
              item.open();
            }
          });
        } else {
          this.$children.map(item => {
            this.value.forEach(val => {
              if (val == item.name || val == item.defaultName) {
                item.open();
              }
            });
          });
        }
      }
    },
    getValueByType() {
      let valueType = Object.prototype.toString.call(this.value);

      if (valueType == "[object String]") {
        return this.value;
      } else if (valueType == "[object Array]") {
        return this.value[0];
      }
    },
    init() {
      this.$children.map((item, index) => {
        if (!item.name) {
          item.defaultName = index;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./collapse.scss";
</style>