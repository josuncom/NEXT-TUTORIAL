import { Inter } from "@next/font/google";
import styles from "/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerText1}>서울특별시 밥먹구 카페로 300</div>
        <br />
        <div className={styles.footerText2}>
          코오롱인더스트리(주)FnC부문 커먼그라운드 대표이사: 유석진
          법인등록번호: 321-85-00020 서울특별시 강남구 삼성로 518 (삼성동)
        </div>
        <br />
        <br />
        <div className={styles.footerText3}>© 2023 조은</div>
      </div>
    </>
  );
}
