<template>
  <div>
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

    <div class="card">
      <p class="title">基础用法</p>
      <div class="demo__wrapper">
        <wr-rate v-model="value1"></wr-rate>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义颜色</p>
      <div class="demo__wrapper">
        <wr-rate v-model="value2" active-color="#1989fa" inactive-color="#ccc"></wr-rate>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义数量</p>
      <div class="demo__wrapper">
        <wr-rate v-model="value3" :count="7"></wr-rate>
      </div>
    </div>
    
    <div class="card">
      <p class="title">自定义图标</p>
      <div class="demo__wrapper">
        <wr-rate v-model="value4" active-icon="heartShape-fill" inactive-icon="heartShape"></wr-rate>
      </div>
    </div>

    <div class="card">
      <p class="title">最少选中3个</p>
      <div class="demo__wrapper">
        <wr-rate v-model="value5" :min-count="3"></wr-rate>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 1,
      value2: 2,
      value3: 3,
      value4: 4,
      value5: 3,
    };
  },
};
</script>