<template>
  <div class="dialog-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

    <div class="card">
      <p class="title">基础用法</p>
      <div class="dialog-demo__list">
        <wr-button type="primary" @click="showDialog1">基础用法</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">显示关闭图标</p>
      <div class="dialog-demo__list">
        <wr-button type="primary" @click="showDialog2">显示关闭图标</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">提示框</p>
      <div class="dialog-demo__list">
        <wr-button type="primary" @click="showDialog3">提示</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">不显示标题</p>
      <div class="dialog-demo__list">
        <wr-button type="primary" @click="showDialog4">基础用法</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">自定义内容</p>
      <div class="dialog-demo__list">
        <wr-button type="primary" @click="showDialog5">自定义内容</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">完全自定义</p>
      <div class="dialog-demo__list">
        <wr-button type="primary" @click="showDialog6">完全自定义</wr-button>
      </div>
    </div>

    <div class="card">
      <p class="title">透明遮罩</p>
      <div class="dialog-demo__list">
        <wr-button type="primary" @click="showDialog7">透明遮罩</wr-button>
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
    showDialog1() {
      this.$wrDialog({
        title: "标题",
        content: "666666"
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    showDialog2() {
      this.$wrDialog({
        title: "标题",
        content: "666666",
        showIconClose: true
      });
    },
    showDialog3() {
      this.$wrDialog.alert({
        title: "标题",
        content: "666666"
      });
    },
    showDialog4() {
      this.$wrDialog({
        content: "666666"
      });
    },
    showDialog5() {
      this.$wrDialog({
        content: "666666",
        render: h => {
          return h("img", {
            style: {
              width: "100%",
              height: "200px",
              display: "block"
            },
            attrs: {
              src:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593105377052&di=065751b1d1ff5b7dcafeada9c24bd2e8&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2834278303%2C2950361780%26fm%3D214%26gp%3D0.jpg"
            }
          });
        }
      });
    },
    showDialog6() {
      this.$wrDialog({
        hideFooter: true,
        render: h => {
          return h("img", {
            style: {
              width: "100%",
              height: "200px",
              display: "block"
            },
            attrs: {
              src:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593105377052&di=065751b1d1ff5b7dcafeada9c24bd2e8&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2834278303%2C2950361780%26fm%3D214%26gp%3D0.jpg"
            }
          });
        }
      });
    },
    showDialog7() {
      this.$wrDialog({
        title: "标题",
        content: "666666",
        hideOverlay: true
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.interim {
  height: 100%;
}
.dialog-demo {
  background: #f2f6fc;
  min-height: 100%;
}
.dialog-demo__list {
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
