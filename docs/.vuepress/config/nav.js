// nav
module.exports = [
  { text: '首页', link: '/' },
  { text: 'SerialPort文档', link: '/serialport/', },
  {
    text: '笔记',
    link: '/note/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '目标跟踪',
        items: [
          { text: '相关滤波', link: '/note/cf/' },
        ],
      },
      { text: '博客搭建', link: '/note/blog/' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      // { text: '学习', link: '/pages/f2a556/' },
      // { text: '面试', link: '/pages/aea6571b7a8bae86/' },
      // { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
      { 
        text: '实用技巧', 
        items: [
        { text: '2分钟规则', link: '/more/skills/2-minute-rule/', },
        ] 
      },
      { 
        text: '收藏', 
        items: [
          { text: '网站', link: '/more/favorites/website/', },
        ],
      },
      // { text: '友情链接', link: '/friends/' },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
  { text: '友链', link: '/friends/' },
  { text: '关于', link: '/about/' },
]
