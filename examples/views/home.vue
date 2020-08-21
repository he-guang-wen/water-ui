<template>
  <div class="home">
    <div class="header">
      <p class="title">water-ui</p>
      <span class>一个简单的Vue组件库</span>
    </div>
    <div class="content">
      <div class="list-group" v-for="item in this.$router.options.routes" :key="item.name">
        <template v-if="item.name != 'home'">
          <p class="list-group_title">{{item.meta.title}}</p>
          <div class="list" v-for="val in item.children" :key="val.name">
            <div class="list-item" @click="toView(val)">{{val.meta.title}}</div>
          </div>
        </template>
      </div>
    </div>

    <!-- <bm-icon name="code"></bm-icon>
    <bm-loading size="20" :color="color"></bm-loading>
    <bm-button
      type="error"
      icon="code"
      color="linear-gradient(to right, rgb(75, 176, 255), rgb(97, 73, 246)"
    >司机</bm-button>
    <bm-switch @change="switchchange"></bm-switch>

    <bm-cell-group>
      <bm-cell
        titleColor="red"
        iconColor="#000"
        title="title"
        icon="calculator"
        right-icon="code"
        content="1213"
        describe="1321"
      ></bm-cell>
      <bm-cell
        title="title"
        icon="calculator"
        right-icon="code"
        content="1213"
        describe="1321"
        arrow
      ></bm-cell>
      <bm-cell title="title" icon="calculator" right-icon="code" content="1213" arrow></bm-cell>
    </bm-cell-group>

    <bm-row style="height:200px">
      <bm-col span="6">
        <div class="demo-col">121</div>
      </bm-col>
      <bm-col span="6">
        <div class="demo-col">121</div>
      </bm-col>
      <bm-col span="6">
        <div class="demo-col">121</div>
      </bm-col>

    </bm-row>

    <bm-swiper style="height:200px;">
      <bm-swiper-item style="background: antiquewhite;"></bm-swiper-item>
      <bm-swiper-item style="background: red"></bm-swiper-item>
      <bm-swiper-item style="background:#000"></bm-swiper-item>
    </bm-swiper>

    <demo :list="list"></demo>-->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      scrollTop: 0,
    };
  },
  mounted() {
    console.log(this.$router);
  },
  methods: {
    toView(val) {
      this.$router.push(val.path);
    },
  },
  activated() {
    this.$el.scrollTop = this.scrollTop;
  },
  beforeRouteLeave(to, from, next) {
    this.scrollTop = this.$el.scrollTop;
    next();
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.home::-webkit-scrollbar {
  display: none;
}
.header {
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #4e6ef2;
  color: #fff;
  position: relative;
  margin-bottom: 80px;
}

.header::after {
  content: "";
  display: block;
  width: 100%;
  height: 40px;
  background: #4e6ef2;
  position: absolute;
  bottom: 5px;
  left: 0;
  transform: translateY(100%);
  border-bottom-left-radius: 96%;
  border-bottom-right-radius: 96%;
}

.header > .title {
  font-size: 40px;
}

.describe {
  font-size: 15px;
}

.content {
  width: 100%;
  color: #000000;
}
.list-group {
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
}
.list-group_title {
  font-size: 17px;
}
.list {
  border-radius: 10px;
  overflow: hidden;
  margin-top: 5px;
}
.list-item {
  padding: 15px;
  background: #f2f6fc;
}
.list-item:nth-of-type(n + 2) {
  border-top: 1px solid #d4e4ec;
}
</style>
