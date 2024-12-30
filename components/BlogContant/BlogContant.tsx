import styles from './BlogContant.module.css'
import Image from 'next/image'

const BlogContant = () => {
  return (
    <div className={styles.main_containar}>
    <div className={styles.containar}>

      <div className={styles.right}>
        <div className={styles.tabs_content}>

          <article>
            <Image
              src="/images/blog-image-1-940x460.jpg"
              alt="Our Goals"
              height={100}
              width={800}
              className='border rounded-lg'
            />
            <h4 className={styles.artical_tital}>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
            <p className="mb-4 text-sm">😉 John Doe  | 📅 27.07.2020 10:10  | ✉ 15 comments</p>
            <p className="mb-10">
            Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.
            </p>
            <button className={styles.btn}>CONTINUE READING</button>

          </article>

          <article>
            <Image
              src="/images/blog-image-2-940x460.jpg"
              alt="Our Goals"
              height={100}
              width={800}
              className='border rounded-lg'
            />
            <h4 className={styles.artical_tital}>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
            <p className="mb-4 text-sm">😉 John Doe  | 📅 27.07.2020 10:10  | ✉ 15 comments</p>
            <p className="mb-10">
            Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.
            </p>
            <button className={styles.btn}>CONTINUE READING</button>

          </article> <article>
            <Image
              src="/images/blog-image-3-940x460.jpg"
              alt="Our Goals"
              height={100}
              width={800}
              className='border rounded-lg'
            />
            <h4 className={styles.artical_tital}>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
            <p className="mb-4 text-sm">😉 John Doe  | 📅 27.07.2020 10:10  | ✉ 15 comments</p>
            <p className="mb-10">
            Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.
            </p>
            <button className={styles.btn}>CONTINUE READING</button>

          </article>
          
        </div>
      </div>

      <div className={styles.left}>

        <div className={styles.left_card}>
            <h1 className={styles.heading_one}>Search</h1>
            <input className={styles.inp} type="search" placeholder='type to search...'/>
            <h2 className={styles.heading_two}>Recent Posts</h2>
            <p className={styles.pera}>Dolorum corporis ullam, reiciendis inventore est repudiandae</p>
            <h3 className={styles.heading_three}>😉 John Doe  | 📅  27.07.2020 10:10</h3>

            <p className={styles.pera}>Dolorum corporis ullam, reiciendis inventore est repudiandae</p>
            <h3 className={styles.heading_three}>😉 John Doe  | 📅  27.07.2020 10:10</h3>

            <p className={styles.pera}>Dolorum corporis ullam, reiciendis inventore est repudiandae</p>
            <h3 className={styles.heading_three}>😉 John Doe  | 📅  27.07.2020 10:10</h3>
        </div>
        

      </div>

    </div>
  </div>
  )
}

export default BlogContant
