"use client"
import { signIn, useSession } from "next-auth/react";
import styles from "./blog.module.css";
import Link from "next/link";

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export default async function Blgos() {

  const session = useSession();
  console.log(session)

  const posts = await getData()


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
          <button onClick={()=> signIn("google")}>Sign IN</button>
        </span>
        <span className={styles["see-all"]}>View All</span>
      </div>
      <div className={styles["topics-container"]}>
        {
          posts.map(post => <div className={styles["topics-items-container"]} key={post.id}>
          <div className={styles["topics-image-container"]}>
            <img
              src="https://images.pexels.com/photos/11035363/pexels-photo-11035363.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <span>JavaScript</span>
          </div>
          <h6 className={styles["topics-items__date"]}>03.03.2003</h6>
          <h4 className={styles["topics-items__title"]}>
            {(post.title)}
          </h4>
          <p className={styles["topics-items__description"]}>
            {post.body}
          </p>
          <div></div>
          <Link href={`/blogs/${post.id}`}><button  className={`btn ${styles["topics__btn"]}`}>Read More</button></Link>
        </div>)
        }
        

      </div>

    </section>
  );
}
