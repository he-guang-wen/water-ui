<template>
  <div :class="['wr-col wr-col-'+span]">
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
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "./col.scss";
</style>