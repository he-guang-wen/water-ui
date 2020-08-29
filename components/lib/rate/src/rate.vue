<template>
  <div class="wr-rate" @touchstart="handleStart" @touchmove="handleMove">
    <div class="wr-rate__item" v-for="val in count" :key="val">
      <wr-icon
        class="wr-rate__icon"
        :name="value>=val?activeIcon:inactiveIcon"
        :size="size"
        :color="value>=val?activeColor:inactiveColor"
        :style="{paddingLeft:val != 1 ?gutter+'px':''}"
        @click="handleClick(val)"
      ></wr-icon>
    </div>
  </div>
</template>
<script>
import wrIcon from "../../icon/index";
export default {
  name: "wrRate",
  components: {
    wrIcon,
  },
  props: {
    //绑定值
    value: {
      type: Number,
    },
    //图标数量
    count: {
      type: Number,
      default: 5,
    },
    //最少选中个数
    minCount: {
      type: Number,
    },
    //大小
    size: {
      type: Number,
      default: 20,
    },
    //图标间隔
    gutter: {
      type: Number,
      default: 5,
    },
    //选中图标名称
    activeIcon: {
      type: String,
      default: "star-fill",
    },
    //未选中图标名称
    inactiveIcon: {
      type: String,
      default: "star",
    },
    //选中颜色
    activeColor: {
      type: String,
      default: "#f55555",
    },
    //未选中颜色
    inactiveColor: {
      type: String,
      default: "#909999",
    },
    //禁用
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      clientWidth: "",
      clientX: 0,
    };
  },
  watch: {
    value(val) {
      this.$emit("change", val);
    },
    count: {
      handler(val) {
        this.getClientWidth();
      },
      immediate: true,
    },
  },
  computed: {},
  methods: {
    /**
     * 获取宽度
     */
    getClientWidth() {
      this.$nextTick(() => {
        this.clientWidth = this.$el.clientWidth;
      });
    },
    /**
     * 通过触摸修改值
     */
    setValueByTouch(clientX) {
      if (clientX < 0 || clientX > this.clientWidth) return false;
      let itemWith = this.clientWidth / this.count;
      let value = Math.floor(clientX / itemWith);

      if (this.minCount > value) return;
      this.$emit("input", value);
      return true;
    },
    /**
     * 图标点击
     */
    handleClick(index) {
      if (this.disabled) return;
      if (this.minCount > index) return;
      if (index < 2) {
        if ((this.value == index) == 0) index = 1;
        if ((this.value == index) == 1) index = 0;
      }
      this.$emit("input", index);
    },
    /**
     * 触摸开始
     */
    handleStart(e) {
      this.clientX = e.targetTouches[0].clientX;
    },
    /**
     * 触摸移动
     */
    handleMove(e) {
      if (this.disabled) return;
      let clientX = e.targetTouches[0].clientX;
      this.setValueByTouch(clientX);
    },
  },
};
</script>
<style lang="scss">
@import "./rate.scss";
</style>