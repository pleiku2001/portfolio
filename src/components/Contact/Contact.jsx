import "./contact.css";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_97a7nw6",
        "template_lsyn6fe",
        form.current,
        "user_qejemn0KanU4BkIiAtguA"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you  !!! I'll check mail soon ")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <h3>Contact</h3>
      <p>Email: kient2005@gmail.com</p>
      <form ref={form} onSubmit={sendEmail} className="ct">
        <div className="ip1">
          <input type="text" placeholder="Enter name" name="user_name" />
        </div>
        <div className="ip1">
          <input type="email" placeholder="Enter email" name="user_email" />
        </div>
        <div className="ip2">
          <textarea name="message" type="text" placeholder="Enter content" />
        </div>

        {/* <input type="submit" value="Send" /> */}
        <button value="Send">Send</button>
      </form>
    </div>
  );
}

export default Contact;
