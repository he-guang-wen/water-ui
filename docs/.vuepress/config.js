module.exports = {
    base: "https://github.com/he-guang-wen/water-ui/tree/master/dist/",
    title: 'water-ui文档', // 设置网站标题
    description: 'water-ui',
    themeConfig: {
        nav: [
            // { text: '接口定义', link: '/apiword' },
        ],
        sidebar: [{
            title: "基础组件",
            children: [
                { text: 'buttom 按钮', path: '/basics/buttom' },
                { text: 'icon 图标', path: '/basics/icon' },
                { text: 'image 图片', path: '/basics/image' },
            ]
        }]
    }
}