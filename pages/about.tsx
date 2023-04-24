import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import styles from "@/styles/Home.module.css";

export default function About() {
  return (
    <>
      <Header />
      <div className={styles.aboutContainer}>
        <div className={styles.aboutBox}>
          <div className={styles.aboutTitleBox}>
            <h1 className={styles.aboutTitle}>홈페이지</h1>
          </div>
          <Image
            className={styles.aboutImage}
            src="/images/home.png"
            width={500}
            height={320}
            alt="이미지"
          />
          <div className={styles.aboutDesc}>
            <br />- 커먼그라운드 eat 페이지를 참고해서 만들었습니다.
            <br /> - 헤더 가장 왼쪽 버튼을 클릭해서 홈페이지로 갈 수 있습니다.
            <br /> - ABOUT 버튼을 눌러 프로젝트 정보를 확인할 수 있습니다.
            <br /> - STORE 버튼을 눌러 프로젝트 내용을 확인할 수 있습니다.
          </div>
        </div>

        <div className={styles.aboutBox}>
          <div className={styles.aboutTitleBox}>
            <h1 className={styles.aboutTitle}>STORE 페이지</h1>
          </div>
          <Image
            className={styles.aboutImage}
            src="/images/store.png"
            width={500}
            height={320}
            alt="이미지2"
          />
          <div className={styles.aboutDesc}>
            <br />- flex display를 통해 그리드 형태로 디자인했습니다.
            <br /> - 원하는 아이템을 클릭해서 상세 정보 팝업을 확인할 수
            있습니다.
            <br /> - Axios(GET)를 통해 json-server의 데이터를 받아옵니다.
            <br /> - Footer의 정보는 커먼그라운드 내용을 참고했습니다.
          </div>
        </div>
        <div className={styles.aboutBox}>
          <div className={styles.aboutTitleBox}>
            <h1 className={styles.aboutTitle}>STORE 페이지</h1>
          </div>
          <Image
            className={styles.aboutImage}
            src="/images/modal.png"
            width={500}
            height={320}
            alt="이미지3"
          />
          <div className={styles.aboutDesc}>
            <br />- Axiod(GET)을 통해 json-server로부터 데이터를 받아와 각
            가게에 대한 정보를 출력합니다.
            <br />- 홈페이지 URL이 있을 경우 홈페이지 바로가기 버튼이 활성화,
            없을 경우 비활성화됩니다.
            <br /> - 우측 상단의 X 버튼을 눌러 창을 닫을 수 있습니다.
          </div>
        </div>
      </div>
      <div className={styles.storeLine2}></div>
      <Footer />
    </>
  );
}
