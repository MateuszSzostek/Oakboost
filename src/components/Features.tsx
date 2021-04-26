import React from "react"
import Button from "./Button"
import FeatureCol from "./FeatureCol"
import { FeaturesData } from "../data/features"
import Bubbles from "./Bubbles"
import { TechnologyBubbles } from "../data/bubbles"

interface IFeatureCol {
  feature: {
    title: string
    listItem: {
      id: number
      name: string
    }[]
  }
}

const Features = () => {
  return (
    <section>
      <div className="features-container">
        <div className="grid-feature-container">
          <FeatureCol feature={FeaturesData[0]} />
          <FeatureCol feature={FeaturesData[1]} />
          <FeatureCol feature={FeaturesData[2]} />
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
