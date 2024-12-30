import styles from './ContantInfo2.module.css'
const ContantInfo2 = () => {
  return (
    <div className={styles.main_containar}>

        <div className={styles.containar}>
            <div className={styles.left_div}>

                <div className={styles.left_div_two}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique in excepturi pariatur quia?
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
