import React from 'react';
import styles from './about.module.css'

const About = () => {
    return (
        <section className={`${styles.about} container`}>
        <div className={styles["about__container"]}>
          <div className={styles["about__left-side"]}>
            <img
              src="https://media.istockphoto.com/id/1322205588/photo/cropped-shot-of-three-young-businessmpeople-working-together-on-a-laptop-in-their-office-late.jpg?b=1&s=612x612&w=0&k=20&c=rIMVMkPV5kiP2vu0iMk_u4LyzKr1tG02L6wYTHX7yEQ="
              alt=""
            />
          </div>
          <div className={styles["about__right-side"]}>
            <h3 className={styles["about__title"]}>Tech Blog</h3>
            <p className={styles["about__description"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae rerum obcaecati quos sed quam autem perferendis quis
              fugiat eius officia. Odit et in laborum itaque nulla iure nobis
              mollitia ut.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur labore aliquid unde id quae cumque, saepe voluptatum
              illo dolorum veritatis cupiditate libero pariatur quas quasi
              quidem repellendus voluptate temporibus at.
            </p>
          </div>
        </div>
        <div className={styles["about__container"]}>
          <div className={styles["about__left-side"]}>
            <img
              src="https://media.istockphoto.com/id/1322205588/photo/cropped-shot-of-three-young-businessmpeople-working-together-on-a-laptop-in-their-office-late.jpg?b=1&s=612x612&w=0&k=20&c=rIMVMkPV5kiP2vu0iMk_u4LyzKr1tG02L6wYTHX7yEQ="
              alt=""
            />
          </div>
          <div className={styles["about__right-side"]}>
            <h3 className={styles["about__title"]}>Tech Blog</h3>
            <p className={styles["about__description"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae rerum obcaecati quos sed quam autem perferendis quis
              fugiat eius officia. Odit et in laborum itaque nulla iure nobis
              mollitia ut.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur labore aliquid unde id quae cumque, saepe voluptatum
              illo dolorum veritatis cupiditate libero pariatur quas quasi
              quidem repellendus voluptate temporibus at.
            </p>
          </div>
        </div>
      </section>
    );
};

export default About;