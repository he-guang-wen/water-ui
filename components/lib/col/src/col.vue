<template>
  <div :class="['wr-col wr-col-'+span]" @click="colClick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "wrCol",
  data() {
    return {};
  },
  props: {
    span: {
      type: [String, Number],
      default: 24
    }
  },
  methods: {
    colClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./col.scss";
</style>