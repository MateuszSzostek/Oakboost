import * as React from "react"
import Layout from "../components/Layout"
import Landing from "../components/Landing"
import Features from "../components/Features"
import "../css/styles.min.css"

const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <Features />
    </Layout>
  )
}

export default IndexPage
