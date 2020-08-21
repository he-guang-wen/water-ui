<template>
  <div class="wr-tabs">
    <div class="wr-tabs-warp" :class="getWrTabNavClass" ref="tabsWarp">
      <div class="wr-tabs-warp_nav">
        <div
          class="wr-tab"
          :class="{'wr-tab_active':activeName ==item.name}"
          :style="{flexBasis:item.style.flexBasis, color:activeName ==item.name?item.style.activeColor: item.style.inactiveColor}"
          ref="wrTab"
          v-for="(item,index) in tabList"
          :key="index"
          @click="tabClick(item,index)"
        >{{item.title}}</div>
      </div>
      <div :class="'wr-tabs-warp_nav-'+type" :style="getTabsWarpNavLineStyle"></div>
    </div>
    <div class="wr-tab-pane-warp">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "wrTabs",
  props: {
    value: {
      type: [String, Number]
    },
    type: {
      type: String,
      default: "line"
    },
    color: {
      type: String,
      default: "#f55555"
    },
    //滑动线的高度
    lineHeight: {
      type: [String, Number],
      default: 2
    },
    //滑动线的宽度
    lineWidth: {
      type: [String, Number],
      default: 30
    },
    //容器宽度不够时是否开启横向滚动
    scrollX: {
      type: Boolean,
      default: false
    },
    //scrollX下一行显示的tab数量
    showTabAmount: {
      type: [Number],
      default: 5
    },
    //标题选中字体颜色
    titleActiveColor: {
      type: String,
      default: "#000"
    },
    //标题未选中字体颜色
    titleInactiveColor: {
      type: String,
      default: "#000"
    }
  },
  data() {
    return {
      tabList: [],
      linePosition: 0,
      wrTabsWidth: 0,
      wrTabWidth: 0,
      activeName: ""
    };
  },
  mounted() {
    this.wrTabsWidth = this.$el.clientWidth;
    this.getTabList();
  },
  watch: {},
  computed: {
    getTabsWarpNavLineStyle() {
      let style = {
        left: this.linePosition + "px",
        background: this.color
      };
      if (this.type == "line") {
        style.width = this.lineWidth + "px";
        style.height = this.lineHeight + "px";
        style.transform =
          "translateX(" + (this.wrTabWidth / 2 - this.lineWidth / 2) + "px)";
      } else if (this.type == "column") {
        style.width = this.wrTabWidth * 0.8 + "px";
      }
      return style;
    },
    getWrTabNavClass() {
      return {
        "wr-tab-nav--scroll": this.scrollX
      };
    }
  },
  methods: {
    getTabList() {
      this.$children.map((item, index) => {
        let { title, name } = item;
        item.index = index;
        name = name ? name : index;

        this.activeName ? "" : (this.activeName = name);
        let style = {
          activeColor: this.titleActiveColor,
          inactiveColor: this.titleInactiveColor
        };
        if (this.scrollX) {
          style.flexBasis = this.wrTabsWidth / this.showTabAmount + "px";
        }
        this.tabList.push({ title, name: name, style });

        if (this.value) {
          if (this.value == name) {
            item.setTabPaneDisplay("block");
          } else {
            item.setTabPaneDisplay("none");
          }
        } else {
          if (index == 0) {
            item.setTabPaneDisplay("block");
          } else {
            item.setTabPaneDisplay("none");
          }
        }
      });

      this.$nextTick(() => {
        this.wrTabWidth = this.$refs.wrTab[0].clientWidth;
      });
    },
    tabClick(tab, index) {
      if (tab.name == this.activeName) return;
      this.$children.map(item => {
        if (tab.name == item.name || tab.name == item.index) {
          item.setTabPaneDisplay("block");
        } else {
          item.setTabPaneDisplay("none");
        }
      });
      this.linePosition = this.wrTabWidth * index;
      if (
        this.linePosition >=
        this.wrTabWidth *
          (this.showTabAmount - Math.ceil(this.showTabAmount / 2))
      ) {
        let scrollLeft =
          this.wrTabWidth * index -
          Math.floor(this.showTabAmount / 2) * this.wrTabWidth;
        this.$refs.tabsWarp.scrollLeft = scrollLeft;
      } else {
        this.$refs.tabsWarp.scrollLeft = 0;
      }
      this.value ? this.$emit("input", tab.name) : "";
      this.$emit("click", tab);
      this.activeName = tab.name;
    }
  }
};
</script>
<style lang="scss">
@import "./tabs.scss";
</style>