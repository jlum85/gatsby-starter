module.exports = {
  /* Your site config here */
  /*  pour graph ql , ce sera dans   site /  siteMetadata  */

  siteMetadata: {
    title: "Gatsby blog",
  },

  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "files",
        path: `${__dirname}/src/markdown`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
