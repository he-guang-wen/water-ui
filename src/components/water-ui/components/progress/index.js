import WrProgress from './src/progress.vue'
WrProgress.install = function(Vue){
    Vue.component(WrProgress.name,WrProgress)
}
export default WrProgress