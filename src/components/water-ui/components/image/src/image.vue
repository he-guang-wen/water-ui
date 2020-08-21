<script>
export default {
  name: "wrImage",
  props: {
    src: {
      type: String
    },
    alt: {
      type: String
    },
    width: {
      type: [String, Number]
    },
    height: {
      type: [String, Number]
    },
    fit: {
      type: String
    },
    radius: {
      type: Number,
      default: 0
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      status: ""
    };
  },
  watch: {
    src: {
      handler(val) {
        if (val) {
          this.status = "loading";
        }
      },
      immediate: true
    }
  },
  render: function(h) {
    let wrImageStatus;
    const imageErrorContent = h("div", {}, "加载异常");
    const imageLoadingContent = h("div", {}, "加载中");
    const imageNoneContent = h("div", {}, "空空如也");

    if (this.status) {
      if (this.status == "error") {
        wrImageStatus = h("div", { class: "wr-image-error" }, [
          this.$scopedSlots.error
            ? this.$scopedSlots.error()
            : imageErrorContent
        ]);
      } else if (this.status == "loading") {
        wrImageStatus = h("div", { class: "wr-image-loading" }, [
          this.$scopedSlots.loading
            ? this.$scopedSlots.loading()
            : imageLoadingContent
        ]);
      } else {
        wrImageStatus = "";
      }
    } else {
      wrImageStatus = h("div", { class: "wr-image-none" }, [
        this.$scopedSlots.none ? this.$scopedSlots.none() : imageNoneContent
      ]);
    }

    const wrImage = h(
      "div",
      {
        class: "wr-image",
        style: {
          width: this.width,
          height: this.height,
          borderRadius: this.round ? "50%" : this.radius + "px"
        }
      },
      [
        h("img", {
          class: "wr-image-img",
          style: this.fit ? "object-fit:" + this.fit : "",
          attrs: {
            src: this.src,
            alt: this.alt
          },
          on: {
            load: this.imgLoad,
            error: this.imgError
          }
        }),
        wrImageStatus
      ]
    );

    return wrImage;
  },
  methods: {
    imgLoad(e) {
      this.$emit("load", e);
      this.status = "load";
    },
    imgError(e) {
      this.$emit("error", e);
      this.status = "error";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./image.scss";
</style>