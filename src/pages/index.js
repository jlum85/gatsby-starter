import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"

export default () => (
  <Layout>
    <Title text="Welcome" />
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About me</Link>
    </div>
    <p> This is the index page</p>
  </Layout>
)
