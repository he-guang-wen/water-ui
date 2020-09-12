import wrButton from './lib/button/index'
import wrCheckboxGroup from './lib/checkbox-group/index'
import wrCheckbox from './lib/checkbox/index'
import wrCellGroup from './lib/cell-group/index'
import wrCell from './lib/cell/index'
import wrBadge from './lib/badge/index'
import wrBackTop from './lib/back-top/index'
import wrCircle from './lib/circle/index'
import './style/iconfont/iconfont.css'
import './style/scss/index.scss'


import wrActionSheet from './lib/action-sheet/index'

const components = [
    wrButton,
    wrCheckboxGroup,
    wrCheckbox,
    wrCellGroup,
    wrCell,
    wrBadge,
    wrBackTop,
    wrCircle
]

const install = function(Vue) {
    components.forEach(function(component) {
        Vue.component(component.name, component)
    })
    Vue.config.globalProperties.$wrActionSheet = wrActionSheet

}

/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    wrButton,
    wrCheckboxGroup,
    wrCheckbox,
    wrCellGroup,
    wrCell,
    wrBadge,
    wrBackTop,
    wrCircle
}