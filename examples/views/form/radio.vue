<template>
  <div class="radio-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

    <div class="card">
      <p class="title">基础用法</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-radio-group v-model="value1">
          <wr-radio name="1">男</wr-radio>
          <wr-radio name="2">女</wr-radio>
        </wr-radio-group>
      </div>
    </div>

    <div class="card">
      <p class="title">垂直排列</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-radio-group v-model="value2" vertical>
          <wr-radio name="1">男</wr-radio>
          <wr-radio name="2" style="margin-top:10px">女</wr-radio>
        </wr-radio-group>
      </div>
    </div>

    <div class="card">
      <p class="title">平均分布</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-radio-group v-model="value3" vertical>
          <wr-radio name="1" space-between>男</wr-radio>
          <wr-radio name="2" style="margin-top:10px" space-between>女</wr-radio>
        </wr-radio-group>
      </div>
    </div>

    <div class="card">
      <p class="title">圆形</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-radio-group v-model="value4" round>
          <wr-radio name="1">男</wr-radio>
          <wr-radio name="2">女</wr-radio>
        </wr-radio-group>
      </div>
    </div>

    <div class="card">
      <p class="title">禁用</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-radio-group v-model="value5">
          <wr-radio name="1" disabled>男</wr-radio>
          <wr-radio name="2" disabled>女</wr-radio>
        </wr-radio-group>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义颜色</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-radio-group v-model="value6" checked-color="#07c160">
          <wr-radio name="1">男</wr-radio>
          <wr-radio name="2">女</wr-radio>
        </wr-radio-group>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义大小</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-radio-group v-model="value7" >
          <wr-radio name="1" size="30">男</wr-radio>
          <wr-radio name="2" size="30">女</wr-radio>
        </wr-radio-group>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义图标插槽</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-radio-group v-model="value8" checked-color="#07c160">
          <wr-radio name="1" size="25">
            <template>男</template>
            <template #icon="{props}">
              <wr-icon name="confirm" :size="30" :color="props.checked? '#00a1ff':'#000'"></wr-icon>
            </template>
          </wr-radio>
          <wr-radio name="2" size="25">
            <template>女</template>
            <template #icon="{props}">
              <wr-icon name="confirm" :size="30" :color="props.checked? '#00a1ff':'#000'"></wr-icon>
            </template>
          </wr-radio>
        </wr-radio-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
  data() {
    return {
      value1: "1",
      value2: "1",
      value3: "1",
      value4: "1",
      value5: "1",
      value6: "1",
      value7: "1",
      value8: "1"
    };
  },

  methods: {

  }
};
</script>
<style lang="scss" scoped>
.interim {
  min-height: 100%;
}
.radio-demo {
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
</style>
