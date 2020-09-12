<template>
  <div class="buttonDemo">
    <wr-nav-bar
      left-icon="home"
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      fixed
    ></wr-nav-bar>
    <div class="card">
      <p class="title">基础用法</p>
      <div class="buttom-type">
        <wr-button type="primary" @click="showToast1()">短文字</wr-button>
        <wr-button type="primary" @click="showToast2()">长文字</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">成功提示用法</p>
      <div class="buttom-type">
        <wr-button type="success" @click="showToast3()">成功提示</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">失败提示用法</p>
      <div class="buttom-type">
        <wr-button type="danger" @click="showToast4()">失败提示</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">加载状态</p>
      <div class="buttom-type">
        <wr-button type="primary" @click="showToast5()">加载状态</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">禁止点击穿透</p>
      <div class="buttom-type">
        <wr-button type="primary" @click="showToast6()">显示</wr-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  mounted() {},
  methods: {
    showToast1() {
      this.$wrToast("短文字");
    },
    showToast2() {
      this.$wrToast("我是一个长文本内容，一行容不下我就换到下一行");
    },
    showToast3() {
      this.$wrToast.success("成功");
    },
    showToast4() {
      this.$wrToast.error("失败");
    },
    showToast5() {
      this.$wrToast.loading({
        text: "加载中...",
        loadingType: "spinner"
      });
    },
    showToast6() {
      this.$wrToast({
        text: "5秒关闭，期间无法点击穿透",
        mask: true,
        duration: 5000,
        isClose:true
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>