module.exports = {
  base: '/laup-ui/',
  title: 'Laup Ui 组件库',
  description: 'Vue.js 2.0',
  head: [
    ['link', { rel: 'icon', href: '/logl.png' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/start' },
      { text: 'Github', link: 'https://jiangpuliu.github.io/laup-ui' }
    ],
    sidebar: [
      '/',
      {
        title: '开发指南',
        collapsable: false,
        children: [
          '/',
          '/guide/start',
          '/guide/queck',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/component/dialog',
        ]
      },
      {
        title: '指令',
        collapsable: false,
        children: [
          '/component/loading',
        ]
      },
    ]
  }
};
