import React from "react";

import styles from "./authLinks.module.css";
import Link from "next/link";

export const AuthLinks = () => {
  // const [state, setstate] = useState(initialState);

  const status = "authenticated";

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>logout</span>
        </>
      )}
    </>
  );
};
