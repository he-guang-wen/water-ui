import wrCheckboxGroup from './src/checkbox-group.vue'

wrCheckboxGroup.install = (Vue) =>{
    Vue.component(wrCheckboxGroup.name,wrCheckboxGroup)
}

export default wrCheckboxGroup