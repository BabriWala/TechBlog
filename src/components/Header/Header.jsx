"use client"
import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { signOut, useSession } from "next-auth/react";
import {usePathname} from 'next/navigation';


const Header = () => {

  const {data, status} = useSession()
  const pathname = usePathname();
  console.log(pathname)
  // console.log(data, status)

  return (
    <header className={pathname == '/' ? styles.header : styles['main-header']} id="header">
      <nav className={pathname == '/' ? styles.nav : styles['header-nav']}>
        <div className={`${styles.container} container`}>
          <div>
            <span className={styles.logo}>TechBlog</span>
          </div>
          <div>
            <ul className={styles["nav-link-container"]}>
              <li>
                <Link href="/#header">Home</Link>
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
          <div className={styles.social}>
            <li>
              <a href="#">
              <BsFacebook className={`${styles["fa-brands"]} fa-facebook`}></BsFacebook>
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillInstagram className={`${styles["fa-brands"]} fa-instagram`}></AiFillInstagram>
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillLinkedin className={`${styles["fa-brands"]} fa-linkedin`}></AiFillLinkedin>
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillGithub className={`${styles["fa-brands"]} fa-github`}></AiFillGithub>
              </a>
            </li>
            {
              data?.user?.email ?
              <button onClick={()=>signOut()} className="btn">Log Out</button>
              :
              <button className="btn"><Link href="/signin">Log In</Link></button>
            }
            
          </div>
        </div>
      </nav>
      {
        pathname == '/' && 
        <section id="banner" className={`${styles.container} banner-section`}>
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
      }
    </header>
  );
};

export default Header;
