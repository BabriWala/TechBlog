import Topics from "@/components/Topics/Topics";


export default function Home() {
  return (
    <>
      <main>
        <Topics></Topics>
      <section className="featured-slider">
        <div className="container featured-slider__container">
          <span className="featured-slider__tag">Java</span>
          <h2 className="featured-slider__title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            at.
          </h2>
          <p className="featured-slider__description">
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

      <section className="container featured-blog">
        <h2 className="featured-blog__title">Best Topics</h2>
        <div className="featured-blog__items-container">
          <div className="featured-blog-item">
            <span className="featured-blog-item__tag">JavaScript</span>
            <div className="featured-blog-item__container">
              <h6 className="featured-blog-item__date">03.03.2003</h6>
              <h4 className="featured-blog-item__title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                fuga?
              </h4>
              <p className="featured-blog-item__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                quaerat ea illum perspiciatis laborum, eaque aliquid aspernatur
                ipsa, assumenda repellendus laudantium accusamus blanditiis sit
                earum. Officiis quidem numquam alias nostrum.
              </p>
            </div>
          </div>
          <div className="featured-blog-item">
            <span className="featured-blog-item__tag">JavaScript</span>
            <div className="featured-blog-item__container">
              <h6 className="featured-blog-item__date">03.03.2003</h6>
              <h4 className="featured-blog-item__title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                fuga?
              </h4>
              <p className="featured-blog-item__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                quaerat ea illum perspiciatis laborum, eaque aliquid aspernatur
                ipsa, assumenda repellendus laudantium accusamus blanditiis sit
                earum. Officiis quidem numquam alias nostrum.
              </p>
            </div>
          </div>
          <div className="featured-blog-item">
            <span className="featured-blog-item__tag">JavaScript</span>
            <div className="featured-blog-item__container">
              <h6 className="featured-blog-item__date">03.03.2003</h6>
              <h4 className="featured-blog-item__title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                fuga?
              </h4>
              <p className="featured-blog-item__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                quaerat ea illum perspiciatis laborum, eaque aliquid aspernatur
                ipsa, assumenda repellendus laudantium accusamus blanditiis sit
                earum. Officiis quidem numquam alias nostrum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
