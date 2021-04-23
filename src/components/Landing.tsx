import React from "react"
import Buubles from "./Bubbles"
import { LandingBubbles } from "../data/bubbles"
import Underline from "./Underline"

const Landing = () => {
  console.log(LandingBubbles)
  return (
    <section className="landing-section">
      <div className="landing-container">
        <h1 className="landing-title">
          Boost your most <br /> significant teams
        </h1>
        <h2 className="landing-text">
          Enterprises team up with Oak Boost to succeed with their <br /> most
          pivotal applications using disruptive technologies.
        </h2>
        <Underline />
        <Buubles bubbles={LandingBubbles} />
      </div>
    </section>
  )
}

export default Landing