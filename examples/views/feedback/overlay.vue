<template>
  <div class="overlay-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

    <div class="card">
      <p class="title">基础用法</p>
      <div class="overlay-demo__list">
        <wr-button type="primary" @click="value1 = true">基础用法</wr-button>
        <wr-overlay v-model="value1"></wr-overlay>
      </div>
    </div>

    <div class="card">
      <p class="title">插槽</p>
      <div class="overlay-demo__list">
        <wr-button type="primary" @click="value2 = true">基础用法</wr-button>
        <wr-overlay v-model="value2">
          <div class="warp">
            <div class="content" @click.stop=""></div>
          </div>
        </wr-overlay>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
  data() {
    return {
      value1: false,
      value2: false
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
  height: 100%;
}
.overlay-demo {
  background: #f2f6fc;
  min-height: 100%;
}
.overlay-demo__list {
  background: #fff;
  padding: 20px;
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
.warp {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  background: #fff;
  width: 200px;
  height: 150px;
}
</style>
