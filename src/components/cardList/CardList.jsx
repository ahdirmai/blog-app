import React from "react";
import styles from "./cardList.module.css";
import { Pagination } from "../pagination/pagination";

export const CardList = () => {
  return (
    <div className={styles.container}>
      CardList
      <Pagination />
    </div>
  );
};
