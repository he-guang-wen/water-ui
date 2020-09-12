import ActionSheet from './src/action-sheet.vue'
import { createApp, nextTick } from 'vue';

const ActionSheetContainer = document.createElement("div")
document.body.appendChild(ActionSheetContainer)

const ActionSheetBox = createApp(ActionSheet)
const ActionSheetInstance = ActionSheetBox.mount(ActionSheetContainer)

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
        hideOverlay,
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

    console.log(ActionSheetInstance, 'ActionSheetInstanceActionSheetInstance')
    nextTick(() => {
        ActionSheetInstance.event.on("open", (e) => {
            data.onOpen ? data.onOpen(e) : ''
        })

        ActionSheetInstance.event.on("close", (e) => {
            data.onClose ? data.onClose(e) : ''
        })


        ActionSheetInstance.event.on("select", (e) => {
            data.onSelect ? data.onSelect(e) : ''
        })

        ActionSheetInstance.event.on("cancel", (e) => {
            data.onCancel ? data.onCancel(e) : ''
        })
    })


    // watch(() => { return ActionSheetInstance.show }, (value) => {
    //         if (value) {
    //             data.onOpen ? data.onOpen() : ''
    //         } else {
    //             data.onClose ? data.onClose() : ''
    //         }
    //     })
    // ActionSheetInstance.$el.nextSibling.addEventListener("open", () => {
    //     data.onOpen ? data.onOpen() : ''
    // })

    // window.$el.addEventListener("close", () => {
    //     data.onClose ? data.onClose() : ''
    // })

    // ActionSheetInstance.$on('open', (e) => {
    //     data.onOpen ? data.onOpen(e) : ''
    // })
    // ActionSheetInstance.$on('close', (e) => {
    //     data.onClose ? data.onClose(e) : ''
    // })


}
ActionSheet.close = () => {
    ActionSheetInstance.show = false
}



export default wrActionSheet