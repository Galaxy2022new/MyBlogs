/* configs/nav.ts */
import type {DefaultTheme} from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    {text: 'Home', link: '/'},
    {text: 'Examples', link: '/markdown-examples'},
    {
        text: 'Blogs',
        items: [  // 下拉导航
            {text: '算法', link: '/src/blogs/algorithm'},
            {text: '基础小补', link: '/src/blogs/basic'},
            {text: 'Hardware', link: '/src/blogs/hardware'},
            {text: 'Interview', link: '/src/blogs/interview'},
        ],
        //link: '/src/blogs'
    },
    {text: 'Myself', link: '/src/myself'}
]
