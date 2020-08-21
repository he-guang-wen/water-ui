import WrSlider from './src/slider.vue'

WrSlider.install = (Vue) => {
    WrSlider.component(WrSlider.name, WrSlider)
}

export default WrSlider