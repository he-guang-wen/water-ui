<template>
  <div class="wr-index-anchor__warp" :style="getIndexAnchorWarpStyle">
    <div
      class="wr-index-anchor"
      ref="indexAnchor"
      :style="getIndexAnchorStyle"
      :class="{'wr-index-anchor--atv':sticky}"
    >
      <div class="wr-index-anchor__index">{{index}}</div>
    </div>
  </div>
</template>
<script>
//  :style="{ top:$parent.$el.offsetTop+'px'}"
export default {
  name: "wrIndexAnchor",
  props: {
    //标识
    index: {
      type: [String, Number]
    }
  },

  data() {
    return {
      //描点开始位置
      top: "",
      //描点结束位置
      maxTop: "",
      //吸顶
      sticky: false,
      //背景色
      background: "",
      //偏移量
      translateY: 0,
      //高度
      offsetHeight: ""
    };
  },
  mounted() {
    let { offsetTop, offsetHeight } = this.$el;
    this.top = offsetTop;
    this.offsetHeight = offsetHeight;
  },
  computed: {
    getIndexAnchorWarpStyle() {
      let style = {};
      if (this.sticky) {
        style.height = this.$refs.indexAnchor.clientHeight + "px";
      }
      return style;
    },
    getIndexAnchorStyle() {
      let style = {};
      style.top = this.sticky ? this.$parent.$el.offsetTop - 1 + "px" : "";
      style.background = this.background ? this.background : "";
      style.color = this.color ? this.color : "";
      if (this.translateY) {
        style.position = "relative";
        style.top = 0;
        style.transform = "translateY(" + this.translateY + "px)";
      }
      return style;
    }
  },
  methods: {
    /**
     * 设置最大top值
     * @param {val} number - 最大top值
     * @return undefined
     */
    setMaxTop(val) {
      this.maxTop = val;
    }
  }
};
</script>
<style lang="scss">
@import "./index-anchor.scss";
</style>