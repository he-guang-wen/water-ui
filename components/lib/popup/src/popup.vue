<template>
  <div class="wr-popup" @click="popupClick()">
    <wr-overlay :value="value" @click="overlayClick" ref="overlay" v-if="showOverlay"></wr-overlay>
    <transition :name="getTransitionName">
      <div
        class="wr-popup__warpper"
        v-show="value"
        :style="getWarpperStyle"
        :class="getWarpperClass"
        @click.stop="warpperClick"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import wrOverlay from "../../overlay/index";
export default {
  name: "wrPopup",
  components: { wrOverlay },
  props: {
    value:{
      type: Boolean,
      default: false,
    },
    //弹出位置
    position: {
      type: String,
      default: "center",
    },
    //显示遮罩层
    showOverlay: {
      type: Boolean,
      default: true,
    },
    //是否点击遮罩层后不关闭
    mask: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      show: false,
      zIndex: 1000,
      transitionName: "left",
    };
  },
  computed: {
    getWarpperStyle() {
      return {
        zIndex: this.zIndex,
      };
    },
    getWarpperClass() {
      let position = "wr-popup__warpper--" + this.position;
      return [position];
    },
    getTransitionName() {
      return "wr-transition-" + this.position;
    },
  },
  mounted() {
    this.zIndex = this.$refs.overlay.zIndex + 1;
  },
  watch: {
    show(val) {
      if (val) {
        this.$emit("open");
      } else {
        this.$emit("close");
      }
    },
  },
  methods: {
    open() {
      this.$emit('input',true)
      // this.show = true;
    },
    close() {
       this.$emit('input',false)
    },
    overlayClick(e) {
      this.$emit("overlay-click", e);
    },
    warpperClick() {
     
    },
    popupClick(e) {
      if (this.mask) return;
      this.close();
       this.$emit("click", e);
    },
  },
};
</script>
<style lang="scss">
@import "./popup.scss";
</style>