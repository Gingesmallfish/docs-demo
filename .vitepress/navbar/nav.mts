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
                {text: 'html', link: '/基础知识/html/01.基础知识'},
                {text: 'css', link:'/基础知识/css/01.css基础'},
                {text: 'js', link: '基础知识/js/01.js基础'}
            ]
        }]
    },
    {
        text: '工具',
        items: [{
            text: 'Git',
            items: [
                {text: '提交规范', link: '/工具/Git/git代码提交规范'}
            ]
        }]
    }
]
