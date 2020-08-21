import wrCell from './src/cell.vue'

wrCell.install = function(Vue) {
    Vue.component(wrCell.name, wrCell)
}

export default wrCell