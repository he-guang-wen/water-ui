 # NavBar  导航栏 

 ### 基础用法

 ```js
 <template>
  <div>
      <wr-nav-bar left-icon="arrow-left" title="基础用法" right-icon="all"></wr-nav-bar>
  </div>
</template>
 ```

### 去掉底部边框

 ```js
 <template>
  <div>
      <wr-nav-bar left-icon="arrow-left" :border="false" title="去掉底部边框" right-icon="all"></wr-nav-bar>
  </div>
</template>
 ```

### 插槽

 ```js
 <template>
  <div>
      <wr-nav-bar  :border="false">
        <template #left>左边插槽</template>
        <template #center>中间标题插槽</template>
        <template #right>右边插槽</template>
      </wr-nav-bar>
  </div>
</template>
 ```

 ##  Props

<md-table-warp>
| 参数        | 说明                          | 类型    | 可选值 | 默认值  |
|:------------|:------------------------------|:--------|:-------|:--------|
| title       | 中间文本                      | String  | —      | —       |
| left-icon   | 左边图标                      | String  | —      | —       |
| right-icon  | 右边图标                      | String  | —      | —       |
| left-color  | 左侧字体颜色，优先级高于color | String  | —      | —       |
| right-color | 右侧字体颜色，优先级高于color | String  | —      | —       |
| left-text   | 左边文本                      | String  | —      | —       |
| right-text  | 右边文本                      | String  | —      | —       |
| border      | 底部边框                      | Boolean | false  | true    |
| background  | 背景色                        | String  | —      | #ffffff |
| color       | 字体颜色                      | String  | —      | #000000 |
| z-index     | 显示层级                      | Number  | —      | 99      |
| fixed       | 是否固定在顶部                | Boolean | true   | false   |
</md-table-warp>

##  Events

<md-table-warp> 
| 事件名      | 说明         | 回调参数     |
|:------------|:-------------|:-------------|
| left-click  | 左侧点击     | event: Event |
| title-click | 中间标题点击 | event: Event |
| right-click | 右侧点击     | event: Event |
</md-table-warp>