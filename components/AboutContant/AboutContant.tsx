import Link from "next/link";
import styles from "./AboutContant.module.css";
import Image from "next/image";
import { GoGoal } from "react-icons/go";
import { MdOutlineWork } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const Aboutcontant = () => {
  return (
    <div className={styles.main_containar}>
      <div className={styles.containar}>
        <div className={styles.left}>
          <div className={styles.left_card}>
            <Link href={"#tabs_1"}>
              <h1>
                {" "}
                <GoGoal className="text-xl" /> Our Goals
              </h1>
            </Link>
          </div>
          <div className={styles.left_card}>
            <Link href={"#tabs_2"}>
              <h1>
                <MdOutlineWork className="text-xl" /> Our Work
              </h1>
            </Link>
          </div>
          <div className={styles.left_card}>
            <Link href={"#tabs_3"}>
              <h1>
                <FaHeart className="text-xl" /> Our Passion
              </h1>
            </Link>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.tabs_content}>
            <article id="tabs_1">
              <Image
                src="/images/about-image-1-940x460.jpg"
                alt="Our Goals"
                height={100}
                width={800}
              />
              <h4 className={styles.artical_tital}>Our Goals</h4>

              <p className="mb-8">
                Phasellus convallis mauris sed elementum vulputate. Donec
                posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit
                erat, sed vehicula ligula. Aliquam ut sem fermentum sem
                tincidunt lacinia gravida aliquam nunc. Morbi quis erat
                imperdiet, molestie nunc ut, accumsan diam.
              </p>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                aspernatur natus dignissimos eos quod, odio.
              </p>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                cupiditate ullam exercitationem molestiae illum? Nam magni,
                saepe sint maiores vitae!
              </p>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                suscipit commodi impedit unde accusantium nam incidunt tenetur,
                libero maiores enim! Nisi ex odit, totam nihil doloribus. Nemo
                ut, eos consequatur libero aut quas dolorum ipsa, quidem, totam
                dicta id possimus dolores distinctio laboriosam doloribus
                voluptates tenetur consectetur inventore aliquid dolorem?
              </p>
            </article>
            <article id="tabs_2">
              <Image
                src="/images/about-image-2-940x460.jpg"
                alt="Our Work"
                height={100}
                width={800}
              />
              <h4 className={styles.artical_tital}>Our Work</h4>
              <p className="mb-8">
                Integer dapibus, est vel dapibus mattis, sem mauris luctus leo,
                ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in
                ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper
                at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque ut accusantium cum! Ad quisquam, aut praesentium
                magni pariatur ipsa! Soluta deserunt accusantium repellendus
                ratione quam hic facere, cupiditate iste obcaecati a, officiis
                ipsum aspernatur in?
              </p>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                a necessitatibus eos vitae quibusdam quo sunt officiis rerum
                voluptatibus non natus eius placeat officia vel quaerat,
                reprehenderit obcaecati, eaque? Repudiandae ad facere culpa
                accusamus aliquam ab assumenda reiciendis corrupti cum nemo,
                cumque molestiae corporis deserunt!
              </p>
            </article>
            <article id="tabs_3">
              <Image
                src="/images/about-image-3-940x460.jpg"
                alt="Our Passion"
                height={100}
                width={800}
              />
              <h4 className={styles.artical_tital}>Our Passion</h4>
              <p className="mb-8">
                Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id
                auctor neque posuere sit amet. Aliquam pharetra, augue vel
                cursus porta, nisi tortor vulputate sapien, id scelerisque felis
                magna id felis. Proin neque metus, pellentesque pharetra semper
                vel, accumsan a neque.
              </p>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                aut beatae commodi repudiandae distinctio, magnam blanditiis
                reiciendis vitae velit voluptatum natus, fugit quis eos dolores!
              </p>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                adipisci reiciendis quaerat qui earum aut, atque esse quisquam
                quis exercitationem sapiente, dolorum consequatur consequuntur
                voluptatibus ipsam, fuga magnam beatae optio nam. Recusandae ut
                aliquid, eligendi.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutcontant;
