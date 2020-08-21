# InputNumber 步进器

### 基础用法
```js
<template>
    <div>
        <wr-input-number v-model="value"></wr-input-number>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: 1,
        };
     }
}
</script>
```

### 自定义步长
```js
<template>
    <div>
        <wr-input-number v-model="value" :step="3"></wr-input-number>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: 1,
        };
     }
}
</script>
```

### 限制输入范围
```js
<template>
    <div>
        <wr-input-number v-model="value" :min="1" :max="10"></wr-input-number>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: 1,
        };
     }
}
</script>
```

### 自定义小数位
```js
<template>
    <div>
        <wr-input-number 
            v-model="value" 
            :decimal="1" 
            :step="1.25" 
            :input-width="40">
        </wr-input-number>

        <wr-input-number
            v-model="value2"
            :decimal="2"
            :step="1.25"
            :input-width="50"
            style="margin-left:20px">
        </wr-input-number>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: 1,
            value2:1
        };
     }
}
</script>
```

### 禁用步进器
```js
<template>
    <div>
        <wr-input-number v-model="value" disabled></wr-input-number>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: 1,
        };
     }
}
</script>
```

### 禁用输入框
```js
<template>
    <div>
        <wr-input-number v-model="value" disable-input></wr-input-number>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: 1,
        };
     }
}
</script>
```

##  Props

<md-table-warp>
| 参数           | 说明             | 类型          | 可选值 | 默认值    |
|:---------------|:-----------------|:--------------|:-------|:----------|
| v-model        | 绑定值           | String/Number | —      | —         |
| max            | 最大值           | Number        | —      | Infinity  |
| min            | 最小值           | Number        | —      | -Infinity |
| step           | 步长             | Number        | —      | 1         |
| decimal        | 小数位           | Number        | —      | 0         |
| background     | 背景颜色         | String        | —      | #f2f3f5   |
| text-color     | 右侧标题对齐方式 | String        | —      | #000000   |
| height         | 整体高度         | Number        | —      | 20        |
| button-width   | 加减按钮的宽度   | Number        | —      | 20        |
| input-width    | 输入框的宽度     | Number        | —      | 30        |
| disabled       | 禁止点击         | Boolean       | true   | false     |
| disabled-input | 禁止点击输入框   | Boolean       | true   | false     |
</md-table-warp>

## Events

<md-table-warp> 
| 事件名         | 说明           | 回调参数       |
|:---------------|:---------------|:---------------|
| click          | 点击           | event: Event   |
| click-decrease | 点击减少按钮   | event: Event   |
| click-input    | 点击输入框     | event: Event   |
| click-increase | 点击增加按钮   | event: Event   |
| change         | 输入框内容改变 | string: String |
</md-table-warp>

## Slots

<md-table-warp> 
| 名称     | 说明         |
|:---------|:-------------|
| decrease | 减少按钮插槽 |
| increase | 增加按钮插槽 |
</md-table-warp>