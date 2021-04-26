import * as React from "react"
import Icon from "../data/images/logo.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Button from "./Button"

const Header = () => {
  return (
    <header>
      <section className="header-section">
        <div className="header-container">
          <AnchorLink to="/#landing" className="logo-container">
            <img src={Icon}></img>
            <h1 className="logo-text">Oak Boost</h1>
          </AnchorLink>
          <div className="desktop-element">
            <AnchorLink className="nav-item" to="/#services">
              Services
            </AnchorLink>
            <AnchorLink className="nav-item" to="/#case-study">
              Case Study
            </AnchorLink>
            <AnchorLink className="nav-item" to="/#mentoring">
              Mentoring
            </AnchorLink>
          </div>
          <div className="desktop-element">
            <Button slug={"/"} isAnimated={true}>
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
