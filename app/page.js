import FeaturedSlider from "@/components/FeaturedSlider/FeaturedSlider";
import Topics from "@/components/Topics/Topics";


export default function Home() {
  return (
    <>
      <main>
        <Topics></Topics>
        <FeaturedSlider></FeaturedSlider>

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
