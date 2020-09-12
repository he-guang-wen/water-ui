<template>
  <div class="buttonDemo">
    <wr-nav-bar
      left-icon="home"
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      fixed
    ></wr-nav-bar>
    <div class="card">
      <p class="title">基础用法</p>
      <div class="demo__wrapper">
        <wr-switch></wr-switch>
      </div>
    </div>

    <div class="card">
      <p class="title">禁用状态</p>
      <div class="demo__wrapper">
        <wr-switch :value="true" disabled></wr-switch>
        <wr-switch disabled></wr-switch>
      </div>
    </div>

    <div class="card">
      <p class="title">加载状态</p>
      <div class="demo__wrapper">
        <wr-switch :value="true" loading></wr-switch>
        <wr-switch loading></wr-switch>
      </div>
    </div>

    <div class="card">
      <p class="title">开关大小</p>
      <div class="demo__wrapper">
        <wr-switch size="25" :value="true"></wr-switch>
        <wr-switch :value="true"></wr-switch>
        <wr-switch size="35" :value="true"></wr-switch>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义颜色</p>
      <div class="demo__wrapper">
        <wr-switch active-color="#07c160" :value="true"></wr-switch>
        <wr-switch active-color="#ef9f27" :value="true"></wr-switch>
        <wr-switch active-color="#f55555" :value="true"></wr-switch>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>