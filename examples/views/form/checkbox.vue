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
        <wr-checkbox v-model="value1">吃饭</wr-checkbox>
      </div>
    </div>

    <div class="card">
      <p class="title">圆形</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-checkbox v-model="value2" round>吃饭</wr-checkbox>
      </div>
    </div>

    <div class="card">
      <p class="title">禁用</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-checkbox v-model="value3" disabled>吃饭</wr-checkbox>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义颜色</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-checkbox v-model="value4" checked-color="#07c160">吃饭</wr-checkbox>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义大小</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-checkbox v-model="value5" :size="30">吃饭</wr-checkbox>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义图标插槽</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-checkbox v-model="value6">
          <template>吃饭</template>
          <template #icon="{props}">
            <wr-icon name="confirm" :size="30" :color="props.checked? '#00a1ff':'#000'"></wr-icon>
          </template>
        </wr-checkbox>
      </div>
    </div>

    <div class="card">
      <p class="title">复选框组</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-checkbox-group v-model="value7">
          <wr-checkbox name="eat">吃饭</wr-checkbox>
          <wr-checkbox name="sleep">睡觉</wr-checkbox>
          <wr-checkbox name="doug">打豆豆</wr-checkbox>
        </wr-checkbox-group>
      </div>
    </div>

    <div class="card">
      <p class="title">复选框组垂直排列</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-checkbox-group v-model="value8" vertical>
          <wr-checkbox name="eat">吃饭</wr-checkbox>
          <wr-checkbox name="sleep" style="margin-top:10px">睡觉</wr-checkbox>
          <wr-checkbox name="doug" style="margin-top:10px">打豆豆</wr-checkbox>
        </wr-checkbox-group>
      </div>
    </div>

    <div class="card">
      <p class="title">复选框组平均分布</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-checkbox-group v-model="value9" vertical>
          <wr-checkbox name="eat" space-between style="margin-top:10px">吃饭</wr-checkbox>
          <wr-checkbox name="sleep" space-between style="margin-top:10px">睡觉</wr-checkbox>
          <wr-checkbox name="doug" space-between style="margin-top:10px">打豆豆</wr-checkbox>
        </wr-checkbox-group>
      </div>
    </div>

    <div class="card">
      <p class="title">禁用复选框组</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-checkbox-group v-model="value10" disabled>
          <wr-checkbox name="eat">吃饭</wr-checkbox>
          <wr-checkbox name="sleep">睡觉</wr-checkbox>
          <wr-checkbox name="doug">打豆豆</wr-checkbox>
        </wr-checkbox-group>
      </div>
    </div>

    <div class="card">
      <p class="title">限制最大选中数量</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-checkbox-group v-model="value11" :max="2">
          <wr-checkbox name="eat">吃饭</wr-checkbox>
          <wr-checkbox name="sleep">睡觉</wr-checkbox>
          <wr-checkbox name="doug">打豆豆</wr-checkbox>
        </wr-checkbox-group>
      </div>
    </div>

    <div class="card">
      <p class="title">全选、全不选与反选</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-checkbox-group v-model="value12" ref="checkboxGroup">
          <wr-checkbox name="eat">吃饭</wr-checkbox>
          <wr-checkbox name="sleep">睡觉</wr-checkbox>
          <wr-checkbox name="doug">打豆豆</wr-checkbox>
        </wr-checkbox-group>
        <div style="margin-top:10px">
          <wr-button @click="checkAll" type="primary" size="small">全选</wr-button>
          <wr-button @click="unCheckAll" type="primary" size="small" style="margin-left:10px">全不选</wr-button>
          <wr-button @click="reverseAll" type="primary" size="small" style="margin-left:10px">反选</wr-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
  data() {
    return {
      value1: true,
      value2: true,
      value3: true,
      value4: true,
      value5: true,
      value6: true,
      value7: ["eat"],
      value8: ["eat"],
      value9: ["eat"],
      value10: ["eat"],
      value11: ["eat"],
      value12: ["eat"]
    };
  },

  methods: {
    change(val) {
      console.log(val);
    },
    checkAll() {
      this.$refs.checkboxGroup.checkAll(true);
    },
    unCheckAll() {
      this.$refs.checkboxGroup.checkAll(false);
    },
    reverseAll() {
      this.$refs.checkboxGroup.reverseAll();
    }
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
