import { Inter } from "@next/font/google";
import styles from "/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <Link href="/">
          <div className={styles.headerTitle}>
            {" "}
            AWESOME
            <br />
            FOOD
            <br /> STORE
          </div>
        </Link>
        <div className={styles.headerMenuBox}>
          <div className={styles.headerMenu}>
            <Link href="/about">ABOUT</Link>
          </div>
          <div className={styles.headerMenu}>
            <Link href="/store">STORE</Link>
          </div>
        </div>
        <div className={styles.headerImage}>
          <img src="https://www.common-ground.co.kr/images/c-header-logo.png" />
        </div>
      </div>
    </>
  );
}
