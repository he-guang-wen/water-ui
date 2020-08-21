# TabBar 标签栏

### 基础用法
```js
<template>
    <div>
        <wr-tab-bar v-model="tabBarValue"> 
          <wr-tab-bar-item
            name="home"
            text="首页"
            img-path="http://img1.imgtn.bdimg.com/it/u=3696901963,3916247602&fm=26&gp=0.jpg"
            selected-img-path="../../assets/home_on.png"
          ></wr-tab-bar-item>
          <wr-tab-bar-item
            name="news"
            text="消息"
            img-path="/assets/news_un.png"
            selected-img-path="../../assets/news_on.png"
          ></wr-tab-bar-item>
          <wr-tab-bar-item
            name="my"
            text="我的"
            img-path="../../assets/my_un.png"
            selected-img-path="../../assets/my_on.png"
          ></wr-tab-bar-item>
        </wr-tab-bar>
    <div>
</template>
```

## TabBar Props

<md-table-warp>
| 参数                   | 说明                | 类型    | 可选值 | 默认值 |
|:-----------------------|:--------------------|:--------|:-------|:-------|
| active-color           | 选中标签颜色        | String  | —      | red    |
| nactive-color          | 未选中标签颜色      | String  | —      | #000   |
| safe-area-inset-bottom | 是否开启ios底部适配 | Boolean | false  | true   |
| fixed                  | 是否固定在底部      | Boolean | true   | true   |
| border                 | 是否显示边框        | Boolean | true   | true   |
                                
</md-table-warp>

## TabBarItem Props

<md-table-warp>
| 参数              | 说明             | 类型    | 可选值 | 默认值 |
|:------------------|:-----------------|:--------|:-------|:-------|
| name              | 标识符           | String  | —      | —      |
| text              | 文本             | String  | —      | —      |
| img-path          | 未选中的图片地址 | String  | —      | —      |
| selected-img-path | 选中的图片地址   | String  | —      | —      |
| dot               | 是否显示标徽     | Boolean | true   | false  |
| info              | 标徽内容         | String  | —      | —      |
</md-table-warp>

## TabBar Events

<md-table-warp> 
| 事件名 | 说明 | 回调参数             |
|:-------|:-----|:---------------------|
| change | 改变 | object: {index,name} |
</md-table-warp>