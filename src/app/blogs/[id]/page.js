import React from "react";

async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }


const page = async ({params}) => {
    const data = await getData(params.id);
    console.log(data)
    console.log(params.id)
  return (
    <main>
      <section className="container blog">
        <div className="blog__author">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="blog__author-image"
          />
          <div className="blog__author-container">
            <h6 className="blog__author-designation">
              {/* {params.id} */}
            </h6>
            <p className="blog__author-description">Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="blog__author-social">
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </div>
        <div className="horizontal-container blog__horizontal">
          <span className="horizontal-line"></span>
          <span className="banner__date">03.05.2023</span>
          <span className="horizontal-line"></span>
        </div>
        <h1>{data.title}</h1>
        <p className="blog__description">
          {data.body}
        </p>
        <div className="blog__banner-tag">
          <h6 className="banner__tag blog__tag">JavaScript</h6>
          <h6 className="banner__tag blog__tag">JavaScript</h6>
          <h6 className="banner__tag blog__tag">JavaScript</h6>
        </div>
      </section>

      <section className="container featured-blog">
        <h2 className="featured-blog__title">Related Post</h2>
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
  );
};

export default page;
