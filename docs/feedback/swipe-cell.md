# SwipeCell 滑动单元格

### 基础用法
```js
<template>
    <div>
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
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: false,
        };
     }
}
</script>
```

### 两侧显示
```js
<template>
    <div>
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
    <div>
</template>
<script>
export default {
    methods() {
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
}
</script>
```

<md-table-warp>
| 参数     | 说明     | 类型    | 可选值 | 默认值 |
|:---------|:---------|:--------|:-------|:-------|
| name     | 标识符   | String  | —      | —      |
| disabled | 禁止滑动 | Boolean | true   | false  |
                                
</md-table-warp>

##  Events

<md-table-warp> 
| 事件名 | 说明 | 回调参数               |
|:-------|:-----|:-----------------------|
| open   | 打开 | object:{name,position} |
| close  | 关闭 | object:{name,position} |
</md-table-warp>