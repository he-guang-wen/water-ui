<template>
  <div class="wr-back-top" v-if="show" :style="backTopStyle" @click="backTop">
    <slot>
      <div class="wr-back-top-wrap" :class="backTopWrapClass">
        <wr-icon name="rising"></wr-icon>
      </div>
    </slot>
  </div>
</template> 
<script>
import { ref, onMounted, computed, onBeforeUnmount } from "vue";
export default {
  name: "wrBackTop",
  props: {
    //触发滚动的对象
    target: {
      type: String,
    },
    //圆形
    round: {
      type: Boolean,
      default: false,
    },
    //距离顶部距离后显示
    top: {
      type: Number,
      default: 200,
    },
    //右边距离
    right: {
      type: Number,
      default: 10,
    },
    //底部距离
    bottom: {
      type: Number,
      default: 10,
    },
  },
  setup(props, context) {


    const scrollTop = ref(0);
    const el = ref(0);

    const backTopStyle = computed(() => {
      return {
        right: props.right + "px",
        bottom: props.bottom + "px",
      };
    });

    const backTopWrapClass = computed(() => {
      return {
        "wr-back-top-wrap--round": props.round,
      };
    });

    const show = computed(() => (props.top > scrollTop.value ? false : true));

    const handleScroll = () => {
      if (props.target) {
        scrollTop.value = el.value.scrollTop;
      } else {
        scrollTop.value =
          document.documentElement.scrollTop || document.body.scrollTop;
      }
    };

    const addEventListenerScroll = () => {
      el.value.addEventListener("scroll", handleScroll);
    };

    const backTop = (e) => {
      el.value.scrollTo(0, 0);
      context.emit("click", e);
    };

    onMounted(() => {
      el.value = props.target ? document.querySelector(props.target) : window;

      addEventListenerScroll();
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll");
    });

    return { scrollTop, el, backTopStyle, backTopWrapClass, show, backTop };
  },
};
</script>
<style lang="scss">
@import "./back-top.scss";
</style>