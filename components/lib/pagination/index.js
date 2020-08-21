import wrPagination from './src/pagination.vue'
wrPagination.install = (Vue) => {
    Vue.component(wrPagination.name, wrPagination)
}
export default wrPagination