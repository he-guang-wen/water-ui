import wrOverlay from './src/overlay.vue'
wrOverlay.install = (Vue) => {
    Vue.component(wrOverlay.name, wrOverlay)
}
export default wrOverlay