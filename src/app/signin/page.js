'use client'
import { signIn, signOut } from 'next-auth/react';
import styles from './login.module.css';
export default function page() {
  return (
    <section className={`${styles.login} container`}>
      <div className={styles["login__container"]}>
        <div className={styles["login__left-side"]}>
          <img
            className={styles["login__banner"]}
            src="https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
        <div className={styles["login__right-side"]}>
          <form>
            <label for="email" className={styles["login__email-label"]}>
              Enter Your Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles["login__email-field"]}
              placeholder="admin@gmail.com"
              value="admin@gmail.com"
            />

            <label for="password" className={styles["login__password-label"]}>
              Enter Your Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={styles["login__password-field"]}
              placeholder="123456"
              value="123456"
            />

            <button className={styles["login__btn"]}>LOGIN</button>
            <p className={styles["loin__error"]}>
              Please Provide a Valid Email & Password
            </p>
            <button className={styles["login__google login__btn"]} onClick={()=> signIn("google")}>
             Loging With Google
            </button>
            <button className={styles["login__facebook login__btn"]}>
              <i className={styles["fa-brands fa-facebook"]}></i> Loging With Facebook
            </button>
            <button className={styles["login__github login__btn"]}>
              <i className={styles["fa-brands fa-github"]}></i> Loging With Github
            </button>
            <button onClick={()=> signIn("google")}>Sign In</button>
            <button onClick={()=> signOut()}>Sign Out</button>
            <button onClick={()=> signIn("google")}>Sign In</button>
          </form>
        </div>
      </div>
    </section>
  );
}
