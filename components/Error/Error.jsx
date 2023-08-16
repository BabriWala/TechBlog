
import React from "react";
import styles from './error.module.css'
import Link from "next/link";

const Error = () => {
  return (
    <section className={`${styles.error} container`}>
      <div className={styles["error__left-side"]}>
        <h1 className={styles["error__title"]}>Ooops....</h1>
        <h2 className={styles["error__description"]}>Page Not Found</h2>
        <Link href="/">
        <button className={`${styles.btn} btn ${styles["error__btn"]}`}>
        Go To Home
        </button>
        </Link>
      </div>
      <div className={styles["error__right-side"]}>
        <h3 className={styles["error__main-title"]}>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h3>
      </div>
    </section>
  );
};

export default Error;
