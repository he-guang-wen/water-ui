import wrSwiperItem from './src/swiper-item.vue'

wrSwiperItem.install = (vue) => {
    vue.component(wrSwiperItem.name, wrSwiperItem)
}
export default wrSwiperItem