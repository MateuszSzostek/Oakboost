import React from "react"
import { IBubbleProps } from "../helpers/helpers"

const Bubbles = (props: IBubbleProps) => {
  const { bubbles } = props
  return (
    <div className="bubbles-container">
      {bubbles.map(s => (
        <div
          className="bubble"
          style={{
            left: s.left,
            right: s.right,
            bottom: s.bottom,
            top: s.top,
            zIndex: s.zIndex,
          }}
          key={s.id}
        >
          <img src={s.img}></img>
        </div>
      ))}
    </div>
  )
}

export default Bubbles
