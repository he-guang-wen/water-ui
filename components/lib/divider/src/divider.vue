<template>
  <div class="wr-divider" :style="dividerStyle">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: "wrDivider",
  props:{
      color:{
          type:String,
          default:'#000'
      },
      borderColor:{
          type:String,
          default:'#ccc'
      }
  },
  computed:{
      dividerStyle(){
          return {
              color:this.color,
              borderColor:this.borderColor
          }
      }
  }
};
</script>
<style lang="scss" scoped>
@import "./divider.scss";
</style>