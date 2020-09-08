<template>
  <wr-overlay v-model="show" :mask="mask" :zIndex="zIndex" :custom-style="getOverlayStyle">
    <!-- <div
      class="wr-action-sheet__warp"
      v-show="show"
      @click="hide()"
      :style="getactionSheetWarpStyle"
    >-->
    <wr-transition-animation name="bottom">
      <div
        class="wr-action-sheet"
        :style="getactionSheetStyle"
        @click.stop=""
  
        v-show="show"
      >
        <div class="wr-action-sheet_item wr-action-sheet-description" v-if="description">
          <div class="wr-action-sheet_item-text">{{description}}</div>
        </div>
        <div
          class="wr-action-sheet_item"
          v-for="(item,index) in list"
          :key="index"
          name="sheetItem"
          :index="index"
          :class="{'wr-action-sheet_item--disabled':item.disabled,'wr-action-sheet_item--active':active==index}"
          @touchstart.stop.prevent="ItemTouchstart(index)"
          @touchend="ItemTouchend($event,item,index)"
          @click="actionSheetItemClick(item)"
        >
          <div class="wr-action-sheet_item-text" :style="setActionSheetItemStyle(item)">
            <span>{{item.text}}</span>
            <span class="wr-action-sheet_item-description" v-if="item.subText">{{item.subText}}</span>
          </div>
        </div>
        <template v-if="!hideCancel">
          <div class="wr-action-sheet_divider"></div>
          <div class="wr-action-sheet_item wr-action-sheet_cancel" @click="cancelClick">
            <span>{{cancelText}}</span>
          </div>
        </template>
      </div>
    </wr-transition-animation>
  </wr-overlay>
  <!-- </div> -->
</template>
<script>
import wrOverlay from "../../overlay/index";
import wrTransitionAnimation from "../../transition-animation/index";
export default {
  name: "wrActionSheet",
  components: {
    wrOverlay,
    wrTransitionAnimation,
  },
  // props: {
  //   //显示与隐藏
  //   show: {
  //     type: Boolean,
  //     default: false
  //   },
  //   //描述
  //   description: {
  //     type: String
  //   },
  //   //菜单列表
  //   list: {
  //     type: Array,
  //     default: () => {
  //       return [];
  //     }
  //   },
  //   //上边角弧度
  //   borderTopRadius: {
  //     type: [String, Number],
  //     default: 12
  //   },
  //   //显隐取消按钮
  //   hideCancel: {
  //     type: Boolean,
  //     default: false
  //   },
  //   //取消按钮的文字
  //   cancelText: {
  //     type: String,
  //     default: "取消"
  //   }
  // },
  data() {
    return {
      show: false,
      zIndex: 1002,
      description: "",
      //菜单列表
      list: [],
      //上边角弧度
      borderTopRadius: 12,
      hideCancel: false,
      cancelText: "取消",
      //点击遮罩后不关闭
      mask: false,
      //点击具体项后不关闭
      closeOnItem: false,
      hideOverlay: false,
      active: -99,
    };
  },
  computed: {
    getOverlayStyle() {
      let style = {};
      if (this.hideOverlay) {
        style.background = "transparent";
      }
      return style;
    },
    getactionSheetWarpStyle() {
      return {
        zIndex: this.zIndex,
      };
    },
    getactionSheetStyle() {
      return {
        borderTopLeftRadius: this.borderTopRadius + "px",
        borderTopRightRadius: this.borderTopRadius + "px",
      };
    },
  },
  watch: {
    show: {
      handler(val) {
        this.$emit("change", val);
        if (val) {
          this.$emit("open", val);
        } else {
          this.$emit("close", val);
        }
      },
      deep: true,
    },
  },
  methods: {
    setDate(data) {
      for (let key in data) {
        key in this.$data ? (this[key] = data[key]) : "";
      }
    },
    hide() {
      if (this.mask) return;
      this.show = false;
    },
    ItemTouchstart(index) {
      this.active = index;
    },
    ItemTouchend(e, item, index) {
      this.active = -99;
      let x = e.changedTouches[0].pageX;
      let y = e.changedTouches[0].pageY;
      let element = document.elementFromPoint(x, y);
      let pName = element.getAttribute("name");
      let pIndex = element.getAttribute("index");
      if (pName == "sheetItem" && pIndex == index) {
        this.show = false;
        this.$emit("select", item);
      }
    },
    actionSheetItemClick(item) {
      if (this.closeOnItem) return; 
      this.active = -99;
      this.show = false;
      this.$emit("select", item);
    },
    cancelClick() {
      this.show = false;
      this.$emit("cancel");
    },
    setActionSheetItemStyle(item) {
      return {
        color: item.color,
      };
    },
  },
};
</script>
<style lang="scss">
@import "./action-sheet.scss";
</style>