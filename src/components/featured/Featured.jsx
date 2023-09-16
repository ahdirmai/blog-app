import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b> Heii, Ahdirmai Here!! </b>consectetur adipisicing elit. Tempora.
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="/p1.jpeg"
            alt="featured"
            layout="fill"
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            facere ex sunt.
          </h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos,
            dolorem minima ea amet nisi dolorum nemo odit porro et, enim
            pariatur voluptate tempora repellendus? Voluptates dolorem fuga
            optio. Tempora ipsum eaque laborum neque? Suscipit eaque laborum
            veniam nulla similique? Aliquid saepe asperiores pariatur eos
            veritatis nostrum quo exercitationem unde?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};
