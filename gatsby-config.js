module.exports = {
  siteMetadata: {
    title: "AutoComic",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-layout",
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
  ],
};
