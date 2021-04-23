import React, { PropsWithChildren, useState, useEffect } from "react"
import { IButtonProps } from "../helpers/helpers"

const Button = (props: PropsWithChildren<IButtonProps>) => {
  const { children, isAnimated, slug } = props
  const [animated, setAnimated] = useState<boolean>(false)

  useEffect(() => {
    if (typeof isAnimated === "undefined") {
      setAnimated(false)
    } else {
      setAnimated(isAnimated as boolean)
    }
  }, [])

  return (
    <>
      {animated ? (
        <>
          <a href={slug} className="">
            <div className="button">
              <div className="inner-circle"></div>
              <div className="button-text"> {children}</div>
            </div>
          </a>
        </>
      ) : (
        <a href={slug} className="">
          <span className="button-button">
            <div className="button-text"> {children}</div>
          </span>
        </a>
      )}
    </>
  )
}

export default Button
