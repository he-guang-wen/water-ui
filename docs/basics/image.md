# Image 图片

### 填充模式

``` html
<wr-image ></wr-image>
<wr-image fit="cover"></wr-image>
<wr-image fit="fill"></wr-image>
<wr-image fit="none"></wr-image>
<wr-image fit="scale-down"></wr-image>
```

### 圆形图片

``` html
<wr-image ></wr-image>
<wr-image fit="cover" round></wr-image>
<wr-image fit="fill" round></wr-image>
<wr-image fit="none" round></wr-image>
<wr-image fit="scale-down" round></wr-image>
```

### 加载状态

``` html
<wr-image use-load></wr-image>
<wr-image use-load>
    <template #load>稍安勿躁</template>
</wr-image>
```

### 加载失败状态

``` html
<wr-image use-error></wr-image>
<wr-image use-error>
    <template #error>失败了</template>
</wr-image>
```

##  Props

<md-table-warp>
| 参数      | 说明                     | 类型    | 可选值                             | 默认值 |
|:----------|:-------------------------|:--------|:-----------------------------------|:-------|
| src       | 图片路径                 | String  | —                                  | —      |
| alt       | 替代文本                 | String  | —                                  | —      |
| width     | 宽度                     | Number  | —                                  | —      |
| height    | 高度                     | Number  | —                                  | —      |
| fit       | 填充模式                 | String  | contain/cover/fill/none/scale-down | fill   |
| radius    | 圆角大小                 | Number  | —                                  | 0      |
| round     | 是否圆形                 | Boolean | true                               | false  |
| use-error | 是否展示图片加载失败提示 | Boolean | true                               | false  |
| use-load  | 是否展示图片加载提示     | Boolean | true                               | false  |
</md-table-warp>

##  Events

<md-table-warp> 
| 事件名 | 说明 | 回调参数       |
|:-------|:-----|:-------------|
| load  | 	加载完毕 | — |
| error  | 	加载失败 | — |
</md-table-warp>

##  Slots
<md-table-warp> 
| 名称 | 说明 | 
|:-------|:-----|
| load  | 	加载插槽 |
| error  | 	加载失败插槽 |
</md-table-warp>