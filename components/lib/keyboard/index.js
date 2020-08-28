import wrKeyboard from './src/keyboard.vue'

wrKeyboard.install = (Vue) => {
    Vue.component(wrKeyboard.name, wrKeyboard)
}
export default wrKeyboard