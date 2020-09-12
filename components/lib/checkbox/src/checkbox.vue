<template>
  <div class="wr-checkbox" @click="setChecked" :class="getCheckboxClass" ref="checkbox">
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
import { computed, nextTick, ref, watch } from "vue";
let that;
export default {
  name: "wrCheckbox",
  props: {
    //值
    value: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    //标识符
    name: {
      type: [String, Number],
    },
    //大小
    size: {
      type: [String, Number],
      default: 22,
    },
    //圆形
    round: {
      type: Boolean,
      default: false,
    },
    //禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    //选中状态下的颜色
    checkedColor: {
      type: String,
      default: "#00a1ff",
    },
    //平均分布
    spaceBetween: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    that = this;
  },
  setup(props, context) {
    const checkbox = ref(null);
    const slected = ref(false);

    const setChecked = (e) => {
      nextTick(() => {
        let haveCheckboxGroup;
        let checked = !slected.value;
        haveCheckboxGroup = that.$parent.$el.className.indexOf(
          "wrCheckboxGroup"
        );
        if (haveCheckboxGroup != -1) {
          if (that.$parent.getMeetMax() && !slected.value) return;
          that.$parent.setValueByCheckboxChecked(checked, props.name);
        }
        if (props.disabled || that.$parent.disabled) return;
        context.emit("click", e);
        slected.value = checked;
        context.emit("update:checked", checked);
      });
    };

    const getCheckboxClass = computed(() => {
      return {
        "wr-checkbox--disabled": props.disabled,
        "wr-checkbox__space-between":
          props.spaceBetween && that.$parent.vertical,
      };
    });

    const getCheckboxIconWrapStyle = computed(() => {
      let isDisabled = props.disabled;
      let onBackground = isDisabled ? "#ebedf0" : props.checkedColor;
      let onBorderColor = isDisabled ? "#c8c9cc" : props.checkedColor;
      let unBackground = "#fff";
      let unBorderColor = "#ccc";

      let width = props.size + "px";
      let height = props.size + "px";
      let background = slected.value ? onBackground : unBackground;
      let borderColor = slected.value ? onBorderColor : unBorderColor;

      return {
        width: width,
        height: height,
        background: background,
        borderColor: borderColor,
      };
    });

    const getIconColor = computed(() => {
      let color = "#fff";
      if (props.disabled) {
        color = "#c8c9cc";
      }
      return color;
    });

    const getIconStyle = computed(() => {
      return {
        opacity: slected.value ? 1 : 0,
      };
    });

    watch(
      () => {
        return slected.value;
      },
      (val) => {
        context.emit("change", val);
      }
    );

    nextTick(() => {
      watch(
        () => {
          return that.$parent.value;
        },
        (val) => {
          let find = val.find((val) => {
            return props.name == val;
          });

          if (find) {
            // context.emit("update:checked", true);
            slected.value = true;
          } else {
            slected.value = false;
            // context.emit("update:checked", false);
          }
        },
        { immediate: true }
      );

      watch(
        () => {
          return that.$parent.operation;
        },
        (val) => {
          switch (val) {
            case "checkAll":
              slected.value = true;
              break;
            case "reverseAll":
              slected.value = !slected.value;
              break;
            case "cancelAll":
              slected.value = false
              break;
          }
        },
        { immediate: true }
      );
    });

    return {
      checkbox,
      slected,
      setChecked,
      getCheckboxClass,
      getCheckboxIconWrapStyle,
      getIconColor,
      getIconStyle,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./checkbox.scss";
</style>