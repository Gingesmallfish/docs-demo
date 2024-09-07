export default [
    {text: '首页', link: '/', activeClass: '首页'},
    {
        text: '博客搭建',
        items: [{
            text: '博客搭建',
            items: [{
                text: 'VitePress搭建部署',
                link: '/博客搭建/VitePress/01.前言'
            }]
        }],
        activeMatch: '/博客搭建/'
    },

    // 基础知识
    {
        text: '基础知识',
        items: [{
            text: '基础知识',
            items: [
                {text: 'html', link: '/基础知识/html/01.基础知识'}
            ]
        }]
    }
]
