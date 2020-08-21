<template>
  <div class="field-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

    <div class="card">
      <p class="title">基础用法</p>
      <div style="background: #fff;">
        <wr-field placeholder="请输入文本" label="文本"></wr-field>
      </div>
    </div>

    <div class="card">
      <p class="title">输入框只读</p>
      <div style="background: #fff;">
        <wr-field label="文本" readonly value="输入框只读"></wr-field>
      </div>
    </div>

    <div class="card">
      <p class="title">输入框禁用</p>
      <div style="background: #fff;">
        <wr-field placeholder="请输入文本" label="文本" disabled></wr-field>
      </div>
    </div>

    <div class="card">
      <p class="title">显示必填号</p>
      <div style="background: #fff;">
        <wr-field placeholder="请输入文本" label="文本" required></wr-field>
      </div>
    </div>

 

    <div class="card">
      <p class="title">自定义类型·</p>
      <div style="background: #fff;">
        <wr-field placeholder="请输入文本" label="文本"></wr-field>
        <wr-field placeholder="请输入手机号" label="手机号" type="tel"></wr-field>
        <wr-field placeholder="请输入数字" label="数字" type="number"></wr-field>
        <wr-field placeholder="请输入密码" label="密码" type="password"></wr-field>
        <wr-field placeholder="请输入长文本" label="长文本" type="textarea"></wr-field>
      </div>
    </div>

   <div class="card">
      <p class="title">textarea高度自适应</p>
      <div style="background: #fff;">
        <wr-field placeholder="请输入长文本" label="长文本" type="textarea" rows="1" auto-height></wr-field>
        <wr-field placeholder="请输入长文本" label="长文本" type="textarea" rows="4" auto-height></wr-field>
      </div>
    </div>



          <div class="card">
      <p class="title">右侧插槽</p>
      <div style="background: #fff;">
        <wr-field placeholder="请输入文本" label="文本" >
            <template #right>
                <wr-button type="success" size="small">发送验证码</wr-button>
            </template>
        </wr-field>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
  data() {
    return {
      activeName: ["0"]
    };
  },
  methods: {
    fieldChange(e) {
      this.$wrToast(e);
    }
  }
};
</script>
<style lang="scss" scoped>
.interim {
  height: auto;
}
.field-demo {
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
