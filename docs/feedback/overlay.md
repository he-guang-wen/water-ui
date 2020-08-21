# Overlay 遮罩层

### 基础用法
```js
<template>
    <div>
        <wr-button type="primary" @click="value = true">基础用法</wr-button>
        <wr-overlay v-model="value1"></wr-overlay>
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


### 插槽
```js
<template>
    <div>
        <wr-button type="primary" @click="value = true">基础用法</wr-button>
        <wr-overlay v-model="value">
          <div class="warp">
            <div class="content" @click.stop=""></div>
          </div>
        </wr-overlay>
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


##  Props

<md-table-warp>
| 参数         | 说明         | 类型    | 可选值 | 默认值 |
|:-------------|:-------------|:--------|:-------|:-------|
| v-model      | 显示与隐藏   | Boolean | true   | false  |
| zIndex       | 层级         | Number  | —      | 1000   |
| class-name   | 自定义类名   | String  | —      | —      |
| custom-style | 自定义样式   | Object  | —      | —      |
| mask         | 不可点击关闭 | Boolean | true   | false  |
</md-table-warp>

##  Events

<md-table-warp> 
| 事件名 | 说明 | 回调参数     |
|:-------|:-----|:-------------|
| click  | 点击 | event: Event |
</md-table-warp>