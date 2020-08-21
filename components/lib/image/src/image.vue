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
    //填充模式
    fit: {
      type: String,
      default:"fill"
    },
    radius: {
      type: Number,
      default: 0
    },
    round: {
      type: Boolean,
      default: false
    },
    useError: {
      type: Boolean,
      default: false
    },
    useLoad: {
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
          this.status = "load";
        }
      },
      immediate: true
    }
  },
  render: function(h) {
    let wrImageStatus;
    const imageErrorContent = h("div", {}, "加载失败");
    const imageLoadingContent = h("div", {}, "加载中");
    const imageNoneContent = h("div", {}, "空空如也");
    //图片资源加载失败插槽
    const imageErrorSlot = h("div", { class: "wr-image-error" }, [
      this.$scopedSlots.error ? this.$scopedSlots.error() : imageErrorContent
    ]);
    //图片资源加载中插槽
    const imageLoadSlot = h("div", { class: "wr-image-loading" }, [
      this.$scopedSlots.load
        ? this.$scopedSlots.load()
        : imageLoadingContent
    ]);

    //图片资源为空插槽
    const imageNullSlot = h("div", { class: "wr-image-none" }, [
      this.$scopedSlots.none ? this.$scopedSlots.none() : imageNoneContent
    ]);

    //设置图片状态
    const setImageStatusSlot = () => {
      if (this.useError) {
        wrImageStatus = imageErrorSlot;
      } else if (this.useLoad) {
        wrImageStatus = imageLoadSlot;
      } else {
        if (this.status == "error") {
          wrImageStatus = imageErrorSlot;
        } else if (this.status == "load") {
          wrImageStatus = wrImageStatus = imageLoadSlot;
        } else {

          wrImageStatus = "";
        }
      }
    };
    if (this.status) {
      setImageStatusSlot();
    } else {
      wrImageStatus = imageNullSlot;
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
      this.$emit("load");
      this.status = "yes";
    },
    imgError(e) {
      this.$emit("error");
      this.status = "error";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./image.scss";
</style>