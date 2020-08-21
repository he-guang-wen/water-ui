<template>
  <div class="wr-radio-group" :class="{'wr-radio-group--vertical':vertical,'wr-disabled':disabled}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "wrRadioGroup",
  props: {
    //值
    value: {
      type: [String, Number]
    },
    //排列方向是否为垂直
    vertical: {
      type: Boolean,
      default: false
    },
      round:{
      type:Boolean,
      default:false
    },
     checkedColor: {
      type: String,
      default: "#00a1ff"
    },
    //是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
  
  },
  watch: {
    value: {
      handler(val) {
        this.$nextTick(() => {
          this.$children.map(item => {
            if (item.name == val) {
              item.setRadioChecked(true);
            } else {
              item.setRadioChecked(false);
            }
          });
        });
      },
      immediate: true
    }
  },
  methods: {
    setRadioGroupValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./radio-group.scss";
</style>