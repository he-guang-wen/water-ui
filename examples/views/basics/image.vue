<template>
  <div>
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>
    <div class="card">
      <p class="title">填充模式</p>
      <div class="demo__wrapper">
        <div class="image-warp">
          <wr-image class="image-c" :src="imageSrc"></wr-image>
          <span>contain</span>
        </div>

        <div class="image-warp">
          <wr-image fit="cover" class="image-c" :src="imageSrc"></wr-image>
          <span>cover</span>
        </div>

        <div class="image-warp">
          <wr-image fit="fill" class="image-c" :src="imageSrc"></wr-image>
          <span>fill</span>
        </div>

        <div class="image-warp">
          <wr-image fit="none" class="image-c" :src="imageSrc"></wr-image>
          <span>none</span>
        </div>

        <div class="image-warp">
          <wr-image fit="scale-down" class="image-c" :src="imageSrc"></wr-image>
          <span>scale-down</span>
        </div>
      </div>
    </div>

    <div class="card">
      <p class="title">圆形图片</p>
      <div class="demo__wrapper">
        <div class="image-warp">
          <wr-image class="image-c" round :src="imageSrc"></wr-image>
          <span>contain</span>
        </div>

        <div class="image-warp">
          <wr-image fit="cover" class="image-c" round :src="imageSrc"></wr-image>
          <span>cover</span>
        </div>

        <div class="image-warp">
          <wr-image fit="fill" class="image-c" round :src="imageSrc"></wr-image>
          <span>fill</span>
        </div>

        <div class="image-warp">
          <wr-image fit="none" class="image-c" round :src="imageSrc"></wr-image>
          <span>none</span>
        </div>

        <div class="image-warp">
          <wr-image fit="scale-down" class="image-c" round :src="imageSrc"></wr-image>
          <span>scale-down</span>
        </div>
      </div>
    </div>

    <div class="card">
      <p class="title">加载状态</p>
      <div class="demo__wrapper">
        <div class="image-warp">
          <wr-image use-load :src="imageSrc"></wr-image>
          <span>默认提示</span>
        </div>

        <div class="image-warp">
          <wr-image use-load :src="imageSrc">
            <template #load>稍安勿躁</template>
          </wr-image>
          <span>自定义插槽</span>
        </div>
      </div>
    </div>

    <div class="card">
      <p class="title">加载失败状态</p>
      <div class="demo__wrapper">
        <div class="image-warp">
          <wr-image use-error :src="imageSrc"></wr-image>
          <span>默认提示</span>
        </div>

        <div class="image-warp">
          <wr-image use-error :src="imageSrc">
            <template #error>失败了</template>
          </wr-image>
          <span>自定义插槽</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageSrc:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593105377052&di=065751b1d1ff5b7dcafeada9c24bd2e8&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2834278303%2C2950361780%26fm%3D214%26gp%3D0.jpg"
    };
  },
  mounted() {}
};
</script>
<style scoped>
.demo__wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.image-warp {
  width: 48%;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
}
.image-c {
  width: 100%;
  height: 100%;
}
</style>