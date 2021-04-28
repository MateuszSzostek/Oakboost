import React from "react"
import { Link } from "gatsby"
import { IPostCardProps } from "../helpers/helpers"

const PostCard = (props: IPostCardProps) => {
  const { title, slug, shortDesc } = props
  return (
    <div>
      <h2>{title}</h2>
      <p>{shortDesc}</p>
      <Link to={slug}>Czytaj dalej...</Link>
    </div>
  )
}

export default PostCard
