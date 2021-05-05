import React from "react"
import FormButton from "./FormButton"
import Bubbles from "./Bubbles"
import { ContactBubbles } from "../data/bubbles"

const Contact = () => {
  return (
    <section>
      <div className="contact-container">
        <div className="grid-contact-container">
          <div>
            <h2 className="contact-title">Get In Touch</h2>
          </div>
          <div>
            <form className="contact-form">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Your name..."></input>
              <label htmlFor="email">Your bussines email</label>
              <input type="text" placeholder="Your bussines email..."></input>
              <label htmlFor="message">
                Please add a short description of your case
              </label>
              <textarea
                className="message-box"
                name="message"
                placeholder="Your message..."
              ></textarea>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <FormButton>Send</FormButton>
              </div>
            </form>
          </div>
          <Bubbles bubbles={ContactBubbles}></Bubbles>
        </div>
      </div>
    </section>
  )
}

export default Contact
