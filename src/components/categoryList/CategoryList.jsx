import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

export const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popoular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            className={styles.image}
            alt=""
            width={32}
            height={32}
          />
          Style
        </Link>

        <Link
          href="/blog?cat=fashion"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src="/fashion.png"
            className={styles.image}
            alt=""
            width={32}
            height={32}
          />
          Fashion
        </Link>

        <Link
          href="/blog?cat=food"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src="/food.png"
            className={styles.image}
            alt=""
            width={32}
            height={32}
          />
          Food
        </Link>

        <Link
          href="/blog?cat=travel"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src="/travel.png"
            className={styles.image}
            alt=""
            width={32}
            height={32}
          />
          Travel
        </Link>

        <Link
          href="/blog?cat=culture"
          className={`${styles.category} ${styles.culture}`}
        >
          <Image
            src="/culture.png"
            className={styles.image}
            alt=""
            width={32}
            height={32}
          />
          Culture
        </Link>

        <Link
          href="/blog?cat=coding"
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src="/coding.png"
            className={styles.image}
            alt=""
            width={32}
            height={32}
          />
          Coding
        </Link>
      </div>
    </div>
  );
};
