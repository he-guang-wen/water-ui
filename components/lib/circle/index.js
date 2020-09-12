import WrCircle from './src/circle.jsx'
WrCircle.install = function(Vue) {
    Vue.component(WrCircle.name, WrCircle)
}
export default WrCircle