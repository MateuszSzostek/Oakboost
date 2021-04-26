import React from "react"
import Arrow from "../data/images/arrow.svg"

interface IFeatureCol {
  data: {
    title: string
    listItem: {
      id: number
      name: string
    }[]
  }
}

const FeatureCol = (props: IFeatureCol) => {
  const { data } = props
  return (
    <div className="">
      <h2 className="feature-title">{data.title}</h2>
      <ul>
        {data.listItem.map(s => (
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
