# Collapse 折叠面板
### 基础用法
```js
<template>
    <div>
        <wr-collapse>
          <wr-collapse-item title="静夜思">
            <p>床前明月光，疑是地上霜。</p>
            <p>举头望明月，低头思故乡。</p>
          </wr-collapse-item>
          <wr-collapse-item title="春晓">
            <p>春眠不觉晓，处处闻啼鸟。</p>
            <p>夜来风雨声，花落知多少。</p>
          </wr-collapse-item>
          <wr-collapse-item title="江雪">
            <p>千山鸟飞绝，万径人踪灭。</p>
            <p>孤舟蓑笠翁，独钓寒江雪。</p>
          </wr-collapse-item>
        </wr-collapse>
    <div>
</template>
```

### 指定展开面板
```js
<template>
    <div>
        <wr-collapse v-model="activeName">
          <wr-collapse-item title="静夜思">
            <p>床前明月光，疑是地上霜。</p>
            <p>举头望明月，低头思故乡。</p>
          </wr-collapse-item>
          <wr-collapse-item title="春晓">
            <p>春眠不觉晓，处处闻啼鸟。</p>
            <p>夜来风雨声，花落知多少。</p>
          </wr-collapse-item>
          <wr-collapse-item title="江雪">
            <p>千山鸟飞绝，万径人踪灭。</p>
            <p>孤舟蓑笠翁，独钓寒江雪。</p>
          </wr-collapse-item>
        </wr-collapse>
    <div>
</template>
<script>
export default {
    data() {
        return {
            activeName: [0],
        };
     }
}
</script>
```

### 隐藏箭头
```js
<template>
    <div>
        <wr-collapse :arrow="false">
          <wr-collapse-item title="静夜思">
            <p>床前明月光，疑是地上霜。</p>
            <p>举头望明月，低头思故乡。</p>
          </wr-collapse-item>
          <wr-collapse-item title="春晓">
            <p>春眠不觉晓，处处闻啼鸟。</p>
            <p>夜来风雨声，花落知多少。</p>
          </wr-collapse-item>
          <wr-collapse-item title="江雪">
            <p>千山鸟飞绝，万径人踪灭。</p>
            <p>孤舟蓑笠翁，独钓寒江雪。</p>
          </wr-collapse-item>
        </wr-collapse>
    <div>
</template>
```


### 手风琴效果
```js
<template>
    <div>
        <wr-collapse accordion>
          <wr-collapse-item title="静夜思">
            <p>床前明月光，疑是地上霜。</p>
            <p>举头望明月，低头思故乡。</p>
          </wr-collapse-item>
          <wr-collapse-item title="春晓">
            <p>春眠不觉晓，处处闻啼鸟。</p>
            <p>夜来风雨声，花落知多少。</p>
          </wr-collapse-item>
          <wr-collapse-item title="江雪">
            <p>千山鸟飞绝，万径人踪灭。</p>
            <p>孤舟蓑笠翁，独钓寒江雪。</p>
          </wr-collapse-item>
        </wr-collapse>
    <div>
</template>
```

### 右侧内容
```js
<template>
    <div>
        <wr-collapse>
          <wr-collapse-item title="静夜思" value="李白">
            <p>床前明月光，疑是地上霜。</p>
            <p>举头望明月，低头思故乡。</p>
          </wr-collapse-item>
          <wr-collapse-item title="春晓" value="孟浩然">
            <p>春眠不觉晓，处处闻啼鸟。</p>
            <p>夜来风雨声，花落知多少。</p>
          </wr-collapse-item>
          <wr-collapse-item title="江雪" value="柳宗元">
            <p>千山鸟飞绝，万径人踪灭。</p>
            <p>孤舟蓑笠翁，独钓寒江雪。</p>
          </wr-collapse-item>
        </wr-collapse>
    <div>
</template>
```

##  Collapse Props

<md-table-warp>
| 参数       | 说明               | 类型    | 可选值 | 默认值 |
|:-----------|:-------------------|:--------|:-------|:-------|
| v-model    | 需要展开的列表     | Boolean | true   | false  |
| arrow      | 是否显示箭头       | Boolean | false  | true   |
| accordion  | 是否开始手风琴效果 | Boolean | true   | false  |
| background | 背景颜色           | String  | —      | #fff   |
                                
</md-table-warp>

##  CollapseItem Props

<md-table-warp>
| 参数  | 说明       | 类型   | 可选值 | 默认值 |
|:------|:-----------|:-------|:-------|:-------|
| name  | 标识符     | String | —      | —      |
| title | 左侧侧标题 | String | —      | —      |
| value | 右侧内容   | String | —      | —      |
                                
</md-table-warp>

## CollapseItem Events

<md-table-warp> 
| 事件名 | 说明 | 回调参数     |
|:-------|:-----|:-------------|
| click  | 点击 | event: Event |
| open   | 打开 | —            |
| close  | 关闭 | —            |
</md-table-warp>