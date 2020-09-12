<script>
export default {
  name: "wrTransitionAnimation",
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      default: "scale"
    }
  },
  created() {},
  render: function(h) {
    return h(
      "transition",
      {
        attrs: { name: "wr-" + this.name }
      },
      this.$slots.default ? this.$slots.default() : ""
    );
  }
};
</script>
<style lang="scss" scoped>
@import "./transition-animation.scss";
</style>