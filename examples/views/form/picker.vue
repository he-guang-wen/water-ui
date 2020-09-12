<template>
  <div class="picker-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

    <div class="card">
      <p class="title">基础用法</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-button type="primary" @click="open1" class="button">基础用法</wr-button>
        <wr-picker v-model="value1" :data="data1" ref="picker1"></wr-picker>
      </div>
    </div>

    <div class="card">
      <p class="title">带标题</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-button type="primary" @click="open2" class="button">带标题</wr-button>
        <wr-picker v-model="value1" :data="data1" ref="picker2" title="选择年级"></wr-picker>
      </div>
    </div>

    <div class="card">
      <p class="title">多级</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-button type="primary" @click="open3" class="button">多级</wr-button>
        <wr-picker v-model="value3" :data="data3" ref="picker3"></wr-picker>
      </div>
    </div>

    <div class="card">
      <p class="title">多级联动</p>
      <div style="background: #fff;padding: 20px 20px;  padding-left: 20px;">
        <wr-button type="primary" @click="open4" class="button">多级联动</wr-button>
        <wr-picker v-model="value4" :data="data4" ref="picker4" @confirm="confirm"></wr-picker>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
  data() {
    return {
      value1: [1],
      data1: [
        [
          { label: "一年级", value: 1 },
          { label: "二年级", value: 2 },
          { label: "三年级", value: 3 },
          { label: "四年级", value: 4 },
          { label: "五年级", value: 5 },
          { label: "六年级", value: 6 },
        ],
      ],
      value3: [1, 1],
      data3: [
        [
          { label: "一年级", value: 1 },
          { label: "二年级", value: 2 },
          { label: "三年级", value: 3 },
          { label: "四年级", value: 4 },
          { label: "五年级", value: 5 },
          { label: "六年级", value: 6 },
        ],
        [
          { label: "上册", value: 1 },
          { label: "下册", value: 2 },
        ],
      ],
      value4: [1, 1],
      data4: [
        {
          label: "北京市",
          value: 110000,
          children: [
            {
              label: "北京市",
              value: 110100,
              children: [
                { label: "东城区", value: 110101 },
                { label: "西城区", value: 110102 },
                { label: "朝阳区", value: 110105 },
              ],
            },
          ],
        },
        {
          label: "湖南省",
          value: 430100,
          children: [
            {
              label: "长沙市",
              value: 430100,
              children: [
                { label: "岳麓区", value: 430104 },
                { label: "长沙县", value: 430121 },
                { label: "宁乡市", value: 430124 },
              ],
            },
            {
              label: "株洲市",
              value: 430200,
              children: [
                { label: "荷塘区", value: 430202 },
                { label: "芦淞区", value: 430203 },
                { label: "石峰区", value: 430204 },
              ],
            },
            {
              label: "湘潭市",
              value: 430300,
              children: [
                { label: "雨湖区", value: 430302 },
                { label: "岳塘区", value: 430304 },
                { label: "湘潭县", value: 430321 },
              ],
            },
          ],
        },
      ],
    };
  },

  methods: {
    open1() {
      this.$refs.picker1.open();
    },
    open2() {
      this.$refs.picker2.open();
    },
    open3() {
      this.$refs.picker3.open();
    },
    open4() {
      this.$refs.picker4.open();
    },
    confirm(e) {
      console.log(e, "e");
    },
  },
};
</script>
<style lang="scss" scoped>
.interim {
  min-height: 100%;
}
.picker-demo {
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
