<template>
  <div class="nav-bar-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>
      <wr-nav-bar class="nav-bar-demo_item" left-icon="arrow-left" title="基础用法" right-icon="all"></wr-nav-bar>
      <wr-nav-bar class="nav-bar-demo_item" left-icon="arrow-left" :border="false" title="去掉底部边框" right-icon="all"></wr-nav-bar>

      <wr-nav-bar class="nav-bar-demo_item" :border="false">
        <template #left>左边插槽</template>
        <template #center>中间标题插槽</template>
        <template #right>右边插槽</template>
      </wr-nav-bar>
  </div>
</template>
<script>
export default {}; 
</script>
<style scoped>
.interim {
  height: 100%;
}
.nav-bar-demo {
  height: 100%;
  background: #f2f6fc;
}
.list {
  background: #f2f6fc;
  padding: 10px 0;
  margin-top: 5px;
  text-align: center;
}
.card {
  width: 100%;
  padding: 15px 0;
}
.back-top-img {
  width: 40px;
  height: 40px;
}
.nav-bar-demo_item{
  margin-top: 40px;
}
</style>
