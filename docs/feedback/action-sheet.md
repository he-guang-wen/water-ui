# ActionSheet 动作面板

### 基础用法
```js
<template>
    <div>
        <wr-button type="primary" @click="actionSheet">基础用法</wr-button>
    <div>
</template>
<script>
export default {
    data() {
        return {
            center: false,
        };
    },
    methods:{
        actionSheet(){
            this.$wrActionSheet({
                list: [
                    { text: "吃饭" }, 
                    { text: "睡觉" }, 
                    { text: "打豆豆" }
                ],
            });            
        }
    }
}
</script>
```

### 隐藏取消按钮
```js
<template>
    <div>
        <wr-button type="primary" @click="actionSheet">隐藏取消按钮</wr-button>
    <div>
</template>
<script>
export default {
    data() {
        return {
            center: false,
        };
    },
    methods:{
        actionSheet(){
            this.$wrActionSheet({
                list: [
                    { text: "吃饭" }, 
                    { text: "睡觉" }, 
                    { text: "打豆豆" }
                ],
                hideCancel: true
            });            
        }
    }
}
</script>
```

### 描述信息
```js
<template>
    <div>
        <wr-button type="primary" @click="actionSheet">描述信息</wr-button>
    <div>
</template>
<script>
export default {
    data() {
        return {
            center: false,
        };
    },
    methods:{
        actionSheet(){
            this.$wrActionSheet({
                list: [
                    { text: "吃饭" }, 
                    { text: "睡觉" }, 
                    { text: "打豆豆" }
                ],
                description: "请选择个人爱好"
            });            
        }
    }
}
</script>
```
### 禁用状态
```js
<template>
    <div>
        <wr-button type="primary" @click="actionSheet">禁用状态</wr-button>
    <div>
</template>
<script>
export default {
    data() {
        return {
            center: false,
        };
    },
    methods:{
        actionSheet(){
            this.$wrActionSheet({
                list: [
                    { text: "吃饭" }, 
                    { text: "睡觉",disabled: true}, 
                    { text: "打豆豆",disabled: true}
                ]
            });            
        }
    }
}
</script>
```

### 透明遮罩
```js
<template>
    <div>
        <wr-button type="primary" @click="actionSheet">透明遮罩</wr-button>
    <div>
</template>
<script>
export default {
    data() {
        return {
            center: false,
        };
    },
    methods:{
        actionSheet(){
            this.$wrActionSheet({
                list: [
                    { text: "吃饭" }, 
                    { text: "睡觉" }, 
                    { text: "打豆豆" }
                ],
                hideOverlay: true
            });            
        }
    }
}
</script>
```


##  Options

<md-table-warp>
| 参数            | 说明               | 类型    | 可选值 | 默认值 |
|:----------------|:-------------------|:--------|:-------|:-------|
| show            | 打开和关闭         | Boolean | true   | false  |
| zIndex          | 层级               | Number  | —      | 1002   |
| description     | 标题描述           | String  | false  | true   |
| list            | 面板选项列表       | Array   | —      | []     |
| borderTopRadius | 上边角弧度         | Number  | —      | 12     |
| cancelText      | 取消文本           | String  | —      | 取消   |
| hideCancel      | 隐藏取消按钮       | String  | —      | 取消   |
| mask            | 点击遮罩后不关闭   | Boolean | true   | false  |
| closeOnItem     | 点击具体项后不关闭 | Boolean | true   | false  |
| hideOverlay     | 隐藏遮罩           | Boolean | true   | false  |
| onOpen          | 打开后的回掉函数   | Boolean | —      | —      |
| onClose         | 关闭后的回掉函数   | Boolean | —      | —      |
</md-table-warp>

