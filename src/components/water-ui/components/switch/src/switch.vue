<template>
  <div
    class="wr-switch"
    :style="[{fontSize:size+'px'},{backgroundColor:checked?activeColor:inactiveColor,borderColor:checked?activeColor:inactiveColor}]"
    :class="[{'wr-switch--on':checked},{'wr-disabled':disabled||loading}]"
    @click="changeValue()"
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
      default: true
    },
    size: {
      type: [String, Number],
      default: 30
    },
    activeColor: {
      type: String
    },
    inactiveColor: {
      type: String,
      default: "#cccccc"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checked: false
    };
  },

  watch: {
    checked: {
      handler(val) {
        this.$emit("input", val);
        this.$emit("change", val);
      }
    }
  },
  created() {
    this.checked = this.value;
  },
  methods: {
    changeValue() {
      this.checked = !this.checked;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>