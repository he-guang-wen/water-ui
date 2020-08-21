<template>
  <div
    class="wr-input-number"
    :class="{'wr-input-number--disabled':disabled}"
    @click="inputNumberClick"
  >
    <div class="wr-input-number_decrease">
      <slot name="decrease">
        <button
          class="wr-input-number_decrease"
          @click="decrease"
          :disabled="decreaseDisabled"
          :class="{'wr-input-number--disabled':decreaseDisabled}"
          :style="buttonStyle"
        >-</button>
      </slot>
    </div>
    <input
      class="wr-input-number_input"
      ref="input"
      :value="value"
      :readonly="disableInput"
      @focus="focus"
      @input="input"
      @blur="blur"
      :style="inputStyle"
      type="text"
      @click="inputClick"
    />
    <div class="wr-input-number_increase">
      <slot name="increase">
        <button
          class="wr-input-number_increase"
          @click="increase"
          :disabled="increaseDisabled"
          :style="buttonStyle"
          :class="{'wr-input-number--disabled':increaseDisabled}"
        >+</button>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "wrInputNumber",
  props: {
    //值
    value: {
      type: [Number, String],
      default: 1,
    },
    //最大值
    max: {
      type: Number,
      default: Infinity,
    },
    //最小值
    min: {
      type: Number,
      default: -Infinity,
    },
    //步长
    step: {
      type: Number,
      default: 1,
    },
    //小数位
    decimal: {
      type: Number,
      default: 0,
    },
    //背景颜色
    background: {
      type: String,
      default: "#f2f3f5",
    },
    //字体颜色
    textColor: {
      type: String,
      default: "#000000",
    },
    //整体高度
    height: {
      type: [String, Number],
      default: 20,
    },
    //加减按钮的宽度
    buttonWidth: {
      type: [String, Number],
      default: 20,
    },
    //输入框的宽度
    inputWidth: {
      type: [String, Number],
      default: 30,
    },
    //禁止点击
    disabled: {
      type: Boolean,
      default: false,
    },
    //禁止点击输入框
    disableInput: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    value(value) {
      //   console.log(value, "eee");
      this.$emit("change", value);
    },
  },
  data() {
    return {
      decreaseDisabled: false,
      increaseDisabled: false,
      focusValue: "",
    };
  },
  created() {},
  mounted() {
    this.$emit("input", this.getDecimal(this.value));
    // let a = 3.1454;
  },
  computed: {
    buttonStyle() {
      return {
        background: this.background,
        color: this.textColor,
        height: this.height + "px",
        width: this.buttonWidth + "px",
      };
    },
    inputStyle() {
      return {
        background: this.background,
        color: this.textColor,
        height: this.height + "px",
        width: this.inputWidth + "px",
      };
    },
  },

  methods: {
    inputNumberClick(e) {
      this.$emit("click", e);
    },
    inputClick(e) {
      this.$emit("click-input", e);
    },
    //减少
    decrease(e) {
      this.$emit("click-decrease", e);
      let value = parseFloat(this.value);
      if (value - this.step < this.min) {
        this.decreaseDisabled = true;
      } else {
        if (value >= this.max) this.increaseDisabled = false;
        this.$emit("input", this.getDecimal(value - this.step));
      }
    },
    //增加
    increase(e) {
      this.$emit("click-increase", e);
      let value = parseFloat(this.value);
      if (value + this.step > this.max) {
        this.increaseDisabled = true;
      } else {
        if (value <= this.min) this.decreaseDisabled = false;
        this.$emit("input", this.getDecimal(value + this.step));
      }
    },
    //得到焦点
    focus(e) {
      this.focusValue = e.target.value;
    },
    //输入内容发生变化
    input() {
      // this.$emit("input", parseFloat(valueNew));
    },
    //失去焦点
    blur(e) {
      let value = e.target.value;
      let min = parseFloat(value) + this.step < this.min;
      let max = parseFloat(value) + this.step > this.max;
      let isNum = /[^\d\.\-]/g.test(value);
      if (min || max || isNum) {
        let value = this.getDecimal(parseFloat(this.focusValue));
        e.target.value = value;
        this.$emit("input", value);
      } else {
        if (this.decimal < 1) {
          //  value = value.replace(/\b(0+)/g, "");
        }
        value = value.replace(/\b(0+)/g, "");
        //先把非数字的都替换掉，除了数字和.
        value = value.replace(/[^\d\.\-]/g, "");
        //必须保证第一个为数字而不是.
        value = value.replace(/^\./g, "");
        //保证只有出现一个.而没有多个.
        value = value.replace(/\.{2,}/g, ".");
        //保证.只出现一次，而不能出现两次以上
        value = value
          .replace(".", "$#$")
          .replace(/\./g, "")
          .replace("$#$", ".");
        value = value
          ? this.getDecimal(value)
          : this.getDecimal(parseFloat(this.focusValue));
        this.$nextTick(() => {
          this.$emit("input", value);
        });
      }
    },
    //获取小数位
    getDecimal(value) {
      /* eslint-disable */
      let decimal = Math.pow(10, this.decimal);

      value = parseInt(value * decimal) / decimal;
      //  return value
      return value.toFixed(this.decimal);

      // return parseFloat(val.toFixed(this.decimal))
      //   if (Number.isInteger(val)) {
      //     return parseFloat( val + "." + decimal);
      //   } else {
      //     decimal = parseInt("1" + decimal);
      //     return Math.round(val * decimal) / decimal;
      //   }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./input-number.scss";
</style>