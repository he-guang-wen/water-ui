<template>
  <div class="icon-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>
    <div class="card">
      <p class="title">基础用法</p>
      <div class="demo__wrapper">
        <wr-icon name="browse"></wr-icon>
        <wr-icon name="all"></wr-icon>
        <wr-icon name="component"></wr-icon>
      </div>
    </div>

    <div class="card">
      <p class="title">图标大小</p>
      <div class="demo__wrapper">
        <wr-icon name="browse"></wr-icon>
        <wr-icon :size="40" name="all"></wr-icon>
        <wr-icon :size="60" name="component"></wr-icon>
      </div>
    </div>

    <div class="card">
      <p class="title">图标颜色</p>
      <div class="demo__wrapper">
        <wr-icon color="#07c160" name="browse"></wr-icon>
        <wr-icon :size="40" color="#1989fa" name="all"></wr-icon>
        <wr-icon :size="60" color="#f55555" name="component"></wr-icon>
      </div>
    </div>

    <div class="card">
      <p class="title">图标集合</p>
      <div class="icon-list">
        <div class="icon-list-item" v-for="item in iconList" :key="item.name">
          <wr-icon :name="item.name"></wr-icon>
          <div class="icon-list-item_text">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      iconList: [
        { name: "all" },
        { name: "all-fill" },
        { name: "component" },
        { name: "code" },
        { name: "dollar" },
        { name: "editor" },
        { name: "gift" },
        { name: "integral" },
        { name: "Notvisible" },
        { name: "play" },
        { name: "rising" },
        { name: "QRcode" },
        { name: "rmb" },
        { name: "favorites-fill" },
        { name: "prompt-fill" },
        { name: "arrow-right" },
        { name: "arrow-left" },
        { name: "arrow-up" },
        { name: "ashbin" },
        { name: "attachent" },
        { name: "browse" },
        { name: "cart-full" }, 
        { name: "calculator" },
        { name: "category" },
         { name: "close" },
        { name: "conditions" },
        { name: "confirm" },
        { name: "CurrencyConverter" },
        { name: "download" },
        { name: "listing-content" },
        { name: "operation" },
        { name: "pic" },
        { name: "play1" },
        { name: "prompt" },
        { name: "reeor" },
        { name: "reduce" },
        { name: "rising1" },
        { name: "Rightarrow" },
        { name: "scanning" },
        { name: "seleted" },
        { name: "sound-filling" },
        { name: "switch" },
        { name: "set" },
        { name: "usercenter" }
      ]
    };
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.icon-demo{
   height: auto;
     background: #f2f6fc;
}
.icon-list {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
}
.icon-list-item {
  width: 33.3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
}
.icon-list-item_text {
  margin-top: 2px;
  color: #909999;
  font-size: 12px;
}
</style>
