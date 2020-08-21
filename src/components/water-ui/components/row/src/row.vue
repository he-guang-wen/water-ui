<template>
  <div
    class="wr-row"
    :class="[type=='flex'?'wr-row-flex':'','wr-row-justify--'+justify,'wr-row-align--'+align]"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "wrRow",
  data() {
    return{
      
    }
  },
  props: {
    gutter: {
      type: [String, Number],
      default: 20
    },
    type: {
      type: String,
      default: "flex"
    },
    justify: {
      type: String,
      default: "space-between"
    },
    align: {
      type: String,
      default: "center"
    }
  },
  mounted() {
    this.setColGutter();
  },
  methods: {
    setColGutter() {
      this.$children.map(item => {
        item.$el.style.padding = "0 " + parseInt(this.gutter) / 2 + "px";
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./row.scss";
</style>