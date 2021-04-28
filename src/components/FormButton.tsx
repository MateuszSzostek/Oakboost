import React, { PropsWithChildren } from "react"
import { IFormButtonProps } from "../helpers/helpers"

const Button = (props: PropsWithChildren<IFormButtonProps>) => {
  const { children } = props
  return (
    <>
      <button type="submit" className="">
        <div className="button">
          <div className="inner-circle"></div>
          <div className="button-text"> {children}</div>
        </div>
      </button>
    </>
  )
}

export default Button
