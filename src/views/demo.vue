<template>
  <div>
      <div v-for="(val,index) in list" :key="index">
      <v-template :node="val.render"></v-template>
      </div>
  </div>
</template>
<script>
import vTemplate from './template'

export default {
  props: {
    list: {
      type: Array
    }
  },
  components:{
      vTemplate
  },
  methods: {},
  mounted() {
    this.list.forEach((item,index) => {
        if(item.render){
            const h = this.$createElement
            this.list[index].render = item.render(h,item)
        }
    });
  }
};
</script>