# NoticeBar 通知栏

### 基础用法
```js
<template>
    <div>
        <wr-notice-bar text="基础用法"></wr-notice-bar>
    <div>
</template>
<script>
```

### 图标
```js
<template>
    <div>
        <wr-notice-bar text="基础用法" left-icon="sound-filling" right-icon="arrow-right"></wr-notice-bar>
    <div>
</template>
<script>
```


### 文字滚动速率
```js
<template>
    <div>
        <wr-notice-bar text="基础用法" :speed="10"></wr-notice-bar>
    <div>
</template>
<script>
```

### 自定义背景和文字颜色
```js
<template>
    <div>
        <wr-notice-bar text="基础用法" background="#e8a59e" text-color="red"></wr-notice-bar>
    <div>
</template>
<script>
```

##  Props

<md-table-warp>
| 参数       | 说明     | 类型    | 可选值 | 默认值             |
|:-----------|:---------|:--------|:-------|:-------------------|
| text       | 文本     | String  | —      | —                  |
| speed      | 滚动速率 | Number  | —      | 5                  |
| scrollable | 是否滚动 | Boolean | —      | true               |
| background | 背景色   | String  | —      | rgb(236, 249, 255) |
| text-color | 文本颜色 | String  | —      | rgb(25, 137, 250)  |
| left-icon  | 左侧图标 | String  | —      | —                  |
| right-icon | 右侧图标 | String  | —      | —                  |

</md-table-warp>

##  Events

<md-table-warp> 
| 事件名       | 说明     | 回调参数     |
|:-------------|:---------|:-------------|
| left-click   | 点击左侧 | event: Event |
| center-click | 点击中间 | event: Event |
| right-click  | 点击右侧 | event: Event |
</md-table-warp>