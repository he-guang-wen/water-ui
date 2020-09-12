<template>
  <div
 
    class="wr-checkbox-group"
    :class="{'wr-checkbox-group--vertical':vertical,'wr-checkbox-group--disabled':disabled}"
  >
  <template  ref="checkbox">
    <slot ></slot>
    </template>
  </div>
</template>
<script>
import { ref,nextTick } from "vue";

export default {
  name: "wrCheckboxGroup",
  props: {
    //选中列表
    value: {
      type: Array,
      default: () => {
        return [];
      },
    },
    //选中最大个数
    max: {
      type: [Number, String],
      default: Infinity,
    },
    //排列方向是否为垂直
    vertical: {
      type: Boolean,
      default: false,
    },
    //是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const operation = ref("");
    const checkbox = reactive(null);

nextTick(()=>{
console.log(checkbox,'valuevaluecheckboxcheckbox');
})

    // const getPropsValue = () => {
    //   return props.value;
    // };
    /**
     * 获取选中的最否超过限制的个数
     */
    const getMeetMax = () => {
      return props.value.length >= parseInt(props.max) ? true : false;
    };
    /**
     * 全选
     */
    const checkAll = (checked) => {
      if (checked) {
        operation.value = "checkAll";
      } else {
        operation.value = "cancelAll";
      }
    };

    /**
     * 反选
     */
    const reverseAll = () => {
      operation.value = "reverseAll";
    };

    return {
      operation,
      getMeetMax,
      checkAll,
      reverseAll,
      checkbox,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./checkbox-group.scss";
</style>