<template>
  <div class="cell-demo">
    <wr-nav-bar
      :title="$route.meta.title"
      @left-click="()=>{ this.$router.push('/')}"
      left-icon="home"
      fixed
    ></wr-nav-bar>

  

    <div class="card">
      <p class="title">基础用法</p>
      <div>
        <wr-collapse >
          <wr-collapse-item title="静夜思">
            <p>床前明月光，疑是地上霜。</p>
            <p>举头望明月，低头思故乡。</p>
          </wr-collapse-item>
          <wr-collapse-item title="春晓">
            <p>春眠不觉晓，处处闻啼鸟。</p>
            <p>夜来风雨声，花落知多少。</p>
          </wr-collapse-item>
          <wr-collapse-item title="江雪">
            <p>千山鸟飞绝，万径人踪灭。</p>
            <p>孤舟蓑笠翁，独钓寒江雪。</p>
          </wr-collapse-item>
        </wr-collapse>
      </div>
    </div>

    
      <div class="card">
      <p class="title">指定展开面板</p>
      <div>
        <wr-collapse  v-model="activeName">
          <wr-collapse-item title="静夜思">
            <p>床前明月光，疑是地上霜。</p>
            <p>举头望明月，低头思故乡。</p>
          </wr-collapse-item>
          <wr-collapse-item title="春晓">
            <p>春眠不觉晓，处处闻啼鸟。</p>
            <p>夜来风雨声，花落知多少。</p>
          </wr-collapse-item>
          <wr-collapse-item title="江雪">
            <p>千山鸟飞绝，万径人踪灭。</p>
            <p>孤舟蓑笠翁，独钓寒江雪。</p>
          </wr-collapse-item>
        </wr-collapse>
      </div>
    </div>

      <div class="card">
      <p class="title">隐藏箭头</p>
      <div>
        <wr-collapse :arrow="false" >
          <wr-collapse-item title="静夜思">
            <p>床前明月光，疑是地上霜。</p>
            <p>举头望明月，低头思故乡。</p>
          </wr-collapse-item>
          <wr-collapse-item title="春晓">
            <p>春眠不觉晓，处处闻啼鸟。</p>
            <p>夜来风雨声，花落知多少。</p>
          </wr-collapse-item>
          <wr-collapse-item title="江雪">
            <p>千山鸟飞绝，万径人踪灭。</p>
            <p>孤舟蓑笠翁，独钓寒江雪。</p>
          </wr-collapse-item>
        </wr-collapse>
      </div>
    </div>

    <div class="card">
      <p class="title">手风琴效果</p>
      <div>
        <wr-collapse arrow  accordion>
          <wr-collapse-item title="静夜思">
            <p>床前明月光，疑是地上霜。</p>
            <p>举头望明月，低头思故乡。</p>
          </wr-collapse-item>
          <wr-collapse-item title="春晓">
            <p>春眠不觉晓，处处闻啼鸟。</p>
            <p>夜来风雨声，花落知多少。</p>
          </wr-collapse-item>
          <wr-collapse-item title="江雪">
            <p>千山鸟飞绝，万径人踪灭。</p>
            <p>孤舟蓑笠翁，独钓寒江雪。</p>
          </wr-collapse-item>
        </wr-collapse>
      </div>
    </div>

    <div class="card">
      <p class="title">右侧内容</p>
      <div>
        <wr-collapse arrow >
          <wr-collapse-item title="静夜思" value="李白">
            <p>床前明月光，疑是地上霜。</p>
            <p>举头望明月，低头思故乡。</p>
          </wr-collapse-item>
          <wr-collapse-item title="春晓" value="孟浩然">
            <p>春眠不觉晓，处处闻啼鸟。</p>
            <p>夜来风雨声，花落知多少。</p>
          </wr-collapse-item>
          <wr-collapse-item title="江雪" value="柳宗元">
            <p>千山鸟飞绝，万径人踪灭。</p>
            <p>孤舟蓑笠翁，独钓寒江雪。</p>
          </wr-collapse-item>
        </wr-collapse>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
  data() {
    return {
      activeName: ["0"]
    };
  }
};
</script>
<style lang="scss" scoped>
.interim {
  height: auto;
}
.cell-demo {
  background: #f2f6fc;
  height: auto;
}

.col {
  background: #1989fa;
  color: #fff;
  text-align: center;
}
.card {
  width: 100%;
  padding: 0;
  box-shadow: none;
  background: #f2f6fc;
}
.title {
  padding-left: 10px;
}
.layout-demo {
  height: auto;
}
.radius {
  border-radius: 3px;
}
.margin-top {
  margin-top: 5px;
}
.col-dark {
  background: #3997f6;
  color: #fff;
  text-align: center;
}
.col-shallow {
  background: #87bdf3;
  color: #fff;
  text-align: center;
}
</style>
