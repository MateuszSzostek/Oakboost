import React from "react"

interface IUnderlineProps {
  width?: string
  height?: string
}

const Underline = (props: IUnderlineProps) => {
  const { width, height } = props
  return (
    <div
      style={{
        width: "calc(((((100vw) - (1140px)) / 2)) + (" + width + "))",
        height: height,
      }}
      className="underline"
    ></div>
  )
}

export default Underline
