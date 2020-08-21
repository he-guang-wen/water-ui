# Icon 图标

### 基础用法

```html
<wr-icon name="browse"></wr-icon>
<wr-icon name="all"></wr-icon>
<wr-icon name="component"></wr-icon>
```

### 图标大小

```html
<wr-icon name="browse"></wr-icon>
<wr-icon name="all" :size="40"></wr-icon>
<wr-icon name="component" :size="60"></wr-icon>
```

### 图标颜色

```html
<wr-icon name="browse"></wr-icon>
<wr-icon name="all" :size="40" color="#1989fa"></wr-icon>
<wr-icon name="component" :size="60" color="#f55555"></wr-icon>
```

##  Props

<md-table-warp>
| 参数  | 说明   | 类型   | 可选值 | 默认值 |
|:------|:-------|:-------|:-------|:-------|
| name  | 标识符 | String | —      | —      |
| color | 颜色   | String | —      | —      |
| size  | 大小   | Number | —      | 25     |
                                
</md-table-warp>

##  Events

<md-table-warp> 

| 事件名 | 说明 | 回调参数     |
|:-------|:-----|:-------------|
| click  | 点击 | event: Event |
</md-table-warp>