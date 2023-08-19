"use client"
import { useSession } from "next-auth/react";
import styles from "./blog.module.css";

export default function Blgos() {

  const session = useSession();
  console.log(session)

  return (
    <section className={`container ${styles["topics-section"]}`}>
      <h2 className={styles["topics__section__title"]}>Popular Topics</h2>
      <div className={styles["topics-tags-container"]}>
        <span className={styles["topics-tags"]}>
          <span>All</span>
          <span>JavaScript</span>
          <span>Java</span>
          <span>React</span>
          <span>React</span>
        </span>
        <span className={styles["see-all"]}>View All</span>
      </div>
      <div className={styles["topics-container"]}>
        <div className={styles["topics-items-container"]}>
          <div className={styles["topics-image-container"]}>
            <img
              src="https://images.pexels.com/photos/11035363/pexels-photo-11035363.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <span>JavaScript</span>
          </div>
          <h6 className={styles["topics-items__date"]}>03.03.2003</h6>
          <h4 className={styles["topics-items__title"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            fuga?
          </h4>
          <p className={styles["topics-items__description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            quaerat ea illum perspiciatis laborum, eaque aliquid aspernatur
            ipsa, assumenda repellendus laudantium accusamus blanditiis sit
            earum. Officiis quidem numquam alias nostrum.
          </p>
          <div></div>
          <button className={`btn ${styles["topics__btn"]}`}>Read More</button>
        </div>
        <div className={styles["topics-items-container"]}>
          <div className={styles["topics-image-container"]}>
            <img
              src="https://images.pexels.com/photos/11035363/pexels-photo-11035363.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <span>JavaScript</span>
          </div>
          <h6 className={styles["topics-items__date"]}>03.03.2003</h6>
          <h4 className={styles["topics-items__title"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            fuga?
          </h4>
          <p className={styles["topics-items__description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            quaerat ea illum perspiciatis laborum, eaque aliquid aspernatur
            ipsa, assumenda repellendus laudantium accusamus blanditiis sit
            earum. Officiis quidem numquam alias nostrum.
          </p>
          <div></div>
          <button className={`btn ${styles["topics__btn"]}`}>Read More</button>
        </div>
        <div className={styles["topics-items-container"]}>
          <div className={styles["topics-image-container"]}>
            <img
              src="https://images.pexels.com/photos/11035363/pexels-photo-11035363.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <span>JavaScript</span>
          </div>
          <h6 className={styles["topics-items__date"]}>03.03.2003</h6>
          <h4 className={styles["topics-items__title"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            fuga?
          </h4>
          <p className={styles["topics-items__description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            quaerat ea illum perspiciatis laborum, eaque aliquid aspernatur
            ipsa, assumenda repellendus laudantium accusamus blanditiis sit
            earum. Officiis quidem numquam alias nostrum.
          </p>
          <div></div>
          <button className={`btn ${styles["topics__btn"]}`}>Read More</button>
        </div>
        <div className={styles["topics-items-container"]}>
          <div className={styles["topics-image-container"]}>
            <img
              src="https://images.pexels.com/photos/11035363/pexels-photo-11035363.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <span>JavaScript</span>
          </div>
          <h6 className={styles["topics-items__date"]}>03.03.2003</h6>
          <h4 className={styles["topics-items__title"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            fuga?
          </h4>
          <p className={styles["topics-items__description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            quaerat ea illum perspiciatis laborum, eaque aliquid aspernatur
            ipsa, assumenda repellendus laudantium accusamus blanditiis sit
            earum. Officiis quidem numquam alias nostrum.
          </p>
          <div></div>
          <button className={`btn ${styles["topics__btn"]}`}>Read More</button>
        </div>
        <div className={styles["topics-items-container"]}>
          <div className={styles["topics-image-container"]}>
            <img
              src="https://images.pexels.com/photos/11035363/pexels-photo-11035363.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <span>JavaScript</span>
          </div>
          <h6 className={styles["topics-items__date"]}>03.03.2003</h6>
          <h4 className={styles["topics-items__title"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            fuga?
          </h4>
          <p className={styles["topics-items__description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            quaerat ea illum perspiciatis laborum, eaque aliquid aspernatur
            ipsa, assumenda repellendus laudantium accusamus blanditiis sit
            earum. Officiis quidem numquam alias nostrum.
          </p>
          <div></div>
          <button className={`btn ${styles["topics__btn"]}`}>Read More</button>
        </div>
        <div className={styles["topics-items-container"]}>
          <div className={styles["topics-image-container"]}>
            <img
              src="https://images.pexels.com/photos/11035363/pexels-photo-11035363.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <span>JavaScript</span>
          </div>
          <h6 className={styles["topics-items__date"]}>03.03.2003</h6>
          <h4 className={styles["topics-items__title"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            fuga?
          </h4>
          <p className={styles["topics-items__description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            quaerat ea illum perspiciatis laborum, eaque aliquid aspernatur
            ipsa, assumenda repellendus laudantium accusamus blanditiis sit
            earum. Officiis quidem numquam alias nostrum.
          </p>
          <div></div>
          <button className={`btn ${styles["topics__btn"]}`}>Read More</button>
        </div>
        <div className={styles["topics-items-container"]}>
          <div className={styles["topics-image-container"]}>
            <img
              src="https://images.pexels.com/photos/11035363/pexels-photo-11035363.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <span>JavaScript</span>
          </div>
          <h6 className={styles["topics-items__date"]}>03.03.2003</h6>
          <h4 className={styles["topics-items__title"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            fuga?
          </h4>
          <p className={styles["topics-items__description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            quaerat ea illum perspiciatis laborum, eaque aliquid aspernatur
            ipsa, assumenda repellendus laudantium accusamus blanditiis sit
            earum. Officiis quidem numquam alias nostrum.
          </p>
          <div></div>
          <button className={`btn ${styles["topics__btn"]}`}>Read More</button>
        </div>
        <div className={styles["topics-items-container"]}>
          <div className={styles["topics-image-container"]}>
            <img
              src="https://images.pexels.com/photos/11035363/pexels-photo-11035363.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <span>JavaScript</span>
          </div>
          <h6 className={styles["topics-items__date"]}>03.03.2003</h6>
          <h4 className={styles["topics-items__title"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            fuga?
          </h4>
          <p className={styles["topics-items__description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            quaerat ea illum perspiciatis laborum, eaque aliquid aspernatur
            ipsa, assumenda repellendus laudantium accusamus blanditiis sit
            earum. Officiis quidem numquam alias nostrum.
          </p>
          <div></div>
          <button className={`btn ${styles["topics__btn"]}`}>Read More</button>
        </div>
      </div>

    </section>
  );
}
