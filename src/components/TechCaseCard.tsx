import React from "react"

interface ITechCaseCardProps {
  techCaseProps: {
    title: string
    description: string
    image: any
  }
}

const TechCaseCard = (props: ITechCaseCardProps) => {
  const { title, description, image } = props.techCaseProps
  return (
    <div className="tech-case-card-wrapper">
      <div className="tech-case-content">
        <div className="tech-case-card">
          <h3 className="tech-case-title">{title}</h3>
          <p className="tech-case-description">{description}</p>
        </div>
      </div>
      <img className="tech-case-image" src={image}></img>
      <div className="tech-case-link">
        <div className="white-indicator"></div>
      </div>
    </div>
  )
}

export default TechCaseCard
