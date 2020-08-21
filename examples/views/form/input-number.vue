<template>
  <div class="field-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

    <div class="card">
      <p class="title">基础用法</p>
      <div class="demo__wrapper">
        <wr-input-number v-model="value1"></wr-input-number>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义步长</p>
      <div class="demo__wrapper">
        <wr-input-number v-model="value2" :step="3"></wr-input-number>
      </div>
    </div>

    <div class="card">
      <p class="title">限制输入范围</p>
      <div class="demo__wrapper">
        <wr-input-number v-model="value3" :min="1" :max="10"></wr-input-number>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义小数位</p>
      <div class="demo__wrapper">
        <wr-input-number v-model="value4" :decimal="1" :step="1.25" :input-width="40"></wr-input-number>
        <wr-input-number
          v-model="value4"
          :decimal="2"
          :step="1.25"
          :input-width="50"
          style="margin-left:20px"
        ></wr-input-number>
      </div>
    </div>

    <div class="card">
      <p class="title">禁用步进器</p>
      <div class="demo__wrapper">
        <wr-input-number v-model="value5" :step="3" disabled></wr-input-number>
      </div>
    </div>

    <div class="card">
      <p class="title">禁用输入框</p>
      <div class="demo__wrapper">
        <wr-input-number v-model="value6" :step="3" disable-input></wr-input-number>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
  data() {
    return {
      value1: 1,
      value2: 1,
      value3: 1,
      value4: 1,
      value5: 1,
      value6: 1
    };
  },

  methods: {
    fieldChange(e) {
      this.$wrToast(e);
    }
  }
};
</script>
<style lang="scss" scoped>
.interim {
  height: auto;
}
.field-demo {
  background: #f2f6fc;
  height: auto;
}

.col {
  background: #1989fa;
  color: #fff;
  text-align: center;
}
.card {
  width: 100%;
  padding: 0;
  box-shadow: none;
  background: #f2f6fc;
}
.title {
  padding-left: 10px;
}
.layout-demo {
  height: auto;
}
.radius {
  border-radius: 3px;
}
.margin-top {
  margin-top: 5px;
}
.col-dark {
  background: #3997f6;
  color: #fff;
  text-align: center;
}
.col-shallow {
  background: #87bdf3;
  color: #fff;
  text-align: center;
}
</style>
