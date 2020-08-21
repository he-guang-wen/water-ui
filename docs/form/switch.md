# Switch 开关

### 基础用法
```js
<template>
    <div>
        <wr-switch v-model="value"></wr-switch>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: true,
        };
     }
}
</script>
```


### 禁用状态
```js
<template>
    <div>
        <wr-switch v-model="value" disabled></wr-switch>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: true,
        };
     }
}
</script>
```

### 加载状态
```js
<template>
    <div>
        <wr-switch v-model="value" loading></wr-switch>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: true,
        };
     }
}
</script>
```

### 开关大小
```js
<template>
    <div>
        <wr-switch v-model="value" size="25"></wr-switch>
        <wr-switch v-model="value"></wr-switch>
        <wr-switch v-model="value"size="35"></wr-switch>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: true,
        };
     }
}
</script>
```

### 自定义颜色
```js
<template>
    <div>
        <wr-switch v-model="value" active-color="#07c160"></wr-switch>
        <wr-switch v-model="value" active-color="#ef9f27"></wr-switch>
        <wr-switch v-model="value" active-color="#f55555"></wr-switch>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: true,
        };
     }
}
</script>
```

##  Props

<md-table-warp>
| 参数           | 说明             | 类型    | 可选值 | 默认值  |
|:---------------|:-----------------|:--------|:-------|:--------|
| v-model        | 打开和关闭       | Boolean | true   | false   |
| size           | 大小             | Number  | —      | 30      |
| active-color   | 打开状态下的颜色 | String  | —      | #1989fa |
| inactive-color | 关闭状态下的颜色 | String  | —      | #cccccc |
| disabled       | 是否禁用         | Boolean | true   | false   |
| loading        | 是否加载中       | Boolean | true   | false   |
</md-table-warp>

##  Events

<md-table-warp> 
| 事件名 | 说明     | 回调参数        |
|:-------|:---------|:----------------|
| click  | 点击     | event: Event    |
| change | 状态改变 | boolean:Boolean |
</md-table-warp>