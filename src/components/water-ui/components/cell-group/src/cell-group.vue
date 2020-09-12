<template>
  <div class="wr-cell-group" :class="[]" :style="{background:background}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "wrCellGroup",
  data() {
    return {};
  },
  props: {
    background: {
      type: String
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "./cell-group.scss";
</style>