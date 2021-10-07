const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "Shanya's blog",
  description: '记录分享一些技术笔记和心得。',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
    extendMarkdown: md => {
      md.use(require('@neilsustc/markdown-it-katex'), 
      {"throwOnError" : false, "errorColor" : " #cc0000"}) // 启动 markdown-it-katex 插件
    }
  },

  head,
  plugins,
  themeConfig,
}
