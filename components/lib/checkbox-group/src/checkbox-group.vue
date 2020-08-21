<template>
  <div
    class="wr-checkbox-group"
    :class="{'wr-checkbox-group--vertical':vertical,'wr-checkbox-group--disabled':disabled}"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "wrCheckboxGroup",
  props: {
    //选中列表
    value: {
      type: Array,
      default: () => {
        return [];
      }
    },
    //选中最大个数
    max: {
      type: [Number, String],
      default: Infinity
    },
    //排列方向是否为垂直
    vertical: {
      type: Boolean,
      default: false
    },
    //是否禁用
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  watch: {
    value: {
      handler(val) {
        this.$emit("change", val);
        this.$nextTick(() => {
          this.setCheckChecked();
        });
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    // console.log(this.$children);
  },
  methods: {
    setCheckChecked() {
      //   this.value.forEach(val => {
      //     let checkbox = this.$children.find(item => {
      //       return val == item.name;
      //     });
      //     checkbox ? (checkbox.checked = true) : "";
      //   });

      this.$children.forEach(item => {
        let checkbox = this.value.find(val => {
          return val == item.name;
        });
        checkbox ? (item.checked = true) : (item.checked = false);
      });
    },
    getCheckboxsChecked() {
      let checkboxCheckedList = [];
      this.$children.forEach(item => {
        if (item.checked) checkboxCheckedList.push(item.name);
      });
      return checkboxCheckedList;
    },
    /**
     * 修改value值
     * @param {checked} boolean -复选框选中状态
     * @param {name} string -复选框标识符
     */
    setValueByCheckboxChecked(checked, name) {
      let index = this.value.indexOf(name);
      if (checked) {
        if (index != -1) return;
        this.value.push(name);
      } else {
        if (index == -1) return;
        this.value.splice(index, 1);
      }
    },
    /**
     * 获取选中的最否超过限制的个数
     */
    getMeetMax() {
      return this.value.length >= parseInt(this.max) ? true : false;
    },
    /**
     * 全选
     */
    checkAll(checked) {
      let list = [];
      this.$children.forEach(item => {
        item.checked = checked;
        list.push(item.name);
      });
      if (checked) {
        this.value.splice(0, list.length, ...list);
      } else {
        this.value.splice(0, this.value.length);
      }
    },

    /**
     * 反选
     */
    reverseAll() {
      let list = [];
      this.$children.forEach(item => {
        item.checked = !item.checked;
        if (item.checked) list.push(item.name);
      });

      if (list.length > 0) {
        let length = list.length + this.value.length;
        this.value.splice(0, length, ...list);
      } else {
        this.value.splice(0, this.value.length);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./checkbox-group.scss";
</style>