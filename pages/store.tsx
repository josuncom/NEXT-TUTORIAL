import axios from "axios";
import { useState, useEffect, React } from "react";
import styles from "@/styles/Home.module.css";
import Header from "./components/header";
import Portal from "./components/portal";
import Footer from "./components/footer";

export default function Store() {
  const [db, setDb] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [foodInfo, setFoodInfo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/stores").then((response) => {
      setDb(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.storeTitleBox}>
        <h1 className={styles.storeTitle}>AWESOME FOOD</h1>
        <div className={styles.storeLine}></div>
      </div>
      <div className={styles.storeContentContainer}>
        <Portal
          imgUrl={foodInfo[0]}
          name={foodInfo[1]}
          description={foodInfo[2]}
          url={foodInfo[3]}
          show={showModal}
          onClose={() => setShowModal(false)}
        >
          HELLO
        </Portal>
        <h1 className={styles.storeContentTitle}>EAT</h1>
        <div className={styles.storeContentBox}>
          {db.map((data) => {
            return (
              <div className={styles.foodBox} key={data.name}>
                <img
                  onClick={() => {
                    setShowModal(true);
                    setFoodInfo([
                      data.image,
                      data.name,
                      data.description,
                      data.url,
                    ]);
                  }}
                  className={styles.foodImage}
                  src={data.thumb}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.storeLine2}></div>
      <Footer />
    </div>
  );
}
