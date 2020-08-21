# swiper 轮播

### 基础用法
```js
<template>
    <div>
        <wr-swiper @change="swiperChange" height="250px">
          <wr-swiper-item class="swiper-item-1">
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3307360598,1434049869&fm=26&gp=0.jpg"
            />
          </wr-swiper-item>
          <wr-swiper-item class="swiper-item-2">
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3887031226,1521913471&fm=26&gp=0.jpg"
            />
          </wr-swiper-item>
          <wr-swiper-item class="swiper-item-3">
            <img
              src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2919642514,1568354213&fm=26&gp=0.jpg"
            />
          </wr-swiper-item>
          <wr-swiper-item class="swiper-item-4">
            <img
              src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2132769515,1588868998&fm=26&gp=0.jpg"
            />
          </wr-swiper-item>
        </wr-swiper>
    <div>
</template>
<script>
export default {
    data() {
        return {
        };
     }
}
</script>
```

### 垂直
```js
<template>
    <div>
        <wr-swiper @change="swiperChange" vertical  height="250px">
          <wr-swiper-item class="swiper-item-1">
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3307360598,1434049869&fm=26&gp=0.jpg"
            />
          </wr-swiper-item>
          <wr-swiper-item class="swiper-item-2">
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3887031226,1521913471&fm=26&gp=0.jpg"
            />
          </wr-swiper-item>
          <wr-swiper-item class="swiper-item-3">
            <img
              src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2919642514,1568354213&fm=26&gp=0.jpg"
            />
          </wr-swiper-item>
          <wr-swiper-item class="swiper-item-4">
            <img
              src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2132769515,1588868998&fm=26&gp=0.jpg"
            />
          </wr-swiper-item>
        </wr-swiper>
    <div>
</template>
<script>
export default {
    data() {
        return {
        };
     }
}
</script>
```

## Swiper Props

<md-table-warp>
| 参数                     | 说明                   | 类型    | 可选值              | 默认值  |
|:-------------------------|:-----------------------|:--------|:--------------------|:--------|
| height                   | 高度                   | String  | —                   | —       |
| show-indicator           | 是否显示指示器         | Boolean | false               | true    |
| vertical                 | 是否垂直               | Boolean | false               | true    |
| autoplay                 | 自动播放间隔时间(毫秒) | Number  | —                   | 2000    |
| duration                 | 动画时长(毫秒)         | Number  | —                   | 600     |
| indicator-align          | 指示器对其方式         | String  | flex-start/flex-end | 600     |
| indicator-active-color   | 指示器选中颜色         | String  | —                   | center  |
| indicator-inactive-color | 指示器未选中颜色       | String  | —                   | #c8c9cc |
| touch-loop               | 是否触摸循环滚动       | Boolean | true                | false   |
</md-table-warp>

## Swiper Events

<md-table-warp> 
| 事件名 | 说明 | 回调参数      |
|:-------|:-----|:--------------|
| change | 改变 | number: index |
</md-table-warp>

## SwiperItem Events

<md-table-warp> 
| 事件名 | 说明 | 回调参数     |
|:-------|:-----|:-------------|
| click  | 点击 | event: Event |
</md-table-warp>