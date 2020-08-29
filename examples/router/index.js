import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
Vue.use(VueRouter)
const Interim = () =>
    import ( /* webpackChunkName: "Interim" */ '../views/interim.vue')


const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/basics',
        name: 'basics',
        meta: { title: "基础组件" },
        component: Interim,
        children: [{
                path: '/basics/button',
                name: 'button',
                meta: { title: "Button 按钮" },
                component: () =>
                    import ( /* webpackChunkName: "Botton" */ '../views/basics/button.vue')
            }, {
                path: '/basics/icon',
                name: 'icon',
                meta: { title: "Icon 图标" },
                component: () =>
                    import ( /* webpackChunkName: "Icon" */ '../views/basics/icon.vue')
            }, {
                path: '/basics/image',
                name: 'image',
                meta: { title: "Image 图片" },
                component: () =>
                    import ( /* webpackChunkName: "Image" */ '../views/basics/image.vue')
            }, {
                path: '/basics/layout',
                name: 'layout',
                meta: { title: "Layout 布局" },
                component: () =>
                    import ( /* webpackChunkName: "Layout" */ '../views/basics/layout.vue')
            }, {
                path: '/basics/cell',
                name: 'cell',
                meta: { title: "Cell 单元格" },
                component: () =>
                    import ( /* webpackChunkName: "Cell" */ '../views/basics/cell.vue')
            },
            {
                path: '/basics/badge',
                name: 'badge',
                meta: { title: "Badge 标徽" },
                component: () =>
                    import ( /* webpackChunkName: "Badge" */ '../views/basics/badge.vue')
            },
            {
                path: '/basics/popup',
                name: 'popup',
                meta: { title: "Popup 弹出层" },
                component: () =>
                    import ( /* webpackChunkName: "Popup" */ '../views/basics/popup.vue')
            },


        ]
    }, {
        path: '/form',
        name: 'form',
        meta: { title: "表单组件" },
        component: Interim,
        children: [{
                path: '/form/checkbox',
                name: 'checkbox',
                meta: { title: "Checkbox 复选框" },
                component: () =>
                    import ( /* webpackChunkName: "Checkbox" */ '../views/form/checkbox.vue')

            },
            {
                path: '/form/radio',
                name: 'radio',
                meta: { title: "Radio 单选框" },
                component: () =>
                    import ( /* webpackChunkName: "Radio" */ '../views/form/radio.vue')
            },
            {
                path: '/form/switch',
                name: 'switch',
                meta: { title: "Switch 开关" },
                component: () =>
                    import ( /* webpackChunkName: "Switch" */ '../views/form/switch.vue')

            },
            {
                path: '/form/input-number',
                name: 'input-number',
                meta: { title: "InputNumber 步进器" },
                component: () =>
                    import ( /* webpackChunkName: "InputNumber" */ '../views/form/input-number.vue')

            },
            {
                path: '/form/field',
                name: 'field',
                meta: { title: "Field 输入框" },
                component: () =>
                    import ( /* webpackChunkName: "Field" */ '../views/form/field.vue')

            },
            {
                path: '/form/picker',
                name: 'picker',
                meta: { title: "picker 选择器" },
                component: () =>
                    import ( /* webpackChunkName: "Picker" */ '../views/form/picker.vue')

            },
            {
                path: '/form/keyboard',
                name: 'keyboard',
                meta: { title: "Keyboard 键盘" },
                component: () =>
                    import ( /* webpackChunkName: "Keyboard" */ '../views/form/keyboard.vue')
            },
            {
                path: '/form/rate',
                name: 'rate',
                meta: { title: "Rate 评分" },
                component: () =>
                    import ( /* webpackChunkName: "Rate" */ '../views/form/rate.vue')
            },

        ]
    },
    {

        path: '/feedback',
        meta: { title: '反馈组件' },
        component: Interim,
        children: [{
            path: '/feedback/dialog',
            name: 'dialog',
            meta: { title: 'Dialog 弹出框' },
            component: () =>
                import ( /* webpackChunkName: "Dialog" */ '../views/feedback/dialog.vue')
        }, {
            path: '/feedback/toast',
            name: 'toast',
            meta: { title: 'Toast 轻提示' },
            component: () =>
                import ( /* webpackChunkName: "Toast" */ '../views/feedback/toast.vue')
        }, {
            path: '/feedback/action-sheet',
            name: 'action-sheet',
            meta: { title: 'ActionSheet 动作面板' },
            component: () =>
                import ( /* webpackChunkName: "ActionSheet" */ '../views/feedback/action-sheet.vue')
        }, {
            path: '/feedback/overlay',
            name: 'overlay',
            meta: { title: 'Overlay 遮罩层' },
            component: () =>
                import ( /* webpackChunkName: "Overlay" */ '../views/feedback/overlay.vue')
        }, {
            path: '/feedback/swipe-cell',
            name: 'swipe-cell',
            meta: { title: 'SwipeCell 滑动单元格' },
            component: () =>
                import ( /* webpackChunkName: "SwipeCell" */ '../views/feedback/swipe-cell.vue')
        }]
    },
    {
        path: '/navigation',
        name: 'navigation',
        meta: { title: "导航组件" },
        component: Interim,
        children: [{
                path: '/navigation/nav-bar',
                name: 'nav-bar',
                meta: { title: "NavBar 导航栏" },
                component: () =>
                    import ( /* webpackChunkName: "NavBar" */ '../views/navigation/nav-bar.vue')
            },
            {
                path: '/navigation/tabs',
                name: 'tabs',
                meta: { title: "Tabs 标签页" },
                component: () =>
                    import ( /* webpackChunkName: "Tabs" */ '../views/navigation/tabs.vue')
            }, {
                path: '/navigation/index-bar',
                name: 'index-bar',
                meta: { title: "IndexBar 索引栏" },
                component: () =>
                    import ( /* webpackChunkName: "IndexBar" */ '../views/navigation/index-bar.vue')
            },
            {
                path: '/navigation/pagination',
                name: 'pagination',
                meta: { title: "Pagination 分页" },
                component: () =>
                    import ( /* webpackChunkName: "Pagination" */ '../views/navigation/pagination.vue')
            },

            {
                path: '/navigation/back-top',
                name: 'back-top',
                meta: { title: "BackTop 返回顶部" },
                component: () =>
                    import ( /* webpackChunkName: "BackTop" */ '../views/navigation/back-top.vue')
            },
            {
                path: '/navigation/tab-bar',
                name: 'tab-bar',
                meta: { title: "TabBar 标签栏" },
                component: () =>
                    import ( /* webpackChunkName: "BackTop" */ '../views/navigation/tab-bar.vue')
            }
        ]
    },
    {

        path: '/exhibition',
        meta: { title: '展示组件' },
        component: Interim,
        children: [{
                path: '/exhibition/circle',
                name: 'circle',
                meta: { title: 'Circle 环形进度条' },
                component: () =>
                    import ( /* webpackChunkName: "Circle" */ '../views/exhibition/circle.vue')
            }, {
                path: '/exhibition/progress',
                name: 'progress',
                meta: { title: 'Progress 进度条' },
                component: () =>
                    import ( /* webpackChunkName: "Progress" */ '../views/exhibition/progress.vue')
            }, {
                path: '/exhibition/collapse',
                name: 'collapse',
                meta: { title: 'Collapse 折叠面板' },
                component: () =>
                    import ( /* webpackChunkName: "Progress" */ '../views/exhibition/collapse.vue')
            }, {
                path: '/exhibition/count-down',
                name: 'count-down',
                meta: { title: 'CountDown 倒计时' },
                component: () =>
                    import ( /* webpackChunkName: "CountDown" */ '../views/exhibition/count-down.vue')
            }, {
                path: '/exhibition/notice-bar',
                name: 'notice-bar',
                meta: { title: 'NoticeBar 通知栏' },
                component: () =>
                    import ( /* webpackChunkName: "NoticeBar" */ '../views/exhibition/notice-bar.vue')
            }, {
                path: '/exhibition/divider',
                name: 'divider',
                meta: { title: 'Divider 分割线' },
                component: () =>
                    import ( /* webpackChunkName: "Divider" */ '../views/exhibition/divider.vue')
            }, {
                path: '/exhibition/swiper',
                name: 'swiper',
                meta: { title: 'Swiper 轮播' },
                component: () =>
                    import ( /* webpackChunkName: "Swiper" */ '../views/exhibition/swiper.vue')
            }

        ]
    },


]

const router = new VueRouter({
    // mode: 'history',
    routes
})

export default router