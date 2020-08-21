import wrToast from './src/toast.vue'
import Vue from 'vue';
let wrToastBox;
let wrToastBoxNode;

wrToastBox ? '' : wrToastBox = Vue.extend(wrToast)
wrToastBoxNode ? '' : wrToastBoxNode = new wrToastBox().$mount()
const Toast = function(data) {
    let zIndex = wrToastBoxNode.zIndex + 1
    let show = true
    let dataType = Object.prototype.toString.call(data)
    let { duration, close = false, icon, row, type, mask, loadingType, color, background, iconColor, text, onOpen, onClose } = data

    type ? '' : type = "none"
    duration ? '' : duration = 2000
    mask ? '' : mask = false
    text ? '' : text = ''

    onOpen ? wrToastBoxNode.$once('onOpen', (e) => {
        onOpen(e)

    }) : ''
    onClose ? wrToastBoxNode.$once('onClose', (e) => {
        onClose(e)

    }) : ''

    if (dataType == '[object String]' || dataType == '[object Number]') {
        type = "none"
        text = data
    }

    wrToastBoxNode.setData({
        duration,
        close,
        mask,
        icon,
        text,
        zIndex,
        row,
        type,
        loadingType,
        color,
        background,
        iconColor,
        show
    })


}
let typeList = ['success', 'error', 'loading']
typeList.forEach((item) => {
    Toast[item] = (data) => {
        let dataType = Object.prototype.toString.call(data)
        let obj = {}
        if (dataType == '[object String]') {
            obj.text = data
        } else {
            obj = {...obj, ...data }
        }
        obj.type = item
        Toast(obj)
    }
})
Toast.hide = function() {
    wrToastBoxNode.hide()
}

document.body.appendChild(wrToastBoxNode.$el)

export default Toast