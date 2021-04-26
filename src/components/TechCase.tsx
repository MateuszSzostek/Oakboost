import React from "react"
import TechCaseCard from "./TechCaseCard"
import { TechCaseData } from "../data/techcase"
import Underline from "./Underline"

const TechCase = () => {
  return (
    <section className="radial-gradient">
      <div className="tech-case-container">
        <h2 className="tech-case-title">
          See how we help our clients <br /> accomplish their vision
        </h2>
        {TechCaseData.map(s => (
          <TechCaseCard key={s.id} techCaseProps={s}></TechCaseCard>
        ))}
      </div>
    </section>
  )
}

export default TechCase