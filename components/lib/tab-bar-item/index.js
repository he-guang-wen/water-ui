import wrTabBarItem from './src/tab-bar-item.vue'
wrTabBarItem.install = (Vue) => {
    Vue.components(wrTabBarItem.name, wrTabBarItem)
}
export default wrTabBarItem