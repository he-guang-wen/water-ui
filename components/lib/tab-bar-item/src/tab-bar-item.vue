<template>
  <div class="wr-tab-bar-item" @click="tabBarItemClick">
    <div class="wr-tab-bar-item-warp">
      <template v-if="imgPath || selectedImgPath">
        <div class="wr-tab-bar-item_img">
          <img v-show="!getPresentSelected" class="wr-tab-bar-item_icon-img" :src="imgPath" />
          <img v-show="getPresentSelected" class="wr-tab-bar-item_icon-img" :src="selectedImgPath" />
          <div v-if="dot" class="wr-tab-bar_info">{{info}}</div>
        </div>
      </template>
      <template v-else>
        <div class="wr-tab-bar-item_icon"></div>
      </template>
    </div>
    <div class="wr-tab-bar-item_text" :style="{color:getColor}">{{text}}</div>
  </div>
</template>
<script>
export default {
  name: "wrTabBarItem",
  props: {
    //标识符
    name: {
      type: String
    },
    //文字
    text: {
      type: String
    },
    //未选中的图片地址
    imgPath: {
      type: String
    },
    //选中的图片地址
    selectedImgPath: {
      type: String
    },
    //是否显示标徽
    dot: {
      type: Boolean,
      default: false
    },
    //标徽内容
    info: {
      type: String
    }
  },
  mounted() {},
  computed: {
    //获取是否选中当前
    getPresentSelected() {
      return this.name == this.$parent.value ? true : false;
    },
    //获取颜色
    getColor() {
      return this.name == this.$parent.value
        ? this.$parent.activeColor
        : this.$parent.nactiveColor;
    }
  },
  methods: {
    //tabBarItem组件被点击
    tabBarItemClick() {
      this.$parent.setValue(this.name);
    }
  }
};
</script>
<style lang="scss">
@import "./tab-bar-item.scss";
</style>