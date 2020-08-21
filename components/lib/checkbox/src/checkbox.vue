<template>
  <div class="wr-checkbox" @click="setChecked" :class="getCheckboxClass">
    <slot name="icon" :props="$data">
      <div
        class="wr-checkbox_icon-wrap"
        :style="getCheckboxIconWrapStyle"
        :class="{'wr-checkbox--round':round}"
      >
        <wr-icon name="seleted" :size="size*0.8" :style="getIconStyle" :color="getIconColor"></wr-icon>
      </div>
    </slot>
    <span class="wr-checkbox_label">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "wrCheckbox",
  props: {
    //值
    value: {
      type: Boolean,
      default: false
    },
    //标识符
    name: {
      type: [String, Number]
    },
    //大小
    size: {
      type: [String, Number],
      default: 22
    },
    //圆形
    round: {
      type: Boolean,
      default: false
    },
    //禁用
    disabled: {
      type: Boolean,
      default: false
    },
    //选中状态下的颜色
    checkedColor: {
      type: String,
      default: "#00a1ff"
    },
    //平均分布
    spaceBetween: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      //选中状态
      checked: false
    };
  },
  watch: {
    value: {
      handler(val) {
        this.checked = val;
      },
      immediate: true
    },
    checked(val) {
      this.$emit("change", val);
    }
  },
  computed: {
    getCheckboxClass() {
      return {
        "wr-checkbox--disabled": this.disabled,
        "wr-checkbox__space-between": this.spaceBetween && this.$parent.vertical
      };
    },
    getCheckboxIconWrapStyle() {
      let isDisabled = this.disabled || this.$parent.disabled;
      let onBackground = isDisabled ? "#ebedf0" : this.checkedColor;
      let onBorderColor = isDisabled ? "#c8c9cc" : this.checkedColor;
      let unBackground = "#fff";
      let unBorderColor = "#ccc";

      let width = this.size + "px";
      let height = this.size + "px";
      let background = this.checked ? onBackground : unBackground;
      let borderColor = this.checked ? onBorderColor : unBorderColor;

      // let style = {
      //   width: this.size + "px",
      //   height: this.size + "px"
      // };
      // if (this.checked) {
      //   style.background =
      //     this.disabled || this.$parent.disabled
      //       ? "#ebedf0"
      //       : this.checkedColor;
      //   style.borderColor =
      //     this.disabled || this.$parent.disabled
      //       ? "#c8c9cc"
      //       : this.checkedColor;
      // } else {
      //   style.background = "#fff";
      //   style.borderColor = "#ccc";
      // }

      return {
        width: width,
        height: height,
        background: background,
        borderColor: borderColor
      };
    },
    getIconColor() {
      let color = "#fff";
      if (this.disabled || this.$parent.disabled) {
        color = "#c8c9cc";
      }
      return color;
    },
    getIconStyle() {
      return {
        opacity: this.checked ? 1 : 0
      };
    }
  },
  methods: {
    /**
     * 修改选中状态
     */
    setChecked(e) {
      // if (this.$parent.getMeetMax() && !this.checked) return;
      let haveCheckboxGroup;
      let checked = !this.checked;
      haveCheckboxGroup = this.$parent.$vnode.tag.indexOf("wrCheckboxGroup");
      if (haveCheckboxGroup != -1) {
        if (this.$parent.getMeetMax() && !this.checked) return;
        this.$parent.setValueByCheckboxChecked(checked, this.name);
      }
      if (this.disabled || this.$parent.disabled) return;
      this.$emit("click", e);

      this.checked = checked;
      this.$emit("input", checked);
    }
    // setChecked(value) {
    //   // this.checked = value;
    //   // if (this.$parent.getMeetMax()) return;
    //   let haveCheckboxGroup;
    //   if (this.disabled || this.$parent.disabled) return;
    //   haveCheckboxGroup = this.$parent.$vnode.tag.indexOf("wrCheckboxGroup");
    //   if (haveCheckboxGroup != -1) {
    //     if (this.$parent.getMeetMax() && !this.checked) return;
    //   }
    //   this.checked = value;
    //   this.$emit("input", value);
    // }
  }
};
</script>
<style lang="scss" scoped>
@import "./checkbox.scss";
</style>