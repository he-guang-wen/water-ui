# Checkbox 复选框

### 基础用法

```js
<template>
    <div>
        <wr-checkbox v-model="value">吃饭</wr-checkbox>
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

### 圆形

```js
<template>
    <div>
        <wr-checkbox v-model="value" round>吃饭</wr-checkbox>
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

### 禁用

```js
<template>
    <div>
        <wr-checkbox v-model="value" disabled>吃饭</wr-checkbox>
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
        <wr-checkbox v-model="value" checked-color="#07c160">吃饭</wr-checkbox>
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

### 自定义大小

```js
<template>
    <div>
        <wr-checkbox v-model="value" :size="30">吃饭</wr-checkbox>
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

### 自定义图标插槽

```js
<template>
    <div>
       <wr-checkbox v-model="value6">
          <template>吃饭</template>
          <template #icon="{props}">
            <wr-icon 
            name="confirm" 
            :size="30" 
            :color="props.checked? '#00a1ff':'#000'">
            </wr-icon>
          </template>
        </wr-checkbox>
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

### 复选框组

```js
<template>
    <div>
       <wr-checkbox-group v-model="value">
          <wr-checkbox name="eat">吃饭</wr-checkbox>
          <wr-checkbox name="sleep">睡觉</wr-checkbox>
          <wr-checkbox name="doug">打豆豆</wr-checkbox>
        </wr-checkbox-group>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: ["eat"],
        };
     }
}
</script>
```

### 复选框组垂直排列

```js
<template>
    <div>
       <wr-checkbox-group v-model="value" vertical>
          <wr-checkbox name="eat">吃饭</wr-checkbox>
          <wr-checkbox name="sleep">睡觉</wr-checkbox>
          <wr-checkbox name="doug">打豆豆</wr-checkbox>
        </wr-checkbox-group>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: ["eat"],
        };
     }
}
</script>
```

### 复选框组平均分布

```js
<template>
    <div>
       <wr-checkbox-group v-model="value" vertical>
          <wr-checkbox name="eat" space-between>吃饭</wr-checkbox>
          <wr-checkbox name="sleep" space-between>睡觉</wr-checkbox>
          <wr-checkbox name="doug" space-between>打豆豆</wr-checkbox>
        </wr-checkbox-group>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: ["eat"],
        };
     }
}
</script>
```

### 禁用复选框组

```js
<template>
    <div>
       <wr-checkbox-group v-model="value" disabled>
          <wr-checkbox name="eat">吃饭</wr-checkbox>
          <wr-checkbox name="sleep">睡觉</wr-checkbox>
          <wr-checkbox name="doug">打豆豆</wr-checkbox>
        </wr-checkbox-group>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: ["eat"],
        };
     }
}
</script>
```

### 限制最大选中数量

```js
<template>
    <div>
       <wr-checkbox-group v-model="value" :max="2">
          <wr-checkbox name="eat">吃饭</wr-checkbox>
          <wr-checkbox name="sleep">睡觉</wr-checkbox>
          <wr-checkbox name="doug">打豆豆</wr-checkbox>
        </wr-checkbox-group>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: ["eat"],
        };
     }
}
</script>
```

### 全选、全不选与反选

```js
<template>
    <div>
        <wr-checkbox-group v-model="value" ref="checkboxGroup">
          <wr-checkbox name="eat">吃饭</wr-checkbox>
          <wr-checkbox name="sleep">睡觉</wr-checkbox>
          <wr-checkbox name="doug">打豆豆</wr-checkbox>
        </wr-checkbox-group>

        <wr-button @click="checkAll" type="primary" size="small">全选</wr-button>
        <wr-button @click="unCheckAll" type="primary" size="small" style="margin-left:10px">全不选</wr-button>
        <wr-button @click="reverseAll" type="primary" size="small" style="margin-left:10px">反选</wr-button>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: ["eat"],
        };
     },
     methods: {
        checkAll() {
            this.$refs.checkboxGroup.checkAll(true);
        },
        unCheckAll() {
            this.$refs.checkboxGroup.checkAll(false);
        },
        reverseAll() {
            this.$refs.checkboxGroup.reverseAll();
        }
  }
}
</script>
```

##  CheckboxGroup Props

<md-table-warp>
| 参数     | 说明               | 类型    | 可选值 | 默认值   |
|:---------|:-------------------|:--------|:-------|:---------|
| v-model  | 选中列表           | Array   | —      | []       |
| max      | 选中最大个数       | Number  | —      | Infinity |
| vertical | 排列方向是否为垂直 | Boolean | true   | false    |
| disabled | 是否禁用           | Boolean | true   | false    |
</md-table-warp>

##  Checkbox Props

<md-table-warp>
| 参数          | 说明             | 类型    | 可选值 | 默认值  |
|:--------------|:-----------------|:--------|:-------|:--------|
| v-model       | 是否选中         | Boolean | true   | false   |
| name          | 标识符           | String  | —      | —       |
| size          | 大小             | Number  | —      | 22      |
| round         | 是否圆形         | Boolean | true   | false   |
| disabled      | 是否禁用         | Boolean | true   | false   |
| checked-color | 选中状态下的颜色 | String  | —      | #00a1ff |
| space-between | 是否平均分布     | Boolean | true   | false   |
</md-table-warp>

## CheckboxGroup Events

<md-table-warp> 
| 事件名 | 说明 | 回调参数     |
|:-------|:-----|:-------------|
| change  | 选中列表改变 | event: Array |
</md-table-warp>

## Checkbox Events

<md-table-warp> 
| 事件名 | 说明 | 回调参数     |
|:-------|:-----|:-------------|
| click  | 点击 | event: Event |
| change  | 选中状态改变 | event: Boolean |
</md-table-warp>