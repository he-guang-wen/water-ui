# Button 按钮

### 按钮类型

```html
<wr-button>默认按钮</wr-button>
<wr-button type="primary">主要按钮</wr-button>
<wr-button type="success">成功按钮</wr-button>
<wr-button type="danger">危险按钮</wr-button>
<wr-button type="warning">警告按钮</wr-button>
<wr-button type="info">信息按钮</wr-button>
```

### 按钮大小

```html
<wr-button type="primary" size="long">
  长按钮
</wr-button>
<wr-button type="primary">默认大小</wr-button>
<wr-button type="primary" size="small">
  小按钮
</wr-button>
<wr-button type="primary" size="mini">
  迷你按钮
</wr-button>
```

### 朴素类型

```html
<wr-button plain>默认按钮</wr-button>
<wr-button type="primary" plain>
  主要按钮
</wr-button>
<wr-button type="success" plain>
  成功按钮
</wr-button>
<wr-button type="danger" plain>
  危险按钮
</wr-button>
<wr-button type="warning" plain>
  警告按钮
</wr-button>
<wr-button type="info" plain>
  信息按钮
</wr-button>
```

### 加载状态

```html
<wr-button type="primary" loading>加载中</wr-button>
<wr-button type="primary" plain loading>加载中</wr-button>
```

### 禁用状态

```html
<wr-button type="primary" disabled>已禁用</wr-button>
<wr-button type="primary" disabled plain>已禁用</wr-button>
```

### 按钮形状

```html
<wr-button type="primary">方形按钮</wr-button>
<wr-button type="primary" round>圆形按钮</wr-button>
<wr-button type="primary" plain>方形按钮</wr-button>
<wr-button type="primary" plain round>圆形按钮</wr-button>
```

### 图标按钮

```html
<wr-button type="primary" icon="all"></wr-button>
<wr-button type="primary" icon="all">按钮</wr-button>
<wr-button type="primary" icon="all" plain>按钮</wr-button>
```

### 自定义颜色按钮

```html
<wr-button color="#8219fa" text-color="#fff">按钮</wr-button>
<wr-button plain color="#8219fa" text-color="#197ffa">按钮</wr-button>
<wr-button color="linear-gradient(135deg,#8219fa,#197ffa)" text-color="#fff"
  >渐变色按钮</wr-button
>
```

##  Props

<md-table-warp>
| 参数       | 说明           | 类型    | 可选值                              | 默认值  |
|:-----------|:---------------|:--------|:------------------------------------|:--------|
| type       | 主题           | String  | primary/success/info/danger/warning | default |
| text-color | 自定义文字颜色 | String  | —                                   | —       |
| size       | 大小           | String  | long/small/mini                     | default |
| round      | 是否圆形       | Boolean | true                                | false   |
| plain      | 是否朴素按钮   | Boolean | true                                | false   |
| loading    | 是否加载状态   | Boolean | true                                | false   |
| icon       | 图标           | String  | —                                   | —       |
| disabled   | 是否禁用       | Boolean | true                                | false   |
| color      | 自定义颜色     | String  | —                                   | —       |
</md-table-warp>

##  Events

<md-table-warp> 
| 事件名 | 说明 | 可选值       |
|:-------|:-----|:-------------|
| clcik  | 点击 | event: Event |
</md-table-warp>
