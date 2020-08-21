<template>
  <div class="notice-bar-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

    <div class="card">
      <p class="title">基础用法</p>
      <div class="demo__wrapper">
        <wr-notice-bar text="基础用法"></wr-notice-bar>
      </div>
    </div>

    <div class="card">
      <p class="title">图标</p>
      <div class="demo__wrapper">
        <wr-notice-bar left-icon="sound-filling" right-icon="arrow-right" text="基础用法"></wr-notice-bar>
      </div>
    </div>

    <div class="card">
      <p class="title">文字滚动速率</p>
      <div class="demo__wrapper">
        <wr-notice-bar text="文字滚动速率" :speed="10"></wr-notice-bar>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义背景和文字颜色</p>
      <div class="demo__wrapper">
        <wr-notice-bar text="自定义背景和文字颜色" background="#e8a59e" text-color="red"></wr-notice-bar>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {}
};
</script>
<style lang="scss" scoped>
.interim {
  height: auto;
}
.notice-bar-demo {
  min-height: 100%;
  background: #f2f6fc;
}

.demo-divider {
  margin: 5px 20px 0 0;
}
.demo__wrapper{
}
.card {
  // margin-top: 30px;
  // padding: 15px;
  // border-radius: 10px;
}
</style>