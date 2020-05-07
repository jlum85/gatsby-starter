import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"

export default ({ data }) => (
  <Layout>
    <Title text={data.site.siteMetadata.title} />
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About me</Link>
    </div>
    <p> This is the index page</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
