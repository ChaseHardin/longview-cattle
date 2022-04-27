/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    websiteName: "Longview Cattle",
    slogan: "Black Herefords of Longview Farms",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
