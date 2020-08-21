<template>
  <wr-overlay v-model="show" class-name="wr-dialog__overlay" :custom-style="getOverlayStyle">
    <div class="wr-dialog" @click.stop>
      <div class="wr-dialog__warp">
        <div class="wr-dialog__header" v-show="title">{{title}}</div>
        <template v-if="render">
          <wr-create-element :vdom="render"></wr-create-element>
        </template>
        <template v-else>
          <div class="wr-dialog__content" v-show="content" :style="getContentStyle">{{content}}</div>
        </template>

        <div class="wr-dialog__footer" v-show="!hideFooter">
          <div class="wr-dialog__footer-warp">
            <div
              class="wr-dialog__footer-button cancel"
              @click="cancel"
              v-show="!hideCancel"
            >{{cancelText}}</div>
            <div
              class="wr-dialog__footer-button confirm"
              @click="confirm"
              v-show="!hideConfirm"
            >{{confirmText}}</div>
          </div>
        </div>
      </div>
      <div class="wr-dialog__close" @click="show = false" v-show="showIconClose">
        <wr-icon name="close" size="18" color="#ccc"></wr-icon>
      </div>
    </div>
  </wr-overlay>
</template>
<script>
import wrOverlay from "../../overlay/index";
import wrIcon from "../../icon/index";
import wrCreateElement from "../../create-element/index";
export default {
  name: "wrDialog",
  components: {
    wrOverlay,
    wrIcon,
    wrCreateElement
  },

  data() {
    return {
      show: false,
      zIndex:1003,
      //标题
      title: "",
      //内容文本
      content: "",
      //内容文本对齐方式
      contentAlign: "center",
      //隐藏确认按钮
      hideConfirm: false,
      //隐藏取消按钮
      hideCancel: false,
      //隐藏底部所有按钮
      hideFooter: false,
      //确认按钮文本
      confirmText: "确认",
      //取消按钮文本
      cancelText: "取消",
      //显示关闭图标
      showIconClose: false,
      //自定义内容
      render: "",
      //隐藏遮罩
      hideOverlay: false
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
    getContentStyle() {
      return {
        textAlign: this.contentAlign
      };
    }
  },
  methods: {
    close() {
      this.show = false;
    },
    setData(data) {
      for (let key in data) {
        key in this.$data ? (this[key] = data[key]) : "";
      }
    },
    cancel() {
      this.$emit("handle", "cancel");
      this.close()
    },
    confirm() {
      this.$emit("handle", "confirm");
       this.close()
    },
    createElementRender() {
      return (this.$createElement = h => {
        return h("p", 123);
      });
    }
  }
};
</script>
<style lang="scss">
@import "./dialog.scss";
</style>