import WrCircle from './src/circle.vue'
WrCircle.install = function(Vue) {
    Vue.component(WrCircle.name, WrCircle)
}
export default WrCircle