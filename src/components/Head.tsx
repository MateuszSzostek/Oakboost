import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { IHeadProps } from "../helpers/helpers"

const Head = (props: IHeadProps) => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      site {
        siteMetadata {
          author
          description
          title
          keywords
        }
      }
    }
  `)
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title}</title>
      <meta name="keywords" content={props.keywords} />
      <meta name="author" content={props.author} />
      <meta name="description" content={props.description} />
      <meta name="robots" content="index, follow" />
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900"
        rel="stylesheet"
      ></link>
    </Helmet>
  )
}
export default Head
