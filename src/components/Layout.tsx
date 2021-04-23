import React from "react"
import Head from "./Head"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <div>{children}</div>
    </>
  )
}

export default Layout
