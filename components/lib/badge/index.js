import wrBadge from './src/badge.vue'
wrBadge.install = (Vue) => {
    Vue.component(wrBadge.name, wrBadge)
}
export default wrBadge