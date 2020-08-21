import wrCountDown from './src/count-down.vue'

wrCountDown.install = (Vue) => {
    Vue.component(wrCountDown.name, wrCountDown)
}
export default wrCountDown