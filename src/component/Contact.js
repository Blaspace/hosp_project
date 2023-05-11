import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Popup from "./Popup";

export const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_te4dhyv",
        "template_ooyswir",
        form.current,
        "zOBjBpOPwJy-QlT9L"
      )
      .then(
        (result) => {
          setMessage(
            "thanks for registering with Caregiver learning institute, Our team will get back to you!"
          );
        },
        (error) => {
          setMessage("Sorry something went wrong, please try again!");
        }
      );
  };

  return (
    <>
      <div className="contact">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
          />
          <input type="email" name="user_email" placeholder="Email" required />
          <input
            type="tel"
            name="user_phone_number"
            placeholder="Phone Number"
            required
          />
          <input type="text" name="user_state" placeholder="State" required />
          <input
            type="text"
            name="user_city"
            placeholder="Town/city"
            required
          />
          <button>Register</button>
        </form>
      </div>
      <Popup message={message} setMessage={setMessage} />
    </>
  );
};

export default Contact;
