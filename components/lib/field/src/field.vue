<template>
  <div
    class="wr-field"
    :class="[{'wr-field-border':border},{'wr-field-required':required},{'wr-field-disabled':disabled}]"
    @click="clickField"
  >
    <div class="wr-field-laber" @click="clickLeft">
      <div class="wr-field-left-icon"></div>
      <span
        class="wr-field-laber_title"
        :style="[{width:labelWidth+'px'},{ textAlign:labelAlign}]"
      >{{label}}</span>
    </div>
    <div class="wr-field-value" @click="clickInput">
      <div class="wr-field-value_inputCon" ref="textareaBody">
        <textarea
          class="wr-field-value_input"
          v-if="type =='textarea' "
          :placeholder="placeholder"
          :value="value"
          :name="name"
          :rows="rows"
          :readonly="readonly"
          :disabled="disabled"
          :autofocus="focus"
          :maxlength="maxLength"
          @focus="focusEvent"
          @input="inputEvent"
          @blur="blurEvent"
        ></textarea>
        <input
          v-else
          class="wr-field-value_input"
          :type="type"
          :placeholder="placeholder"
          :value="value"
          :name="name"
          :readonly="readonly"
          :disabled="disabled"
          :focus="focus"
          :maxlength="maxLength"
          @focus="focusEvent"
          @input="inputEvent"
          @blur="blurEvent"
        />
        <span class="wr-field-error-message">{{errorMessage}}</span>
      </div>
    </div>
    <div class="wr-field-right" @click="clickRight">
      <!-- 右侧插槽 -->
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "wrField",
  props: {
    value: {
      //输入框内容
      type: [String, Number]
    },
    placeholder: {
      //占位提示文字
      type: String
    },
    type: {
      //输入框类型
      type: String,
      default: "text"
    },
    label: {
      //label值
      type: [String, Number]
    },
    labelWidth: {
      //label宽度
      type: [String, Number],
      default: 70
    },
    labelAlign: {
      //label内容对齐方式
      type: String,
      default: "left"
    },
    required: {
      //是否显示必填符号
      type: Boolean,
      default: false
    },
    //错误提示
    errorMessage: {
      type: String
    },
    border: {
      //是否显示边框
      type: Boolean,
      default: true
    },
    //标识符
    name: {
      type: [String, Number]
    },
    // cols: {
    //   //输入框文本区内的可见宽度。 type ==textarea时才生效
    //   type: Number,
    //   default: 80
    // },
    rows: {
      //输入框文本区内的可见行数。 type ==textarea时才生效
      type: Number,
      default: 3
    },
    autoHeight: {
      //是否自动高度。 type ==textarea时才生效
      type: Boolean,
      default: false
    },
    focus: {
      //是否自动聚焦
      type: Boolean,
      default: false
    },
    // password: {
    //   //输入框是否为密码类型 type == text 时才生效
    //   type: Boolean,
    //   default: false
    // },
     //最大长度
    maxLength: {
      type: [String, Number]
    },
    readonly: {
      //输入框是否只读
      type: Boolean,
      default: false
    },
    disabled: {
      //输入框禁止点击
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  mounted() {},
  watch: {},
  methods: {
    clickField(e) {
      this.$emit("click", e);
    },
    clickLeft(e) {
      this.$emit("click-left", e);
    },
    clickInput(e) {
      this.$emit("click-input", e);
    },
    clickRight(e) {
      this.$emit("click-right", e);
    },
    focusEvent(e) {
      this.$emit("focus", e);
    },
    inputEvent(e) {
      if (this.autoHeight && this.type == "textarea") {
        let o = e.target;
        o.style.height = o.scrollTop + o.scrollHeight + "px";
      }
      this.$emit("input", e);
    },
    blurEvent(e) {
      this.$emit("blur", e);
    }
  }

  //   render: h => {
  //     const Laber = () => {
  //       const laber = h(
  //         "div",
  //         {
  //           class: "wr-field-laber"
  //         },
  //         [ h("span", {})]
  //       );

  //       return Laber;
  //     };

  //     const Field = h(
  //       "div",
  //       {
  //         class: "wr-field"
  //       },
  //       [laber()]
  //     );
  //   }
};
</script>
<style lang="scss" scoped>
@import "./field.scss";
</style> 