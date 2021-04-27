import React from "react"
import Button from "./Button"
import ListCol from "./ListCol"
import { FeaturesData } from "../data/features"
import Bubbles from "./Bubbles"
import { TechnologyBubbles } from "../data/bubbles"

const Features = () => {
  return (
    <section id="services">
      <div className="features-container">
        <div className="grid-feature-container">
          {FeaturesData.map(s => (
            <ListCol key={s.id} data={s}></ListCol>
          ))}
        </div>
        <div className="button-section">
          <div style={{ marginLeft: "auto" }}>
            <Button isAnimated={true} slug="/">
              Use Disruptive Tech
            </Button>
          </div>
        </div>
        <Bubbles bubbles={TechnologyBubbles}></Bubbles>
      </div>
    </section>
  )
}

export default Features
