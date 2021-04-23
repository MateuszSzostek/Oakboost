import React from "react"

interface IBubbleProps {
  bubbles: {
    id: number
    img: string
    left?: string
    right?: string
    top?: string
    bottom?: string
    zIndex?: number
  }[]
}

const Bubbles = (props: IBubbleProps) => {
  const { bubbles } = props
  console.log(bubbles)
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
