import SingleBlogHeading from '@/components/SingleBlogHeading/SingleBlogHeading'
import styles from '../styles.module.css'
import Image from 'next/image'
import BlogCommentSection from '@/components/BlogCommentSection/BlogCommentSection'
import Footer from '@/components/Footer/Footer'


const page = () => {
  return (
    <div>
      <SingleBlogHeading/>
      <div className={styles.main_containar}>

        <div className={styles.blog_containar}>
          <article>
          <h1 className={styles.heading_one}>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
          <p className={styles.desc}>😉 John Doe  | 📅 27.07.2020 10:10  | ✉ 3 comments</p>
          <div className='flex justify-center h-full max-w-full max-h-full'>
           <Image src="/images/blog-image-1-940x460.jpg" alt="Our Goals" height={100} width={2000} className='border rounded-lg'/>
          </div>
          <p className='text-justify mb-8 mt-6 text-slate-500 text-sm'>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.</p>
          <p className='text-justify mb-8 text-slate-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nihil magnam magni perferendis sit, inventore maxime architecto ab officia illum vitae veritatis asperiores laborum quaerat ratione omnis, possimus, sunt quae?</p>
          <p className='text-justify mb-8 text-slate-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus amet, corporis corrupti quod illum id autem assumenda nostrum quo, odio libero dolorum. Expedita, enim non voluptatibus qui veritatis iste ad? Voluptates natus dolor, minus culpa magnam! Iusto blanditiis beatae laudantium.</p>
          <p className='text-justify mb-20 text-slate-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolor nemo optio facere impedit fugiat obcaecati blanditiis tempora inventore sapiente beatae aspernatur vitae fuga totam possimus eveniet, praesentium maiores! Dolorum illum voluptates ipsum aspernatur explicabo numquam, aliquid a amet, deleniti eos suscipit totam laudantium excepturi voluptatum fugiat eum nesciunt minus iste, expedita provident temporibus, alias possimus veritatis aut fugit? Eaque.</p>
          </article>
          <BlogCommentSection/>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default page
