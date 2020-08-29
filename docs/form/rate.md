# Rate 评分


### 基础用法
```js
<template>
  <div>
      <wr-rate v-model="value"></wr-rate>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:1,
    };
  }
};
</script>
```

### 自定义颜色
```js
<template>
  <div>
      <wr-rate v-model="value" active-color="#1989fa" inactive-color="#ccc"></wr-rate>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:2,
    };
  }
};
</script>
```

### 自定义数量
```js
<template>
  <div>
      <wr-rate v-model="value" :count="7"></wr-rate>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:3,
    };
  }
};
</script>
```

### 自定义图标
```js
<template>
  <div>
      <wr-rate v-model="value" active-icon="heartShape-fill" inactive-icon="heartShape"></wr-rate>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:4,
    };
  }
};
</script>
```

### 最少选中3个
```js
<template>
  <div>
      <wr-rate v-model="value5" :min-count="3"></wr-rate>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:3,
    };
  }
};
</script>
```

##  Props

<md-table-warp>
| 参数           | 说明           | 类型    | 可选值 | 默认值    |
|:---------------|:---------------|:--------|:-------|:----------|
| v-model        | 绑定的值       | Number  | —      | —         |
| count          | 图标数量       | Number  | —      | 5         |
| min-count      | 最少选中个数   | Number  | —      | —         |
| size           | 大小           | Number  | —      | 20        |
| gutter         | 图标间隔       | Number  | —      | 5         |
| active-icon    | 选中图标名称   | String  | —      | star-fill |
| inactive-icon  | 未选中图标名称 | String  | —      | star      |
| active-color   | 选中图标颜色   | String  | —      | #f55555l  |
| inactive-color | 未选中图标颜色 | String  | —      | #909999   |
| disabled       | 禁用           | Boolean | true   | false     |
</md-table-warp>

##  Events

<md-table-warp> 
| 事件名 | 说明         | 回调参数       |
|:-------|:-------------|:---------------|
| change | 值改变       | Number: number |
</md-table-warp>