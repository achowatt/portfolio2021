import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ContactSection = ({ setSectionShown }) => {
  const [ref, inView] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      setSectionShown("contactSection");
    }
  }, [inView]);

  return (
    <section className="contact home-sections">
      <div ref={ref} className="content">
        <h1>Contact</h1>
        <form
          action="#"
          name="contact-page"
          className="contact-form"
          autocomplete="off"
          netlify
        >
          <div className="form-group form-group-name">
            <label htmlFor="name" className="form-label">
              Name*
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Full Name"
              name="name"
              id="name"
              required
            />
          </div>

          <div className="form-group form-group-email">
            <label htmlFor="email" className="m-label">
              Email*
            </label>
            <input
              type="email"
              className="m-input"
              placeholder="Your Email"
              name="email"
              id="email"
              required
            />
          </div>

          <div className="form-group form-group-subject">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Subject"
              name="subject"
              id="subject"
            />
          </div>

          <div className="form-group form-group-message">
            <label htmlFor="message" className="form-label">
              Message*
            </label>
            <textarea
              name="message"
              className="form-input form-message"
              id="message"
              spellcheck="true"
              placeholder="Please leave a message!"
              required
            ></textarea>
          </div>

          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
