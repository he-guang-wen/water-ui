# Circle 圆形进度条

### 基础用法

```js
<template>
    <div>
        <wr-circle v-model="value"></wr-circle>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: 10,
        };
     }
}
</script>
```

### 自定义宽度

```js
<template>
    <div>
        <wr-circle v-model="value" :stroke-width="10"></wr-circle>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: 10,
        };
     }
}
</script>
```

### 轨道颜色

```js
<template>
    <div>
        <wr-circle v-model="value" track-color="#b1d3f4"></wr-circle>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: 10,
        };
     }
}
</script>
```

### 进度颜色

```js
<template>
    <div>
        <wr-circle v-model="value" color="red"></wr-circle>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: 10,
        };
     }
}
</script>
```

### 自定义文字内容

```js
<template>
    <div>
        <wr-circle v-model="value">
            <div>文字</div>
        </wr-circle>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: 10,
        };
     }
}
</script>
```

##  Props

<md-table-warp>
| 参数          | 说明             | 类型   | 可选值 | 默认值  |
|:--------------|:-----------------|:-------|:-------|:--------|
| value         | 当前值           | Number | —      | 0       |
| target        | 最终值           | Number | 100    |         |
| size          | 大小             | Number | —      | 100     |
| color         | 进度颜色         | String | —      | #1989fa |
| track-color   | 圆形进度轨道颜色 | String | true   | #ffffff |
| stroke-width  | 圆形进度条宽度   | String | —      | 5       |
| decimal-place | 保留几位小数     | Number | —      | 2       |
                                
</md-table-warp>