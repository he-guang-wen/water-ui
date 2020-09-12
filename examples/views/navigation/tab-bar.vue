<template>
  <div class="tab-bar-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

    <div class="card">
      <p class="title">基础用法</p>
      <div style="background: #fff;">
        <wr-tab-bar v-model="tabBarValue"> 
          <wr-tab-bar-item
            name="home"
            text="首页"
            img-path="http://img1.imgtn.bdimg.com/it/u=3696901963,3916247602&fm=26&gp=0.jpg"
            selected-img-path="../../assets/home_on.png"
          ></wr-tab-bar-item>
          <wr-tab-bar-item
            name="news"
           text="消息"
            img-path="/assets/news_un.png"
            selected-img-path="../../assets/news_on.png"
          ></wr-tab-bar-item>
          <wr-tab-bar-item
            name="my"
                text="我的"
            img-path="../../assets/my_un.png"
            selected-img-path="../../assets/my_on.png"
          ></wr-tab-bar-item>
        </wr-tab-bar>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
  data() {
    return {
      activeName: ["0"],
      tabBarValue:'home'
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.interim {
  height: auto;
}
.tab-bar-demo {
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
