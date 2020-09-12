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
        <wr-circle v-model="circleValue"></wr-circle>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义宽度</p>
      <div>
        <wr-circle v-model="circleValue" :stroke-width="10"></wr-circle>
      </div>
    </div>

    <div class="card">
      <p class="title">轨道颜色</p>
      <div>
        <wr-circle v-model="circleValue" track-color="#b1d3f4"></wr-circle>
      </div>
    </div>

    <div class="card">
      <p class="title">进度颜色</p>
      <div>
        <wr-circle v-model="circleValue" color="red"></wr-circle>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义文字内容</p>
      <div>
        <wr-circle v-model="circleValue">
          <div>文字</div>
        </wr-circle>
      </div>
    </div>



    <div class="fab">
      <wr-button class="fab-button" @click="circleValue+=20">增加</wr-button>
      <wr-button class="fab-button" @click="circleValue-=10">减少</wr-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      circleValue: 10
    };
  },
  mounted() {}
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

.demo-circle {
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
.fab {
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.fab-button {
  margin-top: 10px;
}
</style>