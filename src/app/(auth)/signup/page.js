import styles from './signup.module.css';
export default function page() {
  return(
    <section className={`${styles.signup} container`}>
      <div className={styles["signup__container"]}>
        <div className={styles["signup__left-side"]}>
          <img
            className={styles["signup__banner"]}
            src="https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
        <div className={styles["signup__right-side"]}>
          <form>
            <label
              for="firstName"
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

            <label for="lastName" className={styles["signup__lastName-label"]}>
              Enter Your Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className={styles["signup__lastName-field"]}
              placeholder="Enter Your Last Name"
            />

            <label for="email" className={styles["signup__email-label"]}>
              Enter Your Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles["signup__email-field"]}
              placeholder="Enter Your Email"
            />

            <label for="password" className={styles["signup__password-label"]}>
              Enter Your Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={styles["signup__password-field"]}
              placeholder="Enter Your Password"
            />

            <input type="file" name="image" id="image" />
            <label for="image">Upload Your Picture</label>

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
