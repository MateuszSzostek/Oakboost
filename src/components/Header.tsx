import * as React from "react"
import { useState, useEffect } from "react"
import Icon from "../data/images/logo.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Button from "./Button"
import { Icon as Iconify } from "@iconify/react"
import { NavData } from "../data/nav"
import crossIcon from "@iconify-icons/akar-icons/cross"
import menuAlt3 from "@iconify-icons/heroicons-outline/menu-alt-3"

const Header = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false)

  const getWidth = () => {
    return Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    )
  }

  const toggleMenu = () => {
    if (getWidth() < 1140) {
      setMenuActive(!menuActive)
    }
  }

  useEffect(() => {
    const resizeListener = () => {
      setMenuActive(false)
    }
    window.addEventListener("resize", resizeListener)
    return () => {
      window.removeEventListener("resize", resizeListener)
    }
  }, [])

  return (
    <header>
      <section className="header-section">
        <div className="header-container">
          <AnchorLink to="/#landing" className="logo-container">
            <img src={Icon}></img>
            <h1 className="logo-text">Oak Boost</h1>
          </AnchorLink>
          <div className="desktop-element">
            {NavData.map(s => (
              <AnchorLink key={s.id} className="nav-item" to={s.slug}>
                {s.name}
              </AnchorLink>
            ))}
          </div>
          <div className="desktop-element">
            <Button slug={"/"} isAnimated={true}>
              Get In Touch
            </Button>
          </div>
          <div onClick={toggleMenu} className="mob-element">
            <Iconify
              className="menu-button"
              icon={menuActive ? crossIcon : menuAlt3}
            ></Iconify>
          </div>
          <div className={"mob-nav-container " + (menuActive ? "on" : "off")}>
            <div className="mob-nav">
              {NavData.map(s => (
                <AnchorLink
                  onAnchorLinkClick={toggleMenu}
                  key={s.id}
                  className="mob-nav-item"
                  to={s.slug}
                >
                  {s.name}
                </AnchorLink>
              ))}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  padding: "10px 0px 15px 20px",
                }}
              >
                <Button slug={"/"} isAnimated={true}>
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
