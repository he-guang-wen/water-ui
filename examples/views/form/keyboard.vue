<template>
  <div>
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

    <div class="card">
      <p class="title">键盘类型</p>
      <div class="demo__wrapper">
        <wr-button type="primary" @click="click('number')" class="button">数字键盘</wr-button>
        <wr-keyboard v-model="numberValue" :show="numberShow" @blur="blur"></wr-keyboard>

        <wr-button type="primary" @click="click('card')" class="button">身份证键盘</wr-button>
        <wr-keyboard v-model="cardValue" :show="cardShow" @blur="blur" :type="type"></wr-keyboard>

        <wr-button type="primary" @click="click('car')" class="button">车牌号键盘</wr-button>
        <wr-keyboard v-model="carValue" :show="carShow" @blur="blur" :type="type"></wr-keyboard>
      </div>
    </div>

    <div class="card">
      <p class="title">带标题</p>
      <div class="demo__wrapper">
        <wr-button type="primary" @click="click('title')" class="button">带标题</wr-button>
        <wr-keyboard v-model="titleValue" :show="titleShow" title="数字键盘" @blur="blur"></wr-keyboard>
      </div>
    </div>

    <div class="card">
      <p class="title">双向绑定</p>
      <p  class="title" v-show="bindingValue">输入值：{{bindingValue}}</p>
      <div class="demo__wrapper">
        <wr-button type="primary" @click="click('binding')" class="button">双向绑定</wr-button>
        <wr-keyboard v-model="bindingValue" :show="bindingShow"  @blur="blur"></wr-keyboard>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      numberShow: false,
      numberValue: "",
      cardShow: false,
      cardValue: "",
      carShow: false,
      carValue: "",
      titleShow: false,
      titleValue: "",
      bindingShow: false,
      bindingValue: "",
      type: "",
    };
  },
  methods: {
    click(type) {
      this.type = type;
      let key = type + "Show";
      this[key] = true;
    },
    blur() {
      let key = this.type + "Show";
      this[key] = false;
    },
  },
};
</script>
<style lang="scss">
.button {
  margin-left: 5px;
  margin-top: 5px;
}
</style>