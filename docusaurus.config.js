module.exports = {
  title: 'Pterodactyl Panel',
  tagline: 'The tagline of my site',
  url: 'https://pterodactyl.io/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'pterodactyl',
  projectName: 'pterodactyl',
  themeConfig: {
    navbar: {
      title: 'Pterodactyl',
      logo: {
        alt: 'Pterodactyl',
        src: 'img/pterodactyl.png',
      },
      links: [
        {
          to: 'docs/0.7/panel/getting_started',
          label: 'Documentation',
          position: 'right',
        },
        {
          to: 'docs/community/cg_about',
          activeBasePath: '/community/',
          label: 'Community Guides',
          position: 'right',
        },
        {
          to: '/test',
          activeBasePath: '/test',
          label: "Change Log",
          position: "right"
        },
        {
          to: 'https://pterodactyl.io/discord',
          label: 'Get Help',
          position: 'right',
        },
        {
          to: 'https://github.com/pterodactyl/panel',
          label: 'Contribute',
          position: 'right',
        },
      ],
    },
    announcementBar:
    {
      id: 'welcome',
      content:
        'These are still a WIP.... @AreYouScared',
      backgroundColor: '#e12d39', 
      textColor: '#fff',
    },
    footer: {
      style: 'dark',
      logo: {
        src: '/img/pterodactyl-flat.png',
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'v0.7 ( Current Stable )',
              to: 'docs/0.7/panel/getting_started',
            },
            {
              label: 'v1.0 ( Beta )',
              to: 'docs/1.0/panel/getting_started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/pterodactyl',
            },
            {
              label: 'Discord',
              href: 'https://pterodactyl.io/discord',
            },
          ],
        },
      ],
      copyright: `MIT Licensed | Copyright © 2015 - ${new Date().getFullYear()} Dane Everitt & Contributors.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'project/introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), 
      {
        docsBasePath: '/docs',
        indexDocs: true,
        indexPages: true,
        language: 'en'
    }]
  ],
};