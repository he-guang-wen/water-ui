# BackTop 返回顶部


### 基础用法
```js
<template>
    <div>
        <wr-back-top></wr-back-top>
        <wr-back-top :bottom="50" round></wr-back-top>
        <wr-back-top :bottom="80" :right="5">
            <img class="back-top-img" src="../../assets/back-top.png" />
        </wr-back-top>
    <div>
</template>
```

##  Props

<md-table-warp>
| 参数   | 说明               | 类型    | 可选值 | 默认值 |
|:-------|:-------------------|:--------|:-------|:-------|
| target | 触发滚动的对象     | String  | —      | —      |
| round  | 是否圆形           | Boolean | true   | false  |
| top    | 距离顶部距离后显示 | Number  | —      | 200    |
| right  | 右边距离           | Number  | —      | 10     |
| bottom | 底部距离           | Number  | —      | 10     |
</md-table-warp>

##  Events

<md-table-warp> 
| 事件名 | 说明 | 回调参数     |
|:-------|:-----|:-------------|
| click  | 点击 | event: Event |
</md-table-warp>