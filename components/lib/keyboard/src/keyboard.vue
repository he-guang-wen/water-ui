<template>
  <transition name="wr-transition-bottom">
    <div class="wr-keyboard" v-show="open" tabindex="0" @blur="keyboardBlur" ref="keyboard">
      <div class="wr-keyboard__header">
        <div class="wr-keyboard__cancel"></div>
        <div class="wr-keyboard__title">{{title}}</div>
        <div class="wr-keyboard__confirm" @click="close">关闭</div>
      </div>
      <div class="wr-keyboard__body">
        <div class="wr-keyboard__keys">
          <div
            class="wr-key__wrapper"
            v-for="(val,index) in keys"
            :class="{'keyboard__card':type=='car'}"
            :key="index"
          >
            <template v-if="val == 'delete'">
              <div
                class="wr-key"
                :class="{'wr-key--active':keyIndex==val}"
                @touchstart="keyTouchstart(val)"
                @touchend="keyTouchend(val)"
              >删除</div>
            </template>
            <template v-else>
              <div
                class="wr-key"
                :class="{'wr-key--active':keyIndex==val}"
                @touchstart="keyTouchstart(val)"
                @touchend="keyTouchend(val)"
              >{{val}}</div>
            </template>
          </div>

          <template v-if="type=='car'">
            <div
              class="wr-keyboard__switch"
              @touchstart="keyTouchstart('switch')"
              @touchend="keyTouchend('switch')"
            >
              <span :class="{'switch--active':switchSelected=='area'}">中</span> /
              <span :class="{'switch--active':switchSelected=='letter'}">英</span>
            </div>
            <div
              class="wr-keyboard__delete"
              :class="{'wr-key--active':keyIndex=='delete'}"
              @touchstart="keyTouchstart('delete')"
              @touchend="keyTouchend('delete')"
            >
              <span>删除</span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import inputNumberVue from "../../input-number/src/input-number.vue";
export default {
  name: "wrKeyboard",
  props: {
    //绑定值
    value: {
      type: String,
    },
    //键盘类型
    type: {
      type: String,
      default: "number",
    },
    //显示与隐藏
    show: {
      type: Boolean,
      default: false,
    },
    //标题
    title: {
      type: String,
    },
    //显示小数点
    showDot: {
      type: Boolean,
      default: true,
    },
    maxLength: {
      type: Number,
      default: 4,
    },
  },
  data() {
    return {
      clientWidth: 0,
      keyIndex: -99,
      keys: [],
      number: [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "0", "delete"],
      card: [1, 2, 3, 4, 5, 6, 7, 8, 9, "X", "0", "delete"],
      area: [
        "京",
        "津",
        "沪",
        "渝",
        "冀",
        "豫",
        "云",
        "辽",
        "黑",
        "湘",
        "皖",
        "鲁",
        "新",
        "苏",
        "浙",
        "赣",
        "鄂",
        "桂",
        "甘",
        "晋",
        "蒙",
        "陕",
        "粤",
        "琼",
        "贵",
        "吉",
        "青",
        "藏",
        "宁",
        "闽",
        "港",
        "澳",
        "台",
        "使",
        "学",
      ],
      letter: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        0,
        "Q",
        "W",
        "E",
        "R",
        "T",
        "Y",
        "U",
        "I",
        "O",
        "P",
        "A",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "Z",
        "X",
        "C",
        "V",
        "B",
        "N",
        "M",
      ],
      switchSelected: "area",
      open: false,
    };
  },
  mounted() {
    this.clientWidth = document.body.clientWidth;
    // console.log(this.$refs)
  },
  watch: {
    show: {
      handler(val) {
        this.open = val;
        if (val) {
          this.$nextTick(() => {
            this.$refs.keyboard.focus();
          });
        }
      },
      immediate: true,
    },
    showDot: {
      handler(val) {
        if (!val) this.keys[9] = "";
      },
      immediate: true,
    },
    type: {
      handler(val) {
        switch (val) {
          case "number":
            this.keys = this.number;
            let text = "";
            if (this.showDot) text = ".";
            this.keys[9] = text;
            break;
          case "card":
            this.keys = this.card;
            break;
          case "car":
            this.keys = this.area;
            break;
        }
      },
      immediate: true,
    },
  },
  computed: {},
  methods: {
    /**
     * 键盘失去焦点
     */
    keyboardBlur() {
      this.open = false;
      this.$emit("blur");
    },
    /**
     * 键被触摸
     */
    keyTouchstart(index) {
      if (!index.toString()) return;
      this.keyIndex = index;
    },
    /**
     * 键触摸结束
     */
    keyTouchend(index) {
      this.keyIndex = -99;
      if (index == "delete") {
        this.$emit("delete");
        this.delete();
      } else if (index == "switch") {
        if (typeof this.keys[0] == "number") {
          this.keys = this.area;
          this.switchSelected = "area";
        } else {
          this.keys = this.letter;
          this.switchSelected = "letter";
        }
      } else {
        if (this.value.length >= this.maxLength) return;
        this.$emit("change", index);
        this.$emit("input", this.value.toString() + index);
      }
    },
    /**
     * 关闭
     */
    close() {
      this.open = false;
      this.$emit("close");
    },
    setCarSwitch() {
      this.keys = this.letter;
    },
    /**
     * 删除
     */
    delete() {
      this.$emit("input", this.value.substring(0, this.value.length - 1));
    },
  },
};
</script>
<style lang="scss">
@import "./keyboard.scss";
</style>