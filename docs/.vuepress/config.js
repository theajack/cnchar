// 很多时候，我们引入自己的组件库，路径是不对的，
// 这时就需要引入path，并在后面的chainWebpack进行配置
// const path = require('path')
// function resolve (dir) {
//   return path.join(__dirname, '../../', dir)
// }

// -------------------！！！重要！！！！-----------------
// 为了更好的理解，以下所有配置，注释，须配合查看页面实际效果！

module.exports = {
    title: 'cnchar', // 标题
    description: '功能全面、多端支持的汉字拼音笔画js库', // 描述
    dest: './assets/v2', // 基本url
    base: '/cnchar/assets/v2/', // 基本url
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', {rel: 'icon', href: '/favicon.png'}], // 增加一个自定义的 favicon
    ],
    // dest: './dist', //打包位置
    port: 6868, // 端口号 谐音流弊流弊

    // 主题配置
    themeConfig: {
        // 顶部导航栏配置
        nav: [
            {text: '主页', link: '/'}, // 内部链接 以docs为根目录
            {text: '使用说明', link: '/guide/'},
            {
                text: '文档',
                // 这里是下拉列表展现形式。
                items: [
                    {text: 'cnchar', link: '/doc/cnchar/'},
                    {text: 'cnchar-poly', link: '/doc/poly/'},
                    {text: 'cnchar-order', link: '/doc/order/'},
                    {text: 'cnchar-trad', link: '/doc/trad/'},
                    {text: 'cnchar-draw', link: '/doc/draw/'},
                ],
            },
            {
                text: '关于作者',
                items: [
                    {text: 'GitHub地址', link: 'https://github.com/theajack'}, // 外部链接
                    {text: 'Gitee地址', link: 'http://gitee.com/theajack'},
                    {
                        text: 'CSDN账号',
                        link: 'https://blog.csdn.net/yanxiaomu',
                    },
                ],
            },
        ],
        // 这里使用的是多个侧边栏设置
        sidebar: {
            // 如果你不需要文档版本功能，只需去掉2.0，1.0文件夹，将md文件直接放在components文件夹下
            '/doc/cnchar/': [
                {
                    title: 'cnchar [拼音笔划]', // 必要的
                    path: '', // 如果你不想'基础组件'可点击并有对应说明，就直接设为空，或者不写,并且nav的link也不要指向 '/components/2.0/'而是'/components/2.0/catButton'
                    collapsable: false, // 可选的, 右侧侧边栏是否展开,默认值是 true
                    // 如果组件很多时，建议将children配置单独放到一个js文件中，然后进行引入
                    children: [
                        {
                            title: '快速使用',
                            path: './',
                        },
                        {
                            title: 'spell方法',
                            path: 'spell',
                        },
                        {
                            title: 'stroke方法',
                            path: 'stroke',
                        },
                        {
                            title: '其他api',
                            path: 'other',
                        },
                    ],
                },
            ],
            '/doc/poly/': [
                {
                    title: 'cnchar-order [多音词]',
                    path: '',
                    collapsable: false,
                    children: [
                        {
                            title: 'Button 按钮',
                            path: 'catButton',
                        },
                    ],
                },
                {
                    title: '基础组件1',
                    path: './', // 和上面的基础组件对应，这里基础组件1则可以点击，展示对应的介绍和说明，则此处设置为'./'，它会默认解析当前文件夹下的README.md。具体效果请查看页面进行对比
                },
            ],
            '/doc/order/': [
                {
                    title: 'cnchar-order [笔画笔顺]',
                    path: '',
                    collapsable: false,
                    children: [
                        {
                            title: 'Button 按钮',
                            path: 'catButton',
                        },
                    ],
                },
                {
                    title: '基础组件1',
                    path: './', // 和上面的基础组件对应，这里基础组件1则可以点击，展示对应的介绍和说明，则此处设置为'./'，它会默认解析当前文件夹下的README.md。具体效果请查看页面进行对比
                },
            ],
            '/doc/trad/': [
                {
                    title: 'cnchar-trad [繁体字]',
                    path: '',
                    collapsable: false,
                    children: [
                        {
                            title: 'Button 按钮',
                            path: 'catButton',
                        },
                    ],
                },
                {
                    title: '基础组件1',
                    path: './', // 和上面的基础组件对应，这里基础组件1则可以点击，展示对应的介绍和说明，则此处设置为'./'，它会默认解析当前文件夹下的README.md。具体效果请查看页面进行对比
                },
            ],
            '/doc/draw/': [
                {
                    title: 'cnchar-draw [汉字绘制]',
                    path: '',
                    collapsable: false,
                    children: [
                        {
                            title: 'Button 按钮',
                            path: 'catButton',
                        },
                    ],
                },
                {
                    title: '基础组件1',
                    path: './', // 和上面的基础组件对应，这里基础组件1则可以点击，展示对应的介绍和说明，则此处设置为'./'，它会默认解析当前文件夹下的README.md。具体效果请查看页面进行对比
                },
            ],
            '/guide/': [
                {
                    title: '使用说明',
                    path: '',
                    collapsable: false,
                    children: [
                        {
                            title: '简介',
                            path: './',
                        },
                        {
                            title: '快速上手',
                            path: 'start',
                        },
                        {
                            title: '几点说明',
                            path: 'tips',
                        },
                    ],
                },
            ],
        },
        sidebarDepth: 1, // 将同时提取markdown中h2，显示在侧边栏上
        lastUpdated: '最后更新于', // 文档更新时间：每个文件git最后提交的时间
    },

    markdown: {
        // lineNumbers: true // 代码块显示行号
    },

    plugins: [
        // 官方回到顶部插件
        '@vuepress/back-to-top',

        // 官方图片放大组件 目前是所有img都可以点击放大。具体配置见https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html
        ['@vuepress/medium-zoom', {selector: 'img'}],

        // vssue 一个借助issue的评论插件 具体配置见https://vssue.js.org/zh/
        [
            '@vssue/vuepress-plugin-vssue',
            {
                // 设置 `platform` 而不是 `api` 我这里是在github平台
                platform: 'gitee',

                // owner与repo配置 https://github.com/${owner}/${repo}
                // 例如我的仓库地址为https://github.com/1011cat/shotCat_doc 则owner为1011cat，repo为shotCat_doc
                owner: 'theajack',
                repo: 'cnchar',

                // 填写自己的OAuth App 信息。详见https://vssue.js.org/zh/options/#repo
                clientId:
                    '821ec73b080bf789253229157fa3aa64b442cb85ce7d9d2ae09bade44cfc3a9b',
                clientSecret:
                    '5fdbff0298ddd0839c806f58b68974ab2c2bc1a3ab045d849790f18b6ee327f0',
                locale: 'zh', // 使用的语言  这里是简体中文
                baseURL: 'https://gitee.com', // 平台的 base URL
            },
        ], // 平台的 base URL
    ],

    // vuepress里修改webpack配置，使用的是chainWebpack进行链式调用
    // 具体使用可以参考我这个例子和 https://github.com/neutrinojs/webpack-chain/tree/v5
    // chainWebpack: (config, isServer) => {
    //   config.resolve.alias
    //     .set('@',resolve('src'))
    // }
};
