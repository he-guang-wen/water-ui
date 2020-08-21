# Layout 布局

### 基础用法

``` js
<template>
    <div>
         <wr-row>
          <wr-col>
            <div class="col radius">24</div>
          </wr-col>
        </wr-row>
        <wr-row>
          <wr-col span="12">
            <div class="col-dark margin-top radius">12</div>
          </wr-col>
          <wr-col span="12">
            <div class="col-shallow margin-top radius">12</div>
          </wr-col>
        </wr-row>
        <wr-row>
          <wr-col span="8">
            <div class="col-dark margin-top radius">8</div>
          </wr-col>
          <wr-col span="8">
            <div class="col-shallow margin-top radius">8</div>
          </wr-col>
          <wr-col span="8">
            <div class="col-dark margin-top radius">8</div>
          </wr-col>
        </wr-row>
        <wr-row>
          <wr-col span="6">
            <div class="col-dark margin-top radius">6</div>
          </wr-col>
          <wr-col span="6">
            <div class="col-shallow margin-top radius">6</div>
          </wr-col>
          <wr-col span="6">
            <div class="col-dark margin-top radius">6</div>
          </wr-col>
          <wr-col span="6">
            <div class="col-shallow margin-top radius">6</div>
          </wr-col>
        </wr-row>
    </div>
</template>
<style>
.col {
  background: #1989fa;
  color: #fff;
  text-align: center;
}
.radius {
  border-radius: 3px;
}
.margin-top {
  margin-top: 5px;
}
.col-dark {
  background: #3997f6;
  color: #fff;
  text-align: center;
}
.col-shallow {
  background: #87bdf3;
  color: #fff;
  text-align: center;
}
</style>
```

### 分栏间隔

``` js
<template>
    <div>
        <wr-row gutter="10">
          <wr-col span="6">
            <div class="col-dark margin-top radius">6</div>
          </wr-col>
          <wr-col span="6">
            <div class="col-shallow margin-top radius">6</div>
          </wr-col>
          <wr-col span="6">
            <div class="col-dark margin-top radius">6</div>
          </wr-col>
          <wr-col span="6">
            <div class="col-shallow margin-top radius">6</div>
          </wr-col>
        </wr-row>
    </div>
</template>
<style>
.col {
  background: #1989fa;
  color: #fff;
  text-align: center;
}
.radius {
  border-radius: 3px;
}
.margin-top {
  margin-top: 5px;
}
.col-dark {
  background: #3997f6;
  color: #fff;
  text-align: center;
}
.col-shallow {
  background: #87bdf3;
  color: #fff;
  text-align: center;
}
</style>
```

## Row Props

<md-table-warp>
| 参数    | 说明             | 类型    | 可选值 | 默认值        |
|:--------|:-----------------|:--------|:-------|:--------------|
| gutter  | 间隔             | Number  | —      | 0             |
| align   | 纵轴的对齐方式   | String  | —      | center        |
| flex    | 是否开启flex布局 | Boolean | true   | false         |
| justify | 横轴的对齐方式   | String  | —      | space-between |

</md-table-warp>


## Col Props

<md-table-warp>
| 参数 | 说明       | 类型   | 可选值 | 默认值 |
|:-----|:-----------|:-------|:-------|:-------|
| span | 列元素宽度 | Number | —      | 24     |
</md-table-warp>

## Col Events

<md-table-warp> 
| 事件名 | 说明 | 可选值       |
|:-------|:-----|:-------------|
| clcik  | 点击 | event: Event |
</md-table-warp>
