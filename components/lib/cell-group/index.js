import wrColGroup from './src/cell-group.vue'

wrColGroup.install = function(Vue) {
    Vue.component(wrColGroup.name, wrColGroup)
}

export default wrColGroup