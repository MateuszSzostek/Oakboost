import React from "react"
import Button from "./Button"
import ListCol from "./ListCol"
import { MentorshipData } from "../data/mentorship"
import Bubbles from "./Bubbles"
import { MentorshipBubbles } from "../data/bubbles"

const Mentorship = () => {
  return (
    <section>
      <div className="features-container">
        <h2 className="mentoring-title">
          Building impactful software requires expertise. <br />
          Power up your team with Oak Boost mentors.
        </h2>
        <div className="grid-mentoring-container">
          {MentorshipData.map(s => (
            <ListCol key={s.id} data={s}></ListCol>
          ))}
        </div>
        <div className="button-section">
          <div style={{ marginLeft: "auto" }}>
            <Button isAnimated={true} slug="/">
              Power Up Your Team
            </Button>
          </div>
        </div>
        <Bubbles bubbles={MentorshipBubbles}></Bubbles>
      </div>
    </section>
  )
}

export default Mentorship
