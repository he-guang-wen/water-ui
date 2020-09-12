<template>
  <div class="badge-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

    <div class="card">
      <p class="title">基础用法</p>
      <div class = 'demo__wrapper'>
        <wr-count-down :time="200000"></wr-count-down>
      </div>
    </div>

    <div class="card">
      <p class="title">按毫秒级显示</p>
      <div class = 'demo__wrapper'>
        <wr-count-down :time="200000" :millisecond="true"></wr-count-down>
      </div>
    </div>

    <div class="card">
      <p class="title">按dd-hh-mm-ss显示</p>
      <div class = 'demo__wrapper'>
        <wr-count-down :time="2000000000" format="dd-hh-mm-ss"></wr-count-down>
      </div>
    </div>

    <div class="card">
      <p class="title">按hh-mm-ss显示</p>
      <div class = 'demo__wrapper'>
        <wr-count-down :time="20000000" format="hh-mm-ss"></wr-count-down>
      </div>
    </div>

    <div class="card">
      <p class="title">按ss显示</p>
      <div class = 'demo__wrapper'>
        <wr-count-down :time="200000" format="ss"></wr-count-down>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义分隔符</p>
      <div class = 'demo__wrapper'>
        <wr-count-down :time="2000000000" format="dd-hh-mm-ss" :decollator="decollator"></wr-count-down>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义样式</p>
      <div class = 'demo__wrapper'>
        <wr-count-down :time="2000000000" format="dd-hh-mm-ss">
          <template #default="{timeData}">
            <div>
              <span class="demo-count-down__format">{{timeData.d}}</span>
              <span class="demo-count-down__decollator">:</span>
              <span class="demo-count-down__format">{{timeData.h}}</span>
               <span class="demo-count-down__decollator">:</span>
              <span class="demo-count-down__format">{{timeData.m}}</span>
                <span class="demo-count-down__decollator">:</span>
              <span class="demo-count-down__format">{{timeData.s}}</span>
            </div>
          </template>
        </wr-count-down>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      decollator: { d: "天", h: "小时", m: "分钟", s: "秒", ms: "" }
    };
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.interim {
  height: auto;
}
.badge-demo {
  min-height: 100%;
  background: #f2f6fc;
}

.demo-divider {
  margin: 5px 20px 0 0;
}
// .card {
//   width: 80%;
//   margin: 0 auto;
//   box-shadow: 0 0 2px 1px #95c1ed;
//   margin-top: 30px;
//   padding: 15px;
//   border-radius: 10px;
// }
.demo-count-down__format {
  padding: 2px 5px;
  color: #f55555;
  border: 1px solid #f55555;
  border-radius: 5px;
}
.demo-count-down__decollator{
  padding: 0 4px;
}
</style>