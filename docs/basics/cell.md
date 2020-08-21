# cell 单元格

### 基础用法

``` js
<wr-cell-group>
    <wr-cell title="消息通知"></wr-cell>
    <wr-cell title="最近浏览"></wr-cell>
    <wr-cell title="设置"></wr-cell>
<wr-cell-group>

```

###  带图标和箭头

``` js
<wr-cell-group>
    <wr-cell title="消息通知" icon="sound-filling" arrow></wr-cell>
    <wr-cell title="最近浏览" icon="all" arrow></wr-cell>
    <wr-cell title="设置" icon="set" arrow></wr-cell>
</wr-cell-group>
```

###  带有描述信息

``` js
<wr-cell-group>
    <wr-cell icon="set" title="设置" arrow description="描述信息" content="内容"></wr-cell>
</wr-cell-group>
```

###  自定义插槽
```js
<wr-cell-group>
    <wr-cell>
        <template #left>左侧插槽</template>
        <template #right>右侧插槽</template>
        <template #description>描述插槽</template>
    </wr-cell>
</wr-cell-group>
```
## CellGroup PropsProps 

<md-table-warp>
| 参数            | 说明               | 类型    | 可选值          | 默认值 |
|:----------------|:-------------------|:--------|:----------------|:-------|
| background           | 背景色               | String  | —               | —      |
</md-table-warp>

## Cell Props

<md-table-warp>
| 参数            | 说明               | 类型    | 可选值          | 默认值 |
|:----------------|:-------------------|:--------|:----------------|:-------|
| title           | 标题               | String  | —               | —      |
| title-color     | 自定义标题文字颜色 | String  | —               | —      |
| icon            | 图标               | String  | —               | —      |
| show-icon       | 是否显示图标       | Boolean | false           | true   |
| icon-color      | 图标颜色           | String  | —               | —      |
| content         | 右侧内容           | String  | —               | —      |
| arrow           | 是否显示箭头       | Boolean | true            | false  |
| arrow-direction | 箭头方向           | String  | left/bottom/top | right  |
| description     | 描述               | String  | —               | —      |
</md-table-warp>
