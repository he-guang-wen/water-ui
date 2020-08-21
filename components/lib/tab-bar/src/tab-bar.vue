<template>
  <div class="wr-tab-bar" :class="tabBbarClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "wrTabBar",
  props: {
    value: {
      type: String,
    },
    //选中标签颜色
    activeColor: {
      type: String,
      default: "red",
    },
    //未选中标签颜色
    nactiveColor: {
      type: String,
      default: "#000",
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true,
    },
    fixed: {
      type: Boolean,
      default: true,
    },
    border: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    tabBbarClass() {
      return {
        "wr-tab-bar--border": this.border,
        "wr-tab-bar--fixed": this.fixed,
        "safe-area-inset-bottom": this.safeAreaInsetBottom,
      };
    },
  },
  watch: {
    value(val) {
      let data;
      this.$children.map((item, index) => {
        if (item.name == val) {
          data = {
            index: index,
            name: val,
          };
        }
      });
      this.$emit("change", data);
    },
  },
  methods: {
    setValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>
<style lang="scss">
@import "./tab-bar.scss";
</style>