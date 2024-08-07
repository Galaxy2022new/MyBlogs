import {defineConfig} from 'vitepress'
import {nav} from './configs'
import timeline from "vitepress-markdown-timeline";
//import { generateSidebar } from 'vitepress-sidebar';  // 先不搞这个

const wechatIcon = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1711208744771" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4250" data-darkreader-inline-fill="" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M690.1 377.4c5.9 0 11.8 0.2 17.6 0.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6 5.5 3.9 9.1 10.3 9.1 17.6 0 2.4-0.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-0.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-0.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4 0.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-0.1 17.8-0.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8z m-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1z m-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1z" p-id="4251"></path><path d="M866.7 792.7c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-0.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7 2.4 0 4.7-0.9 6.4-2.6 1.7-1.7 2.6-4 2.6-6.4 0-2.2-0.9-4.4-1.4-6.6-0.3-1.2-7.6-28.3-12.2-45.3-0.5-1.9-0.9-3.8-0.9-5.7 0.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9z m179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c-0.1 19.8-16.2 35.9-36 35.9z" p-id="4252"></path></svg>'
const qqIcon = '<?xml version="1.0" standalone="no"?><svg t="1722660037004" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1457" width="200" height="200"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="1458"></path></svg>'
const csdnIcon = '<?xml version="1.0" standalone="no"?><svg t="1722660944719" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2759" width="200" height="200"><path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z" fill="#CE000D" p-id="2760"></path></svg>'

// https://vitepress.dev/reference/site-config
// @ts-ignore
export default defineConfig({
    base: '/',  //网站部署的路径，默认根目录
    logo: '/blog_logo.png',
    title: "Starry's Blog",
    description: "A Personal Blog",
    ignoreDeadLinks: true, //忽略死链接
    head: [
        ['link', {rel: 'icon', type: 'image/png', href: '/blog_logo.png'}],
    ],
    //markdown配置
    markdown: {
        //行号显示
        lineNumbers: true,
        image: {
            // 开启图片懒加载
            lazyLoading: true
        },
        //时间线
        config: (md) => {
            md.use(timeline);
        },
    },
    themeConfig: {
        logo: '/blog_logo.png',
        // https://vitepress.dev/reference/default-theme-config
        //站点地图,为站点生成 sitemap.xml 文件
        sitemap: {
            hostname: 'https://StarryBlogs.com'
        },
        //手机端深浅模式文字修改
        darkModeSwitchLabel: '深浅模式',
        //本地搜索
        search: {
            provider: 'local'
        },
        //页脚
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-2026 present Starry Fan',
        },
        //侧边栏文字更改(移动端)
        sidebarMenuLabel: '目录',
        //返回顶部文字修改
        returnToTopLabel: '返回顶部',
        //编辑本页
        editLink: {
            pattern: 'https://github.com/Galaxy2022new/MyBlogs', // 改成自己的仓库 (等待部署)
            text: '在GitHub编辑本页'
        },
        //自定义上下页名
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },

        /*
        export default defineConfig({

            themeConfig: {
                //导航栏
                nav: [
                    {text: '首页', link: '/'},
                    {
                        text: '指南',
                        items: [
                            {
                                // 分组标题1
                                text: '介绍',
                                items: [
                                    {text: '前言', link: '/preface'},
                                ],
                            },
                            {
                                // 分组标题2
                                text: '基础设置',
                                items: [
                                    {text: '快速上手', link: '/getting-started'},
                                    {text: '配置', link: '/configuration'},
                                    {text: '页面', link: '/page'},
                                    {text: 'Frontmatter', link: '/frontmatter'},
                                ],
                            },
                            {
                                // 分组标题3
                                text: '进阶玩法',
                                items: [
                                    {text: 'Markdown', link: '/Markdown'},
                                    {text: '静态部署', link: '/assets'},
                                ],
                            },
                        ],
                    },
                    {text: 'VitePress', link: 'https://vitepress.dev/'},
                ],
            },

        })
        */  // 给下拉菜单赋予分组标题，就要再次嵌套

        //导航栏
        nav,
        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            },
            {
                text: 'Blogs',
                link: '/src/blogs',
                collapsed: false,  // 侧边栏折叠
                items: [
                    {
                        text: 'Algorithm',
                        collapsed: false,  // 侧边栏折叠
                        items: [
                            {
                                text: '深入解析：蓝桥杯多进制计算器题目的Python实现',
                                link: '/src/blogs/algorithm/lanqiao_2017_national'
                            },
                        ]
                        , link: '/src/blogs/algorithm'
                    },
                    {text: 'Basic', link: '/src/blogs/basic'},
                    {text: 'Hardware', link: '/src/blogs/hardware'},
                    {text: 'Interview', link: '/src/blogs/interview'},
                ]
            },
            {
                text: 'Myself',
                items: [
                    {text: 'About Me', link: '/src/myself'},
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'},
            {icon: {svg: wechatIcon}, link: '/src/myself/index'},
            {icon: {svg: qqIcon}, link: '/src/myself/index'},
            {icon: {svg: csdnIcon}, link: 'https://blog.csdn.net/weixin_73541770?spm=1011.2124.3001.5343'}
        ]
    }
})
