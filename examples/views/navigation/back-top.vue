<template>
  <div>
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed

    ></wr-nav-bar>
    <div class="list" v-for="val in 300" :key="val">{{val}}</div>
    <wr-back-top></wr-back-top>

    <wr-back-top :bottom="50" round></wr-back-top>
    <wr-back-top :bottom="80" :right="5">
      <img class="back-top-img" src="../../assets/back-top.png" />
    </wr-back-top>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.list {
  background: #f2f6fc;
  padding: 10px 0;
  margin-top: 5px;
  text-align: center;
}

.back-top-img {
  width: 40px;
  height: 40px;
}
</style>
