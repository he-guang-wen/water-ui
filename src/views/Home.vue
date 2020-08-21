<template>
  <div class="home">
    <bm-icon name="code"></bm-icon>
    <bm-loading size="20" :color="color"></bm-loading>
    <bm-button
      type="error"
      icon="code"
      color="linear-gradient(to right, rgb(75, 176, 255), rgb(97, 73, 246)"
    >司机</bm-button>
    <bm-switch @change="switchchange"></bm-switch>

    <bm-cell-group>
      <bm-cell
        titleColor="red"
        iconColor="#000"
        title="title"
        icon="calculator"
        right-icon="code"
        content="1213"
        describe="1321"
      ></bm-cell>
      <bm-cell
        title="title"
        icon="calculator"
        right-icon="code"
        content="1213"
        describe="1321"
        arrow
      ></bm-cell>
      <bm-cell title="title" icon="calculator" right-icon="code" content="1213" arrow></bm-cell>
    </bm-cell-group>

    <bm-row style="height:200px">
      <bm-col span="6">
        <div class="demo-col">121</div>
      </bm-col>
      <bm-col span="6">
        <div class="demo-col">121</div>
      </bm-col>
      <bm-col span="6">
        <div class="demo-col">121</div>
      </bm-col>

      <!-- <bm-col class="demo-col" span="6">
        <div class="demo-col">121</div>
      </bm-col>-->
    </bm-row>

    <bm-swiper style="height:200px;">
      <bm-swiper-item style="background: antiquewhite;"></bm-swiper-item>
      <bm-swiper-item style="background: red"></bm-swiper-item>
      <bm-swiper-item style="background:#000"></bm-swiper-item>
    </bm-swiper>

    <demo :list="list"></demo>
  </div>
</template>

<script>
// @ is an alias to /src
import Demo from "./demo";
export default {
  name: "Home",
  components: { Demo },

  data() {
    return {
      color: "#999",
      list: [
        {
          render: function(h) {
            return h("div", 598);
          }
        }
      ]
    };
  },
  mounted() {
    this.$Toast({
      text: "12132"
    });
  },
  methods: {
    switchchange(e) {
      console.log(e, "e");
    }
  }
};
</script>
<style scoped>
.home {
  background: #ccc;
}
.demo-col {
  background: red;
}
</style>
