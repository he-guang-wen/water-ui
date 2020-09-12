<template>
  <div class="layout-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>
    <div class="card">
      <p class="title">基础用法</p>
      <div class="demo__wrapper">
        <wr-row>
          <wr-col>
            <div class="col radius">24</div>
          </wr-col>
        </wr-row>
        <wr-row>
          <wr-col span="12">
            <div class="col-dark margin-top radius">12</div>
          </wr-col>
          <wr-col span="12">
            <div class="col-shallow margin-top radius">12</div>
          </wr-col>
        </wr-row>
        <wr-row>
          <wr-col span="8">
            <div class="col-dark margin-top radius">8</div>
          </wr-col>
          <wr-col span="8">
            <div class="col-shallow margin-top radius">8</div>
          </wr-col>
          <wr-col span="8">
            <div class="col-dark margin-top radius">8</div>
          </wr-col>
        </wr-row>
        <wr-row>
          <wr-col span="6">
            <div class="col-dark margin-top radius">6</div>
          </wr-col>
          <wr-col span="6">
            <div class="col-shallow margin-top radius">6</div>
          </wr-col>
          <wr-col span="6">
            <div class="col-dark margin-top radius">6</div>
          </wr-col>
          <wr-col span="6">
            <div class="col-shallow margin-top radius">6</div>
          </wr-col>
        </wr-row>
      </div>
    </div>

    <div class="card">
      <p class="title">分栏间隔</p>
      <div class="demo__wrapper">
        <wr-row gutter="10">
          <wr-col span="6">
            <div class="col-dark margin-top radius">6</div>
          </wr-col>
          <wr-col span="6">
            <div class="col-shallow margin-top radius">6</div>
          </wr-col>
          <wr-col span="6">
            <div class="col-dark margin-top radius">6</div>
          </wr-col>
          <wr-col span="6">
            <div class="col-shallow margin-top radius">6</div>
          </wr-col>
        </wr-row>
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
.col {
  background: #1989fa;
  color: #fff;
  text-align: center;
}
.demo__wrapper {
  min-height: 100%;
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