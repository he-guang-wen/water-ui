import wrTabBar from './src/tab-bar.vue'
wrTabBar.install = (Vue) => {
    Vue.components(wrTabBar.name, wrTabBar)
}
export default wrTabBar