import {defineConfig} from 'vitepress'
import nav from "./navbar/nav.mjs";
import sidebar from "./sidebar/ sidebar.mjs";
import {transformerTwoslash} from '@shikijs/vitepress-twoslash'
// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/docs-demo/",
    lang: 'zh-CN',
    title: "Gingesmallfish文档",
    description: "在线文档，Vue.js,React Webpack JavaScript CSS html",
    srcDir: 'docs',
    // 最后的跟新的时间
    lastUpdated: true,

    head: [["link", {rel: "icon", href: "/logo.png"}],],
    // 代码高亮
    markdown: {
        codeTransformers: [
            transformerTwoslash()
        ]
    },

    themeConfig: {
        outlineTitle: '文章目录',
        logo: './logo.png',
        editLink: {
            // 这里是自己的厂库
            pattern: 'https://github.com/Gingesmallfish/Gingesmallfish.github.io',
            text: '在 github 上编辑此页'
        },
        // https://vitepress.dev/reference/default-theme-config

        nav: {...nav} as any,
        // 设置搜索框的样式
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档",
                    },
                    modal: {
                        noResultsText: "无法找到相关结果",
                        resetButtonTitle: "清除查询条件",
                        footer: {
                            selectText: "选择",
                            navigateText: "切换",
                        },
                    },
                },
            },
        },
        sidebar: {...sidebar} as any,


        // 首页页脚
        footer: {
            copyright: '姜小鱼版权所有 © 2023-2024 创作不易请尊重他人劳动成果，未经授权禁止转载！',
        }

    },
    // 打包主题设置
    vite: {
        ssr: {
            noExternal: [
                '@escook/vitepress-theme',
                'vitepress'
            ]
        }
    }
})
