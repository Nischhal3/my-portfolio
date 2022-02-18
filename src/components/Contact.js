import React, { useRef } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_s0u3dyg',
        'template_x9ueq1b',
        form.current,
        'user_YtgvtifK4uYB0wL4iflIQ'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact">
      <h2 className="contact-header">Contact</h2>
      <p>Please leave message here for further work detail. </p>
      <form ref={form} onSubmit={sendEmail} className="email-field">
        <input
          className="field"
          type="text"
          name="name"
          required
          placeholder="Name"
        />

        <input
          placeholder="Email"
          className="field"
          type="email"
          name="email"
          required
          pattern="^[a-z0-9_-]+(\.[a-z0-9_-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$"
        />
        <textarea
          placeholder="Message"
          name="message"
          className="message-field"
          required
        />
        <input className="btn" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
