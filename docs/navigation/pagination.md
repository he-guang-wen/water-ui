# pagination 分页

### 基础用法
```js
<template>
    <div>
        <wr-pagination :page-count="70" :page-per-size="10" @change="paginationChange"></wr-pagination>
    <div>
</template>
<script>
export default {
    methods: {
        paginationChange(e) {
            this.$wrToast(e);
        }
  }
}
</script>
```

### 指定显示页码数量
```js
<template>
    <div>
        <wr-pagination
          :page-count="70"
          :page-per-size="10"
          :show-page-size="7"
          @change="paginationChange"
        ></wr-pagination>
    <div>
</template>
<script>
export default {
    methods: {
        paginationChange(e) {
            this.$wrToast(e);
        }
  }
}
</script>
```

### 自定义选择颜色
```js
<template>
    <div>
        <wr-pagination :page-count="70" :page-per-size="10" @change="paginationChange"  active-bg-color="red"></wr-pagination>
    <div>
</template>
<script>
export default {
    methods: {
        paginationChange(e) {
            this.$wrToast(e);
        }
  }
}
</script>
```

##  Props

<md-table-warp>
| 参数              | 说明             | 类型    | 可选值 | 默认值      |
|:------------------|:-----------------|:--------|:-------|:------------|
| show-page-size    | 页数显示的数量   | Number  | 5      | false       |
| total             | 总记录数         | Number  | —      | 0           |
| page-count        | 总页数           | Number  | —      | 0           |
| page-per-size     | 每页记录数       | Number  | —      | 10          |
| prev-text         | 上一页文字       | String  | —      | 上一页      |
| next-text         | 下一页文字       | String  | —      | 下一页      |
| simple            | 简单模式         | Boolean | true   | false       |
| active-color      | 选中的文字颜色   | String  | —      | #fff        |
| active-bg-color   | 选中的背景颜色   | String  | —      | #1092f9     |
| inactive-color    | 未选中的文字颜色 | String  | —      | #000        |
| inactive-bg-color | 未选中的背景颜色 | String  | —      | transparent |
</md-table-warp>

##  Events

<md-table-warp> 
| 事件名 | 说明 | 回调参数     |
|:-------|:-----|:-------------|
| click  | 点击 | number:index |
| change | 改变 | number:index |
</md-table-warp>