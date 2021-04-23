import React from "react"
import Head from "./Head"

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <div>{children}</div>
    </>
  )
}

export default Layout
