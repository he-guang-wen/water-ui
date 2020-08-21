<template>
  <div
    class="wr-swipe-cell"
    tabindex="0"
    @blur="swipeCellBlur"
    @touchmove.stop.prevent="swipeCellTouchmove"
    @touchend.stop.prevent="swipeCellTouchend"
    @touchstart.stop.prevent="swipeCellTouchstart"
  >
    <div class="wr-swipe-cell__wrapper" :style="getSwipeCelltWrapperStyle">
      <div class="wr-swipe-cell__left" ref="left" @touchstart.stop @touchmove.stop @touchend.stop>
        <slot name="left"></slot>
      </div>
      <div class="wr-swipe-cell__content" ref="content">
        <slot></slot>
      </div>
      <div class="wr-swipe-cell__right" ref="right" @touchstart.stop @touchmove.stop @touchend.stop>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "wrSwipeCell",
  props: {
    //标识符
    name: {
      type: [Number, String]
    },
    //禁止滑动
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      //手势划过数值
      clientX: 0,
      //左边
      left: "",
      //右边
      right: "",
      //内容
      content: "",
      //偏移量
      translateX: 0,
      //滑动左边还是右边
      position: "",
      //过度时间
      transitionDuration: 0,
      //打开状态
      openState: false
    };
  },
  mounted() {
    this.getLRWidth();
  },
  watch: {
    openState(val) {
      let { name, position } = this;
      if (val) {
        this.$emit("open", { name, position });
      } else {
        this.$emit("close", { name, position });
      }
    }
  },
  computed: {
    getSwipeCelltWrapperStyle() {
      return {
        transform: "translateX(" + this.translateX + "px)",
        transitionDuration: this.transitionDuration + "s"
      };
    }
  },
  methods: {
    /**
     * 滑动单元失去焦点
     * @return undefined
     */
    swipeCellBlur() {
      //   this.transitionDuration = 0.6;
      //   this.translateX = 0;
      //            if (this.openState) {
      //    this.close();
      //            }
    },
    /**
     * 滑动单元准备移动
     * @param {e} event - DOM Event 对象
     * @return undefined
     */
    swipeCellTouchstart(e) {
      if (this.disabled) return;
      if (this.openState) {
        this.close();
      } else {
        this.transitionDuration = 0;
      }
      this.$el.focus();
      let clientX = e.touches[0].clientX;
      this.clientX = clientX;
    },
    /**
     * 滑动单元移动中
     * @param {e} event - DOM Event 对象
     * @return undefined
     */
    swipeCellTouchmove(e) {
      if (this.disabled) return;
      let clientX = e.touches[0].clientX;
      let newTranslateX = 0;
      let clientXDifference = clientX - this.clientX;
      if (clientX >= this.clientX) {
        // if (this.left.clientWidth == 0) return;
        this.position = "left";
        newTranslateX = this.translateX + clientXDifference;
        if (newTranslateX >= this.left.clientWidth) {
          newTranslateX = this.left.clientWidth;
        }
      } else {
        // if (this.right.clientWidth == 0) return;
        this.position = "right";
        newTranslateX = this.translateX - Math.abs(clientXDifference);
        if (newTranslateX <= -this.right.clientWidth) {
          newTranslateX = -this.right.clientWidth;
        }
      }
      this.translateX = newTranslateX;
      this.clientX = clientX;
    },
    /**
     * 滑动单元移动结束
     * @return undefined
     */
    swipeCellTouchend() {
      console.log(112)
      if (this.disabled) return;
      //   this.transitionDuration = 0.6;
      switch (this.position) {
        case "left":
          if (this.translateX >= this.left.clientWidth) {
            this.open(this.position);
            // return;
          } else if (this.translateX >= this.left.clientWidth / 2) {
            this.open(this.position);
          } else {
            this.close();
          }
          break;
        case "right":
          if (this.translateX <= -this.right.clientWidth) {
            this.open("right");
            // return;
          } else if (this.translateX <= -this.right.clientWidth / 2) {
            this.open("right");
          } else {
            this.close();
          }
          break;
      }
    },
    swipeCellWrapperTouchstart() {

    },
    /**
     * 获取左右俩侧宽度
     * @return undefined
     */
    getLRWidth() {
      // clientWidth
      let { left, right, content } = this.$refs;
      this.left = left;
      this.right = right;
      this.content = content;
    },
    /**
     * 关闭滑动单元格
     * @return undefined
     */
    close() {
      this.openState = false;
      this.transitionDuration = 0.6;
      this.translateX = 0;
      // let { name, position } = this;

      // this.$emit("close", { name, position });
    },
    /**
     * 打开滑动单元格
     * @param {_position} string - 哪侧打开
     * @return undefined
     */
    open(_position) {
      if (_position == "left") {
        this.translateX = this.left.clientWidth;
      } else if (_position == "right") {
        this.translateX = -this.right.clientWidth;
      } else {
        return;
      }
      this.openState = true;
      this.transitionDuration = 0.6;
      this.position = _position;
      // let { name, position } = this;
      // this.$emit("open", { name, position });
    }
  }
};
</script>
<style lang="scss">
@import "./swipe-cell.scss";
</style>