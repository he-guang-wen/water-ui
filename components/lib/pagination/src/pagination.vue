<template>
  <div class="wr-pagination">
    <div class="wr-pagination_prev" :class="getPrevClass" @click="prevClick">
      <slot name="prev">{{prevText}}</slot>
    </div>

    <template v-if="simple">
      <div class="wr-pagination_page-wrap">{{this.pageIndex+"/"+this.pageNumberSize}}</div>
    </template>
    <template v-else>
      <ul class="wr-pagination_page-wrap">
        <li
          class="number"
          v-for="val in showPageNumberList"
          :key="val.number"
          :style="getPageStyle(val)"
          @click="pageClick(val)"
        >{{val.number}}</li>
      </ul>
    </template>
    <div class="wr-pagination_next" :class="getNextClass" @click="nextClick">
      <slot name="next">{{nextText}}</slot>
    </div>
  </div>
</template>
<script>
// let lastData;

export default {
  name: "wrPagination",
  props: {
    //页数显示的数量
    showPageSize: {
      type: [Number, String],
      default: 5,
    },
    //总记录数
    total: {
      type: [Number, String],
      default: 0,
    },
    // 总页数
    pageCount: {
      type: [Number, String],
      default: 0,
    },
    //每页记录数
    pagePerSize: {
      type: [Number, String],
      default: 10,
    },
    //上一页文字
    prevText: {
      type: String,
      default: "上一页",
    },
    //下一页文字
    nextText: {
      type: String,
      default: "下一页",
    },
    //简单模式
    simple: {
      type: Boolean,
      default: false,
    },
    //选中的背景颜色
    activeBgColor: { type: String, default: "#1092f9" },
    //选中的文字颜色
    activeColor: {
      type: String,
      default: "#fff",
    },
    inactiveColor: {
      type: String,
      default: "#000",
    },
    inactiveBgColor: { type: String, default: "transparent" },
  },
  data() {
    return {
      //当前page的index
      pageIndex: 1,
      //page集合
      pageNumberList: [],
      showPageNumberList: [],
      //page总长度
      pageNumberSize: 0,
      endIndex: "",
    };
  },

  created() {
    let size = Math.ceil(this.pageCount / this.pagePerSize) || this.total;
    this.endIndex = this.showPageSize;
    this.pageNumberSize = size;
    this.init(size);
    if (size < this.showPageSize) size = this.showPageSize;
    this.pageNumberSize = size;
  },
  mounted() {
    this.getShowPageSize();
  },
  computed: {
    getNextClass() {
      return {
        "wr-pagination--disabled": this.pageIndex >= this.pageNumberSize,
        "wr-pagination--active": true,
      };
    },
    getPrevClass() {
      return {
        "wr-pagination--disabled": this.pageIndex <= 1,
        "wr-pagination--active": true,
      };
    },
  },
  watch: {
    pageIndex(val) {
      this.$emit("change", val);
      this.getShowPageSize();
    },
  },
  methods: {
    init(size) {
      for (let i = 0; i < size; i++) {
        let obj = {
          number: i + 1,
          background: this.inactiveBgColor,
          activeBackground: this.activeBgColor,
          activeColor: this.activeColor,
          color: this.inactiveColor,
        };
        this.pageNumberList.push(obj);
      }
    },
    getShowPageSize() {
      //位置差值
      let difference = this.pageNumberSize - this.pageIndex;
      //开始位置
      let begin = this.pageIndex;
      //结束位置
      this.endIndex = begin + this.showPageSize;
      //设置位置偏移
      let positionFloor = Math.floor(this.showPageSize / 2);
      let positionCeil = Math.ceil(this.showPageSize / 2);
      if (this.pageIndex < positionCeil && this.pageIndex > 1) {
        if (this.showPageSize < this.pageNumberList) {
          begin -= 1;
          this.endIndex -= 1;
        } else {
          begin = 1;
          this.endIndex = this.showPageSize + 1;
        }
      } else if (difference < this.showPageSize - 1) {
        begin = this.pageNumberSize - this.showPageSize + 1;
        this.endIndex = this.pageNumberSize + 1;
      } else {
        if (this.pageIndex > positionFloor) {
          begin -= positionFloor;
          this.endIndex -= positionFloor;
        }
      }
      // console.log(
      //   difference + "--" + (begin - 1) + "--" + (this.endIndex - 1),
      //   "this.pageNumberList"
      // );

      this.showPageNumberList = this.pageNumberList.slice(
        begin - 1,
        this.endIndex - 1
      );
    },
    getPageStyle(val) {
      return {
        color: this.pageIndex == val.number ? val.activeColor : val.color,
        background:
          this.pageIndex == val.number ? val.activeBackground : val.background,
      };
    },
    prevClick() {
      if (this.pageIndex <= 0) return;
      this.pageIndex -= 1;
    },
    nextClick() {
      if (this.pageIndex >= this.pageNumberSize) return;
      this.pageIndex += 1;
    },
    pageClick(val) {
      this.pageIndex = val.number;
      this.$emit("click", val.number);
    },
  },
};
</script>
<style lang="scss">
@import "./pagination.scss";
</style>