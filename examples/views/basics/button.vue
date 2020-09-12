<template>
  <div class="buttonDemo">
       <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>
    <div class="card">
      <p class="title">按钮类型</p>
      <div class="demo__wrapper">
        <wr-button>默认按钮</wr-button>
        <wr-button type="primary">主要按钮</wr-button>
        <wr-button type="success">成功按钮</wr-button>
        <wr-button type="danger">危险按钮</wr-button>
        <wr-button type="warning">警告按钮</wr-button>
        <wr-button type="info">信息按钮</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">按钮大小</p>
      <div class="demo__wrapper">
        <wr-button type="primary" size="long">长按钮</wr-button>
        <wr-button type="primary">默认大小</wr-button>
        <wr-button type="primary" size="small">小按钮</wr-button>
        <wr-button type="primary" size="mini">迷你按钮</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">朴素类型</p>
      <div class="demo__wrapper">
        <wr-button plain>默认按钮</wr-button>
        <wr-button type="primary" plain>主要按钮</wr-button>
        <wr-button type="success" plain>成功按钮</wr-button>
        <wr-button type="danger" plain>危险按钮</wr-button>
        <wr-button type="warning" plain>警告按钮</wr-button>
        <wr-button type="info" plain>信息按钮</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">加载状态</p>
      <div class="demo__wrapper">
        <wr-button type="primary" loading>加载中</wr-button>
        <wr-button type="primary" plain loading>加载中</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">禁用状态</p>
      <div class="demo__wrapper">
        <wr-button type="primary" disabled>已禁用</wr-button>
        <wr-button type="primary" disabled plain>已禁用</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">按钮形状</p>
      <div class="demo__wrapper">
        <wr-button type="primary">方形按钮</wr-button>
        <wr-button type="primary" round>圆形按钮</wr-button>
        <wr-button type="primary" plain>方形按钮</wr-button>
        <wr-button type="primary" plain round>圆形按钮</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">图标按钮</p>
      <div class="demo__wrapper">
        <wr-button type="primary" icon="all"></wr-button>
        <wr-button type="primary" icon="all">按钮</wr-button>
        <wr-button type="primary" icon="all" plain>按钮</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义颜色按钮</p>
      <div class="demo__wrapper">
        <wr-button color="#8219fa" text-color="#fff">按钮</wr-button>
        <wr-button plain color="#8219fa" text-color="#197ffa">按钮</wr-button>
        <wr-button color="linear-gradient(135deg,#8219fa,#197ffa)" text-color="#fff">渐变色按钮</wr-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "buttonDemo",
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.buttonDemo {
  height: auto;
   background: #f2f6fc;
}

.demo__wrapper {
}

.wr-button {
  margin-top: 5px;
  margin-right: 5px;
}
</style>