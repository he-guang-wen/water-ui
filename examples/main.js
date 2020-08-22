import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../lib/water-ui.css'
import Wui from '../components/index'
import "core-js/modules/es.promise";
import "core-js/modules/es.array.iterator";
Vue.use(Wui)
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
    // window.scrollTo(0, 0) 
    if (to.matched.length === 0) {
        next('/')
    } else {
        // if (window.parent && to.path != '/') window.parent.postMessage(to.path, '*');
        next()
    }



})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')