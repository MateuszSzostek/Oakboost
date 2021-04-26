import * as React from "react"
import Layout from "../components/Layout"
import Landing from "../components/Landing"
import Features from "../components/Features"
import TechCase from "../components/TechCase"
import Mentorship from "../components/Mentorship"
import "../css/styles.min.css"

const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <Features />
      <TechCase />
      <Mentorship />
    </Layout>
  )
}

export default IndexPage
