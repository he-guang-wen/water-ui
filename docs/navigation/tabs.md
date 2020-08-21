# Tabs 标签页

### 基础用法
```js
<template>
    <div>
        <wr-tabs>
          <wr-tab-pane name="home" title="首页">首页</wr-tab-pane>
          <wr-tab-pane name="digitalProducts" title="数码">数码</wr-tab-pane>
          <wr-tab-pane name="electricAppliance" title="电器">电器</wr-tab-pane>
          <wr-tab-pane name="clothing" title="服装">服装</wr-tab-pane>
          <wr-tab-pane name="healthProducts" title="保健">保健</wr-tab-pane>
        </wr-tabs>
    <div>
</template>
```

### 线条高度
```js
<template>
    <div>
        <wr-tabs line-height="3">
          <wr-tab-pane name="home" title="首页">首页</wr-tab-pane>
          <wr-tab-pane name="digitalProducts" title="数码">数码</wr-tab-pane>
          <wr-tab-pane name="electricAppliance" title="电器">电器</wr-tab-pane>
          <wr-tab-pane name="clothing" title="服装">服装</wr-tab-pane>
          <wr-tab-pane name="healthProducts" title="保健">保健</wr-tab-pane>
        </wr-tabs>
    <div>
</template>
```

### 柱形
```js
<template>
    <div>
        <wr-tabs type="column" title-active-color="#fff">
          <wr-tab-pane name="home" title="首页">首页</wr-tab-pane>
          <wr-tab-pane name="digitalProducts" title="数码">数码</wr-tab-pane>
          <wr-tab-pane name="electricAppliance" title="电器">电器</wr-tab-pane>
          <wr-tab-pane name="clothing" title="服装">服装</wr-tab-pane>
          <wr-tab-pane name="healthProducts" title="保健">保健</wr-tab-pane>
        </wr-tabs>

        <wr-tabs type="column" title-active-color="#f56c6c" color="#fef0f0">
          <wr-tab-pane name="home" title="首页">首页</wr-tab-pane>
          <wr-tab-pane name="digitalProducts" title="数码">数码</wr-tab-pane>
          <wr-tab-pane name="electricAppliance" title="电器">电器</wr-tab-pane>
          <wr-tab-pane name="clothing" title="服装">服装</wr-tab-pane>
          <wr-tab-pane name="healthProducts" title="保健">保健</wr-tab-pane>
        </wr-tabs>
    <div>
</template>
```

### 横向滚动
```js
<template>
    <div>
        <wr-tabs scrollX>
          <wr-tab-pane name="home" title="首页">首页</wr-tab-pane>
          <wr-tab-pane name="digitalProducts" title="数码">数码</wr-tab-pane>
          <wr-tab-pane name="electricAppliance" title="电器">电器</wr-tab-pane>
          <wr-tab-pane name="clothing" title="服装">服装</wr-tab-pane>
          <wr-tab-pane name="healthProducts" title="保健">保健</wr-tab-pane>
          <wr-tab-pane name="ornament" title="饰品">饰品</wr-tab-pane>
          <wr-tab-pane name="fresh" title="生鲜">生鲜</wr-tab-pane>
        </wr-tabs>
        <wr-tabs type="column" title-active-color="#f56c6c" color="#fef0f0" scrollX>
          <wr-tab-pane name="home" title="首页">首页</wr-tab-pane>
          <wr-tab-pane name="digitalProducts" title="数码">数码</wr-tab-pane>
          <wr-tab-pane name="electricAppliance" title="电器">电器</wr-tab-pane>
          <wr-tab-pane name="clothing" title="服装">服装</wr-tab-pane>
          <wr-tab-pane name="healthProducts" title="保健">保健</wr-tab-pane>
          <wr-tab-pane name="ornament" title="饰品">饰品</wr-tab-pane>
          <wr-tab-pane name="fresh" title="生鲜">生鲜</wr-tab-pane>
        </wr-tabs>
    <div>
</template>
```

## Tabs Props

<md-table-warp>
| 参数                 | 说明                           | 类型          | 可选值 | 默认值 |
|:---------------------|:-------------------------------|:--------------|:-------|:-------|
| v-model              | 当前值                         | String/Number | —      | —      |
| type                 | 类型                           | String        | column | line   |
| color                | 颜色                           | String        | —      | f55555 |
| line-height          | 滑动线的高度                   | Number        | —      | 2      |
| line-width           | 滑动线的宽度                   | Number        | —      | 30     |
| scroll-x             | 容器宽度不够时是否开启横向滚动 | Boolean       | true   | false  |
| show-tab-amount      | scrollX下一行显示的tab数量     | Number        | —      | 5      |
| title-active-color   | 标题选中字体颜色               | String        | true   | #000   |
| title-inactive-color | 标题未选中字体颜色             | String        | true   | #000   |
</md-table-warp>

## TabPane Props

<md-table-warp>
| 参数  | 说明   | 类型   | 可选值 | 默认值 |
|:------|:-------|:-------|:-------|:-------|
| title | 标题   | String | —      | —      |
| name  | 标识符 | String | —      | —      |

</md-table-warp>

##  Events

<md-table-warp> 
| 事件名 | 说明 | 回调参数     |
|:-------|:-----|:-------------|
| click  | 点击 | event: Event |
</md-table-warp>