<template>
  <div class="wr-radio" @click="radioClick" :class="getRadioClass">
    <slot name="icon" :props="$data">
      <div
        class="wr-radio_icon-wrap"
        :style="getRadioIconWrapStyle"
        :class="{'wr-radio--round':$parent.round}"
      >
        <wr-icon
          name="seleted"
          :size="size*0.8"
          v-show="$parent.value == name"
          :color="getIconColor"
        ></wr-icon>
      </div>
    </slot>
    <span class="wr-radio_label">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "wrRadio",
  props: {
    //标示符
    name: {
      type: [String, Number]
    },
    size: {
      type: [String, Number],
      default: 22
    },
    spaceBetween: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checked: false
    };
  },
  computed: {
    getRadioClass() {
      return {
        "wr-radio--disabled": this.disabled,
        "wr-radio__space-between": this.spaceBetween && this.$parent.vertical
      };
    },
    getRadioIconWrapStyle() {
      let style = {
        width: this.size + "px",
        height: this.size + "px"
      };
      if (this.$parent.value == this.name) {
        style.background = this.disabled
          ? "#ebedf0"
          : this.$parent.checkedColor;
        style.borderColor = this.disabled
          ? "#c8c9cc"
          : this.$parent.checkedColor;
      } else {
        style.background = "#fff";
        style.borderColor = "#ccc";
      }

      return style;
    },
    getIconColor() {
      let color = "#fff";
      if (this.disabled) {
        color = "#c8c9cc";
      }
      return color;
    }
  },
  methods: {
    setRadioChecked(value) {
      this.checked = value;
    },
    radioClick(e) {
      if (this.disabled || this.$parent.disabled) return;
      this.$emit('click',e)
      this.$parent.setRadioGroupValue(this.name);
      // console.log(this.$parent.$emit('input',this.name),'1111')
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./radio.scss";
</style>