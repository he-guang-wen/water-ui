<template>
  <div class="swipe-cell-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

    <div class="card">
      <p class="title">基础用法</p>
      <div class="swipe-cell-demo__list">
        <wr-swipe-cell>
          <template>
            <div class="list">
              <img src="https://sj.xiaopi.com/uploadfile/2016/0127/20160127044756785.jpg" />
              <span>妲己</span>
            </div>
          </template>
          <template #right>
            <div class="button-warpper">
              <wr-button type="success">收藏</wr-button>
              <wr-button type="danger">删除</wr-button>
            </div>
          </template>
        </wr-swipe-cell>
      </div>
    </div>

    <div class="card">
      <p class="title">两侧显示</p>
      <div class="swipe-cell-demo__list">
        <wr-swipe-cell @open="swipeCellOpen" @close="swipeCellClose" ref="swipeCell">
          <template #left>
            <div class="button-warpper">
              <wr-button type="primary" @click="handleClick('不在关注')">不在关注</wr-button>
            </div>
          </template>
          <template>
            <div class="list">
              <img src="https://sj.xiaopi.com/uploadfile/2016/0127/20160127044756785.jpg" />
              <span>妲己</span>
            </div>
          </template>
          <template #right>
            <div class="button-warpper">
              <wr-button type="success" @click="handleClick('收藏')">收藏</wr-button>
              <wr-button type="danger" @click="handleClick('删除')">删除</wr-button>
            </div>
          </template>
        </wr-swipe-cell>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
  data() {
    return {};
  },
  methods: {
    swipeCellOpen(e) {
      console.log(e, "打开");
    },
    swipeCellClose(e) {
      console.log(e, "关闭");
    },
    handleClick(val) {
      this.$wrDialog({
        title: "提示",
        content: "确认" + val + "妲己吗？"
      })
        .then(() => {
          this.$refs.swipeCell.close();
          this.$wrToast("操作成功");
        })
        .catch(() => {
          this.$wrToast("已取消操作");
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.interim {
  height: 100%;
}
.swipe-cell-demo {
  background: #f2f6fc;
  min-height: 100%;
  touch-action: none;
}
.swipe-cell-demo__list {
  background: #fff;
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

.list {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
}
.button-warpper {
  height: 100%;
  .wr-button {
    height: 100%;
    border-radius: 0;
  }
}
</style>
