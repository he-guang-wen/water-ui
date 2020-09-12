<template>
  <div class="pagination-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>
    <div class="card" id="card">
      <wr-index-bar :indexList="indexList1" target="#interim" style="height:100%">
        <template v-for="item in list">
          <wr-index-anchor :index="item.anchor" style="background:#fff" :key="item.anchor"></wr-index-anchor>
          <div class="list" :key="val.name" v-for="val in item.value">
            <img :src="val.img" />
            <span>{{val.name}}</span>
          </div>
        </template>
      </wr-index-bar>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
  data() {
    return {
      indexList1: ["A", "B", "C", "D", "G"],
      list: [
        {
          anchor: "A",
          value: [
            {
              name: "阿珂",
              img:
                "https://sj.xiaopi.com/uploadfile/2017/0302/20170302103824763.jpg"
            },
            {
              name: "安琪拉",
              img:
                "https://sj.xiaopi.com/uploadfile/2016/0127/20160127044655227.jpg"
            }
          ]
        },
        {
          anchor: "B",
          value: [
            {
              name: "百里守约",
              img:
                "https://sj.xiaopi.com/uploadfile/2018/0604/20180604023454703.jpg"
            },

            {
              name: "百里玄策",
              img:
                "https://sj.xiaopi.com/uploadfile/2017/1224/20171224111354834.jpg"
            },
            {
              name: "扁鹊",
              img:
                "https://sj.xiaopi.com/uploadfile/2016/0127/20160127044828925.jpg"
            },
            {
              name: "不知好歹",
              img:
                "https://sj.xiaopi.com/uploadfile/2017/0302/20170302103627935.jpg"
            }
          ]
        },
        {
          anchor: "C",
          value: [
            {
              name: "蔡文姬",
              img:
                "https://sj.xiaopi.com/uploadfile/2017/0302/20170302103050599.jpg"
            },
            {
              name: "曹操",
              img:
                "https://sj.xiaopi.com/uploadfile/2017/0303/20170303105215691.jpg"
            },
            {
              name: "嫦娥",
              img:
                "https://sj.xiaopi.com/uploadfile/2018/1227/20181227083904172.jpg"
            },
            {
              name: "成吉思汗",
              img:
                "https://sj.xiaopi.com/uploadfile/2017/0302/20170302102134976.jpg"
            },
            {
              name: "程咬金",
              img:
                "https://sj.xiaopi.com/uploadfile/2017/0303/20170303103808402.jpg"
            }
          ]
        },
        {
          anchor: "D",
          value: [
            {
              name: "达摩",
              img:
                "https://sj.xiaopi.com/uploadfile/2017/0303/20170303105005517.jpg"
            },
            {
              name: "妲己",
              img:
                "https://sj.xiaopi.com/uploadfile/2016/0127/20160127044756785.jpg"
            },
            {
              name: "大乔",
              img:
                "https://sj.xiaopi.com/uploadfile/2017/0328/20170328030724922.jpg"
            },
            {
              name: "狄仁杰",
              img:
                "https://sj.xiaopi.com/uploadfile/2016/0127/20160127050557825.jpg"
            },
            {
              name: "典韦",
              img:
                "https://sj.xiaopi.com/uploadfile/2017/0303/20170303104713749.jpg"
            },
            {
              name: "貂蝉",
              img:
                "https://sj.xiaopi.com/uploadfile/2016/0127/20160127044501757.jpg"
            },
            {
              name: "东皇太一",
              img:
                "https://sj.xiaopi.com/uploadfile/2017/0328/20170328030906243.jpg"
            },
            {
              name: "盾山",
              img:
                "https://sj.xiaopi.com/uploadfile/2018/0828/20180828090426287.jpg"
            }
          ]
        },
        {
          anchor: "G",
          value: [
            {
              name: "高渐离",
              img:
                "https://sj.xiaopi.com/uploadfile/2016/0127/20160127045217235.jpg"
            },
            {
              name: "公孙离",
              img:
                "https://sj.xiaopi.com/uploadfile/2018/0115/20180115110929952.jpg"
            },
            {
              name: "宫本武藏",
              img:
                "https://sj.xiaopi.com/uploadfile/2017/0303/20170303104636985.jpg"
            },
            {
              name: "关羽",
              img:
                "https://sj.xiaopi.com/uploadfile/2017/0303/20170303104430496.jpg"
            },
            {
              name: "鬼谷子",
              img:
                "https://sj.xiaopi.com/uploadfile/2017/0510/20170510041233830.jpg"
            }
          ]
        }
      ]
    };
  },
  methods: {
    paginationChange(e) {
      this.$wrToast(e);
    }
  }
};
</script>
<style lang="scss" scoped>
.interim {
  height: 100%;
  overflow-y: auto;
  overscroll-behavior-y: none;
}
.pagination-demo {
  background: #f2f6fc;
  height: 100%;
  position: fixed;
  width: 100%;
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
  // height: 500px;
  // overflow: auto;
  border-radius: none;
  height: calc(100% - 45px);
  margin-top:0
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
.list {
  height: 60px;
  display: flex;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.list img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
