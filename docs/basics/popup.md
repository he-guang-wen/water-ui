# Popup 弹出层

### 基础用法
```js
<template>
    <div>
        <wr-button type="primary" @click="center = true">基础用法</wr-button>
        <wr-popup v-model="center"></wr-popup>
    <div>
</template>
<script>
export default {
    data() {
        return {
            center: false,
        };
     }
}
</script>
```

### 弹出位置
```js
<template>
    <div>
        <wr-button type="primary" @click="left = true">左边弹出</wr-button>
        <wr-button type="primary" @click="right = true">右边弹出</wr-button>
        <wr-button type="primary" @click="top = true">顶部弹出</wr-button>
        <wr-button type="primary" @click="bottom = true">底部弹出</wr-button>

        <wr-popup v-model="left" position="left"></wr-popup>
        <wr-popup v-model="right" position="right"></wr-popup>
        <wr-popup v-model="top" position="top"></wr-popup>
        <wr-popup v-model="bottom" position="bottom"></wr-popup>
    <div>
</template>
<script>
export default {
    data() {
        return {
            left: false,
            right: false,
            top: false,
            bottom: false,
        };
     }
}
</script>
```

##  Props

<md-table-warp>
| 参数         | 说明                   | 类型    | 可选值                | 默认值 |
|:-------------|:-----------------------|:--------|:----------------------|:-------|
| v-model      | 打开和关闭             | Boolean | true                  | false  |
| position     | 弹出位置               | String  | left/right/top/bottom | center |
| show-overlay | 显示遮罩层             | Boolean | false                 | true   |
| mask         | 是否点击遮罩层后不关闭 | Boolean | true                  | false  |
                                
</md-table-warp>

##  Events

<md-table-warp> 
| 事件名 | 说明 | 回调参数     |
|:-------|:-----|:-------------|
| click  | 点击 | event: Event |
| open   | 打开 | —            |
| close  | 关闭 | —            |
</md-table-warp>