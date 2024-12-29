import Image from "next/image";
import styles from "./Section2.module.css";

const Section2 = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-70 text-white text-center px-4">
          <h1 className="text-3xl font-bold mt-8 mb-8">
            READ <span className="text-red-500">ABOUT US</span>
          </h1>
          <div>
            <Image
              src={"/images/line-dec.png"}
              alt="~"
              height={40}
              width={40}
            />
          </div>
          <div className="my-4">
            <i className="fas fa-wave-square text-red-500 text-2xl"></i>
          </div>
          <p className="max-w-lg mb-8">
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
            viverra ipsum dolor, ultricies fermentum massa consequat eu.
          </p>
          <p className="max-w-2xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            deleniti voluptas enim! Provident consectetur id earum ducimus
            facilis, aspernatur hic, alias, harum rerum velit voluptas,
            voluptate enim! Eos, sunt, quidem.
          </p>
          <p className="max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            nulla quo cum officia laboriosam. Amet tempore, aliquid quia eius
            commodi, doloremque omnis delectus laudantium dolor reiciendis non
            nulla! Doloremque maxime quo eum in culpa mollitia similique eius
            doloribus voluptatem facilis! Voluptatibus, eligendi, illum.
            Distinctio, non!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
