'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>

      <div className={styles.bg_video_container}>
        <video autoPlay muted loop className={styles.bg_video}>
          <source src="/images/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

            <div className={styles.navbar}>

                <div className={styles.logo_div}>
                    <h1> <span className={styles.blog_word}>BLOG</span> <span className='text-orange-700'>WEBSITE</span> </h1>
                </div>

                <div className={`${styles.ul_div} ${isMenuOpen ? styles.menu_open : "" }`}>
                <ul className={styles.ul}>
                    <Link className={styles.li_Link} href={'/'}><li className='text-red-700'>HOME</li></Link>
                    <Link className={styles.li_Link} href={'/blog'}><li>BLOG</li></Link>
                    <Link className={styles.li_Link} href={'/about'}><li>ABOUT US</li></Link>
                    <Link className={styles.li_Link} href={''}><li>AUTHORS</li></Link>
                    <Link className={styles.li_Link} href={'/contact'}><li>CONTACT</li></Link>
                </ul>
                </div>

                <div className={styles.hamburger} onClick={toggleMenu}>
                    {isMenuOpen ? (<AiOutlineClose size={30} />) : (<AiOutlineMenu size={30} /> )}</div>
                </div>

        <div className={styles.content}>
          <h1 className={styles.heading_one}>Lorem ipsum dolor sit amet</h1>
          <p className={styles.heading_two}><span className='text-orange-700'>Blog</span> mollia amenda</p>
          <Link href={'/contact'}>
          <button className={styles.btn} type="button">CONTACT US</button>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Header;
