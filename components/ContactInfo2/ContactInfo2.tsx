import styles from './ContactInfo2.module.css'
const ContantInfo2 = () => {
  return (
    <div className={styles.main_containar}>

        <div className={styles.containar}>
            <div className={styles.left_div}>

                <div className={styles.left_div_two}>
                    <iframe className={styles.frame} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860.774329162915!2d67.18592927414169!3d24.878773844526794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339fe82b48417%3A0xd40b075ee3f123c4!2sMalir%2015%20Flyover%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e1!3m2!1sen!2s!4v1735897977442!5m2!1sen!2s" loading="lazy" ></iframe>
                </div>

            </div>
            <div className={styles.right_div}>
                <div className={styles.right_div_two}>

                    <div className={styles.right_form}>
                   
                        <div className={styles.one}>
                        <input type="text" className={styles.one_inp} placeholder='Your Name*' required/>
                        <input type="email" className={styles.one_inp} placeholder='Your Email*' required/>
                        </div>
                        <div className={styles.two}>
                            <input type="text" className={styles.two_inp} name="Subject" placeholder='Subject' />
                        </div>
                        <div className={styles.three}>
                            <textarea id="message" className={styles.three_inp} name="message" placeholder='Your Message'></textarea>
                        </div>
                        <div className={styles.four}>
                            <button className={styles.btn} type='button'>Send Message</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ContantInfo2
