"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("./lib/icon/index"));

var _index2 = _interopRequireDefault(require("./lib/loading/index"));

var _index3 = _interopRequireDefault(require("./lib/button/index"));

var _index4 = _interopRequireDefault(require("./lib/radio-group/index"));

var _index5 = _interopRequireDefault(require("./lib/radio/index"));

var _index6 = _interopRequireDefault(require("./lib/checkbox-group/index"));

var _index7 = _interopRequireDefault(require("./lib/checkbox/index"));

var _index8 = _interopRequireDefault(require("./lib/switch/index"));

var _index9 = _interopRequireDefault(require("./lib/input-number/index"));

var _index10 = _interopRequireDefault(require("./lib/field/index"));

var _index11 = _interopRequireDefault(require("./lib/picker/index"));

var _index12 = _interopRequireDefault(require("./lib/keyboard/index"));

var _index13 = _interopRequireDefault(require("./lib/rate/index"));

var _index14 = _interopRequireDefault(require("./lib/cell-group/index"));

var _index15 = _interopRequireDefault(require("./lib/cell/index"));

var _index16 = _interopRequireDefault(require("./lib/badge/index"));

var _index17 = _interopRequireDefault(require("./lib/popup/index"));

var _index18 = _interopRequireDefault(require("./lib/image/index"));

var _index19 = _interopRequireDefault(require("./lib/col/index"));

var _index20 = _interopRequireDefault(require("./lib/transition-animation/index"));

var _index21 = _interopRequireDefault(require("./lib/row/index"));

var _index22 = _interopRequireDefault(require("./lib/overlay/index"));

var _index23 = _interopRequireDefault(require("./lib/swipe-cell/index"));

var _index24 = _interopRequireDefault(require("./lib/swiper/index"));

var _index25 = _interopRequireDefault(require("./lib/swiper-item/index"));

var _index26 = _interopRequireDefault(require("./lib/back-top/index"));

var _index27 = _interopRequireDefault(require("./lib/nav-bar/index"));

var _tabBar = _interopRequireDefault(require("./lib/tab-bar"));

var _tabBarItem = _interopRequireDefault(require("./lib/tab-bar-item"));

var _index28 = _interopRequireDefault(require("./lib/tabs/index"));

var _index29 = _interopRequireDefault(require("./lib/tab-pane/index"));

var _index30 = _interopRequireDefault(require("./lib/index-bar/index"));

var _index31 = _interopRequireDefault(require("./lib/index-anchor/index"));

var _index32 = _interopRequireDefault(require("./lib/pagination/index"));

var _index33 = _interopRequireDefault(require("./lib/circle/index"));

var _index34 = _interopRequireDefault(require("./lib/progress/index"));

var _index35 = _interopRequireDefault(require("./lib/collapse/index"));

var _index36 = _interopRequireDefault(require("./lib/collapse-item/index"));

var _index37 = _interopRequireDefault(require("./lib/count-down/index"));

var _index38 = _interopRequireDefault(require("./lib/notice-bar/index"));

var _index39 = _interopRequireDefault(require("./lib/divider/index"));

var _index40 = _interopRequireDefault(require("./lib/disbounce/index"));

require("./style/iconfont/iconfont.css");

require("./style/scss/index.scss");

var _index42 = _interopRequireDefault(require("./lib/toast/index"));

var _index43 = _interopRequireDefault(require("./lib/action-sheet/index"));

var _index44 = _interopRequireDefault(require("./lib/dialog/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var components = [_index["default"], _index2["default"], _index3["default"], _index4["default"], _index5["default"], _index6["default"], _index7["default"], _index8["default"], _index9["default"], _index10["default"], _index11["default"], _index12["default"], _index13["default"], _index18["default"], _index15["default"], _index16["default"], _index17["default"], _index14["default"], _index19["default"], _index21["default"], _index24["default"], _index25["default"], _index22["default"], _index23["default"], _index26["default"], _index27["default"], _tabBar["default"], _tabBarItem["default"], _index28["default"], _index29["default"], _index30["default"], _index31["default"], _index32["default"], _index33["default"], _index34["default"], _index35["default"], _index36["default"], _index37["default"], _index38["default"], _index39["default"], _index20["default"], _index40["default"]];

var install = function install(Vue) {
  components.forEach(function (component) {
    Vue.component(component.name, component);
  });
  Vue.prototype.$wrToast = _index42["default"];
  Vue.prototype.$wrActionSheet = _index43["default"];
  Vue.prototype.$wrDialog = _index44["default"];
};
/* 支持使用标签的方式引入 Vue是全局变量时，自动install */


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var _default = {
  install: install,
  wrIcon: _index["default"],
  wrLoading: _index2["default"],
  wrButton: _index3["default"],
  wrRadioGroup: _index4["default"],
  wrRadio: _index5["default"],
  wrCheckboxGroup: _index6["default"],
  wrCheckbox: _index7["default"],
  wrSwitch: _index8["default"],
  WrInputNumber: _index9["default"],
  wrField: _index10["default"],
  wrPicker: _index11["default"],
  wrKeyboard: _index12["default"],
  wrRate: _index13["default"],
  wrImage: _index18["default"],
  wrCellGroup: _index14["default"],
  wrCell: _index15["default"],
  wrBadge: _index16["default"],
  wrPopup: _index17["default"],
  wrCol: _index19["default"],
  wrRow: _index21["default"],
  wrSwiper: _index24["default"],
  wrSwiperItem: _index25["default"],
  TransitionAnimation: _index20["default"],
  wrToast: _index42["default"],
  wrActionSheet: _index43["default"],
  wrDialog: _index44["default"],
  wrOverlay: _index22["default"],
  wrSwipeCell: _index23["default"],
  wrBackTop: _index26["default"],
  wrNavBar: _index27["default"],
  wrTabs: _index28["default"],
  wrTabPane: _index29["default"],
  wrIndexBar: _index30["default"],
  wrIndexAnchor: _index31["default"],
  wrCircle: _index33["default"],
  wrProgress: _index34["default"],
  wrCollapse: _index35["default"],
  wrCollapseItem: _index36["default"],
  wrCountDown: _index37["default"],
  wrNoticeBar: _index38["default"],
  wrPagination: _index32["default"],
  wrDivider: _index39["default"],
  wrDisbounce: _index40["default"]
};
exports["default"] = _default;