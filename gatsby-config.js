module.exports = {
  siteMetadata: {
    title: `Website title here`,
    siteUrl: "https://site.com",
    description: `Website description here.`,
    author: `Jonas Laurens`,
    twitter: "@site",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `website`,
        short_name: `sitename`,
        start_url: `/`,
        background_color: `#663399`, // theme color here
        theme_color: `#663399`, // theme color here
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
