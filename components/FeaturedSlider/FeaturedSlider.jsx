import React from 'react';
import styles from './featuredSlider.module.css'

const FeaturedSlider = () => {
    return (
        <section className={styles["featured-slider"]}>
        <div className={`container ${styles["featured-slider__container"]}`}>
          <span className={styles["featured-slider__tag"]}>Java</span>
          <h2 className={styles["featured-slider__title"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            at.
          </h2>
          <p className={styles["featured-slider__description"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis adipisci praesentium eligendi expedita tenetur eius
            mollitia vero minima! Amet veniam error iusto omnis obcaecati
            officia consequatur optio excepturi natus vero.
          </p>
          <div className="horizontal-container">
            <span className="horizontal-line"></span>
            <span className="banner__date">06.06.2006</span>
            <span className="horizontal-line"></span>
          </div>
        </div>
      </section>
    );
};

export default FeaturedSlider;