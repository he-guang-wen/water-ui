<template>
  <div class="md-table-warp">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "mdTableWarp",
};
</script>
<style lang="less" scoped>
.md-table-warp {
  width: 100%;
  overflow-y: auto;
}
</style>