// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '枫叶源AutumnCraft',
  tagline: '助理新人快速了解服务器',
  url: 'https://docs.autumncraft.icu/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'QianMo_ProMax', // Usually your GitHub org/user name.
  projectName: '枫叶源AutumnCraft', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh_Hans'], 
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '枫叶源AutumnCraft',
        logo: {
          alt: '助力新人快速了解服务器',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '快速开始',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '友情链接',
            items: [
              {
                label: '牛腩小镇',
                href: 'https://wwww.newnan.city/',
              },
            ],
          },
          {
            title: '联系我们',
            items: [
              {
                label: 'QQ群',
                href: 'https://qm.qq.com/cgi-bin/qm/qr?k=f3wSzr7aeKBMYEdaQz6J8HM7KsBv3-RV&jump_from=webapi&authKey=vvzOJZqgtexA9m1SmMv1TMN1CV25vQRuE5AggWVFQMnBj2w0W+vH24ON0TaCEVFK',
              },
              {
                label: 'KOOK',
                href: 'https://kook.vip/kvENs5',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/QianMoo0121',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 枫叶源AutumnCraft All rights reserved. 感谢 Docusaurus 提供文档框架；感谢 Vercel 提供建站平台.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = {
  title: '枫叶源AutumnCraft',
  url: 'https://docs.autumncraft.icu/',
  baseUrl: '/',
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // 基础配置
        indexDocs: true,      // 索引文档（默认开启）
        indexBlog: true,      // 索引博客（默认开启）
        indexPages: false,    // 索引静态页面（默认关闭）
        // 路径匹配
        docsRouteBasePath: ['/docs'],  // 文档路径（与项目配置一致）
        blogRouteBasePath: ['/blog'],  // 博客路径
        // 语言设置（支持多语言）
        language: ['en', 'zh'],        // 包含中文需安装nodejieba
        // 增强配置
        hashed: true,         // 启用哈希缓存（推荐）
        highlightSearchTermsOnTargetPage: true, // 高亮搜索结果关键词
        searchResultLimits: 8,        // 搜索结果数量限制
        ignoreFiles: [/meta/]
      },
    ],
  ],
};
