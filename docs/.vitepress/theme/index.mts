import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import Video from "./components/Video.vue"
import {h} from 'vue'
//import Layout from "./Layout.vue";
import MyLayout from "./components/MyLayout.vue";
import tags from './components/tags.vue'
import "vitepress-markdown-timeline/dist/theme/index.css";
import googleAnalytics from 'vitepress-plugin-google-analytics'
import mediumZoom from 'medium-zoom';
import {onMounted, watch, nextTick} from 'vue';
import {inBrowser} from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import {useData, useRoute} from 'vitepress';
import MNavLinks from './components/MNavLinks.vue'


export default {
    extends: DefaultTheme,
    Layout: tags,
    // ...DefaultTheme, //或者这样写也可
    MyLayout() {
        return h(DefaultTheme.Layout, null, {
            'aside-outline-before': () => h(MyLayout),
            //'doc-before': () => h(MyLayout2), // 第2个组件使用doc-before插槽
        })
    },
    enhanceApp({app, router}) {
        //注册群居组建
        app.component('Video', Video)
        //app.component('Layout', Layout)  // 暂时不支持
        googleAnalytics({
            id: 'G-Y0GK13LP7J', //跟踪ID，在analytics.google.com注册即可
        })
        if (inBrowser) {
            router.onAfterRouteChanged = () => {
                busuanzi.fetch()
            }
        }
        app.component('MNavLinks', MNavLinks)
    },
    setup() {
        const {frontmatter} = useData();
        const route = useRoute();
        const initZoom = () => {
            // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
            mediumZoom('.main img', {background: 'var(--vp-c-bg)'}); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
        };
        onMounted(() => {
            initZoom();
        });
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        );
        // giscus配置
        giscusTalk({
                repo: 'Galaxy2022new/MyPersonalBlogs', //仓库
                repoId: 'R_kgDOMeyWpg', //仓库ID
                category: 'Announcements', // 讨论分类
                categoryId: 'DIC_kwDOMeyWps4ChYJh', //讨论分类ID
                mapping: 'pathname',
                inputPosition: 'bottom',
                lang: 'zh-CN',
            },
            {
                frontmatter, route
            },
            //默认值为true，表示已启用，此参数可以忽略；
            //如果为false，则表示未启用
            //您可以使用“comment:true”序言在页面上单独启用它
            true
        );
    }
}
