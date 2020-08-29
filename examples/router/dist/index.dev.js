"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _home = _interopRequireDefault(require("../views/home.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var Interim = function Interim() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../views/interim.vue'));
  });
};

var routes = [{
  path: '/',
  name: 'home',
  component: _home["default"]
}, {
  path: '/basics',
  name: 'basics',
  meta: {
    title: "基础组件"
  },
  component: Interim,
  children: [{
    path: '/basics/button',
    name: 'button',
    meta: {
      title: "Button 按钮"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/basics/button.vue'));
      });
    }
  }, {
    path: '/basics/icon',
    name: 'icon',
    meta: {
      title: "Icon 图标"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/basics/icon.vue'));
      });
    }
  }, {
    path: '/basics/image',
    name: 'image',
    meta: {
      title: "Image 图片"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/basics/image.vue'));
      });
    }
  }, {
    path: '/basics/layout',
    name: 'layout',
    meta: {
      title: "Layout 布局"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/basics/layout.vue'));
      });
    }
  }, {
    path: '/basics/cell',
    name: 'cell',
    meta: {
      title: "Cell 单元格"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/basics/cell.vue'));
      });
    }
  }, {
    path: '/basics/badge',
    name: 'badge',
    meta: {
      title: "Badge 标徽"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/basics/badge.vue'));
      });
    }
  }, {
    path: '/basics/popup',
    name: 'popup',
    meta: {
      title: "Popup 弹出层"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/basics/popup.vue'));
      });
    }
  }]
}, {
  path: '/form',
  name: 'form',
  meta: {
    title: "表单组件"
  },
  component: Interim,
  children: [{
    path: '/form/checkbox',
    name: 'checkbox',
    meta: {
      title: "Checkbox 复选框"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/form/checkbox.vue'));
      });
    }
  }, {
    path: '/form/radio',
    name: 'radio',
    meta: {
      title: "Radio 单选框"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/form/radio.vue'));
      });
    }
  }, {
    path: '/form/switch',
    name: 'switch',
    meta: {
      title: "Switch 开关"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/form/switch.vue'));
      });
    }
  }, {
    path: '/form/input-number',
    name: 'input-number',
    meta: {
      title: "InputNumber 步进器"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/form/input-number.vue'));
      });
    }
  }, {
    path: '/form/field',
    name: 'field',
    meta: {
      title: "Field 输入框"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/form/field.vue'));
      });
    }
  }, {
    path: '/form/picker',
    name: 'picker',
    meta: {
      title: "picker 选择器"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/form/picker.vue'));
      });
    }
  }, {
    path: '/form/keyboard',
    name: 'keyboard',
    meta: {
      title: "Keyboard 键盘"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/form/keyboard.vue'));
      });
    }
  }, {
    path: '/form/rate',
    name: 'rate',
    meta: {
      title: "Rate 评分"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/form/rate.vue'));
      });
    }
  }]
}, {
  path: '/feedback',
  meta: {
    title: '反馈组件'
  },
  component: Interim,
  children: [{
    path: '/feedback/dialog',
    name: 'dialog',
    meta: {
      title: 'Dialog 弹出框'
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/feedback/dialog.vue'));
      });
    }
  }, {
    path: '/feedback/toast',
    name: 'toast',
    meta: {
      title: 'Toast 轻提示'
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/feedback/toast.vue'));
      });
    }
  }, {
    path: '/feedback/action-sheet',
    name: 'action-sheet',
    meta: {
      title: 'ActionSheet 动作面板'
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/feedback/action-sheet.vue'));
      });
    }
  }, {
    path: '/feedback/overlay',
    name: 'overlay',
    meta: {
      title: 'Overlay 遮罩层'
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/feedback/overlay.vue'));
      });
    }
  }, {
    path: '/feedback/swipe-cell',
    name: 'swipe-cell',
    meta: {
      title: 'SwipeCell 滑动单元格'
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/feedback/swipe-cell.vue'));
      });
    }
  }]
}, {
  path: '/navigation',
  name: 'navigation',
  meta: {
    title: "导航组件"
  },
  component: Interim,
  children: [{
    path: '/navigation/nav-bar',
    name: 'nav-bar',
    meta: {
      title: "NavBar 导航栏"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/navigation/nav-bar.vue'));
      });
    }
  }, {
    path: '/navigation/tabs',
    name: 'tabs',
    meta: {
      title: "Tabs 标签页"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/navigation/tabs.vue'));
      });
    }
  }, {
    path: '/navigation/index-bar',
    name: 'index-bar',
    meta: {
      title: "IndexBar 索引栏"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/navigation/index-bar.vue'));
      });
    }
  }, {
    path: '/navigation/pagination',
    name: 'pagination',
    meta: {
      title: "Pagination 分页"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/navigation/pagination.vue'));
      });
    }
  }, {
    path: '/navigation/back-top',
    name: 'back-top',
    meta: {
      title: "BackTop 返回顶部"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/navigation/back-top.vue'));
      });
    }
  }, {
    path: '/navigation/tab-bar',
    name: 'tab-bar',
    meta: {
      title: "TabBar 标签栏"
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/navigation/tab-bar.vue'));
      });
    }
  }]
}, {
  path: '/exhibition',
  meta: {
    title: '展示组件'
  },
  component: Interim,
  children: [{
    path: '/exhibition/circle',
    name: 'circle',
    meta: {
      title: 'Circle 环形进度条'
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/exhibition/circle.vue'));
      });
    }
  }, {
    path: '/exhibition/progress',
    name: 'progress',
    meta: {
      title: 'Progress 进度条'
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/exhibition/progress.vue'));
      });
    }
  }, {
    path: '/exhibition/collapse',
    name: 'collapse',
    meta: {
      title: 'Collapse 折叠面板'
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/exhibition/collapse.vue'));
      });
    }
  }, {
    path: '/exhibition/count-down',
    name: 'count-down',
    meta: {
      title: 'CountDown 倒计时'
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/exhibition/count-down.vue'));
      });
    }
  }, {
    path: '/exhibition/notice-bar',
    name: 'notice-bar',
    meta: {
      title: 'NoticeBar 通知栏'
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/exhibition/notice-bar.vue'));
      });
    }
  }, {
    path: '/exhibition/divider',
    name: 'divider',
    meta: {
      title: 'Divider 分割线'
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/exhibition/divider.vue'));
      });
    }
  }, {
    path: '/exhibition/swiper',
    name: 'swiper',
    meta: {
      title: 'Swiper 轮播'
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/exhibition/swiper.vue'));
      });
    }
  }]
}];
var router = new _vueRouter["default"]({
  // mode: 'history',
  routes: routes
});
var _default = router;
exports["default"] = _default;