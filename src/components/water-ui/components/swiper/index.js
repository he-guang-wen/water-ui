import wrSwiper from './src/swiper.vue'

wrSwiper.install = (vue) => {
    vue.component(wrSwiper.name, wrSwiper)
}
export default wrSwiper