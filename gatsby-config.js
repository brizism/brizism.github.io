module.exports = {
  siteMetadata: {
    title: 'Briseida Montiel',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-47952650-1`,
        head: true,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Briseida Montiel",
        short_name: "Briseida's Portfolio",
        start_url: "/",
        background_color: "#F6F6F6",
        icon: "src/img/favicon.png" 
      },
    },
    `gatsby-plugin-offline`,
  ],
}
