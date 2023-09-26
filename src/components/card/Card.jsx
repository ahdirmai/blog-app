import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

export const Card = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.post}> */}
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            praesentium!
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          distinctio voluptate at ab laudantium hic, fuga a modi, sit soluta
          dolores unde! Repellendus, non earum vero eligendi magni est suscipit?
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
    // </div>
  );
};
