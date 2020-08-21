<template>
  <div class="cell-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>
    <div class="card">
      <p class="title">基础用法</p>
      <div>
        <!-- <wr-cell-group>
          <wr-cell icon="sound-filling" title="消息通知" arrow></wr-cell>
          <wr-cell icon="all" title="最近浏览" arrow></wr-cell>
          <wr-cell icon="set" title="设置" arrow></wr-cell>
        </wr-cell-group>-->

        <wr-cell-group>
          <wr-cell title="消息通知"></wr-cell>
          <wr-cell title="最近浏览"></wr-cell>
          <wr-cell title="设置"></wr-cell>
        </wr-cell-group>
      </div>
    </div>

    <div class="card">
      <p class="title">带图标和箭头</p>
      <div>
        <wr-cell-group>
          <wr-cell icon="sound-filling" title="消息通知" arrow></wr-cell>
          <wr-cell icon="all" title="最近浏览" arrow></wr-cell>
          <wr-cell icon="set" title="设置" arrow></wr-cell>
        </wr-cell-group>
      </div>
    </div>

    <div class="card">
      <p class="title">带有描述信息</p>
      <div>
        <wr-cell-group>
          <wr-cell icon="set" title="设置" arrow description="描述信息" content="内容"></wr-cell>
        </wr-cell-group>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义插槽</p>
      <div>
        <wr-cell-group>
          <wr-cell>
            <template #left>左侧插槽</template>
            <template #right>右侧插槽</template>
            <template #description>描述插槽</template>
          </wr-cell>
        </wr-cell-group>
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
.cell-demo {
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