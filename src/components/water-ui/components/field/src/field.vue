<template>
  <div class="wr-field" :class="[{'wr-field-border':border},{'wr-field-required':required}]">
    <div class="wr-field-laber">
      <div class="wr-field-left-icon">左</div>
      <span
        class="wr-field-laber_title"
        :style="[{width:labelWidth+'px'},{ textAlign:labelAlign}]"
      >{{label}}</span>
    </div>
    <div class="wr-field-value">
      <div class="wr-field-value_inputCon" ref="textareaBody">
        <textarea
          class="wr-field-value_input"
          v-if="type =='textarea' "
          :value="value"
          :name="name"
          :rows="rows"
          :readonly="readonly"
          :disabled="disabled"
          :autofocus="focus"
          :maxlength="maxlength"
          :class="{'wr-disabled':disabled}"
          @input="textareaChange"
        ></textarea>

        <input
          v-else
          class="wr-field-value_input"
          placeholder="6666"
          :value="value"
          :name="name"
          :readonly="readonly"
          :disabled="disabled"
          :focus="focus"
          :type="password?'password':'text'"
          :maxlength="maxlength"
          :password="password"
          :class="{'wr-disabled':disabled}"
        />
        <span class="wr-field-error-message">{{errorMessage}}</span>
      </div>
    </div>
    <div class="wr-field-right">
      <!-- 右侧插槽 -->
      <slot name="right">右</slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "WField",
  props: {
    value: {
      //输入框内容
      type: [String, Number]
    },
    type: {
      //输入框类型
      type: String,
      default: "textarea"
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
    errorMessage: {
      //label宽度
      type: String
    },
    border: {
      //是否显示边框
      type: Boolean,
      default: true
    },
    name: {
      //输入框规定文本区的名称。
      type: [String, Number]
    },
    cols: {
      //输入框文本区内的可见宽度。 type ==textarea时才生效
      type: Number,
      default: 50
    },
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
    password: {
      //输入框是否为密码类型 type == text 时才生效
      type: Boolean,
      default: true
    },
    maxlength: {
      //输入框是否为密码类型  type == text 时才生效
      type: [String, Number],
      default: 255
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
    return {
    };
  },
  mounted() {

  },
  watch: {},
  methods: {


    textareaChange(e) {
      if (this.autoHeight) {
        let o = e.target;
        o.style.height = o.scrollTop + o.scrollHeight + "px";
      }
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