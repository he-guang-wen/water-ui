# Picker 选择器


### 基础用法
```js
<template>
    <div>
        <wr-button type="primary" @click="open">基础用法</wr-button>
        <wr-picker v-model="value" :data="data" ref="picker"></wr-picker>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: [1],
            data: [
                [
                    { label: "一年级", value: 1 },
                    { label: "二年级", value: 2 },
                    { label: "三年级", value: 3 },
                    { label: "四年级", value: 4 },
                    { label: "五年级", value: 5 },
                    { label: "六年级", value: 6 },
                ],
            ],
        };
    },
    methods:{
        open(){
            this.$refs.picker.open();    
        }
    }
}
</script>
```

### 带标题
```js
<template>
    <div>
        <wr-button type="primary" @click="open">基础用法</wr-button>
        <wr-picker v-model="value" :data="data" title="选择年级" ref="picker"></wr-picker>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: [1],
            data: [
                [
                    { label: "一年级", value: 1 },
                    { label: "二年级", value: 2 },
                    { label: "三年级", value: 3 },
                    { label: "四年级", value: 4 },
                    { label: "五年级", value: 5 },
                    { label: "六年级", value: 6 },
                ],
            ],
        };
    },
    methods:{
        open(){
            this.$refs.picker.open();    
        }
    }
}
</script>
```

### 多级
```js
<template>
    <div>
        <wr-button type="primary" @click="open">基础用法</wr-button>
        <wr-picker v-model="value" :data="data" ref="picker"></wr-picker>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: [1, 1],
            data: [
                [
                    { label: "一年级", value: 1 },
                    { label: "二年级", value: 2 },
                    { label: "三年级", value: 3 },
                    { label: "四年级", value: 4 },
                    { label: "五年级", value: 5 },
                    { label: "六年级", value: 6 },
                ],
                [
                    { label: "上册", value: 1 },
                    { label: "下册", value: 2 },
                ],
            ],
        };
    },
    methods:{
        open(){
            this.$refs.picker.open();    
        }
    }
}
</script>
```

### 多级联动
```js
<template>
    <div>
        <wr-button type="primary" @click="open">基础用法</wr-button>
        <wr-picker v-model="value" :data="data" ref="picker"></wr-picker>
    <div>
</template>
<script>
export default {
    data() {
        return {
            value: [1, 1],
            data: [
                    {
                    label: "北京市",
                    value: 110000,
                    children: [
                        {
                        label: "北京市",
                        value: 110100,
                        children: [
                            { label: "东城区", value: 110101 },
                            { label: "西城区", value: 110102 },
                            { label: "朝阳区", value: 110105 },
                        ],
                        },
                    ],
                    },
                    {
                    label: "湖南省",
                    value: 430100,
                    children: [
                        {
                        label: "长沙市",
                        value: 430100,
                        children: [
                            { label: "岳麓区", value: 430104 },
                            { label: "长沙县", value: 430121 },
                            { label: "宁乡市", value: 430124 },
                        ],
                        },
                        {
                        label: "株洲市",
                        value: 430200,
                        children: [
                            { label: "荷塘区", value: 430202 },
                            { label: "芦淞区", value: 430203 },
                            { label: "石峰区", value: 430204 },
                        ],
                        },
                        {
                        label: "湘潭市",
                        value: 430300,
                        children: [
                            { label: "雨湖区", value: 430302 },
                            { label: "岳塘区", value: 430304 },
                            { label: "湘潭县", value: 430321 },
                        ],
                        },
                    ],
                    },
                ],
        };
    },
    methods:{
        open(){
            this.$refs.picker.open();    
        }
    }
}
</script>
```

##  Props

<md-table-warp>
| 参数    | 说明         | 类型   | 可选值 | 默认值                                               |
|:--------|:-------------|:-------|:-------|:-----------------------------------------------------|
| v-model | 绑定值的列表 | Array  | —      | —                                                    |
| data    | 配置列       | Array  | —      | —                                                    |
| title   | 标题         | String | —      | —                                                    |
| props   | 配置列的选项 | Object | —      | {value: "value",label: "label",children: "children"} |
                                
</md-table-warp>

##  Events

<md-table-warp> 
| 事件名  | 说明 | 回调参数     |
|:--------|:-----|:-------------|
| confirm | 确认 | Array: Array |
| cancel  | 取消 | —            |
</md-table-warp>