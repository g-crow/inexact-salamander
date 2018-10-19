module.exports = {
  siteMetadata: {
    title: 'Genevieve Crow',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CF_SPACE || 'qegl18yqzvvm',
        accessToken: process.env.CF_TOKEN || '7d95cb23b5df56993fe070febc1d73580ddb0c20be164e4a071e47a8b23f40cf'
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    {
     resolve: 'gatsby-plugin-typography',
       options: {
         pathToConfigModule: 'src/utils/typography',
       },
     },
  ]
}
