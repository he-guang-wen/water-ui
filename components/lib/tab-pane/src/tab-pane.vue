<template>
  <div class="wr-tab-pane" :style="tabPaneStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "wrTabPane",
  props: {
    //标题
    title: {
      type: String
    },
    //标识符
    name: {
      type: [String, Number]
    }
  },
  data() {
    return {
      index: "",
      tabPaneStyle: { 
        display: "node"
      }
    };
  },
  mounted(){
 
  },
  computed: {},
  methods: {
    setTabPaneDisplay(value) {
      this.tabPaneStyle.display = value;
    }
  }
};
</script>
<style lang="scss">
@import "./tab-pane.scss";
</style>