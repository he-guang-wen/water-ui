<template>
  <div class="popup-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

    <div class="card">
      <p class="title">基础用法</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-button type="primary" @click="openCenter" class="button">基础用法</wr-button>
        <wr-popup v-model="center"></wr-popup>
      </div>
    </div>

    <div class="card">
      <p class="title">弹出位置</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-button type="primary" @click="openLeft" class="button">左边弹出</wr-button>
        <wr-button type="primary" @click="openRight" class="button">右边弹出</wr-button>
        <wr-button type="primary" @click="openTop" class="button">顶部弹出</wr-button>
        <wr-button type="primary" @click="openBottom" class="button">底部弹出</wr-button>

        <wr-popup v-model="left" position="left"></wr-popup>
        <wr-popup v-model="right" position="right"></wr-popup>
        <wr-popup v-model="top" position="top"></wr-popup>
        <wr-popup v-model="bottom" position="bottom"></wr-popup>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
  data() {
    return {
      center: false,
      left: false,
      right: false,
      top: false,
      bottom: false,
    };
  },

  methods: {
    openCenter() {
      this.center = true;
    },
    openLeft() {
      this.left = true;
    },
    openRight() {
      this.right = true;
    },
    openTop() {
      this.top = true;
    },
    openBottom() {
      this.bottom = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.interim {
  min-height: 100%;
}
.popup-demo {
  background: #f2f6fc;
  min-height: 100%;
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
.button {
  margin-left: 5px;
  margin-top: 5px;
}
</style>
