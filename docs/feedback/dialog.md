# Dialog 弹出框

### 基础用法
```js
<template>
    <div>
        <wr-button type="primary" @click="showDialog">基础用法</wr-button>
    <div>
</template>
<script>
export default {
    methods:{
        showDialog(){
            this.$wrDialog({
                title: "标题",
                content: "666666"
            });            
        }
    }
}
</script>
```

### 显示关闭图标
```js
<template>
    <div>
        <wr-button type="primary" @click="showDialog">显示关闭图标</wr-button>
    <div>
</template>
<script>
export default {
    methods:{
        showDialog(){
            this.$wrDialog({
                title: "标题",
                content: "666666",
                showIconClose: true
            });            
        }
    }
}
</script>
```

### 提示框
```js
<template>
    <div>
        <wr-button type="primary" @click="showDialog">提示框</wr-button>
    <div>
</template>
<script>
export default {
    methods:{
        showDialog(){
            this.$wrDialog.alert({
                title: "标题",
                content: "666666"
            });            
        }
    }
}
</script>
```

### 不显示标题
```js
<template>
    <div>
        <wr-button type="primary" @click="showDialog">不显示标题</wr-button>
    <div>
</template>
<script>
export default {
    methods:{
        showDialog(){
            this.$wrDialog({
                content: "666666"
            });            
        }
    }
}
</script>
```

### 自定义内容
```js
<template>
    <div>
        <wr-button type="primary" @click="showDialog">自定义内容</wr-button>
    <div>
</template>
<script>
export default {
    methods:{
        showDialog(){
            this.$wrDialog({
                content: "666666",
                render: h => {
                    return h("img", {
                        style: {
                        width: "100%",
                        height: "200px",
                        display: "block"
                        },
                        attrs: {
                        src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593105377052&di=065751b1d1ff5b7dcafeada9c24bd2e8&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2834278303%2C2950361780%26fm%3D214%26gp%3D0.jpg"
                        }
                    });
                }
            });            
        }
    }
}
</script>
```

### 完全自定义内容
```js
<template>
    <div>
        <wr-button type="primary" @click="showDialog">自定义内容</wr-button>
    <div>
</template>
<script>
export default {
    methods:{
        showDialog(){
            this.$wrDialog.alert({
                hideFooter: true,
                render: h => {
                    return h("img", {
                        style: {
                        width: "100%",
                        height: "200px",
                        display: "block"
                        },
                        attrs: {
                        src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593105377052&di=065751b1d1ff5b7dcafeada9c24bd2e8&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2834278303%2C2950361780%26fm%3D214%26gp%3D0.jpg"
                        }
                    });
                }
            });            
        }
    }
}
</script>
```

##  Options

<md-table-warp>
| 参数          | 说明             | 类型     | 可选值 | 默认值 |
|:--------------|:-----------------|:---------|:-------|:-------|
| show          | 打开和关闭       | Boolean  | true   | false  |
| zIndex        | 层级             | Number   | —      | 1003   |
| title         | 标题             | String   | —      | —      |
| content       | 内容文本         | String   | —      | —      |
| contentAlign  | 内容文本对齐方式 | String   | —      | center |
| hideConfirm   | 隐藏确认按钮     | Boolean  | true   | false  |
| hideCancel    | 隐藏取消按钮     | Boolean  | true   | false  |
| hideFooter    | 隐藏底部所有按钮 | Boolean  | true   | false  |
| confirmText   | 确认按钮文本     | String   | —      | 确认   |
| cancelText    | 取消按钮文本     | String   | —      | 取消   |
| showIconClose | 显示关闭图标     | Boolean  | true   | false  |
| hideOverlay   | 隐藏遮罩         | Boolean  | true   | false  |
| render        | 自定义内容       | Function | —      | —      |
</md-table-warp>
