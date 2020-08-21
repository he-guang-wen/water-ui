import wrLoading from './src/loading.vue'

wrLoading.install = function(Vue) {
    Vue.component(wrLoading.name, wrLoading)
}
export default wrLoading