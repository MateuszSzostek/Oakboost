import React from "react"
import { CloudProvidersData } from "../data/cloud_providers"
import Underline from "./Underline"

const CloudProviders = () => {
  return (
    <section className="radial-gradient">
      <div className="cloud-providers-container">
        <h2 className="cloud-provider-title">
          Boost your application with <br />
          trusted cloud ecosystems
        </h2>
        <Underline width={"434px"} height={"5px"} />
        <div className="grid-triple-container">
          {CloudProvidersData.map(s => (
            <div className="flex-center" key={s.id}>
              <img src={s.image} alt={s.alt}></img>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CloudProviders
