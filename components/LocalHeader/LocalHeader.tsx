'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from './LocalHeader.module.css';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from 'next/image';

const LocalHeader = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id='home'>

      <div className={styles.bg_img_container}>
        {/* <video autoPlay muted loop className={styles.bg_video}>
          <source src="/images/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <Image className={styles.bg_img} src={'/images/banner-image-1-1920x500.jpg'} alt='' height={100} width={1000}/>

            <div className={styles.navbar}>

                <div className={styles.logo_div}>
                    <h1> <span className={styles.blog_word}>BLOG</span> <span className='text-orange-700'>WEBSITE</span> </h1>
                </div>

                <div className={`${styles.ul_div} ${isMenuOpen ? styles.menu_open : "" }`}>
                <ul className={styles.ul}>
                    <Link className={styles.li_Link} href={'/'}><li>HOME</li></Link>
                    <Link className={styles.li_Link} href={''}><li>BLOG</li></Link>
                    <Link className={styles.li_Link} href={''}><li>ABOUT US</li></Link>
                    <Link className={styles.li_Link} href={''}><li>AUTHORS</li></Link>
                    <Link className={styles.li_Link} href={'/contant'}><li>CONTACT</li></Link>
                </ul>
                </div>

                <div className={styles.hamburger} onClick={toggleMenu}>
                    {isMenuOpen ? (<AiOutlineClose size={30} />) : (<AiOutlineMenu size={30} /> )}</div>
                </div>

        <div className={styles.content}>
          <h1 className={styles.heading_two}>Feel free to <span className='text-orange-700'>Contact Us</span></h1>
          <p className={styles.heading_one}>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula</p>
        </div>
      </div>

    </div>
  );
};

export default LocalHeader;
