<template>
  <div id="app">
    <!-- <router-view/> -->
    <keep-alive include="home">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  mounted() {},
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;

}
*::-webkit-scrollbar {
  display: none;
}
#app,
body,
html,
.interim {
  height: 100%;

}


.title {
  padding-bottom: 10px;
  padding: 20px 20px 10px 20px;
}
.card {
  width: 100%;
  padding: 0;
  box-shadow: none;
  background: #f2f6fc;
}
.demo__wrapper {
  background: #fff;
  padding: 20px;
}
</style>
