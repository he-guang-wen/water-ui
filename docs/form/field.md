# Field 输入框

### 基础用法 
```js
<template>
    <wr-field placeholder="请输入文本" label="文本"></wr-field>
</template>
```

### 输入框只读 
```js
<template>
    <wr-field label="文本" readonly value="输入框只读"></wr-field>
</template>
```

### 输入框禁用 

```js
<template>
    <wr-field placeholder="请输入文本" label="文本" disabled></wr-field>
</template>
```

### 显示必填号 

```js
<template>
    <wr-field placeholder="请输入文本" label="文本" required></wr-field>
</template>
```

### 自定义类型 

```js
<template> 
    <div>
        <wr-field placeholder="请输入文本" label="文本"></wr-field>
        <wr-field placeholder="请输入手机号" label="手机号" type="tel"></wr-field>
        <wr-field placeholder="请输入数字" label="数字" type="number"></wr-field>
        <wr-field placeholder="请输入密码" label="密码" type="password"></wr-field>
        <wr-field placeholder="请输入长文本" label="长文本" type="textarea"></wr-field>
    </div>
</template>
```


### textarea高度自适应 

```js
<template>
    <div>
        <wr-field placeholder="请输入长文本" label="长文本" type="textarea" rows="1" auto-height></wr-field>
        <wr-field placeholder="请输入长文本" label="长文本" type="textarea" rows="4" auto-height></wr-field>
    </div>
</template>
```

### 右侧插槽 

```js
<template>
    <wr-field placeholder="请输入文本" label="文本" >
        <template #right>
            <wr-button type="success" size="small">发送验证码</wr-button>
        </template>
    </wr-field>
</template>
```

##  Props

<md-table-warp>
| 参数          | 说明                                               | 类型    | 可选值                       | 默认值 |
|:--------------|:---------------------------------------------------|:--------|:-----------------------------|:-------|
| v-model       | 输入框内容                                         | String  | —                            | —      |
| name          | 标识符                                             | String  | —                            | —      |
| placeholder   | 输入框占位提示文字                                 | String  | —                            | —      |
| type          | 输入框类型                                         | String  | tel/number/password/textarea | text   |
| label         | 右侧标题                                           | String  | —                            | —      |
| label-width   | 右侧标题宽度                                       | Number  | —                            | 70     |
| label-align   | 右侧标题对齐方式                                   | String  | center/right                 | left   |
| required      | 是否显示必填符号                                   | Boolean | true                         | false  |
| error-message | 错误提示                                           | String  | —                            | —      |
| border        | 是否显示边框                                       | Boolean | false                        | true   |
| rows          | 输入框文本区内的可见行数。 type ==textarea时才生效 | Number  | —                            | 3      |
| auto-height   | 是否自动高度。 type ==textarea时才生效             | Boolean | true                         | false  |
| focus         | 是否自动聚焦                                       | Boolean | true                         | false  |
| max-length    | 最大长度                                           | Number  | —                            | —      |
| readonly      | 输入框是否只读                                     | Boolean | true                         | false  |
| disabled      | 输入框是否禁止禁用                                 | Boolean | true                         | false  |
</md-table-warp>

## Events

<md-table-warp> 
| 事件名      | 说明       | 回调参数     |
|:------------|:-----------|:-------------|
| click       | 点击       | event: Event |
| click-left  | 点击左侧   | event: Event |
| click-input | 点击输入框 | event: Event |
| click-right | 点击右侧   | event: Event |
| focus       | 获得焦点   | event: Event |
| blur        | 失去焦点   | event: Event |
</md-table-warp>

## Slots

<md-table-warp> 
| 名称  | 说明     |
|:------|:---------|
| right | 右侧插槽 |
</md-table-warp>