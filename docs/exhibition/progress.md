# progress 进度条

### 基础用法
```js
<template>
    <div>
        <wr-progress v-model="value"></wr-progress>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: 66,
        };
     }
}
</script>
```

### 自定义轨道颜色
```js
<template>
    <div>
        <wr-progress v-model="value" track-color="#b0d3f7"></wr-progress>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: 66,
        };
     }
}
</script>
```


### 自定义进度颜色
```js
<template>
    <div>
        <wr-progress v-model="value" color="red"></wr-progress>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: 66,
        };
     }
}
</script>
```

##  Props

<md-table-warp>
| 参数            | 说明                       | 类型    | 可选值 | 默认值  |
|:----------------|:---------------------------|:--------|:-------|:--------|
| value           | 当前值                     | Number  | —      | 0       |
| target          | 最终值                     | Number  | 100    |         |
| size            | 大小                       | Number  | —      | 100     |
| color           | 进度颜色                   | String  | —      | #1989fa |
| track-color     | 圆形进度轨道颜色           | String  | true   | #ffffff |
| stroke-width    | 圆形进度条宽度             | String  | —      | 5       |
| decimal-place   | 保留几位小数               | Number  | —      | 2       |
| bar-built       | 条形进度条内嵌的百分比     | Boolean | true   | false   |
| bar-height      | 条形进度的高度             | Number  | —      | 15      |
| wave            | 条形进度条是否显示波浪特效 | Boolean | false  | true    |
| show-right-text | 显示右侧进度信息           | Boolean | true   | false   |
</md-table-warp>