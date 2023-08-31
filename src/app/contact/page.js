'use client'
import React from "react";
import styles from './contact.module.css'
import { signIn } from "next-auth/react";

// export const metadata = {
//   title: "Tech Blog - Contact",
//   description: "This is a Tech Blog Contact Page",
// };

const contact = () => {
  return (
    <section className={`${styles.contact} container`}>
      <div className={styles["contact__container"]}>
        <div className={styles["contact__left-side"]}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.72825267592!2d90.35875717469486!3d23.757068088521525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfeaac77cf97%3A0x56e8b5892d7e73df!2sMohammadpur%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1691043346511!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles["contact__right-side"]}>
          <form>
            <label for="fullName" className={styles["contact__fullName-label"]}>
              Enter Your Full Name:
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className={styles["contact__fullName-field"]}
              placeholder="Enter Your Full Name"
            />

            <label for="email" className={styles["contact__email-label"]}>
              Enter Your Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles["contact__email-field"]}
              placeholder="Enter Your Email"
            />

            <label for="message" className={styles["contact__message-label"]}>
              Enter Your Message
            </label>
            <textarea
              name="message"
              id="message"
              className={styles["contact__message-field"]}
              placeholder="Enter Your Message"
            ></textarea>

            <button className={styles["contact__btn"]}>Send Message</button>
          </form>
          <button onClick={()=> signIn('google')}>Google Login</button>
        </div>
      </div>
    </section>
  );
};

export default contact;
