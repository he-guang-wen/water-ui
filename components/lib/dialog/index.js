import Dialog from './src/dialog.vue'
import Vue from 'vue'

const wrDialogBox = Vue.extend(Dialog)
const wrDialogInstance = new wrDialogBox().$mount()

const wrDialog = (data) => {
    let {
        zIndex,
        title,
        content,
        contentAlign,
        hideConfirm,
        hideCancel,
        hideFooter,
        confirmText,
        cancelText,
        showIconClose,
        render,
        hideOverlay
    } = data
    zIndex ? '' : zIndex = 1003
    title ? '' : title = ''
    content ? '' : content = ''
    contentAlign ? '' : contentAlign = 'center'
    hideConfirm ? '' : hideConfirm = false
    hideCancel ? '' : hideCancel = false
    hideFooter ? '' : hideFooter = false
    confirmText ? '' : confirmText = '确认'
    cancelText ? '' : cancelText = '取消'
    showIconClose ? '' : showIconClose = false
    hideOverlay ? '' : hideOverlay = false
    render ? render = render(wrDialogInstance.$createElement) : ''

    wrDialogInstance.setData({
        zIndex,
        title,
        content,
        contentAlign,
        hideConfirm,
        hideCancel,
        hideFooter,
        confirmText,
        cancelText,
        showIconClose,
        render,
        hideOverlay
    })
    wrDialogInstance.show = true

    // ... some code

    return new Promise((resolve, reject) => {
        wrDialogInstance.$once('handle', (val) => {
            if (val == 'confirm') {
                resolve('confirm');
            } else if (val == 'cancel') {
                reject('cancel');
            }
        })

    });




}
wrDialog.alert = (data) => {
    data.hideCancel = true
    wrDialog(data)
}
wrDialog.close = () => {
    wrDialogInstance.show = false
}
document.body.appendChild(wrDialogInstance.$el)

export default wrDialog