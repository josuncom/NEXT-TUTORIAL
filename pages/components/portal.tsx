import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "/styles/Home.module.css";
import Link from "next/link";

const Portal = ({ show, onClose, imgUrl, name, description, url }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeModal = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={styles.modalWrap}>
      <img className={styles.modalImage} src={imgUrl} />

      <div className={styles.modalTextBox}>
        <div className={styles.modalCloseBtn} onClick={closeModal}>
          ✖
        </div>
        <div className={styles.modalTitle}>{name}</div>
        <div className={styles.modalDesc}> {description}</div>
        {url !== undefined ? (
          <a
            className={styles.modalUrl}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            홈페이지 바로가기
          </a>
        ) : (
          <a
            className={styles.modalUrl2}
            onClick={() => alert("준비 중입니다!")}
            rel="noopener noreferrer"
          >
            홈페이지 바로가기
          </a>
        )}
      </div>
    </div>
  ) : null;

  if (mounted) {
    return createPortal(modalContent, document.querySelector("#portal"));
  } else {
    return null;
  }
};

export default Portal;
