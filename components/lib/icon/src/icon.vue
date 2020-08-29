<template>
  <i :class="'wr-icon wr-icon--'+ name" :style="{'color':color,'fontSize':size+'px'}" @click="iconClick"></i>
</template>
<script>
export default {
  name: "wrIcon",
  props: {
    name: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: [String, Number],
      default: 25,
    },
  },
  computed: {
  },
  methods: {
    iconClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="scss">
.wr {
  display: inline-block;
}
</style>