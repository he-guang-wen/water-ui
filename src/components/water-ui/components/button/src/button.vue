<template>
  <button
    class="wr-button"
    :class="['wr-button--'+type,'wr-button-size--'+size,{round:round},{plain:plain},{'wr-disabled':isDisabled}]"
    :style="[{background:plain?'#ffffff':color,borderColor:isBorderColor,color:plain?color:'#fffff'}]"
  >
    <div class="wr-button-body">
      <wr-loading v-if="loading" size="16" type="spinner" color="#e0cece"></wr-loading>
      <wr-icon v-else-if="icon" :name="icon"></wr-icon>
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  name: "wrButton",
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      default: "default"
    },
    round: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    }
  },
  computed: {
    isDisabled() {
      return this.loading || this.disabled ? true : false;
    },
    isBorderColor() {
      return this.color.indexOf("linear") == -1 ? this.color : "transparent";
    }
  }
};
</script>
<style lang="scss">
@import "./button.scss";
</style>