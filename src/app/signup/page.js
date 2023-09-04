"use client";

import { useState } from "react";
import styles from "./signup.module.css";
import { useRouter } from "next/navigation";
export default function page() {

  const [error, setError] = useState("");
  const router = useRouter()


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target);
    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const fullName = firstName + ' ' + lastName;
    const email = e.target[2].value;
    const password = e.target[3].value;
    const image = e.target[4].value;
    console.log(fullName, email, password, image)
    try{
      const res = await fetch('/api/auth/register',{
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({fullName, email, password, image})
      })

      res.status === 201 && router.push('/login?success=Account has been created')
    }catch(err){
      console.log(err)
      setError(err)
    }

  };

  return (
    <section className={`${styles.signup} container`}>
      <div className={styles["signup__container"]}>
        <div className={styles["signup__left-side"]}>
          <img
            className={styles["signup__banner"]}
            src="https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
        <div className={styles["signup__right-side"]}>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="firstName"
              className={styles["signup__firstName-label"]}
            >
              Enter Your First Name:
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className={styles["signup__firstName-field"]}
              placeholder="Enter Your First Name"
            />

            <label htmlFor="lastName" className={styles["signup__lastName-label"]}>
              Enter Your Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className={styles["signup__lastName-field"]}
              placeholder="Enter Your Last Name"
            />

            <label htmlFor="email" className={styles["signup__email-label"]}>
              Enter Your Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles["signup__email-field"]}
              placeholder="Enter Your Email"
            />

            <label htmlFor="password" className={styles["signup__password-label"]}>
              Enter Your Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={styles["signup__password-field"]}
              placeholder="Enter Your Password"
            />

            <label htmlFor="image">Enter Your Picture Link</label>
            <input type="text" name="image" id="image" placeholder="Enter Your Image Link" />

            <button className={styles["signup__btn"]} type="submit">
              SIGN UP
            </button>
            <p className={styles["loin__error"]}>
              Please Provide a Valid Email & Password
            </p>
            <button className={styles["signup__google signup__btn"]}>
              <i className={styles["fa-brands fa-google"]}></i> Sign Up With
              Google
            </button>
            <button className={styles["signup__facebook signup__btn"]}>
              <i className={styles["fa-brands fa-facebook"]}></i> Sign Up With
              Facebook
            </button>
            <button className={styles["signup__github signup__btn"]}>
              <i className={styles["fa-brands fa-github"]}></i> Sign Up With
              Github
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
