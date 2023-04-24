import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.bodyContainer}>
          <div className={styles.bodyImage}>
            <img src="https://www.common-ground.co.kr/images/c-main-image.jpg" />
          </div>
          <div className={styles.bodyTextBox}>
            <h1 className={styles.bodyTextTitle}>STREET YOUTH CULTURE</h1>
            <div className={styles.bodyText}>
              200개의 컨테이너로 구성된 국내 최대 컨테이너 팝업 쇼핑몰
              커먼그라운드에서는
              <br />
              색다른 쇼핑의 재미와 다양한 미식 브랜드들을 만나보실 수 있습니다.
              <br />
              젊고 유니크한 CULTURE를 향유하는 YOUTH를 위한 복합문화공간,
              <br />
              커먼그라운드에서 기존의 쇼핑몰에서 느낄 수 없었던 다채로운
              즐거움을 경험해보세요.
            </div>
          </div>
        </div>
        <div className={styles.footerLine}></div>
        <Footer />
      </main>
    </>
  );
}
