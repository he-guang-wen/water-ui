# Radio 单选框 


### 基础用法
```js
<template>
    <div>
        <wr-radio-group v-model="value">
            <wr-radio name="1">男</wr-radio>
            <wr-radio name="2">女</wr-radio>
        </wr-radio-group>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: "1",
        };
     }
}
</script>
```

### 垂直排列
```js
<template>
    <div>
        <wr-radio-group v-model="value" vertical>
            <wr-radio name="1">男</wr-radio>
            <wr-radio name="2"  style="margin-top:10px">女</wr-radio>
        </wr-radio-group>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: "1",
        };
     }
}
</script>
```

### 平均分布
```js
<template>
    <div>
        <wr-radio-group v-model="value" vertical>
            <wr-radio name="1" space-between>男</wr-radio>
            <wr-radio name="2" space-between style="margin-top:10px">女</wr-radio>
        </wr-radio-group>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: "1",
        };
     }
}
</script>
```

### 圆形
```js
<template>
    <div>
        <wr-radio-group v-model="value" round>
            <wr-radio name="1">男</wr-radio>
            <wr-radio name="2">女</wr-radio>
        </wr-radio-group>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: "1",
        };
     }
}
</script>
```

### 禁用
```js
<template>
    <div>
        <wr-radio-group v-model="value">
            <wr-radio name="1" disabled>男</wr-radio>
            <wr-radio name="2" disabled>女</wr-radio>
        </wr-radio-group>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: "1",
        };
     }
}
</script>
```

### 自定义颜色
```js
<template>
    <div>
        <wr-radio-group v-model="value" checked-color="#07c160">
            <wr-radio name="1">男</wr-radio>
            <wr-radio name="2">女</wr-radio>
        </wr-radio-group>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: "1",
        };
     }
}
</script>
```

### 自定义大小
```js
<template>
    <div>
        <wr-radio-group v-model="value">
            <wr-radio name="1" size="30">男</wr-radio>
            <wr-radio name="2" size="30">女</wr-radio>
        </wr-radio-group>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: "1",
        };
     }
}
</script>
```


### 自定义图标插槽
```js
<template>
    <div>
        <wr-radio-group v-model="value8" checked-color="#07c160">
          <wr-radio name="1" size="25">
            <template>男</template>
            <template #icon="{props}">
              <wr-icon name="confirm" :size="30" :color="props.checked? '#00a1ff':'#000'"></wr-icon>
            </template>
          </wr-radio>
          <wr-radio name="2" size="25">
            <template>女</template>
            <template #icon="{props}">
              <wr-icon name="confirm" :size="30" :color="props.checked? '#00a1ff':'#000'"></wr-icon>
            </template>
          </wr-radio>
        </wr-radio-group>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: "1",
        };
     }
}
</script>
```


##  RadioGroup Props

<md-table-warp>
| 参数          | 说明               | 类型    | 可选值 | 默认值  |
|:--------------|:-------------------|:--------|:-------|:--------|
| v-model       | 绑定值             | String  | —      | —       |
| vertical      | 排列方向是否为垂直 | Boolean | true   | false   |
| round         | 是否圆形           | Boolean | true   | false   |
| checked-color | 选中状态下的颜色   | String  | —      | #00a1ff |
| disabled      | 是否禁用           | Boolean | true   | false   |
                                
</md-table-warp>


##  Radio Props

<md-table-warp>
| 参数          | 说明               | 类型    | 可选值 | 默认值  |
|:--------------|:-------------------|:--------|:-------|:--------|
| name      | 标识符             | String  | —      | —       |
| size      | 大小 | Number | —   | 22   |
| round         | 是否圆形           | Boolean | true   | false   |
| space-between | 平均分布   | Boolean  | true      | false |
| disabled      | 是否禁用           | Boolean | true   | false   |
                                
</md-table-warp>


## Radio Events

<md-table-warp> 
| 事件名 | 说明 | 回调参数     |
|:-------|:-----|:-------------|
| click  | 点击 | event: Event |
</md-table-warp>