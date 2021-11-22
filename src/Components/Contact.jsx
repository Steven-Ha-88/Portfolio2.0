import "../styles/contact.css";
import React from "react";
import Button from "../Components/Button";
import CV from "./../assets/CV2021_v3.pdf"

const Contact = () => {
  return (
    <>
      <section className="contact-section" id="contact">
        <h1>Contact me</h1>
        <div className="wrapper">
          <form name="contact form" method="POST" data-netlify="true">
            <div class="details">
              <input type="hidden" name="form-name" value="contact-form" />
              <input type="text" name="name" placeholder="Full name" />
              <input type="text" name="email" placeholder="Email" />
              <input type="text" name="number" placeholder="Phone number" />
            </div>
            <div className="message">
              <p>Message</p>
              <textarea rows="4" name="message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>

          <div className="contact-info">
            <h2>Let's talk?</h2>
            <p className="contact-body">
              Please feel free to message me via contact form or email.
            </p>
            <div className="social">
              <a
                href="mailto:steven.dev@outlook.com"
                target="_blank"
                rel="noreferrer"
                className="hover-animation"
              >
                Email: steven.dev@outlook.com
              </a>{" "}            
              <br />
              <a
                href="https://www.linkedin.com/in/steven-dev/"
                target="_blank"
                rel="noreferrer"
                className="hover-animation"
              >
                Connect on Linkedin
              </a>
            </div>
            <div className="buttons">
              <Button
                bg="#1f1f1f"
                borderColor="#839ef6"
                shadowColor="#839ef6"
                textColor="#F1F7EE"
                href={CV}
                target="_blank"
              >
                View Resume
              </Button>
              <Button
                bg="#1f1f1f"
                borderColor="#c2c2c2"
                shadowColor="#c2c2c2"
                textColor="#c2c2c2"
                href="https://github.com/Steven-Ha-88"
                target="_blank"
              >
                View Github
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
