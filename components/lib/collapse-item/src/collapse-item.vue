<template>
  <div class="wr-collapse-item">
    <div class="wr-collapse-item_head" @click="collapseItemClick">
      <div class="wr-collapse-item_head-title">{{title}}</div>
      <div class="wr-collapse-item_head-value" v-if="value">{{value}}</div>
      <div class="wr-collapse-item_head-icon" v-if="$parent.arrow">
        <wr-icon
          name="arrow-right"
          class="wr-collapse-item__arrow"
          size="22"
          :style="collapseIconStyle"
        ></wr-icon>
      </div>
    </div>
    <div
      class="wr-collapse-item_body"
      :class="{'wr-collapse-item_body--checked':show}"
      :style="showStyle"
    >
      <div class="wr-collapse-item_body-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "wrCollapseItem",
  props: {
    name: {
      type: [String, Number],
    },
    title: {
      type: [String, Number],
    },
    value: {
      type: [String, Number],
    },
  },
  data() {
    return {
      show: false,
      defaultName: "",
    };
  },
  computed: {
    showStyle() {
      if (this.show) {
        return "";
      } else {
        return {
          maxHeight: 0 + "px",
        };
      }
    },
    collapseIconStyle() {
      if (this.show) {
        return {
          transform: "rotate(-90deg)",
        };
      } else {
        return {
          transform: "rotate(90deg)",
        };
      }
    },
  },
  methods: {
    //collapseItem被点击
    collapseItemClick(e) {
      this.$emit("click", e);
      if (this.$parent.accordion) {
        // let value = this.$parent.getValueByType()
        this.reverseShow();
        this.$parent.$children.map((item) => {
          if (item.name != this.name || item.defaultName != this.defaultName) {
            item.close();
          }
        });
      } else {
        this.reverseShow();
      }
    },
    //show取反
    reverseShow() {
      this.show = !this.show;
    },
    //关闭
    close() {
      this.show = false;
    },
    //打开
    open() {
      this.show = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./collapse-item.scss";
</style>