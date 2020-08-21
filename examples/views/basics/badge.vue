<template>
  <div class="demo-badges">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

    <div class="card">
      <p class="title">基础用法</p>
      <div class="demo__wrapper">
        <wr-badge :value="99" class="demo-badge">
          <wr-button>按钮</wr-button>
        </wr-badge>
      </div>
    </div>

    <div class="card">
      <p class="title">主题</p>
      <div class="demo__wrapper">
        <wr-badge class="demo-badge" :value="99">
          <wr-button>按钮</wr-button>
        </wr-badge>
        <wr-badge :value="99" type="success" class="demo-badge">
          <wr-button>按钮</wr-button>
        </wr-badge>

        <wr-badge :value="99" type="warning" class="demo-badge">
          <wr-button>按钮</wr-button>
        </wr-badge>

        <wr-badge :value="99" type="danger" class="demo-badge">
          <wr-button>按钮</wr-button>
        </wr-badge>
      </div>
    </div>

    <div class="card">
      <p class="title">使用文字</p>
      <div class="demo__wrapper">
        <wr-badge value="文字" class="demo-badge">
          <wr-button>按钮</wr-button>
        </wr-badge>
      </div>
    </div>

    <div class="card">
      <p class="title">偏移</p>
      <div class="demo__wrapper">
        <wr-badge value="99+" class="demo-badge" :offset="[5,-2]">
          <wr-button>按钮</wr-button>
        </wr-badge>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
};
</script>
<style lang="scss" scoped>
.interim {
  height: auto;
}

.demo__wrapper {
  min-height: 100%;
}
.demo-badges {
}
.demo-badge {
  margin: 5px 20px 0 0;
}

// .col {
//   background: #1989fa;
//   color: #fff;
//   text-align: center;
// }
// .card {
//   width: 100%;
//   padding: 0;
// }
// .title {
//   padding-left: 10px;
// }
// .layout-demo {
//   height: auto;
// }
// .radius {
//   border-radius: 3px;
// }
// .margin-top {
//   margin-top: 5px;
// }
// .col-dark {
//   background: #3997f6;
//   color: #fff;
//   text-align: center;
// }
// .col-shallow {
//   background: #87bdf3;
//   color: #fff;
//   text-align: center;
// }
</style>