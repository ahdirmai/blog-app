import React from "react";
import styles from "./cardList.module.css";
import { Card } from "../card/Card";
import Pagination from "../pagination/Pagination";

export const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
      </div>

      <Pagination />
    </div>
  );
};
