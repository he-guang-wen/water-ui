import wrNavBar from './src/nav-bar.vue'
wrNavBar.install = (Vue) => {
    Vue.component(wrNavBar.name, wrNavBar)
}

export default wrNavBar