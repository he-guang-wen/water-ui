<template>
  <div class="badge-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

    <div class="card">
      <p class="title">基础用法</p>
      <div>
        <wr-divider>已经见底了</wr-divider>
      </div>
    </div>

    <div class="card">
      <p class="title">文字颜色</p>
      <div>
        <wr-divider color="red">已经见底了</wr-divider>
      </div>
    </div>

    <div class="card">
      <p class="title">线条颜色</p>
      <div>
        <wr-divider border-color="red">已经见底了</wr-divider>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
};
</script>
<style lang="scss" scoped>
.interim {
  height: auto;
}
.badge-demo {
  min-height: 100%;
  background: #f2f6fc;
}

.demo-divider {
  margin: 5px 20px 0 0;
}
.card {
  width: 80%;
  margin: 0 auto;
  box-shadow: 0 0 2px 1px #95c1ed;
  margin-top: 30px;
  padding: 15px;
  border-radius: 10px;
}
</style>