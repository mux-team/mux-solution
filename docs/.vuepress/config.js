module.exports = {
    title: '体验解决方案',
    description: '打造极致的移动站点体验',
    base: '/mux-solution/',
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {text: '文档', link: '/wiki/'},
            {text: 'Github', link: 'https://github.com/mux-team/mux-solution'}
        ],
        sidebar: {
            '/wiki/': [
                {
                    title: '概述',
                    collapsable: false,
                    children: [
                        '/wiki/',
                        '/wiki/overview/good-case',
                        '/wiki/overview/diff',
                        '/wiki/overview/outline'
                    ]
                },
                {
                    title: '速度',
                    collapsable: false,
                    children: [
                        '/wiki/speed/',
                        '/wiki/speed/img-compress',
                        '/wiki/speed/code-compress',
                        '/wiki/speed/cache'
                    ]
                },
                {
                    title: '样式',
                    collapsable: false,
                    children: [
                        '/wiki/style/',
                        '/wiki/style/font',
                        '/wiki/style/icon',
                        '/wiki/style/image',
                        '/wiki/style/layout',
                        '/wiki/style/color',
                        '/wiki/style/style-na'
                    ]
                },
                {
                    title: '交互',
                    collapsable: false,
                    children: [
                        '/wiki/interaction/',
                        '/wiki/interaction/sensible',
                        '/wiki/interaction/reduce-operation',
                        '/wiki/interaction/fluent',
                        '/wiki/interaction/interaction-na'
                    ]
                },
                {
                    title: '动效',
                    collapsable: false,
                    children: [
                        '/wiki/motion/',
                        '/wiki/motion/base',
                        '/wiki/motion/how-to-use',
                        '/wiki/motion/motion-na'
                    ]
                }
            ]
        }
    }
};
