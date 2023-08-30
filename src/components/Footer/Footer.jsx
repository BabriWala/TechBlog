"use client"
import React, { useEffect } from "react";

import styles from "./footer.module.css";
import Cursor from "../Cursor/Cursor";




const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`container ${styles["footer-container"]}`}>
          <div>
            <h3>Contact the Publisher</h3>
            <h6>mike@runo.com</h6>
            <h6>+944 450 904 505</h6>
          </div>
          <div>
            <h3>Explorate</h3>
            <h6>About</h6>
            <h6>About</h6>
            <h6>About</h6>
          </div>
          <div>
            <h3>Headquarter</h3>
            <h6>About</h6>
            <h6>About</h6>
            <h6>About</h6>
          </div>
          <div>
            <h3>Connections</h3>
            <img />
            <img />
            <img />
            <img />
          </div>
        </div>
      </footer>
      <section className={styles["extra-footer"]}>
        <div className={`container ${styles["extra-footer__container"]}`}>
          <span>2021 | RUNO Publisher Studio</span>
          <span>Subscribe Now</span>
        </div>
      </section>
      {/* <Cursor></Cursor>  */}
    </>
  );
};

export default Footer;
