# Keyboard 键盘

### 键盘类型
```js
<template>
  <div>
        <wr-button type="primary" @click="click('number')" class="button">数字键盘</wr-button>
        <wr-keyboard v-model="numberValue" :show="numberShow" @blur="blur"></wr-keyboard>

        <wr-button type="primary" @click="click('card')" class="button">身份证键盘</wr-button>
        <wr-keyboard v-model="cardValue" :show="cardShow" @blur="blur" :type="type"></wr-keyboard>

        <wr-button type="primary" @click="click('car')" class="button">车牌号键盘</wr-button>
        <wr-keyboard v-model="carValue" :show="carShow" @blur="blur" :type="type"></wr-keyboard>
  </div>
</template>
<script>
export default {
  data() {
    return {
      numberShow: false,
      numberValue: "",
      cardShow: false,
      cardValue: "",
      carShow: false,
      carValue: "",
      type: "",
    };
  },
  methods: {
    click(type) {
      this.type = type;
      let key = type + "Show";
      this[key] = true;
    },
    blur() {
      let key = this.type + "Show";
      this[key] = false;
    },
  },
};
```
### 带标题
```js
<template>
  <div>
       <wr-button type="primary" @click="show = false">带标题</wr-button>
       <wr-keyboard v-model="value" :show="show" title="数字键盘" @blur="blur"></wr-keyboard>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:"",
      show:false
    };
  },
  methods: {
    blur() {
      this.show = false;
    },
  },
};
```
### 双向绑定
```js
<template>
  <div>
       <p>{{value}}</p>
       <wr-button type="primary" @click="show = false">双向绑定</wr-button>
       <wr-keyboard v-model="value" :show="show" title="数字键盘" @blur="blur"></wr-keyboard>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:"",
      show:false
    };
  },
  methods: {
    blur() {
      this.show = false;
    },
  },
};
```

##  Props

<md-table-warp>
| 参数       | 说明               | 类型   | 可选值   | 默认值 |
|:-----------|:-------------------|:-------|:---------|:-------|
| v-model    | 绑定的值           | String | —        | —      |
| show       | 显示键盘           | Boolea | true     | false  |
| type       | 键盘类型           | String | card/car | number |
| title      | 标题               | String | —        | —      |
| showDot    | 显示小数点         | Boolea | false    | true   |
| max-length | 绑定的值的最大长度 | Number | —        | —      |
</md-table-warp>

##  Events

<md-table-warp> 
| 事件名 | 说明         | 回调参数    |
|:-------|:-------------|:------------|
| change | 键盘按下的值 | String: key |
| blur   | 键盘失去焦点 | —           |
| delete | 点击删除键   | —           |
| close  | 点击关闭     | —           |

</md-table-warp>