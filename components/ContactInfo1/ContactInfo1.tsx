import Image from 'next/image'
import styles from './ContactInfo1.module.css'
import Link from 'next/link'
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
const ContactInfo1 = () => {
  return (
    <div className={styles.containar}>
      
        <div className={styles.main_containar}>

            <div className={styles.tital}>
                <h1 className={styles.heading}> <span className='text-slate-800'>CONTACT </span><span className='text-orange-800'> INFO</span> </h1>
                <div className={styles.img_div}>
                    <Image className={styles.center_img} src={"/images/line-dec.png"} alt="~" height={100} width={50}/>  
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.grid}>

                    <div className={styles.card}>
                        <span className={styles.imag_div}><IoCallSharp /></span> <span className={styles.desc_div}><Link href={'/'}>+92030-40604-459</Link></span>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.imag_div}><MdEmail /></span> <span className={styles.desc_div}><Link href={'/'}>muhammadf4060@gmail.com</Link></span>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.imag_div}><ImLocation2 /></span> <span className={styles.desc_div}><Link href={'/'}>R-484 Rafi Bunglow's <br /> Malir-15 Karachi</Link></span>
                    </div>

                </div>
            </div>

        </div>

    </div>
  )
}

export default ContactInfo1
