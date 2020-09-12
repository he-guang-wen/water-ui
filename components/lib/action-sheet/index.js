import ActionSheet from './src/action-sheet.vue'
import Vue from 'vue';

const ActionSheetBox = Vue.extend(ActionSheet)
const ActionSheetInstance = new ActionSheetBox().$mount()

const wrActionSheet = function(data) {
    let {
        list,
        borderTopRadius,
        description,
        hideCancel,
        cancelText,
        mask,
        closeOnItem,
        zIndex,
        hideOverlay
    } = data
    list ? '' : list = []
    borderTopRadius ? '' : borderTopRadius = 12
    description ? '' : description = ''
    hideCancel ? '' : hideCancel = false
    cancelText ? '' : cancelText = "取消"
    mask ? '' : mask = false
    closeOnItem ? '' : closeOnItem = false
    zIndex ? '' : zIndex = 1002
    hideOverlay ? '' : hideOverlay = false
    ActionSheetInstance.setDate({
        list,
        borderTopRadius,
        description,
        hideCancel,
        cancelText,
        mask,
        closeOnItem,
        zIndex,
        hideOverlay
    })
    ActionSheetInstance.show = true
    ActionSheetInstance.$once('open', (e) => {
        data.onOpen ? data.onOpen(e) : ''
    })
    ActionSheetInstance.$once('close', (e) => {
        data.onClose ? data.onClose(e) : ''
    })

}
ActionSheet.close = () => {
    ActionSheetInstance.show = false
}
document.body.appendChild(ActionSheetInstance.$el)
export default wrActionSheet