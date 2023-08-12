import Link from "next/link";
import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className={styles.container}>
          <div>
            <span className={styles.logo}>TechBlog</span>
          </div>
          <div>
            <ul className={styles["nav-link-container"]}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <li>
              <a href="#">
                <i className={`${styles["fa-brands"]} fa-facebook`}></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className={`${styles["fa-brands"]} fa-instagram`}></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className={`${styles["fa-brands"]} fa-linkedin`}></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className={`${styles["fa-brands"]} fa-github`}></i>
              </a>
            </li>
          </div>
        </div>
      </nav>
      <section className={`${styles.container} banner-section`}>
        <div className={styles.banner}>
          <h6 className={styles["banner__tag"]}>JavaScript</h6>
          <h2 className={styles["banner__title"]}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
            repellat?
          </h2>
          <div className={styles["horizontal-container"]}>
            <span className={styles["horizontal-line"]}></span>
            <span className={styles["banner__date"]}>06.06.2006</span>
            <span className={styles["horizontal-line"]}></span>
          </div>
          <button className={styles.btn}>Read More</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
