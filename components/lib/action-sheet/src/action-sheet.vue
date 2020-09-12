<template>
  <wr-overlay v-model:value="show" :mask="mask" :zIndex="zIndex" :custom-style="getOverlayStyle">
    <!-- <div
      class="wr-action-sheet__warp"
      v-show="show"
      @click="hide()"
      :style="getactionSheetWarpStyle"
    >-->
    <transition name="bottom">
      <div
        class="wr-action-sheet"
        :style="getactionSheetStyle"
        @click.stop
        @touchstart.stop
        v-show="show"
      >
        <div class="wr-action-sheet_item wr-action-sheet-description" v-if="description">
          <div class="wr-action-sheet_item-text">{{description}}</div>
        </div>
        <div
          class="wr-action-sheet_item"
          v-for="(item,index) in list"
          :key="index"
          :class="{'wr-action-sheet_item--disabled':item.disabled}"
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
    </transition>
  </wr-overlay>
  <!-- </div> -->
</template>
<script>
import { computed, reactive, ref, watch } from "vue";
import events from "../../../utils/event";
import wrOverlay from "../../overlay/index";
let that;

export default {
  name: "wrActionSheet",
  components: {
    wrOverlay,
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
  created() {
    that = this;
  },
  setup(props, context) {

    //显示
    const show = ref(false);
    //层级
    const zIndex = ref(1002);
    //头部描述
    const description = ref("");
    //顶部边框弧度大小
    const borderTopRadius = ref(12);
    //隐藏取消按钮
    const hideCancel = ref(false);
    //取消按钮文字
    const cancelText = ref("取消");
    //点击遮罩后不关闭
    const mask = ref(false);
    //点击具体项后不关闭
    const closeOnItem = ref(false);
    //隐藏遮罩
    const hideOverlay = ref(false);
    //选项列表
    const list = reactive([]);
    //事件中心
    const event = reactive(events);

    const setDate = (data) => {
      for (let key in data) {
        key in that ? (that[key] = data[key]) : "";
      }
    };
    const hide = () => {
      if (mask.value) return;
      show.value = false;
    };
    const actionSheetItemClick = (item) => {
      if (closeOnItem.value) return;
      show.value = false;
      context.emit("select", item);
      event.emit("select", item);
    };
    const cancelClick = () => {
      show.value = false;
      context.emit("cancel");
      event.emit("cancel");
    };
    const setActionSheetItemStyle = (item) => {
      return {
        color: item.color,
      };
    };

    const getOverlayStyle = computed(() => {
      let style = {};
      if (hideOverlay.value) {
        style.background = "transparent";
      }
      return style;
    });

    const getactionSheetWarpStyle = computed(() => {
      return {
        zIndex: zIndex.value,
      };
    });

    const getactionSheetStyle = computed(() => {
      return {
        borderTopLeftRadius: borderTopRadius.value + "px",
        borderTopRightRadius: borderTopRadius.value + "px",
      };
    });

    watch(
      () => {
        return show.value;
      },
      (val) => {
        context.emit("change", val);
        event.emit("change", val);
        if (val) {
          context.emit("open", val);
          event.emit("open", val);
        } else {
          event.emit("close", val);
          context.emit("close", val);
        }
      }
    );

    return {
      show,
      zIndex,
      description,
      borderTopRadius,
      hideCancel,
      cancelText,
      mask,
      closeOnItem,
      hideOverlay,
      list,
      event,
      setDate,
      hide,
      actionSheetItemClick,
      cancelClick,
      setActionSheetItemStyle,
      getOverlayStyle,
      getactionSheetWarpStyle,
      getactionSheetStyle,
    };
  },
};
</script>
<style lang="scss">
@import "./action-sheet.scss";
</style>