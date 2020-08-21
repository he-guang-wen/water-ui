# Badge 标徽

### 基础用法
``` html
<wr-badge :value="99">
  <wr-button>按钮</wr-button>
</wr-badge>
```

### 主题
``` html
<wr-badge :value="99">
  <wr-button>按钮</wr-button>
</wr-badge>
<wr-badge :value="99" type="success" class="demo-badge">
  <wr-button>按钮</wr-button>
</wr-badge>
<wr-badge :value="99" type="warning" class="demo-badge">
  <wr-button>按钮</wr-button>
  </wr-badge> 
<wr-badge :value="99" type="danger" class="demo-badge">
  <wr-button>按钮</wr-button>
</wr-badge>
```

### 使用文字
``` html
<wr-badge value="文字">
<wr-button>按钮</wr-button>
</wr-badge>
```

### 偏移
``` html
<wr-badge value="99+"  :offset="[5,-2]">
  <wr-button>按钮</wr-button>
</wr-badge>
```

##  Props

<md-table-warp>
| 参数       | 说明     | 类型    | 可选值                 | 默认值  |
|:-----------|:---------|:--------|:-----------------------|:--------|
| value      | 值       | String  | —                      | —       |
| type       | 主题     | String  | danger/success/warning | primary |
| offset     | 偏移     | Array   | —                      | [0, 0]  |
| is-dot     | 是否圆点 | Boolean | true                   | false   |
| color      | 字体颜色 | String  | —                      | #fff    |
| background | 背景色   | String  | —                      | —       |
                                
</md-table-warp>

##  Events

<md-table-warp> 

| 事件名 | 说明 | 回调参数 | 
|:-------|:-----|:---------|
| click   | 点击 | event: Event   |
</md-table-warp>