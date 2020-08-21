<template>
  <div class="overlay-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

    <div class="card">
      <p class="title">基础用法</p>
      <div class="overlay-demo__list">
        <wr-button type="primary" @click="actionSheet1">基础用法</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">隐藏取消按钮</p>
      <div class="overlay-demo__list">
        <wr-button type="primary" @click="actionSheet2">隐藏取消按钮</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">描述信息</p>
      <div class="overlay-demo__list">
        <wr-button type="primary" @click="actionSheet3">描述信息</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">禁用状态</p>
      <div class="overlay-demo__list">
        <wr-button type="primary" @click="actionSheet4">禁用状态</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">透明遮罩</p>
      <div class="overlay-demo__list">
        <wr-button type="primary" @click="actionSheet5">禁用状态</wr-button>
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
    actionSheet1() {
      this.$wrActionSheet({
        list: [{ text: "吃饭" }, { text: "睡觉" }, { text: "打豆豆" }],
        onOpen: e => {
          console.log(e);
        },
        onClose: e => {
          console.log(e);
        }
      });
    },
    actionSheet2() {
      this.$wrActionSheet({
        hideCancel: true,
        list: [{ text: "吃饭" }, { text: "睡觉" }, { text: "打豆豆" }]
      });
    },
    actionSheet3() {
      this.$wrActionSheet({
        description: "请选择个人爱好",
        list: [{ text: "吃饭" }, { text: "睡觉" }, { text: "打豆豆" }]
      });
    },
    actionSheet4() {
      this.$wrActionSheet({
        list: [
          { text: "吃饭" },
          { text: "睡觉", disabled: true },
          { text: "打豆豆", disabled: true }
        ]
      });
    },
    actionSheet5() {
      this.$wrActionSheet({
        hideOverlay: true,
        list: [{ text: "吃饭" }, { text: "睡觉" }, { text: "打豆豆" }]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.interim {
  height: 100%;
}
.overlay-demo {
  background: #f2f6fc;
  min-height: 100%;
}
.overlay-demo__list {
  background: #fff;
  padding: 20px;
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
</style>
