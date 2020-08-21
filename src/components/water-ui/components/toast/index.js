import wrToast from './src/toast.vue'
import Vue from 'vue';
let wrToastBox;
let wrToastBoxNode;

wrToastBox ? '' : wrToastBox = Vue.extend(wrToast)
wrToastBoxNode ? '' : wrToastBoxNode = new wrToastBox().$mount()
const Toast = function(data) {


    let { duration = 2000, close = false, icon, row, type, color, background, iconColor, text = '测试', onOpen, onClose } = data
    let zIndex = wrToastBoxNode.zIndex + 1
    let show = true
    onOpen ? wrToastBoxNode.$once('onOpen', (e) => {
        onOpen(e)

    }) : ''
    onClose ? wrToastBoxNode.$once('onClose', (e) => {
        onClose(e)

    }) : ''
    wrToastBoxNode.setData({
        duration,
        close,
        icon,
        text,
        zIndex,
        row,
        type,
        color,
        background,
        iconColor,
        show
    })

}

Toast.hide = function() {
    wrToastBoxNode.hide()
}

document.body.appendChild(wrToastBoxNode.$el)

export default Toast