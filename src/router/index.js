import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/basics',
        name: 'basics',
        meta: { title: "基础组件" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        children: [{
            path: '/basics/button',
            name: 'button',
            meta: { title: "Button 按钮" },
            component: () =>
                import ( /* webpackChunkName: "Botton" */ '../views/basics/button.vue')
        }]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router