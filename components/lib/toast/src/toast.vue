<template>
  <div class="wr-toast-body" :style="toastBodyStyle">
    <div
      class="wr-toast"
      :style="[{color:color},{background:background}]"
      :class="{'wr-toast--row':row}"
    >
      <wr-loading v-if="type == 'loading'" :type="loadingType" size="25"></wr-loading>
      <template v-else-if="type == 'none'"></template>
      <div class="wr-toast-icon" v-else>
        <wr-icon :name="types[type]" :size="row?20:40" :color="iconColor"></wr-icon>
      </div>
      {{text}}
    </div>
  </div>
</template>
<script>
export default {
  name: "wrToast",
  data() {
    return {

      show: false,
      icon: "none",
      text: "",
      duration: 2000,
      zIndex: 1204,
      timeoutID: "",
      loadingType: "circle",
      row: false,
      type: "none",
      types: {
        success: "seleted",
        error: "close",
        warning: "prompt",
        loading: "loading"
      },
      color: "",
      background: "",
      iconColor: "",
      mask: false,
      isClose: false,

    };
  },
  watch: {
    show(val) {
      if (val) {
        // this.$el.style.display = "flex";
        this.$emit("onOpen", val);
      } else {
        // this.$el.style.display = "none";
        this.$emit("onClose", val);
      }
    }
  },
  mounted() {},
  computed: {
    toastBodyStyle() {
      let display = "display:" + (this.show ? "flex;" : "none;");
      let mask = this.mask ? " " : "pointer-events: none;";
      let zIndex = "z-index:" + this.zIndex;
      return display + mask + zIndex;
    }
  },
  methods: {
    timeout() {
      if (this.duration != 0) {
        if (this.timeoutID) clearTimeout(this.timeoutID);
        this.timeoutID = setTimeout(() => {
          this.show = false;
        }, this.duration);
        if (this.type == "loading") clearTimeout(this.timeoutID);
      }
    },
    setData(data) {
      for (let key in data) {
        if (key == "open") {
          break;
        }
        this[key] = data[key];
      }
      this.timeout();
    },
    hide() {
      this.show = false;
    },
    onOpen() {}
  }
};
</script>
<style lang="scss" scoped>
@import "./toast.scss";
</style>