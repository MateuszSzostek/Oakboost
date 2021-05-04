import React from "react"
import TechCaseCard from "./TechCaseCard"
import { TechCaseData } from "../data/techcase"
import Underline from "./Underline"

const TechCase = () => {
  return (
    <section id="case-study" className="radial-gradient">
      <div className="tech-case-container">
        <h2 className="tech-case-title">
          See how we help our clients <br /> accomplish their vision
        </h2>
        <Underline width={"392px"} height={"5px"} />
        {TechCaseData.map(s => (
          <TechCaseCard key={s.id} techCaseProps={s}></TechCaseCard>
        ))}
      </div>
    </section>
  )
}

export default TechCase
