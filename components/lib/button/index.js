import wrButton from './src/button.vue'

wrButton.install = function(Vue) {
    Vue.component(wrButton.name, wrButton)
}

export default wrButton