
<template>
  <div class="wr-index-bar" :style="getIndexBarStyle">
    <div v-show="scrollTop>0" class="index-anchor__camouflage" :style="getAnchorCamouflageStyle"></div>
    <div class="wr-index-bar__hint" v-show="hintText">{{hintText}}</div>
    <div
      class="wr-index-bar__sidebar"
      @touchmove.prevent="sidebaTouchmove"
      @touchend.prevent="sidebaTouchend"
    >
      <span
        ref="sidebarNavs"
        v-for="val  in indexList"
        :key="val"
        :index="val"
        @touchstart.stop="indexClick(val)"
        :style="{color:indexName==val?'#1989fa':''}"
      >{{val }}</span>
    </div>
    <slot></slot>
  </div>
</template>
<script>
// import wrDisbounce from '../../disbounce/index'
export default {
  name: "wrIndexBar",
  components: {
    // wrDisbounce
  },
  props: {
    //右侧导航值列表，必须在wr-index-anchor的index中存在
    indexList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    //背景色
    background: {
      type: String,
      default: "#ffffff"
    },
    //层级
    zIndex: {
      type: [String, Number],
      default: 1000
    },
    //绑定对象,废弃
    target: {
      type: [Object, String]
    }
  },
  data() {
    return {
      //描点实例列表
      anchorList: "",
      //描点实例活动的下标
      activeIndex: -1,
      //点前描点值
      indexName: "",
      //滚动条位置
      scrollTop: 0,
      //触发滚动条的对象
      binding: "",
      //描点障眼高度
      anchorHintHeight: 0,
      //右侧导航
      sidebarNavs: [],
      //提示文字
      hintText: ""
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.setBinding();
      this.getAnchorList();
      this.sidebarNavs = this.$refs["sidebarNavs"];
    });
  },
  computed: {
    /**
     * index-bar内联样式
     * */
    getIndexBarStyle() {
      return {
        zIndex: this.zIndex,
        background: this.background
      };
    },
    /**
     * 右侧导航连续触摸放大提示的内联样式
     * */
    getAnchorCamouflageStyle() {
      return {
        height: this.anchorHintHeight + "px",
        top: this.$el ? this.$el.offsetTop + "px" : ""
      };
    }
  },
  methods: {
    /**
     * 右侧导航连续滑动
     * @param {e} Event - DOM Event 对象
     * @return undefined
     */
    sidebaTouchmove(e) {
      let pageY = e.touches[0].pageY;
      let sidebarNav = this.sidebarNavs.find(item => {
        return (
          item.offsetTop < pageY && item.offsetTop + item.offsetHeight > pageY
        );
      });

      if (sidebarNav) {
        let text = sidebarNav.innerText;
        this.hintText = text;
        sidebarNav ? this.scrollToTop(text) : "";
      }
    },
    /**
     * 右侧导航滑动结束
     * @return undefined
     */
    sidebaTouchend() {
      this.hintText = "";
    },
    /**
     * 设置滚动条位置
     * @param {indexName} string - 描点index
     * @return {object|undefined} - 描点实例对象
     */
    scrollToTop(indexName) {
      let find = this.anchorList.find(item => {
        return item.index == indexName;
      });
      if (find) {
        this.binding.scrollTop = find.top + 1;
      }
      return find;
    },
    /**
     * 右侧导航具体值被点击
     * @param {indexName} string - 描点index
     * @return undefined
     */
    indexClick(indexName) {
      let ifTop = this.scrollToTop(indexName);
      if (this.activeIndex != -1 && ifTop) {
        this.anchorList[this.activeIndex].sticky = false;
      }
    },
    /**
     * 绑定触发滚动条的对象
     * @return undefined
     */
    setBinding() {
      // if (typeof this.target == "string") {
      //   let targetSubstring = this.target.substring(1, this.target.length);
      //   if (this.target[0] == "#") {
      //     this.binding = document.getElementById(targetSubstring);
      //   } else if (this.target[0] == ".") {
      //     this.binding = document.getElementsByClassName(targetSubstring)[0];
      //   }
      // } else if (typeof this.target == "object") {
      //   this.binding == this.target;
      // }

      this.binding = this.$el;
      this.binding.addEventListener("scroll", this.handleScroll);
    },
    /**
     * 获取描点实例列表
     * @return undefined
     */
    getAnchorList() {
      console.log(this.$children);
      //过滤筛选出wr-index-anchor
      this.anchorList = this.$children.filter(item => {
        return item.$el.className.indexOf("wr-index-anchor") != -1;
      });
      this.anchorList.forEach((item, index) => {
        item.$el.style.zIndex = index + 1;
        if (index < this.anchorList.length - 1) {
          item.setMaxTop(this.anchorList[index + 1].top);
        } else {
          item.setMaxTop(this.binding.scrollHeight);
        }
      });

      this.anchorHintHeight = this.anchorList[0].$el.offsetHeight;
    },
    /**
     * 滚动触发
     * @return undefined
     */
    handleScroll() {
      /* eslint-disable */

      var scrollTop = this.binding.scrollTop;
      // if (scrollTop < 0) {
      //   return;
      // }
      // if (scrollTop >= this.binding.scrollHeight) {
      //   return;
      // }
      let difference = scrollTop - this.scrollTop;
      this.scrollTop = scrollTop;

      let height = this.anchorList[0].$el.offsetHeight;
      let itemIndex = this.anchorList.findIndex(item => {
        return scrollTop <= item.maxTop && scrollTop >= item.top;
      });
      this.activeIndex = itemIndex;
      if (itemIndex != -1) {
        //当前描点实例
        let actvieAnchor = this.anchorList[itemIndex];
        //当前描点的上一个描点实例
        let lastActvieAnchor = this.anchorList[itemIndex - 1];
        //当前描点的下一个描点实例
        let nextActvieAnchor = this.anchorList[itemIndex + 1];

        this.indexName = actvieAnchor.index;

        //
        if (scrollTop >= actvieAnchor.maxTop - height + 1) {
          let translateY = actvieAnchor.maxTop - actvieAnchor.top - height;
          actvieAnchor.stickyInteraction = true;
          actvieAnchor.translateY = translateY;
          nextActvieAnchor.background = "#fff";
          nextActvieAnchor.color = "#1989fa";
        } else {
          actvieAnchor.translateY = 0;
          actvieAnchor.stickyInteraction = false;
          nextActvieAnchor.stickyInteraction = false;
          nextActvieAnchor.background = "";
          nextActvieAnchor.color = "";
          nextActvieAnchor.sticky = false;
          nextActvieAnchor.translateY = 0;
        }

        if (lastActvieAnchor) {
          lastActvieAnchor.sticky = false;
          lastActvieAnchor.translateY = 0;
        }
        if (nextActvieAnchor) {
          nextActvieAnchor.sticky = false;
          nextActvieAnchor.translateY = 0;
        }

        this.anchorList[itemIndex].sticky = true;
      }
    }
  },
  beforeDestroy() {
    this.binding.removeEventListener("scroll");
  }
};
</script> 
<style lang="scss">
@import "./index-bar.scss";
</style>