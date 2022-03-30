// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Stop Holy War',
  tagline: 'Остановлю холивар в своей голове и, может быть, в IT сообществе',
  url: 'https://stopholywar.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'danilov0x33',
  projectName: 'Stop Holy War',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
    localeConfigs: {
      ru: {
        label: 'Русский',
        direction: 'ltr',
        htmlLang: 'ru-RU',
      }
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-VSWPZJVMRD',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          feedOptions: {
            type: null,
          },
          blogSidebarTitle: 'Последние посты',
          blogSidebarCount: 0,
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
              frontMatter.reading_time ? frontMatter.reading_time : defaultReadingTime({content}),
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
      autoCollapseSidebarCategories: true,
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Stop Holy War',
        logo: {
          alt: 'Stop Holy War Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Holy War Zone'
          },
          {
            to: '/blog',
            label: 'Блог',
            position: 'left'
          },
          {
            to: '/portfolio',
            label: 'Портфолио',
            position: 'right'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Danger Zone',
            items: [
              {
                label: 'Введение',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Другое',
            items: [
              {
                label: 'Блог',
                to: '/blog',
              },
              {
                label: 'Портфолио',
                to: '/portfolio',
              },
              {
                label: 'Контакты',
                to: '/portfolio#contacts',
              }
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()}. Все права защищены.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
