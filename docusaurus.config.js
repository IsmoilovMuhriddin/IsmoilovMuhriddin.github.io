module.exports = {
  title: "Muhriddin's Log Book",
  tagline: 'Computer Science, Artificial Intelligence, Machine Learning',
  url: 'https://IsmoilovMuhriddin.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'IsmoilovMuhriddin', // Usually your GitHub org/user name.
  projectName: 'IsmoilovMuhriddin.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Muhriddin Ismoilov',
      items: [
        {
          to: 'curriculum/',
          activeBasePath: 'curriculum',
          label: 'Curriculum',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          to: 'articles/',
          label: 'Articles',
          position: 'left',
        },
        {
          to: 'projects/',
          activeBasePath: 'projects/',
          label: 'Projects',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Muhriddin Ismoilov. Built with <a href='https://v2.docusaurus.io/'>Docusaurus.</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
