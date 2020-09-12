<template>
  <div class="swiper-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

    <div class="card">
      <p class="title">基础用法</p>
      <div class="swiper-demo__list">
        <wr-swiper @change="swiperChange" height="250px">
          <wr-swiper-item class="swiper-item-1">
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3307360598,1434049869&fm=26&gp=0.jpg"
            />
          </wr-swiper-item>
          <wr-swiper-item class="swiper-item-2">
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3887031226,1521913471&fm=26&gp=0.jpg"
            />
          </wr-swiper-item>
          <wr-swiper-item class="swiper-item-3">
            <img
              src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2919642514,1568354213&fm=26&gp=0.jpg"
            />
          </wr-swiper-item>
          <wr-swiper-item class="swiper-item-4">
            <img
              src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2132769515,1588868998&fm=26&gp=0.jpg"
            />
          </wr-swiper-item>
        </wr-swiper>
      </div>
    </div>

        <div class="card">
      <p class="title">垂直</p>
      <div class="swiper-demo__list">
        <wr-swiper @change="swiperChange" vertical  height="250px">
          <wr-swiper-item class="swiper-item-1">
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3307360598,1434049869&fm=26&gp=0.jpg"
            />
          </wr-swiper-item>
          <wr-swiper-item class="swiper-item-2">
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3887031226,1521913471&fm=26&gp=0.jpg"
            />
          </wr-swiper-item>
          <wr-swiper-item class="swiper-item-3">
            <img
              src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2919642514,1568354213&fm=26&gp=0.jpg"
            />
          </wr-swiper-item>
          <wr-swiper-item class="swiper-item-4">
            <img
              src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2132769515,1588868998&fm=26&gp=0.jpg"
            />
          </wr-swiper-item>
        </wr-swiper>
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
    },
    swiperChange() {
      // console.log(e)
    }
  }
};
</script>
<style lang="scss" scoped>
.interim {
  height: 100%;
}
.swiper-demo {
  background: #f2f6fc;
  min-height: 100%;
}
.swiper-demo__list {
  background: #fff;
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
// .swiper-item-1 {
//   background: red;
// }
// .swiper-item-2 {
//   background: rgb(0, 255, 255);
// }
// .swiper-item-3 {
//   background: rgb(255, 0, 179);
// }
// .swiper-item-4 {
//   background: rgb(208, 255, 0);
// }
.swiper-demo__list {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
