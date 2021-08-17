const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'HexHive',
  tagline: 'Integrations are cool',
  url: 'https://docs.hexhive.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TheTechCompany', // Usually your GitHub org/user name.
  projectName: 'hexhive-common', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'HexHive Systems Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/TheTechCompany/hexhive-common',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/HexHive',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/TheTechCompany',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/TheTechCompany',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/TheTechCompany/hexhive-common',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HexHive Systems. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/TheTechCompany/hexhive-common/edit/master/packages/core-apps/hexhive-docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/TheTechCompany/hexhive-common/edit/master/packages/core-apps/hexhive-docs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
