import wrNoticeBar from './src/notice-bar.vue'
wrNoticeBar.install = (Vue) =>{
    Vue.component(wrNoticeBar.name,wrNoticeBar)
}
export default wrNoticeBar