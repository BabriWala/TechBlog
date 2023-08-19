import React from 'react';
import styles from './featuredBlog.module.css'

const FeaturedBlog = () => {

    return (
        <section className={`container ${styles["featured-blog"]}`}>
        <h2 className={styles["featured-blog__title"]}>Best Topics</h2>
        <div className={styles["featured-blog__items-container"]}>
          <div className={styles["featured-blog-item"]}>
            <span className={styles["featured-blog-item__tag"]}>JavaScript</span>
            <div className={styles["featured-blog-item__container"]}>
              <h6 className={styles["featured-blog-item__date"]}>03.03.2003</h6>
              <h4 className={styles["featured-blog-item__title"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                fuga?
              </h4>
              <p className={styles["featured-blog-item__description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                quaerat ea illum perspiciatis laborum, eaque aliquid aspernatur
                ipsa, assumenda repellendus laudantium accusamus blanditiis sit
                earum. Officiis quidem numquam alias nostrum.
              </p>
            </div>
          </div>
          <div className={styles["featured-blog-item"]}>
            <span className={styles["featured-blog-item__tag"]}>JavaScript</span>
            <div className={styles["featured-blog-item__container"]}>
              <h6 className={styles["featured-blog-item__date"]}>03.03.2003</h6>
              <h4 className={styles["featured-blog-item__title"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                fuga?
              </h4>
              <p className={styles["featured-blog-item__description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                quaerat ea illum perspiciatis laborum, eaque aliquid aspernatur
                ipsa, assumenda repellendus laudantium accusamus blanditiis sit
                earum. Officiis quidem numquam alias nostrum.
              </p>
            </div>
          </div>
          <div className={styles["featured-blog-item"]}>
            <span className={styles["featured-blog-item__tag"]}>JavaScript</span>
            <div className={styles["featured-blog-item__container"]}>
              <h6 className={styles["featured-blog-item__date"]}>03.03.2003</h6>
              <h4 className={styles["featured-blog-item__title"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                fuga?
              </h4>
              <p className={styles["featured-blog-item__description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                quaerat ea illum perspiciatis laborum, eaque aliquid aspernatur
                ipsa, assumenda repellendus laudantium accusamus blanditiis sit
                earum. Officiis quidem numquam alias nostrum.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default FeaturedBlog;