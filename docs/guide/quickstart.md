# 快速上手

### 通过 npm 安装

```js
npm i vant -S
```


### 导入所有组件



```js
# /src/mian.js 中 添加

import WaterUi from 'water-ui'
import 'water-ui/lib/water-ui.css';
Vue.use(WaterUi)
```

### 按需引入组件

通过 <a href="https://github.com/ant-design/babel-plugin-import">babel-plugin-import</a> 插件,实现按需引入 

```js
# 安装插件
npm i babel-plugin-import -D

# 在.babelrc 中添加配置
{
  "plugins": [
    ["import", {
      "libraryName": "water-ui",
      "libraryDirectory": "components/lib"
    }]
  ]
}
```
