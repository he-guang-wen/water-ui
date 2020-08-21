<template>
  <div class="wr-toast-body" :style="'display:'+isShow">
    <div class="wr-toast" :style="[{zIndex:zIndex},{color:color},{background:background}]" :class="{'wr-toast--row':row}">
      <div class="wr-toast-icon" v-if="types[type]">
        <wr-icon :name="types[type]" :size="row?20:40" :color="iconColor"></wr-icon>
      </div>
      <span>{{text}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "wrToast",
  data() {
    return {
      duration: 2000,
      isClose: false,
      show: false,
      icon: "none",
      text: "",
      zIndex: 1204,
      timeoutID: "",
      row: false,
      type: "error",
      types: {
        success: "seleted",
        error: "close",
        warning: "prompt"
      },
      color:'',
      background:'',
      iconColor:''
    };
  },
  watch: {
    show(val) {
      if (val) {
        document.getElementsByClassName("wr-toast-body")[0].style.display =
          "flex";

        this.$emit("onOpen", val);

        //   console.log( this.open())
        //       console.log(this,'1010101010')
      } else {
        document.getElementsByClassName("wr-toast-body")[0].style.display =
          "none";
        this.$emit("onClose", val);
      }
    }
  },
  mounted() {},
  computed: {
    isShow() {
      return this.show ? "flex" : "none";
    }
  },
  methods: {
    timeout() {
      if (this.duration != 0) {
        if (this.timeoutID) clearTimeout(this.timeoutID);
        this.timeoutID = setTimeout(() => {
          this.show = false;
        }, this.duration);
      }
    },
    setData(data) {
      for (let key in data) {
        if (key == "open") {
          break;
          //   data.open(113223232);
        }
        this[key] = data[key];
      }
      this.timeout();
    },
    hide() {
      this.show = false;
    },
    onOpen(e) {
      e("1212");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./toast.scss";
</style>