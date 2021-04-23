import React from "react"
import Arrow from "../data/images/arrow.svg"

interface IFeatureCol {
  feature: {
    title: string
    listItem: {
      id: number
      name: string
    }[]
  }
}

const FeatureCol = (props: IFeatureCol) => {
  const { feature } = props
  return (
    <div className="">
      <h2 className="feature-title">{feature.title}</h2>
      <ul>
        {feature.listItem.map(s => (
          <li data-Icon="%" className="feature-item" key={s.id}>
            <img className="gray-indicator" src={Arrow} alt="indicator"></img>
            {s.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FeatureCol
