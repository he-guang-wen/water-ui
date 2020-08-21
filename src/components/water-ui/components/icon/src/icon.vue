<template>
  <i :class="'wr icon-'+ name" :style="{'color':color,'fontSize':size+'px'}"></i>
</template>
<script>
export default {
  name: "wrIcon",
  props: {
    name: {
      type: String
    },
    color: {
      type: String
    },
    size: {
      type: [String,Number],
      default:25
    }
  }
};
</script>