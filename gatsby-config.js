require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: `Chapi Chapo`,
    description: `Chapi Chapo toy music`,
    author: `@chapichapotoymusic`,
    siteUrl: 'https://chapimusic.com'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-P7YDYNGTSX"],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chapi Chapo`,
        short_name: `chapimusic`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#cb1a3b`,
        display: `minimal-ui`,
        icon: `src/images/chapi-music.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '510i3x4t',
        dataset: 'production',
        overlayDrafts: !isProd,
        watchMode: !isProd,
        token: process.env.SANITY_TOKEN,
      },
    },
    `gatsby-plugin-theme-ui`,
    {
      resolve: 'gatsby-theme-style-guide',
      options: {
        // sets path for generated page
        basePath: '/design-system',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/, // See below to configure properly
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-preact`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://chapimusic.com',
        sitemap: 'https://chapimusic.com/sitemap.xml',
        env: {
          development: {
            policy: [{userAgent: '*', disallow: ['/']}],
          },
          production: {
            policy: [{userAgent: '*', allow: '/'}],
          },
        },
      },
    },
  ],
}
