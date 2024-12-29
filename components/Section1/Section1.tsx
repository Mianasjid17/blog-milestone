import styles from "./Section1.module.css";
import Image from "next/image";
import Link from "next/link";

const Section1 = () => {
  return (
    <div>
      <div className={styles.main_containar}>
        <div className={styles.containar}>
          <div className={styles.text_containar}>
            <h1 className={styles.containar_heading_one}>
              <span className="text-slate-800">Featured</span>{" "}
              <span className="text-orange-600">Blog posts</span>
            </h1>
            <Image
              className={styles.center_img}
              src={"/images/line-dec.png"}
              alt="~"
              height={30}
              width={50}
            />
            <p className={styles.containar_heading_two}>
              Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
              viverra <br /> ipsum dolor, ultricies fermentum massa consequat
              eu.
            </p>
          </div>

          <div className={styles.image_containar}>
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5">

                <div className="space-y-4">
                  <div className="bg-white p-4 shadow rounded h-40 content-center text-center">
                    <h2 className="text-red-500 font-bold">
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing.
                    </h2>
                  </div>
                  <div className="bg-white p-4 shadow rounded h-40 content-center text-center">
                    <h2 className="text-gray-800 font-bold">
                      Aspernatur Excepturi Magni, Placeat Rerum Nobis Magnam
                      Libero! Soluta.
                    </h2>
                  </div>
                  <div className="bg-white p-4 shadow rounded h-40 content-center text-center">
                    <h2 className="text-gray-800 font-bold">
                      Sunt Hic Recusandae Vitae Explicabo Quidem Laudantium
                      Corrupti Non Adipisci Nihil.
                    </h2>
                  </div>
                  <button className={styles.btnn}>Read More</button>
                </div>
 
                <div className="md:col-span-2 bg-white p-6 shadow rounded">
                  <img
                    alt="A desk with a laptop, flowers, and other office supplies"
                    className="w-full rounded mb-4"
                    height="300"
                    src="/images/blog-image-1-940x460.jpg"
                    width="600"
                  />
                  <h2 className="text-gray-800 font-bold text-xl mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </h2>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <span className="mr-2">
                      <i className="fas fa-user"></i>
                      John Doe
                    </span>
                    <span className="mr-2">
                      <i className="fas fa-calendar-alt"></i>
                      27.07.2020 10:10
                    </span>
                    <span>
                      <i className="fas fa-comments"></i>
                      15 comments
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Phasellus convallis mauris sed elementum vulputate. Donec
                    posuere leo sed dui eleifend hendrerit. Sed suscipit
                    suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum
                    sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat
                    imperdiet, molestie nunc ut, accumsan diam.
                  </p>
                  <button className="bg-red-500 text-white font-bold py-2 px-4 rounded shadow">
                    CONTINUE READING
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
