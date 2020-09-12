<template>
  <div class="wr-cell-group" :class="[]" :style="{background:background}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "wrCellGroup",
  props: {
    background: {
      type: String
    },
  }
};
</script>
<style lang="scss" scoped>
@import "./cell-group.scss";
</style>