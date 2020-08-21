<template>
  <div class="pagination-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

    <div class="card">
      <p class="title">基础用法</p>
      <div style="background: #fff;">
        <wr-tabs>
          <wr-tab-pane name="home" title="首页">首页</wr-tab-pane>
          <wr-tab-pane name="digitalProducts" title="数码">数码</wr-tab-pane>
          <wr-tab-pane name="electricAppliance" title="电器">电器</wr-tab-pane>
          <wr-tab-pane name="clothing" title="服装">服装</wr-tab-pane>
          <wr-tab-pane name="healthProducts" title="保健">保健</wr-tab-pane>
        </wr-tabs>
      </div>
    </div>

    <div class="card">
      <p class="title">线条高度</p>
      <div style="background: #fff;">
        <wr-tabs line-height="3">
          <wr-tab-pane name="home" title="首页">首页</wr-tab-pane>
          <wr-tab-pane name="digitalProducts" title="数码">数码</wr-tab-pane>
          <wr-tab-pane name="electricAppliance" title="电器">电器</wr-tab-pane>
          <wr-tab-pane name="clothing" title="服装">服装</wr-tab-pane>
          <wr-tab-pane name="healthProducts" title="保健">保健</wr-tab-pane>
        </wr-tabs>
      </div>
    </div>
    

    <div class="card">
      <p class="title">柱形</p>
      <div style="background: #fff;">
        <wr-tabs type="column" title-active-color="#fff">
          <wr-tab-pane name="home" title="首页">首页</wr-tab-pane>
          <wr-tab-pane name="digitalProducts" title="数码">数码</wr-tab-pane>
          <wr-tab-pane name="electricAppliance" title="电器">电器</wr-tab-pane>
          <wr-tab-pane name="clothing" title="服装">服装</wr-tab-pane>
          <wr-tab-pane name="healthProducts" title="保健">保健</wr-tab-pane>

        </wr-tabs>
        <wr-tabs type="column" title-active-color="#f56c6c" color="#fef0f0">
          <wr-tab-pane name="home" title="首页">首页</wr-tab-pane>
          <wr-tab-pane name="digitalProducts" title="数码">数码</wr-tab-pane>
          <wr-tab-pane name="electricAppliance" title="电器">电器</wr-tab-pane>
          <wr-tab-pane name="clothing" title="服装">服装</wr-tab-pane>
          <wr-tab-pane name="healthProducts" title="保健">保健</wr-tab-pane>
        </wr-tabs>
      </div>
    </div>

    <div class="card">
      <p class="title">横向滚动</p>
      <div style="background: #fff;">
        <wr-tabs scrollX>
          <wr-tab-pane name="home" title="首页">首页</wr-tab-pane>
          <wr-tab-pane name="digitalProducts" title="数码">数码</wr-tab-pane>
          <wr-tab-pane name="electricAppliance" title="电器">电器</wr-tab-pane>
          <wr-tab-pane name="clothing" title="服装">服装</wr-tab-pane>
          <wr-tab-pane name="healthProducts" title="保健">保健</wr-tab-pane>
                    <wr-tab-pane name="ornament" title="饰品">饰品</wr-tab-pane>
          <wr-tab-pane name="fresh" title="生鲜">生鲜</wr-tab-pane>
        </wr-tabs>
        <wr-tabs type="column" title-active-color="#f56c6c" color="#fef0f0" scrollX>
          <wr-tab-pane name="home" title="首页">首页</wr-tab-pane>
          <wr-tab-pane name="digitalProducts" title="数码">数码</wr-tab-pane>
          <wr-tab-pane name="electricAppliance" title="电器">电器</wr-tab-pane>
          <wr-tab-pane name="clothing" title="服装">服装</wr-tab-pane>
          <wr-tab-pane name="healthProducts" title="保健">保健</wr-tab-pane>
          <wr-tab-pane name="ornament" title="饰品">饰品</wr-tab-pane>
          <wr-tab-pane name="fresh" title="生鲜">生鲜</wr-tab-pane>
        </wr-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
  data() {
    return {
      activeName: ["0"]
    };
  },
  methods: {
    paginationChange(e) {
      this.$wrToast(e);
    }
  }
};
</script>
<style lang="scss" scoped>
.interim {
  height: auto;
}
.pagination-demo {
  background: #f2f6fc;
  height: 100%;
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
