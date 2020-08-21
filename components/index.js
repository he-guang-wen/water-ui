import wrIcon from './lib/icon/index'
import wrLoading from './lib/loading/index'
import wrButton from './lib/button/index'
import wrRadioGroup from './lib/radio-group/index'
import wrRadio from './lib/radio/index'
import wrCheckboxGroup from './lib/checkbox-group/index'
import wrCheckbox from './lib/checkbox/index'
import wrSwitch from './lib/switch/index'
import WrInputNumber from './lib/input-number/index'
import wrField from './lib/field/index'
import wrPicker from './lib/picker/index'
import wrCellGroup from './lib/cell-group/index'
import wrCell from './lib/cell/index'
import wrBadge from './lib/badge/index'
import wrPopup from './lib/popup/index'
import wrImage from './lib/image/index'
import wrCol from './lib/col/index'
import TransitionAnimation from './lib/transition-animation/index'
import wrRow from './lib/row/index'
import wrOverlay from './lib/overlay/index'
import wrSwipeCell from './lib/swipe-cell/index'
import wrSwiper from './lib/swiper/index'
import wrSwiperItem from './lib/swiper-item/index'
import wrBackTop from './lib/back-top/index'
import wrNavBar from './lib/nav-bar/index'
import wrTabBar from './lib/tab-bar'
import wrTabBarItem from './lib/tab-bar-item'
import wrTabs from './lib/tabs/index'
import wrTabPane from './lib/tab-pane/index'
import wrIndexBar from './lib/index-bar/index'
import wrIndexAnchor from './lib/index-anchor/index'
import wrPagination from './lib/pagination/index'
import wrCircle from './lib/circle/index'
import wrProgress from './lib/progress/index'
import wrCollapse from './lib/collapse/index'
import wrCollapseItem from './lib/collapse-item/index'
import wrCountDown from './lib/count-down/index'
import wrNoticeBar from './lib/notice-bar/index'
import wrDivider from './lib/divider/index'
import wrDisbounce from './lib/disbounce/index'
import './style/iconfont/iconfont.css'
import './style/scss/index.scss'



import wrToast from './lib/toast/index'
import wrActionSheet from './lib/action-sheet/index'
import wrDialog from './lib/dialog/index'
const components = [
    wrIcon,
    wrLoading,
    wrButton,
    wrRadioGroup,
    wrRadio,
    wrCheckboxGroup,
    wrCheckbox,
    wrSwitch,
    WrInputNumber,
    wrField,
    wrPicker,
    wrImage,
    wrCell,
    wrBadge,
    wrPopup,
    wrCellGroup,
    wrCol,
    wrRow,
    wrSwiper,
    wrSwiperItem,
    wrOverlay,
    wrSwipeCell,
    wrBackTop,
    wrNavBar,
    wrTabBar,
    wrTabBarItem,
    wrTabs,
    wrTabPane,
    wrIndexBar,
    wrIndexAnchor,
    wrPagination,
    wrCircle,
    wrProgress,
    wrCollapse,
    wrCollapseItem,
    wrCountDown,
    wrNoticeBar,
    wrDivider,
    TransitionAnimation,
    wrDisbounce
]

const install = function(Vue) {
    components.forEach(function(component) {
        Vue.component(component.name, component)
    })
    Vue.prototype.$wrToast = wrToast
    Vue.prototype.$wrActionSheet = wrActionSheet
    Vue.prototype.$wrDialog = wrDialog

}

/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    wrIcon,
    wrLoading,
    wrButton,
    wrRadioGroup,
    wrRadio,
    wrCheckboxGroup,
    wrCheckbox,
    wrSwitch,
    WrInputNumber,
    wrField,
    wrPicker,
    wrImage,
    wrCellGroup,
    wrCell,
    wrBadge,
    wrPopup,
    wrCol,
    wrRow,
    wrSwiper,
    wrSwiperItem,
    TransitionAnimation,
    wrToast,
    wrActionSheet,
    wrDialog,
    wrOverlay,
    wrSwipeCell,
    wrBackTop,
    wrNavBar,
    wrTabs,
    wrTabPane,
    wrIndexBar,
    wrIndexAnchor,
    wrCircle,
    wrProgress,
    wrCollapse,
    wrCollapseItem,
    wrCountDown,
    wrNoticeBar,
    wrPagination,
    wrDivider,
    wrDisbounce
}