import React from "react"
import Head from "./Head"
import Header from "./Header"
import Landing from "./Landing"

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <Landing />
      <div>{children}</div>
    </>
  )
}

export default Layout
