<template>
<!-- <wr-disbounce style="height:100%"> -->
  <div class="interim" id="interim">
    <router-view></router-view>
  </div>
<!-- </wr-disbounce> -->
</template>
<script>
    //   let startY = 0;
    //   let moveY = 0;
    //   let touchesY  = 0;
export default {
  name: "interim",
//   data() {
//     return {
//       isScroll_top: true,
//       isScrill_bottom: false
//     };
//   },
//   mounted() {
//     /*监听容器的 touch 触发事件处理逻辑*/ 
//     document
//       .getElementById("interim")
//       .addEventListener("touchstart", this.restoreEvent,false);
//     document
//       .getElementById("interim")
//       .addEventListener("touchmove", this.restoreEvent,false);
//     document
//       .getElementById("interim")
//       .addEventListener("touchend", this.restoreEvent,false);

//     /*监听容器 scroll 滚动事件处理逻辑*/
//     document.getElementById("interim").addEventListener("scroll", function() {
//       let tabView = document.getElementById("interim");
//       let contentHeight = tabView.scrollHeight, //内容高度
//         scrollTop = tabView.scrollTop, //滚动高度
//         viewHeight = tabView.clientHeight;

//       if (scrollTop == 0) {
//         this.isScroll_top = true;
//       } else {
//         this.isScroll_top = false;
//       }
//       if (scrollTop / (contentHeight - viewHeight) == 1) {
//         this.isScrill_bottom = true;
//       } else {
//         this.isScrill_bottom = false;
//       }
//     });
//   },
//   methods: {
//     restoreEvent(event) {

//       switch (event.type) {
//         case "touchstart":
//           startY = event.touches[0].clientY;
//           break;
//         case "touchmove":
//           moveY = event.touches[0].clientY;
//           //滑动距离
//           touchesY = startY - moveY;
       
//           //滚动条顶部
//           if (this.isScroll_top) {
//             if (touchesY < 0) {
//               event.preventDefault();
//             } else {
//               let scrollWrap = document.getElementById("interim");
//               if (scrollWrap.scrollHeight == scrollWrap.clientHeight) {
//                 event.preventDefault();
//               } else {
//                 event.stopPropagation();
//               }
//             }
//             //滚动条底部
//           } else if (this.isScrill_bottom) {
//             if (touchesY > 0) {
//               event.preventDefault();
//             } else {
//               event.stopPropagation();
//             }
//           }
//           break;
//         case "touchend":
//           break;
//       }
//     }
//   }
};
</script>
<style lang="scss">
// #interim {
// height: auto;
// }
</style>