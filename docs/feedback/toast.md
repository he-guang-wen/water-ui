#  Toast 轻提示

### 基础用法
```js
<template>
    <div>
       <wr-button type="primary" @click="showToast1()">短文字</wr-button>
        <wr-button type="primary" @click="showToast2()">长文字</wr-button>
    <div>
</template>
<script>
export default {
    methods:{
        showToast1(){
            this.$wrToast("短文字");            
        },
        showToast2(){
            this.$wrToast("我是一个长文本内容，一行容不下我就换到下一行");           
        }
    }
}
</script>
```

### 成功提示用法
```js
<template>
    <div>
       <wr-button type="primary" @click="showToast()">成功提示用法</wr-button>
    <div>
</template>
<script>
export default {
    methods:{
        showToast(){
            this.$wrToast.success("成功");            
        }
    }
}
</script>
```

### 失败提示用法
```js
<template>
    <div>
       <wr-button type="primary" @click="showToast()">失败提示用法</wr-button>
    <div>
</template>
<script>
export default {
    methods:{
        showToast(){
            this.$wrToast.error("失败");            
        }
    }
}
</script>
```

### 加载状态
```js
<template>
    <div>
       <wr-button type="primary" @click="showToast()">加载状态</wr-button>
    <div>
</template>
<script>
export default {
    methods:{
        showToast(){
            this.$wrToast.loading({
                text: "加载中...",
                loadingType: "spinner"
            });          
        }
    }
}
</script>
```

### 禁止点击穿透
```js
<template>
    <div>
       <wr-button type="primary" @click="showToast()">禁止点击穿透</wr-button>
    <div>
</template>
<script>
export default {
    methods:{
        showToast(){
            this.$wrToast({
                text: "5秒关闭，期间无法点击穿透",
                mask: true,
                duration: 5000
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
| text          | 文本             | String   | —      | —      |
| duration      | 显示时间         | Number   | —      | —      |
| zIndex        | 层级             | Number   | —      | 1024      |
| content       | 内容文本         | String   | —      | 1024   |
| loadingType  | 加载状态下的loading类型 | String   | —      | circle |
| type   | success/error/loading     | String  | —   | none  |
| color    | 字体颜色     | String  | —   | —  |
| background    | 背景颜色 | String  | —   | —  |
| iconColor   | 图标颜色     | String   | —      | —   |
| mask    | 是否不可点击穿透     | Boolean   | true      | false   |
</md-table-warp>
