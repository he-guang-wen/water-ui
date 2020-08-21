<template>
  <div
    class="wr-switch"
    :style="[{fontSize:size+'px'},{backgroundColor:checked?activeColor:inactiveColor,borderColor:checked?activeColor:inactiveColor}]"
    :class="[{'wr-switch--on':checked},{'wr-disabled':disabled},{'wr-switch-loading':loading}]"
    @click="changeValue"
  >
    <div class="wr-switch-node" :style="checked?'transform: translateX(1em);':'' ">
      <wr-loading size="12" v-if="loading"></wr-loading>
    </div>
  </div>
</template>
<script>
export default {
  name: "wrSwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    size: {
      type: [String, Number],
      default: 30,
    },
    activeColor: {
      type: String,
      default: "#1989fa",
    },
    inactiveColor: {
      type: String,
      default: "#cccccc",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checked: false,
    };
  },

  watch: {
    checked: {
      handler(val) {
        this.$emit("input", val);
        this.$emit("change", val);
      },
    },
  },
  created() {
    this.checked = this.value;
  },
  methods: {
    changeValue(e) {
      this.checked = !this.checked;
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="scss" scoped>
.wr-switch-loading {
  pointer-events: none;
  cursor: not-allowed;
}
</style>