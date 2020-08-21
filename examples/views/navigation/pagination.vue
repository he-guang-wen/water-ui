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
        <wr-pagination :page-count="70" :page-per-size="10" @change="paginationChange"></wr-pagination>
      </div>
    </div>

    <div class="card">
      <p class="title">简易模式</p>
      <div style="background: #fff;">
        <wr-pagination :page-count="70" :page-per-size="10" @change="paginationChange" simple></wr-pagination>
      </div>
    </div>

    <div class="card">
      <p class="title">指定显示页码数量</p>
      <div style="background: #fff;">
        <wr-pagination
          :page-count="70"
          :page-per-size="10"
          :show-page-size="7"
          @change="paginationChange"
        ></wr-pagination>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义选择颜色</p>
      <div style="background: #fff;">
        <wr-pagination :page-count="70" :page-per-size="10" @change="paginationChange"  active-bg-color="red"></wr-pagination>
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
