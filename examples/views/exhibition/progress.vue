<template>
  <div class="progress-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

    <div class="card">
      <p class="title">基础用法</p>
      <div>
     <wr-progress :value="66"></wr-progress>
      </div>
    </div>


    <div class="card">
      <p class="title">自定义轨道颜色</p>
      <div>
     <wr-progress :value="66" track-color="#b0d3f7"></wr-progress>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义进度颜色</p>
      <div>
     <wr-progress :value="66" color="red"></wr-progress>
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
.progress-demo{
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